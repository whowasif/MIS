import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const fallbackItems = [
  { id: 'b2b-1', name: 'Data Center Solution', slug: 'data-center-solution', description: 'End-to-end enterprise data center design and deployment.' },
  { id: 'b2b-2', name: 'Structured Cabling', slug: 'structured-cabling', description: 'Reliable structured cabling for modern enterprise infrastructure.' },
  { id: 'b2b-3', name: 'CCTV Camera / IP Camera', slug: 'cctv-ip-camera', description: 'Scalable surveillance architecture for corporate security.' },
  { id: 'b2b-4', name: 'Corporate ID Card Printing', slug: 'corporate-id-printing', description: 'Bulk professional printing support for enterprise operations.' },
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
    <div className="es-metric" ref={ref}>
      <span className="es-metric-value">{count}{suffix}</span>
      <span className="es-metric-label">{label}</span>
    </div>
  )
}

const EnterpriseSolutions = ({ services = [] }) => {
  const sourceItems = Array.isArray(services) && services.length > 0 ? services : fallbackItems

  return (
    <>
      <div className="es-page">
        <Head>
          <title>Business & Corporate Solutions - MIS Solution</title>
          <meta property="og:title" content="Business & Corporate Solutions - MIS Solution" />
          <meta name="description" content="Enterprise-grade IT infrastructure, networking, security systems, and project-based B2B solutions by MIS Solution." />
        </Head>

        <Navigation />

        {/* Hero */}
        <section className="es-hero">
          <div className="es-hero-bg">
            <img src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1500" alt="" aria-hidden="true" />
            <div className="es-hero-overlay"></div>
          </div>
          <div className="es-hero-content">
            <nav className="es-breadcrumb" aria-label="Breadcrumb">
              <Link href="/"><a>Home</a></Link>
              <span>/</span>
              <Link href="/core-it-solutions"><a>Core IT Solutions</a></Link>
              <span>/</span>
              <span className="es-breadcrumb-current">Business & Corporate Solutions</span>
            </nav>
            <h1>Business & Corporate<br />Solutions</h1>
            <p>Project-based B2B solutions engineered for enterprise infrastructure, networking, physical security, and large-scale deployments.</p>
          </div>
        </section>

        {/* Metrics */}
        <section className="es-metrics-section">
          <div className="es-metrics-container">
            <MetricCounter end={80} suffix="+" label="B2B Projects" />
            <MetricCounter end={100} suffix="%" label="Warranty Coverage" />
            <MetricCounter end={30} suffix="+" label="Corporate Clients" />
            <MetricCounter end={5} suffix="yr" label="Avg. Partnership" />
          </div>
        </section>

        {/* Services Grid */}
        <section className="es-services-section">
          <div className="es-services-container">
            <div className="es-services-header">
              <h2>Enterprise Solutions Portfolio</h2>
              <p>Comprehensive infrastructure and technology solutions for organizations of all sizes.</p>
            </div>
            <div className="es-services-grid">
              {sourceItems.map((item, idx) => (
                <Link key={item.id} href={`/services/${encodeURIComponent(item.slug || item.id)}?type=bus_corp_sol`}>
                  <a className="es-service-card">
                    <div className="es-service-number">{String(idx + 1).padStart(2, '0')}</div>
                    <div className="es-service-img">
                      {item.iconUrl ? <img src={item.iconUrl} alt={item.name} /> : <div className="es-service-placeholder"><span>{item.name.charAt(0)}</span></div>}
                    </div>
                    <div className="es-service-body">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <span className="es-service-link">View Details →</span>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="es-process-section">
          <div className="es-process-container">
            <div className="es-process-header">
              <h2>Enterprise Delivery Framework</h2>
              <p>A structured methodology ensuring every project is delivered on time, on spec, and within budget.</p>
            </div>
            <div className="es-process-grid">
              <div className="es-step">
                <div className="es-step-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                </div>
                <h3>Site Assessment</h3>
                <p>On-site survey, requirements gathering, and feasibility analysis for your infrastructure needs.</p>
              </div>
              <div className="es-step">
                <div className="es-step-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
                </div>
                <h3>Solution Design</h3>
                <p>Technical architecture, BOQ preparation, and project plan with clear milestones.</p>
              </div>
              <div className="es-step">
                <div className="es-step-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
                </div>
                <h3>Deployment</h3>
                <p>Professional installation, configuration, testing, and commissioning by certified engineers.</p>
              </div>
              <div className="es-step">
                <div className="es-step-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h3>Warranty & Support</h3>
                <p>Comprehensive warranty coverage, SLA-based support, and proactive maintenance plans.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="es-cta-section">
          <div className="es-cta-container">
            <h2>Need a Corporate IT Partner?</h2>
            <p>From data centers to security systems — let&apos;s build your enterprise infrastructure together.</p>
            <div className="es-cta-buttons">
              <Link href="/request-custom-quote"><a className="es-cta-btn es-cta-primary">Request a Proposal</a></Link>
              <Link href="/contact"><a className="es-cta-btn es-cta-secondary">Schedule a Consultation</a></Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <style jsx>{`
        .es-page { width: 100%; min-height: 100vh; }

        /* Hero */
        .es-hero { position: relative; min-height: 420px; display: flex; align-items: flex-end; }
        .es-hero-bg { position: absolute; inset: 0; }
        .es-hero-bg img { width: 100%; height: 100%; object-fit: cover; }
        .es-hero-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,16,27,0.95) 0%, rgba(10,16,27,0.6) 50%, rgba(10,16,27,0.3) 100%); }
        .es-hero-content { position: relative; z-index: 1; max-width: 800px; padding: 60px 32px 48px; }
        .es-breadcrumb { display: flex; align-items: center; gap: 8px; font-size: 13px; margin-bottom: 16px; flex-wrap: wrap; }
        .es-breadcrumb :global(a) { color: rgba(255,255,255,0.7); text-decoration: none; font-weight: 500; transition: color 0.15s; }
        .es-breadcrumb :global(a:hover) { color: #f7e500; }
        .es-breadcrumb span { color: rgba(255,255,255,0.4); }
        .es-breadcrumb-current { color: #f7e500; font-weight: 600; }
        .es-hero-content h1 { margin: 0; font-size: clamp(32px, 5vw, 48px); font-weight: 800; color: #ffffff; line-height: 1.1; }
        .es-hero-content p { margin: 14px 0 0; font-size: 17px; color: rgba(255,255,255,0.7); line-height: 1.6; max-width: 600px; }

        /* Metrics */
        .es-metrics-section { padding: 0 24px; margin-top: -1px; background: #0a101b; }
        .es-metrics-container { max-width: 900px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; padding: 36px 0; border-top: 1px solid rgba(255,255,255,0.08); }
        .es-metric { text-align: center; }
        .es-metric-value { display: block; font-size: 28px; font-weight: 800; color: #f7e500; font-family: 'JetBrains Mono', monospace; }
        .es-metric-label { display: block; font-size: 12px; color: rgba(255,255,255,0.5); margin-top: 4px; text-transform: uppercase; letter-spacing: 0.05em; }

        /* Services Grid */
        .es-services-section { padding: 72px 24px; background: #f8fafc; }
        .es-services-container { max-width: 1140px; margin: 0 auto; }
        .es-services-header { text-align: center; margin-bottom: 40px; }
        .es-services-header h2 { margin: 0; font-size: clamp(26px, 3.5vw, 34px); font-weight: 800; color: #111827; }
        .es-services-header p { margin: 10px 0 0; font-size: 16px; color: #6b7280; }
        .es-services-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
        .es-service-card { position: relative; display: flex; flex-direction: column; border-radius: 16px; overflow: hidden; border: 1px solid #e5e7eb; background: #ffffff; text-decoration: none; color: inherit; transition: box-shadow 0.2s, transform 0.15s; }
        .es-service-card:hover { box-shadow: 0 16px 48px rgba(0,0,0,0.08); transform: translateY(-3px); }
        .es-service-number { position: absolute; top: 16px; right: 16px; font-size: 42px; font-weight: 900; color: rgba(10,16,27,0.04); line-height: 1; z-index: 1; font-family: 'JetBrains Mono', monospace; }
        .es-service-img { height: 160px; background: linear-gradient(135deg, #0a101b, #1e293b); overflow: hidden; display: flex; align-items: center; justify-content: center; }
        .es-service-img img { width: 100%; height: 100%; object-fit: cover; }
        .es-service-placeholder { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }
        .es-service-placeholder span { font-size: 48px; font-weight: 800; color: #f7e500; opacity: 0.5; }
        .es-service-body { padding: 24px; display: flex; flex-direction: column; gap: 8px; flex: 1; }
        .es-service-body h3 { margin: 0; font-size: 18px; font-weight: 700; color: #111827; }
        .es-service-body p { margin: 0; font-size: 14px; color: #6b7280; line-height: 1.7; }
        .es-service-link { font-size: 13px; font-weight: 700; color: #0a101b; margin-top: auto; padding-top: 8px; }
        .es-service-card:hover .es-service-link { color: #b8860b; }

        /* Process */
        .es-process-section { padding: 72px 24px; background: #ffffff; }
        .es-process-container { max-width: 1000px; margin: 0 auto; }
        .es-process-header { text-align: center; margin-bottom: 40px; }
        .es-process-header h2 { margin: 0; font-size: clamp(26px, 3.5vw, 34px); font-weight: 800; color: #111827; }
        .es-process-header p { margin: 10px 0 0; font-size: 16px; color: #6b7280; }
        .es-process-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 24px; }
        .es-step { padding: 28px; border-radius: 16px; background: #fafbfc; border: 1px solid #e5e7eb; transition: border-color 0.2s, box-shadow 0.2s; }
        .es-step:hover { border-color: #f7e500; box-shadow: 0 8px 24px rgba(0,0,0,0.04); }
        .es-step-icon { width: 44px; height: 44px; border-radius: 10px; background: #0a101b; display: flex; align-items: center; justify-content: center; color: #f7e500; margin-bottom: 14px; }
        .es-step h3 { margin: 0 0 8px; font-size: 16px; font-weight: 700; color: #111827; }
        .es-step p { margin: 0; font-size: 14px; color: #6b7280; line-height: 1.7; }

        /* CTA */
        .es-cta-section { padding: 72px 24px; background: #0a101b; text-align: center; }
        .es-cta-container { max-width: 600px; margin: 0 auto; }
        .es-cta-container h2 { margin: 0; font-size: clamp(24px, 3.5vw, 32px); font-weight: 800; color: #ffffff; }
        .es-cta-container p { margin: 12px 0 0; font-size: 16px; color: rgba(255,255,255,0.6); }
        .es-cta-buttons { display: flex; gap: 14px; justify-content: center; margin-top: 28px; flex-wrap: wrap; }
        .es-cta-btn { padding: 14px 28px; border-radius: 10px; font-size: 15px; font-weight: 700; text-decoration: none; transition: transform 0.15s, box-shadow 0.15s; }
        .es-cta-primary { background: #f7e500; color: #0a101b; }
        .es-cta-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(247,229,0,0.3); }
        .es-cta-secondary { background: transparent; color: #ffffff; border: 2px solid rgba(255,255,255,0.3); }
        .es-cta-secondary:hover { border-color: #f7e500; color: #f7e500; transform: translateY(-2px); }

        @media (max-width: 768px) {
          .es-hero { min-height: 360px; }
          .es-hero-content { padding: 100px 20px 36px; }
          .es-metrics-container { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .es-services-grid { grid-template-columns: 1fr; }
          .es-process-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}

export const getServerSideProps = async () => {
  try {
    const { listBusinessSolutionEntries } = await import('../lib/server/products')
    const services = await listBusinessSolutionEntries(120)
    return { props: { services } }
  } catch (error) {
    return { props: { services: [] } }
  }
}

export default EnterpriseSolutions
