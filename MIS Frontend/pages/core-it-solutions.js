import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const StatCounter = ({ end, suffix = '', label, decimals = 0 }) => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 1800
          const startTime = performance.now()
          const animate = (currentTime) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(eased * end)
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

  const displayValue = decimals > 0 ? count.toFixed(decimals) : Math.floor(count)

  return (
    <div className="cit-stat" ref={ref}>
      <span className="cit-stat-number">{displayValue}{suffix}</span>
      <span className="cit-stat-label">{label}</span>
    </div>
  )
}

const CoreITSolutions = ({ digitalServices = [], businessSolutions = [], maintenanceServices = [] }) => {
  return (
    <>
      <div className="cit-page">
        <Head>
          <title>Core IT Solutions - MIS Solution</title>
          <meta property="og:title" content="Core IT Solutions - MIS Solution" />
          <meta name="description" content="Comprehensive IT solutions including digital services, business & corporate solutions, and maintenance support for modern enterprises." />
        </Head>

        <Navigation />

        {/* Hero Section */}
        <section className="cit-hero">
          <div className="cit-hero-bg">
            <div className="cit-hero-pattern"></div>
            <div className="cit-hero-gradient"></div>
          </div>
          <div className="cit-hero-content">
            <span className="cit-hero-tag">End-to-End IT Services</span>
            <h1 className="cit-hero-title">Comprehensive IT Solutions<br />for Modern Enterprises</h1>
            <p className="cit-hero-subtitle">From digital transformation to infrastructure deployment and ongoing support — we deliver technology solutions that drive business growth.</p>
            <div className="cit-hero-stats">
              <StatCounter end={150} suffix="+" label="Projects Delivered" />
              <StatCounter end={10} suffix="+" label="Years Experience" />
              <StatCounter end={99} suffix="%" label="Client Satisfaction" decimals={0} />
              <StatCounter end={50} suffix="+" label="Enterprise Clients" />
            </div>
          </div>
        </section>

        {/* Bento Grid - Three Service Pillars */}
        <section className="cit-bento-section">
          <div className="cit-bento-container">
            <div className="cit-bento-header">
              <h2>Our Service Pillars</h2>
              <p>Three specialized divisions working together to cover every aspect of your IT needs.</p>
            </div>

            <div className="cit-bento-grid">
              {/* Digital Services - Large Card */}
              <Link href="/digital-services">
                <a className="cit-bento-card cit-bento-large">
                  <div className="cit-bento-card-bg" style={{ backgroundImage: "url('https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800')" }}></div>
                  <div className="cit-bento-card-overlay"></div>
                  <div className="cit-bento-card-content">
                    <div className="cit-bento-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
                    </div>
                    <h3>Digital Services</h3>
                    <p>Website design & development, domain & hosting, digital marketing, and mobile app solutions to establish your digital presence.</p>
                    <ul className="cit-bento-list">
                      {digitalServices.slice(0, 4).map((s) => (
                        <li key={s.id}>{s.name}</li>
                      ))}
                      {digitalServices.length === 0 && (
                        <>
                          <li>Website Design & Development</li>
                          <li>Web Domain & Hosting</li>
                          <li>Digital Marketing & SEO</li>
                          <li>Mobile App Development</li>
                        </>
                      )}
                    </ul>
                    <span className="cit-bento-cta">Explore Digital Services →</span>
                  </div>
                </a>
              </Link>

              {/* Business & Corporate - Medium Card */}
              <Link href="/enterprise-solutions">
                <a className="cit-bento-card cit-bento-medium">
                  <div className="cit-bento-card-bg" style={{ backgroundImage: "url('https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800')" }}></div>
                  <div className="cit-bento-card-overlay"></div>
                  <div className="cit-bento-card-content">
                    <div className="cit-bento-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>
                    </div>
                    <h3>Business & Corporate Solutions</h3>
                    <p>Enterprise-grade infrastructure, networking, security systems, and project-based B2B deployments.</p>
                    <span className="cit-bento-cta">Explore Enterprise Solutions →</span>
                  </div>
                </a>
              </Link>

              {/* Maintenance & Support - Medium Card */}
              <Link href="/maintenance-support">
                <a className="cit-bento-card cit-bento-medium">
                  <div className="cit-bento-card-bg" style={{ backgroundImage: "url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800')" }}></div>
                  <div className="cit-bento-card-overlay"></div>
                  <div className="cit-bento-card-content">
                    <div className="cit-bento-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
                    </div>
                    <h3>Maintenance & Support</h3>
                    <p>Annual IT contracts, on-call repairs, troubleshooting, and project-based installation services.</p>
                    <span className="cit-bento-cta">Explore Support Services →</span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="cit-why-section">
          <div className="cit-why-container">
            <div className="cit-why-header">
              <h2>Why Enterprises Choose Us</h2>
              <p>We combine deep technical expertise with a client-first approach to deliver results that matter.</p>
            </div>
            <div className="cit-why-grid">
              <div className="cit-why-card">
                <div className="cit-why-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h3>Proven Expertise</h3>
                <p>A decade of delivering mission-critical IT solutions across diverse industries with consistent quality and reliability.</p>
              </div>
              <div className="cit-why-card">
                <div className="cit-why-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <h3>24/7 Support</h3>
                <p>Round-the-clock technical assistance ensures your systems stay operational with minimal downtime.</p>
              </div>
              <div className="cit-why-card">
                <div className="cit-why-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                </div>
                <h3>Tailored Solutions</h3>
                <p>Every engagement is customized to your business requirements — no one-size-fits-all templates.</p>
              </div>
              <div className="cit-why-card">
                <div className="cit-why-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                </div>
                <h3>Scalable Growth</h3>
                <p>Solutions architected to grow with your business — from startup infrastructure to enterprise-grade systems.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="cit-process-section">
          <div className="cit-process-container">
            <div className="cit-process-header">
              <h2>How We Work</h2>
              <p>A structured approach that ensures transparency, quality, and timely delivery at every stage.</p>
            </div>
            <div className="cit-process-grid">
              <div className="cit-process-step">
                <div className="cit-process-num">01</div>
                <h3>Consultation</h3>
                <p>We assess your current IT landscape, understand business goals, and identify opportunities for improvement.</p>
              </div>
              <div className="cit-process-step">
                <div className="cit-process-num">02</div>
                <h3>Planning & Design</h3>
                <p>Our team architects a tailored solution with clear timelines, resource allocation, and measurable milestones.</p>
              </div>
              <div className="cit-process-step">
                <div className="cit-process-num">03</div>
                <h3>Implementation</h3>
                <p>Expert execution with rigorous quality checks, testing protocols, and seamless integration with existing systems.</p>
              </div>
              <div className="cit-process-step">
                <div className="cit-process-num">04</div>
                <h3>Support & Optimization</h3>
                <p>Ongoing maintenance, performance monitoring, and continuous improvements to keep your systems ahead.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="cit-cta-section">
          <div className="cit-cta-container">
            <div className="cit-cta-content">
              <h2>Ready to Transform Your IT Infrastructure?</h2>
              <p>Let&apos;s discuss how our solutions can accelerate your business goals.</p>
              <div className="cit-cta-buttons">
                <Link href="/request-custom-quote">
                  <a className="cit-cta-btn cit-cta-primary">Request a Quote</a>
                </Link>
                <Link href="/contact">
                  <a className="cit-cta-btn cit-cta-secondary">Contact Us</a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <style jsx>{`
        .cit-page { width: 100%; min-height: 100vh; }

        /* Hero */
        .cit-hero { position: relative; min-height: 560px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .cit-hero-bg { position: absolute; inset: 0; background: #0a101b; }
        .cit-hero-pattern { position: absolute; inset: 0; opacity: 0.06; background-image: radial-gradient(circle at 25% 25%, #f7e500 1px, transparent 1px), radial-gradient(circle at 75% 75%, #f7e500 1px, transparent 1px); background-size: 60px 60px; }
        .cit-hero-gradient { position: absolute; inset: 0; background: radial-gradient(ellipse at 50% 120%, rgba(247, 229, 0, 0.08) 0%, transparent 60%); }
        .cit-hero-content { position: relative; z-index: 1; max-width: 900px; width: 100%; padding: 120px 24px 80px; text-align: center; }
        .cit-hero-tag { display: inline-block; padding: 6px 16px; border-radius: 20px; background: rgba(247, 229, 0, 0.12); border: 1px solid rgba(247, 229, 0, 0.25); color: #f7e500; font-size: 13px; font-weight: 600; letter-spacing: 0.02em; margin-bottom: 20px; }
        .cit-hero-title { margin: 0; font-size: clamp(32px, 5vw, 52px); font-weight: 800; color: #ffffff; line-height: 1.15; letter-spacing: -0.02em; }
        .cit-hero-subtitle { margin: 18px auto 0; max-width: 640px; font-size: 17px; color: rgba(255,255,255,0.7); line-height: 1.7; }
        .cit-hero-stats { display: flex; justify-content: center; gap: 32px; margin-top: 48px; flex-wrap: wrap; }
        .cit-stat { display: flex; flex-direction: column; align-items: center; gap: 4px; }
        .cit-stat-number { font-size: 32px; font-weight: 800; color: #f7e500; font-family: 'JetBrains Mono', monospace; }
        .cit-stat-label { font-size: 13px; color: rgba(255,255,255,0.6); font-weight: 500; }

        /* Bento Grid */
        .cit-bento-section { padding: 80px 24px; background: #f8fafc; }
        .cit-bento-container { max-width: 1200px; margin: 0 auto; }
        .cit-bento-header { text-align: center; margin-bottom: 48px; }
        .cit-bento-header h2 { margin: 0; font-size: clamp(26px, 3.5vw, 36px); font-weight: 800; color: #111827; }
        .cit-bento-header p { margin: 12px 0 0; font-size: 16px; color: #6b7280; max-width: 560px; margin-left: auto; margin-right: auto; }

        .cit-bento-grid { display: grid; grid-template-columns: 1.2fr 1fr; grid-template-rows: 1fr 1fr; gap: 20px; min-height: 520px; }
        .cit-bento-large { grid-row: 1 / 3; }

        .cit-bento-card { position: relative; border-radius: 20px; overflow: hidden; text-decoration: none; color: #ffffff; display: flex; align-items: flex-end; min-height: 240px; transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .cit-bento-card:hover { transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.15); }
        .cit-bento-card-bg { position: absolute; inset: 0; background-size: cover; background-position: center; transition: transform 0.4s ease; }
        .cit-bento-card:hover .cit-bento-card-bg { transform: scale(1.05); }
        .cit-bento-card-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(10, 16, 27, 0.92) 0%, rgba(10, 16, 27, 0.5) 50%, rgba(10, 16, 27, 0.2) 100%); }
        .cit-bento-card-content { position: relative; z-index: 1; padding: 32px; width: 100%; }
        .cit-bento-icon { width: 52px; height: 52px; border-radius: 14px; background: rgba(247, 229, 0, 0.15); border: 1px solid rgba(247, 229, 0, 0.3); display: flex; align-items: center; justify-content: center; margin-bottom: 16px; color: #f7e500; }
        .cit-bento-card-content h3 { margin: 0 0 8px; font-size: 22px; font-weight: 700; }
        .cit-bento-card-content p { margin: 0; font-size: 14px; color: rgba(255,255,255,0.75); line-height: 1.6; }
        .cit-bento-list { list-style: none; padding: 0; margin: 14px 0 0; display: flex; flex-direction: column; gap: 6px; }
        .cit-bento-list li { font-size: 13px; color: rgba(255,255,255,0.8); padding-left: 16px; position: relative; }
        .cit-bento-list li::before { content: ''; position: absolute; left: 0; top: 7px; width: 6px; height: 6px; border-radius: 50%; background: #f7e500; }
        .cit-bento-cta { display: inline-block; margin-top: 16px; font-size: 14px; font-weight: 700; color: #f7e500; transition: letter-spacing 0.2s; }
        .cit-bento-card:hover .cit-bento-cta { letter-spacing: 0.03em; }

        /* Why Choose Us */
        .cit-why-section { padding: 80px 24px; background: #ffffff; }
        .cit-why-container { max-width: 1100px; margin: 0 auto; }
        .cit-why-header { text-align: center; margin-bottom: 48px; }
        .cit-why-header h2 { margin: 0; font-size: clamp(26px, 3.5vw, 36px); font-weight: 800; color: #111827; }
        .cit-why-header p { margin: 12px 0 0; font-size: 16px; color: #6b7280; max-width: 520px; margin-left: auto; margin-right: auto; }
        .cit-why-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; }
        .cit-why-card { padding: 28px; border-radius: 16px; border: 1px solid #e5e7eb; background: #fafbfc; transition: box-shadow 0.2s, transform 0.15s, border-color 0.2s; }
        .cit-why-card:hover { box-shadow: 0 12px 32px rgba(0,0,0,0.06); transform: translateY(-2px); border-color: #f7e500; }
        .cit-why-icon { width: 48px; height: 48px; border-radius: 12px; background: #0a101b; display: flex; align-items: center; justify-content: center; color: #f7e500; margin-bottom: 16px; }
        .cit-why-card h3 { margin: 0 0 8px; font-size: 17px; font-weight: 700; color: #111827; }
        .cit-why-card p { margin: 0; font-size: 14px; color: #6b7280; line-height: 1.7; }

        /* Process */
        .cit-process-section { padding: 80px 24px; background: #0a101b; }
        .cit-process-container { max-width: 1100px; margin: 0 auto; }
        .cit-process-header { text-align: center; margin-bottom: 48px; }
        .cit-process-header h2 { margin: 0; font-size: clamp(26px, 3.5vw, 36px); font-weight: 800; color: #ffffff; }
        .cit-process-header p { margin: 12px 0 0; font-size: 16px; color: rgba(255,255,255,0.6); max-width: 520px; margin-left: auto; margin-right: auto; }
        .cit-process-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 24px; }
        .cit-process-step { padding: 28px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.03); transition: border-color 0.2s, background 0.2s; }
        .cit-process-step:hover { border-color: rgba(247, 229, 0, 0.3); background: rgba(247, 229, 0, 0.04); }
        .cit-process-num { font-size: 36px; font-weight: 800; color: #f7e500; opacity: 0.7; font-family: 'JetBrains Mono', monospace; margin-bottom: 12px; }
        .cit-process-step h3 { margin: 0 0 8px; font-size: 17px; font-weight: 700; color: #ffffff; }
        .cit-process-step p { margin: 0; font-size: 14px; color: rgba(255,255,255,0.6); line-height: 1.7; }

        /* CTA */
        .cit-cta-section { padding: 80px 24px; background: linear-gradient(135deg, #f7e500 0%, #e6d400 100%); }
        .cit-cta-container { max-width: 800px; margin: 0 auto; }
        .cit-cta-content { text-align: center; }
        .cit-cta-content h2 { margin: 0; font-size: clamp(24px, 3.5vw, 34px); font-weight: 800; color: #0a101b; }
        .cit-cta-content p { margin: 12px 0 0; font-size: 16px; color: rgba(10, 16, 27, 0.7); }
        .cit-cta-buttons { display: flex; gap: 14px; justify-content: center; margin-top: 28px; flex-wrap: wrap; }
        .cit-cta-btn { padding: 14px 28px; border-radius: 10px; font-size: 15px; font-weight: 700; text-decoration: none; transition: transform 0.15s, box-shadow 0.15s; }
        .cit-cta-primary { background: #0a101b; color: #f7e500; }
        .cit-cta-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
        .cit-cta-secondary { background: transparent; color: #0a101b; border: 2px solid #0a101b; }
        .cit-cta-secondary:hover { background: #0a101b; color: #f7e500; transform: translateY(-2px); }

        @media (max-width: 768px) {
          .cit-hero { min-height: 480px; }
          .cit-hero-content { padding: 100px 20px 60px; }
          .cit-hero-stats { gap: 20px; }
          .cit-stat-number { font-size: 26px; }
          .cit-bento-grid { grid-template-columns: 1fr; grid-template-rows: auto; }
          .cit-bento-large { grid-row: auto; min-height: 320px; }
          .cit-bento-medium { min-height: 260px; }
          .cit-why-grid { grid-template-columns: 1fr; }
          .cit-process-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}

export const getServerSideProps = async () => {
  try {
    const { listDigitalServiceEntries, listBusinessSolutionEntries, listMaintenanceSupportEntries } = await import('../lib/server/products')
    const [digitalServices, businessSolutions, maintenanceServices] = await Promise.all([
      listDigitalServiceEntries(6),
      listBusinessSolutionEntries(6),
      listMaintenanceSupportEntries(6),
    ])
    return {
      props: {
        digitalServices,
        businessSolutions,
        maintenanceServices,
      },
    }
  } catch (error) {
    return { props: { digitalServices: [], businessSolutions: [], maintenanceServices: [] } }
  }
}

export default CoreITSolutions
