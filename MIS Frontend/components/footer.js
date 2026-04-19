import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const defaultCompanyContact = {
  fullAddress: 'Address not available',
  primaryEmail: 'support@missolution.com',
  supportEmail: null,
  hotlinePhone: 'N/A',
  whatsappNumber: null,
  facebookUrl: '#',
  linkedinUrl: '#',
}

const sanitizePhoneForTel = (phoneValue) =>
  String(phoneValue || '')
    .replace(/\s+/g, '')
    .replace(/(?!^\+)\D/g, '')

const Footer = (props) => {
  const [companyContact, setCompanyContact] = useState(defaultCompanyContact)

  useEffect(() => {
    let isMounted = true

    const loadCompanyContact = async () => {
      try {
        const response = await fetch('/api/company-contact')
        const payload = await response.json()

        if (!isMounted) return
        if (payload?.success && payload.contact) {
          setCompanyContact((previousContact) => ({
            ...previousContact,
            ...payload.contact,
            facebookUrl: payload.contact.facebookUrl || '#',
            linkedinUrl: payload.contact.linkedinUrl || '#',
          }))
        }
      } catch (error) {
        // Ignore contact API failures and keep fallback content.
      }
    }

    loadCompanyContact()

    return () => {
      isMounted = false
    }
  }, [])

  const supportEmail = companyContact.supportEmail || companyContact.primaryEmail
  const hotlineTel = sanitizePhoneForTel(companyContact.hotlinePhone)

  return (
    <>
      <div className="footer-container1">
        <footer className="footer-mega">
          <div className="footer-container">
            <div className="footer-top-grid">
              <div className="footer-brand-column">
                <Link href="/">
                  <a className="footer-brand-mark" aria-label="MIS Solution Home">
                    <img
                      src="/footer%20logo.png"
                      alt="MIS Solution"
                      className="footer-brand-logo"
                    />
                  </a>
                </Link>
                <p className="footer-brand-tagline">commited to service...</p>
                <p className="footer-brand-description section-content">
                  Your premier destination for comprehensive e-commerce and
                  corporate IT services. Empowering businesses through
                  innovative technology solutions and unparalleled support.
                </p>
                <div className="footer-social-group">
                  <a href={companyContact.facebookUrl || '#'} target="_blank" rel="noreferrer">
                    <div aria-label="Facebook" className="footer-social-link">
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
                          d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2z"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href={companyContact.linkedinUrl || '#'} target="_blank" rel="noreferrer">
                    <div aria-label="LinkedIn" className="footer-social-link">
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
                          <path d="M8 11v5m0-8v.01M12 16v-5m4 5v-3a2 2 0 1 0-4 0"></path>
                          <path d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z"></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="Twitter" className="footer-social-link">
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
                          d="M22 4.01c-1 .49-1.98.689-3 .99c-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4c0 0-4.182 7.433 4 11c-1.872 1.247-3.739 2.088-6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58-1.04 6.522-3.723 7.651-7.742a13.8 13.8 0 0 0 .497-3.753c0-.249 1.51-2.772 1.818-4.013z"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="Instagram" className="footer-social-link">
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
                          <path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"></path>
                          <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m7.5-4.5v.01"></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <nav
                aria-labelledby="footer-hardware-title"
                className="footer-nav-column"
              >
                <h2 id="footer-hardware-title" className="footer-column-title">
                  Hardware Essentials
                </h2>
                <ul className="footer-link-list">
                  <li>
                    <a href="#">
                      <div className="footer-link section-content">
                        <span>Laptops &amp; Desktops</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link section-content">
                        <span>Servers &amp; Storage</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link section-content">
                        <span>Motherboards &amp; CPUs</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link section-content">
                        <span>Graphics Cards</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link section-content">
                        <span>Printers &amp; Scanners</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </nav>
              <nav
                aria-labelledby="footer-services-title"
                className="footer-nav-column"
              >
                <h2 id="footer-services-title" className="footer-column-title">
                  Corporate Solutions
                </h2>
                <ul className="footer-link-list">
                  <li>
                    <a href="#">
                      <div className="footer-link section-content">
                        <span>Enterprise Networking</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link section-content">
                        <span>Data Center Setup</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link section-content">
                        <span>CCTV &amp; Security</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link section-content">
                        <span>Digital Marketing</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="footer-link section-content">
                        <span>Web Development</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="footer-nav-column">
                <h2 className="footer-column-title">Contact &amp; Support</h2>
                <div className="footer-contact-info">
                  <div className="footer-contact-item">
                    <div className="footer-contact-icon-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
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
                    <span className="section-content">{companyContact.fullAddress}</span>
                  </div>
                  <div className="footer-contact-item">
                    <div className="footer-contact-icon-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                        ></path>
                      </svg>
                    </div>
                    <a href={hotlineTel ? `tel:${hotlineTel}` : '#'}>
                      <span className="section-content">
                        24/7 Hotline: {companyContact.hotlinePhone}
                      </span>
                    </a>
                  </div>
                  <div className="footer-contact-item">
                    <div className="footer-contact-icon-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
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
                          <rect
                            width="20"
                            height="16"
                            x="2"
                            y="4"
                            rx="2"
                          ></rect>
                        </g>
                      </svg>
                    </div>
                    <a href={`mailto:${supportEmail}`}>
                      <span className="section-content">{supportEmail}</span>
                    </a>
                  </div>
                </div>
                <div className="footer-newsletter">
                  <h3 className="footer-newsletter-title section-subtitle">
                    Stay Updated
                  </h3>
                  <form
                    action="#"
                    method="POST"
                    data-form-id="f719f442-16b9-47eb-935b-229682fce662"
                    className="footer-newsletter-form"
                  >
                    <div className="footer-input-wrapper">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        required="true"
                        aria-label="Newsletter email"
                        id="thq_textinput_zNrU"
                        name="textinput"
                        data-form-field-id="thq_textinput_zNrU"
                        className="footer-newsletter-input"
                      />
                      <button
                        type="submit"
                        aria-label="Subscribe"
                        id="thq_button_VI20"
                        name="button"
                        data-form-field-id="thq_button_VI20"
                        className="footer-newsletter-btn"
                      >
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
                            d="M5 12h14m-7-7l7 7l-7 7"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="footer-bottom-bar">
              <div className="footer-legal-group">
                <p className="footer-copyright section-content">
                  &amp;copy; 2026 MIS Solution. All rights reserved.
                </p>
                <div className="footer-legal-links">
                  <a href="#">
                    <div className="footer-legal-link section-content">
                      <span>Privacy Policy</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer-legal-link section-content">
                      <span>Terms of Service</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer-legal-link section-content">
                      <span>Warranty Info</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="footer-payment-badges">
                <div
                  title="EMI Options Available"
                  className="footer-payment-badge"
                >
                  <span>EMI Available</span>
                </div>
                <div title="Secure Payment" className="footer-payment-badge">
                  <span>100% Secure</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer-container2">
          <div className="footer-container3">
            <Script
              html={`<script defer data-name="footer-logic">
(function(){
  const newsletterForm = document.querySelector(".footer-newsletter-form")
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      const input = this.querySelector(".footer-newsletter-input")
      if (input && input.value) {
        const btn = this.querySelector(".footer-newsletter-btn")
        const originalContent = btn.innerHTML

        btn.innerHTML = "✓"
        btn.style.backgroundColor = "#2ecc71"
        btn.style.color = "#ffffff"
        input.value = ""
        input.disabled = true

        setTimeout(() => {
          btn.innerHTML = originalContent
          btn.style.backgroundColor = ""
          btn.style.color = ""
          input.disabled = false
          input.placeholder = "Thanks for subscribing!"
        }, 3000)
      }
    })
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
          .footer-container2 {
            display: none;
          }
          .footer-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Footer
