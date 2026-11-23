import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { DisplayImage } from '../../lib/display-image'

/**
 * Full-bleed offer stage (Apple / Dell homepage pattern):
 * one immersive slide at a time, crossfade, bottom dots + progress.
 */
const OfferBand = ({ advertisements = [] }) => {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const startRef = useRef(0)
  const rafRef = useRef(null)
  const touchX = useRef(null)

  const total = advertisements.length

  useEffect(() => {
    if (total <= 1 || reduce || paused) {
      setProgress(reduce || total <= 1 ? 1 : 0)
      return undefined
    }

    const duration = 6000
    startRef.current = performance.now()

    const tick = (now) => {
      const elapsed = now - startRef.current
      const p = Math.min(elapsed / duration, 1)
      setProgress(p)
      if (p >= 1) {
        setIndex((prev) => (prev + 1) % total)
        startRef.current = performance.now()
        setProgress(0)
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [total, reduce, paused, index])

  if (!total) return null

  const offer = advertisements[index]
  const href = offer.product_slug ? `/products/${offer.product_slug}` : (offer.link_url || '#')

  const go = (dir) => {
    setIndex((prev) => (prev + dir + total) % total)
    setProgress(0)
  }

  const onTouchStart = (e) => {
    touchX.current = e.changedTouches[0].clientX
  }

  const onTouchEnd = (e) => {
    if (touchX.current == null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    touchX.current = null
    if (Math.abs(dx) < 48) return
    go(dx < 0 ? 1 : -1)
  }

  return (
    <section
      className="hm-offer"
      aria-roledescription="carousel"
      aria-label="Featured offers"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false)
      }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="hm-offer-bleed">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={offer.id || index}
            className="hm-offer-slide"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href={href}>
              <a className="hm-offer-link">
                <div className="hm-offer-media">
                  <DisplayImage
                    src={offer.image_url}
                    kind="detail"
                    priority
                    alt={offer.title || 'Offer'}
                    loading="eager"
                    decoding="async"
                  />
                  <span className="hm-offer-scrim" aria-hidden="true" />
                </div>
                <div className="hm-offer-copy">
                  <p className="hm-offer-kicker">Now available</p>
                  <h2 className="hm-offer-title">{offer.title}</h2>
                  {offer.ad_details ? <p className="hm-offer-details">{offer.ad_details}</p> : null}
                  <span className="hm-offer-cta">Shop now</span>
                </div>
              </a>
            </Link>
          </motion.div>
        </AnimatePresence>

        {total > 1 && (
          <div className="hm-offer-chrome">
            <div className="hm-offer-progress" aria-hidden="true">
              <span style={{ transform: `scaleX(${progress})` }} />
            </div>
            <div className="hm-offer-dots" role="tablist" aria-label="Offer slides">
              {advertisements.map((ad, i) => (
                <button
                  key={ad.id || i}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Offer ${i + 1}`}
                  className={`hm-offer-dot${i === index ? ' is-active' : ''}`}
                  onClick={() => {
                    setIndex(i)
                    setProgress(0)
                  }}
                />
              ))}
            </div>
            <div className="hm-offer-arrows">
              <button type="button" className="hm-offer-nav" onClick={() => go(-1)} aria-label="Previous offer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6" /></svg>
              </button>
              <button type="button" className="hm-offer-nav" onClick={() => go(1)} aria-label="Next offer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default OfferBand
