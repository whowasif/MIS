import React, { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { fadeUp, homeViewport, reducedFade } from './homeMotion'

/** Established marketing metrics (company-approved). */
const METRICS = [
  { end: 100, suffix: '+', label: 'Projects completed', decimals: 0 },
  { end: 100, suffix: '+', label: 'Enterprise clients', decimals: 0 },
  { end: 99.9, suffix: '%', label: 'Support SLA', decimals: 1 },
  { end: 100, suffix: '%', label: 'Warranty coverage', decimals: 0 },
]

const CountUp = ({ end, suffix, label, decimals, reduce }) => {
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
        const duration = 1600
        const start = performance.now()
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - t, 3)
          setCount(eased * end)
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.35 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [end, reduce, done])

  const display = decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()

  return (
    <div className="hm-proof-item" ref={ref}>
      <div className="hm-proof-number">
        {display}
        {suffix}
      </div>
      <div className="hm-proof-label">{label}</div>
    </div>
  )
}

const ProofStrip = () => {
  const reduce = useReducedMotion()

  return (
    <section className="hm-proof" aria-label="Company metrics">
      <motion.div
        className="hm-proof-inner"
        initial="hidden"
        whileInView="show"
        viewport={homeViewport}
        variants={reduce ? reducedFade : fadeUp}
      >
        <div className="hm-proof-grid hm-proof-cols-4">
          {METRICS.map((m) => (
            <CountUp
              key={m.label}
              end={m.end}
              suffix={m.suffix}
              label={m.label}
              decimals={m.decimals}
              reduce={!!reduce}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default ProofStrip
