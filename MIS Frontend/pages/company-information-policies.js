import React from 'react'
import Head from 'next/head'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const clientLogos = [
  'Delta Manufacturing',
  'Northbridge Hospital',
  'Cityline Bank',
  'Orion Logistics',
  'Pinnacle University',
  'Aster Retail Group',
  'Zenith Foods',
  'Cobalt Telecom',
]

const CompanyInformationPolicies = () => {
  return (
    <>
      <div className="company-info-page">
        <Head>
          <title>Company Information & Policies | MIS Solution</title>
          <meta
            name="description"
            content="Learn about MIS Solution, our client projects, and our structured warranty, EMI, and return policies."
          />
        </Head>

        <Navigation></Navigation>

        <main className="company-main">
          <section className="about-projects-half">
            <div className="shell">
              <header className="page-header">
                <p className="eyebrow">Company Information</p>
                <h1>About Us &amp; Projects</h1>
                <p>
                  MIS Solution is an established IT service provider delivering
                  enterprise-grade infrastructure, security, and technology
                  support. Our approach combines practical engineering,
                  dependable delivery, and long-term client partnership.
                </p>
              </header>

              <div className="mission-grid">
                <article className="panel-card">
                  <h2>Our Mission</h2>
                  <p>
                    To design, deploy, and support reliable IT systems that
                    improve business continuity, security posture, and daily
                    operational efficiency for organizations of every scale.
                  </p>
                </article>
                <article className="panel-card">
                  <h2>Our Vision</h2>
                  <p>
                    To be the most trusted systems partner for enterprises that
                    demand secure, scalable, and future-ready infrastructure
                    across networking, hardware, and managed services.
                  </p>
                </article>
              </div>

              <section className="projects-block">
                <div className="section-head">
                  <h2>Client Projects &amp; Case Studies</h2>
                  <p>
                    Selected implementations across enterprise LAN/WAN
                    architecture and integrated security deployments.
                  </p>
                </div>

                <div className="project-gallery">
                  <article className="project-card">
                    <img
                      src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200"
                      alt="LAN and WAN network installation"
                    />
                    <div className="project-copy">
                      <h3>Multi-Site LAN/WAN Rollout</h3>
                      <p>
                        Deployed a resilient WAN backbone and segmented LAN for
                        14 branches with centralized monitoring and failover.
                      </p>
                      <span className="tag">Networking</span>
                    </div>
                  </article>

                  <article className="project-card">
                    <img
                      src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200"
                      alt="Security surveillance and access control"
                    />
                    <div className="project-copy">
                      <h3>Integrated Security System</h3>
                      <p>
                        Implemented CCTV coverage, access control, and alerting
                        workflows for an industrial operations campus.
                      </p>
                      <span className="tag">Security</span>
                    </div>
                  </article>

                  <article className="project-card">
                    <img
                      src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200"
                      alt="Core networking modernization"
                    />
                    <div className="project-copy">
                      <h3>Core Infrastructure Upgrade</h3>
                      <p>
                        Re-architected switching and edge routing to improve
                        throughput, uptime, and policy-based security controls.
                      </p>
                      <span className="tag">Enterprise Hardware</span>
                    </div>
                  </article>
                </div>
              </section>

              <section className="logo-block">
                <div className="section-head">
                  <h2>Trusted by Clients</h2>
                  <p>
                    Placeholder logos illustrating the range of industries we
                    support.
                  </p>
                </div>
                <div className="logo-grid">
                  {clientLogos.map((name) => (
                    <div key={name} className="logo-item">
                      <span>{name}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </section>

          <section className="policies-half">
            <div className="shell">
              <header className="section-head">
                <h2>Warranty &amp; EMI Policy</h2>
                <p>
                  A structured overview of warranty coverage, claims process,
                  installment options, and return terms.
                </p>
              </header>

              <div className="policy-grid">
                <article className="policy-card">
                  <h3>Product Warranty Conditions</h3>
                  <ul>
                    <li>
                      Standard warranty applies from the invoice date unless a
                      product-specific period is stated.
                    </li>
                    <li>
                      Coverage includes manufacturing defects under normal,
                      intended use.
                    </li>
                    <li>
                      Exclusions: physical damage, liquid damage, unauthorized
                      modifications, and misuse.
                    </li>
                    <li>
                      Original purchase documents are required for validation.
                    </li>
                  </ul>
                </article>

                <article className="policy-card">
                  <h3>Warranty Claim Process</h3>
                  <ol>
                    <li>Register the issue with invoice number and serial ID.</li>
                    <li>
                      Remote triage is completed by the MIS support team.
                    </li>
                    <li>
                      Device inspection and diagnostics are scheduled onsite or
                      at service center.
                    </li>
                    <li>
                      Repair, replacement, or OEM escalation is initiated as per
                      eligibility.
                    </li>
                  </ol>
                </article>

                <article className="policy-card">
                  <h3>EMI Payment Options</h3>
                  <ul>
                    <li>Flexible tenures: 3, 6, 9, 12, and 24 months.</li>
                    <li>
                      Eligible cards and approved finance partners supported.
                    </li>
                    <li>
                      Zero-interest campaigns may apply to selected products.
                    </li>
                    <li>
                      Early closure and processing terms follow finance-provider
                      policies.
                    </li>
                  </ul>
                </article>

                <article className="policy-card">
                  <h3>Return Policy</h3>
                  <ul>
                    <li>
                      Return requests must be raised within the approved return
                      window stated on invoice.
                    </li>
                    <li>
                      Products must be returned with original accessories,
                      packaging, and proof of purchase.
                    </li>
                    <li>
                      Open-box software licenses and custom-built solutions are
                      generally non-returnable.
                    </li>
                    <li>
                      Refund or replacement outcome is confirmed after technical
                      verification.
                    </li>
                  </ul>
                </article>
              </div>

              <div className="policy-note">
                <p>
                  Need policy clarification for a specific product or project?
                </p>
                <a href="/contact" className="btn btn-primary btn-lg">
                  Contact Policy Desk
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer></Footer>
      </div>

      <style jsx>{`
        .company-info-page {
          background: #ffffff;
          color: #2f2f2f;
          min-height: 100vh;
        }

        .company-main {
          background: #ffffff;
        }

        .shell {
          width: 100%;
          max-width: 76rem;
          margin: 0 auto;
          padding: 3.5rem 1.5rem;
        }

        .page-header {
          max-width: 54rem;
          margin-bottom: 2rem;
        }

        .eyebrow {
          color: var(--color-primary);
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        h1,
        h2,
        h3 {
          color: #232323;
          margin: 0;
          line-height: 1.2;
        }

        h1 {
          font-size: clamp(2rem, 3.8vw, 3.2rem);
          margin-bottom: 1rem;
        }

        h2 {
          font-size: clamp(1.5rem, 2.2vw, 2.1rem);
          margin-bottom: 0.7rem;
        }

        h3 {
          font-size: 1.2rem;
          margin-bottom: 0.6rem;
        }

        p {
          color: #454545;
          margin: 0;
          line-height: 1.7;
        }

        .mission-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
          margin-bottom: 2.2rem;
        }

        .panel-card {
          border: 1px solid #d9d9d9;
          border-top: 4px solid var(--color-primary);
          border-radius: 12px;
          padding: 1.2rem;
          background: #ffffff;
        }

        .section-head {
          margin-bottom: 1rem;
        }

        .projects-block,
        .logo-block {
          margin-top: 2.2rem;
        }

        .project-gallery {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
        }

        .project-card {
          border: 1px solid #d4d4d4;
          border-radius: 12px;
          overflow: hidden;
          background: #ffffff;
        }

        .project-card img {
          width: 100%;
          height: 170px;
          object-fit: cover;
        }

        .project-copy {
          padding: 1rem;
        }

        .tag {
          display: inline-flex;
          margin-top: 0.7rem;
          padding: 0.25rem 0.6rem;
          border-radius: 999px;
          font-size: 0.8rem;
          font-weight: 700;
          background: color-mix(in srgb, var(--color-primary) 20%, white);
          color: #232323;
        }

        .logo-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0.8rem;
        }

        .logo-item {
          min-height: 70px;
          border: 1px dashed #989898;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0.8rem;
          font-weight: 600;
          color: #4a4a4a;
          background: #fbfbfb;
        }

        .policies-half {
          background: #ffffff;
        }

        .policy-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
        }

        .policy-card {
          border: 1px solid #d6d6d6;
          border-left: 5px solid #1f2329;
          border-radius: 12px;
          padding: 1.1rem;
          background: #ffffff;
        }

        .policy-card ul,
        .policy-card ol {
          margin: 0;
          padding-left: 1.1rem;
          color: #444444;
          line-height: 1.7;
          display: grid;
          gap: 0.5rem;
        }

        .policy-note {
          margin-top: 1.6rem;
          border-top: 2px solid #1f2329;
          padding-top: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        @media (max-width: 991px) {
          .mission-grid,
          .project-gallery,
          .policy-grid,
          .logo-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 767px) {
          .shell {
            padding-top: 2.4rem;
            padding-bottom: 2.4rem;
          }

          .mission-grid,
          .project-gallery,
          .policy-grid,
          .logo-grid {
            grid-template-columns: 1fr;
          }

          .policy-note {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </>
  )
}

export default CompanyInformationPolicies
