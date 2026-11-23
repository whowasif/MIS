import React, { useRef } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { DisplayImage } from '../../lib/display-image'
import { fadeUp, homeViewport, motionState, reducedFade, staggerContainer } from './homeMotion'

const formatPrice = (price) =>
  `৳${Number(price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`

/**
 * Apple “Explore the lineup” pattern: horizontal snap gallery,
 * large product plates, scroll arrows, hover lift.
 */
const FeaturedCatalog = ({ products = [] }) => {
  const reduce = useReducedMotion()
  const railRef = useRef(null)
  if (!products.length) return null

  const item = motionState(reduce)
  const list = products.slice(0, 8)

  const scrollBy = (dir) => {
    const rail = railRef.current
    if (!rail) return
    const amount = Math.min(rail.clientWidth * 0.7, 380)
    rail.scrollBy({ left: dir * amount, behavior: reduce ? 'auto' : 'smooth' })
  }

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
            <p className="hm-section-sub">Featured enterprise kit — scroll to browse.</p>
          </div>
          <div className="hm-catalog-actions">
            <div className="hm-rail-arrows">
              <button type="button" className="hm-rail-nav" onClick={() => scrollBy(-1)} aria-label="Previous products">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6" /></svg>
              </button>
              <button type="button" className="hm-rail-nav" onClick={() => scrollBy(1)} aria-label="Next products">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            </div>
            <Link href="/categories">
              <a className="hm-text-link">Browse categories →</a>
            </Link>
          </div>
        </header>

        <motion.div
          className="hm-lineup"
          ref={railRef}
          variants={reduce ? undefined : staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={homeViewport}
        >
          {list.map((product, idx) => (
            <motion.div
              key={product.id}
              className="hm-lineup-card"
              variants={item}
              whileHover={reduce ? undefined : { y: -6 }}
              transition={{ type: 'spring', stiffness: 380, damping: 28 }}
            >
              <Link href={`/products/${encodeURIComponent(product.slug || product.id)}`}>
                <a>
                  <div className="hm-lineup-plate">
                    <DisplayImage
                      src={product.image}
                      alt={product.name}
                      loading={idx < 3 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                  </div>
                  <div className="hm-lineup-copy">
                    {product.categoryName ? <span className="hm-product-cat">{product.categoryName}</span> : null}
                    <h3>{product.name}</h3>
                    {product.price > 0 ? <span className="hm-product-price">{formatPrice(product.price)}</span> : null}
                    <span className="hm-lineup-more">Learn more</span>
                  </div>
                </a>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default FeaturedCatalog
