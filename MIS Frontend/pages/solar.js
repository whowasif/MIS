import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

/*
  Plan: service · MIS brand yellow on warm stone · Albert Sans · soft
  Deal: moments pinned-chapters + picture-develops · close-type · dark-band · block
  Keep: existing hero composition + site footer
*/

const PRIMARY_CTA = { href: '/request-custom-quote', label: 'Request Solar Project Consultation' }
const SECONDARY_CTA = { href: '/contact', label: 'Contact our solar team' }

const HEADLINE = 'Solar power projects for organisations in Bangladesh'
const HERO_LEAD =
  'Rooftop, ground-mount and hybrid solar systems for corporate, government, semi-government and NGO sites in Bangladesh — engineered, installed and sourced by one team.'

const segments = [
  {
    label: 'Corporate',
    title: 'Lower energy cost at factories and offices',
    body: 'Rooftop and carport systems sized to your daytime load, with the payback period worked out before you commit.',
  },
  {
    label: 'Government',
    title: 'Meet tender and audit requirements',
    body: 'BOQs, technical specifications and compliance documents prepared for public procurement and ministry review.',
  },
  {
    label: 'Semi-government',
    title: 'Power campuses, utilities and institutions',
    body: 'Grid-tied and hybrid systems for autonomous bodies, universities and hospitals, phased to your budget cycle.',
  },
  {
    label: 'NGO and development',
    title: 'Bring reliable power to remote sites',
    body: 'Off-grid and battery systems for clinics, schools and field offices, with handover records donors can use.',
  },
]

const development = [
  'Energy audit and feasibility study',
  'System design, yield estimate and payback period',
  'Net-metering and utility application support',
  'Installation, testing and commissioning',
  'Operation and maintenance contracts',
]

const sourcing = [
  'Solar PV modules: mono PERC, TOPCon and bifacial',
  'On-grid, hybrid and off-grid inverters',
  'Lithium (LFP) and lead-acid battery banks',
  'Mounting structures for roofs and open ground',
  'Cables, protection devices and combiner boxes',
  'Monitoring systems and energy meters',
]

const steps = [
  {
    title: 'Survey the site',
    body: 'We inspect the roof or land, check shading and structure, and study 12 months of your electricity bills.',
    image: '/solar-pro-rooftop.jpg',
  },
  {
    title: 'Design the system and proposal',
    body: 'You receive a panel layout, a priced BOQ, a yield estimate and the expected payback period for approval.',
    image: '/solar-pro-farm.jpg',
  },
  {
    title: 'Source and install',
    body: 'We procure the approved components and install them under our own site supervision and safety checks.',
    image: '/solar-pro-install.jpg',
  },
  {
    title: 'Commission and hand over',
    body: 'We test and connect the system, train your staff, and hand over drawings, test reports and warranties.',
    image: '/solar-pro-array.jpg',
  },
]

const reasons = [
  {
    title: 'One team from survey to support',
    body: 'Design, sourcing, installation and maintenance sit with one accountable team, so nothing falls between suppliers.',
  },
  {
    title: 'Components you can verify',
    body: 'We quote named brands and models, and hand over invoices and warranty papers for every major component.',
  },
  {
    title: 'Paperwork for procurement',
    body: 'Specifications, BOQs and compliance documents ready for tender committees, auditors and donors.',
  },
  {
    title: 'Support after handover',
    body: 'Our maintenance team covers inspections, cleaning schedules and fault response once the system is running.',
  },
]

const consultationChecklist = [
  'Site address and the roof or land area available',
  'Electricity bills for the last 12 months',
  'Type of organisation and how it procures',
  'Grid-tied, hybrid or off-grid preference, if known',
  'Your target date for commissioning',
]

/* Opacity-only reveals — no transform/clip on ancestors (keeps knock-out fixed bg intact) */
const reveal = (reduce, delay = 0) =>
  reduce
    ? {}
    : {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
      }

const CtaPair = ({ onDark = false }) => (
  <div className="sol-actions">
    <Link href={PRIMARY_CTA.href}>
      <a className="sol-btn">
        <span className="sol-btn-fill" aria-hidden="true" />
        <span className="sol-btn-sheen" aria-hidden="true" />
        <span className="sol-btn-label">{PRIMARY_CTA.label}</span>
      </a>
    </Link>
    <Link href={SECONDARY_CTA.href}>
      <a className={`sol-link${onDark ? ' sol-link--dark' : ''}`}>{SECONDARY_CTA.label}</a>
    </Link>
  </div>
)

const HowItWorks = ({ reduce }) => {
  const [active, setActive] = useState(0)

  return (
    <section className="sol-section sol-how" id="how-it-works" aria-labelledby="sol-how-h">
      <div className="sol-wrap sol-how-grid">
        <div className="sol-how-copy">
          <h2 id="sol-how-h">Four steps from site survey to handover</h2>
          <p className="sol-lead">One project manager stays with you from the first site visit to the final handover.</p>
          <ol className="sol-steps-rail">
            {steps.map((s, i) => (
              <li key={s.title} className="sol-step-item">
                <button
                  type="button"
                  className={`sol-step-btn${active === i ? ' is-active' : ''}`}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  aria-current={active === i ? 'step' : undefined}
                >
                  <span className="sol-step-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="sol-step-text">
                    <strong>{s.title}</strong>
                    <span>{s.body}</span>
                  </span>
                </button>
                {active === i && !reduce ? (
                  <motion.span
                    className="sol-step-active-glow"
                    layoutId="sol-step-active"
                    transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                    aria-hidden="true"
                  />
                ) : active === i ? (
                  <span className="sol-step-active-glow" aria-hidden="true" />
                ) : null}
              </li>
            ))}
          </ol>
        </div>
        <div className="sol-how-frame" aria-hidden="true">
          {steps.map((s, i) => (
            <motion.img
              key={s.image}
              src={s.image}
              alt=""
              className={`sol-how-photo${active === i ? ' is-active' : ''}`}
              initial={false}
              animate={{ opacity: active === i ? 1 : 0 }}
              transition={reduce ? { duration: 0 } : { duration: 0.45 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const SolarPage = () => {
  const [heroReady, setHeroReady] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setHeroReady(true)
      return undefined
    }
    const id = window.requestAnimationFrame(() => setHeroReady(true))
    return () => window.cancelAnimationFrame(id)
  }, [])

  return (
    <div className="sol-page">
      <Head>
        <title>Solar Integrated Projects - MIS Solution</title>
        <meta
          name="description"
          content="MIS Solution designs, delivers and sources solar power projects for corporate, government, semi-government and NGO clients in Bangladesh."
        />
        <meta name="page-type" content="service" />
        <meta name="site-kind" content="other" />
        <meta property="og:title" content="Solar Integrated Projects - MIS Solution" />
        <meta
          property="og:description"
          content="Solar project development and component sourcing for organisations in Bangladesh."
        />
        <link rel="preload" as="image" href="/solar-hero-walker.avif" type="image/avif" />
        <link rel="preload" as="image" href="/solar-hero-walker.webp" type="image/webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&display=swap"
        />
      </Head>

      {/* Fixed to the viewport — panels/letters scroll over this */}
      <div className="sol-fixed-bg" aria-hidden="true">
        <picture>
          <source srcSet="/solar-hero-walker.avif" type="image/avif" />
          <source srcSet="/solar-hero-walker.webp" type="image/webp" />
          <img
            className="sol-fixed-photo"
            src="/solar-hero-walker.jpg"
            alt=""
            decoding="async"
            fetchPriority="high"
          />
        </picture>
      </div>

      <Navigation />

      <main>
        <section
          className={`sol-hero hero-section${heroReady ? ' is-ready' : ''}`}
          aria-labelledby="sol-hero-h"
        >
          <div className="sol-hero-frost">
            <div className="sol-hero-copy">
              <p className="sol-hero-eyebrow">Solar Integrated Projects</p>
              <h1 id="sol-hero-h" className="sol-hero-title" aria-label={HEADLINE}>
                <span className="sol-hero-title-stroke" aria-hidden="true">
                  {HEADLINE}
                </span>
                <span className="sol-hero-title-fill" aria-hidden="true">
                  {HEADLINE}
                </span>
              </h1>
              <p className="sol-hero-lead">{HERO_LEAD}</p>
            </div>
            <div className="sol-hero-cta">
              <CtaPair />
            </div>
          </div>
        </section>

        <section className="sol-section sol-clients" id="who-we-serve" aria-labelledby="sol-who-h">
          <div className="sol-wrap">
            <motion.div className="sol-section-head" {...reveal(reduce)}>
              <p className="sol-kicker">Who we serve</p>
              <h2 id="sol-who-h">Solar projects for corporate, public and NGO clients</h2>
              <p className="sol-lead">
                Each client group buys differently. We shape the proposal, paperwork and payment schedule to
                the way your organisation procures.
              </p>
            </motion.div>
            <ul className="sol-segment-rail">
              {segments.map((s, i) => (
                <motion.li key={s.label} {...reveal(reduce, reduce ? 0 : i * 0.05)}>
                  <div className="sol-segment-meta">
                    <span className="sol-segment-index">{String(i + 1).padStart(2, '0')}</span>
                    <span className="sol-segment-label">{s.label}</span>
                  </div>
                  <h3>{s.title}</h3>
                  <p className="sol-segment-body">{s.body}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        <section className="sol-section sol-services" id="services" aria-labelledby="sol-what-h">
          <div className="sol-wrap sol-services-grid">
            <motion.div className="sol-services-intro" {...reveal(reduce)}>
              <p className="sol-kicker">What we do</p>
              <h2 id="sol-what-h">Project development and component sourcing</h2>
              <p className="sol-lead">
                Hire us for the whole project or only the parts you need. Both services run from one team under
                one contract.
              </p>
            </motion.div>
            <div className="sol-services-cols">
              <motion.div className="sol-service-col" {...reveal(reduce, reduce ? 0 : 0.08)}>
                <h3>Project development</h3>
                <ul className="sol-list">
                  {development.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </motion.div>
              <motion.div className="sol-service-col" {...reveal(reduce, reduce ? 0 : 0.14)}>
                <h3>Component sourcing</h3>
                <ul className="sol-list">
                  {sourcing.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <HowItWorks reduce={reduce} />

        <section className="sol-section sol-develop" id="why-mis" aria-labelledby="sol-why-h">
          <div className="sol-wrap sol-develop-grid">
            <motion.div
              className="sol-develop-photo"
              aria-hidden="true"
              initial={reduce ? false : { opacity: 0.35, scale: 1.04, filter: 'grayscale(1)' }}
              whileInView={reduce ? undefined : { opacity: 1, scale: 1, filter: 'grayscale(0)' }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <img src="/solar-pro-field.jpg" alt="" />
            </motion.div>
            <div className="sol-develop-copy">
              <motion.div {...reveal(reduce)}>
                <p className="sol-kicker">Why MIS</p>
                <h2 id="sol-why-h">What MIS Solution brings to your project</h2>
                <p className="sol-lead">
                  MIS Solution already delivers data centres, structured cabling and security systems for
                  corporate clients. Solar projects run on the same delivery process.
                </p>
              </motion.div>
              <ul className="sol-reason-stack">
                {reasons.map((r, i) => (
                  <motion.li key={r.title} {...reveal(reduce, reduce ? 0 : i * 0.05)}>
                    <h3>{r.title}</h3>
                    <p>{r.body}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="sol-section sol-close" id="consultation" aria-labelledby="sol-close-h">
          <div className="sol-wrap sol-close-grid">
            <motion.div className="sol-close-main" {...reveal(reduce)}>
              <p className="sol-kicker sol-kicker--on-dark">Next step</p>
              <h2 id="sol-close-h">Plan your solar project with MIS Solution</h2>
              <p className="sol-lead">
                Share your site details with our solar team. We arrange a site survey and walk you through the
                next steps.
              </p>
              <CtaPair onDark />
            </motion.div>
            <motion.div className="sol-close-list" {...reveal(reduce, reduce ? 0 : 0.1)}>
              <h3>What to send for a first estimate</h3>
              <ul className="sol-list sol-list--dark">
                {consultationChecklist.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        /* Keep site footer above fixed page photo; do not restyle it */
        .sol-page .footer-container1,
        .sol-page .footer-mega {
          position: relative;
          z-index: 1;
        }

        .sol-page {
          --sol-bg: #f2f1ec;
          --sol-surface: #ffffff;
          --sol-ink: #12110e;
          --sol-muted: #5c5b55;
          --sol-line: rgba(18, 17, 14, 0.12);
          --sol-sun: #f7e500;
          --sol-sun-step: #e6d600;
          --sol-sun-ink: #111111;
          --sol-night: #000000;
          --sol-night-2: #0a0a0a;
          --sol-on-night: #f2f1ec;
          --sol-on-night-muted: #94928e;
          --sol-display: 'Source Serif 4', Georgia, 'Times New Roman', serif;
          --sol-sans: 'Albert Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
          --sol-text: var(--sol-sans);
          --sol-ease: cubic-bezier(0.2, 0.8, 0.2, 1);
          --sol-ease-enter: cubic-bezier(0.22, 1, 0.36, 1);
          --sol-gut: 80px;
          --sol-nav: 72px;
          --sol-radius: 12px;
          --sol-knock-img: url('/solar-hero-walker.webp');
          --sol-split: 50%;
          background: transparent;
          color: var(--sol-ink);
          font-family: var(--sol-sans);
          letter-spacing: 0;
        }

        /* Screen-fixed photo; content layers scroll over it */
        .sol-fixed-bg {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }
        .sol-fixed-bg picture {
          display: block;
          position: relative;
          width: 100%;
          height: 100%;
        }
        /* Desktop: scale to viewport width (see full scene width, crop top/bottom) */
        .sol-fixed-photo {
          position: absolute;
          left: 0;
          top: 50%;
          width: 100%;
          height: auto;
          min-height: 100%;
          transform: translateY(-50%);
          object-fit: cover;
          object-position: center center;
        }
        .sol-page main {
          position: relative;
          z-index: 1;
        }
        /* Seams: fixed farm photo peeks between scrolling bands */
        .sol-page main > section + section {
          margin-top: 16px;
        }

        /*
          Knock-out on section headers + hero headline.
          attachment:fixed = same locked bg as .sol-fixed-bg; letters scroll over it.
        */
        .sol-page main > section:not(.sol-hero) h2 {
          color: transparent !important;
          -webkit-text-fill-color: transparent !important;
          font-weight: 700 !important;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.06)),
            var(--sol-knock-img);
          background-size: 100vw auto, 100vw auto;
          background-position: center center, center center;
          background-repeat: no-repeat, no-repeat;
          background-attachment: fixed, fixed;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-stroke: 1.15px rgba(255, 255, 255, 0.88);
        }
        .sol-page main .sol-btn {
          background-image: none;
          -webkit-background-clip: border-box;
          background-clip: border-box;
          -webkit-text-stroke: 0;
        }

        .sol-page ::selection {
          background: var(--sol-sun);
          color: var(--sol-sun-ink);
        }
        .sol-hero,
        .sol-section {
          scroll-margin-top: var(--sol-nav);
        }

        .sol-page main h1,
        .sol-page main h2,
        .sol-page main h3 {
          margin: 0;
          font-weight: 400;
          color: inherit;
          text-wrap: balance;
        }
        .sol-page main h2 {
          font-family: var(--sol-sans);
          font-size: clamp(32px, 4vw, 56px);
          line-height: 1.05;
          letter-spacing: -0.035em;
          max-width: 18ch;
          font-weight: 700;
        }
        .sol-page main h3 {
          font-family: var(--sol-sans);
          font-size: clamp(18px, 1.4vw, 22px);
          line-height: 1.25;
          letter-spacing: -0.02em;
          font-weight: 600;
        }
        .sol-page main p {
          margin: 0;
        }
        .sol-page main ul,
        .sol-page main ol {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .sol-wrap {
          width: min(100% - 2 * var(--sol-gut), 1280px);
          margin: 0 auto;
        }

        .sol-section {
          position: relative;
          z-index: 1;
          padding: min(18vh, 120px) 0 min(14vh, 96px);
          background: #ffffff;
        }

        .sol-kicker {
          margin: 0 0 16px !important;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--sol-muted);
        }
        .sol-kicker--on-dark {
          color: var(--sol-on-night-muted);
        }

        .sol-lead {
          margin-top: 20px !important;
          max-width: 42ch;
          font-size: 17px;
          line-height: 1.55;
          color: var(--sol-muted);
        }

        .sol-section-head {
          max-width: 52rem;
          margin-bottom: 56px;
        }

        .sol-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 16px 28px;
        }
        .sol-btn {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 54px;
          padding: 16px 28px;
          border: 0;
          border-radius: 8px;
          background: var(--sol-sun);
          color: #111111 !important;
          -webkit-text-fill-color: #111111 !important;
          font-family: var(--sol-sans);
          font-size: 15px;
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.01em;
          text-decoration: none;
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.18);
          transition: transform 180ms var(--sol-ease), box-shadow 180ms var(--sol-ease),
            filter 180ms var(--sol-ease);
        }
        .sol-btn-fill {
          display: none;
        }
        .sol-btn-sheen {
          position: absolute;
          z-index: 1;
          top: 0;
          left: -60%;
          width: 48%;
          height: 100%;
          background: linear-gradient(
            100deg,
            transparent 20%,
            rgba(255, 255, 255, 0.55) 50%,
            transparent 80%
          );
          pointer-events: none;
          animation: sol-btn-sheen 2.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .sol-btn-label {
          position: relative;
          z-index: 2;
        }
        @keyframes sol-btn-sheen {
          0%,
          35% {
            transform: translateX(0) skewX(-18deg);
            opacity: 0;
          }
          45% {
            opacity: 1;
          }
          75%,
          100% {
            transform: translateX(320%) skewX(-18deg);
            opacity: 0;
          }
        }
        .sol-link {
          display: inline-flex;
          align-items: center;
          min-height: 44px;
          color: var(--sol-ink);
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          background-image: linear-gradient(currentColor, currentColor);
          background-position: 0 100%;
          background-repeat: no-repeat;
          background-size: 0 1px;
          transition: background-size 220ms var(--sol-ease), color 150ms var(--sol-ease);
        }
        .sol-link--dark {
          color: var(--sol-on-night);
        }
        @media (hover: hover) and (pointer: fine) {
          .sol-btn:hover {
            filter: brightness(1.04);
            box-shadow: 0 14px 32px rgba(0, 0, 0, 0.22);
            transform: translateY(-1px);
          }
          .sol-link:hover {
            background-size: 100% 1px;
          }
        }
        .sol-btn:active {
          transform: scale(0.98);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.16);
          filter: brightness(0.98);
        }
        .sol-page a:focus-visible {
          outline: 2px solid var(--sol-sun);
          outline-offset: 3px;
          border-radius: 4px;
        }

        /* Hero overlays only — photo is .sol-fixed-bg */
        .sol-hero {
          position: relative;
          z-index: 1;
          min-height: 100vh;
          min-height: 100svh;
          min-height: 100dvh;
          box-sizing: border-box;
          padding: 0;
          background: transparent;
          color: var(--sol-ink);
          overflow: hidden;
        }

        .sol-page .sol-hero-lead {
          position: relative;
          z-index: 1;
          width: auto;
          max-width: 42ch;
          margin: 0 !important;
          padding: 0;
          border-radius: 0;
          background: transparent;
          font-size: 15px;
          line-height: 1.6;
          color: var(--sol-muted) !important;
          -webkit-text-fill-color: var(--sol-muted) !important;
          background-image: none;
          opacity: 0;
          transition: opacity 480ms var(--sol-ease-enter) 220ms;
        }
        .sol-hero.is-ready .sol-hero-lead {
          opacity: 1;
        }

        .sol-hero-frost {
          position: absolute;
          z-index: 2;
          top: 0;
          right: 0;
          bottom: 0;
          width: var(--sol-split);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 20px;
          box-sizing: border-box;
          padding: calc(var(--sol-nav) + 24px) clamp(28px, 4vw, 56px) clamp(56px, 10vh, 96px);
          background: #ffffff !important;
          border: 0;
          box-shadow: none;
          opacity: 0;
          transition: opacity 520ms var(--sol-ease-enter);
        }
        .sol-hero.is-ready .sol-hero-frost {
          opacity: 1;
        }
        .sol-hero-copy {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .sol-page .sol-hero-eyebrow {
          margin: 0 !important;
          font-family: var(--sol-sans);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #111111 !important;
          -webkit-text-fill-color: #111111 !important;
          background: none !important;
          -webkit-text-stroke: 0 !important;
        }
        .sol-page .sol-hero-title {
          position: relative;
          margin: 0;
          max-width: 14ch;
          font-family: var(--sol-display);
          font-size: clamp(32px, 3.4vw, 52px);
          font-weight: 700 !important;
          line-height: 1.05;
          letter-spacing: -0.03em;
          text-wrap: balance;
        }
        .sol-page .sol-hero-title-stroke,
        .sol-page .sol-hero-title-fill {
          display: block;
          font: inherit;
          letter-spacing: inherit;
          line-height: inherit;
          text-wrap: inherit;
        }
        .sol-page .sol-hero-title-stroke {
          position: absolute;
          inset: 0;
          color: transparent;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke: 2px #ffffff;
          pointer-events: none;
          user-select: none;
          opacity: 0;
          transition: opacity 420ms var(--sol-ease-enter) 40ms;
        }
        .sol-page .sol-hero-title-fill {
          position: relative;
          color: transparent;
          -webkit-text-fill-color: transparent;
          font-weight: 700 !important;
          background-image: url('/solar-hero-walker.webp');
          background-size: 100vw auto;
          background-position: center center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          -webkit-background-clip: text;
          background-clip: text;
          opacity: 0;
          transition: opacity 560ms var(--sol-ease-enter) 180ms;
        }
        .sol-hero.is-ready .sol-hero-title-stroke,
        .sol-hero.is-ready .sol-hero-title-fill {
          opacity: 1;
        }
        @supports not ((-webkit-background-clip: text) or (background-clip: text)) {
          .sol-page .sol-hero-title-stroke {
            display: none;
          }
          .sol-page .sol-hero-title-fill {
            color: #111111;
            -webkit-text-fill-color: #111111;
            background: none;
          }
        }
        .sol-hero-cta {
          margin-top: 4px;
        }
        .sol-hero .sol-actions {
          margin-top: 0;
        }
        .sol-hero .sol-link {
          color: #111111;
          font-family: var(--sol-sans);
        }

        /* Clients — editorial rail, no cards */
        .sol-clients {
          background: #ffffff;
        }
        .sol-segment-rail {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0;
          border-top: 1px solid var(--sol-line);
        }
        .sol-segment-rail > li {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 32px 28px 28px 0;
          border-right: 1px solid var(--sol-line);
        }
        .sol-segment-rail > li:not(:first-child) {
          padding-left: 28px;
        }
        .sol-segment-rail > li:last-child {
          border-right: 0;
          padding-right: 0;
        }
        .sol-segment-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          min-height: 24px;
        }
        .sol-segment-index {
          flex: 0 0 auto;
          margin: 0 !important;
          font-size: 12px;
          font-weight: 700;
          font-variant-numeric: tabular-nums;
          letter-spacing: 0.06em;
          color: var(--sol-sun-ink);
          background: var(--sol-sun);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 2.25rem;
          padding: 4px 7px;
          border-radius: 2px;
          line-height: 1;
        }
        .sol-segment-label {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--sol-muted);
        }
        .sol-page main .sol-segment-rail h3 {
          font-size: clamp(17px, 1.35vw, 20px);
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: -0.02em;
          max-width: 16ch;
        }
        .sol-segment-body {
          margin: 0 !important;
          font-size: 14px;
          line-height: 1.55;
          color: var(--sol-muted);
          max-width: 28ch;
        }

        /* Services */
        .sol-services {
          background: #ffffff;
        }
        .sol-services-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.75fr) minmax(0, 1.25fr);
          gap: 48px 72px;
          align-items: start;
        }
        .sol-services-cols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px 36px;
        }
        .sol-service-col h3 {
          padding-bottom: 16px;
          border-bottom: 2px solid var(--sol-sun);
        }
        .sol-list {
          margin-top: 8px !important;
        }
        .sol-list li {
          position: relative;
          padding: 16px 0 16px 22px;
          font-size: 15px;
          line-height: 1.5;
          border-bottom: 1px solid var(--sol-line);
        }
        .sol-list li:last-child {
          border-bottom: 0;
        }
        .sol-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 22px;
          width: 8px;
          height: 8px;
          background: var(--sol-sun);
        }

        /* How — pinned-chapters style */
        .sol-how {
          background: #000000;
          color: var(--sol-on-night);
          min-height: 100vh;
          display: flex;
          align-items: center;
        }
        .sol-how .sol-lead {
          color: var(--sol-on-night-muted);
        }
        .sol-how-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
          gap: 48px;
          align-items: center;
          width: min(100% - 2 * var(--sol-gut), 1280px);
          margin: 0 auto;
        }
        .sol-steps-rail {
          margin-top: 36px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .sol-step-item {
          position: relative;
        }
        .sol-step-active-glow {
          position: absolute;
          inset: 0;
          z-index: 0;
          border-radius: 8px;
          background: #0a0a0a;
          border: 1px solid rgba(247, 229, 0, 0.28);
          pointer-events: none;
        }
        .sol-step-btn {
          position: relative;
          z-index: 1;
          width: 100%;
          display: grid;
          grid-template-columns: 48px 1fr;
          gap: 14px;
          align-items: start;
          padding: 16px 14px;
          border: 0;
          border-radius: 8px;
          background: transparent;
          color: inherit;
          text-align: left;
          cursor: pointer;
          transition: color 160ms var(--sol-ease);
        }
        .sol-step-btn.is-active .sol-step-num {
          color: var(--sol-sun);
        }
        .sol-step-num {
          font-size: 13px;
          font-weight: 600;
          font-variant-numeric: tabular-nums;
          padding-top: 2px;
          color: var(--sol-on-night-muted);
          transition: color 160ms var(--sol-ease);
        }
        .sol-step-text {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .sol-step-text strong {
          font-size: 17px;
          font-weight: 600;
          letter-spacing: -0.02em;
        }
        .sol-step-text span {
          font-size: 14px;
          line-height: 1.5;
          color: var(--sol-on-night-muted);
        }
        .sol-how-frame {
          position: relative;
          aspect-ratio: 4 / 5;
          max-height: min(72vh, 640px);
          overflow: hidden;
          border-radius: var(--sol-radius);
          background: #000000;
        }
        .sol-how-photo {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
        }

        /* Why — picture develops */
        .sol-develop {
          background: #ffffff;
        }
        .sol-develop-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
          gap: 56px;
          align-items: center;
        }
        .sol-develop-photo {
          overflow: hidden;
          border-radius: var(--sol-radius);
          aspect-ratio: 5 / 6;
          background: #ddd;
        }
        .sol-develop-photo img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 40%;
        }
        .sol-reason-stack {
          margin-top: 40px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .sol-reason-stack li {
          padding: 22px 0;
          border-top: 1px solid var(--sol-line);
        }
        .sol-reason-stack p {
          margin-top: 8px !important;
          font-size: 15px;
          line-height: 1.55;
          color: var(--sol-muted);
        }

        /* Close — type-led dark band */
        .sol-close {
          background: #000000;
          color: var(--sol-on-night);
        }
        .sol-close .sol-lead {
          color: var(--sol-on-night-muted);
          max-width: 36ch;
        }
        .sol-close-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
          gap: 48px;
          align-items: end;
        }
        .sol-page main .sol-close h2 {
          font-size: clamp(40px, 6vw, 88px);
          max-width: 11ch;
          letter-spacing: -0.04em;
        }
        .sol-close .sol-actions {
          margin-top: 36px;
        }
        .sol-close-list {
          padding: 28px 28px 18px;
          border-radius: var(--sol-radius);
          background: #0a0a0a;
          border: 1px solid rgba(242, 241, 236, 0.14);
        }
        .sol-close-list h3 {
          margin-bottom: 4px;
        }
        .sol-list--dark li {
          border-bottom-color: rgba(242, 241, 236, 0.12);
          color: var(--sol-on-night);
        }

        @media (max-width: 1279px) {
          .sol-page {
            --sol-gut: 48px;
          }
          .sol-segment-rail {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .sol-segment-rail > li {
            padding: 36px 0 32px;
          }
          .sol-segment-rail > li:nth-child(odd) {
            padding-left: 0;
            padding-right: 32px;
            border-right: 1px solid var(--sol-line);
          }
          .sol-segment-rail > li:nth-child(even) {
            padding-left: 32px;
            padding-right: 0;
            border-right: 0;
          }
          .sol-segment-rail > li:nth-child(n + 3) {
            border-top: 1px solid var(--sol-line);
            padding-top: 36px;
          }
        }

        /* Tablet + phone: full-bleed photo hero (no white panel) */
        @media (max-width: 1023px) {
          .sol-page {
            --sol-gut: 32px;
            --sol-split: 100%;
          }
          .sol-hero {
            min-height: 100svh;
            min-height: 100dvh;
            height: 100svh;
            height: 100dvh;
            overflow: hidden;
          }
          .sol-page .sol-hero-frost {
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100% !important;
            height: 100% !important;
            min-height: 100% !important;
            justify-content: space-between;
            gap: 20px;
            padding: calc(var(--sol-nav) + 18px) var(--sol-gut)
              max(24px, env(safe-area-inset-bottom, 0px) + 20px);
            border: 0;
            background: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.58) 0%,
              rgba(0, 0, 0, 0.14) 34%,
              rgba(0, 0, 0, 0.1) 58%,
              rgba(0, 0, 0, 0.66) 100%
            ) !important;
          }
          .sol-hero-copy {
            gap: 12px;
          }
          .sol-hero-cta {
            margin-top: auto;
            width: 100%;
          }
          .sol-page .sol-hero-eyebrow {
            color: rgba(255, 255, 255, 0.85) !important;
            -webkit-text-fill-color: rgba(255, 255, 255, 0.85) !important;
          }
          .sol-page .sol-hero-title {
            font-size: clamp(28px, 6vw, 40px);
            max-width: 14ch;
            line-height: 1.08;
          }
          .sol-page .sol-hero-title-stroke {
            display: none !important;
          }
          .sol-page .sol-hero-title-fill {
            color: #ffffff !important;
            -webkit-text-fill-color: #ffffff !important;
            background: none !important;
            -webkit-background-clip: border-box !important;
            background-clip: border-box !important;
            text-shadow: 0 1px 18px rgba(0, 0, 0, 0.4);
          }
          .sol-page .sol-hero-lead {
            max-width: 36ch;
            margin-top: 10px !important;
            font-size: 15px;
            color: rgba(255, 255, 255, 0.9) !important;
            -webkit-text-fill-color: rgba(255, 255, 255, 0.9) !important;
          }
          .sol-fixed-photo {
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            height: 100% !important;
            min-width: 0 !important;
            min-height: 0 !important;
            transform: none !important;
            object-fit: cover !important;
            object-position: 16% 58% !important;
          }
          .sol-page main > section:not(.sol-hero) h2 {
            background-attachment: scroll, scroll;
            background-size: cover, cover;
            background-position: 16% 58%, 16% 58%;
          }
          .sol-hero .sol-actions {
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
            width: 100%;
          }
          .sol-hero .sol-btn {
            width: 100%;
            min-height: 56px;
          }
          .sol-hero .sol-link {
            align-self: center;
            color: #ffffff !important;
            -webkit-text-fill-color: #ffffff !important;
          }
          .sol-services-grid,
          .sol-how-grid,
          .sol-develop-grid,
          .sol-close-grid {
            grid-template-columns: 1fr;
          }
          .sol-how {
            min-height: 0;
            padding-top: 88px;
            padding-bottom: 88px;
          }
          .sol-how-frame {
            max-height: 420px;
            aspect-ratio: 16 / 10;
          }
          .sol-develop-photo {
            aspect-ratio: 16 / 11;
            order: -1;
          }
          .sol-services-cols {
            gap: 28px;
          }
        }

        @media (max-width: 767px) {
          .sol-page {
            --sol-gut: 24px;
            --sol-nav: 64px;
          }
          .sol-page .sol-hero-title {
            font-size: clamp(28px, 8vw, 36px);
          }
          .sol-page .sol-hero-lead {
            font-size: 14px;
            max-width: 34ch;
          }
          .sol-segment-rail,
          .sol-services-cols {
            grid-template-columns: 1fr;
          }
          .sol-segment-rail > li {
            border-right: 0;
            border-bottom: 1px solid var(--sol-line);
            padding: 24px 0;
          }
          .sol-segment-rail > li:last-child {
            border-bottom: 0;
          }
          .sol-actions {
            flex-direction: column;
            align-items: stretch;
            gap: 8px;
          }
          .sol-btn {
            width: 100%;
            text-align: center;
          }
          .sol-link {
            align-self: center;
          }
          .sol-section {
            padding: 72px 0 64px;
          }
          .sol-page main > section + section {
            margin-top: 10px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sol-hero-frost,
          .sol-hero-lead,
          .sol-hero-title-stroke,
          .sol-hero-title-fill {
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .sol-btn-sheen {
            animation: none !important;
            opacity: 0 !important;
          }
          .sol-btn-fill {
            transition: none !important;
          }
        }
      `}</style>
    </div>
  )
}

export default SolarPage
