import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { DisplayImage } from '../../lib/display-image'
import { fadeUp, homeViewport, reducedFade } from './homeMotion'

const OfferBand = ({ advertisements = [] }) => {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const startRef = useRef(0)
  const rafRef = useRef(null)

  const total = advertisements.length

  useEffect(() => {
    if (total <= 1 || reduce || paused) {
      setProgress(reduce || total <= 1 ? 1 : 0)
      return undefined
    }

    const duration = 5500
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

  const primary = advertisements[index]
  const secondary = advertisements.filter((_, i) => i !== index).slice(0, 2)
  const hrefFor = (ad) => (ad.product_slug ? `/products/${ad.product_slug}` : (ad.link_url || '#'))

  const go = (dir) => {
    setIndex((prev) => (prev + dir + total) % total)
    setProgress(0)
  }

  return (
    <section
      className="hm-offer"
      aria-label="Current offers"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false)
      }}
    >
      <motion.div
        className="hm-offer-inner"
        initial="hidden"
        whileInView="show"
        viewport={homeViewport}
        variants={reduce ? reducedFade : fadeUp}
      >
        <div className={`hm-offer-layout${secondary.length ? '' : ' is-solo'}`}>
          <Link href={hrefFor(primary)}>
            <a className="hm-offer-primary">
              <div className="hm-offer-media">
                <DisplayImage
                  src={primary.image_url}
                  kind="detail"
                  priority
                  alt={primary.title || 'Offer'}
                  loading="eager"
                  decoding="async"
                />
                <span className="hm-offer-scrim" aria-hidden="true" />
              </div>
              <div className="hm-offer-copy">
                <span className="hm-offer-kicker">Offer</span>
                <h2 className="hm-offer-title">{primary.title}</h2>
                {primary.ad_details ? <p className="hm-offer-details">{primary.ad_details}</p> : null}
                <span className="hm-offer-cta">Shop now</span>
              </div>
              {total > 1 && (
                <div className="hm-offer-progress" aria-hidden="true">
                  <span style={{ transform: `scaleX(${progress})` }} />
                </div>
              )}
            </a>
          </Link>

          {secondary.length > 0 && (
            <div className="hm-offer-side">
              {secondary.map((ad) => (
                <Link key={ad.id} href={hrefFor(ad)}>
                  <a className="hm-offer-side-item">
                    <div className="hm-offer-side-media">
                      <DisplayImage
                        src={ad.image_url}
                        kind="detail"
                        alt={ad.title || 'Offer'}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="hm-offer-side-copy">
                      <h3>{ad.title}</h3>
                      {ad.ad_details ? <p>{ad.ad_details}</p> : null}
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          )}
        </div>

        {total > 1 && (
          <div className="hm-offer-controls">
            <button type="button" className="hm-offer-nav" onClick={() => go(-1)} aria-label="Previous offer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <span className="hm-offer-count">{index + 1} / {total}</span>
            <button type="button" className="hm-offer-nav" onClick={() => go(1)} aria-label="Next offer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>
        )}
      </motion.div>
    </section>
  )
}

export default OfferBand
