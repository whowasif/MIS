import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const clientLogos = [
  '/client%20logo/Picture1.png',
  '/client%20logo/Picture4.png',
  '/client%20logo/Picture5.png',
  '/client%20logo/Picture6.png',
  '/client%20logo/Picture7.png',
  '/client%20logo/Picture9.png',
  '/client%20logo/Picture10.png',
  '/client%20logo/Picture11.png',
  '/client%20logo/Picture12.png',
  '/client%20logo/Picture16.png',
  '/client%20logo/Picture18.png',
  '/client%20logo/Picture20.png',
  '/client%20logo/Picture21.png',
  '/client%20logo/Picture22.png',
  '/client%20logo/Picture26.png',
  '/client%20logo/Picture27.png',
  '/client%20logo/Picture28.png',
  '/client%20logo/Picture1.jpg',
  '/client%20logo/Picture8.jpg',
  '/client%20logo/Picture13.jpg',
  '/client%20logo/Picture14.jpg',
  '/client%20logo/Picture15.jpg',
  '/client%20logo/Picture17.jpg',
  '/client%20logo/Picture19.jpg',
  '/client%20logo/Picture23.jpg',
  '/client%20logo/Picture24.jpg',
  '/client%20logo/Picture25.jpg',
]

const CompanyInformationPolicies = ({ clientProjects = [] }) => {
  return (
    <>
      <div className="company-info-page">
        <Head>
          <title>Company Information & Policies | MIS Solution</title>
          <meta name="description" content="Learn about MIS Solution, our client projects, and our structured warranty, EMI, and return policies." />
        </Head>

        <Navigation />

        <main className="company-main">
          <section className="about-projects-half">
            <div className="shell">
              <header className="page-header">
                <p className="eyebrow">Company Information</p>
                <h1>About Us &amp; Projects</h1>
                <p>We, MIS Solution, are devoted to provide broad range of technology products and services for a multitude of challenging market. We prefer to work side-by-side with our customers to exploit new opportunities. Our dedicated team always promised our valued customer with end-to-end products and solution keeping in mind their specific requirements and needs.</p>
                <p>Our main focus is to construct a superior customer value proposition to become successful business organization. Customers are the key concern to us. We are always devoted to provide the best services and products to our customers.</p>
              </header>

              <div className="mission-grid">
                <article className="panel-card">
                  <h2>Our Mission</h2>
                  <p>To design, deploy, and support reliable IT systems that improve business continuity, security posture, and daily operational efficiency for organizations of every scale.</p>
                </article>
                <article className="panel-card">
                  <h2>Our Vision</h2>
                  <p>To be the most trusted systems partner for enterprises that demand secure, scalable, and future-ready infrastructure across networking, hardware, and managed services.</p>
                </article>
              </div>

              {/* CEO Speech Section */}
              <section className="ceo-section">
                <div className="ceo-strip">
                  <div className="ceo-avatar-ring">
                    <img src="/ceo-profile.jpeg" alt="Mohammad Ibrahim Sikder" />
                  </div>
                  <div className="ceo-speech-wrap">
                    <p className="ceo-speech"><span className="ceo-mark">&ldquo;</span>At MIS Solution, we believe technology should simplify, not complicate. Our commitment is to stand beside every client as a long-term partner — understanding their unique challenges and delivering services that are not just functional, but transformational. Whether it&apos;s building a company&apos;s digital presence from scratch, deploying enterprise-grade infrastructure, or ensuring systems run flawlessly year-round through our maintenance contracts — we approach every engagement with the same dedication. We don&apos;t just deliver solutions; we build lasting relationships, empower businesses to scale, and drive meaningful progress through innovation, expertise, and integrity.&rdquo;</p>
                  </div>
                  <div className="ceo-sig">
                    <div className="ceo-sig-line"></div>
                    <strong>Mohammad Ibrahim Sikder</strong>
                    <span>Founder & Managing Director</span>
                  </div>
                </div>
              </section>

              <section className="projects-block">
                <div className="section-head">
                  <h2>Client Projects &amp; Case Studies</h2>
                  <p>Real-world implementations for leading institutions and enterprises across Bangladesh.</p>
                </div>
                <div className="project-list">
                  {clientProjects.length > 0 ? (
                    clientProjects.map((project, idx) => (
                      <Link key={project.id} href={`/projects/${encodeURIComponent(project.slug || project.id)}`}>
                        <a className={`project-card-alt ${idx % 2 === 0 ? 'text-first' : 'img-first'}`}>
                          <div className="pca-text">
                            <h3>{project.name}</h3>
                            <p>{project.description?.substring(0, 140)}{project.description?.length > 140 ? '...' : ''}</p>
                            <span className="pca-client">{project.client_name}</span>
                            <span className="pca-link">View Full Story →</span>
                          </div>
                          <div className="pca-img">
                            {project.icon_url ? <img src={project.icon_url} alt={project.name} /> : <div className="pca-placeholder">{project.name.charAt(0)}</div>}
                          </div>
                        </a>
                      </Link>
                    ))
                  ) : (
                    <div className="project-card-alt text-first">
                      <div className="pca-text"><h3>Enterprise Project</h3><p>Details coming soon.</p></div>
                      <div className="pca-img"><div className="pca-placeholder">E</div></div>
                    </div>
                  )}
                </div>
              </section>

              <section className="logo-block">
                <div className="section-head">
                  <h2>Trusted by Clients</h2>
                  <p>Proudly serving organizations across industries — from banking and healthcare to manufacturing and education.</p>
                </div>
                <div className="logo-marquee">
                  <div className="logo-track">
                    {[...clientLogos, ...clientLogos].map((src, idx) => (
                      <div key={idx} className="logo-item">
                        <img src={src} alt={`Client ${(idx % clientLogos.length) + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </section>

          <section className="policies-half">
            <div className="shell">
              <header className="section-head">
                <h2>Warranty &amp; EMI Policy</h2>
                <p>A structured overview of warranty coverage, claims process, installment options, and return terms.</p>
              </header>
              <div className="policy-grid">
                <article className="policy-card"><h3>Product Warranty Conditions</h3><ul><li>Standard warranty applies from the invoice date unless a product-specific period is stated.</li><li>Coverage includes manufacturing defects under normal, intended use.</li><li>Exclusions: physical damage, liquid damage, unauthorized modifications.</li><li>Original purchase documents are required for validation.</li></ul></article>
                <article className="policy-card"><h3>Warranty Claim Process</h3><ol><li>Register the issue with invoice number and serial ID.</li><li>Remote triage is completed by the MIS support team.</li><li>Device inspection and diagnostics are scheduled.</li><li>Repair, replacement, or OEM escalation is initiated.</li></ol></article>
                <article className="policy-card"><h3>EMI Payment Options</h3><ul><li>Flexible tenures: 3, 6, 9, 12, and 24 months.</li><li>Eligible cards and approved finance partners supported.</li><li>Zero-interest campaigns may apply to selected products.</li><li>Early closure terms follow finance-provider policies.</li></ul></article>
                <article className="policy-card"><h3>Return Policy</h3><ul><li>Return requests must be raised within the approved return window.</li><li>Products must be returned with original accessories and packaging.</li><li>Open-box software and custom-built solutions are non-returnable.</li><li>Refund or replacement confirmed after technical verification.</li></ul></article>
              </div>
              <div className="policy-note">
                <p>Need policy clarification for a specific product or project?</p>
                <a href="/contact" className="btn btn-primary btn-lg">Contact Policy Desk</a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <style jsx>{`
        .company-info-page { background: #ffffff; color: #2f2f2f; min-height: 100vh; }
        .company-main { background: #ffffff; }
        .shell { width: 100%; max-width: 76rem; margin: 0 auto; padding: 3.5rem 1.5rem; }
        .page-header { max-width: 54rem; margin-bottom: 2rem; }
        .eyebrow { color: var(--color-primary); font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 0.5rem; }
        h1, h2, h3 { color: #232323; margin: 0; line-height: 1.2; }
        h1 { font-size: clamp(2rem, 3.8vw, 3.2rem); margin-bottom: 1rem; }
        h2 { font-size: clamp(1.5rem, 2.2vw, 2.1rem); margin-bottom: 0.7rem; }
        h3 { font-size: 1.2rem; margin-bottom: 0.6rem; }
        p { color: #454545; margin: 0; line-height: 1.7; }
        .mission-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; margin-bottom: 2.2rem; }
        .panel-card { border: 1px solid #d9d9d9; border-top: 4px solid var(--color-primary); border-radius: 12px; padding: 1.2rem; background: #ffffff; }
        .ceo-section { margin: 3rem 0; }
        .ceo-strip { background: #f0f4f8; border-radius: 24px; padding: 48px 40px 40px; text-align: center; border: 1px solid #e2e8f0; }
        .ceo-avatar-ring { width: 160px; height: 160px; border-radius: 50%; padding: 4px; background: #f7e500; margin: 0 auto 28px; }
        .ceo-avatar-ring img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; object-position: center 20%; display: block; border: 3px solid #f0f4f8; }
        .ceo-speech-wrap { max-width: 680px; margin: 0 auto; }
        .ceo-speech { margin: 0; font-size: 15px; font-style: italic; color: #374151; line-height: 1.9; text-align: left; }
        .ceo-mark { font-size: 52px; font-weight: 900; color: #f7e500; font-family: Georgia, serif; line-height: 0.5; vertical-align: -0.15em; margin-right: 4px; font-style: normal; }
        .ceo-sig { margin-top: 28px; display: flex; flex-direction: column; align-items: center; gap: 4px; }
        .ceo-sig-line { width: 40px; height: 3px; border-radius: 2px; background: #f7e500; margin-bottom: 8px; }
        .ceo-sig strong { font-size: 16px; font-weight: 700; color: #111827; }
        .ceo-sig span { font-size: 12px; color: #6b7280; }
        .section-head { margin-bottom: 1rem; }
        .projects-block, .logo-block { margin-top: 2.2rem; }
        .project-list { display: flex; flex-direction: column; gap: 16px; }
        .project-card-alt { display: grid; grid-template-columns: 1fr 1fr; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; background: #fff; text-decoration: none; color: inherit; transition: box-shadow 0.2s, transform 0.15s; height: 220px; }
        .project-card-alt:hover { box-shadow: 0 12px 32px rgba(0,0,0,0.08); transform: translateY(-2px); }
        .project-card-alt.img-first { direction: rtl; }
        .project-card-alt.img-first > * { direction: ltr; }
        .pca-text { padding: 24px; display: flex; flex-direction: column; justify-content: center; gap: 8px; }
        .pca-text h3 { margin: 0; font-size: 17px; color: #111827; font-weight: 700; }
        .pca-text p { margin: 0; font-size: 13px; color: #4b5563; line-height: 1.7; }
        .pca-client { font-size: 12px; font-weight: 600; color: #6366f1; }
        .pca-link { font-size: 13px; font-weight: 700; color: #4f46e5; }
        .pca-img { background: #f1f5f9; overflow: hidden; height: 100%; }
        .pca-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .pca-placeholder { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 48px; font-weight: 800; color: #cbd5e1; background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); }
        .logo-marquee { overflow: hidden; padding: 1rem 0; }
        .logo-track { display: flex; gap: 2rem; width: max-content; animation: scroll-logos 40s linear infinite; }
        .logo-track:hover { animation-play-state: paused; }
        @keyframes scroll-logos { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .logo-item { flex-shrink: 0; width: 160px; height: 100px; border: 1px solid #e5e7eb; border-radius: 12px; display: flex; align-items: center; justify-content: center; padding: 16px; background: #ffffff; transition: box-shadow 0.2s, transform 0.2s; }
        .logo-item:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.08); transform: scale(1.05); }
        .logo-item img { max-width: 100%; max-height: 100%; object-fit: contain; }
        .policies-half { background: #ffffff; }
        .policy-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
        .policy-card { border: 1px solid #d6d6d6; border-left: 5px solid #1f2329; border-radius: 12px; padding: 1.1rem; background: #ffffff; }
        .policy-card ul, .policy-card ol { margin: 0; padding-left: 1.1rem; color: #444444; line-height: 1.7; display: grid; gap: 0.5rem; }
        .policy-note { margin-top: 1.6rem; border-top: 2px solid #1f2329; padding-top: 1.2rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
        @media (max-width: 991px) { .mission-grid, .policy-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 767px) { .shell { padding-top: 2.4rem; padding-bottom: 2.4rem; } .mission-grid, .policy-grid { grid-template-columns: 1fr; } .policy-note { flex-direction: column; align-items: flex-start; } .project-card-alt { grid-template-columns: 3fr 2fr; height: auto; min-height: 180px; } .project-card-alt.img-first { direction: rtl; } .project-card-alt.img-first > * { direction: ltr; } .pca-img { height: 100%; min-height: 180px; } .pca-text { padding: 14px; } .pca-text h3 { font-size: 14px; } .pca-text p { font-size: 12px; -webkit-line-clamp: 3; display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden; } .ceo-strip { padding: 36px 20px 32px; } .ceo-avatar-ring { width: 140px; height: 140px; } .ceo-mark { font-size: 40px; } }
      `}</style>
    </>
  )
}

export const getServerSideProps = async () => {
  try {
    const { getDbPool } = await import('../lib/server/db')
    const db = getDbPool()
    const [rows] = await db.query(`SELECT id, name, slug, description, icon_url, client_name FROM client_projects WHERE deleted_at IS NULL AND status = 'active' ORDER BY display_order ASC, created_at DESC LIMIT 20`)
    return { props: { clientProjects: JSON.parse(JSON.stringify(rows)) } }
  } catch (e) {
    return { props: { clientProjects: [] } }
  }
}

export default CompanyInformationPolicies
