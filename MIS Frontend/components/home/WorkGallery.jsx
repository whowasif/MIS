import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import Link from 'next/link'
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from 'motion/react'
import { DisplayImage } from '../../lib/display-image'
import { fadeUp, homeViewport, reducedFade } from './homeMotion'

const truncate = (text, max = 140) => {
  const value = String(text || '').trim()
  if (!value) return ''
  if (value.length <= max) return value
  return `${value.slice(0, max - 1).trim()}…`
}

const TILT = [-2.5, 3, -4, 2]

function Reel({ digit, lh }) {
  return (
    <span className="hm-deck-reel" style={{ height: lh }}>
      <motion.span
        className="hm-deck-reel-col"
        initial={false}
        animate={{ y: -digit * lh }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        {Array.from({ length: 10 }).map((_, d) => (
          <span key={d} className="hm-deck-reel-digit" style={{ height: lh, lineHeight: `${lh}px` }}>
            {d}
          </span>
        ))}
      </motion.span>
    </span>
  )
}

function Odometer({ value, size = 15, pad = 2 }) {
  const lh = Math.round(size * 1.2)
  const chars = String(value).padStart(pad, '0').split('')
  return (
    <span className="hm-deck-odo" style={{ fontSize: size, height: lh }} role="img" aria-label={String(value)}>
      <span aria-hidden="true" className="hm-deck-odo-inner">
        {chars.map((c, i) => (
          <Reel key={`${chars.length}-${i}`} digit={Number(c)} lh={lh} />
        ))}
      </span>
    </span>
  )
}

/**
 * Photo-deck interaction for Client projects (swipeable stacked cards).
 * Adapted from PhotoDeck for Next pages router + home-mid CSS (no Tailwind/shadcn).
 */
const WorkGallery = ({ projects = [] }) => {
  const reduce = useReducedMotion()
  const photos = projects.slice(0, 8).map((project) => ({
    id: project.id,
    src: project.icon_url,
    title: project.name,
    place: project.client_name || 'Enterprise client',
    note: truncate(project.description, 160),
    href: `/projects/${encodeURIComponent(project.slug || project.id)}`,
  }))

  const [order, setOrder] = useState(() => photos.map((_, i) => i))
  const [index, setIndex] = useState(0)
  const [leaving, setLeaving] = useState(null)
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-300, 0, 300], [-14, 0, 14])
  const busy = useRef(false)
  const entering = useRef(false)

  // Keep deck order in sync when SSR/preview data arrives or changes length.
  useEffect(() => {
    setOrder(photos.map((_, i) => i))
    setIndex(0)
    x.set(0)
    setLeaving(null)
    busy.current = false
    entering.current = false
  }, [photos.length]) // eslint-disable-line react-hooks/exhaustive-deps

  const next = useCallback(
    (dir = 1) => {
      if (busy.current || photos.length < 2) return
      if (reduce) {
        setOrder((o) => [...o.slice(1), o[0]])
        setIndex((i) => (i + 1) % photos.length)
        return
      }
      busy.current = true
      const top = order[0]
      setLeaving({ id: top, dir })
      animate(x, dir * 520, { duration: 0.5, ease: [0.42, 0, 1, 1] }).then(() => {
        setOrder((o) => [...o.slice(1), o[0]])
        setIndex((i) => (i + 1) % photos.length)
        x.set(0)
        setLeaving(null)
        busy.current = false
      })
    },
    [order, photos.length, reduce, x]
  )

  const prev = useCallback(() => {
    if (busy.current || photos.length < 2) return
    if (reduce) {
      setOrder((o) => [o[o.length - 1], ...o.slice(0, -1)])
      setIndex((i) => (i - 1 + photos.length) % photos.length)
      return
    }
    busy.current = true
    entering.current = true
    setLeaving({ id: order[order.length - 1], dir: -1 })
    setOrder((o) => [o[o.length - 1], ...o.slice(0, -1)])
    setIndex((i) => (i - 1 + photos.length) % photos.length)
  }, [order, photos.length, reduce])

  useLayoutEffect(() => {
    if (!entering.current) return
    entering.current = false
    x.set(-520)
    animate(x, 0, { duration: 0.65, ease: [0.16, 1, 0.3, 1] }).then(() => {
      setLeaving(null)
      busy.current = false
    })
  }, [order, x])

  if (!photos.length) return null

  const onDragEnd = (_event, info) => {
    const { x: dx } = info.offset
    const v = info.velocity.x
    const flick = Math.abs(v) > 600 && Math.abs(dx) > 40 && Math.sign(v) === Math.sign(dx)
    if (Math.abs(dx) > 120 || flick) next(dx > 0 ? 1 : -1)
    else animate(x, 0, { type: 'spring', stiffness: 420, damping: 32 })
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      next(1)
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      prev()
    }
  }

  const current = photos[order[0]]
  const visible = order.slice(0, Math.min(4, order.length))

  return (
    <section className="hm-work" aria-labelledby="hm-work-title">
      <motion.div
        className="hm-work-inner"
        initial="hidden"
        whileInView="show"
        viewport={homeViewport}
        variants={reduce ? reducedFade : fadeUp}
      >
        <header className="hm-section-head hm-section-head-left">
          <span className="hm-eyebrow">Proof of work</span>
          <h2 id="hm-work-title" className="hm-section-title">Client projects</h2>
          <p className="hm-section-sub">Deployments and integrations for enterprises across Bangladesh.</p>
        </header>

        <div
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Client projects"
          onKeyDown={onKeyDown}
          className="hm-deck"
        >
          <div className="hm-deck-copy">
            <p className="hm-deck-kicker">Selected deliveries</p>

            <div className="hm-deck-story">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={order[0]}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.06 } },
                    exit: {},
                  }}
                >
                  <div className="hm-deck-title-clip">
                    <motion.h3
                      className="hm-deck-title"
                      variants={{
                        hidden: { y: '100%' },
                        show: { y: '0%', transition: { duration: 0.7, ease: [0.42, 0, 0, 1] } },
                        exit: { y: '-100%', transition: { duration: 0.3, ease: [0.42, 0, 1, 1] } },
                      }}
                    >
                      {current.title}
                    </motion.h3>
                  </div>
                  <motion.p
                    className="hm-deck-place"
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.42, 0, 0, 1] } },
                      exit: { opacity: 0, transition: { duration: 0.2 } },
                    }}
                  >
                    {current.place}
                  </motion.p>
                  {current.note ? (
                    <motion.p
                      className="hm-deck-note"
                      variants={{
                        hidden: { opacity: 0, y: 12 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.42, 0, 0, 1] } },
                        exit: { opacity: 0, transition: { duration: 0.2 } },
                      }}
                    >
                      {current.note}
                    </motion.p>
                  ) : null}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.42, 0, 0, 1] } },
                      exit: { opacity: 0, transition: { duration: 0.2 } },
                    }}
                  >
                    <Link href={current.href}>
                      <a className="hm-work-link">View story</a>
                    </Link>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="hm-deck-controls">
              <div className="hm-deck-count">
                <Odometer value={index + 1} />
                <span className="hm-deck-count-sep">/</span>
                <span className="hm-deck-count-total">{String(photos.length).padStart(2, '0')}</span>
              </div>
              {photos.length > 1 ? (
                <div className="hm-deck-nav">
                  <button type="button" onClick={prev} aria-label="Previous project" className="hm-deck-btn hm-deck-btn-prev">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6" /></svg>
                  </button>
                  <button type="button" onClick={() => next(1)} aria-label="Next project" className="hm-deck-btn hm-deck-btn-next">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
                  </button>
                </div>
              ) : null}
            </div>
          </div>

          <div className="hm-deck-stage">
            {visible
              .slice()
              .reverse()
              .map((id) => {
                const depth = visible.indexOf(id)
                const isTop = depth === 0
                const p = photos[id]
                return (
                  <motion.div
                    key={p.id || id}
                    className={`hm-deck-card${isTop ? '' : ' is-stack'}`}
                    style={{ zIndex: 10 - depth }}
                    initial={false}
                    animate={{
                      scale: 1 - depth * 0.045,
                      y: depth * -18,
                      rotate: isTop ? 0 : TILT[depth % TILT.length],
                      opacity: depth > 2 ? 0 : 1,
                    }}
                    transition={{ duration: 0.7, ease: [0.42, 0, 0, 1] }}
                  >
                    <motion.div
                      className={`hm-deck-frame${isTop ? ' is-top' : ''}`}
                      style={isTop && !reduce ? { x, rotate } : undefined}
                      drag={isTop && !leaving && !reduce ? 'x' : false}
                      dragMomentum={false}
                      onDragEnd={isTop && !reduce ? onDragEnd : undefined}
                    >
                      <DisplayImage
                        src={p.src}
                        alt={p.title}
                        loading={isTop ? 'eager' : 'lazy'}
                        decoding="async"
                      />
                    </motion.div>
                  </motion.div>
                )
              })}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default WorkGallery
