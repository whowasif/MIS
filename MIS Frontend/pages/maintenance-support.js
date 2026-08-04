import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const fallbackServices = [
  { id: 'maintenance-1', name: 'Yearly IT Maintenance Contract', slug: 'yearly-it-maintenance', description: 'Annual coverage for preventive checks, monitoring, upgrades, and support response.' },
  { id: 'maintenance-2', name: 'On-call Repairs & Troubleshooting', slug: 'on-call-repairs', description: 'Fast-response repair support for desktops, servers, network devices, and office systems.' },
  { id: 'maintenance-3', name: 'Project Basis Installation & Delivery', slug: 'project-installation', description: 'Project-based setup and commissioning for IT hardware, network, and corporate rollouts.' },
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
    <div className="ms-metric" ref={ref}>
      <span className="ms-metric-value">{count}{suffix}</span>
      <span className="ms-metric-label">{label}</span>
    </div>
  )
}

const MaintenanceSupport = ({ services = [] }) => {
  const supportItems = Array.isArray(services) && services.length > 0 ? services : fallbackServices

  return (
    <>
      <div className="ms-page">
        <Head>
          <title>Maintenance & Support - MIS Solution</title>
          <meta property="og:title" content="Maintenance & Support - MIS Solution" />
          <meta name="description" content="Reliable IT maintenance contracts, on-call repairs, troubleshooting, and project-based installation services." />
        </Head>

        <Navigation />

        {/* Hero */}
        <section className="ms-hero">
          <div className="ms-hero-bg">
            <img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1500" alt="" aria-hidden="true" />
            <div className="ms-hero-overlay"></div>
          </div>
          <div className="ms-hero-content">
            <nav className="ms-breadcrumb" aria-label="Breadcrumb">
              <Link href="/"><a>Home</a></Link>
              <span>/</span>
              <Link href="/core-it-solutions"><a>Core IT Solutions</a></Link>
              <span>/</span>
              <span className="ms-breadcrumb-current">Maintenance & Support</span>
            </nav>
            <h1>Maintenance &<br />Support Services</h1>
            <p>Keep your IT infrastructure running at peak performance with our preventive maintenance, rapid response repairs, and professional installation services.</p>
          </div>
        </section>

        {/* Metrics */}
        <section className="ms-metrics-section">
          <div className="ms-metrics-container">
            <MetricCounter end={4} suffix="hr" label="Avg. Response Time" />
            <MetricCounter end={99} suffix="%" label="SLA Compliance" />
            <MetricCounter end={500} suffix="+" label="Issues Resolved" />
            <MetricCounter end={365} suffix="d" label="Coverage Available" />
          </div>
        </section>

        {/* Services */}
        <section className="ms-services-section">
          <div className="ms-services-container">
            <div className="ms-services-header">
              <h2>Support & Maintenance Plans</h2>
              <p>Flexible service options designed to keep your systems healthy and your team productive.</p>
            </div>
            <div className="ms-services-grid">
              {supportItems.map((item, idx) => (
                <Link key={item.id} href={`/services/${encodeURIComponent(item.slug || item.id)}?type=service_maintenance`}>
                  <a className="ms-service-card">
                    <div className="ms-service-icon-wrap">
                      {item.iconUrl ? (
                        <img src={item.iconUrl} alt={item.name} className="ms-service-icon-img" />
                      ) : (
                        <div className="ms-service-icon">
                          {idx === 0 && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
                          {idx === 1 && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>}
                          {idx === 2 && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>}
                          {idx > 2 && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>}
                        </div>
                      )}
                    </div>
                    <div className="ms-service-body">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <span className="ms-service-link">Learn More →</span>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* What's Covered */}
        <section className="ms-covered-section">
          <div className="ms-covered-container">
            <div className="ms-covered-header">
              <h2>What Our Support Covers</h2>
              <p>End-to-end coverage for your complete IT ecosystem.</p>
            </div>
            <div className="ms-covered-grid">
              <div className="ms-covered-item">
                <span className="ms-covered-dot"></span>
                <span>Desktop & Laptop Systems</span>
              </div>
              <div className="ms-covered-item">
                <span className="ms-covered-dot"></span>
                <span>Servers & Storage</span>
              </div>
              <div className="ms-covered-item">
                <span className="ms-covered-dot"></span>
                <span>Network Switches & Routers</span>
              </div>
              <div className="ms-covered-item">
                <span className="ms-covered-dot"></span>
                <span>Printers & Peripherals</span>
              </div>
              <div className="ms-covered-item">
                <span className="ms-covered-dot"></span>
                <span>CCTV & Security Systems</span>
              </div>
              <div className="ms-covered-item">
                <span className="ms-covered-dot"></span>
                <span>UPS & Power Solutions</span>
              </div>
              <div className="ms-covered-item">
                <span className="ms-covered-dot"></span>
                <span>Software & OS Issues</span>
              </div>
              <div className="ms-covered-item">
                <span className="ms-covered-dot"></span>
                <span>Data Backup & Recovery</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="ms-cta-section">
          <div className="ms-cta-container">
            <h2>Need Reliable IT Support?</h2>
            <p>Get a customized maintenance plan that fits your operations and budget.</p>
            <div className="ms-cta-buttons">
              <Link href="/request-custom-quote"><a className="ms-cta-btn ms-cta-primary">Get a Support Quote</a></Link>
              <Link href="/contact"><a className="ms-cta-btn ms-cta-secondary">Contact Support Team</a></Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <style jsx>{`
        .ms-page { width: 100%; min-height: 100vh; }

        /* Hero */
        .ms-hero { position: relative; min-height: 420px; display: flex; align-items: flex-end; }
        .ms-hero-bg { position: absolute; inset: 0; }
        .ms-hero-bg img { width: 100%; height: 100%; object-fit: cover; }
        .ms-hero-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,16,27,0.95) 0%, rgba(10,16,27,0.6) 50%, rgba(10,16,27,0.3) 100%); }
        .ms-hero-content { position: relative; z-index: 1; max-width: 800px; padding: 60px 32px 48px; }
        .ms-breadcrumb { display: flex; align-items: center; gap: 8px; font-size: 13px; margin-bottom: 16px; flex-wrap: wrap; }
        .ms-breadcrumb :global(a) { color: rgba(255,255,255,0.7); text-decoration: none; font-weight: 500; transition: color 0.15s; }
        .ms-breadcrumb :global(a:hover) { color: #f7e500; }
        .ms-breadcrumb span { color: rgba(255,255,255,0.4); }
        .ms-breadcrumb-current { color: #f7e500; font-weight: 600; }
        .ms-hero-content h1 { margin: 0; font-size: clamp(32px, 5vw, 48px); font-weight: 800; color: #ffffff; line-height: 1.1; }
        .ms-hero-content p { margin: 14px 0 0; font-size: 17px; color: rgba(255,255,255,0.7); line-height: 1.6; max-width: 600px; }

        /* Metrics */
        .ms-metrics-section { padding: 0 24px; margin-top: -1px; background: #0a101b; }
        .ms-metrics-container { max-width: 900px; margin: 0 auto; display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; padding: 36px 0; border-top: 1px solid rgba(255,255,255,0.08); }
        .ms-metric { text-align: center; }
        .ms-metric-value { display: block; font-size: 28px; font-weight: 800; color: #f7e500; font-family: 'JetBrains Mono', monospace; }
        .ms-metric-label { display: block; font-size: 12px; color: rgba(255,255,255,0.5); margin-top: 4px; text-transform: uppercase; letter-spacing: 0.05em; }

        /* Services */
        .ms-services-section { padding: 72px 24px; background: #f8fafc; }
        .ms-services-container { max-width: 1000px; margin: 0 auto; }
        .ms-services-header { text-align: center; margin-bottom: 40px; }
        .ms-services-header h2 { margin: 0; font-size: clamp(26px, 3.5vw, 34px); font-weight: 800; color: #111827; }
        .ms-services-header p { margin: 10px 0 0; font-size: 16px; color: #6b7280; }
        .ms-services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        .ms-service-card { display: flex; gap: 20px; align-items: flex-start; padding: 28px; border-radius: 16px; border: 1px solid #e5e7eb; background: #ffffff; text-decoration: none; color: inherit; transition: box-shadow 0.2s, transform 0.15s, border-color 0.2s; }
        .ms-service-card:hover { box-shadow: 0 12px 36px rgba(0,0,0,0.06); transform: translateY(-2px); border-color: #f7e500; }
        .ms-service-icon-wrap { flex-shrink: 0; }
        .ms-service-icon { width: 52px; height: 52px; border-radius: 14px; background: #0a101b; display: flex; align-items: center; justify-content: center; color: #f7e500; }
        .ms-service-icon-img { width: 52px; height: 52px; border-radius: 14px; object-fit: cover; }
        .ms-service-body { flex: 1; }
        .ms-service-body h3 { margin: 0 0 8px; font-size: 17px; font-weight: 700; color: #111827; }
        .ms-service-body p { margin: 0; font-size: 14px; color: #6b7280; line-height: 1.7; }
        .ms-service-link { display: inline-block; margin-top: 10px; font-size: 13px; font-weight: 700; color: #0a101b; }
        .ms-service-card:hover .ms-service-link { color: #b8860b; }

        /* Coverage */
        .ms-covered-section { padding: 72px 24px; background: #0a101b; }
        .ms-covered-container { max-width: 800px; margin: 0 auto; }
        .ms-covered-header { text-align: center; margin-bottom: 36px; }
        .ms-covered-header h2 { margin: 0; font-size: clamp(24px, 3.5vw, 32px); font-weight: 800; color: #ffffff; }
        .ms-covered-header p { margin: 10px 0 0; font-size: 16px; color: rgba(255,255,255,0.6); }
        .ms-covered-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 14px; }
        .ms-covered-item { display: flex; align-items: center; gap: 10px; padding: 14px 18px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.03); font-size: 14px; color: rgba(255,255,255,0.85); font-weight: 500; transition: border-color 0.2s; }
        .ms-covered-item:hover { border-color: rgba(247,229,0,0.4); }
        .ms-covered-dot { width: 8px; height: 8px; border-radius: 50%; background: #f7e500; flex-shrink: 0; }

        /* CTA */
        .ms-cta-section { padding: 72px 24px; background: linear-gradient(135deg, #f7e500 0%, #e6d400 100%); text-align: center; }
        .ms-cta-container { max-width: 600px; margin: 0 auto; }
        .ms-cta-container h2 { margin: 0; font-size: clamp(24px, 3.5vw, 32px); font-weight: 800; color: #0a101b; }
        .ms-cta-container p { margin: 12px 0 0; font-size: 16px; color: rgba(10,16,27,0.7); }
        .ms-cta-buttons { display: flex; gap: 14px; justify-content: center; margin-top: 28px; flex-wrap: wrap; }
        .ms-cta-btn { padding: 14px 28px; border-radius: 10px; font-size: 15px; font-weight: 700; text-decoration: none; transition: transform 0.15s, box-shadow 0.15s; }
        .ms-cta-primary { background: #0a101b; color: #f7e500; }
        .ms-cta-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
        .ms-cta-secondary { background: transparent; color: #0a101b; border: 2px solid #0a101b; }
        .ms-cta-secondary:hover { background: #0a101b; color: #f7e500; transform: translateY(-2px); }

        @media (max-width: 768px) {
          .ms-hero { min-height: 360px; }
          .ms-hero-content { padding: 100px 20px 36px; }
          .ms-metrics-container { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .ms-services-grid { grid-template-columns: 1fr; }
          .ms-service-card { flex-direction: column; gap: 14px; }
          .ms-covered-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}

export const getServerSideProps = async () => {
  try {
    const { listMaintenanceSupportEntries } = await import('../lib/server/products')
    const services = await listMaintenanceSupportEntries(60)
    return { props: { services } }
  } catch (error) {
    return { props: { services: [] } }
  }
}

export default MaintenanceSupport
