import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/company-information-policies', label: 'About Us' },
  { href: '/product-catalog', label: 'Products' },
  { href: '/digital-services', label: 'Digital Services' },
  { href: '/enterprise-solutions', label: 'Business & Corporate Solutions' },
  { href: '/maintenance-support', label: 'Maintenance Support' },
  { href: '/contact', label: 'Contact' },
]

const defaultSocialLinks = {
  facebookUrl: '#',
  instagramUrl: '#',
  linkedinUrl: '#',
  youtubeUrl: '#',
}

const Navigation = () => {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [cartCount, setCartCount] = useState(0)
  const [socialLinks, setSocialLinks] = useState(defaultSocialLinks)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  useEffect(() => {
    const syncCartCount = () => {
      try {
        const parsed = JSON.parse(window.localStorage.getItem('misCart') || '[]')
        const count = parsed.reduce((sum, item) => sum + (item.quantity || 0), 0)
        setCartCount(count)
      } catch (error) {
        setCartCount(0)
      }
    }

    syncCartCount()

    const handleStorage = (event) => {
      if (!event || event.key === 'misCart') {
        syncCartCount()
      }
    }

    window.addEventListener('storage', handleStorage)
    window.addEventListener('mis-cart-updated', syncCartCount)

    return () => {
      window.removeEventListener('storage', handleStorage)
      window.removeEventListener('mis-cart-updated', syncCartCount)
    }
  }, [])

  useEffect(() => {
    let isMounted = true

    const loadSocialLinks = async () => {
      try {
        const response = await fetch('/api/company-contact')
        const payload = await response.json()

        if (!isMounted) return
        if (payload?.success && payload.contact) {
          setSocialLinks((prev) => ({
            ...prev,
            facebookUrl: payload.contact.facebookUrl || '#',
            linkedinUrl: payload.contact.linkedinUrl || '#',
          }))
        }
      } catch (error) {
        // Ignore API failures, keep default links
      }
    }

    loadSocialLinks()

    return () => {
      isMounted = false
    }
  }, [])

  const closeMenu = () => setIsMenuOpen(false)

  const handleMenuNavigation = (href) => {
    closeMenu()
    router.push(href)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    const query = searchTerm.trim()

    if (!query) {
      setIsSearchOpen(false)
      return
    }

    router.push({
      pathname: '/product-catalog',
      query: { search: query },
    })
    setIsSearchOpen(false)
  }

  const handleCartClick = () => {
    if (router.pathname === '/product-catalog') {
      window.dispatchEvent(new Event('open-mis-cart'))
      return
    }

    router.push({
      pathname: '/product-catalog',
      query: { cart: 'open' },
    })
  }

  return (
    <>
      <header className="menu-nav-header">
        <div className="menu-nav-left">
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            className="menu-nav-toggle"
            onClick={() => {
              setIsSearchOpen(false)
              setIsMenuOpen(true)
            }}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
            </svg>
          </button>
          <div className="menu-nav-socials" aria-label="Social media links">
            <a href={socialLinks.facebookUrl} aria-label="Facebook" className="menu-nav-social-link" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path
                  d="M14 8h3V4h-3a5 5 0 0 0-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9a1 1 0 0 1 1-1"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="menu-nav-social-link">
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                ></rect>
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                ></circle>
                <circle cx="17" cy="7" r="1.2" fill="currentColor"></circle>
              </svg>
            </a>
            <a href={socialLinks.linkedinUrl} aria-label="LinkedIn" className="menu-nav-social-link" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <rect x="3" y="9" width="4" height="11" fill="currentColor"></rect>
                <circle cx="5" cy="5" r="2" fill="currentColor"></circle>
                <path
                  d="M11 9h4v1.7A4.3 4.3 0 0 1 19 8.8C22 8.8 22 11.5 22 15v5h-4v-4.5c0-2.1-.1-3.8-2.3-3.8c-2.3 0-2.7 1.7-2.7 3.6V20h-4z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
            <a href="#" aria-label="YouTube" className="menu-nav-social-link">
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path
                  d="M21.8 8.2s-.2-1.6-.9-2.2c-.9-.9-1.8-.9-2.3-1C15.3 4.8 12 4.8 12 4.8h0s-3.3 0-6.6.2c-.5.1-1.4.1-2.3 1c-.7.6-.9 2.2-.9 2.2S2 10 2 11.8v.4c0 1.8.2 3.6.2 3.6s.2 1.6.9 2.2c.9.9 2.1.9 2.7 1c1.9.2 6.2.2 6.2.2s3.3 0 6.6-.2c.5-.1 1.4-.1 2.3-1c.7-.6.9-2.2.9-2.2s.2-1.8.2-3.6v-.4c0-1.8-.2-3.6-.2-3.6M10 15.2V8.8l5.5 3.2z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <Link href="/">
          <a className="menu-nav-logo" onClick={closeMenu}>
            <img
              src="/mis_logo_cut-w.png"
              alt="MIS Solution logo"
              className="menu-nav-logo-image"
            />
            <span className="menu-nav-logo-text">MIS Solution</span>
          </a>
        </Link>

        <div className="menu-nav-right">
          <form
            className={`menu-nav-search-inline ${isSearchOpen ? 'is-open' : ''}`}
            onSubmit={handleSearchSubmit}
          >
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products, services, or SKUs"
              className="menu-nav-search-input"
              aria-label="Search products and services"
            />
          </form>
          <button
            type="button"
            aria-label="Toggle site search"
            aria-expanded={isSearchOpen}
            className={`menu-nav-icon-btn ${isSearchOpen ? 'is-active' : ''}`}
            onClick={() => setIsSearchOpen((prev) => !prev)}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path
                d="m21 21-4.3-4.3M11 19a8 8 0 1 1 0-16a8 8 0 0 1 0 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
          <button
            type="button"
            aria-label="Go to profile"
            className="menu-nav-icon-link"
            onClick={() => router.push('/profile')}
          >
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path
                d="M12 12a4 4 0 1 0-4-4a4 4 0 0 0 4 4m-7 8a7 7 0 0 1 14 0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
          <button
            type="button"
            aria-label="Open cart"
            className="menu-nav-icon-link menu-nav-cart-link"
            onClick={handleCartClick}
          >
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path
                d="M6 6h15l-1.2 7.2a2 2 0 0 1-2 1.7H9.1a2 2 0 0 1-2-1.6L5.7 4.7A1 1 0 0 0 4.7 4H3m6 16a1.2 1.2 0 1 1 0-2.4A1.2 1.2 0 0 1 9 20m8 0a1.2 1.2 0 1 1 0-2.4A1.2 1.2 0 0 1 17 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            {cartCount > 0 && <span className="menu-nav-cart-count">{cartCount}</span>}
          </button>
        </div>
      </header>

      <div className="menu-nav-spacer"></div>

      <div
        className={`menu-nav-overlay ${isMenuOpen ? 'is-active' : ''}`}
        onClick={closeMenu}
      >
        <aside
          className={`menu-nav-drawer ${isMenuOpen ? 'is-active' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="menu-nav-drawer-head">
            <button
              type="button"
              aria-label="Close menu"
              className="menu-nav-close"
              onClick={closeMenu}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6l-12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>
          </div>

          <nav aria-label="Main Navigation">
            <ul className="menu-nav-list">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <button
                    type="button"
                    className="menu-nav-link menu-nav-link-btn"
                    onClick={() => handleMenuNavigation(item.href)}
                  >
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="menu-nav-drawer-footer">
            <Link href="/request-custom-quote">
              <a className="btn btn-primary menu-nav-cta" onClick={closeMenu}>
                Request Quote
              </a>
            </Link>
          </div>
        </aside>
      </div>

      <style jsx>{`
        .menu-nav-header {
          top: 0;
          left: 0;
          width: 100%;
          height: 72px;
          display: grid;
          z-index: 1200;
          position: fixed;
          padding: 0 20px;
          align-items: center;
          grid-template-columns: 1fr auto 1fr;
          color: #111111;
          border-bottom: 1px solid rgba(0, 0, 0, 0.14);
          background: var(--color-primary);
        }

        .menu-nav-left,
        .menu-nav-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .menu-nav-right {
          justify-content: flex-end;
          color: #111111;
        }

        .menu-nav-search-inline {
          max-width: 0;
          opacity: 0;
          margin-right: 0;
          overflow: hidden;
          pointer-events: none;
          transition: max-width 0.24s ease, opacity 0.2s ease, margin-right 0.24s ease;
        }

        .menu-nav-search-inline.is-open {
          opacity: 1;
          max-width: min(36vw, 420px);
          margin-right: 6px;
          pointer-events: auto;
        }

        .menu-nav-icon-btn {
          border: 0;
          width: 32px;
          height: 32px;
          display: inline-flex;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.08);
          color: #111111;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }

        .menu-nav-icon-link {
          border: 0;
          width: 32px;
          height: 32px;
          display: inline-flex;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: transparent;
          color: #111111;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }

        .menu-nav-icon-link:hover {
          transform: translateY(-1px);
          background: rgba(0, 0, 0, 0.11);
        }

        .menu-nav-cart-link {
          position: relative;
        }

        .menu-nav-cart-count {
          top: -5px;
          right: -5px;
          color: #ffffff;
          width: 17px;
          height: 17px;
          display: inline-flex;
          position: absolute;
          font-size: 0.62rem;
          font-weight: 700;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: #14161b;
        }

        .menu-nav-icon-btn:hover {
          transform: translateY(-1px);
          background: rgba(0, 0, 0, 0.16);
        }

        .menu-nav-icon-btn.is-active {
          background: #111111;
          color: #f7e500;
        }

        .menu-nav-toggle,
        .menu-nav-close {
          border: 0;
          width: 32px;
          height: 32px;
          display: inline-flex;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          background: rgba(0, 0, 0, 0.1);
          color: #111111;
        }

        .menu-nav-socials {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .menu-nav-social-link {
          width: 22px;
          height: 22px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #111111;
          text-decoration: none;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .menu-nav-social-link:hover {
          color: #0a0a0a;
          transform: translateY(-1px);
        }

        .menu-nav-logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          justify-self: center;
          text-decoration: none;
          color: #111111;
          font-weight: 800;
          white-space: nowrap;
        }

        .menu-nav-logo-image {
          height: 42px;
          width: auto;
          display: block;
          object-fit: contain;
        }

        .menu-nav-logo-text {
          font-size: clamp(1rem, 1.1vw, 1.85rem);
          letter-spacing: 0.03em;
        }

        .menu-nav-overlay {
          inset: 0;
          opacity: 0;
          z-index: 1300;
          position: fixed;
          pointer-events: none;
          transition: opacity 0.25s ease;
          background: linear-gradient(90deg, rgba(0, 0, 0, 0.62) 0%, rgba(0, 0, 0, 0.22) 45%, rgba(0, 0, 0, 0.06) 100%);
        }

        .menu-nav-search-input {
          width: min(36vw, 420px);
          min-width: 210px;
          height: 32px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          border-radius: 8px;
          padding: 0 12px;
          background: #ffffff;
          color: #111111;
          font-size: 0.9rem;
        }

        .menu-nav-search-input:focus {
          outline: 2px solid #f7e500;
          border-color: #111111;
        }

        .menu-nav-overlay.is-active {
          opacity: 1;
          pointer-events: auto;
        }

        .menu-nav-drawer {
          top: 0;
          left: 0;
          width: min(310px, 90vw);
          height: 100%;
          color: #f7f7f7;
          display: flex;
          position: absolute;
          flex-direction: column;
          transform: translateX(-100%);
          transition: transform 0.25s ease;
          background: rgba(10, 16, 27, 0.72);
          border-right: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          padding: 16px 16px 24px;
        }

        .menu-nav-drawer.is-active {
          transform: translateX(0);
        }

        .menu-nav-drawer-head {
          display: flex;
          justify-content: flex-start;
          margin-bottom: 16px;
        }

        .menu-nav-close {
          color: #f5f5f5;
          background: rgba(255, 255, 255, 0.09);
        }

        .menu-nav-list {
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .menu-nav-link {
          color: #f3f3f3;
          display: block;
          text-decoration: none;
          padding: 10px 6px;
          font-size: 1.12rem;
          font-weight: 500;
          border-radius: 6px;
          transition: background-color 0.2s ease, color 0.2s ease;
        }

        .menu-nav-link-btn {
          width: 100%;
          border: 0;
          background: transparent;
          text-align: left;
          cursor: pointer;
          font: inherit;
        }

        .menu-nav-link:hover {
          color: var(--color-primary);
          background: rgba(255, 255, 255, 0.06);
        }

        .menu-nav-drawer-footer {
          margin-top: auto;
          padding-top: 18px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .menu-nav-cta {
          width: 100%;
          justify-content: center;
        }

        .menu-nav-spacer {
          height: 72px;
          width: 100%;
        }

        @media (max-width: 767px) {
          .menu-nav-header {
            height: 64px;
            padding: 0 14px;
          }

          .menu-nav-logo-image {
            height: 34px;
          }

          .menu-nav-logo-text {
            font-size: 0.95rem;
          }

          .menu-nav-socials {
            display: none;
          }

          .menu-nav-spacer {
            height: 64px;
          }

          .menu-nav-search-inline.is-open {
            max-width: min(44vw, 220px);
            margin-right: 4px;
          }

          .menu-nav-search-input {
            width: min(44vw, 220px);
            min-width: 120px;
          }
        }
      `}</style>
    </>
  )
}

export default Navigation
