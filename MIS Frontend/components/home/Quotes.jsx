import React, { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { fadeUp, homeViewport, reducedFade } from './homeMotion'

const QUOTES = [
  {
    text: 'MIS Solution has been a dependable technology partner for our institutional procurement and support needs — responsive, transparent, and precise.',
    name: 'Pro-Vice Chancellor',
    role: 'University of Dhaka',
  },
  {
    text: 'From hardware supply to ongoing support, MIS delivers with the discipline an investment firm expects — clear timelines and accountable service.',
    name: 'Mohammad Emran Hasan',
    role: 'Managing Director & CEO, Investit Asset Management Limited',
  },
]

const Quotes = () => {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (reduce || QUOTES.length <= 1) return undefined
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % QUOTES.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [reduce])

  const quote = QUOTES[index]

  return (
    <section className="hm-quotes" aria-labelledby="hm-quotes-title">
      <motion.div
        className="hm-quotes-inner"
        initial="hidden"
        whileInView="show"
        viewport={homeViewport}
        variants={reduce ? reducedFade : fadeUp}
      >
        <header className="hm-section-head hm-section-head-left">
          <span className="hm-eyebrow">Client voice</span>
          <h2 id="hm-quotes-title" className="hm-section-title">What partners say</h2>
        </header>

        <figure className="hm-quote">
          <blockquote>
            <p key={index}>“{quote.text}”</p>
          </blockquote>
          <figcaption>
            <strong>{quote.name}</strong>
            <span>{quote.role}</span>
          </figcaption>
        </figure>

        {QUOTES.length > 1 && (
          <div className="hm-quote-dots" role="tablist" aria-label="Testimonials">
            {QUOTES.map((q, i) => (
              <button
                key={q.name}
                type="button"
                role="tab"
                aria-selected={i === index}
                className={`hm-quote-dot${i === index ? ' is-active' : ''}`}
                onClick={() => setIndex(i)}
                aria-label={`${q.name}`}
              />
            ))}
          </div>
        )}
      </motion.div>
    </section>
  )
}

export default Quotes
