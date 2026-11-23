import React, { useRef } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { DisplayImage } from '../../lib/display-image'
import { fadeUp, homeViewport, motionState, reducedFade, staggerContainer } from './homeMotion'

const truncate = (text, max = 120) => {
  const value = String(text || '').trim()
  if (!value) return ''
  if (value.length <= max) return value
  return `${value.slice(0, max - 1).trim()}…`
}

/**
 * Customer-stories pattern (Stripe / Apple case studies):
 * one immersive lead story + horizontal snap gallery of the rest.
 */
const WorkGallery = ({ projects = [] }) => {
  const reduce = useReducedMotion()
  const railRef = useRef(null)
  if (!projects.length) return null

  const item = motionState(reduce)
  const [lead, ...rest] = projects.slice(0, 7)

  const scrollBy = (dir) => {
    const rail = railRef.current
    if (!rail) return
    const amount = Math.min(rail.clientWidth * 0.72, 420)
    rail.scrollBy({ left: dir * amount, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <section className="hm-work" aria-labelledby="hm-work-title">
      <motion.div
        className="hm-work-inner"
        initial="hidden"
        whileInView="show"
        viewport={homeViewport}
        variants={reduce ? reducedFade : fadeUp}
      >
        <header className="hm-section-head hm-section-head-split">
          <div>
            <span className="hm-eyebrow">Proof of work</span>
            <h2 id="hm-work-title" className="hm-section-title">Client projects</h2>
            <p className="hm-section-sub">Deployments and integrations for enterprises across Bangladesh.</p>
          </div>
          {rest.length > 0 && (
            <div className="hm-rail-arrows">
              <button type="button" className="hm-rail-nav" onClick={() => scrollBy(-1)} aria-label="Previous projects">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6" /></svg>
              </button>
              <button type="button" className="hm-rail-nav" onClick={() => scrollBy(1)} aria-label="Next projects">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            </div>
          )}
        </header>

        <motion.article
          className="hm-work-lead"
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={homeViewport}
        >
          <Link href={`/projects/${encodeURIComponent(lead.slug || lead.id)}`}>
            <a>
              <div className="hm-work-lead-media">
                <DisplayImage src={lead.icon_url} alt={lead.name} loading="eager" decoding="async" />
                <span className="hm-work-lead-scrim" aria-hidden="true" />
              </div>
              <div className="hm-work-lead-copy">
                {lead.client_name ? <span className="hm-work-client">{lead.client_name}</span> : null}
                <h3>{lead.name}</h3>
                {lead.description ? <p>{truncate(lead.description, 160)}</p> : null}
                <span className="hm-work-link">View story</span>
              </div>
            </a>
          </Link>
        </motion.article>

        {rest.length > 0 && (
          <motion.div
            className="hm-work-rail"
            ref={railRef}
            variants={reduce ? undefined : staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={homeViewport}
          >
            {rest.map((project) => (
              <motion.div key={project.id} className="hm-work-tile" variants={item}>
                <Link href={`/projects/${encodeURIComponent(project.slug || project.id)}`}>
                  <a>
                    <div className="hm-work-tile-media">
                      <DisplayImage src={project.icon_url} alt={project.name} loading="lazy" decoding="async" />
                    </div>
                    <div className="hm-work-tile-copy">
                      {project.client_name ? <span className="hm-work-client">{project.client_name}</span> : null}
                      <h3>{project.name}</h3>
                      <span className="hm-work-link">View story</span>
                    </div>
                  </a>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}

export default WorkGallery
