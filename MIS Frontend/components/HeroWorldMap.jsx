import React, { useEffect, useRef } from 'react'
import { useInView, useReducedMotion } from 'motion/react'

const INK = '#f3f4f6'
const GLITCH_YELLOW = '#f7e500'
const GLITCH_CYAN = '#00c2e0'
const GLITCH_MAGENTA = '#e11d74'
const ROB_X = [1, 0.9986, 0.9954, 0.99, 0.9822, 0.973, 0.96, 0.9427, 0.9216, 0.8962, 0.8679, 0.835, 0.7986, 0.7597, 0.7186, 0.6732, 0.6213, 0.5722, 0.5322]
const ROB_Y = [0, 0.062, 0.124, 0.186, 0.248, 0.31, 0.372, 0.434, 0.4958, 0.5571, 0.6176, 0.6769, 0.7346, 0.7903, 0.8435, 0.8936, 0.9394, 0.9761, 1]
let landCache = null

const decodeArc = (raw, transform, reverse) => {
  const { scale, translate } = transform
  let x = 0
  let y = 0
  const pts = raw.map(([dx, dy]) => {
    x += dx
    y += dy
    return [x * scale[0] + translate[0], y * scale[1] + translate[1]]
  })
  return reverse ? pts.slice().reverse() : pts
}

const ringFromArcs = (topology, indexes) => {
  const pts = []
  indexes.forEach((index, i) => {
    const reverse = index < 0
    const decoded = decodeArc(topology.arcs[reverse ? ~index : index], topology.transform, reverse)
    pts.push(...(i ? decoded.slice(1) : decoded))
  })
  return pts
}

const robinson = (lon, lat) => {
  const alat = Math.min(90, Math.abs(lat))
  const i = Math.min(17, Math.floor(alat / 5))
  const f = alat / 5 - i
  const xk = ROB_X[i] + f * (ROB_X[i + 1] - ROB_X[i])
  const yk = ROB_Y[i] + f * (ROB_Y[i + 1] - ROB_Y[i])
  return [0.8487 * xk * (lon * Math.PI / 180), 1.3523 * yk * (lat < 0 ? -1 : 1)]
}

const loadLand = async () => {
  if (landCache) return landCache
  const topology = await (await fetch('/land-110m.json')).json()
  const multi = topology.objects.land.geometries[0].arcs
  landCache = multi.map((polygon) => polygon.map((ring) => ringFromArcs(topology, ring)))
  return landCache
}

const toScreen = (polygons, w, h) => {
  let minX = Infinity
  let maxX = -Infinity
  let minY = Infinity
  let maxY = -Infinity
  const projected = []

  polygons.forEach((rings) => {
    const next = rings.map((ring) => {
      const pts = []
      ring.forEach(([lon, lat]) => {
        if (lat < -58) return
        const [x, y] = robinson(lon, lat)
        pts.push([x, y])
        if (x < minX) minX = x
        if (x > maxX) maxX = x
        if (y < minY) minY = y
        if (y > maxY) maxY = y
      })
      return pts
    }).filter((ring) => ring.length > 3)
    if (next.length) projected.push(next)
  })

  const s = Math.min(w / (maxX - minX), h / (maxY - minY)) * 0.96
  const ox = (w - (maxX - minX) * s) / 2 - minX * s
  const oy = (h - (maxY - minY) * s) / 2 + maxY * s
  return projected.map((rings) => rings.map((ring) => ring.map(([x, y]) => [x * s + ox, oy - y * s])))
}

const paintMask = (polygons, w, h) => {
  const screen = toScreen(polygons, w, h)
  const mask = document.createElement('canvas')
  mask.width = w
  mask.height = h
  const ctx = mask.getContext('2d')
  ctx.fillStyle = '#000'
  screen.forEach((rings) => {
    ctx.beginPath()
    rings.forEach((ring) => {
      let lastX = null
      let wrapped = false
      ring.forEach(([x, y], i) => {
        if (i === 0 || (lastX !== null && Math.abs(x - lastX) > w * 0.35)) {
          if (i) wrapped = true
          ctx.moveTo(x, y)
        } else ctx.lineTo(x, y)
        lastX = x
      })
      if (!wrapped) ctx.closePath()
    })
    ctx.fill(rings.length > 1 ? 'evenodd' : 'nonzero')
  })
  return ctx.getImageData(0, 0, w, h).data
}

const landAt = (data, w, h, x, y) => {
  const px = Math.min(w - 1, Math.max(0, Math.round(x)))
  const py = Math.min(h - 1, Math.max(0, Math.round(y)))
  return data[(py * w + px) * 4 + 3] >= 40
}

const buildCells = (polygons, cssW, cssH) => {
  const mw = Math.round(cssW)
  const mh = Math.round(cssH)
  const data = paintMask(polygons, mw, mh)
  const compact = cssW < 420
  const colW = compact ? 4.05 : 4.35
  const rowH = compact ? 4.85 : 5.15
  const cols = Math.floor(cssW / colW)
  const rows = Math.floor(cssH / rowH)
  const cells = []

  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      const x = (c + 0.5) * colW
      const y = (r + 0.5) * rowH
      if (!landAt(data, mw, mh, x, y) && !landAt(data, mw, mh, x + 1.1, y) && !landAt(data, mw, mh, x, y + 1.1)) continue
      const i = cells.length
      cells.push({ x, y, bit: (i * 7 + 3) % 2, hot: 0 })
    }
  }

  return { cells, compact }
}

const paintFrame = (canvas, model, glitch, now) => {
  const { cells, compact, cssW, cssH, dpr } = model
  const ctx = canvas.getContext('2d')
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  ctx.clearRect(0, 0, cssW, cssH)
  ctx.font = `700 ${compact ? 7.4 : 8.2}px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  for (let i = 0; i < cells.length; i += 1) {
    const cell = cells[i]
    let x = cell.x
    let color = INK
    if (glitch && cell.y >= glitch.y && cell.y <= glitch.y + glitch.h) {
      x += glitch.dx
      color = i % 5 === 0 ? GLITCH_CYAN : GLITCH_YELLOW
    } else if (glitch && glitch.tear && Math.abs(cell.y - glitch.tearY) < 4) {
      x -= glitch.dx
      color = GLITCH_MAGENTA
    } else if (cell.hot > now) {
      color = GLITCH_YELLOW
    }
    ctx.fillStyle = color
    ctx.fillText(cell.bit ? '1' : '0', x, cell.y)
  }
}

const HeroWorldMap = () => {
  const wrap = useRef(null)
  const canvas = useRef(null)
  const model = useRef(null)
  const inView = useInView(wrap, { amount: 0.2 })
  const reduce = useReducedMotion()
  const live = Boolean(inView && reduce === false)

  useEffect(() => {
    const node = canvas.current
    if (!node) return undefined
    let dead = false
    let raf = 0
    let resizeTimer = 0
    let lastFlip = 0
    let nextGlitch = 900
    let glitch = null

    const sizeCanvas = () => {
      const cssW = node.clientWidth || 640
      const cssH = node.clientHeight || Math.round(cssW * 0.5)
      if (cssW < 40 || cssH < 40) return null
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      node.width = Math.round(cssW * dpr)
      node.height = Math.round(cssH * dpr)
      return { cssW, cssH, dpr }
    }

    const rebuild = () => {
      const sized = sizeCanvas()
      if (!sized) return Promise.resolve()
      return loadLand().then((polygons) => {
        if (dead) return
        model.current = { ...buildCells(polygons, sized.cssW, sized.cssH), ...sized }
        paintFrame(node, model.current, null, 0)
      })
    }

    const tick = (now) => {
      if (dead) return
      const current = model.current
      if (current && live) {
        if (now - lastFlip > 70) {
          lastFlip = now
          const flips = Math.max(10, Math.round(current.cells.length * 0.03))
          for (let n = 0; n < flips; n += 1) {
            const i = Math.floor(Math.random() * current.cells.length)
            current.cells[i].bit ^= 1
            if (n < 9) current.cells[i].hot = now + 180
          }
        }
        if (!glitch && now > nextGlitch) {
          glitch = {
            y: 18 + Math.random() * (current.cssH - 48),
            h: 10 + Math.random() * 16,
            dx: (Math.random() < 0.5 ? -1 : 1) * (5 + Math.random() * 9),
            tear: Math.random() > 0.4,
            tearY: 18 + Math.random() * (current.cssH - 36),
            until: now + 90 + Math.random() * 70,
          }
          nextGlitch = now + 1100 + Math.random() * 1600
        }
        if (glitch && now > glitch.until) glitch = null
        paintFrame(node, current, glitch, now)
      }
      raf = window.requestAnimationFrame(tick)
    }

    rebuild().then(() => {
      if (!dead && live) raf = window.requestAnimationFrame(tick)
    }).catch(() => {})

    const ro = new ResizeObserver(() => {
      window.clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(() => {
        rebuild().catch(() => {})
      }, 60)
    })
    ro.observe(node)
    if (wrap.current) ro.observe(wrap.current)

    return () => {
      dead = true
      window.clearTimeout(resizeTimer)
      window.cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [live])

  return (
    <div className="hero-world" aria-hidden="true" ref={wrap}>
      <canvas className="hero-world-canvas" ref={canvas} />
    </div>
  )
}

export default HeroWorldMap
