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
  const list = products.slice(0, 5)
  const hero = list[0]
  const rest = list.slice(1)

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
            <h2 id="hm-catalog-title" className="hm-section-title">Featured kit</h2>
            <p className="hm-section-sub">Enterprise hardware we’re actively supplying.</p>
          </div>
          <Link href="/categories">
            <a className="hm-text-link">Browse categories →</a>
          </Link>
        </header>

        <motion.div
          className="hm-kit"
          variants={reduce ? undefined : staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={homeViewport}
        >
          <motion.div className="hm-kit-hero" variants={item}>
            <Link href={`/products/${encodeURIComponent(hero.slug || hero.id)}`}>
              <a>
                <div className="hm-kit-plate">
                  <DisplayImage
                    src={hero.image}
                    alt={hero.name}
                    loading="eager"
                    decoding="async"
                  />
                </div>
                <div className="hm-kit-copy">
                  {hero.categoryName ? <span className="hm-product-cat">{hero.categoryName}</span> : null}
                  <h3>{hero.name}</h3>
                  {hero.price > 0 ? <span className="hm-product-price">{formatPrice(hero.price)}</span> : null}
                </div>
              </a>
            </Link>
          </motion.div>

          <div className="hm-kit-rail">
            {rest.map((product) => (
              <motion.div key={product.id} className="hm-kit-item" variants={item}>
                <Link href={`/products/${encodeURIComponent(product.slug || product.id)}`}>
                  <a>
                    <div className="hm-kit-plate">
                      <DisplayImage
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="hm-kit-copy">
                      {product.categoryName ? <span className="hm-product-cat">{product.categoryName}</span> : null}
                      <h3>{product.name}</h3>
                      {product.price > 0 ? <span className="hm-product-price">{formatPrice(product.price)}</span> : null}
                    </div>
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default FeaturedCatalog
