import React from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { homeViewport, motionState, staggerContainer } from './homeMotion'

const PATHS = [
  {
    index: '01',
    title: 'Shop Hardware',
    line: 'Laptops, desktops, networking, and office gear — ready to configure.',
    href: '/categories',
    image: '/core-it-black.jpg',
  },
  {
    index: '02',
    title: 'Enterprise Services',
    line: 'Digital, corporate infrastructure, and maintenance under one roof.',
    href: '/core-it-solutions',
    image: '/digital services.webp',
  },
  {
    index: '03',
    title: 'Solar',
    line: 'Commercial and residential solar design, supply, and install.',
    href: '/solar',
    image: '/solar-pro-field.jpg',
  },
]

const PathChooser = () => {
  const reduce = useReducedMotion()
  const item = motionState(reduce)

  return (
    <section className="hm-paths" aria-label="Choose your path">
      <motion.div
        className="hm-paths-grid"
        variants={reduce ? undefined : staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={homeViewport}
      >
        {PATHS.map((path) => (
          <motion.div key={path.href} className="hm-path" variants={item}>
            <Link href={path.href}>
              <a className="hm-path-link">
                <div className="hm-path-media" aria-hidden="true">
                  <img src={path.image} alt="" loading="lazy" decoding="async" />
                  <span className="hm-path-scrim" />
                </div>
                <div className="hm-path-copy">
                  <span className="hm-path-index">{path.index}</span>
                  <h2 className="hm-path-title">{path.title}</h2>
                  <p className="hm-path-line">{path.line}</p>
                </div>
              </a>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default PathChooser
