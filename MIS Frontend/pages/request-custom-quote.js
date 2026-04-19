import React from 'react'
import Head from 'next/head'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const RequestCustomQuote = () => {
  return (
    <>
      <div className="quote-page">
        <Head>
          <title>Request a Custom Quote | MIS Solution</title>
          <meta
            name="description"
            content="Request a custom enterprise or B2B quote from MIS Solution for networking, security, data center, hardware, and maintenance projects."
          />
        </Head>

        <Navigation></Navigation>

        <main className="quote-main">
          <section className="quote-hero">
            <p className="quote-kicker">Enterprise Sales</p>
            <h1>Request a Custom Quote</h1>
            <p>
              Share your business requirements and our corporate engineering team
              will prepare a tailored commercial proposal for your organization.
            </p>
          </section>

          <section className="quote-layout">
            <div className="quote-form-panel">
              <h2>Project Inquiry Form</h2>
              <form className="quote-form" onSubmit={(e) => e.preventDefault()}>
                <div className="field-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="field-group">
                  <label htmlFor="companyName">Company Name</label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    placeholder="Enter your company name"
                    required
                  />
                </div>

                <div className="field-group two-col">
                  <div>
                    <label htmlFor="businessEmail">Business Email</label>
                    <input
                      id="businessEmail"
                      name="businessEmail"
                      type="email"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      placeholder="+880 1XXXXXXXXX"
                      required
                    />
                  </div>
                </div>

                <div className="field-group">
                  <label htmlFor="projectType">Project Type</label>
                  <select id="projectType" name="projectType" required defaultValue="">
                    <option value="" disabled>
                      Select project type
                    </option>
                    <option value="enterprise-networking">
                      Enterprise Networking
                    </option>
                    <option value="cctv-security">CCTV &amp; Security</option>
                    <option value="data-center">Data Center</option>
                    <option value="bulk-hardware">Bulk Hardware</option>
                    <option value="maintenance-contract">
                      Maintenance Contract
                    </option>
                  </select>
                </div>

                <div className="field-group">
                  <label htmlFor="projectRequirements">Project Requirements</label>
                  <textarea
                    id="projectRequirements"
                    name="projectRequirements"
                    placeholder="Please describe your scope, expected timeline, sites, quantities, and technical requirements."
                    rows="8"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Submit Quote Request
                </button>
              </form>
            </div>

            <aside className="quote-contact-panel" aria-label="Direct Contact">
              <h2>Direct Contact</h2>
              <p>
                Reach our corporate sales desk anytime for urgent enterprise
                tenders and project consultations.
              </p>

              <div className="contact-item">
                <span className="contact-label">24/7 Corporate Sales Hotline</span>
                <a href="tel:+8801700000000">+880 17 0000 0000</a>
              </div>

              <div className="contact-item">
                <span className="contact-label">Email Address</span>
                <a href="mailto:projects@missolution.com">
                  projects@missolution.com
                </a>
              </div>

              <div className="response-badge">
                Our engineers will respond within 24 hours
              </div>
            </aside>
          </section>
        </main>

        <Footer></Footer>
      </div>

      <style jsx>{`
        .quote-page {
          min-height: 100vh;
          background: #ffffff;
          color: #2f2f2f;
        }

        .quote-main {
          margin: 0 auto;
          width: 100%;
          max-width: 1200px;
          padding: 2.5rem 1.25rem 5rem;
        }

        .quote-hero {
          margin-bottom: 2rem;
          padding: 2.25rem;
          border: 1px solid #1f2329;
          border-radius: 14px;
          background: #ffffff;
        }

        .quote-kicker {
          display: inline-block;
          margin: 0 0 0.75rem;
          padding: 0.2rem 0.7rem;
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #1f2329;
          border: 1px solid #1f2329;
          border-radius: 999px;
          font-weight: 600;
        }

        .quote-hero h1 {
          margin: 0;
          font-size: clamp(2rem, 3.5vw, 2.75rem);
          line-height: 1.15;
          color: #1f2329;
          font-weight: 700;
        }

        .quote-hero p {
          margin: 0.9rem 0 0;
          max-width: 58ch;
          font-size: 1rem;
          line-height: 1.75;
          color: #3d434b;
        }

        .quote-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.7fr) minmax(0, 1fr);
          gap: 1.25rem;
        }

        .quote-form-panel,
        .quote-contact-panel {
          border-radius: 14px;
          border: 1px solid #1f2329;
          background: #1f2329;
          color: #f6f7f9;
          padding: 1.5rem;
        }

        .quote-form-panel h2,
        .quote-contact-panel h2 {
          margin: 0;
          color: #ffffff;
          font-size: 1.3rem;
          font-weight: 700;
        }

        .quote-form {
          margin-top: 1.1rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .field-group {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .field-group.two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.8rem;
        }

        .field-group label,
        .contact-label {
          font-size: 0.84rem;
          letter-spacing: 0.02em;
          color: #d9dde3;
          font-weight: 600;
        }

        .field-group input,
        .field-group select,
        .field-group textarea {
          width: 100%;
          border: 1px solid #474e58;
          border-radius: 10px;
          background: #282d34;
          color: #ffffff;
          font-size: 0.96rem;
          line-height: 1.4;
          padding: 0.78rem 0.85rem;
        }

        .field-group textarea {
          resize: vertical;
          min-height: 170px;
        }

        .field-group input::placeholder,
        .field-group textarea::placeholder {
          color: #a2aab6;
        }

        .field-group input:focus,
        .field-group select:focus,
        .field-group textarea:focus {
          outline: 2px solid #f7e500;
          outline-offset: 1px;
          border-color: #f7e500;
        }

        .submit-btn {
          margin-top: 0.35rem;
          border: none;
          border-radius: 10px;
          padding: 0.95rem 1rem;
          font-size: 0.98rem;
          font-weight: 700;
          cursor: pointer;
          color: #101010;
          background: #f7e500;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .submit-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 10px 24px rgba(247, 229, 0, 0.25);
        }

        .quote-contact-panel p {
          margin: 0.9rem 0 1.25rem;
          color: #dce1e8;
          line-height: 1.7;
        }

        .contact-item {
          margin-bottom: 1rem;
          padding: 0.85rem;
          border: 1px solid #3b414b;
          border-radius: 10px;
          background: #282d34;
        }

        .contact-item a {
          display: inline-block;
          margin-top: 0.35rem;
          color: #ffffff;
          text-decoration: none;
          font-weight: 600;
        }

        .response-badge {
          margin-top: 0.75rem;
          border: 1px solid #f7e500;
          background: rgba(247, 229, 0, 0.12);
          color: #f7e500;
          border-radius: 999px;
          padding: 0.58rem 0.9rem;
          font-size: 0.87rem;
          font-weight: 700;
          text-align: center;
        }

        @media (max-width: 960px) {
          .quote-layout {
            grid-template-columns: 1fr;
          }

          .field-group.two-col {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}

export default RequestCustomQuote
