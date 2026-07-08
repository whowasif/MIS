import React, { useCallback, useMemo, useRef, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Navigation from '../../components/navigation'
import Footer from '../../components/footer'

const detailFallbacks = [
  'https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=1500',
  'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1500',
  'https://images.pexels.com/photos/159235/computer-technology-pc-electronics-159235.jpeg?auto=compress&cs=tinysrgb&w=1500',
]

const formatCurrency = (value) =>
  `৳${Number(value || 0).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`

const getVideoEmbedUrl = (rawValue) => {
  const source = String(rawValue || '').trim()
  if (!source) return null

  if (/^https?:\/\/(www\.)?youtu\.be\//i.test(source)) {
    const id = source.split('youtu.be/')[1]?.split(/[?&#]/)[0]
    return id ? `https://www.youtube.com/embed/${id}` : null
  }

  if (/^https?:\/\/(www\.)?youtube\.com\/watch\?/i.test(source)) {
    try {
      const url = new URL(source)
      const id = url.searchParams.get('v')
      return id ? `https://www.youtube.com/embed/${id}` : null
    } catch (error) {
      return null
    }
  }

  if (/^https?:\/\/(www\.)?youtube\.com\/embed\//i.test(source)) {
    return source
  }

  if (/^https?:\/\/(player\.)?vimeo\.com\/video\//i.test(source)) {
    return source
  }

  if (/^https?:\/\/(www\.)?vimeo\.com\//i.test(source)) {
    const id = source.split('vimeo.com/')[1]?.split(/[?&#/]/)[0]
    return id ? `https://player.vimeo.com/video/${id}` : null
  }

  return null
}

const isDirectVideoFile = (value) => /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(String(value || ''))

const ProductDetailPage = ({ product }) => {
  const videoUrl = String(product?.videoUrl || '').trim()
  const videoEmbedUrl = useMemo(() => getVideoEmbedUrl(videoUrl), [videoUrl])
  const showDirectVideo = videoUrl && !videoEmbedUrl && (videoUrl.startsWith('/') || isDirectVideoFile(videoUrl))

  const galleryImages = useMemo(() => {
    const fromProduct = Array.isArray(product?.images)
      ? product.images.filter(Boolean)
      : []

    if (fromProduct.length > 0) return fromProduct
    if (product?.image) return [product.image, ...detailFallbacks]
    return detailFallbacks
  }, [product])

  const [activeImage, setActiveImage] = useState(galleryImages[0])
  const [quantity, setQuantity] = useState(1)

  const stockQty = Number(product?.stockQty || 0)
  const price = Number(product?.price || 0)
  const hasPrice = price > 0
  const stockLabel = stockQty > 0 ? 'In Stock' : 'Contact for availability'

  // Parse features
  const featuresList = useMemo(() => {
    const raw = product?.features || ''
    if (!raw) return []

    try {
      const parsed = JSON.parse(raw)
      if (Array.isArray(parsed)) return parsed.filter(Boolean)
    } catch (e) {
      // Not JSON, split by newlines
    }

    return raw.split(/\n|,/).map(s => s.trim()).filter(Boolean)
  }, [product])

  // Parse specifications
  const specsList = useMemo(() => {
    const raw = product?.specifications
    if (!raw) return []
    try {
      const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw
      if (parsed && typeof parsed === 'object') {
        return Object.entries(parsed).filter(([k, v]) => v).map(([key, value]) => ({ key: key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()), value }))
      }
    } catch (e) {}
    return []
  }, [product])

  // Zoom feature state
  const zoomContainerRef = useRef(null)
  const [isZooming, setIsZooming] = useState(false)
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 })

  const handleZoomMove = useCallback((e) => {
    const container = zoomContainerRef.current
    if (!container) return

    const rect = container.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    setZoomPosition({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) })
  }, [])

  const handleZoomEnter = useCallback(() => setIsZooming(true), [])
  const handleZoomLeave = useCallback(() => setIsZooming(false), [])

  const adjustQuantity = (delta) => {
    setQuantity((prev) => {
      const next = prev + delta
      if (next < 1) return 1
      if (stockQty > 0) return Math.min(next, stockQty)
      return Math.min(next, 99)
    })
  }

  const addToCart = () => {
    if (typeof window === 'undefined') return

    const cartKey = 'misCart'
    const image = activeImage || galleryImages[0] || ''

    try {
      const stored = window.localStorage.getItem(cartKey)
      const cart = stored ? JSON.parse(stored) : []
      const id = String(product.slug || product.id)
      const existing = cart.find((item) => String(item.id) === id)

      if (existing) {
        existing.quantity += quantity
      } else {
        cart.push({
          id,
          productId: product.id,
          name: product.name,
          price,
          image,
          quantity,
        })
      }

      window.localStorage.setItem(cartKey, JSON.stringify(cart))
      window.dispatchEvent(new Event('mis-cart-updated'))
      window.dispatchEvent(new Event('open-mis-cart'))
    } catch (error) {
      console.error('Unable to add item to cart', error)
    }
  }

  const shortDesc = product?.shortDesc || ''
  const longDesc = product?.longDesc || ''
  const displayDescription = longDesc || shortDesc || ''

  return (
    <>
      <div className="product-detail-page">
        <Head>
          <title>{`${product.name} - MIS Solution`}</title>
          <meta name="description" content={shortDesc || product.name} />
        </Head>

        <Navigation></Navigation>

        <section className="product-detail-shell">
          <div className="product-detail-topline">
            <a className="catalog-back-link" href="/product-catalog">
              ← Back to Catalog
            </a>
          </div>

          <div className="product-detail-grid">
            {/* Left: Gallery */}
            <div className="gallery-panel">
              <div
                className={`hero-image-wrap ${isZooming ? 'is-zooming' : ''}`}
                ref={zoomContainerRef}
                onMouseMove={handleZoomMove}
                onMouseEnter={handleZoomEnter}
                onMouseLeave={handleZoomLeave}
              >
                <img src={activeImage} alt={product.name} className="hero-img" />
                <div
                  className="zoom-overlay"
                  style={{
                    backgroundImage: `url(${activeImage})`,
                    backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                  }}
                />
                <div className="zoom-hint">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                  <span>Hover to zoom</span>
                </div>
              </div>

              {galleryImages.length > 1 && (
                <div className="thumb-row">
                  {galleryImages.slice(0, 5).map((img) => (
                    <button
                      key={img}
                      className={`thumb-btn ${activeImage === img ? 'is-active' : ''}`}
                      onClick={() => setActiveImage(img)}
                      type="button"
                      aria-label="Switch product image"
                    >
                      <img src={img} alt={`${product.name} preview`} />
                    </button>
                  ))}
                </div>
              )}

              {videoUrl ? (
                <div className="video-panel">
                  <h3>Product Video</h3>
                  {videoEmbedUrl ? (
                    <div className="video-frame">
                      <iframe
                        src={videoEmbedUrl}
                        title={`${product.name} video`}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  ) : null}

                  {showDirectVideo ? (
                    <div className="video-frame">
                      <video controls preload="metadata" playsInline>
                        <source src={videoUrl} type="video/mp4" />
                      </video>
                    </div>
                  ) : null}

                  {!videoEmbedUrl && !showDirectVideo ? (
                    <p className="video-note">Video link saved but format is not embeddable.</p>
                  ) : null}
                </div>
              ) : null}
            </div>

            {/* Right: Product Info */}
            <div className="info-panel">
              <div className="badge-row">
                <span className="type-chip">{product.type}</span>
                <Link href={`/categories/${encodeURIComponent(product.categorySlug || product.filterCategory || 'general')}`}>
                  <a className="category-chip">{product.categoryName}</a>
                </Link>
              </div>

              <h1>{product.name}</h1>

              {shortDesc && (
                <p className="product-summary">{shortDesc}</p>
              )}

              {/* Price & Stock Section */}
              <div className="price-stock-section">
                <div className="price-block">
                  {hasPrice ? (
                    <span className="price-value">{formatCurrency(price)}</span>
                  ) : (
                    <span className="price-value price-contact">Request a Quote</span>
                  )}
                </div>
                <div className="stock-block">
                  <span className={`stock-indicator ${stockQty > 0 ? 'in-stock' : 'out-stock'}`} />
                  <span className="stock-text">{stockLabel}</span>
                </div>
              </div>

              {/* Add to Cart (only if priced product) */}
              {hasPrice ? (
                <div className="purchase-row">
                  <div className="qty-control" aria-label="Quantity selector">
                    <button type="button" onClick={() => adjustQuantity(-1)} aria-label="Decrease quantity">−</button>
                    <span>{quantity}</span>
                    <button type="button" onClick={() => adjustQuantity(1)} aria-label="Increase quantity">+</button>
                  </div>
                  <button type="button" className="add-to-cart-btn" onClick={addToCart}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="9" cy="21" r="1" />
                      <circle cx="20" cy="21" r="1" />
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                    Add to Cart
                  </button>
                </div>
              ) : (
                <div className="purchase-row">
                  <a href="/contact" className="contact-btn">
                    Contact Sales for Pricing
                  </a>
                </div>
              )}

              {/* Product Details Table */}
              <div className="details-table">
                <h3 className="section-title">Product Details</h3>
                <table>
                  <tbody>
                    <tr>
                      <td className="dt-label">Category</td>
                      <td className="dt-value">{product.categoryName}</td>
                    </tr>
                    <tr>
                      <td className="dt-label">Type</td>
                      <td className="dt-value">{product.type}</td>
                    </tr>
                    {product.brand && (
                      <tr>
                        <td className="dt-label">Brand</td>
                        <td className="dt-value">{product.brand}</td>
                      </tr>
                    )}
                    {product.model && (
                      <tr>
                        <td className="dt-label">Model</td>
                        <td className="dt-value">{product.model}</td>
                      </tr>
                    )}
                    {hasPrice && (
                      <tr>
                        <td className="dt-label">Unit Price</td>
                        <td className="dt-value">{formatCurrency(price)}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Features (if available) */}
              {featuresList.length > 0 && (
                <div className="features-section">
                  <h3 className="section-title">Key Features</h3>
                  <ul className="features-list">
                    {featuresList.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Specifications Section */}
          {specsList.length > 0 && (
            <section className="description-section">
              <h2>Specifications</h2>
              <div className="description-content">
                <table className="specs-table">
                  <tbody>
                    {specsList.map((spec, idx) => (
                      <tr key={idx}>
                        <td className="spec-label">{spec.key}</td>
                        <td className="spec-value">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Full Description (below the grid) */}
          {displayDescription && (
            <section className="description-section">
              <h2>Description</h2>
              <div className="description-content">
                <p>{displayDescription}</p>
              </div>
            </section>
          )}
        </section>

        <Footer></Footer>
      </div>

      <style jsx>{`
        .product-detail-page {
          min-height: 100vh;
          background: #f8fafe;
        }

        .product-detail-shell {
          max-width: 1200px;
          margin: 0 auto;
          padding: 32px 20px 64px;
        }

        .product-detail-topline {
          margin-bottom: 20px;
        }

        .catalog-back-link {
          color: #1a5276;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.15s ease;
        }

        .catalog-back-link:hover {
          color: #0d3b5e;
          text-decoration: underline;
        }

        .product-detail-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: start;
        }

        /* Gallery Panel */
        .gallery-panel {
          position: sticky;
          top: 24px;
          border: 1px solid #e2eaf3;
          border-radius: 16px;
          background: #ffffff;
          padding: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .hero-image-wrap {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          background: #f0f4f9;
          aspect-ratio: 4/3;
          cursor: crosshair;
        }

        .hero-image-wrap .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: opacity 0.3s ease;
        }

        .hero-image-wrap.is-zooming .hero-img {
          opacity: 0;
        }

        .zoom-overlay {
          position: absolute;
          inset: 0;
          background-size: 250%;
          background-repeat: no-repeat;
          opacity: 0;
          transition: opacity 0.25s ease;
          pointer-events: none;
        }

        .hero-image-wrap.is-zooming .zoom-overlay {
          opacity: 1;
        }

        .zoom-hint {
          position: absolute;
          bottom: 12px;
          right: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 8px;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(6px);
          color: #ffffff;
          font-size: 12px;
          font-weight: 500;
          pointer-events: none;
          opacity: 1;
          transition: opacity 0.25s ease;
        }

        .hero-image-wrap.is-zooming .zoom-hint {
          opacity: 0;
        }

        .thumb-row {
          margin-top: 12px;
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 8px;
        }

        .thumb-btn {
          border: 2px solid transparent;
          border-radius: 10px;
          padding: 0;
          overflow: hidden;
          cursor: pointer;
          background: #f5f8fc;
          aspect-ratio: 1;
          transition: border-color 0.15s ease, transform 0.15s ease;
        }

        .thumb-btn:hover {
          transform: scale(1.04);
        }

        .thumb-btn img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .thumb-btn.is-active {
          border-color: #1a5276;
        }

        .video-panel {
          margin-top: 16px;
          border: 1px solid #e8eff7;
          border-radius: 12px;
          padding: 14px;
          background: #f9fbfe;
        }

        .video-panel h3 {
          margin: 0 0 10px;
          color: #1a3a55;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .video-frame {
          border-radius: 10px;
          overflow: hidden;
          background: #0f2235;
          aspect-ratio: 16/9;
        }

        .video-frame iframe,
        .video-frame video {
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
        }

        .video-note {
          margin: 8px 0 0;
          color: #5c7a94;
          font-size: 13px;
        }

        /* Info Panel */
        .info-panel {
          border: 1px solid #e2eaf3;
          border-radius: 16px;
          background: #ffffff;
          padding: 28px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .badge-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 16px;
        }

        .type-chip,
        .category-chip {
          border-radius: 6px;
          padding: 5px 10px;
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
        }

        .type-chip {
          background: #e8f4fd;
          color: #0d4a7a;
        }

        .category-chip {
          background: #fef6e8;
          color: #8a5200;
        }

        .category-chip:hover {
          background: #fdefd3;
        }

        h1 {
          margin: 0;
          color: #111827;
          font-size: clamp(22px, 3.5vw, 32px);
          font-weight: 800;
          line-height: 1.2;
        }

        .product-summary {
          margin: 12px 0 0;
          color: #4b5563;
          font-size: 15px;
          line-height: 1.7;
        }

        /* Price & Stock */
        .price-stock-section {
          margin-top: 24px;
          padding: 18px 20px;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          background: #f9fafb;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .price-value {
          font-size: 28px;
          font-weight: 800;
          color: #111827;
          line-height: 1;
        }

        .price-contact {
          font-size: 18px;
          color: #1a5276;
        }

        .stock-block {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .stock-indicator {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .stock-indicator.in-stock {
          background: #10b981;
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);
        }

        .stock-indicator.out-stock {
          background: #f59e0b;
          box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.2);
        }

        .stock-text {
          font-size: 14px;
          font-weight: 600;
          color: #374151;
        }

        /* Purchase Row */
        .purchase-row {
          margin-top: 20px;
          display: flex;
          gap: 12px;
          align-items: center;
          flex-wrap: wrap;
        }

        .qty-control {
          border: 1px solid #d1d5db;
          border-radius: 10px;
          display: inline-flex;
          align-items: center;
          overflow: hidden;
          background: #fff;
        }

        .qty-control button {
          border: 0;
          background: #f3f4f6;
          color: #1f2937;
          width: 40px;
          height: 44px;
          cursor: pointer;
          font-size: 18px;
          font-weight: 600;
          transition: background 0.15s ease;
        }

        .qty-control button:hover {
          background: #e5e7eb;
        }

        .qty-control span {
          width: 48px;
          text-align: center;
          font-weight: 700;
          font-size: 15px;
          color: #111827;
        }

        .add-to-cart-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          height: 44px;
          padding: 0 24px;
          border: 0;
          border-radius: 10px;
          background: #1a5276;
          color: #ffffff;
          font: inherit;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.15s ease, transform 0.1s ease;
        }

        .add-to-cart-btn:hover {
          background: #123d5a;
        }

        .add-to-cart-btn:active {
          transform: scale(0.97);
        }

        .contact-btn {
          display: inline-flex;
          align-items: center;
          height: 44px;
          padding: 0 24px;
          border: 2px solid #1a5276;
          border-radius: 10px;
          background: transparent;
          color: #1a5276;
          font: inherit;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          transition: background 0.15s ease, color 0.15s ease;
        }

        .contact-btn:hover {
          background: #1a5276;
          color: #ffffff;
        }

        /* Product Details Table */
        .details-table {
          margin-top: 28px;
        }

        .section-title {
          margin: 0 0 14px;
          font-size: 14px;
          font-weight: 700;
          color: #111827;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .details-table table {
          width: 100%;
          border-collapse: collapse;
        }

        .details-table tr {
          border-bottom: 1px solid #f3f4f6;
        }

        .details-table tr:last-child {
          border-bottom: none;
        }

        .dt-label {
          padding: 10px 12px 10px 0;
          color: #6b7280;
          font-size: 14px;
          font-weight: 500;
          width: 40%;
          vertical-align: top;
        }

        .dt-value {
          padding: 10px 0;
          color: #111827;
          font-size: 14px;
          font-weight: 600;
        }

        /* Features */
        .features-section {
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid #f3f4f6;
        }

        .features-list {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .features-list li {
          position: relative;
          padding: 6px 0 6px 22px;
          color: #374151;
          font-size: 14px;
          line-height: 1.5;
        }

        .features-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 13px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #1a5276;
          opacity: 0.6;
        }

        /* Description Section (full width below the grid) */
        .description-section {
          margin-top: 40px;
          padding: 28px;
          border: 1px solid #e2eaf3;
          border-radius: 16px;
          background: #ffffff;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .description-section h2 {
          margin: 0 0 16px;
          font-size: 18px;
          font-weight: 700;
          color: #111827;
        }

        .description-content p {
          margin: 0;
          color: #4b5563;
          font-size: 15px;
          line-height: 1.8;
          white-space: pre-wrap;
        }

        /* Responsive */
        @media (max-width: 960px) {
          .product-detail-grid {
            grid-template-columns: 1fr;
          }

          .gallery-panel {
            position: static;
          }
        }

        /* Specifications */
        .specs-section { margin-top: 24px; padding-top: 24px; border-top: 1px solid #f3f4f6; }
        .specs-table { width: 100%; border-collapse: collapse; }
        .specs-table tr { border-bottom: 1px solid #f3f4f6; }
        .specs-table tr:last-child { border-bottom: none; }
        .spec-label { padding: 10px 12px 10px 0; color: #6b7280; font-size: 14px; font-weight: 500; width: 40%; text-transform: capitalize; }
        .spec-value { padding: 10px 0; color: #111827; font-size: 14px; font-weight: 600; }

        @media (max-width: 600px) {
          .product-detail-shell {
            padding-top: 20px;
          }

          .info-panel {
            padding: 20px;
          }

          .thumb-row {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }

          .price-stock-section {
            flex-direction: column;
            align-items: flex-start;
          }

          .purchase-row {
            flex-direction: column;
            align-items: stretch;
          }

          .add-to-cart-btn,
          .contact-btn {
            justify-content: center;
            width: 100%;
          }

          .description-section {
            padding: 20px;
          }
        }

        /* Specifications */
        .specs-section {
          margin-top: 32px;
          padding: 28px;
          border: 1px solid #e2eaf3;
          border-radius: 16px;
          background: #ffffff;
          box-shadow: 0 4px 20px rgba(0,0,0,0.04);
        }
        .specs-section h2 { margin: 0 0 16px; font-size: 18px; font-weight: 700; color: #111827; }
        .specs-table { width: 100%; border-collapse: collapse; }
        .specs-table tr { border-bottom: 1px solid #f3f4f6; }
        .specs-table tr:last-child { border-bottom: none; }
        .spec-key { padding: 10px 12px; font-size: 14px; color: #6b7280; font-weight: 500; width: 40%; text-transform: capitalize; }
        .spec-val { padding: 10px 12px; font-size: 14px; color: #111827; font-weight: 600; }
      `}</style>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const { slug } = context.params || {}

  try {
    const { getCatalogProductBySlug } = await import('../../lib/server/products')
    const product = await getCatalogProductBySlug(slug)

    if (!product) {
      return { notFound: true }
    }

    return {
      props: {
        product,
      },
    }
  } catch (error) {
    return { notFound: true }
  }
}

export default ProductDetailPage