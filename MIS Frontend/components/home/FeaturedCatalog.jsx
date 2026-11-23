import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { DisplayImage } from '../../lib/display-image'
import { fadeUp, homeViewport, motionState, reducedFade, staggerContainer } from './homeMotion'

const formatPrice = (price) =>
  `৳${Number(price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`

const FeaturedCatalog = ({ products = [] }) => {
  const reduce = useReducedMotion()
  if (!products.length) return null

  const item = motionState(reduce)

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
            <span className="hm-eyebrow">Catalog</span>
            <h2 id="hm-catalog-title" className="hm-section-title">Featured hardware</h2>
            <p className="hm-section-sub">Top-listed essentials for office and enterprise builds.</p>
          </div>
          <Link href="/product-catalog">
            <a className="hm-text-link">View full catalog →</a>
          </Link>
        </header>

        <motion.div
          className="hm-catalog-grid"
          variants={reduce ? undefined : staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={homeViewport}
        >
          {products.map((product, idx) => (
            <motion.div key={product.id} className="hm-product" variants={item}>
              <Link href={`/products/${encodeURIComponent(product.slug || product.id)}`}>
                <a>
                  <div className="hm-product-media">
                    <DisplayImage
                      src={product.image}
                      alt={product.name}
                      loading={idx < 4 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                  </div>
                  <div className="hm-product-copy">
                    {product.categoryName ? <span className="hm-product-cat">{product.categoryName}</span> : null}
                    <h3>{product.name}</h3>
                    {product.price > 0 ? <span className="hm-product-price">{formatPrice(product.price)}</span> : null}
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
