import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { DisplayImage } from '../../lib/display-image'
import { fadeUp, homeViewport, motionState, reducedFade, staggerContainer } from './homeMotion'

const truncate = (text, max = 110) => {
  const value = String(text || '').trim()
  if (!value) return ''
  if (value.length <= max) return value
  return `${value.slice(0, max - 1).trim()}…`
}

const layoutClass = (count) => {
  if (count <= 1) return 'hm-work-grid is-1'
  if (count === 2) return 'hm-work-grid is-2'
  if (count === 3) return 'hm-work-grid is-3'
  if (count === 4) return 'hm-work-grid is-4'
  return 'hm-work-grid is-6'
}

const WorkGallery = ({ projects = [] }) => {
  const reduce = useReducedMotion()
  if (!projects.length) return null

  const item = motionState(reduce)
  const items = projects.slice(0, 6)
  const useFeature = items.length === 3

  return (
    <section className="hm-work" aria-labelledby="hm-work-title">
      <motion.div
        className="hm-work-inner"
        initial="hidden"
        whileInView="show"
        viewport={homeViewport}
        variants={reduce ? reducedFade : fadeUp}
      >
        <header className="hm-section-head hm-section-head-left">
          <span className="hm-eyebrow">Proof of work</span>
          <h2 id="hm-work-title" className="hm-section-title">Client projects</h2>
          <p className="hm-section-sub">Selected deployments and integrations delivered for enterprises.</p>
        </header>

        <motion.div
          className={layoutClass(items.length)}
          variants={reduce ? undefined : staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={homeViewport}
        >
          {items.map((project, idx) => (
            <motion.div
              key={project.id}
              className={`hm-work-card${useFeature && idx === 0 ? ' is-feature' : ''}`}
              variants={item}
            >
              <Link href={`/projects/${encodeURIComponent(project.slug || project.id)}`}>
                <a>
                  <div className="hm-work-media">
                    <DisplayImage
                      src={project.icon_url}
                      alt={project.name}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="hm-work-copy">
                    {project.client_name ? <span className="hm-work-client">{project.client_name}</span> : null}
                    <h3>{project.name}</h3>
                    {project.description ? <p>{truncate(project.description)}</p> : null}
                    <span className="hm-work-link">View story</span>
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

export default WorkGallery
