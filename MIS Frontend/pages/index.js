import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const fallbackProductImage = 'https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=1500'

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
    <div className="stat-card" ref={ref}>
      <div className="stat-number"><span>{displayValue}{suffix}</span></div>
      <div className="stat-label"><span>{label}</span></div>
    </div>
  )
}

const Home = (props) => {
  const { featuredProducts = [], advertisements = [], homeCategories = [], featuredServices = [], clientProjects = [] } = props
  const caseRailRef = useRef(null)
  const [adIndex, setAdIndex] = useState(0)

  useEffect(() => {
    if (advertisements.length <= 1) return
    const timer = setInterval(() => { setAdIndex((prev) => (prev + 1) % advertisements.length) }, 5000)
    return () => clearInterval(timer)
  }, [advertisements.length])

  useEffect(() => {
    const rail = caseRailRef.current
    if (!rail) return
    let isDragging = false, hasMoved = false, startX = 0, startScrollLeft = 0
    const onPointerDown = (e) => { if (e.pointerType !== 'mouse' || e.button !== 0) return; isDragging = true; hasMoved = false; startX = e.clientX; startScrollLeft = rail.scrollLeft }
    const onPointerMove = (e) => { if (!isDragging) return; const dx = e.clientX - startX; if (Math.abs(dx) > 5) { hasMoved = true; e.preventDefault(); } rail.scrollLeft = startScrollLeft - dx }
    const endDrag = () => { isDragging = false }
    const onClick = (e) => { if (hasMoved) { e.preventDefault(); e.stopPropagation(); } }
    rail.addEventListener('pointerdown', onPointerDown); rail.addEventListener('pointermove', onPointerMove); rail.addEventListener('pointerup', endDrag); rail.addEventListener('pointercancel', endDrag); rail.addEventListener('pointerleave', endDrag); rail.addEventListener('click', onClick, true)
    return () => { rail.removeEventListener('pointerdown', onPointerDown); rail.removeEventListener('pointermove', onPointerMove); rail.removeEventListener('pointerup', endDrag); rail.removeEventListener('pointercancel', endDrag); rail.removeEventListener('pointerleave', endDrag); rail.removeEventListener('click', onClick, true) }
  }, [])

  return (
    <>
      <div className="home-container1">
        <Head>
          <title>MIS Solution - IT Products & Enterprise Services</title>
          <meta property="og:title" content="MIS Solution - IT Products & Enterprise Services" />
        </Head>
        <Navigation />
        <section className="hero-section">
          <div className="hero-media-container">
            <video className="hero-bg-video" autoPlay controls={false} loop muted preload="metadata" playsInline disablePictureInPicture disableRemotePlayback controlsList="nodownload nofullscreen noplaybackrate noremoteplayback" tabIndex="-1" aria-hidden="true">
              <source src="/home%20video.mp4" type="video/mp4" />
            </video>
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content-wrapper">
            <div className="hero-text-block">
              <h1 className="home-hero-title hero-title">Empowering Your Business Through Innovative Technology</h1>
              <p className="home-hero-subtitle hero-subtitle">Your premier destination for comprehensive e-commerce, corporate IT services, and enterprise solutions tailored for technological excellence.</p>
              <div className="hero-cta-group">
                <a href="#core-services"><div className="btn btn-primary btn-lg"><span>Explore Services</span></div></a>
                <a href="/categories/desktop"><div className="btn btn-lg btn-outline hero-shop-btn"><span>Shop Hardware</span></div></a>
              </div>
            </div>
          </div>
        </section>

        {homeCategories.length > 0 && (
          <section className="home-categories-section">
            <div className="home-categories-grid">
              {homeCategories.map((cat) => (
                <Link key={cat.id} href={`/categories/${cat.slug}`}>
                  <a className="home-cat-item">
                    <div className="home-cat-icon-wrap">
                      {cat.icon_url ? <img src={cat.icon_url} alt={cat.name} /> : <span className="home-cat-letter">{cat.name.charAt(0)}</span>}
                    </div>
                    <span className="home-cat-name">{cat.name}</span>
                  </a>
                </Link>
              ))}
            </div>
          </section>
        )}

        {advertisements.length > 0 && (
          <section className="ad-carousel-section">
            <div className="ad-carousel">
              <div className="ad-slides">
                {advertisements.map((ad, idx) => (
                  <Link key={ad.id} href={ad.product_slug ? `/products/${ad.product_slug}` : (ad.link_url || '#')}>
                    <a className={`ad-slide ${idx === adIndex ? 'active' : ''}`}>
                      <img src={ad.image_url} alt={ad.title} />
                      <div className="ad-overlay" />
                      <div className="ad-content">
                        <span className="ad-tag">Special Offer</span>
                        <h2 className="ad-title">{ad.title}</h2>
                        <span className="ad-cta">Shop Now →</span>
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
              {advertisements.length > 1 && (
                <>
                  <button className="ad-nav ad-prev" onClick={() => setAdIndex((p) => (p - 1 + advertisements.length) % advertisements.length)} aria-label="Previous"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg></button>
                  <button className="ad-nav ad-next" onClick={() => setAdIndex((p) => (p + 1) % advertisements.length)} aria-label="Next"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg></button>
                  <div className="ad-dots">{advertisements.map((_, idx) => (<button key={idx} className={`ad-dot ${idx === adIndex ? 'active' : ''}`} onClick={() => setAdIndex(idx)} aria-label={`Slide ${idx + 1}`} />))}</div>
                </>
              )}
            </div>
          </section>
        )}

        <section className="products-carousel-section">
          <div className="products-header">
            <h2 className="section-title">Featured Hardware &amp; Accessories</h2>
            <p className="section-subtitle">Top-selling essentials for your office and enterprise needs.</p>
          </div>
          <div className="products-rail-container">
            <div className="products-rail">
              {featuredProducts.length > 0 ? (
                [...featuredProducts, ...featuredProducts].map((product, idx) => (
                  <Link key={`${product.id}-${idx}`} href={`/products/${encodeURIComponent(product.slug || product.id)}`}>
                    <a className="product-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div className="product-image-box"><img src={product.image || fallbackProductImage} alt={product.name} /></div>
                      <div className="product-info">
                        <span className="product-category">{product.categoryName}</span>
                        <h3 className="product-name">{product.name}</h3>
                        {product.price > 0 && <span className="product-price-tag">৳{Number(product.price).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>}
                      </div>
                    </a>
                  </Link>
                ))
              ) : (
                [1,2,3,4,5,6].map((i) => (
                  <div key={i} className="product-card">
                    <div className="product-image-box"><img src="https://images.pexels.com/photos/17489151/pexels-photo-17489151.jpeg?auto=compress&cs=tinysrgb&w=1500" alt="Product placeholder" /></div>
                    <div className="product-info"><span className="product-category">Hardware</span><h3 className="product-name">Featured Product {i}</h3></div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        <section className="services-grid-section" id="core-services">
          <div className="services-container">
            <div className="services-header">
              <h2 className="section-title">Core IT Solutions</h2>
              <p className="section-subtitle">Tailored services designed to scale with your enterprise.</p>
            </div>
            <div className="services-dynamic-grid">
              {featuredServices.length > 0 ? (
                <div className="services-marquee-wrap">
                  <div className="services-marquee-track">
                    {[...featuredServices, ...featuredServices].map((service, idx) => (
                      <Link key={`${service.type}-${idx}`} href={`/services/${service.slug}?type=${service.type}`}>
                        <a className="service-marquee-card">
                          <div className="service-marquee-img">
                            {service.icon_url ? <img src={service.icon_url} alt={service.name} /> : <div className="service-marquee-placeholder">{service.name.charAt(0)}</div>}
                          </div>
                          <div className="service-marquee-info">
                            <h3>{service.name}</h3>
                            <p>{service.description?.substring(0, 80)}{service.description?.length > 80 ? '...' : ''}</p>
                          </div>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="services-marquee-wrap"><p style={{textAlign:'center',color:'#64748b'}}>Featured services will appear here once marked in admin panel.</p></div>
              )}
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="stats-container">
            <div className="stats-grid">
              <StatCounter end={100} suffix="+" label="Projects Completed" />
              <StatCounter end={100} suffix="+" label="Enterprise Clients" />
              <StatCounter end={99.9} suffix="%" label="Support SLA" decimals={1} />
              <StatCounter end={100} suffix="%" label="Warranty Coverage" />
            </div>
          </div>
        </section>

        <section className="case-studies-section">
          <div className="case-header">
            <h2 className="section-title">Client Projects & Case Studies</h2>
            <p className="section-subtitle">See how we empower businesses through innovative technology.</p>
          </div>
          <div className="case-rail-container" ref={caseRailRef} aria-label="Client projects and case studies">
            <div className="case-rail">
              {clientProjects.length > 0 ? (
                [...clientProjects, ...clientProjects].map((project, idx) => (
                  <Link key={`${project.id}-${idx}`} href={`/projects/${encodeURIComponent(project.slug || project.id)}`}>
                    <a className="case-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div className="case-image"><img src={project.icon_url || fallbackProductImage} alt={project.name} /></div>
                      <div className="case-content">
                        <h3 className="case-title">{project.name}</h3>
                        <p className="section-content">{project.description?.substring(0, 120)}{project.description?.length > 120 ? '...' : ''}</p>
                        <div className="btn-link"><span>View Full Story</span></div>
                      </div>
                    </a>
                  </Link>
                ))
              ) : (
                <>
                  <div className="case-card"><div className="case-image"><img src="https://images.pexels.com/photos/1181335/pexels-photo-1181335.jpeg?auto=compress&cs=tinysrgb&w=1500" alt="Data Center" /></div><div className="case-content"><h3 className="case-title">Global Finance Data Center</h3><p className="section-content">Complete tier-3 data center setup including networking, security, and redundant power.</p><div className="btn-link"><span>View Full Story</span></div></div></div>
                  <div className="case-card"><div className="case-image"><img src="https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg?auto=compress&cs=tinysrgb&w=1500" alt="Security" /></div><div className="case-content"><h3 className="case-title">City Mall Security Overhaul</h3><p className="section-content">Advanced CCTV and access control across 50,000 sq. ft. of retail space.</p><div className="btn-link"><span>View Full Story</span></div></div></div>
                  <div className="case-card"><div className="case-image"><img src="https://images.pexels.com/photos/5480781/pexels-photo-5480781.jpeg?auto=compress&cs=tinysrgb&w=1500" alt="Digital" /></div><div className="case-content"><h3 className="case-title">EduTech Digital Platform</h3><p className="section-content">Custom web application and cloud hosting for a national learning initiative.</p><div className="btn-link"><span>View Full Story</span></div></div></div>
                </>
              )}
            </div>
          </div>
        </section>

        <section className="testimonials-section">
          <div className="testimonials-container">
            <div id="testimonialCarousel" className="testimonials-carousel">
              <div className="testimonial-item active"><div className="testimonial-content"><div className="testimonial-quote"><span>&quot;MIS Solution transformed our corporate IT infrastructure. Their support team is incredibly responsive.&quot;</span></div><div className="testimonial-author"><span className="author-name">Sarah Jenkins</span><span className="author-role">IT Director, Nexus Corp</span></div></div></div>
              <div className="testimonial-item"><div className="testimonial-content"><div className="testimonial-quote"><span>&quot;The hardware quality and warranty transparency at MIS Solution are unmatched.&quot;</span></div><div className="testimonial-author"><span className="author-name">David Chen</span><span className="author-role">Founder, TechSprint Solutions</span></div></div></div>
            </div>
            <div className="carousel-controls"><button aria-label="Slide 1" className="carousel-dot active"></button><button aria-label="Slide 2" className="carousel-dot"></button></div>
          </div>
        </section>

        <section className="search-section">
          <div className="search-container">
            <div className="search-card">
              <h2 className="section-title">Find What You Need</h2>
              <p className="section-content">Instantly search our extensive catalog of hardware, software, and services.</p>
              <form action="/product-catalog" method="GET" className="catalog-search-form">
                <div className="catalog-search-wrapper">
                  <input type="text" placeholder="Enter SKU, Model, or Product Name..." required name="search" className="catalog-input" />
                  <button type="submit" className="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg><span>Search</span></button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="cta-banner-section">
          <div className="cta-wrapper">
            <div className="cta-alert-box">
              <div className="cta-content">
                <div className="cta-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div>
                <div className="cta-text"><span className="cta-title">Need Immediate Assistance?</span><span className="cta-hotline">24/7 Hotline: +1-800-MIS-TECH</span></div>
              </div>
              <div className="cta-buttons"><a href="/request-custom-quote"><div className="btn-on-secondary btn btn-lg"><span>Request a Quote</span></div></a></div>
            </div>
          </div>
        </section>

        <div className="home-container2"><div className="home-container3"><Script html={`<style>@keyframes fadeIn {from {opacity: 0; transform: translateY(10px);} to {opacity: 1; transform: translateY(0);}}</style>`}></Script></div></div>
        <div className="home-container4"><div className="home-container5"><Script html={`<script defer data-name="mis-solution-logic">(function(){ const testimonials = document.querySelectorAll(".testimonial-item"); const dots = document.querySelectorAll(".carousel-dot"); let currentTestimonial = 0; function showTestimonial(index) { testimonials.forEach((item, i) => { item.classList.toggle("active", i === index) }); dots.forEach((dot, i) => { dot.classList.toggle("active", i === index) }); currentTestimonial = index; } dots.forEach((dot, index) => { dot.addEventListener("click", () => { showTestimonial(index) }) }); setInterval(() => { let next = (currentTestimonial + 1) % testimonials.length; showTestimonial(next) }, 5000) })()</script>`}></Script></div></div>
        <Footer />
      </div>
      <style jsx>{`
        .home-container1 { width: 100%; min-height: 100vh; }
        .home-container2 { display: none; }
        .home-container3 { display: contents; }
        .home-container4 { display: none; }
        .home-container5 { display: contents; }
      `}</style>
    </>
  )
}

export const getServerSideProps = async () => {
  try {
    const { listFeaturedProducts } = await import('../lib/server/products')
    const { getDbPool } = await import('../lib/server/db')
    const featuredProducts = await listFeaturedProducts(10)
    const db = getDbPool()

    const [ads] = await db.query(`SELECT a.id, a.title, a.image_url, a.link_url, a.product_id, p.slug AS product_slug FROM advertisements a LEFT JOIN products p ON p.id = a.product_id WHERE a.is_active = 1 ORDER BY a.display_order ASC, a.created_at DESC LIMIT 10`)
    const [cats] = await db.query(`SELECT id, name, slug, icon_url FROM categories WHERE parent_id IS NULL AND deleted_at IS NULL AND status = 'active' ORDER BY display_order ASC LIMIT 15`)
    const [featDigi] = await db.query(`SELECT name, slug, description, icon_url, 'digi_services' as type FROM digi_services WHERE deleted_at IS NULL AND status = 'active' AND is_featured = 1 ORDER BY display_order ASC LIMIT 4`)
    const [featBiz] = await db.query(`SELECT name, slug, description, icon_url, 'bus_corp_sol' as type FROM bus_corp_sol WHERE deleted_at IS NULL AND status = 'active' AND is_featured = 1 ORDER BY display_order ASC LIMIT 4`)
    const [featMaint] = await db.query(`SELECT name, slug, description, icon_url, 'service_maintenance' as type FROM service_maintenance WHERE deleted_at IS NULL AND status = 'active' AND is_featured = 1 ORDER BY display_order ASC LIMIT 4`)
    const featuredServices = [...featDigi, ...featBiz, ...featMaint]
    const [clientProjectRows] = await db.query(`SELECT id, name, slug, description, icon_url, client_name FROM client_projects WHERE deleted_at IS NULL AND status = 'active' ORDER BY is_featured DESC, display_order ASC, created_at DESC LIMIT 10`)

    return {
      props: {
        featuredProducts,
        advertisements: JSON.parse(JSON.stringify(ads)),
        homeCategories: JSON.parse(JSON.stringify(cats)),
        featuredServices: JSON.parse(JSON.stringify(featuredServices)),
        clientProjects: JSON.parse(JSON.stringify(clientProjectRows)),
        messages: (await import('../locales/en.json')).default,
      },
    }
  } catch (error) {
    return {
      props: {
        featuredProducts: [],
        advertisements: [],
        homeCategories: [],
        featuredServices: [],
        clientProjects: [],
        messages: (await import('../locales/en.json')).default,
      },
    }
  }
}

export default Home
