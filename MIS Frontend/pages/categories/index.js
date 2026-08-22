import React, { useMemo, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../../components/navigation'
import Footer from '../../components/footer'
import { getDbPool } from '../../lib/server/db'

const formatCurrency = (v) => `৳${Number(v || 0).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`

const AllProductsPage = ({ categories, products, brands, maxPrice }) => {
  const [priceRange, setPriceRange] = useState([0, maxPrice || 500000])
  const [selectedBrand, setSelectedBrand] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [availability, setAvailability] = useState('all')
  const [sortBy, setSortBy] = useState('default')
  const [filterOpen, setFilterOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category_slug === selectedCategory)
    }

    // Price filter
    filtered = filtered.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])

    // Brand filter
    if (selectedBrand) {
      filtered = filtered.filter((p) => p.brand === selectedBrand)
    }

    // Availability
    if (availability === 'in-stock') {
      filtered = filtered.filter((p) => p.stock_qty > 0)
    } else if (availability === 'upcoming') {
      filtered = filtered.filter((p) => p.stock_qty === 0)
    }

    // Sort
    if (sortBy === 'price-low') filtered.sort((a, b) => a.price - b.price)
    else if (sortBy === 'price-high') filtered.sort((a, b) => b.price - a.price)
    else if (sortBy === 'newest') filtered.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))

    return filtered
  }, [products, priceRange, selectedBrand, selectedCategory, availability, sortBy])

  return (
    <>
      <Head>
        <title>All Products - MIS Solution</title>
        <meta name="description" content="Browse all products from MIS Solution - Computers, Laptops, Networking, Security, Accessories and more at best prices in Bangladesh." />
        <link rel="icon" href="/footer%20logo.png" />
      </Head>

      <Navigation />

      <main className="cat-page">
        {/* Breadcrumb */}
        <div className="cat-breadcrumb">
          <div className="cat-container">
            <Link href="/"><a>Home</a></Link>
            <span>/</span>
            <span>All Products</span>
          </div>
        </div>

        {/* Header */}
        <div className="cat-header">
          <div className="cat-container">
            <h1>All Products</h1>
            <p>Browse our complete catalog of IT products, hardware, networking equipment, and accessories.</p>
          </div>
        </div>

        {/* Category Chips Row */}
        {categories.length > 0 && (
          <div className="brands-row">
            <div className="cat-container">
              <button className={`brand-chip ${!selectedCategory ? 'active' : ''}`} onClick={() => setSelectedCategory('')}>All Categories</button>
              {categories.map((c) => (
                <button key={c.id} className={`brand-chip ${selectedCategory === c.slug ? 'active' : ''}`} onClick={() => setSelectedCategory(selectedCategory === c.slug ? '' : c.slug)}>{c.name}</button>
              ))}
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="cat-main">
          <div className="cat-container cat-grid">
            {/* Sidebar Filters */}
            <aside className="cat-sidebar">
              {/* Price Range */}
              <div className="filter-block">
                <h3>Price Range</h3>
                <input type="range" min="0" max={maxPrice || 500000} step="1000" value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])} className="price-slider" />
                <div className="price-inputs">
                  <input type="number" value={priceRange[0]} onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])} />
                  <input type="number" value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])} />
                </div>
              </div>

              {/* Availability */}
              <div className="filter-block">
                <h3>Availability</h3>
                <label className="filter-option"><input type="radio" name="avail" checked={availability === 'all'} onChange={() => setAvailability('all')} /> All</label>
                <label className="filter-option"><input type="radio" name="avail" checked={availability === 'in-stock'} onChange={() => setAvailability('in-stock')} /> In Stock</label>
                <label className="filter-option"><input type="radio" name="avail" checked={availability === 'upcoming'} onChange={() => setAvailability('upcoming')} /> Upcoming</label>
              </div>

              {/* Brand */}
              {brands.length > 0 && (
                <div className="filter-block">
                  <h3>Brand</h3>
                  <div className="filter-options-list">
                    <label className="filter-option"><input type="radio" name="brand" checked={!selectedBrand} onChange={() => setSelectedBrand('')} /> All</label>
                    {brands.map((b) => (
                      <label key={b} className="filter-option"><input type="radio" name="brand" checked={selectedBrand === b} onChange={() => setSelectedBrand(b)} /> {b}</label>
                    ))}
                  </div>
                </div>
              )}

              {/* Categories */}
              <div className="filter-block">
                <h3>Category</h3>
                <div className="filter-options-list">
                  <label className="filter-option"><input type="radio" name="cat" checked={!selectedCategory} onChange={() => setSelectedCategory('')} /> All</label>
                  {categories.map((c) => (
                    <label key={c.id} className="filter-option"><input type="radio" name="cat" checked={selectedCategory === c.slug} onChange={() => setSelectedCategory(c.slug)} /> {c.name}</label>
                  ))}
                </div>
              </div>
            </aside>

            {/* Product Grid */}
            <section className="cat-products">
              <div className="cat-toolbar">
                <button className="filter-toggle-btn" onClick={() => setFilterOpen(true)}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/></svg>
                  Filter
                </button>
                <h2 className="toolbar-title">All Products</h2>
                <div className="toolbar-controls">
                  <span className="product-count">Show: <strong>{filteredProducts.length}</strong></span>
                  <span className="sort-label">Sort By:</span>
                  <select className="sort-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="default">Default</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest First</option>
                  </select>
                </div>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="no-products">No products match your filters.</div>
              ) : (
                <div className="products-grid">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="product-card-item">
                      <Link href={`/products/${product.slug || product.id}`}>
                        <a className="product-card-link">
                          {product.regular_price && product.regular_price > product.price && (
                            <span className="save-badge">Save: {formatCurrency(product.regular_price - product.price)}</span>
                          )}
                          <div className="product-card-img">
                            <img src={product.thumbnail_1 || '/footer%20logo.png'} alt={product.name} />
                          </div>
                          <div className="product-card-body">
                            <h4>{product.name}</h4>
                            <span className="product-category-tag">{product.category_name || 'General'}</span>
                            <div className="product-card-price">
                              {product.price > 0 ? (
                                <>
                                  <strong>{formatCurrency(product.price)}</strong>
                                  {product.regular_price > product.price && <span className="old-price">{formatCurrency(product.regular_price)}</span>}
                                </>
                              ) : (
                                <strong className="contact-price">Contact for Price</strong>
                              )}
                            </div>
                          </div>
                        </a>
                      </Link>
                      <div className="product-card-actions">
                        <button
                          className="add-cart-btn"
                          onClick={() => {
                            try {
                              const cart = JSON.parse(window.localStorage.getItem('misCart') || '[]')
                              const id = product.slug || String(product.id)
                              const existing = cart.find((item) => item.id === id)
                              if (existing) { existing.quantity += 1 }
                              else { cart.push({ id, productId: product.id, name: product.name, price: Number(product.price || 0), image: product.thumbnail_1 || '', quantity: 1 }) }
                              window.localStorage.setItem('misCart', JSON.stringify(cart))
                              window.dispatchEvent(new Event('mis-cart-updated'))
                            } catch (err) {}
                          }}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </main>

      <Footer />

      {/* Mobile Filter Drawer */}
      {filterOpen && (
        <div className="filter-overlay" onClick={() => setFilterOpen(false)}>
          <aside className="filter-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="filter-drawer-head">
              <span>Filters</span>
              <button className="filter-drawer-close" onClick={() => setFilterOpen(false)}>✕</button>
            </div>
            <div className="filter-drawer-body">
              <div className="filter-block">
                <h3>Price Range</h3>
                <input type="range" min="0" max={maxPrice || 500000} step="1000" value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])} className="price-slider" />
                <div className="price-inputs">
                  <input type="number" value={priceRange[0]} onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])} />
                  <input type="number" value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])} />
                </div>
              </div>
              <div className="filter-block">
                <h3>Availability</h3>
                <label className="filter-option"><input type="radio" name="avail-m" checked={availability === 'all'} onChange={() => setAvailability('all')} /> All</label>
                <label className="filter-option"><input type="radio" name="avail-m" checked={availability === 'in-stock'} onChange={() => setAvailability('in-stock')} /> In Stock</label>
                <label className="filter-option"><input type="radio" name="avail-m" checked={availability === 'upcoming'} onChange={() => setAvailability('upcoming')} /> Upcoming</label>
              </div>
              {brands.length > 0 && (
                <div className="filter-block">
                  <h3>Brand</h3>
                  <div className="filter-options-list">
                    <label className="filter-option"><input type="radio" name="brand-m" checked={!selectedBrand} onChange={() => setSelectedBrand('')} /> All</label>
                    {brands.map((b) => (<label key={b} className="filter-option"><input type="radio" name="brand-m" checked={selectedBrand === b} onChange={() => setSelectedBrand(b)} />{b}</label>))}
                  </div>
                </div>
              )}
              <div className="filter-block">
                <h3>Category</h3>
                <div className="filter-options-list">
                  <label className="filter-option"><input type="radio" name="cat-m" checked={!selectedCategory} onChange={() => setSelectedCategory('')} /> All</label>
                  {categories.map((c) => (<label key={c.id} className="filter-option"><input type="radio" name="cat-m" checked={selectedCategory === c.slug} onChange={() => setSelectedCategory(c.slug)} />{c.name}</label>))}
                </div>
              </div>
            </div>
            <div className="filter-drawer-footer">
              <button className="filter-apply-btn" onClick={() => setFilterOpen(false)}>Show {filteredProducts.length} Products</button>
            </div>
          </aside>
        </div>
      )}

      <style jsx>{`
        .cat-page { min-height: 100vh; background: #f0f3f8; font-family: 'Inter', 'Segoe UI', Arial, sans-serif; }
        .cat-container { max-width: 1320px; margin: 0 auto; padding: 0 16px; }

        .cat-breadcrumb { padding: 12px 0; background: #fff; border-bottom: 1px solid #e8ecf1; }
        .cat-breadcrumb .cat-container { display: flex; gap: 6px; font-size: 13px; color: #6b7280; align-items: center; }
        .cat-breadcrumb :global(a) { color: #3b82f6; text-decoration: none; font-weight: 500; }
        .cat-breadcrumb :global(a:hover) { text-decoration: underline; }

        .cat-header { padding: 20px 0 12px; background: #fff; border-bottom: 1px solid #e8ecf1; }
        .cat-header h1 { margin: 0; font-size: 20px; color: #1e3a5f; font-weight: 700; }
        .cat-header p { margin: 6px 0 0; color: #64748b; font-size: 13px; line-height: 1.6; max-width: 800px; }

        .brands-row { padding: 12px 0; background: #fff; border-bottom: 1px solid #e8ecf1; }
        .brands-row .cat-container { display: flex; gap: 6px; flex-wrap: wrap; align-items: center; }
        .brand-chip { border: 1px solid #d4dae3; border-radius: 4px; padding: 5px 14px; background: #fff; font-size: 12px; font-weight: 500; cursor: pointer; color: #374151; transition: all 0.12s; }
        .brand-chip:hover { border-color: #3b82f6; color: #3b82f6; }
        .brand-chip.active { background: #3b82f6; color: #fff; border-color: #3b82f6; }

        .cat-main { padding: 20px 0 48px; }
        .cat-grid { display: grid; grid-template-columns: 260px 1fr; gap: 20px; align-items: start; }

        .cat-sidebar { position: sticky; top: 80px; display: flex; flex-direction: column; gap: 0; background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; }
        .filter-block { padding: 14px 16px; border-bottom: 1px solid #f1f5f9; }
        .filter-block:last-child { border-bottom: none; }
        .filter-block h3 { margin: 0 0 10px; font-size: 13px; color: #1e293b; font-weight: 700; }
        .price-slider { width: 100%; accent-color: #ef4444; margin-bottom: 8px; height: 4px; }
        .price-inputs { display: flex; gap: 8px; }
        .price-inputs input { width: 50%; border: 1px solid #d4dae3; border-radius: 4px; padding: 5px 6px; font-size: 12px; text-align: center; }
        .filter-options-list { max-height: 180px; overflow-y: auto; }
        .filter-option { display: flex; align-items: center; gap: 8px; padding: 3px 0; font-size: 12.5px; color: #374151; cursor: pointer; }
        .filter-option input { accent-color: #3b82f6; width: 14px; height: 14px; }

        .cat-products { min-width: 0; }
        .cat-toolbar { display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 16px; }
        .toolbar-title { margin: 0; font-size: 16px; color: #1e293b; font-weight: 700; }
        .toolbar-controls { display: flex; align-items: center; gap: 12px; }
        .product-count { font-size: 12px; color: #64748b; }
        .product-count strong { color: #1e293b; }
        .sort-label { font-size: 12px; color: #64748b; }
        .sort-select { border: 1px solid #d4dae3; border-radius: 4px; padding: 6px 10px; font-size: 12px; color: #374151; }

        .products-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 12px; }

        .product-card-item { position: relative; border: 1px solid #e2e8f0; border-radius: 8px; background: #fff; overflow: hidden; transition: box-shadow 0.2s, border-color 0.2s; display: flex; flex-direction: column; }
        .product-card-item:hover { box-shadow: 0 6px 20px rgba(0,0,0,0.08); border-color: #cbd5e1; }
        .product-card-link { text-decoration: none; color: inherit; display: flex; flex-direction: column; flex: 1; }

        .save-badge { position: absolute; top: 8px; left: 8px; padding: 2px 8px; border-radius: 3px; background: #7c3aed; color: #fff; font-size: 10px; font-weight: 700; z-index: 1; }

        .product-card-img { height: 170px; display: flex; align-items: center; justify-content: center; padding: 12px; background: #fff; border-bottom: 1px solid #f1f5f9; }
        .product-card-img img { max-width: 100%; max-height: 100%; object-fit: contain; mix-blend-mode: multiply; }

        .product-card-body { padding: 12px 14px; flex: 1; display: flex; flex-direction: column; }
        .product-card-body h4 { margin: 0 0 6px; font-size: 13px; color: #1e293b; font-weight: 600; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .product-category-tag { display: inline-block; font-size: 10px; color: #6b7280; background: #f1f5f9; border-radius: 3px; padding: 2px 7px; margin-bottom: 8px; font-weight: 500; }

        .product-card-price { margin-top: auto; padding-top: 10px; border-top: 1px solid #f1f5f9; display: flex; align-items: baseline; gap: 8px; }
        .product-card-price strong { font-size: 15px; color: #ef4444; font-weight: 700; }
        .old-price { font-size: 12px; color: #9ca3af; text-decoration: line-through; }
        .contact-price { color: #64748b; font-size: 13px; font-weight: 600; }

        .product-card-actions { margin-top: 10px; }
        .add-cart-btn { display: flex; align-items: center; justify-content: center; gap: 6px; width: 100%; padding: 8px; border: none; border-radius: 4px; background: #3b82f6; color: #fff; font-size: 12px; font-weight: 700; cursor: pointer; transition: background 0.15s; }
        .add-cart-btn:hover { background: #2563eb; }

        .no-products { padding: 48px; text-align: center; color: #94a3b8; border: 1px solid #e2e8f0; border-radius: 8px; background: #fff; font-size: 14px; }

        .filter-toggle-btn { display: flex; align-items: center; gap: 6px; border: 1px solid #d4dae3; border-radius: 6px; padding: 8px 14px; background: #fff; font-size: 13px; font-weight: 600; color: #374151; cursor: pointer; transition: border-color 0.12s; }
        .filter-toggle-btn:hover { border-color: #3b82f6; color: #3b82f6; }

        .filter-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.4); z-index: 2000; animation: fadeIn 0.15s; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .filter-drawer { position: fixed; top: 0; right: 0; width: min(360px, 85vw); height: 100vh; background: #fff; display: flex; flex-direction: column; box-shadow: -8px 0 24px rgba(0,0,0,0.15); animation: slideIn 0.2s ease-out; }
        @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
        .filter-drawer-head { display: flex; justify-content: space-between; align-items: center; padding: 18px 20px; border-bottom: 1px solid #e5e7eb; }
        .filter-drawer-head span { font-size: 18px; font-weight: 700; color: #111827; }
        .filter-drawer-close { border: none; background: transparent; font-size: 22px; cursor: pointer; color: #6b7280; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; border-radius: 6px; }
        .filter-drawer-close:hover { background: #f3f4f6; }
        .filter-drawer-body { flex: 1; overflow-y: auto; padding: 0; }
        .filter-drawer-body .filter-block { padding: 16px 20px; border-bottom: 1px solid #f1f5f9; }
        .filter-drawer-body .filter-block h3 { margin: 0 0 12px; font-size: 14px; color: #1e293b; font-weight: 700; }
        .filter-drawer-body .filter-option { padding: 5px 0; font-size: 13px; }
        .filter-drawer-body .price-slider { width: 100%; accent-color: #ef4444; }
        .filter-drawer-body .price-inputs { display: flex; gap: 10px; margin-top: 8px; }
        .filter-drawer-body .price-inputs input { flex: 1; border: 1px solid #d4dae3; border-radius: 6px; padding: 8px 10px; font-size: 13px; text-align: center; }
        .filter-drawer-body .filter-options-list { max-height: 200px; overflow-y: auto; }
        .filter-drawer-footer { padding: 16px 20px; border-top: 1px solid #e5e7eb; }
        .filter-apply-btn { width: 100%; padding: 12px; border: none; border-radius: 8px; background: #1e293b; color: #fff; font-size: 14px; font-weight: 700; cursor: pointer; transition: background 0.15s; }
        .filter-apply-btn:hover { background: #334155; }

        @media (max-width: 960px) {
          .cat-grid { grid-template-columns: 220px 1fr; }
          .products-grid { grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); }
        }

        @media (max-width: 768px) {
          .cat-grid { grid-template-columns: 1fr; }
          .cat-sidebar { position: static; display: none; }
          .products-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .product-card-img { height: 140px; }
          .toolbar-title { display: none; }
        }
      `}</style>
    </>
  )
}

export const getServerSideProps = async () => {
  try {
    const db = getDbPool()

    // Get all active categories
    const [cats] = await db.query(
      "SELECT id, name, slug FROM categories WHERE deleted_at IS NULL AND status = 'active' ORDER BY display_order ASC, name ASC"
    )

    // Get all active products
    const [products] = await db.query(
      `SELECT p.*, c.name AS category_name, c.slug AS category_slug
       FROM products p
       LEFT JOIN categories c ON c.id = p.category_id
       WHERE p.deleted_at IS NULL AND p.is_active = 1
       ORDER BY p.created_at DESC
       LIMIT 500`
    )

    // Get unique brands
    const brands = [...new Set(products.map((p) => p.brand).filter(Boolean))].sort()

    // Max price
    const maxPrice = Math.max(...products.map((p) => Number(p.price || 0)), 10000)

    return {
      props: {
        categories: JSON.parse(JSON.stringify(cats)),
        products: JSON.parse(JSON.stringify(products)),
        brands,
        maxPrice,
      },
    }
  } catch (e) {
    console.error('All products page error:', e)
    return { props: { categories: [], products: [], brands: [], maxPrice: 500000 } }
  }
}

export default AllProductsPage
