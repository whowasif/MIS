import React, { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { fadeUp, homeViewport, reducedFade } from './homeMotion'

const CountUp = ({ end, label, reduce }) => {
  const [count, setCount] = useState(reduce ? end : 0)
  const [done, setDone] = useState(!!reduce)
  const ref = useRef(null)

  useEffect(() => {
    if (reduce) {
      setCount(end)
      setDone(true)
      return undefined
    }

    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || done) return
        setDone(true)
        const duration = 1400
        const start = performance.now()
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - t, 3)
          setCount(Math.round(eased * end))
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.35 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [end, reduce, done])

  return (
    <div className="hm-proof-item" ref={ref}>
      <div className="hm-proof-number">{count.toLocaleString()}{end > 0 ? '+' : ''}</div>
      <div className="hm-proof-label">{label}</div>
    </div>
  )
}

const ProofStrip = ({ proof = {} }) => {
  const reduce = useReducedMotion()
  const {
    projectCount = 0,
    categoryCount = 0,
    serviceCount = 0,
    productCount = 0,
  } = proof

  const metrics = [
    { end: projectCount, label: 'Projects delivered' },
    { end: categoryCount, label: 'Product categories' },
    { end: serviceCount, label: 'Active service lines' },
  ]
  if (productCount > 0) {
    metrics.push({ end: productCount, label: 'Catalog products' })
  }

  if (metrics.every((m) => m.end === 0)) return null

  return (
    <section className="hm-proof" aria-label="Company metrics">
      <motion.div
        className="hm-proof-inner"
        initial="hidden"
        whileInView="show"
        viewport={homeViewport}
        variants={reduce ? reducedFade : fadeUp}
      >
        <div className={`hm-proof-grid hm-proof-cols-${metrics.length}`}>
          {metrics.map((m) => (
            <CountUp key={m.label} end={m.end} label={m.label} reduce={!!reduce} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default ProofStrip
