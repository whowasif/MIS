import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const PRIMARY_CTA = { href: '/request-custom-quote', label: 'Request Solar Project Consultation' }
const SECONDARY_CTA = { href: '/contact', label: 'Contact our solar team' }

const HEADLINE = 'Solar power projects for organisations in Bangladesh'

const segments = [
  {
    label: 'Corporate',
    title: 'Lower energy cost at factories and offices',
    body: 'Rooftop and carport systems sized to your daytime load, with the payback period worked out before you commit.',
  },
  {
    label: 'Government',
    title: 'Meet tender and audit requirements',
    body: 'BOQs, technical specifications and compliance documents prepared for public procurement and ministry review.',
  },
  {
    label: 'Semi-government',
    title: 'Power campuses, utilities and institutions',
    body: 'Grid-tied and hybrid systems for autonomous bodies, universities and hospitals, phased to your budget cycle.',
  },
  {
    label: 'NGO and development',
    title: 'Bring reliable power to remote sites',
    body: 'Off-grid and battery systems for clinics, schools and field offices, with handover records donors can use.',
  },
]

const development = [
  'Energy audit and feasibility study',
  'System design, yield estimate and payback period',
  'Net-metering and utility application support',
  'Installation, testing and commissioning',
  'Operation and maintenance contracts',
]

const sourcing = [
  'Solar PV modules: mono PERC, TOPCon and bifacial',
  'On-grid, hybrid and off-grid inverters',
  'Lithium (LFP) and lead-acid battery banks',
  'Mounting structures for roofs and open ground',
  'Cables, protection devices and combiner boxes',
  'Monitoring systems and energy meters',
]

const steps = [
  {
    title: 'Survey the site',
    body: 'We inspect the roof or land, check shading and structure, and study 12 months of your electricity bills.',
  },
  {
    title: 'Design the system and proposal',
    body: 'You receive a panel layout, a priced BOQ, a yield estimate and the expected payback period for approval.',
  },
  {
    title: 'Source and install',
    body: 'We procure the approved components and install them under our own site supervision and safety checks.',
  },
  {
    title: 'Commission and hand over',
    body: 'We test and connect the system, train your staff, and hand over drawings, test reports and warranties.',
  },
]

const reasons = [
  {
    title: 'One team from survey to support',
    body: 'Design, sourcing, installation and maintenance sit with one accountable team, so nothing falls between suppliers.',
  },
  {
    title: 'Components you can verify',
    body: 'We quote named brands and models, and hand over invoices and warranty papers for every major component.',
  },
  {
    title: 'Paperwork for procurement',
    body: 'Specifications, BOQs and compliance documents ready for tender committees, auditors and donors.',
  },
  {
    title: 'Support after handover',
    body: 'Our maintenance team covers inspections, cleaning schedules and fault response once the system is running.',
  },
]

const consultationChecklist = [
  'Site address and the roof or land area available',
  'Electricity bills for the last 12 months',
  'Type of organisation and how it procures',
  'Grid-tied, hybrid or off-grid preference, if known',
  'Your target date for commissioning',
]

const BEATS = [
  'Sunlight reaches the array.',
  'The inverter converts it.',
  'The battery stores the surplus.',
  'The lamp comes on.',
]

const SCENE_LABEL = 'Sunlight reaches a rooftop array, passes through an inverter into a battery, and lights a lamp.'

const smooth = (t) => {
  const x = Math.max(0, Math.min(1, t))
  return x * x * (3 - 2 * x)
}

const BAYER8 = [
  [0, 32, 8, 40, 2, 34, 10, 42],
  [48, 16, 56, 24, 50, 18, 58, 26],
  [12, 44, 4, 36, 14, 46, 6, 38],
  [60, 28, 52, 20, 62, 30, 54, 22],
  [3, 35, 11, 43, 1, 33, 9, 41],
  [51, 19, 59, 27, 49, 17, 57, 25],
  [15, 47, 7, 39, 13, 45, 5, 37],
  [63, 31, 55, 23, 61, 29, 53, 21],
]

const PAPER = [236, 234, 228]
const INK = [10, 16, 27]
const SUN = [247, 229, 0]
const WARM = [255, 246, 196]

let softCanvas = null
let softCtx = null
let lightCanvas = null
let lightCtx = null
let outImage = null

const ensureBuffers = (w, h) => {
  if (!softCanvas) softCanvas = document.createElement('canvas')
  if (!lightCanvas) lightCanvas = document.createElement('canvas')
  if (softCanvas.width !== w || softCanvas.height !== h) {
    softCanvas.width = w
    softCanvas.height = h
    lightCanvas.width = w
    lightCanvas.height = h
    softCtx = softCanvas.getContext('2d', { willReadFrequently: true })
    lightCtx = lightCanvas.getContext('2d', { willReadFrequently: true })
    outImage = null
  }
  if (!softCtx) softCtx = softCanvas.getContext('2d', { willReadFrequently: true })
  if (!lightCtx) lightCtx = lightCanvas.getContext('2d', { willReadFrequently: true })
  return softCtx
}

const fillSoft = (ctx, x, y, w, h, value) => {
  const v = Math.max(0, Math.min(255, value | 0))
  ctx.fillStyle = `rgb(${v},${v},${v})`
  ctx.fillRect(x, y, w, h)
}

const radialSoft = (ctx, cx, cy, r0, r1, a, b) => {
  const g = ctx.createRadialGradient(cx, cy, r0, cx, cy, r1)
  g.addColorStop(0, `rgb(${a},${a},${a})`)
  g.addColorStop(1, `rgb(${b},${b},${b})`)
  ctx.fillStyle = g
  ctx.beginPath()
  ctx.arc(cx, cy, r1, 0, Math.PI * 2)
  ctx.fill()
}

const ellipseSoft = (ctx, cx, cy, rx, ry, value, alpha = 1) => {
  ctx.save()
  ctx.globalAlpha = alpha
  ctx.fillStyle = `rgb(${value},${value},${value})`
  ctx.beginPath()
  ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2)
  ctx.fill()
  ctx.restore()
}

const roundSoft = (ctx, x, y, w, h, r, value) => {
  const radius = Math.max(0, Math.min(r, w / 2, h / 2))
  ctx.beginPath()
  ctx.moveTo(x + radius, y)
  ctx.arcTo(x + w, y, x + w, y + h, radius)
  ctx.arcTo(x + w, y + h, x, y + h, radius)
  ctx.arcTo(x, y + h, x, y, radius)
  ctx.arcTo(x, y, x + w, y, radius)
  ctx.closePath()
  ctx.fillStyle = `rgb(${value},${value},${value})`
  ctx.fill()
}

const paintLight = (cx, cy, r, amount) => {
  if (!lightCtx || amount < 0.02) return
  const strength = amount * (softCtx ? softCtx.globalAlpha : 1)
  if (strength < 0.02) return
  const g = lightCtx.createRadialGradient(cx, cy, r * 0.05, cx, cy, r)
  g.addColorStop(0, `rgba(255,255,255,${Math.min(1, strength)})`)
  g.addColorStop(0.45, `rgba(255,255,255,${0.45 * strength})`)
  g.addColorStop(1, 'rgba(255,255,255,0)')
  lightCtx.fillStyle = g
  lightCtx.beginPath()
  lightCtx.arc(cx, cy, r, 0, Math.PI * 2)
  lightCtx.fill()
}

const drawSun = (ctx, cx, cy, s, lit) => {
  const r = s * 0.3
  ellipseSoft(ctx, cx, cy + s * 0.4, s * 0.36, s * 0.08, 28, 0.4)
  radialSoft(ctx, cx, cy, r * 0.08, r * 1.35, 210, 235)
  radialSoft(ctx, cx, cy, r * 0.05, r, 40, 210)
  radialSoft(ctx, cx - r * 0.28, cy - r * 0.3, 0, r * 0.5, 30, 120)
  paintLight(cx, cy, r * 1.15, 0.55 + lit * 0.45)
}

const drawArray = (ctx, cx, cy, s, lit) => {
  const w = s * 0.72
  const h = s * 0.34
  ellipseSoft(ctx, cx, cy + s * 0.38, s * 0.36, s * 0.07, 35, 0.32)
  ctx.beginPath()
  ctx.moveTo(cx - w * 0.48, cy + h * 0.35)
  ctx.lineTo(cx + w * 0.52, cy + h * 0.18)
  ctx.lineTo(cx + w * 0.42, cy - h * 0.55)
  ctx.lineTo(cx - w * 0.55, cy - h * 0.32)
  ctx.closePath()
  const tone = 55 + lit * 120
  ctx.fillStyle = `rgb(${tone},${tone},${tone})`
  ctx.fill()
  ctx.save()
  ctx.clip()
  ctx.strokeStyle = `rgb(${20},${20},${20})`
  ctx.lineWidth = Math.max(1, s * 0.01)
  for (let i = 1; i < 7; i += 1) {
    const t = i / 7
    ctx.beginPath()
    ctx.moveTo(cx - w * 0.5 + w * t, cy + h * 0.32)
    ctx.lineTo(cx - w * 0.52 + w * t * 0.95, cy - h * 0.5)
    ctx.stroke()
  }
  for (let j = 1; j < 4; j += 1) {
    const t = j / 4
    ctx.beginPath()
    ctx.moveTo(cx - w * 0.52, cy - h * 0.3 + h * t)
    ctx.lineTo(cx + w * 0.48, cy - h * 0.48 + h * t)
    ctx.stroke()
  }
  ctx.restore()
  ctx.strokeStyle = `rgb(${210},${210},${210})`
  ctx.lineWidth = Math.max(1, s * 0.012)
  ctx.beginPath()
  ctx.moveTo(cx - w * 0.48, cy + h * 0.35)
  ctx.lineTo(cx + w * 0.52, cy + h * 0.18)
  ctx.lineTo(cx + w * 0.42, cy - h * 0.55)
  ctx.lineTo(cx - w * 0.55, cy - h * 0.32)
  ctx.closePath()
  ctx.stroke()
}

const drawInverter = (ctx, cx, cy, s, lit) => {
  const w = s * 0.34
  const h = s * 0.58
  const x = cx - w * 0.5
  const y = cy - h * 0.45
  ellipseSoft(ctx, cx, cy + s * 0.38, s * 0.28, s * 0.06, 30, 0.3)
  roundSoft(ctx, x, y, w, h, s * 0.04, 170)
  roundSoft(ctx, x + w * 0.08, y + h * 0.08, w * 0.84, h * 0.22, s * 0.02, 30 + lit * 180)
  for (let i = 0; i < 5; i += 1) {
    fillSoft(ctx, x + w * 0.16, y + h * (0.42 + i * 0.09), w * 0.68, Math.max(2, s * 0.012), 70)
  }
  fillSoft(ctx, x + w * 0.72, y + h * 0.14, w * 0.1, h * 0.08, 230)
}

const drawBattery = (ctx, cx, cy, s, charge) => {
  const w = s * 0.28
  const h = s * 0.62
  const x = cx - w * 0.5
  const y = cy - h * 0.48
  ellipseSoft(ctx, cx, cy + s * 0.38, s * 0.24, s * 0.055, 28, 0.3)
  roundSoft(ctx, x, y, w, h, s * 0.035, 55)
  fillSoft(ctx, x + w * 0.22, y - s * 0.035, w * 0.18, s * 0.04, 160)
  fillSoft(ctx, x + w * 0.6, y - s * 0.035, w * 0.18, s * 0.04, 160)
  const fillH = h * 0.86 * charge
  const fy = y + h * 0.07 + (h * 0.86 - fillH)
  roundSoft(ctx, x + w * 0.1, fy, w * 0.8, fillH, s * 0.02, 210 + charge * 30)
  if (charge > 0.08) {
    radialSoft(ctx, cx, fy + fillH * 0.2, 0, w * 0.55, 245, 120)
    paintLight(cx, fy + fillH * 0.35, w * 0.9, charge * 0.7)
  }
}

const drawLamp = (ctx, cx, cy, s, lit) => {
  ellipseSoft(ctx, cx, cy + s * 0.4, s * 0.34, s * 0.075, 22, 0.35)
  if (lit > 0.04) {
    radialSoft(ctx, cx, cy - s * 0.02, 0, s * (0.22 + lit * 0.2), 70, 230)
    ellipseSoft(ctx, cx, cy + s * 0.38, s * (0.2 + lit * 0.18), s * (0.055 + lit * 0.03), 80, 0.25 * lit)
    paintLight(cx, cy - s * 0.02, s * (0.28 + lit * 0.2), lit)
    paintLight(cx, cy + s * 0.36, s * 0.22, lit * 0.55)
  }
  ctx.strokeStyle = `rgb(45,45,45)`
  ctx.lineWidth = Math.max(3, s * 0.04)
  ctx.lineCap = 'round'
  ctx.beginPath()
  ctx.moveTo(cx - s * 0.1, cy + s * 0.38)
  ctx.lineTo(cx - s * 0.1, cy - s * 0.02)
  ctx.quadraticCurveTo(cx - s * 0.02, cy - s * 0.18, cx + s * 0.08, cy - s * 0.12)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(cx - s * 0.02, cy - s * 0.2)
  ctx.lineTo(cx + s * 0.2, cy - s * 0.24)
  ctx.lineTo(cx + s * 0.14, cy - s * 0.02)
  ctx.lineTo(cx + s * 0.02, cy)
  ctx.closePath()
  ctx.fillStyle = `rgb(${55 + lit * 40},${55 + lit * 40},${55 + lit * 40})`
  ctx.fill()
  radialSoft(ctx, cx + s * 0.08, cy + s * 0.02, 0, s * 0.09, 40, 160)
}

const FORMS = [drawSun, drawArray, drawInverter, drawBattery, drawLamp]

const stageFromProgress = (progress) => {
  const stops = [0, 0.2, 0.42, 0.64, 0.86, 1]
  let i = 0
  while (i < stops.length - 2 && progress >= stops[i + 1]) i += 1
  const local = smooth((progress - stops[i]) / Math.max(0.001, stops[i + 1] - stops[i]))
  return { from: i, to: Math.min(FORMS.length - 1, i + 1), blend: local }
}

const paintScatter = (ctx, w, h, amount, seed) => {
  if (amount < 0.02) return
  const count = Math.floor(40 + amount * 90)
  for (let i = 0; i < count; i += 1) {
    const n = Math.sin(seed * 12.9898 + i * 78.233) * 43758.5453
    const r = n - Math.floor(n)
    const n2 = Math.sin(seed * 4.1 + i * 19.19) * 23421.1
    const r2 = n2 - Math.floor(n2)
    const x = w * (0.18 + r * 0.64)
    const y = h * (0.12 + r2 * 0.7)
    const tone = 20 + ((i * 37) % 180)
    ctx.fillStyle = `rgb(${tone},${tone},${tone})`
    ctx.fillRect(x, y, 1.2 + (i % 3), 1.2 + (i % 2))
  }
}

const ditherTo = (target, soft, light, width, height) => {
  const src = soft.getImageData(0, 0, width, height)
  const glow = light.getImageData(0, 0, width, height)
  if (!outImage || outImage.width !== width || outImage.height !== height) {
    outImage = target.createImageData(width, height)
  }
  const out = outImage.data
  const data = src.data
  const heat = glow.data
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const i = (y * width + x) * 4
      const lum = data[i]
      const energy = heat[i] / 255
      const threshold = (BAYER8[y & 7][x & 7] / 64) * 255
      const on = lum > threshold
      let rgb = INK
      if (on) {
        if (energy > 0.12) {
          const t = Math.min(1, energy * 1.15)
          rgb = [
            Math.round(PAPER[0] + (SUN[0] - PAPER[0]) * t),
            Math.round(PAPER[1] + (SUN[1] - PAPER[1]) * t),
            Math.round(PAPER[2] + (SUN[2] - PAPER[2]) * t),
          ]
          if (energy > 0.78) rgb = WARM
        } else {
          rgb = PAPER
        }
      } else if (energy > 0.55) {
        rgb = [
          Math.round(INK[0] + (SUN[0] - INK[0]) * 0.35),
          Math.round(INK[1] + (SUN[1] - INK[1]) * 0.35),
          Math.round(INK[2] + (SUN[2] - INK[2]) * 0.2),
        ]
      }
      out[i] = rgb[0]
      out[i + 1] = rgb[1]
      out[i + 2] = rgb[2]
      out[i + 3] = 255
    }
  }
  target.putImageData(outImage, 0, 0)
}

const paintScene = (ctx, width, height, progress) => {
  const scale = width > 900 ? 2.4 : width > 500 ? 2.1 : 1.7
  const sw = Math.max(2, Math.round(width / scale))
  const sh = Math.max(2, Math.round(height / scale))
  const soft = ensureBuffers(sw, sh)

  soft.fillStyle = '#eceae4'
  soft.fillRect(0, 0, sw, sh)
  const field = soft.createLinearGradient(0, 0, 0, sh)
  field.addColorStop(0, '#f3f1ea')
  field.addColorStop(0.6, '#e7e4db')
  field.addColorStop(1, '#d8d4c9')
  soft.fillStyle = field
  soft.fillRect(0, 0, sw, sh)

  lightCtx.clearRect(0, 0, sw, sh)
  lightCtx.fillStyle = '#000'
  lightCtx.fillRect(0, 0, sw, sh)

  const { from, to, blend } = stageFromProgress(progress)
  const cx = sw * 0.5
  const cy = sh * 0.46
  const size = Math.min(sw, sh) * 0.82
  const morph = blend * (1 - blend) * 4
  const lit =
    from === 0
      ? 1 - blend * 0.35
      : from === 1
        ? 0.55
        : from === 2
          ? 0.45 + blend * 0.4
          : from === 3
            ? 0.7 + blend * 0.3
            : 1

  soft.save()
  soft.globalAlpha = 1 - blend * 0.92
  FORMS[from](soft, cx, cy, size, from === 3 ? 1 - blend * 0.2 : from === 4 ? 1 : lit)
  soft.restore()

  soft.save()
  soft.globalAlpha = blend
  FORMS[to](soft, cx, cy, size, to === 3 ? blend : to === 4 ? blend : lit)
  soft.restore()

  paintScatter(soft, sw, sh, morph, progress * 17.3)

  ditherTo(soft, soft, lightCtx, sw, sh)
  ctx.imageSmoothingEnabled = false
  ctx.fillStyle = '#eceae4'
  ctx.fillRect(0, 0, width, height)
  ctx.drawImage(softCanvas, 0, 0, sw, sh, 0, 0, width, height)
  ctx.imageSmoothingEnabled = true
}

const LightScene = () => {
  const canvasRef = useRef(null)
  const [beat, setBeat] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined
    const ctx = canvas.getContext('2d', { alpha: false })
    if (!ctx) {
      setBeat(3)
      return undefined
    }

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let alive = true
    let running = true
    let raf = 0
    let acc = 0
    let last = 0
    const duration = 8200

    const drawAt = (progress) => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const nextW = Math.max(2, Math.round(rect.width * dpr))
      const nextH = Math.max(2, Math.round(rect.height * dpr))
      if (canvas.width !== nextW || canvas.height !== nextH) {
        canvas.width = nextW
        canvas.height = nextH
      }
      if (nextW < 4 || nextH < 4) return
      paintScene(ctx, canvas.width, canvas.height, progress)
      const nextBeat = progress >= 0.64 ? 3 : progress >= 0.42 ? 2 : progress >= 0.2 ? 1 : 0
      setBeat((prev) => (prev === nextBeat ? prev : nextBeat))
    }

    const loop = (now) => {
      if (!alive) return
      if (!last) last = now
      if (running) acc += Math.min(48, now - last)
      last = now
      const progress = Math.min(1, acc / duration)
      drawAt(progress)
      raf = progress < 1 && running ? requestAnimationFrame(loop) : 0
    }

    const start = () => {
      if (raf || !alive || reduce || acc >= duration) return
      last = 0
      raf = requestAnimationFrame(loop)
    }

    if (reduce) {
      setBeat(3)
      drawAt(1)
    } else {
      drawAt(0)
      start()
    }

    const resize = new ResizeObserver(() => {
      drawAt(reduce ? 1 : Math.min(1, acc / duration))
    })
    resize.observe(canvas)

    const visibility = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting
      if (running) start()
    })
    visibility.observe(canvas)

    return () => {
      alive = false
      cancelAnimationFrame(raf)
      resize.disconnect()
      visibility.disconnect()
    }
  }, [])

  return (
    <div className="sol-stage">
      <div className="sol-stage-picture">
        <canvas ref={canvasRef} role="img" aria-label={SCENE_LABEL} />
      </div>
      <ol className="sol-beats">
        {BEATS.map((line, index) => (
          <li key={line} className={index === beat ? 'is-active' : index < beat ? 'is-done' : ''} aria-current={index === beat ? 'step' : undefined}>
            <span className="sol-beat-mark" aria-hidden="true" />
            <p>{line}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

const CtaPair = ({ onDark = false }) => (
  <div className="sol-actions">
    <Link href={PRIMARY_CTA.href}>
      <a className="sol-btn">{PRIMARY_CTA.label}</a>
    </Link>
    <Link href={SECONDARY_CTA.href}>
      <a className={`sol-link${onDark ? ' sol-link--dark' : ''}`}>{SECONDARY_CTA.label}</a>
    </Link>
  </div>
)

const HowItWorks = () => (
  <section className="sol-section sol-how" id="how-it-works" aria-labelledby="sol-how-h">
    <div className="sol-wrap">
      <h2 id="sol-how-h">Four steps from site survey to handover</h2>
      <p className="sol-lead">One project manager stays with you from the first site visit to the final handover.</p>
      <ol className="sol-steps-list">
        {steps.map((s, i) => (
          <li key={s.title} className="sol-step">
            <span className="sol-step-num">{i + 1}</span>
            <div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
)

const SolarPage = () => {
  const words = HEADLINE.split(' ')

  return (
    <div className="sol-page">
      <Head>
        <title>Solar Integrated Projects - MIS Solution</title>
        <meta name="description" content="MIS Solution designs, delivers and sources solar power projects for corporate, government, semi-government and NGO clients in Bangladesh." />
        <meta property="og:title" content="Solar Integrated Projects - MIS Solution" />
        <meta property="og:description" content="Solar project development and component sourcing for organisations in Bangladesh." />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;500&family=Source+Serif+4:wght@400&display=swap"
        />
      </Head>

      <Navigation />

      <main>
        <section className="sol-hero" aria-labelledby="sol-hero-h">
          <div className="sol-wrap sol-hero-inner">
            <LightScene />
            <div className="sol-hero-copy">
              <h1 id="sol-hero-h" aria-label={HEADLINE}>
                {words.map((w, i) => (
                  <React.Fragment key={`${w}-${i}`}>
                    <span className="sol-w" aria-hidden="true">
                      <span style={{ '--wd': `${Math.min(i * 0.035, 0.24)}s` }}>{w}</span>
                    </span>
                    {i < words.length - 1 ? ' ' : null}
                  </React.Fragment>
                ))}
              </h1>
              <p className="sol-hero-lead sol-rise" style={{ '--d': 1 }}>
                Solar Integrated Projects plans, engineers and installs rooftop, ground-mount and hybrid solar systems for corporate, government, semi-government and NGO sites, and sources every component the project needs.
              </p>
              <div className="sol-rise" style={{ '--d': 2 }}>
                <CtaPair />
              </div>
            </div>
          </div>
        </section>

        <section className="sol-section sol-ground-white" id="who-we-serve" aria-labelledby="sol-who-h">
          <div className="sol-wrap">
            <h2 id="sol-who-h">Solar projects for corporate, public and NGO clients</h2>
            <p className="sol-lead">Each client group buys differently. We shape the proposal, paperwork and payment schedule to the way your organisation procures.</p>
            <ul className="sol-cards">
              {segments.map((s) => (
                <li key={s.label} className="sol-card">
                  <h3>{s.label}</h3>
                  <p>{s.title}. {s.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="sol-section" id="services" aria-labelledby="sol-what-h">
          <div className="sol-wrap">
            <h2 id="sol-what-h">Project development and component sourcing</h2>
            <p className="sol-lead">Hire us for the whole project or only the parts you need. Both services run from one team under one contract.</p>
            <div className="sol-split-cards">
              <div className="sol-panel-card">
                <h3>Project development</h3>
                <ul className="sol-list">
                  {development.map((d) => <li key={d}>{d}</li>)}
                </ul>
              </div>
              <div className="sol-panel-card">
                <h3>Component sourcing</h3>
                <ul className="sol-list">
                  {sourcing.map((d) => <li key={d}>{d}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <HowItWorks />

        <section className="sol-section sol-ground-white" id="why-mis" aria-labelledby="sol-why-h">
          <div className="sol-wrap sol-why-grid">
            <div>
              <h2 id="sol-why-h">What MIS Solution brings to your project</h2>
              <p className="sol-lead">MIS Solution already delivers data centres, structured cabling and security systems for corporate clients. Solar projects run on the same delivery process.</p>
            </div>
            <ul className="sol-reasons">
              {reasons.map((r) => (
                <li key={r.title}>
                  <h3>{r.title}</h3>
                  <p>{r.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="sol-section sol-close" id="consultation" aria-labelledby="sol-close-h">
          <div className="sol-wrap sol-close-grid">
            <div className="sol-close-main">
              <h2 id="sol-close-h">Plan your solar project with MIS Solution</h2>
              <p className="sol-lead">Share your site details with our solar team. We arrange a site survey and walk you through the next steps.</p>
              <CtaPair />
            </div>
            <div className="sol-close-list">
              <h3>What to send for a first estimate</h3>
              <ul className="sol-list">
                {consultationChecklist.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        .sol-page {
          --sol-bg: #f6f7f4;
          --sol-surface: #ffffff;
          --sol-ink: #0f1622;
          --sol-muted: #3d4a5c;
          --sol-line: #d9dde3;
          --sol-sun: #f7e500;
          --sol-sun-step: #d6c704;
          --sol-sun-ink: #0a101b;
          --sol-night: #0a101b;
          --sol-night-2: #141c2b;
          --sol-pv: #2d6a9f;
          --sol-pv-light: #8fb4d6;
          --sol-on-night: #f2f4f7;
          --sol-on-night-muted: #a9b4c4;
          --sol-display: 'Source Serif 4', Georgia, 'Times New Roman', serif;
          --sol-text: 'Libre Franklin', system-ui, -apple-system, 'Segoe UI', sans-serif;
          --sol-ease: cubic-bezier(0.2, 0.8, 0.2, 1);
          --sol-ease-enter: cubic-bezier(0.22, 1, 0.36, 1);
          --sol-gut: 80px;
          --sol-nav: 72px;
          --sol-radius: 12px;
          background: var(--sol-bg);
          color: var(--sol-ink);
          font-family: var(--sol-text);
          letter-spacing: 0;
        }

        .sol-page ::selection {
          background: var(--sol-sun);
          color: var(--sol-sun-ink);
        }
        .sol-hero,
        .sol-section { scroll-margin-top: var(--sol-nav); }

        .sol-page main h1,
        .sol-page main h2,
        .sol-page main h3 {
          margin: 0;
          font-family: var(--sol-display);
          font-weight: 400;
          color: inherit;
          text-wrap: balance;
        }
        .sol-page main h2 {
          font-size: clamp(30px, 3.4vw, 48px);
          line-height: 1.1;
          letter-spacing: -0.02em;
          max-width: 22ch;
        }
        .sol-page main h3 {
          font-size: clamp(19px, 1.5vw, 22px);
          line-height: 1.25;
          letter-spacing: -0.01em;
        }
        .sol-page main p { margin: 0; }
        .sol-page main ul,
        .sol-page main ol { list-style: none; margin: 0; padding: 0; }

        .sol-wrap {
          width: min(100% - 2 * var(--sol-gut), 1280px);
          margin: 0 auto;
        }

        .sol-section {
          padding: 88px 0 80px;
          background: var(--sol-bg);
        }
        .sol-ground-white { background: var(--sol-surface); }

        .sol-lead {
          margin-top: 20px !important;
          max-width: 68ch;
          font-size: 18px;
          line-height: 1.6;
          color: var(--sol-muted);
        }

        /* Buttons and links */
        .sol-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 16px 32px;
        }
        .sol-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 14px 26px;
          border-radius: 8px;
          background: var(--sol-sun);
          color: var(--sol-sun-ink);
          font-family: var(--sol-text);
          font-size: 16px;
          font-weight: 500;
          line-height: 1.2;
          text-decoration: none;
          box-shadow: inset 0 0 0 1px rgba(10, 16, 27, 0.16);
          transition: background-color 120ms var(--sol-ease), transform 120ms var(--sol-ease);
        }
        .sol-link {
          display: inline-flex;
          align-items: center;
          min-height: 44px;
          color: var(--sol-ink);
          font-size: 16px;
          font-weight: 500;
          text-decoration: underline;
          text-decoration-thickness: 1px;
          text-underline-offset: 0.28em;
          transition: color 150ms var(--sol-ease);
        }
        .sol-link--dark { color: var(--sol-on-night); }
        @media (hover: hover) and (pointer: fine) {
          .sol-btn:hover {
            background: var(--sol-sun-step);
            transform: translateY(-1px);
            transition-duration: 150ms;
          }
          .sol-link:hover { color: var(--sol-pv); }
          .sol-link--dark:hover { color: var(--sol-sun); }
        }
        .sol-btn:active {
          transform: translateY(1px) scale(0.985);
          transition-duration: 90ms;
        }
        .sol-link:active { transform: scale(0.985); }
        .sol-page a:focus-visible {
          outline: 2px solid var(--sol-pv);
          outline-offset: 3px;
          border-radius: 4px;
        }

        /* Hero */
        .sol-hero {
          height: calc(100svh - var(--sol-nav));
          box-sizing: border-box;
          padding: 12px 0 18px;
          background: var(--sol-bg);
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: hidden;
        }
        .sol-hero-inner {
          flex: 1;
          min-height: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .sol-stage {
          flex: 1 1 auto;
          min-height: 0;
          display: grid;
          grid-template-columns: minmax(0, 1.55fr) minmax(210px, 0.72fr);
          gap: 28px;
          align-items: stretch;
        }
        .sol-stage-picture {
          min-height: 0;
          border-radius: 0;
          overflow: hidden;
          background: #eceae4;
          -webkit-mask-image: linear-gradient(to bottom, #000 78%, transparent 100%);
          mask-image: linear-gradient(to bottom, #000 78%, transparent 100%);
        }
        .sol-stage-picture canvas {
          display: block;
          width: 100%;
          height: 100%;
          image-rendering: pixelated;
        }
        .sol-beats {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 18px;
          margin: 0;
          padding: 4px 0 16%;
        }
        .sol-beats li {
          display: grid;
          grid-template-columns: 14px 1fr;
          gap: 12px;
          align-items: start;
          color: var(--sol-muted);
          opacity: 0.28;
          filter: blur(3px);
          transform: translateY(4px);
          transition:
            opacity 320ms var(--sol-ease),
            color 320ms var(--sol-ease),
            filter 320ms var(--sol-ease),
            transform 320ms var(--sol-ease);
        }
        .sol-beats li.is-done {
          opacity: 0.7;
          filter: none;
          transform: none;
        }
        .sol-beats li.is-active {
          opacity: 1;
          color: var(--sol-ink);
          filter: none;
          transform: none;
        }
        .sol-beat-mark {
          width: 8px;
          height: 8px;
          margin-top: 7px;
          border-radius: 50%;
          background: var(--sol-line);
        }
        .sol-beats li.is-done .sol-beat-mark,
        .sol-beats li.is-active .sol-beat-mark {
          background: var(--sol-sun);
          box-shadow: 0 0 0 1px rgba(10, 16, 27, 0.18);
        }
        .sol-beats p { margin: 0; font-size: 16px; line-height: 1.4; letter-spacing: -0.01em; }
        .sol-hero-copy { flex: none; }
        .sol-hero h1 {
          font-size: clamp(28px, 3.2vw, 46px);
          line-height: 1.05;
          letter-spacing: -0.026em;
          max-width: 18ch;
        }
        .sol-w { display: inline-block; overflow: hidden; vertical-align: top; padding-bottom: 0.08em; margin-bottom: -0.08em; }
        .sol-w > span {
          display: inline-block;
          animation: sol-word 700ms var(--sol-ease-enter) both;
          animation-delay: var(--wd);
        }
        .sol-hero-lead {
          margin-top: 10px !important;
          max-width: 68ch;
          font-size: 17px;
          line-height: 1.45;
          color: var(--sol-muted);
        }
        .sol-hero .sol-actions { margin-top: 14px; }
        .sol-rise {
          animation: sol-rise 520ms var(--sol-ease-enter) both;
          animation-delay: calc(0.42s + var(--d, 0) * 0.06s);
        }

        @keyframes sol-word { from { transform: translateY(105%); } to { transform: none; } }
        @keyframes sol-rise { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }

        /* Who we serve */
        .sol-cards {
          margin-top: 48px !important;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px;
        }
        .sol-card {
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding: 28px 24px 32px;
          border-radius: var(--sol-radius);
          background: var(--sol-bg);
          border: 1px solid var(--sol-line);
        }
        .sol-card p { font-size: 16px; line-height: 1.6; color: var(--sol-muted); }

        /* What we do */
        .sol-split-cards {
          margin-top: 48px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
        }
        .sol-panel-card {
          padding: 40px 48px 44px;
          border-radius: var(--sol-radius);
          background: var(--sol-surface);
          border: 1px solid var(--sol-line);
        }
        .sol-list { margin-top: 20px !important; }
        .sol-list li {
          position: relative;
          padding: 14px 0 14px 28px;
          font-size: 16px;
          line-height: 1.5;
          border-bottom: 1px solid var(--sol-line);
        }
        .sol-list li:last-child { border-bottom: 0; }
        .sol-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 21px;
          width: 12px;
          height: 8px;
          border-radius: 1px;
          background: var(--sol-pv);
          transform: skewX(-18deg);
        }

        /* How it works */
        .sol-how {
          background: var(--sol-night);
          color: var(--sol-on-night);
        }
        .sol-how .sol-lead { color: var(--sol-on-night-muted); }
        .sol-steps-list {
          margin-top: 40px;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 28px 24px;
        }
        .sol-step {
          display: grid;
          grid-template-columns: 40px 1fr;
          gap: 12px;
          align-items: start;
        }
        .sol-step-num {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 500;
          font-variant-numeric: tabular-nums;
          color: var(--sol-sun-ink);
          background: var(--sol-sun);
        }
        .sol-step p {
          margin-top: 8px !important;
          font-size: 16px;
          line-height: 1.6;
          color: var(--sol-on-night-muted);
        }

        /* Why MIS */
        .sol-why-grid {
          display: grid;
          grid-template-columns: repeat(12, minmax(0, 1fr));
          gap: 24px;
        }
        .sol-why-grid > div { grid-column: 1 / span 5; }
        .sol-reasons {
          grid-column: 7 / span 6;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0 32px;
          align-content: start;
        }
        .sol-reasons li { padding: 12px 0 32px; }
        .sol-reasons li:nth-child(n + 3) {
          padding-top: 32px;
          border-top: 1px solid var(--sol-line);
        }
        .sol-reasons p {
          margin-top: 10px !important;
          font-size: 16px;
          line-height: 1.6;
          color: var(--sol-muted);
        }

        /* Close */
        .sol-close-grid {
          display: grid;
          grid-template-columns: repeat(12, minmax(0, 1fr));
          gap: 24px;
        }
        .sol-close-main { grid-column: 1 / span 7; }
        .sol-close-list {
          grid-column: 9 / span 4;
          align-self: end;
          padding: 32px 32px 20px;
          border-radius: var(--sol-radius);
          background: var(--sol-surface);
          border: 1px solid var(--sol-line);
        }
        .sol-page main .sol-close h2 {
          font-size: clamp(40px, 6.2vw, 92px);
          line-height: 1.02;
          letter-spacing: -0.03em;
          max-width: 14ch;
        }
        .sol-close .sol-actions { margin-top: 40px; }

        /* Tablet */
        @media (max-width: 1279px) {
          .sol-page { --sol-gut: 48px; }
          .sol-cards { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 1023px) {
          .sol-stage { flex: 0 1 auto; align-content: start; grid-template-columns: minmax(0, 1fr); gap: 8px; }
          .sol-stage-picture { height: 30vh; min-height: 150px; }
          .sol-beats { flex-direction: row; flex-wrap: wrap; gap: 8px 18px; padding: 0; }
          .sol-beats p { font-size: 14px; }
          .sol-why-grid,
          .sol-close-grid { grid-template-columns: minmax(0, 1fr); }
          .sol-why-grid > div,
          .sol-reasons { grid-column: 1 / -1; }
          .sol-close-grid > * { grid-column: 1 / -1 !important; }
          .sol-close-list { margin-top: 48px; }
          .sol-split-cards,
          .sol-steps-list { grid-template-columns: 1fr 1fr; }
          .sol-section { padding: 80px 0 72px; }
          .sol-reasons { margin-top: 24px; }
        }

        /* Phone */
        @media (max-width: 767px) {
          .sol-page { --sol-gut: 24px; --sol-nav: 64px; }
          .sol-hero { height: auto; padding: 8px 0 28px; }
          .sol-hero-inner { gap: 8px; }
          .sol-hero h1 { font-size: 26px; }
          .sol-stage-picture { height: 196px; min-height: 0; }
          .sol-beats { display: flex; flex-direction: column; gap: 6px; }
          .sol-beats p { font-size: 14px; line-height: 1.3; }
          .sol-hero-lead {
            font-size: 14px;
            margin-top: 6px !important;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .sol-hero .sol-actions { margin-top: 8px; }
          .sol-steps-list { grid-template-columns: 1fr; }
          .sol-lead { font-size: 17px; }
          .sol-actions { flex-direction: column; align-items: stretch; gap: 8px; }
          .sol-btn { width: 100%; text-align: center; }
          .sol-link { align-self: center; }
          .sol-cards { grid-template-columns: 1fr; gap: 16px; }
          .sol-panel-card { padding: 28px 24px 24px; }
          .sol-reasons { grid-template-columns: 1fr; }
          .sol-reasons li:nth-child(n + 2) { padding-top: 28px; border-top: 1px solid var(--sol-line); }
          .sol-close-list { padding: 24px 24px 12px; }
          .sol-section { padding: 64px 0 56px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .sol-page *,
          .sol-page *::before,
          .sol-page *::after {
            animation: none !important;
          }
          .sol-w > span,
          .sol-rise {
            opacity: 1 !important;
            transform: none !important;
          }
          .sol-beats li {
            opacity: 1;
            color: var(--sol-ink);
            filter: none;
            transform: none;
          }
          .sol-beat-mark { background: var(--sol-sun) !important; }
        }
      `}</style>
    </div>
  )
}

export default SolarPage
