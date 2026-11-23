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
        <div className="hm-act-card">
          <img
            className="hm-act-bg"
            src="/home/cta-bg.jpg"
            alt=""
            aria-hidden="true"
          />
          <div className="hm-act-scrim" aria-hidden="true" />

          <div className="hm-act-grid">
            <div className="hm-act-copy">
              <h2 id="hm-act-title" className="hm-act-title">
                Let&apos;s build from here
              </h2>
              <p className="hm-act-sub">
                Search the live catalog by SKU, model, or product name — or talk to the same team that scopes enterprise supply, install, and support.
              </p>
              <div className="hm-act-contact">
                <a className="hm-act-hotline" href="tel:0241021991">02-41021991</a>
                <a className="hm-act-email" href="mailto:info@missolution.com.bd">info@missolution.com.bd</a>
              </div>
            </div>

            <div className="hm-act-form-wrap">
              <form action="/search" method="GET" className="hm-act-form">
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
                  <span>Search catalog</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </form>

              <Link href="/request-custom-quote">
                <a className="hm-act-quote">
                  Request a quote
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default FindAndAct
