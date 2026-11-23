import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { fadeUp, homeViewport, reducedFade } from './homeMotion'

const FindAndAct = () => {
  const reduce = useReducedMotion()

  return (
    <section className="hm-act" aria-labelledby="hm-act-title">
      <motion.div
        className="hm-act-inner"
        initial="hidden"
        whileInView="show"
        viewport={homeViewport}
        variants={reduce ? reducedFade : fadeUp}
      >
        <div className="hm-act-panels">
          <div className="hm-act-panel hm-act-panel-search">
            <span className="hm-eyebrow hm-eyebrow-on-dark">Catalog</span>
            <h2 id="hm-act-title" className="hm-act-panel-title">Find hardware</h2>
            <p className="hm-act-panel-sub">Search by SKU, model, or product name across the live catalog.</p>
            <form action="/search" method="GET" className="hm-act-search">
              <label htmlFor="hm-catalog-search" className="hm-sr-only">Search catalog</label>
              <input
                id="hm-catalog-search"
                type="text"
                name="q"
                required
                minLength={2}
                placeholder="SKU, model, or product name…"
                className="hm-act-input"
              />
              <button type="submit" className="hm-act-submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <span>Search</span>
              </button>
            </form>
          </div>

          <div className="hm-act-panel hm-act-panel-talk" aria-label="Contact">
            <span className="hm-eyebrow hm-eyebrow-on-dark">Talk to us</span>
            <h3 className="hm-act-panel-title">Need a scoped quote?</h3>
            <p className="hm-act-panel-sub">Enterprise supply, install, and support — same team on the line.</p>
            <a className="hm-act-hotline" href="tel:0241021991">02-41021991</a>
            <a className="hm-act-email" href="mailto:info@missolution.com.bd">info@missolution.com.bd</a>
            <Link href="/request-custom-quote">
              <a className="hm-act-quote">Request a quote</a>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default FindAndAct
