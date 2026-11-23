import React, { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { fadeUp, homeViewport, reducedFade } from './homeMotion'

const QUOTES = [
  {
    text: 'MIS Solution has been a dependable technology partner for our institutional procurement and support needs — responsive, transparent, and precise.',
    name: 'Professor Abdus Salam',
    role: 'Pro-Vice Chancellor (Academic)',
    org: 'University of Dhaka',
    image: '/testimonials/abdus-salam.jpg',
  },
  {
    text: 'From hardware supply to ongoing support, MIS delivers with the discipline an investment firm expects — clear timelines and accountable service.',
    name: 'Mohammad Emran Hasan',
    role: 'Managing Director & CEO',
    org: 'Investit Asset Management Limited',
    image: '/testimonials/emran-hasan.webp',
  },
]

const pad = (n) => String(n).padStart(2, '0')

const Avatar = ({ quote }) => {
  const [broken, setBroken] = useState(false)
  const initials = quote.name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

  if (!quote.image || broken) {
    return (
      <span className="hm-ed-avatar-fallback" aria-hidden="true">
        {initials || (
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="8" r="3.5" />
            <path d="M5 19.5c1.6-3.2 4.2-4.8 7-4.8s5.4 1.6 7 4.8" />
          </svg>
        )}
      </span>
    )
  }

  return (
    <img
      src={quote.image}
      alt=""
      className="hm-ed-avatar-img"
      onError={() => setBroken(true)}
    />
  )
}

const Quotes = () => {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const total = QUOTES.length
  const quote = QUOTES[index]

  const go = useCallback(
    (next) => {
      setIndex(((next % total) + total) % total)
    },
    [total],
  )

  useEffect(() => {
    if (reduce || total <= 1) return undefined
    const timer = setInterval(() => go(index + 1), 7000)
    return () => clearInterval(timer)
  }, [reduce, total, index, go])

  return (
    <section className="hm-quotes" aria-labelledby="hm-quotes-title">
      <motion.div
        className="hm-quotes-inner"
        initial="hidden"
        whileInView="show"
        viewport={homeViewport}
        variants={reduce ? reducedFade : fadeUp}
      >
        <h2 id="hm-quotes-title" className="hm-sr-only">
          What partners say
        </h2>

        <div className="hm-ed">
          <div className="hm-ed-row">
            <span className="hm-ed-index" aria-hidden="true">
              {pad(index + 1)}
            </span>

            <div className="hm-ed-body">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={index}
                  className="hm-ed-quote"
                  initial={reduce ? false : { opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduce ? undefined : { opacity: 0, x: -12 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  {quote.text}
                </motion.blockquote>
              </AnimatePresence>

              <div className="hm-ed-person">
                <div className="hm-ed-avatar">
                  <Avatar key={quote.name} quote={quote} />
                </div>
                <div className="hm-ed-meta">
                  <p className="hm-ed-name">{quote.name}</p>
                  <p className="hm-ed-role">
                    {quote.role}
                    <span className="hm-ed-sep" aria-hidden="true">
                      /
                    </span>
                    <span className="hm-ed-org">{quote.org}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hm-ed-controls">
            <div className="hm-ed-nav-left">
              <div className="hm-ed-lines" role="tablist" aria-label="Testimonials">
                {QUOTES.map((q, i) => (
                  <button
                    key={q.name}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    className={`hm-ed-line${i === index ? ' is-active' : ''}`}
                    onClick={() => setIndex(i)}
                    aria-label={`${q.name}`}
                  >
                    <span />
                  </button>
                ))}
              </div>
              <span className="hm-ed-counter">
                {pad(index + 1)} / {pad(total)}
              </span>
            </div>

            <div className="hm-ed-chevrons">
              <button
                type="button"
                className="hm-ed-chev"
                onClick={() => go(index - 1)}
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                className="hm-ed-chev"
                onClick={() => go(index + 1)}
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Quotes
