import React, { useRef } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'

/**
 * Scattered photo stage for About Us (parallax image slots + centered copy).
 * Adapted from ScatteredAbout for Next pages router + CSS (no Tailwind/shadcn).
 */

const SLOTS = [
  { left: 0, top: 10, w: 17, ratio: '4 / 5', speed: 60 },
  { left: 21, top: 0, w: 10, ratio: '3 / 4', speed: 120 },
  { left: 8, top: 70, w: 12, ratio: '1', speed: 30 },
  { left: 66, top: 12, w: 9, ratio: '1', speed: 110 },
  { left: 79, top: 0, w: 21, ratio: '4 / 5', speed: 50 },
  { left: 72, top: 72, w: 13, ratio: '4 / 3', speed: 90 },
]

function Photo({ src, slot, progress, index, still }) {
  const y = useTransform(progress, [0, 1], [slot.speed, -slot.speed])
  return (
    <motion.div
      className="sa-photo"
      style={{
        left: `${slot.left}%`,
        top: `${slot.top}%`,
        width: `${slot.w}%`,
        aspectRatio: slot.ratio,
        y: still ? 0 : y,
      }}
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: [0.42, 0, 0, 1], delay: 0.08 * index }}
    >
      <img src={src} alt="" loading={index < 3 ? 'eager' : 'lazy'} decoding="async" />
    </motion.div>
  )
}

function Copy({ title, body, cta }) {
  return (
    <motion.div
      className="sa-copy"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.9, ease: [0.42, 0, 0, 1] }}
    >
      <h1 className="sa-title">{title}</h1>
      <p className="sa-body">{body}</p>
      {cta ? (
        <Link href={cta.href}>
          <a className="sa-cta">
            {cta.label}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </a>
        </Link>
      ) : null}
    </motion.div>
  )
}

const ScatteredAbout = ({
  title = 'Who we are',
  body = 'Since 2007, MIS Solution has worked side-by-side with enterprises across Bangladesh — delivering hardware, infrastructure, and support built around each client’s requirements.',
  cta = { label: 'Contact us', href: '/contact' },
  images = [],
}) => {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const pics = images.slice(0, 6)

  return (
    <section ref={ref} className="sa-section" aria-label="About MIS Solution">
      <div className="sa-stage">
        {pics.map((src, i) => (
          <Photo
            key={`${src}-${i}`}
            src={src}
            slot={SLOTS[i]}
            progress={scrollYProgress}
            index={i}
            still={!!reduce}
          />
        ))}
        <div className="sa-center">
          <Copy title={title} body={body} cta={cta} />
        </div>
      </div>

      <div className="sa-mobile">
        <Copy title={title} body={body} cta={cta} />
        <div className="sa-strip">
          {pics.map((src, i) => (
            <img key={`${src}-m-${i}`} src={src} alt="" loading="lazy" decoding="async" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ScatteredAbout
