import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { DisplayImage } from '../../lib/display-image'
import { fadeUp, homeViewport, reducedFade } from './homeMotion'

const formatPrice = (price) =>
  `৳${Number(price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`

const splitTitle = (name) => {
  const parts = String(name || '').trim().split(/\s+/)
  if (parts.length <= 1) return { lead: name || 'Product', rest: '' }
  if (parts.length === 2) return { lead: parts[0], rest: parts[1] }
  const mid = Math.ceil(parts.length / 2)
  return { lead: parts.slice(0, mid).join(' '), rest: parts.slice(mid).join(' ') }
}

const blurbFor = (product) => {
  const cat = product.categoryName ? String(product.categoryName).toUpperCase() : 'ENTERPRISE HARDWARE'
  return `${cat} — CONFIGURED FOR TEAMS THAT NEED RELIABLE SUPPLY, WARRANTY COVERAGE, AND FAST DEPLOYMENT ACROSS BANGLADESH.`
}

/**
 * Product Hover Showcase (21st / WRAPCODERS pattern):
 * synced hover selection, large typography, ambient glow, mirrored reflection.
 * Adapted for Next pages router + home-mid CSS (no Tailwind/shadcn).
 */
const FeaturedCatalog = ({ products = [] }) => {
  const reduce = useReducedMotion()
  const list = products.slice(0, 6)
  const [active, setActive] = useState(0)
  const [autoplay, setAutoplay] = useState(false)

  useEffect(() => {
    setActive(0)
  }, [list.length])

  useEffect(() => {
    if (!autoplay || reduce || list.length < 2) return undefined
    const id = setInterval(() => {
      setActive((i) => (i + 1) % list.length)
    }, 3800)
    return () => clearInterval(id)
  }, [autoplay, reduce, list.length])

  if (!list.length) return null

  const product = list[active] || list[0]
  const { lead, rest } = splitTitle(product.name)
  const href = `/products/${encodeURIComponent(product.slug || product.id)}`

  return (
    <section className="hm-catalog" aria-labelledby="hm-catalog-title">
      <motion.div
        className="hm-catalog-inner"
        initial="hidden"
        whileInView="show"
        viewport={homeViewport}
        variants={reduce ? reducedFade : fadeUp}
      >
        <header className="hm-section-head hm-section-head-split">
          <div>
            <span className="hm-eyebrow">Hardware</span>
            <h2 id="hm-catalog-title" className="hm-section-title">Explore the lineup</h2>
            <p className="hm-section-sub">Featured enterprise kit — hover to browse.</p>
          </div>
          <div className="hm-catalog-actions">
            <button
              type="button"
              className={`hm-rail-nav hm-showcase-auto${autoplay ? ' is-on' : ''}`}
              onClick={() => setAutoplay((v) => !v)}
              aria-pressed={autoplay}
            >
              {autoplay ? 'Pause' : 'Autoplay'}
            </button>
            <Link href="/categories">
              <a className="hm-text-link">Browse categories →</a>
            </Link>
          </div>
        </header>

        <div className="hm-showcase" role="region" aria-label="Featured hardware showcase">
          <span className="hm-showcase-glow" aria-hidden="true" />

          <div className="hm-showcase-top">
            <div className="hm-showcase-copy">
              <p className="hm-showcase-kicker">
                {product.categoryName || 'Enterprise kit'}
              </p>
              <div className="hm-showcase-title-clip">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.h3
                    key={product.id}
                    className="hm-showcase-title"
                    initial={reduce ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? undefined : { opacity: 0, y: -14 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="hm-showcase-title-lead">{lead}</span>
                    {rest ? <span className="hm-showcase-title-rest">{rest}</span> : null}
                  </motion.h3>
                </AnimatePresence>
              </div>
              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={`b-${product.id}`}
                  className="hm-showcase-blurb"
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={reduce ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.28 }}
                >
                  {blurbFor(product)}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="hm-showcase-buy">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`p-${product.id}`}
                  className="hm-showcase-price"
                  initial={reduce ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {product.price > 0 ? formatPrice(product.price) : 'Quote'}
                </motion.div>
              </AnimatePresence>
              <Link href={href}>
                <a className="hm-showcase-cta">
                  Shop now
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </a>
              </Link>
            </div>
          </div>

          <div className="hm-showcase-stage">
            <span className="hm-showcase-stage-shadow" aria-hidden="true" />
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`img-${product.id}`}
                className="hm-showcase-hero"
                initial={reduce ? false : { opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className="hm-showcase-hero-inner"
                  animate={reduce ? undefined : { y: [0, -6, 0] }}
                  transition={reduce ? undefined : { duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <DisplayImage
                    src={product.image}
                    alt={product.name}
                    loading="eager"
                    decoding="async"
                  />
                  <div className="hm-showcase-reflect" aria-hidden="true">
                    <DisplayImage src={product.image} alt="" loading="lazy" decoding="async" />
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hm-showcase-tabs" role="tablist" aria-label="Featured products">
            {list.map((item, idx) => {
              const selected = idx === active
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  tabIndex={selected ? 0 : -1}
                  className={`hm-showcase-tab${selected ? ' is-active' : ''}`}
                  onMouseEnter={() => setActive(idx)}
                  onFocus={() => setActive(idx)}
                  onClick={() => setActive(idx)}
                >
                  {selected ? <span className="hm-showcase-tab-bar" aria-hidden="true" /> : null}
                  <span className="hm-showcase-tab-media">
                    <DisplayImage
                      src={item.image}
                      alt=""
                      loading={idx < 3 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                  </span>
                  <span className="hm-showcase-tab-name">{item.name}</span>
                  <span className="hm-showcase-tab-price">
                    {item.price > 0 ? formatPrice(item.price) : 'Quote'}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default FeaturedCatalog
