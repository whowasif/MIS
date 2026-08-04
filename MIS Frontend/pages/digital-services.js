import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const fallbackServices = [
  { id: 'digital-1', name: 'Website Design & Development', slug: 'website-design-development', description: 'Modern business websites with responsive UI, SEO-friendly structure, and conversion-focused design.' },
  { id: 'digital-2', name: 'Web Domain & Hosting', slug: 'web-domain-hosting', description: 'Domain setup, DNS, secure hosting, SSL, and performance optimization for reliable uptime.' },
  { id: 'digital-3', name: 'Domain Registration', slug: 'domain-registration', description: 'Secure your brand with local and international domain registration and renewal support.' },
  { id: 'digital-4', name: 'Digital Marketing', slug: 'digital-marketing', description: 'SEO, social campaigns, and paid ads to increase leads, visibility, and online revenue.' },
  { id: 'digital-5', name: 'Mobile App Development', slug: 'mobile-app-development', description: 'Custom mobile app solutions for Android and iOS integrated with your existing systems.' },
]

const MetricCounter = ({ end, suffix, label }) => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 1600
          const startTime = performance.now()
          const animate = (currentTime) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * end))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [hasAnimated, end])

  return (
    <div className="ds-metric" ref={ref}>
      <span className="ds-metric-value">{count}{suffix}</span>
      <span className="ds-metric-label">{label}</span>
    </div>
  )
}

const DigitalServices = ({ services = [] }) => {
  const digitalServices = Array.isArray(services) && services.length > 0 ? services : fallbackServices

  return (
    <>
      <div className="ds-page">
        <Head>
          <title>Digital Services - MIS Solution</title>
          <meta property="og:title" content="Digital Services - MIS Solution" />
          <meta name="description" content="Website design, web hosting, domain registration, digital marketing, and mobile app development services by MIS Solution." />
        </Head>

        <Navigation />

        {/* Hero */}
        <section className="ds-hero">
          <div className="ds-hero-bg">
            <img src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1500" alt="" aria-hidden="true" />
            <div className="ds-hero-overlay"></div>
          </div>
          <div className="ds-hero-content">
            <nav className="ds-breadcrumb" aria-label="Breadcrumb">
              <Link href="/"><a>Home</a></Link>
              <span>/</span>
              <Link href="/core-it-solutions"><a>Core IT Solutions</a></Link>
              <span>/</span>
              <span className="ds-breadcrumb-current">Digital Services</span>
            </nav>
            <h1>Digital Services</h1>
            <p>Building your digital presence from the ground up — websites, apps, hosting, marketing, and everything in between.</p>
          </div>
        </section>

        {/* Metrics */}
        <section className="ds-metrics-section">
          <div className="ds-metrics-container">
            <MetricCounter end={200} suffix="+" label="Websites Delivered" />
            <MetricCounter end={99} suffix="%" label="Uptime Guarantee" />
            <MetricCounter end={50} suffix="+" label="Active Clients" />
            <MetricCounter end={24} suffix="/7" label="Support Available" />
          </div>
        </section>

        {/* Services Grid */}
        <section className="ds-services-section">
          <div className="ds-services-container">
            <div className="ds-services-header">
              <h2>What We Offer</h2>
              <p>Full-spectrum digital services designed to establish, grow, and maintain your online presence.</p>
            </div>
            <div className="ds-services-grid">
              {digitalServices.map((service, idx) => (
                <Link key={service.id} href={`/services/${encodeURIComponent(service.slug || service.id)}?type=digi_services`}>
                  <a className={`ds-service-card ${idx === 0 ? 'ds-service-featured' : ''}`}>
                    <div className="ds-service-img">
                      {service.iconUrl ? <img src={service.iconUrl} alt={service.name} /> : <div className="ds-service-placeholder"><span>{service.name.charAt(0)}</span></div>}
                    </div>
                    <div className="ds-service-body">
                      <h3>{service.name}</h3>
                      <p>{service.description}</p>
                      <span className="ds-service-link">Learn More →</span>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="ds-process-section">
          <div className="ds-process-container">
            <div className="ds-process-header">
              <h2>Our Digital Process</h2>
              <p>A proven methodology that transforms ideas into high-performing digital products.</p>
            </div>
            <div className="ds-process-timeline">
              <div className="ds-process-item">
                <div className="ds-process-dot"></div>
                <div className="ds-process-content">
                  <span className="ds-process-step">Step 01</span>
                  <h3>Discovery & Strategy</h3>
                  <p>Understanding your business, target audience, and goals to craft the perfect digital strategy.</p>
                </div>
              </div>
              <div className="ds-process-item">
                <div className="ds-process-dot"></div>
                <div className="ds-process-content">
                  <span className="ds-process-step">Step 02</span>
                  <h3>Design & Prototype</h3>
                  <p>Creating wireframes, mockups, and interactive prototypes for review before development begins.</p>
                </div>
              </div>
              <div className="ds-process-item">
                <div className="ds-process-dot"></div>
                <div className="ds-process-content">
                  <span className="ds-process-step">Step 03</span>
                  <h3>Development & Testing</h3>
                  <p>Building with modern technologies, rigorous testing across devices, and performance optimization.</p>
                </div>
              </div>
              <div className="ds-process-item">
                <div className="ds-process-dot"></div>
                <div className="ds-process-content">
                  <span className="ds-process-step">Step 04</span>
                  <h3>Launch & Growth</h3>
                  <p>Deploying to production, SEO setup, analytics integration, and ongoing maintenance support.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="ds-cta-section">
          <div className="ds-cta-container">
            <h2>Have a Digital Project in Mind?</h2>
            <p>Let&apos;s turn your vision into a powerful digital experience.</p>
            <div className="ds-cta-buttons">
              <Link href="/request-custom-quote"><a className="ds-cta-btn ds-cta-primary">Get a Free Quote</a></Link>
              <Link href="/contact"><a className="ds-cta-btn ds-cta-secondary">Talk to Our Team</a></Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <style jsx>{`
        .ds-page { width: 100%; min-height: 100vh; }

        /* Hero */
        .ds-hero { position: relative; min-height: 420px; display: flex; align-items: flex-end; }
        .ds-hero-bg { position: absolute; inset: 0; }
        .ds-hero-bg img { width: 100%; height: 100%; object-fit: cover; }
        .ds-hero-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,16,27,0.95) 0%, rgba(10,16,27,0.6) 50%, rgba(10,16,27,0.3) 100%); }
        .ds-hero-content { position: relative; z-index: 1; max-width: 800px; padding: 60px 32px 48px; }
        .ds-breadcrumb { display: flex; align-items: center; gap: 8px; font-size: 13px; margin-bottom: 16px; }
        .ds-breadcrumb :global(a) { color: rgba(255,255,255,0.7); text-decoration: none; font-weight: 500; transition: color 0.15s; }
        .ds-breadcrumb :global(a:hover) { color: #f7e500; }
        .ds-breadcrumb span { color: rgba(255,255,255,0.4); }
        .ds-breadcrumb-current { color: #f7e500; font-weight: 600; }
        .ds-hero-content h1 { margin: 0; font-size: clamp(32px, 5vw, 48px); font-weight: 800; color: #ffffff; line-height: 1.1; }
        .ds-hero-content p { margin: 14px 0 0; font-size: 17px; color: rgba(255,255,255,0.7); line-height: 1.6; max-width: 600px; }

        /* Metrics */
        .ds-metrics-section { padding: 0 24px; margin-top: -1px; background: #0a101b; }
        .ds-metrics-container { max-width: 900px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; padding: 36px 0; border-top: 1px solid rgba(255,255,255,0.08); }
        .ds-metric { text-align: center; }
        .ds-metric-value { display: block; font-size: 28px; font-weight: 800; color: #f7e500; font-family: 'JetBrains Mono', monospace; }
        .ds-metric-label { display: block; font-size: 12px; color: rgba(255,255,255,0.5); margin-top: 4px; text-transform: uppercase; letter-spacing: 0.05em; }

        /* Services Grid */
        .ds-services-section { padding: 72px 24px; background: #f8fafc; }
        .ds-services-container { max-width: 1140px; margin: 0 auto; }
        .ds-services-header { text-align: center; margin-bottom: 40px; }
        .ds-services-header h2 { margin: 0; font-size: clamp(26px, 3.5vw, 34px); font-weight: 800; color: #111827; }
        .ds-services-header p { margin: 10px 0 0; font-size: 16px; color: #6b7280; }
        .ds-services-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px; }
        .ds-service-card { display: flex; flex-direction: column; border-radius: 16px; overflow: hidden; border: 1px solid #e5e7eb; background: #ffffff; text-decoration: none; color: inherit; transition: box-shadow 0.2s, transform 0.15s; }
        .ds-service-card:hover { box-shadow: 0 16px 48px rgba(0,0,0,0.08); transform: translateY(-3px); }
        .ds-service-featured { grid-column: span 2; flex-direction: row; }
        .ds-service-img { height: 180px; background: linear-gradient(135deg, #0a101b, #1e293b); overflow: hidden; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .ds-service-featured .ds-service-img { width: 280px; height: auto; min-height: 200px; }
        .ds-service-img img { width: 100%; height: 100%; object-fit: cover; }
        .ds-service-placeholder { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }
        .ds-service-placeholder span { font-size: 48px; font-weight: 800; color: #f7e500; opacity: 0.6; }
        .ds-service-body { padding: 24px; display: flex; flex-direction: column; gap: 8px; flex: 1; }
        .ds-service-body h3 { margin: 0; font-size: 18px; font-weight: 700; color: #111827; }
        .ds-service-body p { margin: 0; font-size: 14px; color: #6b7280; line-height: 1.7; }
        .ds-service-link { font-size: 13px; font-weight: 700; color: #0a101b; margin-top: auto; padding-top: 8px; }
        .ds-service-card:hover .ds-service-link { color: #f7e500; }

        /* Process */
        .ds-process-section { padding: 72px 24px; background: #ffffff; }
        .ds-process-container { max-width: 800px; margin: 0 auto; }
        .ds-process-header { text-align: center; margin-bottom: 40px; }
        .ds-process-header h2 { margin: 0; font-size: clamp(26px, 3.5vw, 34px); font-weight: 800; color: #111827; }
        .ds-process-header p { margin: 10px 0 0; font-size: 16px; color: #6b7280; }
        .ds-process-timeline { position: relative; padding-left: 32px; }
        .ds-process-timeline::before { content: ''; position: absolute; left: 8px; top: 12px; bottom: 12px; width: 2px; background: linear-gradient(to bottom, #f7e500, #e5e7eb); border-radius: 2px; }
        .ds-process-item { position: relative; padding: 0 0 32px; }
        .ds-process-item:last-child { padding-bottom: 0; }
        .ds-process-dot { position: absolute; left: -28px; top: 6px; width: 14px; height: 14px; border-radius: 50%; background: #f7e500; border: 3px solid #ffffff; box-shadow: 0 0 0 2px #f7e500; }
        .ds-process-content {}
        .ds-process-step { display: inline-block; font-size: 11px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px; }
        .ds-process-content h3 { margin: 0 0 6px; font-size: 18px; font-weight: 700; color: #111827; }
        .ds-process-content p { margin: 0; font-size: 14px; color: #6b7280; line-height: 1.7; }

        /* CTA */
        .ds-cta-section { padding: 72px 24px; background: #0a101b; text-align: center; }
        .ds-cta-container { max-width: 600px; margin: 0 auto; }
        .ds-cta-container h2 { margin: 0; font-size: clamp(24px, 3.5vw, 32px); font-weight: 800; color: #ffffff; }
        .ds-cta-container p { margin: 12px 0 0; font-size: 16px; color: rgba(255,255,255,0.6); }
        .ds-cta-buttons { display: flex; gap: 14px; justify-content: center; margin-top: 28px; flex-wrap: wrap; }
        .ds-cta-btn { padding: 14px 28px; border-radius: 10px; font-size: 15px; font-weight: 700; text-decoration: none; transition: transform 0.15s, box-shadow 0.15s; }
        .ds-cta-primary { background: #f7e500; color: #0a101b; }
        .ds-cta-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(247,229,0,0.3); }
        .ds-cta-secondary { background: transparent; color: #ffffff; border: 2px solid rgba(255,255,255,0.3); }
        .ds-cta-secondary:hover { border-color: #f7e500; color: #f7e500; transform: translateY(-2px); }

        @media (max-width: 768px) {
          .ds-hero { min-height: 360px; }
          .ds-hero-content { padding: 100px 20px 36px; }
          .ds-metrics-container { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .ds-services-grid { grid-template-columns: 1fr; }
          .ds-service-featured { grid-column: span 1; flex-direction: column; }
          .ds-service-featured .ds-service-img { width: 100%; height: 180px; }
        }
      `}</style>
    </>
  )
}

export const getServerSideProps = async () => {
  try {
    const { listDigitalServiceEntries } = await import('../lib/server/products')
    const services = await listDigitalServiceEntries(50)
    return { props: { services } }
  } catch (error) {
    return { props: { services: [] } }
  }
}

export default DigitalServices
