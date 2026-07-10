import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from 'next-auth/react'

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/company-information-policies', label: 'About Us' },
  { href: '/categories/desktop', label: 'Products' },
  { href: '/digital-services', label: 'Digital Services' },
  { href: '/enterprise-solutions', label: 'Business & Corporate Solutions' },
  { href: '/maintenance-support', label: 'Maintenance Support' },
  { href: '/career', label: 'Career' },
  { href: '/contact', label: 'Contact' },
]

const defaultSocialLinks = {
  facebookUrl: '#',
  instagramUrl: '#',
  linkedinUrl: '#',
  youtubeUrl: '#',
}

// Category nav item with hover dropdown (uses inline styles to avoid styled-jsx scoping issues)
const CatNavItem = ({ cat, subs }) => {
  const [open, setOpen] = useState(false)
  return (
    <div
      style={{ position: 'relative' }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link href={`/categories/${cat.slug}`}>
        <a style={{ display: 'block', padding: '10px 14px', fontSize: '13px', fontWeight: 500, color: '#e2e8f0', textDecoration: 'none', whiteSpace: 'nowrap' }}>{cat.name}</a>
      </Link>
      {subs.length > 0 && open && (
        <div style={{ position: 'absolute', top: '100%', left: 0, minWidth: '200px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '6px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)', zIndex: 9999, padding: '6px 0' }}>
          {subs.map((sub) => (
            <Link key={sub.id} href={`/categories/${sub.slug}`}>
              <a style={{ display: 'block', padding: '8px 16px', fontSize: '13px', color: '#374151', textDecoration: 'none' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#f1f5f9'; e.currentTarget.style.color = '#1e40af' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#374151' }}
              >{sub.name}</a>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

const Navigation = () => {
  const router = useRouter()
  const { data: session } = useSession()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [cartCount, setCartCount] = useState(0)
  const [socialLinks, setSocialLinks] = useState(defaultSocialLinks)
  const [categories, setCategories] = useState([])

  // Load categories for the nav bar
  useEffect(() => {
    fetch('/api/categories')
      .then((r) => r.json())
      .then((data) => { if (data.categories) setCategories(data.categories) })
      .catch(() => {})
  }, [])

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

    // Load saved cart from DB if signed in
    const loadCartFromDB = async () => {
      if (!session?.user) return
      try {
        const res = await fetch('/api/cart')
        if (!res.ok) return
        const data = await res.json()
        if (data.cart && data.cart.length > 0) {
          const localCart = JSON.parse(window.localStorage.getItem('misCart') || '[]')
          // Merge: DB items + any local items not already in DB
          const merged = [...data.cart]
          localCart.forEach((localItem) => {
            if (!merged.find((m) => m.id === localItem.id)) {
              merged.push(localItem)
            }
          })
          window.localStorage.setItem('misCart', JSON.stringify(merged))
          syncCartCount()
          window.dispatchEvent(new Event('mis-cart-updated'))
          // Save merged back to DB
          saveCartToDB(merged)
        }
      } catch (e) { /* ignore */ }
    }

    const saveCartToDB = async (items) => {
      if (!session?.user) return
      try {
        await fetch('/api/cart', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ items }),
        })
      } catch (e) { /* ignore */ }
    }

    // On cart update, save to DB
    const handleCartUpdate = () => {
      syncCartCount()
      if (session?.user) {
        try {
          const items = JSON.parse(window.localStorage.getItem('misCart') || '[]')
          saveCartToDB(items)
        } catch (e) { /* ignore */ }
      }
    }

    syncCartCount()
    loadCartFromDB()

    const handleStorage = (event) => {
      if (!event || event.key === 'misCart') {
        handleCartUpdate()
      }
    }

    window.addEventListener('storage', handleStorage)
    window.addEventListener('mis-cart-updated', handleCartUpdate)

    return () => {
      window.removeEventListener('storage', handleStorage)
      window.removeEventListener('mis-cart-updated', handleCartUpdate)
    }
  }, [session])

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
      pathname: '/search',
      query: { q: query },
    })
    setIsSearchOpen(false)
    setSearchTerm('')
  }

  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])

  const handleCartClick = () => {
    try {
      const items = JSON.parse(window.localStorage.getItem('misCart') || '[]')
      setCartItems(items)
    } catch (e) { setCartItems([]) }
    setCartOpen(true)
  }

  // Listen for open-mis-cart event
  useEffect(() => {
    const openCart = () => {
      try { setCartItems(JSON.parse(window.localStorage.getItem('misCart') || '[]')) } catch (e) { setCartItems([]) }
      setCartOpen(true)
    }
    window.addEventListener('open-mis-cart', openCart)
    return () => window.removeEventListener('open-mis-cart', openCart)
  }, [])

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
            aria-label={session ? 'Go to profile' : 'Sign in'}
            className="menu-nav-icon-link"
            onClick={() => session ? router.push('/profile') : signIn(undefined, { callbackUrl: router.asPath })}
          >
            {session?.user?.image ? (
              <img src={session.user.image} alt="" style={{ width: 24, height: 24, borderRadius: '50%', objectFit: 'cover' }} />
            ) : (
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
            )}
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

      {/* Category Navigation Bar - only on product/category pages */}
      {categories.length > 0 && (router.pathname.startsWith('/categories') || router.pathname.startsWith('/products') || router.pathname === '/product-catalog') && (
        <nav className="cat-nav-bar" aria-label="Product categories">
          <div className="cat-nav-inner">
            {categories.filter((c) => !c.parent_id).map((cat) => {
              const subs = categories.filter((c) => Number(c.parent_id) === Number(cat.id))
              return (
                <CatNavItem key={cat.id} cat={cat} subs={subs} />
              )
            })}
          </div>
        </nav>
      )}

      <div className="menu-nav-spacer"></div>
      {categories.length > 0 && (router.pathname.startsWith('/categories') || router.pathname.startsWith('/products') || router.pathname === '/product-catalog') && <div className="cat-nav-spacer"></div>}

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
              {menuItems.map((item) => {
                const isProducts = item.label === 'Products'
                if (isProducts && categories.length > 0) {
                  return (
                    <li key={item.href}>
                      <details className="menu-nav-products-dropdown">
                        <summary className="menu-nav-link menu-nav-link-btn">
                          <span>Products</span>
                          <span className="menu-nav-chevron">›</span>
                        </summary>
                        <div className="menu-nav-sub-list">
                          {categories.filter((c) => !c.parent_id).map((cat) => {
                            const subs = categories.filter((c) => c.parent_id === cat.id)
                            return (
                              <details key={cat.id} className="menu-nav-cat-item">
                                <summary className="menu-nav-cat-link" onClick={(e) => { if (subs.length === 0) { e.preventDefault(); handleMenuNavigation(`/categories/${cat.slug}`) } }}>
                                  <span>{cat.name}</span>
                                  {subs.length > 0 && <span className="menu-nav-chevron">›</span>}
                                </summary>
                                {subs.length > 0 && (
                                  <div className="menu-nav-sub-subs">
                                    {subs.map((sub) => (
                                      <button key={sub.id} type="button" className="menu-nav-sub-link" onClick={() => handleMenuNavigation(`/categories/${sub.slug}`)}>{sub.name}</button>
                                    ))}
                                  </div>
                                )}
                              </details>
                            )
                          })}
                        </div>
                      </details>
                    </li>
                  )
                }
                return (
                  <li key={item.href}>
                    <button
                      type="button"
                      className="menu-nav-link menu-nav-link-btn"
                      onClick={() => handleMenuNavigation(item.href)}
                    >
                      <span>{item.label}</span>
                    </button>
                  </li>
                )
              })}
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

      {/* Cart Sidebar Drawer */}
      {cartOpen && (
        <div className="cart-drawer-overlay" onClick={() => setCartOpen(false)}>
          <aside className="cart-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="cart-drawer-head">
              <h3>Your Cart</h3>
              <button onClick={() => setCartOpen(false)} className="cart-drawer-close">✕</button>
            </div>
            <div className="cart-drawer-body">
              {cartItems.length === 0 ? (
                <p className="cart-empty">Your cart is empty.</p>
              ) : (
                cartItems.map((item, idx) => (
                  <div key={idx} className="cart-drawer-item">
                    {item.image && <img src={item.image} alt={item.name} className="cart-item-img" />}
                    <div className="cart-item-info">
                      <strong>{item.name}</strong>
                      <span>৳{Number(item.price || 0).toLocaleString()} × {item.quantity}</span>
                    </div>
                    <button className="cart-item-remove" onClick={() => {
                      const updated = cartItems.filter((_, i) => i !== idx)
                      setCartItems(updated)
                      window.localStorage.setItem('misCart', JSON.stringify(updated))
                      window.dispatchEvent(new Event('mis-cart-updated'))
                    }}>✕</button>
                  </div>
                ))
              )}
            </div>
            {cartItems.length > 0 && (
              <div className="cart-drawer-footer">
                <div className="cart-drawer-total">
                  <span>Subtotal</span>
                  <strong>৳{cartItems.reduce((s, i) => s + (i.price * i.quantity), 0).toLocaleString()}</strong>
                </div>
                <Link href="/confirm-order">
                  <a className="cart-checkout-btn" onClick={() => setCartOpen(false)}>Proceed to Checkout</a>
                </Link>
              </div>
            )}
          </aside>
        </div>
      )}

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
          position: relative;
        }

        .menu-nav-search-inline {
          position: absolute;
          right: 140px;
          top: 50%;
          transform: translateY(-50%);
          max-width: 0;
          opacity: 0;
          overflow: hidden;
          pointer-events: none;
          transition: max-width 0.25s ease, opacity 0.2s ease;
          z-index: 10;
        }

        .menu-nav-search-inline.is-open {
          opacity: 1;
          max-width: min(50vw, 480px);
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
          width: min(50vw, 480px);
          min-width: 240px;
          height: 38px;
          border: 2px solid #f7e500;
          border-radius: 10px;
          padding: 0 14px;
          background: #ffffff;
          color: #111111;
          font-size: 0.9rem;
          box-shadow: 0 4px 16px rgba(0,0,0,0.1);
        }

        .menu-nav-search-input:focus {
          outline: none;
          border-color: #111111;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
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
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: rgba(255,255,255,0.15) transparent;
        }

        .menu-nav-drawer::-webkit-scrollbar { width: 4px; }
        .menu-nav-drawer::-webkit-scrollbar-track { background: transparent; }
        .menu-nav-drawer::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 4px; }
        .menu-nav-drawer::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.3); }

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

        /* Products dropdown in sidebar */
        .menu-nav-products-dropdown { margin: 0; }
        .menu-nav-products-dropdown > summary { display: flex; justify-content: space-between; }
        .menu-nav-products-dropdown > summary::-webkit-details-marker { display: none; }
        .menu-nav-chevron { font-size: 16px; opacity: 0.5; transition: transform 0.2s; }
        details[open] > summary > .menu-nav-chevron { transform: rotate(90deg); }

        .menu-nav-sub-list {
          padding: 4px 0 8px 12px;
          border-left: 2px solid rgba(255,255,255,0.08);
          margin-left: 8px;
        }

        .menu-nav-cat-item { margin-bottom: 1px; }
        .menu-nav-cat-item > summary::-webkit-details-marker { display: none; }
        .menu-nav-cat-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 7px 8px;
          border-radius: 4px;
          font-size: 13px;
          color: #cbd5e1;
          cursor: pointer;
          list-style: none;
          transition: background 0.12s, color 0.12s;
        }
        .menu-nav-cat-link:hover { background: rgba(255,255,255,0.06); color: #fff; }

        .menu-nav-sub-subs {
          padding: 2px 0 4px 14px;
          display: flex;
          flex-direction: column;
        }

        .menu-nav-sub-link {
          border: none;
          background: transparent;
          text-align: left;
          font: inherit;
          font-size: 12px;
          color: #94a3b8;
          padding: 5px 8px;
          border-radius: 4px;
          cursor: pointer;
          transition: color 0.12s, background 0.12s;
        }
        .menu-nav-sub-link:hover { color: #fff; background: rgba(255,255,255,0.05); }

        .menu-nav-cta {
          width: 100%;
          justify-content: center;
        }

        .menu-nav-spacer {
          height: 72px;
          width: 100%;
        }

        .cat-nav-spacer {
          height: 40px;
          width: 100%;
        }

        /* Category Navigation Bar */
        .cat-nav-bar {
          position: fixed;
          top: 72px;
          left: 0;
          right: 0;
          z-index: 1100;
          background: #1e293b;
          border-bottom: 1px solid #334155;
          overflow-x: auto;
          overflow-y: hidden;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        }
        .cat-nav-bar::-webkit-scrollbar { display: none; }

        .cat-nav-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 16px;
          gap: 0;
          white-space: nowrap;
        }

        @media (max-width: 1100px) {
          .cat-nav-inner {
            justify-content: flex-start;
            width: max-content;
            min-width: 100%;
          }
        }

        .cat-nav-item {
          position: relative;
        }

        .cat-nav-link {
          display: block;
          padding: 10px 14px;
          font-size: 13px;
          font-weight: 500;
          color: #e2e8f0;
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.12s, background 0.12s;
        }

        .cat-nav-link:hover {
          color: #ffffff;
          background: #334155;
        }

        .cat-nav-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 200px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
          z-index: 1200;
          padding: 6px 0;
        }

        .cat-nav-item:hover .cat-nav-dropdown {
          display: block;
        }

        .cat-nav-sub {
          display: block;
          padding: 8px 16px;
          font-size: 13px;
          color: #374151;
          text-decoration: none;
          transition: background 0.12s;
        }

        .cat-nav-sub:hover {
          background: #f1f5f9;
          color: #1e40af;
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

          .cat-nav-bar {
            top: 64px;
          }

          .menu-nav-search-inline.is-open {
            max-width: min(60vw, 260px);
          }

          .menu-nav-search-input {
            width: min(60vw, 260px);
            min-width: 140px;
          }
        }
        /* Cart Drawer */
        .cart-drawer-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.4); z-index: 2000; }
        .cart-drawer { position: fixed; top: 0; right: 0; width: min(400px, 90vw); height: 100vh; background: #fff; display: flex; flex-direction: column; box-shadow: -8px 0 24px rgba(0,0,0,0.15); }
        .cart-drawer-head { display: flex; justify-content: space-between; align-items: center; padding: 18px 20px; border-bottom: 1px solid #e5e7eb; }
        .cart-drawer-head h3 { margin: 0; font-size: 18px; color: #111827; }
        .cart-drawer-close { border: none; background: transparent; font-size: 22px; cursor: pointer; color: #6b7280; }
        .cart-drawer-body { flex: 1; overflow-y: auto; padding: 16px 20px; }
        .cart-empty { color: #9ca3af; text-align: center; padding: 40px 0; }
        .cart-drawer-item { display: flex; align-items: center; gap: 12px; padding: 12px 0; border-bottom: 1px solid #f3f4f6; }
        .cart-item-img { width: 50px; height: 50px; border-radius: 8px; object-fit: cover; background: #f3f4f6; }
        .cart-item-info { flex: 1; }
        .cart-item-info strong { display: block; font-size: 13px; color: #111827; line-height: 1.3; }
        .cart-item-info span { font-size: 12px; color: #6b7280; }
        .cart-item-remove { border: none; background: transparent; color: #dc2626; font-size: 16px; cursor: pointer; }
        .cart-drawer-footer { padding: 16px 20px; border-top: 1px solid #e5e7eb; }
        .cart-drawer-total { display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 15px; color: #111827; }
        .cart-checkout-btn { display: block; text-align: center; padding: 12px; border-radius: 8px; background: #111827; color: #fff; font-weight: 700; font-size: 14px; text-decoration: none; }
        .cart-checkout-btn:hover { background: #1f2937; }
      `}</style>
    </>
  )
}

export default Navigation
