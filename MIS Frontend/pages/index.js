import React, { useEffect, useRef } from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Home = (props) => {
  const caseRailRef = useRef(null)

  useEffect(() => {
    const rail = caseRailRef.current
    if (!rail) return

    let isDragging = false
    let startX = 0
    let startScrollLeft = 0
    let activePointerId = null

    const onPointerDown = (event) => {
      if (event.pointerType !== 'mouse' || event.button !== 0) return
      isDragging = true
      activePointerId = event.pointerId
      startX = event.clientX
      startScrollLeft = rail.scrollLeft
      rail.classList.add('is-dragging')
      if (rail.setPointerCapture) {
        rail.setPointerCapture(event.pointerId)
      }
    }

    const onPointerMove = (event) => {
      if (!isDragging) return
      const deltaX = event.clientX - startX
      rail.scrollLeft = startScrollLeft - deltaX
    }

    const endDrag = () => {
      if (!isDragging) return
      isDragging = false
      rail.classList.remove('is-dragging')
      if (activePointerId !== null && rail.releasePointerCapture) {
        try {
          rail.releasePointerCapture(activePointerId)
        } catch (error) {
          // Ignore pointer release edge cases from quick gesture interruptions.
        }
      }
      activePointerId = null
    }

    rail.addEventListener('pointerdown', onPointerDown)
    rail.addEventListener('pointermove', onPointerMove)
    rail.addEventListener('pointerup', endDrag)
    rail.addEventListener('pointercancel', endDrag)
    rail.addEventListener('pointerleave', endDrag)

    return () => {
      rail.removeEventListener('pointerdown', onPointerDown)
      rail.removeEventListener('pointermove', onPointerMove)
      rail.removeEventListener('pointerup', endDrag)
      rail.removeEventListener('pointercancel', endDrag)
      rail.removeEventListener('pointerleave', endDrag)
    }
  }, [])

  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Ideal Real Porpoise</title>
          <meta property="og:title" content="Ideal Real Porpoise" />
          <link
            rel="canonical"
            href="https://ideal-real-porpoise-ox0ksz.teleporthq.app/"
          />
          <meta
            property="og:url"
            content="https://ideal-real-porpoise-ox0ksz.teleporthq.app/"
          />
        </Head>
        <Navigation></Navigation>
        <section className="hero-section">
          <div className="hero-media-container">
            <video
              className="hero-bg-video"
              autoPlay
              controls={false}
              loop
              muted
              preload="metadata"
              playsInline
              disablePictureInPicture
              disableRemotePlayback
              controlsList="nodownload nofullscreen noplaybackrate noremoteplayback"
              tabIndex="-1"
              aria-hidden="true"
              poster="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
            >
              <source src="/home%20video.mp4" type="video/mp4" />
            </video>
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content-wrapper">
            <div className="hero-text-block">
              <h1 className="home-hero-title hero-title">
                Empowering Your Business Through Innovative Technology
              </h1>
              <p className="home-hero-subtitle hero-subtitle">
                Your premier destination for comprehensive e-commerce, corporate
                IT services, and enterprise solutions tailored for technological
                excellence.
              </p>
              <div className="hero-cta-group">
                <a href="#quote">
                  <div className="btn btn-primary btn-lg">
                    <span>Explore Services</span>
                  </div>
                </a>
                <a href="#products">
                  <div className="btn btn-lg btn-outline hero-shop-btn">
                    <span>Shop Hardware</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="products-carousel-section">
          <div className="products-header">
            <h2 className="section-title">
              Featured Hardware &amp; Accessories
            </h2>
            <p className="section-subtitle">
              Top-selling essentials for your office and enterprise needs.
            </p>
          </div>
          <div className="products-rail-container">
            <div className="products-rail">
              <div className="product-card">
                <div className="product-image-box">
                  <img
                    src="https://images.pexels.com/photos/17489151/pexels-photo-17489151.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Enterprise Server"
                  />
                </div>
                <div className="product-info">
                  <span className="product-category">Servers</span>
                  <h3 className="product-name">
                    Enterprise Rack Server Gen 10
                  </h3>
                  <div className="product-actions">
                    <button className="btn btn-primary btn-sm">
                      Add to Quote
                    </button>
                    <a href="#">
                      <div className="btn-link">
                        <span>Preview</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <div className="product-image-box">
                  <img
                    src="https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Business Laptop"
                  />
                </div>
                <div className="product-info">
                  <span className="product-category">Laptops</span>
                  <h3 className="product-name">
                    Pro-Workstation 15&quot; Laptop
                  </h3>
                  <div className="product-actions">
                    <button className="btn btn-primary btn-sm">
                      Add to Quote
                    </button>
                    <a href="#">
                      <div className="btn-link">
                        <span>Preview</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <div className="product-image-box">
                  <img
                    src="https://images.pexels.com/photos/17489157/pexels-photo-17489157.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Networking Gear"
                  />
                </div>
                <div className="product-info">
                  <span className="product-category">Networking</span>
                  <h3 className="product-name">
                    Gigabit Managed Switch 48-Port
                  </h3>
                  <div className="product-actions">
                    <button className="btn btn-primary btn-sm">
                      Add to Quote
                    </button>
                    <a href="#">
                      <div className="btn-link">
                        <span>Preview</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <div className="product-image-box">
                  <img
                    src="https://images.pexels.com/photos/5092815/pexels-photo-5092815.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Storage Solutions"
                  />
                </div>
                <div className="product-info">
                  <span className="product-category">Storage</span>
                  <h3 className="product-name">High-Density NAS Storage</h3>
                  <div className="product-actions">
                    <button className="btn btn-primary btn-sm">
                      Add to Quote
                    </button>
                    <a href="#">
                      <div className="btn-link">
                        <span>Preview</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="product-card">
                <div className="product-image-box">
                  <img
                    src="https://images.pexels.com/photos/17489152/pexels-photo-17489152.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="UPS System"
                  />
                </div>
                <div className="product-info">
                  <span className="product-category">Power</span>
                  <h3 className="product-name">Smart-UPS 3000VA LCD 230V</h3>
                  <div className="product-actions">
                    <button className="btn btn-primary btn-sm">
                      Add to Quote
                    </button>
                    <a href="#">
                      <div className="btn-link">
                        <span>Preview</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="services-grid-section">
          <div className="services-container">
            <div className="services-header">
              <h2 className="section-title">Core IT Solutions</h2>
              <p className="section-subtitle">
                Tailored services designed to scale with your enterprise.
              </p>
            </div>
            <div className="services-marquee" aria-label="Core IT solutions">
              <div className="services-track">
                <div className="services-row">
                  <div className="service-item">
                    <div className="service-icon">
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
                          <rect
                            width="20"
                            height="8"
                            x="2"
                            y="2"
                            rx="2"
                            ry="2"
                          ></rect>
                          <rect
                            width="20"
                            height="8"
                            x="2"
                            y="14"
                            rx="2"
                            ry="2"
                          ></rect>
                          <path d="M6 6h.01M6 18h.01"></path>
                        </g>
                      </svg>
                    </div>
                    <h3 className="service-title section-content">
                      Enterprise &amp; Networking
                    </h3>
                    <p className="section-content">
                      Complete data center setups, AV conferencing, and robust
                      network infrastructure for modern businesses.
                    </p>
                    <a href="#quote">
                      <div className="btn btn-outline btn-sm">
                        <span>Request a Quote</span>
                      </div>
                    </a>
                  </div>
                  <div className="service-item">
                    <div className="service-icon">
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
                          d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="service-title section-content">
                      Security &amp; Access
                    </h3>
                    <p className="section-content">
                      State-of-the-art CCTV, biometric time attendance, and
                      fire alarm systems to protect your assets.
                    </p>
                    <a href="#quote">
                      <div className="btn btn-outline btn-sm">
                        <span>Request a Quote</span>
                      </div>
                    </a>
                  </div>
                  <div className="service-item">
                    <div className="service-icon">
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
                          d="m16 18l6-6l-6-6M8 6l-6 6l6 6"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="service-title section-content">
                      MIS Digital Services
                    </h3>
                    <p className="section-content">
                      Web development, app design, digital marketing, and
                      secure hosting to drive your online presence.
                    </p>
                    <a href="#quote">
                      <div className="btn btn-outline btn-sm">
                        <span>Request a Quote</span>
                      </div>
                    </a>
                  </div>
                  <div className="service-item">
                    <div className="service-icon">
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
                          <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z"></path>
                          <path d="M21 16v2a4 4 0 0 1-4 4h-5"></path>
                        </g>
                      </svg>
                    </div>
                    <h3 className="service-title section-content">
                      Support &amp; Maintenance
                    </h3>
                    <p className="section-content">
                      Dedicated on-call support and monthly maintenance
                      contracts to ensure peak IT performance.
                    </p>
                    <a href="#quote">
                      <div className="btn btn-outline btn-sm">
                        <span>Request a Quote</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="services-row" aria-hidden="true">
                  <div className="service-item">
                    <div className="service-icon">
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
                          <rect
                            width="20"
                            height="8"
                            x="2"
                            y="2"
                            rx="2"
                            ry="2"
                          ></rect>
                          <rect
                            width="20"
                            height="8"
                            x="2"
                            y="14"
                            rx="2"
                            ry="2"
                          ></rect>
                          <path d="M6 6h.01M6 18h.01"></path>
                        </g>
                      </svg>
                    </div>
                    <h3 className="service-title section-content">
                      Enterprise &amp; Networking
                    </h3>
                    <p className="section-content">
                      Complete data center setups, AV conferencing, and robust
                      network infrastructure for modern businesses.
                    </p>
                    <a href="#quote">
                      <div className="btn btn-outline btn-sm">
                        <span>Request a Quote</span>
                      </div>
                    </a>
                  </div>
                  <div className="service-item">
                    <div className="service-icon">
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
                          d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="service-title section-content">
                      Security &amp; Access
                    </h3>
                    <p className="section-content">
                      State-of-the-art CCTV, biometric time attendance, and
                      fire alarm systems to protect your assets.
                    </p>
                    <a href="#quote">
                      <div className="btn btn-outline btn-sm">
                        <span>Request a Quote</span>
                      </div>
                    </a>
                  </div>
                  <div className="service-item">
                    <div className="service-icon">
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
                          d="m16 18l6-6l-6-6M8 6l-6 6l6 6"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="service-title section-content">
                      MIS Digital Services
                    </h3>
                    <p className="section-content">
                      Web development, app design, digital marketing, and
                      secure hosting to drive your online presence.
                    </p>
                    <a href="#quote">
                      <div className="btn btn-outline btn-sm">
                        <span>Request a Quote</span>
                      </div>
                    </a>
                  </div>
                  <div className="service-item">
                    <div className="service-icon">
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
                          <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z"></path>
                          <path d="M21 16v2a4 4 0 0 1-4 4h-5"></path>
                        </g>
                      </svg>
                    </div>
                    <h3 className="service-title section-content">
                      Support &amp; Maintenance
                    </h3>
                    <p className="section-content">
                      Dedicated on-call support and monthly maintenance
                      contracts to ensure peak IT performance.
                    </p>
                    <a href="#quote">
                      <div className="btn btn-outline btn-sm">
                        <span>Request a Quote</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="stats-section">
          <div className="stats-container">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">
                  <span>500+</span>
                </div>
                <div className="stat-label">
                  <span>Projects Completed</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-number">
                  <span>120+</span>
                </div>
                <div className="stat-label">
                  <span>Enterprise Clients</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-number">
                  <span>99.9%</span>
                </div>
                <div className="stat-label">
                  <span>Support SLA</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-number">
                  <span>100%</span>
                </div>
                <div className="stat-label">
                  <span>Warranty Coverage</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="case-studies-section">
          <div className="case-header">
            <h2 className="section-title">Enterprise Success Stories</h2>
            <p className="section-subtitle">
              See how we empower businesses through innovative technology.
            </p>
          </div>
          <div
            className="case-rail-container"
            ref={caseRailRef}
            aria-label="Enterprise success stories"
          >
            <div className="case-rail">
              <div className="case-card">
                <div className="case-image">
                  <img
                    src="https://images.pexels.com/photos/1181335/pexels-photo-1181335.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Data Center Deployment"
                  />
                </div>
                <div className="case-content">
                  <h3 className="case-title">Global Finance Data Center</h3>
                  <p className="section-content">
                    Complete tier-3 data center setup including networking,
                    security, and redundant power solutions.
                  </p>
                  <a href="#">
                    <div className="btn-link">
                      <span>View Full Story</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="case-card">
                <div className="case-image">
                  <img
                    src="https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Security Implementation"
                  />
                </div>
                <div className="case-content">
                  <h3 className="case-title">City Mall Security Overhaul</h3>
                  <p className="section-content">
                    Advanced CCTV and access control integration across 50,000
                    sq. ft. of retail space.
                  </p>
                  <a href="#">
                    <div className="btn-link">
                      <span>View Full Story</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="case-card">
                <div className="case-image">
                  <img
                    src="https://images.pexels.com/photos/5480781/pexels-photo-5480781.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Digital Transformation"
                  />
                </div>
                <div className="case-content">
                  <h3 className="case-title">EduTech Digital Platform</h3>
                  <p className="section-content">
                    Custom web application development and cloud hosting for a
                    national learning initiative.
                  </p>
                  <a href="#">
                    <div className="btn-link">
                      <span>View Full Story</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials-section">
          <div className="testimonials-container">
            <div id="testimonialCarousel" className="testimonials-carousel">
              <div className="testimonial-item active">
                <div className="testimonial-content">
                  <div className="testimonial-quote">
                    <span>
                      &quot;MIS Solution transformed our corporate IT
                      infrastructure. Their support team is incredibly
                      responsive, ensuring our operations never miss a
                      beat.&quot;
                    </span>
                  </div>
                  <div className="testimonial-author">
                    <span className="author-name">Sarah Jenkins</span>
                    <span className="author-role">IT Director, Nexus Corp</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-item">
                <div className="testimonial-content">
                  <div className="testimonial-quote">
                    <span>
                      &quot;The hardware quality and warranty transparency at
                      MIS Solution are unmatched. We&apos;ve sourced all our
                      office servers and networking gear from them.&quot;
                    </span>
                  </div>
                  <div className="testimonial-author">
                    <span className="author-name">David Chen</span>
                    <span className="author-role">
                      Founder, TechSprint Solutions
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-controls">
              <button
                aria-label="Slide 1"
                className="carousel-dot active"
              ></button>
              <button aria-label="Slide 2" className="carousel-dot"></button>
            </div>
          </div>
        </section>
        <section className="search-section">
          <div className="search-container">
            <div className="search-card">
              <h2 className="section-title">Find What You Need</h2>
              <p className="section-content">
                Instantly search our extensive catalog of hardware, software,
                and services.
              </p>
              <form
                action="/catalog"
                method="GET"
                data-form-id="3e22d97d-899c-4dfc-adb0-8ffa2b49c5b3"
                className="catalog-search-form"
              >
                <div className="catalog-search-wrapper">
                  <input
                    type="text"
                    placeholder="Enter SKU, Model, or Product Name..."
                    required="true"
                    id="thq_textinput_kWx2"
                    name="textinput"
                    data-form-field-id="thq_textinput_kWx2"
                    className="catalog-input"
                  />
                  <button
                    type="submit"
                    id="thq_button_AJir"
                    name="button"
                    data-form-field-id="thq_button_AJir"
                    className="btn btn-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </svg>
                    <span>Search Catalog</span>
                  </button>
                </div>
              </form>
              <div className="search-shortcuts">
                <span className="shortcut-label">Quick Filters:</span>
                <div className="shortcut-tags">
                  <a href="#">
                    <div className="tag">
                      <span>Laptops</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="tag">
                      <span>Servers</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="tag">
                      <span>UPS Systems</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="tag">
                      <span>CCTV</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-banner-section">
          <div className="cta-wrapper">
            <div className="cta-alert-box">
              <div className="cta-content">
                <div className="cta-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="cta-text">
                  <span className="cta-title">Need Immediate Assistance?</span>
                  <span className="cta-hotline">
                    24/7 Hotline: +1-800-MIS-TECH
                  </span>
                </div>
              </div>
              <div className="cta-buttons">
                <a href="#quote">
                  <div className="btn-on-secondary btn btn-lg">
                    <span>Request a Quote</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<style>
        @keyframes fadeIn {from {opacity: 0;
transform: translateY(10px);}
to {opacity: 1;
transform: translateY(0);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="home-container4">
          <div className="home-container5">
            <Script
              html={`<script defer data-name="mis-solution-logic">
(function(){
  // Testimonial Carousel Logic
  const testimonials = document.querySelectorAll(".testimonial-item")
  const dots = document.querySelectorAll(".carousel-dot")
  let currentTestimonial = 0

  function showTestimonial(index) {
    testimonials.forEach((item, i) => {
      item.classList.toggle("active", i === index)
    })
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index)
    })
    currentTestimonial = index
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showTestimonial(index)
    })
  })

  // Auto-rotate testimonials
  setInterval(() => {
    let next = (currentTestimonial + 1) % testimonials.length
    showTestimonial(next)
  }, 5000)

  // Simple scroll interaction for product rail
  const rail = document.querySelector(".products-rail-container")
  if (rail) {
    let isDown = false
    let startX
    let scrollLeft

    rail.addEventListener("mousedown", (e) => {
      isDown = true
      startX = e.pageX - rail.offsetLeft
      scrollLeft = rail.scrollLeft
    })

    rail.addEventListener("mouseleave", () => {
      isDown = false
    })

    rail.addEventListener("mouseup", () => {
      isDown = false
    })

    rail.addEventListener("mousemove", (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - rail.offsetLeft
      const walk = (x - startX) * 2
      rail.scrollLeft = scrollLeft - walk
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
          .home-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
          .home-container4 {
            display: none;
          }
          .home-container5 {
            display: contents;
          }
          .home-container6 {
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
          .home-icon31 {
            width: 24px;
            margin-right: 4px;
          }
          .home-text40 {
            color: white;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
        `}
      </style>
    </>
  )
}

export default Home
