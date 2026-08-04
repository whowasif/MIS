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

        {/* Hero Section with Background Image */}
        <section className="cit-hero">
          <div className="cit-hero-bg">
            <img src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1500" alt="" aria-hidden="true" />
            <div className="cit-hero-overlay"></div>
          </div>
          <div className="cit-hero-content">
            <span className="cit-hero-tag">End-to-End IT Services</span>
            <h1 className="cit-hero-title">Drive Growth with Our<br />Core IT Capabilities</h1>
            <p className="cit-hero-subtitle">From concept to deployment and beyond — we deliver complete technology solutions that transform businesses, accelerate growth, and build lasting digital infrastructure.</p>
            <div className="cit-hero-cta">
              <Link href="/request-custom-quote"><a className="cit-btn-primary">Schedule a Consultation</a></Link>
              <Link href="/contact"><a className="cit-btn-outline">Talk to Our Experts</a></Link>
            </div>
          </div>
          <div className="cit-hero-stats-bar">
            <StatCounter end={150} suffix="+" label="Projects Delivered" />
            <StatCounter end={10} suffix="+" label="Years Experience" />
            <StatCounter end={99} suffix="%" label="Client Satisfaction" />
            <StatCounter end={50} suffix="+" label="Enterprise Clients" />
          </div>
        </section>

        {/* Service Pillars - Bento Grid */}
        <section className="cit-pillars-section">
          <div className="cit-pillars-container">
            <div className="cit-pillars-header">
              <h2>Our Service Pillars</h2>
              <p>Three specialized divisions working together to cover every aspect of your IT needs.</p>
            </div>
            <div className="cit-pillars-grid">
              <Link href="/digital-services">
                <a className="cit-pillar-card cit-pillar-large">
                  <div className="cit-pillar-bg" style={{ backgroundImage: "url('https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800')" }}></div>
                  <div className="cit-pillar-overlay"></div>
                  <div className="cit-pillar-content">
                    <div className="cit-pillar-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg></div>
                    <h3>Digital Services</h3>
                    <p>Web development, hosting, digital marketing, and mobile apps to build your digital presence.</p>
                    <ul className="cit-pillar-list">
                      {digitalServices.slice(0, 4).map((s) => (<li key={s.id}>{s.name}</li>))}
                      {digitalServices.length === 0 && (<><li>Website Design & Development</li><li>Web Domain & Hosting</li><li>Digital Marketing & SEO</li><li>Mobile App Development</li></>)}
                    </ul>
                    <span className="cit-pillar-cta">Explore Digital Services →</span>
                  </div>
                </a>
              </Link>
              <Link href="/enterprise-solutions">
                <a className="cit-pillar-card cit-pillar-medium">
                  <div className="cit-pillar-bg" style={{ backgroundImage: "url('https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800')" }}></div>
                  <div className="cit-pillar-overlay"></div>
                  <div className="cit-pillar-content">
                    <div className="cit-pillar-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg></div>
                    <h3>Business & Corporate Solutions</h3>
                    <p>Enterprise infrastructure, networking, CCTV, data centers, and B2B project deployments.</p>
                    <span className="cit-pillar-cta">Explore Enterprise Solutions →</span>
                  </div>
                </a>
              </Link>
              <Link href="/maintenance-support">
                <a className="cit-pillar-card cit-pillar-medium">
                  <div className="cit-pillar-bg" style={{ backgroundImage: "url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800')" }}></div>
                  <div className="cit-pillar-overlay"></div>
                  <div className="cit-pillar-content">
                    <div className="cit-pillar-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg></div>
                    <h3>Maintenance & Support</h3>
                    <p>Annual IT contracts, rapid repairs, troubleshooting, and project-based installations.</p>
                    <span className="cit-pillar-cta">Explore Support Services →</span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* How We Work - Zigzag Timeline */}
        <section className="cit-process-section">
          <div className="cit-process-container">
            <h2 className="cit-process-title">How We Work</h2>
            <div className="cit-process-timeline">
              <div className="cit-timeline-item cit-timeline-right">
                <div className="cit-timeline-dot"></div>
                <div className="cit-timeline-content">
                  <span className="cit-timeline-step">STEP 1</span>
                  <h3>Assessment & Planning</h3>
                  <p>Architecture, risk, and compliance review. We study your existing systems and define clear objectives.</p>
                </div>
              </div>
              <div className="cit-timeline-item cit-timeline-left">
                <div className="cit-timeline-dot"></div>
                <div className="cit-timeline-content">
                  <span className="cit-timeline-step">STEP 2</span>
                  <h3>Deployment & Configuration</h3>
                  <p>LMS, proctoring, integrations — seamless execution with rigorous quality gates at every phase.</p>
                </div>
              </div>
              <div className="cit-timeline-item cit-timeline-right">
                <div className="cit-timeline-dot"></div>
                <div className="cit-timeline-content">
                  <span className="cit-timeline-step">STEP 3</span>
                  <h3>Go-Live & Support</h3>
                  <p>Monitoring, incident readiness, and real-time support to ensure a flawless launch.</p>
                </div>
              </div>
              <div className="cit-timeline-item cit-timeline-left">
                <div className="cit-timeline-dot"></div>
                <div className="cit-timeline-content">
                  <span className="cit-timeline-step">STEP 4</span>
                  <h3>Ongoing Ownership</h3>
                  <p>Support, optimization, upgrades — we stay with you as a long-term technology partner.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="cit-industries-section">
          <div className="cit-industries-container">
            <h2>Industries We Serve</h2>
            <p className="cit-industries-sub">Our deep understanding of diverse industries empowers us to design customized technology solutions.</p>
            <div className="cit-industries-grid">
              {['Finance & Banking', 'E-commerce', 'Telecom', 'Real Estate', 'Healthcare', 'Education', 'Logistics', 'Manufacturing', 'Retail', 'Government', 'Startups', 'NGO & Non-Profit'].map((industry) => (
                <div key={industry} className="cit-industry-tag">{industry}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Marquee */}
        <section className="cit-tech-section">
          <div className="cit-tech-container">
            <h2>Technologies We Work With</h2>
            <p className="cit-tech-sub">We leverage modern tools and platforms to deliver scalable, future-proof solutions.</p>
            <div className="cit-tech-marquee">
              <div className="cit-tech-track">
                {['React', 'Next.js', 'Node.js', 'Python', 'PHP', 'Laravel', 'MySQL', 'MongoDB', 'AWS', 'Azure', 'Docker', 'WordPress', 'Flutter', 'Java', 'MikroTik', 'Cisco', 'Ubiquiti', 'Hikvision', 'React', 'Next.js', 'Node.js', 'Python', 'PHP', 'Laravel', 'MySQL', 'MongoDB', 'AWS', 'Azure', 'Docker', 'WordPress', 'Flutter', 'Java', 'MikroTik', 'Cisco', 'Ubiquiti', 'Hikvision'].map((tech, idx) => (
                  <span key={idx} className="cit-tech-item">{tech}</span>
                ))}
              </div>
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
                <div className="cit-why-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
                <h3>Proven Expertise</h3>
                <p>A decade of delivering mission-critical IT solutions across diverse industries with consistent quality.</p>
              </div>
              <div className="cit-why-card">
                <div className="cit-why-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
                <h3>24/7 Support</h3>
                <p>Round-the-clock technical assistance ensures minimal downtime and maximum productivity.</p>
              </div>
              <div className="cit-why-card">
                <div className="cit-why-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg></div>
                <h3>Tailored Solutions</h3>
                <p>Every engagement is customized to your business — no templates, no one-size-fits-all.</p>
              </div>
              <div className="cit-why-card">
                <div className="cit-why-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></div>
                <h3>Scalable Growth</h3>
                <p>Solutions architected to grow with your business — from startup to enterprise-grade systems.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="cit-cta-section">
          <div className="cit-cta-container">
            <h2>Ready to Transform Your IT Infrastructure?</h2>
            <p>Let&apos;s discuss how our solutions can accelerate your business goals.</p>
            <div className="cit-cta-buttons">
              <Link href="/request-custom-quote"><a className="cit-btn-primary">Request a Quote</a></Link>
              <Link href="/contact"><a className="cit-btn-outline-dark">Contact Us</a></Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <style jsx>{`
        .cit-page { width: 100%; min-height: 100vh; }

        /* Hero */
        .cit-hero { position: relative; min-height: 600px; display: flex; flex-direction: column; justify-content: center; }
        .cit-hero-bg { position: absolute; inset: 0; }
        .cit-hero-bg img { width: 100%; height: 100%; object-fit: cover; }
        .cit-hero-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(10,16,27,0.92) 0%, rgba(10,16,27,0.7) 100%); }
        .cit-hero-content { position: relative; z-index: 1; max-width: 720px; padding: 140px 32px 60px; }
        .cit-hero-tag { display: inline-block; padding: 6px 16px; border-radius: 20px; background: rgba(247,229,0,0.12); border: 1px solid rgba(247,229,0,0.3); color: #f7e500; font-size: 13px; font-weight: 600; margin-bottom: 20px; }
        .cit-hero-title { margin: 0; font-size: clamp(34px, 5vw, 54px); font-weight: 800; color: #ffffff; line-height: 1.12; letter-spacing: -0.02em; }
        .cit-hero-subtitle { margin: 18px 0 0; font-size: 17px; color: rgba(255,255,255,0.7); line-height: 1.7; max-width: 580px; }
        .cit-hero-cta { display: flex; gap: 14px; margin-top: 32px; flex-wrap: wrap; }
        .cit-btn-primary { padding: 14px 28px; border-radius: 10px; font-size: 15px; font-weight: 700; text-decoration: none; background: #f7e500; color: #0a101b; transition: transform 0.15s, box-shadow 0.15s; }
        .cit-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(247,229,0,0.3); }
        .cit-btn-outline { padding: 14px 28px; border-radius: 10px; font-size: 15px; font-weight: 700; text-decoration: none; background: transparent; color: #ffffff; border: 2px solid rgba(255,255,255,0.3); transition: all 0.15s; }
        .cit-btn-outline:hover { border-color: #f7e500; color: #f7e500; transform: translateY(-2px); }
        .cit-btn-outline-dark { padding: 14px 28px; border-radius: 10px; font-size: 15px; font-weight: 700; text-decoration: none; background: transparent; color: #0a101b; border: 2px solid #0a101b; transition: all 0.15s; }
        .cit-btn-outline-dark:hover { background: #0a101b; color: #f7e500; transform: translateY(-2px); }
        .cit-hero-stats-bar { position: relative; z-index: 1; display: flex; justify-content: center; gap: 40px; padding: 28px 24px; background: rgba(10,16,27,0.85); backdrop-filter: blur(8px); border-top: 1px solid rgba(247,229,0,0.15); flex-wrap: wrap; }
        .cit-stat { text-align: center; }
        .cit-stat-number { display: block; font-size: 30px; font-weight: 800; color: #f7e500; font-family: 'JetBrains Mono', monospace; }
        .cit-stat-label { font-size: 12px; color: rgba(255,255,255,0.55); text-transform: uppercase; letter-spacing: 0.05em; }

        /* Service Pillars */
        .cit-pillars-section { padding: 80px 24px; background: #f8fafc; }
        .cit-pillars-container { max-width: 1200px; margin: 0 auto; }
        .cit-pillars-header { text-align: center; margin-bottom: 48px; }
        .cit-pillars-header h2 { margin: 0; font-size: clamp(26px, 3.5vw, 36px); font-weight: 800; color: #111827; }
        .cit-pillars-header p { margin: 12px 0 0; font-size: 16px; color: #6b7280; }
        .cit-pillars-grid { display: grid; grid-template-columns: 1.2fr 1fr; grid-template-rows: 1fr 1fr; gap: 20px; min-height: 520px; }
        .cit-pillar-large { grid-row: 1 / 3; }
        .cit-pillar-card { position: relative; border-radius: 20px; overflow: hidden; text-decoration: none; color: #fff; display: flex; align-items: flex-end; min-height: 240px; transition: transform 0.3s, box-shadow 0.3s; }
        .cit-pillar-card:hover { transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.15); }
        .cit-pillar-bg { position: absolute; inset: 0; background-size: cover; background-position: center; transition: transform 0.5s; }
        .cit-pillar-card:hover .cit-pillar-bg { transform: scale(1.06); }
        .cit-pillar-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,16,27,0.92) 0%, rgba(10,16,27,0.5) 50%, rgba(10,16,27,0.2) 100%); }
        .cit-pillar-content { position: relative; z-index: 1; padding: 32px; width: 100%; }
        .cit-pillar-icon { width: 48px; height: 48px; border-radius: 12px; background: rgba(247,229,0,0.15); border: 1px solid rgba(247,229,0,0.3); display: flex; align-items: center; justify-content: center; margin-bottom: 14px; color: #f7e500; }
        .cit-pillar-content h3 { margin: 0 0 8px; font-size: 20px; font-weight: 700; }
        .cit-pillar-content p { margin: 0; font-size: 14px; color: rgba(255,255,255,0.75); line-height: 1.6; }
        .cit-pillar-list { list-style: none; padding: 0; margin: 12px 0 0; display: flex; flex-direction: column; gap: 5px; }
        .cit-pillar-list li { font-size: 13px; color: rgba(255,255,255,0.8); padding-left: 14px; position: relative; }
        .cit-pillar-list li::before { content: ''; position: absolute; left: 0; top: 7px; width: 6px; height: 6px; border-radius: 50%; background: #f7e500; }
        .cit-pillar-cta { display: inline-block; margin-top: 14px; font-size: 14px; font-weight: 700; color: #f7e500; }

        /* Process Zigzag Timeline */
        .cit-process-section { padding: 80px 24px; background: #ffffff; }
        .cit-process-container { max-width: 700px; margin: 0 auto; }
        .cit-process-title { text-align: center; font-size: clamp(26px, 3.5vw, 36px); font-weight: 800; color: #111827; margin: 0 0 48px; }
        .cit-process-timeline { position: relative; }
        .cit-process-timeline::before { content: ''; position: absolute; left: 50%; top: 0; bottom: 0; width: 2px; background: linear-gradient(to bottom, #f7e500, #e5e7eb); transform: translateX(-50%); }
        .cit-timeline-item { position: relative; display: flex; align-items: flex-start; margin-bottom: 48px; }
        .cit-timeline-item:last-child { margin-bottom: 0; }
        .cit-timeline-dot { position: absolute; left: 50%; top: 6px; width: 14px; height: 14px; border-radius: 50%; background: #ffffff; border: 3px solid #f7e500; transform: translateX(-50%); z-index: 2; }
        .cit-timeline-right .cit-timeline-content { margin-left: calc(50% + 28px); }
        .cit-timeline-left .cit-timeline-content { margin-right: calc(50% + 28px); text-align: right; }
        .cit-timeline-step { font-size: 11px; font-weight: 700; color: #f7e500; text-transform: uppercase; letter-spacing: 0.1em; }
        .cit-timeline-content h3 { margin: 4px 0 6px; font-size: 18px; font-weight: 700; color: #111827; }
        .cit-timeline-content p { margin: 0; font-size: 14px; color: #6b7280; line-height: 1.6; }

        /* Industries */
        .cit-industries-section { padding: 72px 24px; background: #0a101b; }
        .cit-industries-container { max-width: 900px; margin: 0 auto; text-align: center; }
        .cit-industries-container h2 { margin: 0; font-size: clamp(24px, 3.5vw, 34px); font-weight: 800; color: #ffffff; }
        .cit-industries-sub { margin: 10px 0 32px; font-size: 15px; color: rgba(255,255,255,0.55); }
        .cit-industries-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; }
        .cit-industry-tag { padding: 10px 20px; border-radius: 24px; background: rgba(247,229,0,0.08); border: 1px solid rgba(247,229,0,0.2); color: rgba(255,255,255,0.85); font-size: 13px; font-weight: 600; transition: all 0.2s; }
        .cit-industry-tag:hover { background: rgba(247,229,0,0.18); border-color: #f7e500; color: #f7e500; transform: translateY(-2px); }

        /* Tech Stack Marquee */
        .cit-tech-section { padding: 60px 0; background: #f8fafc; overflow: hidden; }
        .cit-tech-container { text-align: center; }
        .cit-tech-container h2 { margin: 0; font-size: clamp(22px, 3vw, 30px); font-weight: 800; color: #111827; }
        .cit-tech-sub { margin: 8px 0 32px; font-size: 15px; color: #6b7280; }
        .cit-tech-marquee { overflow: hidden; width: 100%; }
        .cit-tech-track { display: flex; gap: 48px; animation: techScroll 30s linear infinite; white-space: nowrap; }
        .cit-tech-item { font-size: clamp(20px, 3vw, 32px); font-weight: 700; color: #cbd5e1; transition: color 0.2s; flex-shrink: 0; }
        .cit-tech-item:hover { color: #0a101b; }
        @keyframes techScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

        /* Why Choose Us */
        .cit-why-section { padding: 80px 24px; background: #ffffff; }
        .cit-why-container { max-width: 1100px; margin: 0 auto; }
        .cit-why-header { text-align: center; margin-bottom: 48px; }
        .cit-why-header h2 { margin: 0; font-size: clamp(26px, 3.5vw, 36px); font-weight: 800; color: #111827; }
        .cit-why-header p { margin: 12px 0 0; font-size: 16px; color: #6b7280; }
        .cit-why-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; }
        .cit-why-card { padding: 28px; border-radius: 16px; border: 1px solid #e5e7eb; background: #fafbfc; transition: all 0.2s; }
        .cit-why-card:hover { box-shadow: 0 12px 32px rgba(0,0,0,0.06); transform: translateY(-2px); border-color: #f7e500; }
        .cit-why-icon { width: 48px; height: 48px; border-radius: 12px; background: #0a101b; display: flex; align-items: center; justify-content: center; color: #f7e500; margin-bottom: 16px; }
        .cit-why-card h3 { margin: 0 0 8px; font-size: 17px; font-weight: 700; color: #111827; }
        .cit-why-card p { margin: 0; font-size: 14px; color: #6b7280; line-height: 1.7; }

        /* CTA */
        .cit-cta-section { padding: 80px 24px; background: linear-gradient(135deg, #f7e500 0%, #e6d400 100%); text-align: center; }
        .cit-cta-container { max-width: 700px; margin: 0 auto; }
        .cit-cta-container h2 { margin: 0; font-size: clamp(24px, 3.5vw, 34px); font-weight: 800; color: #0a101b; }
        .cit-cta-container p { margin: 12px 0 0; font-size: 16px; color: rgba(10,16,27,0.7); }
        .cit-cta-buttons { display: flex; gap: 14px; justify-content: center; margin-top: 28px; flex-wrap: wrap; }

        /* Responsive */
        @media (max-width: 768px) {
          .cit-hero { min-height: 500px; }
          .cit-hero-content { padding: 110px 20px 40px; }
          .cit-hero-stats-bar { gap: 20px; padding: 20px 16px; }
          .cit-stat-number { font-size: 24px; }
          .cit-pillars-grid { grid-template-columns: 1fr; grid-template-rows: auto; }
          .cit-pillar-large { grid-row: auto; min-height: 300px; }
          .cit-pillar-card { min-height: 250px; }
          .cit-process-timeline::before { left: 16px; }
          .cit-timeline-dot { left: 16px; }
          .cit-timeline-right .cit-timeline-content { margin-left: 44px; }
          .cit-timeline-left .cit-timeline-content { margin-right: 0; margin-left: 44px; text-align: left; }
          .cit-why-grid { grid-template-columns: 1fr; }
          .cit-industries-grid { gap: 8px; }
          .cit-industry-tag { padding: 8px 14px; font-size: 12px; }
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
    return { props: { digitalServices, businessSolutions, maintenanceServices } }
  } catch (error) {
    return { props: { digitalServices: [], businessSolutions: [], maintenanceServices: [] } }
  }
}

export default CoreITSolutions
