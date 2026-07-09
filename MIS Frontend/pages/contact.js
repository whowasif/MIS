import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const fallbackCompanyContact = {
  branchName: 'Main Branch',
  fullAddress: 'Address not available',
  googleMapEmbedUrl: null,
  latitude: null,
  longitude: null,
  primaryEmail: 'support@missolution.com',
  supportEmail: null,
  hotlinePhone: 'N/A',
}

const isValidCoordinate = (value, min, max) =>
  value !== null &&
  value !== undefined &&
  String(value).trim() !== '' &&
  Number.isFinite(Number(value)) &&
  Number(value) >= min &&
  Number(value) <= max

const buildGoogleMapEmbedUrl = (contact) => {
  if (contact.googleMapEmbedUrl) return contact.googleMapEmbedUrl

  const { latitude, longitude, fullAddress } = contact

  if (isValidCoordinate(latitude, -90, 90) && isValidCoordinate(longitude, -180, 180)) {
    return `https://www.google.com/maps?q=${Number(latitude)},${Number(longitude)}&z=16&output=embed`
  }

  const query = encodeURIComponent(fullAddress || fallbackCompanyContact.fullAddress)
  return `https://www.google.com/maps?q=${query}&z=16&output=embed`
}

const sanitizePhoneForTel = (phoneValue) =>
  String(phoneValue || '')
    .replace(/\s+/g, '')
    .replace(/(?!^\+)\D/g, '')

const Contact = (props) => {
  const companyContact = props.companyContact || fallbackCompanyContact
  const serviceOptions = props.serviceOptions || []
  const supportEmail = companyContact.supportEmail || companyContact.primaryEmail
  const hotlineTel = sanitizePhoneForTel(companyContact.hotlinePhone)
  const mapEmbedUrl = buildGoogleMapEmbedUrl(companyContact)

  return (
    <>
      <div className="contact-container1">
        <Head>
          <title>Contact - Ideal Real Porpoise</title>
          <meta property="og:title" content="Contact - Ideal Real Porpoise" />
          <link
            rel="canonical"
            href="https://ideal-real-porpoise-ox0ksz.teleporthq.app/contact"
          />
          <meta
            property="og:url"
            content="https://ideal-real-porpoise-ox0ksz.teleporthq.app/contact"
          />
        </Head>
        <Navigation></Navigation>
        <section className="contact-hero">
          <div className="contact-hero-media">
            <img
              src="https://images.pexels.com/photos/8867261/pexels-photo-8867261.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              alt="MIS Solution Support Center"
              className="contact-hero-image"
            />
            <div className="contact-hero-overlay"></div>
          </div>
          <div className="contact-hero-container">
            <div className="contact-hero-content">
              <h1 className="hero-title">Get in Touch with MIS Solution</h1>
              <p className="hero-subtitle">
                Your premier destination for comprehensive e-commerce and
                corporate IT services. We are here to support your journey
                towards technological excellence with expert solutions and
                dedicated support.
              </p>
              <div className="contact-hero-badge">
                <div className="badge-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 6v6l4 2"></path>
                    </g>
                  </svg>
                </div>
                <span>Available 24/7 for you</span>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-details">
          <div className="contact-details-inner">
            <div className="contact-info-panel">
              <h2 className="section-title">Visit Our Headquarters</h2>
              <p className="section-content">
                {companyContact.branchName} is available for immediate
                assistance and inquiries. Our team is ready to handle your
                corporate networking, security, and digital service needs.
              </p>
              <div className="info-grid">
                <div className="info-card">
                  <div className="info-card-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </g>
                    </svg>
                  </div>
                  <div className="info-card-text">
                    <span className="info-label">Our Address</span>
                    <address className="info-value">
                      <span>{companyContact.fullAddress}</span>
                    </address>
                  </div>
                </div>
                <div className="info-card hotline-highlight">
                  <div className="info-card-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 2a9 9 0 0 1 9 9m-9-5a5 5 0 0 1 5 5m-4.168 5.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                      ></path>
                    </svg>
                  </div>
                  <div className="info-card-text">
                    <span className="info-label">24/7 Hotline</span>
                    <a href={hotlineTel ? `tel:${hotlineTel}` : '#'}>
                      <div className="info-value hotline-number">
                        <span>{companyContact.hotlinePhone}</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-card-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      </g>
                    </svg>
                  </div>
                  <div className="info-card-text">
                    <span className="info-label">Email Support</span>
                    <a href={`mailto:${supportEmail}?subject=`}>
                      <div className="info-value">
                        <span>{supportEmail}</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-map-panel">
              <div className="map-placeholder">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  allowFullScreen="true"
                  loading="lazy"
                  title="MIS Solution Office Location"
                  className="contact-iframe"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
        <section className="inquiry-section">
          <div className="inquiry-container">
            <div className="inquiry-card">
              <div className="inquiry-header">
                <h2 className="section-title">Send Us an Inquiry</h2>
                <p className="section-content">
                  Whether you need a custom quote for enterprise networking or
                  have questions about our IT hardware catalog, we&apos;re here
                  to help.
                </p>
              </div>
              <form
                action="/submit-inquiry"
                method="POST"
                data-form-id="95ce9567-92c6-45e0-bc16-f038f4fce187"
                className="inquiry-form"
              >
                <div className="form-row">
                  <div className="contact-form-group">
                    <label htmlFor="full-name" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="full-name"
                      name="true"
                      placeholder="John Doe"
                      required="true"
                      data-form-field-id="full-name"
                      className="contact-form-input"
                    />
                  </div>
                  <div className="contact-form-group">
                    <label htmlFor="email-address" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email-address"
                      name="email"
                      placeholder="john@example.com"
                      required="true"
                      data-form-field-id="email-address"
                      className="contact-form-input"
                    />
                  </div>
                </div>
                <div className="contact-form-group">
                  <label htmlFor="service-type" className="form-label">
                    Service Interest
                  </label>
                  <select
                    id="service-type"
                    name="service"
                    required="true"
                    data-form-field-id="service-type"
                    className="contact-form-input"
                  >
                    <option value="" disabled selected>
                      Select a service
                    </option>
                    {serviceOptions.length > 0 ? (
                      <>
                        {[...new Set(serviceOptions.map((s) => s.group))].map((group) => (
                          <optgroup key={group} label={group}>
                            {serviceOptions.filter((s) => s.group === group).map((s) => (
                              <option key={s.name} value={s.name}>{s.name}</option>
                            ))}
                          </optgroup>
                        ))}
                      </>
                    ) : (
                      <>
                        <option value="E-commerce Hardware">E-commerce Hardware</option>
                        <option value="Corporate IT Solutions">Corporate IT Solutions</option>
                        <option value="Security Systems">Security Systems (CCTV/Fire)</option>
                        <option value="Digital Services">Digital Services (Web/App)</option>
                        <option value="Maintenance Contracts">Maintenance Contracts</option>
                      </>
                    )}
                  </select>
                </div>
                <div className="contact-form-group">
                  <label htmlFor="message" className="form-label">
                    Your Inquiry
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="How can MIS Solution help your business today?"
                    required="true"
                    minlength="20"
                    data-form-field-id="message"
                    className="contact-form-input form-textarea"
                  ></textarea>
                </div>
                <div className="form-footer">
                  <button
                    type="submit"
                    id="thq_button_75rR"
                    name="button"
                    data-form-field-id="thq_button_75rR"
                    className="btn btn-primary btn-lg"
                  >
                    <span>Send Inquiry</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939"
                      ></path>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <div className="contact-container2">
          <div className="contact-container3">
            <Script
              html={`<script defer data-name="contact-form-handler">
(function(){
  const inquiryForm = document.querySelector(".inquiry-form")

  if (inquiryForm) {
    inquiryForm.addEventListener("submit", (e) => {
      const submitBtn = inquiryForm.querySelector('button[type="submit"]')

      submitBtn.style.opacity = "0.7"
      submitBtn.innerHTML = "<span>Sending...</span>"
    })

    const inputs = inquiryForm.querySelectorAll(".form-input")
    inputs.forEach((input) => {
      input.addEventListener("blur", () => {
        if (!input.checkValidity()) {
          input.style.borderColor = "#e74c3c"
        } else {
          input.style.borderColor = "var(--color-border)"
        }
      })

      input.addEventListener("input", () => {
        if (input.checkValidity()) {
          input.style.borderColor = "var(--color-primary)"
        }
      })
    })
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .contact-container1 {
            width: 100%;
            min-height: 100vh;
            background: #f3f5f9;
          }
          .contact-hero {
            position: relative;
            min-height: 72vh;
            display: flex;
            align-items: center;
          }
          .contact-hero-media {
            position: absolute;
            inset: 0;
          }
          .contact-hero-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .contact-hero-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(90deg, rgba(8, 14, 24, 0.78) 0%, rgba(8, 14, 24, 0.44) 45%, rgba(8, 14, 24, 0.24) 100%);
          }
          .contact-hero-container {
            width: 100%;
            margin: 0 auto;
            z-index: 1;
            position: relative;
            max-width: 76rem;
            padding: 7rem 1.5rem 4rem;
          }
          .contact-hero-content {
            max-width: 40rem;
          }
          .contact-hero-content :global(.hero-title) {
            color: #ffffff;
            margin: 0;
            font-size: clamp(2rem, 2.2vw, 3.4rem);
            line-height: 1.15;
          }
          .contact-hero-content :global(.hero-subtitle) {
            color: rgba(255, 255, 255, 0.9);
            margin-top: 1rem;
            margin-bottom: 0;
          }
          .contact-hero-badge {
            margin-top: 1.5rem;
            color: #ffffff;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.6rem 0.9rem;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.14);
            border: 1px solid rgba(255, 255, 255, 0.35);
          }
          .badge-icon {
            width: 1.25rem;
            height: 1.25rem;
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }
          .badge-icon :global(svg) {
            width: 100%;
            height: 100%;
          }
          .contact-details {
            padding: 4rem 1.5rem;
          }
          .contact-details-inner {
            width: 100%;
            margin: 0 auto;
            max-width: 76rem;
            display: grid;
            gap: 1.5rem;
            grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
          }
          .contact-info-panel,
          .contact-map-panel,
          .inquiry-card {
            background: #ffffff;
            border: 1px solid #d8dfea;
            border-radius: 14px;
            box-shadow: 0 8px 30px rgba(7, 16, 35, 0.08);
          }
          .contact-info-panel {
            padding: 1.5rem;
          }
          .contact-map-panel {
            min-height: 100%;
            overflow: hidden;
          }
          .map-placeholder {
            width: 100%;
            height: 100%;
            min-height: 460px;
          }
          .contact-iframe {
            border: 0;
          }
          .info-grid {
            margin-top: 1.25rem;
            display: grid;
            gap: 1rem;
          }
          .info-card {
            display: flex;
            gap: 0.9rem;
            padding: 0.9rem;
            border-radius: 10px;
            border: 1px solid #d8dfea;
            background: #f8faff;
          }
          .info-card-icon {
            width: 2.5rem;
            height: 2.5rem;
            color: #0a7ad4;
            flex: 0 0 auto;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            background: rgba(10, 122, 212, 0.12);
          }
          .info-card-icon :global(svg) {
            width: 1.2rem;
            height: 1.2rem;
          }
          .info-card-text {
            display: grid;
            gap: 0.25rem;
          }
          .info-label {
            font-weight: 700;
            color: #0f172a;
          }
          .info-value {
            margin: 0;
            font-style: normal;
            color: #425066;
          }
          .hotline-number {
            color: #0f172a;
            font-weight: 700;
          }
          .inquiry-section {
            padding: 0 1.5rem 4rem;
          }
          .inquiry-container {
            width: 100%;
            max-width: 76rem;
            margin: 0 auto;
          }
          .inquiry-card {
            padding: 1.5rem;
          }
          .inquiry-header {
            margin-bottom: 1.2rem;
          }
          .inquiry-form {
            display: grid;
            gap: 1rem;
          }
          .form-row {
            display: grid;
            gap: 1rem;
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .contact-form-group {
            display: grid;
            gap: 0.45rem;
          }
          .form-label {
            color: #172033;
            font-weight: 600;
          }
          .contact-form-input {
            width: 100%;
            border: 1px solid #ccd6e4;
            border-radius: 10px;
            padding: 0.72rem 0.85rem;
            font: inherit;
            background: #ffffff;
          }
          .contact-form-input:focus {
            outline: none;
            border-color: #2586d9;
            box-shadow: 0 0 0 3px rgba(37, 134, 217, 0.18);
          }
          .form-textarea {
            min-height: 140px;
            resize: vertical;
          }
          .form-footer {
            display: flex;
            justify-content: flex-start;
          }
          .contact-container2 {
            display: none;
          }
          .contact-container3 {
            display: contents;
          }
          .contact-container4 {
            right: 50px;
            border: 1px solid #ffffff5c;
            bottom: 30px;
            display: flex;
            z-index: 22;
            position: fixed;
            box-shadow: 5px 5px 10px 0px rgba(31, 31, 31, 0.4);
            min-height: auto;
            align-items: center;
            padding-top: 8px;
            padding-left: 12px;
            border-radius: 8px;
            padding-right: 12px;
            padding-bottom: 8px;
            backdrop-filter: blur(6px);
            background-color: rgba(41, 41, 41, 0.41);
          }
          .contact-icon26 {
            width: 24px;
            margin-right: 4px;
          }
          .contact-text6 {
            color: white;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }

          @media (max-width: 991px) {
            .contact-details-inner {
              grid-template-columns: 1fr;
            }
            .map-placeholder {
              min-height: 320px;
            }
          }

          @media (max-width: 767px) {
            .contact-hero-container {
              padding-top: 6rem;
            }
            .form-row {
              grid-template-columns: 1fr;
            }
            .contact-container4 {
              right: 14px;
              bottom: 14px;
            }
          }
        `}
      </style>
    </>
  )
}

export const getServerSideProps = async () => {
  try {
    const { getPrimaryCompanyContact } = await import('../lib/server/company-contacts')
    const { getDbPool } = await import('../lib/server/db')
    const companyContact = await getPrimaryCompanyContact()

    const db = getDbPool()
    const [digi] = await db.query("SELECT name FROM digi_services WHERE deleted_at IS NULL AND status = 'active' ORDER BY display_order ASC")
    const [biz] = await db.query("SELECT name FROM bus_corp_sol WHERE deleted_at IS NULL AND status = 'active' ORDER BY display_order ASC")
    const [maint] = await db.query("SELECT name FROM service_maintenance WHERE deleted_at IS NULL AND status = 'active' ORDER BY display_order ASC")

    const serviceOptions = [
      ...digi.map((s) => ({ group: 'Digital Services', name: s.name })),
      ...biz.map((s) => ({ group: 'Business & Corporate', name: s.name })),
      ...maint.map((s) => ({ group: 'Maintenance & Support', name: s.name })),
    ]

    return {
      props: {
        companyContact,
        serviceOptions: JSON.parse(JSON.stringify(serviceOptions)),
      },
    }
  } catch (error) {
    return {
      props: {
        companyContact: fallbackCompanyContact,
        serviceOptions: [],
      },
    }
  }
}

export default Contact
