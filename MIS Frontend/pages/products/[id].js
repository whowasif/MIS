import React, { useMemo, useState } from 'react'
import Head from 'next/head'

import Navigation from '../../components/navigation'
import Footer from '../../components/footer'

const detailFallbacks = [
  'https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=1500',
  'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1500',
  'https://images.pexels.com/photos/159235/computer-technology-pc-electronics-159235.jpeg?auto=compress&cs=tinysrgb&w=1500',
]

const formatCurrency = (value) =>
  `$${Number(value || 0).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`

const ProductDetailPage = ({ product }) => {
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
  const stockLabel = stockQty > 0 ? `In stock (${stockQty})` : 'Contact for availability'

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
      const id = String(product.id)
      const existing = cart.find((item) => String(item.id) === id)

      if (existing) {
        existing.quantity += quantity
      } else {
        cart.push({
          id,
          name: product.name,
          price: Number(product.price || 0),
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

  return (
    <>
      <div className="product-detail-page">
        <Head>
          <title>{`${product.name} - Product Details`}</title>
          <meta name="description" content={product.description} />
        </Head>

        <Navigation></Navigation>

        <section className="product-detail-shell">
          <div className="product-detail-topline">
            <a className="catalog-back-link" href="/product-catalog">
              Back to Catalog
            </a>
            <span className="sku-chip">SKU #{product.id}</span>
          </div>

          <div className="product-detail-grid">
            <div className="gallery-panel">
              <div className="hero-image-wrap">
                <img src={activeImage} alt={product.name} />
              </div>

              <div className="thumb-row">
                {galleryImages.slice(0, 4).map((img) => (
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
            </div>

            <div className="info-panel">
              <div className="badge-row">
                <span className="type-chip">{product.type}</span>
                <span className="category-chip">{product.categoryName}</span>
              </div>

              <h1>{product.name}</h1>
              <p className="product-summary">{product.description}</p>

              <div className="price-row">
                <strong>{formatCurrency(product.price)}</strong>
                <span>{stockLabel}</span>
              </div>

              <div className="purchase-row">
                <div className="qty-control" aria-label="Quantity selector">
                  <button type="button" onClick={() => adjustQuantity(-1)}>
                    -
                  </button>
                  <span>{quantity}</span>
                  <button type="button" onClick={() => adjustQuantity(1)}>
                    +
                  </button>
                </div>

                <button type="button" className="btn btn-primary btn-lg" onClick={addToCart}>
                  Add to Cart
                </button>
              </div>

              <div className="spec-grid">
                <article>
                  <h3>Category</h3>
                  <p>{product.categoryName}</p>
                </article>
                <article>
                  <h3>Product Type</h3>
                  <p>{product.type}</p>
                </article>
                <article>
                  <h3>Stock</h3>
                  <p>{stockQty > 0 ? `${stockQty} units ready` : 'By request'}</p>
                </article>
                <article>
                  <h3>Support</h3>
                  <p>Standard enterprise support included</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <Footer></Footer>
      </div>

      <style jsx>{`
        .product-detail-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at 15% -10%, rgba(45, 117, 188, 0.2), transparent 45%),
            radial-gradient(circle at 80% -5%, rgba(231, 158, 56, 0.18), transparent 38%),
            linear-gradient(180deg, #f4f8ff 0%, #ffffff 100%);
        }

        .product-detail-shell {
          max-width: 1180px;
          margin: 0 auto;
          padding: 42px 20px 56px;
        }

        .product-detail-topline {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .catalog-back-link {
          color: #0e3a61;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
        }

        .catalog-back-link:hover {
          text-decoration: underline;
        }

        .sku-chip {
          border: 1px solid #c8d9eb;
          border-radius: 999px;
          padding: 6px 12px;
          font-size: 12px;
          color: #234f77;
          background: rgba(255, 255, 255, 0.8);
        }

        .product-detail-grid {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 26px;
          align-items: start;
        }

        .gallery-panel,
        .info-panel {
          border: 1px solid #d9e6f3;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.9);
          box-shadow: 0 20px 35px -32px rgba(17, 46, 88, 0.45);
        }

        .gallery-panel {
          padding: 16px;
        }

        .hero-image-wrap {
          border-radius: 16px;
          overflow: hidden;
          background: #eff4fb;
          aspect-ratio: 4/3;
        }

        .hero-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .thumb-row {
          margin-top: 12px;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 10px;
        }

        .thumb-btn {
          border: 2px solid transparent;
          border-radius: 12px;
          padding: 0;
          overflow: hidden;
          cursor: pointer;
          background: #fff;
          aspect-ratio: 1;
        }

        .thumb-btn img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .thumb-btn.is-active {
          border-color: #2d75bc;
        }

        .info-panel {
          padding: 26px;
        }

        .badge-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 14px;
        }

        .type-chip,
        .category-chip {
          border-radius: 999px;
          padding: 6px 12px;
          font-size: 12px;
          font-weight: 700;
        }

        .type-chip {
          background: #f0f8ff;
          color: #0f5e9e;
        }

        .category-chip {
          background: #fff7ec;
          color: #a55d00;
        }

        h1 {
          margin: 0;
          color: #12263a;
          font-size: clamp(26px, 4vw, 38px);
          line-height: 1.12;
        }

        .product-summary {
          margin: 14px 0 0;
          color: #4d637a;
          font-size: 16px;
          line-height: 1.65;
        }

        .price-row {
          margin-top: 22px;
          padding: 16px 18px;
          border-radius: 14px;
          background: linear-gradient(96deg, #0e395f 0%, #16548b 100%);
          color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
        }

        .price-row strong {
          font-size: 28px;
          line-height: 1;
        }

        .price-row span {
          font-size: 14px;
          opacity: 0.95;
        }

        .purchase-row {
          margin-top: 18px;
          display: flex;
          gap: 14px;
          align-items: center;
          flex-wrap: wrap;
        }

        .qty-control {
          border: 1px solid #d7e2f0;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          overflow: hidden;
          min-width: 132px;
          background: #fff;
        }

        .qty-control button {
          border: 0;
          background: #eef5ff;
          color: #0f3f68;
          width: 38px;
          height: 42px;
          cursor: pointer;
          font-size: 20px;
          line-height: 1;
        }

        .qty-control span {
          width: 56px;
          text-align: center;
          font-weight: 700;
          color: #173751;
        }

        .spec-grid {
          margin-top: 22px;
          display: grid;
          gap: 12px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .spec-grid article {
          border: 1px solid #dde8f5;
          border-radius: 14px;
          background: #f9fcff;
          padding: 12px 14px;
        }

        .spec-grid h3 {
          margin: 0;
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #67839f;
        }

        .spec-grid p {
          margin: 6px 0 0;
          color: #15334d;
          font-size: 14px;
          font-weight: 600;
        }

        @media (max-width: 940px) {
          .product-detail-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 620px) {
          .product-detail-shell {
            padding-top: 28px;
          }

          .product-detail-topline {
            gap: 12px;
            flex-direction: column;
            align-items: flex-start;
          }

          .thumb-row {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .price-row {
            flex-direction: column;
            align-items: flex-start;
          }

          .spec-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const { id } = context.params || {}

  try {
    const { getCatalogProductById } = await import('../../lib/server/products')
    const product = await getCatalogProductById(id)

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