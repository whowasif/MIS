import React, { useState } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { fadeUp, homeViewport, motionState, reducedFade, staggerContainer } from './homeMotion'

const Icon = {
  browser: (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="4" width="19" height="15" rx="2.5" /><path d="M2.5 8h19" />
    </svg>
  ),
  crown: (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19h16" /><path d="M5 19V9l3 2 4-5 4 5 3-2v10" />
    </svg>
  ),
  wrench: (p) => (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.1-.4-.4-2.1z" />
    </svg>
  ),
}

const PILLARS = [
  {
    key: 'digital',
    type: 'digi_services',
    index: '01',
    title: 'Digital Services',
    tagline: 'Web, software, apps, and security for teams that ship.',
    href: '/digital-services',
    Icon: Icon.browser,
    fallback: ['Web Development', 'Custom Software', 'Mobile Apps', 'AI Solutions', 'Cyber Security', 'E-Commerce'],
  },
  {
    key: 'corporate',
    type: 'bus_corp_sol',
    index: '02',
    title: 'Business & Corporate',
    tagline: 'Hardware, networking, and site infrastructure at scale.',
    href: '/enterprise-solutions',
    Icon: Icon.crown,
    fallback: ['IT Equipment', 'Security Systems', 'Office Equipment', 'Networking', 'Server Setup', 'Power Solutions'],
  },
  {
    key: 'maintenance',
    type: 'service_maintenance',
    index: '03',
    title: 'Maintenance & Support',
    tagline: 'Contracts, repair, install, and remote response.',
    href: '/maintenance-support',
    Icon: Icon.wrench,
    fallback: ['AMC Contracts', 'On-call Repair', 'Installation', 'Troubleshooting', 'Remote Support'],
  },
]

const truncate = (text, max = 96) => {
  const value = String(text || '').trim()
  if (value.length <= max) return value
  return `${value.slice(0, max - 1).trim()}…`
}

const CapabilityMap = ({ featuredServices = [] }) => {
  const reduce = useReducedMotion()
  const [openKey, setOpenKey] = useState(PILLARS[0].key)
  const item = motionState(reduce)

  return (
    <section className="hm-caps" id="core-services" aria-labelledby="hm-caps-title">
      <motion.div
        className="hm-caps-inner"
        initial="hidden"
        whileInView="show"
        viewport={homeViewport}
        variants={reduce ? reducedFade : fadeUp}
      >
        <header className="hm-section-head hm-section-head-left hm-caps-head">
          <span className="hm-eyebrow">What we offer</span>
          <h2 id="hm-caps-title" className="hm-section-title">Core IT <span>Solutions</span></h2>
          <p className="hm-section-sub">Three specialized divisions — pick a lane, then go deeper.</p>
        </header>

        <motion.div
          className="hm-caps-grid"
          variants={reduce ? undefined : staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={homeViewport}
        >
          {PILLARS.map((pillar) => {
            const rows = featuredServices.filter((s) => s.type === pillar.type)
            const isOpen = openKey === pillar.key
            const HeadIcon = pillar.Icon
            return (
              <motion.article
                key={pillar.key}
                className={`hm-cap${isOpen ? ' is-open' : ''}`}
                variants={item}
              >
                <button
                  type="button"
                  className="hm-cap-toggle"
                  aria-expanded={isOpen}
                  onClick={() => setOpenKey(pillar.key)}
                >
                  <span className="hm-cap-mark">
                    <span className="hm-cap-index">{pillar.index}</span>
                    <span className="hm-cap-icon" aria-hidden="true">
                      <HeadIcon width="22" height="22" />
                    </span>
                  </span>
                  <span className="hm-cap-head">
                    <h3>{pillar.title}</h3>
                    <p>{pillar.tagline}</p>
                  </span>
                  <span className="hm-cap-chevron" aria-hidden="true" />
                </button>

                <div className="hm-cap-body">
                  {rows.length > 0 ? (
                    <ul className="hm-cap-list">
                      {rows.map((service) => (
                        <li key={`${service.type}-${service.slug}`}>
                          <Link href={`/services/${encodeURIComponent(service.slug)}?type=${service.type}`}>
                            <a>
                              <strong>{service.name}</strong>
                              {service.description ? <span>{truncate(service.description)}</span> : null}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="hm-cap-lines">
                      {pillar.fallback.map((label) => (
                        <li key={label}>
                          <Link href={pillar.href}>
                            <a>{label}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  <Link href={pillar.href}>
                    <a className="hm-cap-explore">Explore division →</a>
                  </Link>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default CapabilityMap
