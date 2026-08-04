import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../components/navigation'
import Footer from '../components/footer'

const useInView = (threshold = 0.15) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true) }, { threshold })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])
  return [ref, isVisible]
}

const AnimatedCounter = ({ end, suffix = '', label, decimals = 0 }) => {
  const [count, setCount] = useState(0)
  const [ref, isVisible] = useInView(0.3)
  const animated = useRef(false)
  useEffect(() => {
    if (isVisible && !animated.current) {
      animated.current = true
      const duration = 2000
      const start = performance.now()
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - p, 4)
        setCount(eased * end)
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }
  }, [isVisible, end])
  return (
    <div className="cit-counter" ref={ref}>
      <span className="cit-counter-num">{decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}{suffix}</span>
      <span className="cit-counter-label">{label}</span>
    </div>
  )
}

const FadeIn = ({ children, delay = 0, direction = 'up' }) => {
  const [ref, isVisible] = useInView(0.1)
  const transform = direction === 'up' ? 'translateY(40px)' : direction === 'left' ? 'translateX(-40px)' : direction === 'right' ? 'translateX(40px)' : 'translateY(40px)'
  return (
    <div ref={ref} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'none' : transform, transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s` }}>
      {children}
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
          <meta name="description" content="Comprehensive IT solutions — digital services, enterprise infrastructure, and maintenance support." />
        </Head>
        <Navigation />

        {/* HERO */}
        <section className="cit-hero">
          <div className="cit-hero-bg">
            <img src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1500" alt="" />
            <div className="cit-hero-overlay" />
          </div>
          <div className="cit-hero-particles">
            {[...Array(6)].map((_, i) => <div key={i} className={`cit-particle cit-particle-${i}`} />)}
          </div>
          <div className="cit-hero-inner">
            <FadeIn delay={0.1}>
              <span className="cit-hero-badge">End-to-End IT Services</span>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h1>Drive Growth with Our<br/>Core IT Capabilities</h1>
            </FadeIn>
            <FadeIn delay={0.35}>
              <p className="cit-hero-desc">From concept to deployment and beyond — we deliver complete technology solutions that transform businesses, accelerate growth, and build lasting digital infrastructure.</p>
            </FadeIn>
            <FadeIn delay={0.5}>
              <div className="cit-hero-actions">
                <Link href="/request-custom-quote"><a className="cit-btn cit-btn-glow">Schedule a Consultation</a></Link>
                <Link href="/contact"><a className="cit-btn cit-btn-ghost">Talk to Our Experts</a></Link>
              </div>
            </FadeIn>
          </div>
          <div className="cit-hero-stats">
            <AnimatedCounter end={150} suffix="+" label="Projects Delivered" />
            <AnimatedCounter end={10} suffix="+" label="Years Experience" />
            <AnimatedCounter end={99} suffix="%" label="Client Satisfaction" />
            <AnimatedCounter end={50} suffix="+" label="Enterprise Clients" />
          </div>
        </section>

        {/* SERVICE PILLARS - Full Width Immersive Panels */}
        <section className="cit-pillars">
          <FadeIn><div className="cit-pillars-title"><h2>Our Service Pillars</h2><p>Three specialized divisions — each a full-spectrum capability center.</p></div></FadeIn>

          {/* Panel 1 - Digital Services */}
          <FadeIn>
            <Link href="/digital-services"><a className="cit-panel">
              <div className="cit-panel-bg"><img src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1500" alt="" /><div className="cit-panel-overlay cit-panel-overlay-1" /></div>
              <div className="cit-panel-inner">
                <div className="cit-panel-num">01</div>
                <div className="cit-panel-text">
                  <div className="cit-panel-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg></div>
                  <h3>Digital Services</h3>
                  <p>Website design & development, domain & hosting, digital marketing, SEO, and custom mobile app development to build your complete digital presence.</p>
                  <div className="cit-panel-tags">
                    {(digitalServices.length > 0 ? digitalServices.slice(0, 5) : [{id:1,name:'Web Development'},{id:2,name:'Hosting & Domain'},{id:3,name:'Digital Marketing'},{id:4,name:'Mobile Apps'},{id:5,name:'E-commerce'}]).map(s => <span key={s.id} className="cit-panel-tag">{s.name}</span>)}
                  </div>
                </div>
                <div className="cit-panel-arrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
              </div>
            </a></Link>
          </FadeIn>

          {/* Panel 2 - Business & Corporate */}
          <FadeIn>
            <Link href="/enterprise-solutions"><a className="cit-panel">
              <div className="cit-panel-bg"><img src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1500" alt="" /><div className="cit-panel-overlay cit-panel-overlay-2" /></div>
              <div className="cit-panel-inner">
                <div className="cit-panel-num">02</div>
                <div className="cit-panel-text">
                  <div className="cit-panel-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg></div>
                  <h3>Business & Corporate Solutions</h3>
                  <p>Enterprise-grade data centers, structured cabling, CCTV surveillance, networking infrastructure, and large-scale B2B project deployments.</p>
                  <div className="cit-panel-tags">
                    <span className="cit-panel-tag">Data Centers</span><span className="cit-panel-tag">Structured Cabling</span><span className="cit-panel-tag">CCTV & Security</span><span className="cit-panel-tag">Networking</span>
                  </div>
                </div>
                <div className="cit-panel-arrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
              </div>
            </a></Link>
          </FadeIn>

          {/* Panel 3 - Maintenance & Support */}
          <FadeIn>
            <Link href="/maintenance-support"><a className="cit-panel">
              <div className="cit-panel-bg"><img src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1500" alt="" /><div className="cit-panel-overlay cit-panel-overlay-3" /></div>
              <div className="cit-panel-inner">
                <div className="cit-panel-num">03</div>
                <div className="cit-panel-text">
                  <div className="cit-panel-icon"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg></div>
                  <h3>Maintenance & Support</h3>
                  <p>Annual IT maintenance contracts, rapid on-call repairs & troubleshooting, and project-based hardware installation and delivery services.</p>
                  <div className="cit-panel-tags">
                    <span className="cit-panel-tag">AMC Contracts</span><span className="cit-panel-tag">On-call Repairs</span><span className="cit-panel-tag">Installation</span><span className="cit-panel-tag">Troubleshooting</span>
                  </div>
                </div>
                <div className="cit-panel-arrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
              </div>
            </a></Link>
          </FadeIn>
        </section>

        {/* HOW WE WORK - Colored Cards */}
        <section className="cit-process">
          <div className="cit-container">
            <FadeIn><div className="cit-section-head cit-section-head-light"><h2>Our Methodology</h2><p>A proven framework that guarantees timely delivery of high-quality solutions.</p></div></FadeIn>
            <div className="cit-process-cards">
              {[
                { num: '01', title: 'Assessment & Planning', desc: 'Architecture review, risk analysis, and requirements gathering to define the perfect roadmap.', color: '#ffe4ec' },
                { num: '02', title: 'Design & Prototyping', desc: 'Wireframes, system design, and interactive prototypes for validation before development.', color: '#e4ffe8' },
                { num: '03', title: 'Development & Deployment', desc: 'Agile sprints, rigorous testing, CI/CD pipelines, and seamless go-live execution.', color: '#e4ecff' },
                { num: '04', title: 'Support & Optimization', desc: 'Ongoing monitoring, performance tuning, security patches, and continuous improvement.', color: '#f3e4ff' },
              ].map((step, i) => (
                <FadeIn key={step.num} delay={i * 0.12}>
                  <div className="cit-process-card" style={{ '--card-bg': step.color }}>
                    <span className="cit-process-num">{step.num}</span>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES - Rounded Square Cards with Icons */}
        <section className="cit-industries">
          <div className="cit-container">
            <FadeIn><div className="cit-section-head"><h2>Industries We Serve</h2><p>Deep domain expertise across diverse sectors enables tailored technology solutions.</p></div></FadeIn>
            <FadeIn delay={0.2}>
              <div className="cit-industry-grid">
                {[
                  { name: 'Finance & Banking', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/></svg> },
                  { name: 'E-commerce', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg> },
                  { name: 'Telecom', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg> },
                  { name: 'Real Estate', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
                  { name: 'Healthcare', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg> },
                  { name: 'Education', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg> },
                  { name: 'Logistics', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg> },
                  { name: 'Manufacturing', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg> },
                  { name: 'Retail', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg> },
                  { name: 'Government', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
                  { name: 'Startups', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> },
                  { name: 'NGO & Non-Profit', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg> },
                ].map(item => (
                  <div key={item.name} className="cit-industry-card">
                    <div className="cit-industry-icon">{item.icon}</div>
                    <span className="cit-industry-name">{item.name}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* TECH - Icons with Names */}
        <section className="cit-tech">
          <div className="cit-container">
            <FadeIn><div className="cit-section-head"><h2>Technologies We Work With</h2><p>Modern tools and platforms to deliver scalable, future-proof solutions.</p></div></FadeIn>
            <FadeIn delay={0.15}>
              <div className="cit-tech-grid">
                {[
                  { name: 'React', letter: 'R', color: '#61dafb' },
                  { name: 'Next.js', letter: 'N', color: '#000000' },
                  { name: 'Node.js', letter: 'N', color: '#68a063' },
                  { name: 'Python', letter: 'Py', color: '#3776ab' },
                  { name: 'PHP', letter: 'P', color: '#777bb4' },
                  { name: 'Laravel', letter: 'L', color: '#ff2d20' },
                  { name: 'MySQL', letter: 'My', color: '#4479a1' },
                  { name: 'MongoDB', letter: 'M', color: '#47a248' },
                  { name: 'AWS', letter: 'A', color: '#ff9900' },
                  { name: 'Azure', letter: 'Az', color: '#0078d4' },
                  { name: 'Docker', letter: 'D', color: '#2496ed' },
                  { name: 'WordPress', letter: 'W', color: '#21759b' },
                  { name: 'Flutter', letter: 'F', color: '#02569b' },
                  { name: 'Java', letter: 'J', color: '#ed8b00' },
                  { name: 'MikroTik', letter: 'Mt', color: '#293239' },
                  { name: 'Cisco', letter: 'C', color: '#1ba0d7' },
                  { name: 'Ubiquiti', letter: 'U', color: '#0559c9' },
                  { name: 'Hikvision', letter: 'H', color: '#e4002b' },
                ].map(tech => (
                  <div key={tech.name} className="cit-tech-card">
                    <div className="cit-tech-icon" style={{ '--tech-color': tech.color }}><span>{tech.letter}</span></div>
                    <span className="cit-tech-label">{tech.name}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* WHY US */}
        <section className="cit-why">
          <div className="cit-container">
            <FadeIn><div className="cit-section-head"><h2>Why Enterprises Choose Us</h2><p>Combining deep expertise with client-first philosophy to deliver measurable results.</p></div></FadeIn>
            <div className="cit-why-grid">
              {[
                { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: 'Proven Expertise', desc: 'A decade of mission-critical IT solutions across diverse industries.' },
                { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title: '24/7 Availability', desc: 'Round-the-clock support ensures zero disruption to your operations.' },
                { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>, title: 'Tailored Solutions', desc: 'Every engagement is customized — no cookie-cutter approaches.' },
                { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>, title: 'Scalable Architecture', desc: 'Solutions designed to grow seamlessly from startup to enterprise.' },
              ].map((item, i) => (
                <FadeIn key={item.title} delay={i * 0.1}>
                  <div className="cit-why-card">
                    <div className="cit-why-icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cit-cta">
          <div className="cit-cta-bg"><img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1500" alt="" /><div className="cit-cta-overlay" /></div>
          <div className="cit-container" style={{ position: 'relative', zIndex: 2 }}>
            <FadeIn>
              <h2>Ready to Transform Your IT Infrastructure?</h2>
              <p>Partner with us to build technology solutions that drive real business outcomes.</p>
              <div className="cit-cta-btns">
                <Link href="/request-custom-quote"><a className="cit-btn cit-btn-glow">Request a Quote</a></Link>
                <Link href="/contact"><a className="cit-btn cit-btn-ghost">Contact Us</a></Link>
              </div>
            </FadeIn>
          </div>
        </section>

        <Footer />
      </div>

      <style jsx>{`
        .cit-page { --accent: #f7e500; --dark: #0a101b; --dark2: #141c2b; width: 100%; }
        .cit-container { max-width: 1180px; margin: 0 auto; padding: 0 24px; }
        .cit-section-head { text-align: center; margin-bottom: 48px; }
        .cit-section-head h2 { margin: 0; font-size: clamp(28px, 4vw, 40px); font-weight: 800; color: #111827; }
        .cit-section-head p { margin: 12px auto 0; font-size: 16px; color: #6b7280; max-width: 540px; }
        .cit-section-head-light h2 { color: #fff; }
        .cit-section-head-light p { color: rgba(255,255,255,0.6); }

        /* HERO */
        .cit-hero { position: relative; min-height: 640px; display: flex; flex-direction: column; justify-content: center; overflow: hidden; }
        .cit-hero-bg { position: absolute; inset: 0; }
        .cit-hero-bg img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.4); }
        .cit-hero-overlay { position: absolute; inset: 0; background: linear-gradient(160deg, rgba(10,16,27,0.93) 0%, rgba(10,16,27,0.6) 60%, rgba(247,229,0,0.05) 100%); }
        .cit-hero-particles { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
        .cit-particle { position: absolute; border-radius: 50%; background: var(--accent); opacity: 0.12; animation: particleFloat 8s ease-in-out infinite; }
        .cit-particle-0 { width: 200px; height: 200px; top: -40px; right: 10%; animation-delay: 0s; }
        .cit-particle-1 { width: 120px; height: 120px; bottom: 20%; right: 25%; animation-delay: 2s; }
        .cit-particle-2 { width: 80px; height: 80px; top: 30%; left: 5%; animation-delay: 4s; }
        .cit-particle-3 { width: 150px; height: 150px; bottom: -30px; left: 20%; animation-delay: 1s; opacity: 0.08; }
        .cit-particle-4 { width: 60px; height: 60px; top: 15%; right: 40%; animation-delay: 3s; }
        .cit-particle-5 { width: 100px; height: 100px; bottom: 10%; right: 5%; animation-delay: 5s; opacity: 0.06; }
        @keyframes particleFloat { 0%,100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-20px) scale(1.05); } }

        .cit-hero-inner { position: relative; z-index: 2; max-width: 680px; padding: 140px 32px 60px; }
        .cit-hero-badge { display: inline-block; padding: 7px 18px; border-radius: 24px; background: rgba(247,229,0,0.1); border: 1px solid rgba(247,229,0,0.35); color: var(--accent); font-size: 13px; font-weight: 700; letter-spacing: 0.03em; margin-bottom: 18px; }
        .cit-hero-inner h1 { margin: 0; font-size: clamp(36px, 5.5vw, 56px); font-weight: 800; color: #fff; line-height: 1.1; letter-spacing: -0.02em; }
        .cit-hero-desc { margin: 20px 0 0; font-size: 17px; color: rgba(255,255,255,0.65); line-height: 1.75; }
        .cit-hero-actions { display: flex; gap: 14px; margin-top: 32px; flex-wrap: wrap; }

        .cit-btn { display: inline-flex; align-items: center; gap: 8px; padding: 15px 30px; border-radius: 12px; font-size: 15px; font-weight: 700; text-decoration: none; transition: all 0.2s; }
        .cit-btn-glow { background: var(--accent); color: var(--dark); box-shadow: 0 4px 20px rgba(247,229,0,0.25); }
        .cit-btn-glow:hover { transform: translateY(-3px); box-shadow: 0 8px 32px rgba(247,229,0,0.4); }
        .cit-btn-ghost { background: transparent; color: #fff; border: 2px solid rgba(255,255,255,0.25); }
        .cit-btn-ghost:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-2px); }
        .cit-btn-ghost-dark { background: transparent; color: var(--dark); border: 2px solid var(--dark); }
        .cit-btn-ghost-dark:hover { background: var(--dark); color: var(--accent); transform: translateY(-2px); }

        .cit-hero-stats { position: relative; z-index: 2; display: grid; grid-template-columns: repeat(4, 1fr); background: rgba(10,16,27,0.8); backdrop-filter: blur(12px); border-top: 1px solid rgba(247,229,0,0.12); padding: 28px 32px; }
        .cit-counter { text-align: center; }
        .cit-counter-num { display: block; font-size: 32px; font-weight: 800; color: var(--accent); }
        .cit-counter-label { font-size: 11px; color: rgba(255,255,255,0.5); text-transform: uppercase; letter-spacing: 0.08em; margin-top: 2px; display: block; }

        /* PILLARS - Full Width Panels */
        .cit-pillars { padding: 80px 0 0; background: #f8fafc; }
        .cit-pillars-title { text-align: center; padding: 0 24px 48px; }
        .cit-pillars-title h2 { margin: 0; font-size: clamp(28px, 4vw, 40px); font-weight: 800; color: #111827; }
        .cit-pillars-title p { margin: 12px 0 0; font-size: 16px; color: #6b7280; }

        .cit-panel { display: block; position: relative; width: 100%; min-height: 320px; overflow: hidden; text-decoration: none; color: #fff; transition: all 0.4s; }
        .cit-panel:hover { transform: none; }
        .cit-panel-bg { position: absolute; inset: 0; }
        .cit-panel-bg img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease, filter 0.4s; }
        .cit-panel:hover .cit-panel-bg img { transform: scale(1.04); filter: brightness(0.6); }
        .cit-panel-overlay { position: absolute; inset: 0; }
        .cit-panel-overlay-1 { background: linear-gradient(135deg, rgba(10,16,27,0.88) 0%, rgba(10,16,27,0.4) 60%, rgba(247,229,0,0.05) 100%); }
        .cit-panel-overlay-2 { background: linear-gradient(135deg, rgba(10,16,27,0.85) 0%, rgba(20,28,43,0.5) 60%, rgba(0,100,200,0.05) 100%); }
        .cit-panel-overlay-3 { background: linear-gradient(135deg, rgba(10,16,27,0.88) 0%, rgba(10,16,27,0.45) 60%, rgba(0,200,100,0.05) 100%); }

        .cit-panel-inner { position: relative; z-index: 2; display: flex; align-items: center; gap: 32px; max-width: 1200px; margin: 0 auto; padding: 56px 40px; min-height: 320px; }
        .cit-panel-num { font-size: 100px; font-weight: 900; color: rgba(247,229,0,0.08); line-height: 1; flex-shrink: 0; font-family: 'JetBrains Mono', monospace; transition: color 0.3s; }
        .cit-panel:hover .cit-panel-num { color: rgba(247,229,0,0.15); }
        .cit-panel-text { flex: 1; }
        .cit-panel-icon { width: 52px; height: 52px; border-radius: 14px; background: rgba(247,229,0,0.12); border: 1px solid rgba(247,229,0,0.3); display: flex; align-items: center; justify-content: center; color: var(--accent); margin-bottom: 14px; }
        .cit-panel-text h3 { margin: 0 0 10px; font-size: clamp(22px, 3vw, 30px); font-weight: 700; }
        .cit-panel-text p { margin: 0 0 16px; font-size: 15px; color: rgba(255,255,255,0.7); line-height: 1.7; max-width: 600px; }
        .cit-panel-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .cit-panel-tag { padding: 6px 14px; border-radius: 20px; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.85); transition: all 0.2s; }
        .cit-panel:hover .cit-panel-tag { background: rgba(247,229,0,0.12); border-color: rgba(247,229,0,0.3); color: var(--accent); }
        .cit-panel-arrow { width: 56px; height: 56px; border-radius: 50%; background: rgba(247,229,0,0.1); border: 2px solid rgba(247,229,0,0.3); display: flex; align-items: center; justify-content: center; color: var(--accent); flex-shrink: 0; transition: all 0.3s; }
        .cit-panel:hover .cit-panel-arrow { background: var(--accent); color: var(--dark); transform: translateX(6px); box-shadow: 0 0 24px rgba(247,229,0,0.4); }

        /* PROCESS */
        .cit-process { padding: 90px 0; background: var(--dark); }
        .cit-process-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
        .cit-process-card { padding: 28px 22px; border-radius: 18px; background: var(--card-bg); min-height: 220px; display: flex; flex-direction: column; position: relative; overflow: hidden; transition: transform 0.25s; }
        .cit-process-card:hover { transform: translateY(-4px); }
        .cit-process-num { font-size: 64px; font-weight: 900; color: rgba(10,16,27,0.06); position: absolute; top: 10px; right: 16px; line-height: 1; }
        .cit-process-card h3 { margin: 0 0 10px; font-size: 17px; font-weight: 700; color: var(--dark); }
        .cit-process-card p { margin: 0; font-size: 13px; color: #4b5563; line-height: 1.65; }

        /* INDUSTRIES - Rounded Square Cards */
        .cit-industries { padding: 80px 0; background: #0a101b; }
        .cit-industries .cit-section-head h2 { color: #fff; }
        .cit-industries .cit-section-head p { color: rgba(255,255,255,0.55); }
        .cit-industry-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 16px; }
        .cit-industry-card { display: flex; flex-direction: column; align-items: center; gap: 10px; padding: 22px 14px; border-radius: 16px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); transition: all 0.25s; cursor: default; text-align: center; }
        .cit-industry-card:hover { background: rgba(247,229,0,0.08); border-color: rgba(247,229,0,0.35); transform: translateY(-4px); box-shadow: 0 12px 28px rgba(0,0,0,0.3); }
        .cit-industry-icon { width: 44px; height: 44px; border-radius: 12px; background: rgba(247,229,0,0.1); border: 1px solid rgba(247,229,0,0.2); display: flex; align-items: center; justify-content: center; color: var(--accent); transition: all 0.25s; }
        .cit-industry-card:hover .cit-industry-icon { background: var(--accent); color: var(--dark); }
        .cit-industry-name { font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.8); line-height: 1.3; }
        .cit-industry-card:hover .cit-industry-name { color: #fff; }

        /* TECH - Icon Grid */
        .cit-tech { padding: 80px 0; background: #f8fafc; }
        .cit-tech-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px; }
        .cit-tech-card { display: flex; flex-direction: column; align-items: center; gap: 10px; padding: 20px 12px; border-radius: 14px; background: #fff; border: 1px solid #e5e7eb; transition: all 0.25s; cursor: default; }
        .cit-tech-card:hover { border-color: var(--tech-color, #e5e7eb); transform: translateY(-4px); box-shadow: 0 12px 28px rgba(0,0,0,0.06); }
        .cit-tech-icon { width: 44px; height: 44px; border-radius: 12px; background: color-mix(in srgb, var(--tech-color) 12%, white); display: flex; align-items: center; justify-content: center; transition: all 0.25s; }
        .cit-tech-icon span { font-size: 16px; font-weight: 800; color: var(--tech-color); }
        .cit-tech-card:hover .cit-tech-icon { background: var(--tech-color); }
        .cit-tech-card:hover .cit-tech-icon span { color: #fff; }
        .cit-tech-label { font-size: 12px; font-weight: 600; color: #4b5563; text-align: center; }

        /* WHY US */
        .cit-why { padding: 90px 0; background: #f8fafc; }
        .cit-why-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .cit-why-card { padding: 28px; border-radius: 16px; background: #fff; border: 1px solid #e5e7eb; transition: all 0.25s; }
        .cit-why-card:hover { border-color: var(--accent); transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.06); }
        .cit-why-icon { width: 48px; height: 48px; border-radius: 14px; background: var(--dark); display: flex; align-items: center; justify-content: center; color: var(--accent); margin-bottom: 16px; }
        .cit-why-card h3 { margin: 0 0 8px; font-size: 17px; font-weight: 700; color: #111827; }
        .cit-why-card p { margin: 0; font-size: 14px; color: #6b7280; line-height: 1.65; }

        /* CTA */
        .cit-cta { position: relative; padding: 100px 24px; text-align: center; overflow: hidden; }
        .cit-cta-bg { position: absolute; inset: 0; }
        .cit-cta-bg img { width: 100%; height: 100%; object-fit: cover; }
        .cit-cta-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(10,16,27,0.92) 0%, rgba(10,16,27,0.85) 100%); }
        .cit-cta h2 { margin: 0; font-size: clamp(26px, 4vw, 38px); font-weight: 800; color: #fff; }
        .cit-cta p { margin: 14px 0 0; font-size: 17px; color: rgba(255,255,255,0.6); max-width: 500px; margin-left: auto; margin-right: auto; }
        .cit-cta-btns { display: flex; gap: 14px; justify-content: center; margin-top: 32px; flex-wrap: wrap; }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .cit-panel-inner { flex-direction: column; align-items: flex-start; gap: 20px; padding: 40px 24px; min-height: 280px; }
          .cit-panel-num { font-size: 64px; position: absolute; top: 16px; right: 24px; }
          .cit-panel-arrow { display: none; }
          .cit-process-cards { grid-template-columns: repeat(2, 1fr); }
          .cit-why-grid { grid-template-columns: repeat(2, 1fr); }
          .cit-hero-stats { grid-template-columns: repeat(2, 1fr); gap: 16px; }
        }
        @media (max-width: 600px) {
          .cit-hero-inner { padding: 110px 20px 40px; }
          .cit-hero-inner h1 { font-size: 30px; }
          .cit-panel-inner { padding: 32px 20px; min-height: 240px; }
          .cit-panel-num { font-size: 48px; }
          .cit-panel-text h3 { font-size: 20px; }
          .cit-process-cards { grid-template-columns: 1fr; }
          .cit-why-grid { grid-template-columns: 1fr; }
          .cit-hero-stats { grid-template-columns: repeat(2, 1fr); }
          .cit-counter-num { font-size: 26px; }
          .cit-industry-tags { gap: 8px; }
          .cit-tag { padding: 9px 16px; font-size: 12px; }
        }
      `}</style>
    </>
  )
}

export const getServerSideProps = async () => {
  try {
    const { listDigitalServiceEntries, listBusinessSolutionEntries, listMaintenanceSupportEntries } = await import('../lib/server/products')
    const [digitalServices, businessSolutions, maintenanceServices] = await Promise.all([
      listDigitalServiceEntries(6), listBusinessSolutionEntries(6), listMaintenanceSupportEntries(6),
    ])
    return { props: { digitalServices, businessSolutions, maintenanceServices } }
  } catch (error) {
    return { props: { digitalServices: [], businessSolutions: [], maintenanceServices: [] } }
  }
}

export default CoreITSolutions
