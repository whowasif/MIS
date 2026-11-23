import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import HeroWorldMap from '../components/HeroWorldMap'
import PathChooser from '../components/home/PathChooser'
import OfferBand from '../components/home/OfferBand'
import CapabilityMap from '../components/home/CapabilityMap'
import ProofStrip from '../components/home/ProofStrip'
import WorkGallery from '../components/home/WorkGallery'
import FeaturedCatalog from '../components/home/FeaturedCatalog'
import Quotes from '../components/home/Quotes'
import FindAndAct from '../components/home/FindAndAct'

const HERO_SUBTITLE = 'Enterprise IT, hardware supply, and on-call support for teams that need technology that just works.'

const HeroTypewriter = ({ text }) => {
  const [shown, setShown] = useState('')
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReduceMotion(true)
      setShown(text)
      return undefined
    }

    let index = 0
    let deleting = false
    let timer

    const tick = () => {
      if (!deleting) {
        index += 1
        setShown(text.slice(0, index))
        if (index >= text.length) {
          deleting = true
          timer = setTimeout(tick, 2200)
          return
        }
        timer = setTimeout(tick, 36)
        return
      }

      index -= 1
      setShown(text.slice(0, index))
      if (index <= 0) {
        deleting = false
        timer = setTimeout(tick, 480)
        return
      }
      timer = setTimeout(tick, 20)
    }

    timer = setTimeout(tick, 520)
    return () => clearTimeout(timer)
  }, [text])

  if (reduceMotion) {
    return <p className="home-hero-subtitle">{text}</p>
  }

  return (
    <p className="home-hero-subtitle home-hero-subtitle-typed" aria-label={text}>
      <span className="home-hero-subtitle-ghost" aria-hidden="true">{text}</span>
      <span className="home-hero-subtitle-live" aria-hidden="true">
        {shown}
        <span className="home-hero-caret" />
      </span>
    </p>
  )
}

const HighlighterMark = ({ id, path, wash }) => (
  <svg className="home-hero-highlight" viewBox="0 0 220 48" preserveAspectRatio="none" aria-hidden="true">
    <defs>
      <linearGradient id={`${id}-ink`} x1="0" y1="0" x2="1" y2="0.22">
        <stop offset="0%" stopColor="#fff8c4" stopOpacity="0.38" />
        <stop offset="12%" stopColor="#ffe56a" stopOpacity="0.7" />
        <stop offset="27%" stopColor="#fff4b0" stopOpacity="0.34" />
        <stop offset="44%" stopColor="#ffd84a" stopOpacity="0.78" />
        <stop offset="61%" stopColor="#fff1a0" stopOpacity="0.42" />
        <stop offset="78%" stopColor="#ffe27c" stopOpacity="0.66" />
        <stop offset="100%" stopColor="#fff7d2" stopOpacity="0.36" />
      </linearGradient>
      <linearGradient id={`${id}-wash`} x1="0.15" y1="1" x2="0.85" y2="0">
        <stop offset="0%" stopColor="#fffce8" stopOpacity="0.18" />
        <stop offset="38%" stopColor="#ffe98a" stopOpacity="0.4" />
        <stop offset="72%" stopColor="#fff8c8" stopOpacity="0.16" />
        <stop offset="100%" stopColor="#ffe56a" stopOpacity="0.32" />
      </linearGradient>
    </defs>
    <path fill={`url(#${id}-ink)`} d={path} />
    <path fill={`url(#${id}-wash)`} d={wash} />
  </svg>
)

const HeroMotto = () => {
  const ref = useRef(null)
  const [highlighted, setHighlighted] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (reduceMotion) {
            setHighlighted(true)
            return
          }
          setHighlighted(false)
          requestAnimationFrame(() => {
            requestAnimationFrame(() => setHighlighted(true))
          })
          return
        }
        setHighlighted(false)
      },
      { threshold: 0.5 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <h1 className={`home-hero-title home-hero-motto${highlighted ? ' is-highlighted' : ''}`} ref={ref}>
      <span className="home-hero-motto-line">
        <HighlighterMark
          id="hero-hl-1"
          path="M3 5 C 42 1, 86 9, 128 3 S 188 10, 217 4 L 217 44 C 176 48, 132 40, 90 46 S 32 39, 3 43 Z"
          wash="M8 8 C 50 4, 92 13, 136 7 S 186 14, 210 8 L 208 40 C 166 44, 124 36, 82 42 S 24 35, 8 39 Z"
        />
        Commited to
      </span>
      <span className="home-hero-motto-line">
        <HighlighterMark
          id="hero-hl-2"
          path="M4 6 C 48 2, 90 10, 134 4 S 190 11, 216 5 L 216 43 C 174 47, 128 39, 86 45 S 28 38, 4 42 Z"
          wash="M10 9 C 54 5, 98 14, 140 8 S 188 15, 208 9 L 206 39 C 164 43, 118 35, 78 41 S 22 34, 10 38 Z"
        />
        Service...
      </span>
    </h1>
  )
}

const emptyProof = {
  projectCount: 0,
  categoryCount: 0,
  serviceCount: 0,
  productCount: 0,
}

const Home = (props) => {
  const {
    featuredProducts = [],
    advertisements = [],
    homeCategories = [],
    featuredServices = [],
    clientProjects = [],
    proof = emptyProof,
  } = props

  return (
    <>
      <div className="home-container1">
        <Head>
          <title>MIS Solution - IT Products & Enterprise Services</title>
          <meta property="og:title" content="MIS Solution - IT Products & Enterprise Services" />
          <link
            rel="preload"
            as="image"
            href="/hero-skyline-1920.jpg"
            imageSrcSet="/hero-skyline-1280.jpg 1280w, /hero-skyline-1920.jpg 1920w"
            imageSizes="100vw"
          />
          {featuredProducts.slice(0, 4).map((product) => (
            product.image ? <link key={product.id} rel="preload" as="image" href={product.image} /> : null
          ))}
        </Head>
        <Navigation />
        <section className="hero-section">
          <div className="hero-media-container" aria-hidden="true">
            <img
              className="hero-bg-image"
              src="/hero-skyline-1920.jpg"
              srcSet="/hero-skyline-1280.jpg 1280w, /hero-skyline-1920.jpg 1920w"
              sizes="100vw"
              alt=""
              decoding="async"
              fetchPriority="high"
            />
            <div className="home-hero-scrim" />
          </div>
          <div className="hero-content-wrapper">
            <div className="hero-copy">
              <div className="hero-text-block">
                <HeroMotto />
                <HeroTypewriter text={HERO_SUBTITLE} />
              </div>
              <div className="hero-cta-group">
                <a className="hero-feature-link" href="/core-it-solutions">
                  <span className="hero-feature-index">01</span>
                  <span className="hero-feature-label">Explore Services</span>
                  <span className="hero-feature-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path d="M5 12h12M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                </a>
                <a className="hero-feature-link" href="/categories/desktop">
                  <span className="hero-feature-index">02</span>
                  <span className="hero-feature-label">Shop Hardware</span>
                  <span className="hero-feature-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path d="M5 12h12M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                </a>
              </div>
            </div>
            <HeroWorldMap />
          </div>
        </section>

        <div className="home-mid">
          <PathChooser />
          <OfferBand advertisements={advertisements} />
          <CapabilityMap featuredServices={featuredServices} />
          <ProofStrip />
          <WorkGallery projects={clientProjects} />
          <Quotes />
          <FeaturedCatalog products={featuredProducts} />
          <FindAndAct />
        </div>

        <Footer />
      </div>
      <style jsx>{`
        .home-container1 { width: 100%; min-height: 100vh; }
      `}</style>
    </>
  )
}

async function loadPublicProps() {
  try {
    const { listFeaturedProducts } = await import('../lib/server/products')
    const { getDbPool } = await import('../lib/server/db')
    const db = getDbPool()

    const [
      featuredProducts,
      [ads],
      [cats],
      [featDigi],
      [featBiz],
      [featMaint],
      [clientProjectRows],
      [[{ projectCount }]],
      [[{ categoryCount }]],
      [[{ digiCount }]],
      [[{ bizCount }]],
      [[{ maintCount }]],
      [[{ productCount }]],
    ] = await Promise.all([
      listFeaturedProducts(10),
      db.query(`SELECT a.id, a.title, a.ad_details, a.image_url, a.link_url, a.product_id, p.slug AS product_slug FROM advertisements a LEFT JOIN products p ON p.id = a.product_id WHERE a.is_active = 1 ORDER BY a.display_order ASC, a.created_at DESC LIMIT 10`),
      db.query(`SELECT id, name, slug, icon_url FROM categories WHERE parent_id IS NULL AND deleted_at IS NULL AND status = 'active' ORDER BY display_order ASC LIMIT 15`),
      db.query(`SELECT name, slug, description, icon_url, 'digi_services' as type FROM digi_services WHERE deleted_at IS NULL AND status = 'active' AND is_featured = 1 ORDER BY display_order ASC LIMIT 4`),
      db.query(`SELECT name, slug, description, icon_url, 'bus_corp_sol' as type FROM bus_corp_sol WHERE deleted_at IS NULL AND status = 'active' AND is_featured = 1 ORDER BY display_order ASC LIMIT 4`),
      db.query(`SELECT name, slug, description, icon_url, 'service_maintenance' as type FROM service_maintenance WHERE deleted_at IS NULL AND status = 'active' AND is_featured = 1 ORDER BY display_order ASC LIMIT 4`),
      db.query(`SELECT id, name, slug, description, icon_url, client_name FROM client_projects WHERE deleted_at IS NULL AND status = 'active' ORDER BY is_featured DESC, display_order ASC, created_at DESC LIMIT 10`),
      db.query(`SELECT COUNT(*) AS projectCount FROM client_projects WHERE deleted_at IS NULL AND status = 'active'`),
      db.query(`SELECT COUNT(*) AS categoryCount FROM categories WHERE parent_id IS NULL AND deleted_at IS NULL AND status = 'active'`),
      db.query(`SELECT COUNT(*) AS digiCount FROM digi_services WHERE deleted_at IS NULL AND status = 'active'`),
      db.query(`SELECT COUNT(*) AS bizCount FROM bus_corp_sol WHERE deleted_at IS NULL AND status = 'active'`),
      db.query(`SELECT COUNT(*) AS maintCount FROM service_maintenance WHERE deleted_at IS NULL AND status = 'active'`),
      db.query(`SELECT COUNT(*) AS productCount FROM products WHERE deleted_at IS NULL AND is_active = 1`),
    ])

    const featuredServices = [...featDigi, ...featBiz, ...featMaint]
    const { resolveDisplayUrl } = await import('../lib/server/display-url')
    const withCard = (url) => resolveDisplayUrl(url, 'card')
    const withDetail = (url) => resolveDisplayUrl(url, 'detail')

    const toNum = (value) => Number(value) || 0

    return {
      props: {
        featuredProducts: featuredProducts.map((product) => ({ ...product, image: withCard(product.image) })),
        advertisements: JSON.parse(JSON.stringify(ads)).map((ad) => ({ ...ad, image_url: withDetail(ad.image_url) })),
        homeCategories: JSON.parse(JSON.stringify(cats)).map((cat) => ({ ...cat, icon_url: withCard(cat.icon_url) })),
        featuredServices: JSON.parse(JSON.stringify(featuredServices)).map((service) => ({ ...service, icon_url: withCard(service.icon_url) })),
        clientProjects: JSON.parse(JSON.stringify(clientProjectRows)).map((project) => ({ ...project, icon_url: withCard(project.icon_url) })),
        proof: {
          projectCount: toNum(projectCount),
          categoryCount: toNum(categoryCount),
          serviceCount: toNum(digiCount) + toNum(bizCount) + toNum(maintCount),
          productCount: toNum(productCount),
        },
        messages: (await import('../locales/en.json')).default,
      },
    }
  } catch (error) {
    throw error
  }
}

export const getServerSideProps = async ({ res }) => {
  const { servePublicCache } = await import('../lib/server/ttl-cache')
  return servePublicCache(res, 'page:home', loadPublicProps, async () => {
    const messages = (await import('../locales/en.json')).default
    const empty = {
      featuredProducts: [],
      advertisements: [],
      homeCategories: [],
      featuredServices: [],
      clientProjects: [],
      proof: emptyProof,
      messages,
    }

    if (process.env.NODE_ENV === 'production') {
      return { props: empty }
    }

    const { homeDevPreview } = await import('../components/home/homeDevPreview')
    return {
      props: {
        ...empty,
        advertisements: homeDevPreview.advertisements,
        clientProjects: homeDevPreview.clientProjects,
        featuredProducts: homeDevPreview.featuredProducts,
      },
    }
  })
}

export default Home
