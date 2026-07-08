import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../components/navigation'
import Footer from '../components/footer'

const formatCurrency = (v) => `৳${Number(v || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`

const SearchPage = ({ query, products = [], services = [] }) => {
  const totalResults = products.length + services.length

  return (
    <>
      <Head>
        <title>{query ? `Search: ${query}` : 'Search'} | MIS Solution</title>
        <link rel="icon" href="/footer%20logo.png" />
      </Head>

      <Navigation />

      <main className="search-page">
        <div className="search-shell">
          <header className="search-header">
            <h1>Search Results</h1>
            {query && <p>Showing {totalResults} result{totalResults !== 1 ? 's' : ''} for "<strong>{query}</strong>"</p>}
          </header>

          {totalResults === 0 && query && (
            <div className="empty-state">
              <p>No products or services found matching your search.</p>
              <Link href="/product-catalog"><a className="browse-link">Browse All Products</a></Link>
            </div>
          )}

          {/* Products Section */}
          {products.length > 0 && (
            <section className="results-section">
              <h2>Products ({products.length})</h2>
              <div className="results-grid">
                {products.map((product) => (
                  <Link key={product.id} href={`/products/${encodeURIComponent(product.slug || product.id)}`}>
                    <a className="result-card">
                      <div className="result-image">
                        {product.thumbnail_1 ? (
                          <img src={product.thumbnail_1} alt={product.name} />
                        ) : (
                          <div className="no-img">No Image</div>
                        )}
                      </div>
                      <div className="result-info">
                        <h3>{product.name}</h3>
                        <span className="result-meta">{product.category_name || product.type}</span>
                        {product.short_desc && <p className="result-desc">{product.short_desc.substring(0, 100)}</p>}
                        {Number(product.price) > 0 && <strong className="result-price">{formatCurrency(product.price)}</strong>}
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Services Section */}
          {services.length > 0 && (
            <section className="results-section">
              <h2>Services ({services.length})</h2>
              <div className="results-grid">
                {services.map((service) => (
                  <Link key={`${service.page_type}-${service.id}`} href={`/services/${encodeURIComponent(service.slug || service.id)}?type=${service.page_type === 'digital-services' ? 'digi_services' : service.page_type === 'enterprise-solutions' ? 'bus_corp_sol' : 'service_maintenance'}`}>
                    <a className="result-card">
                      <div className="result-info">
                        <span className="result-badge">{service.page_type === 'digital-services' ? 'Digital Service' : service.page_type === 'enterprise-solutions' ? 'Enterprise Solution' : 'Maintenance'}</span>
                        <h3>{service.name}</h3>
                        {service.description && <p className="result-desc">{service.description.substring(0, 120)}</p>}
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .search-page { min-height: 100vh; background: #f8fafe; }
        .search-shell { max-width: 1000px; margin: 0 auto; padding: 36px 20px 60px; }

        .search-header { margin-bottom: 28px; }
        .search-header h1 { margin: 0; font-size: 28px; color: #111827; }
        .search-header p { margin: 8px 0 0; color: #6b7280; font-size: 15px; }
        .search-header strong { color: #111827; }

        .empty-state { text-align: center; padding: 48px 20px; border: 1px dashed #d1d5db; border-radius: 14px; background: #fff; }
        .empty-state p { margin: 0 0 16px; color: #6b7280; }
        .browse-link { color: #4f46e5; font-weight: 700; text-decoration: none; }

        .results-section { margin-bottom: 32px; }
        .results-section h2 { margin: 0 0 16px; font-size: 18px; color: #111827; font-weight: 700; }

        .results-grid { display: grid; gap: 12px; }

        .result-card { display: flex; gap: 16px; border: 1px solid #e5e7eb; border-radius: 12px; background: #fff; padding: 16px; text-decoration: none; color: inherit; transition: box-shadow 0.15s, border-color 0.15s; }
        .result-card:hover { border-color: #a5b4fc; box-shadow: 0 4px 16px rgba(0,0,0,0.06); }

        .result-image { width: 80px; height: 80px; flex-shrink: 0; border-radius: 10px; overflow: hidden; background: #f3f4f6; }
        .result-image img { width: 100%; height: 100%; object-fit: cover; }
        .no-img { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 11px; color: #9ca3af; }

        .result-info { flex: 1; min-width: 0; }
        .result-info h3 { margin: 0 0 4px; font-size: 16px; color: #111827; }
        .result-meta { font-size: 12px; color: #6b7280; }
        .result-badge { display: inline-block; padding: 2px 8px; border-radius: 4px; background: #eff6ff; color: #1d4ed8; font-size: 11px; font-weight: 700; margin-bottom: 4px; }
        .result-desc { margin: 6px 0 0; font-size: 13px; color: #4b5563; line-height: 1.5; }
        .result-price { display: block; margin-top: 6px; font-size: 15px; color: #111827; }

        @media (max-width: 600px) {
          .result-card { flex-direction: column; }
          .result-image { width: 100%; height: 160px; }
        }
      `}</style>
    </>
  )
}

export const getServerSideProps = async ({ query: params }) => {
  const q = String(params.q || '').trim()

  if (!q || q.length < 2) {
    return { props: { query: q, products: [], services: [] } }
  }

  try {
    const { getDbPool } = await import('../lib/server/db')
    const db = getDbPool()
    const searchPattern = `%${q}%`

    const [products] = await db.execute(
      `SELECT p.id, p.name, p.slug, p.short_desc, p.price, p.type, p.thumbnail_1, p.brand, p.model,
              c.name AS category_name
       FROM products p
       LEFT JOIN categories c ON c.id = p.category_id
       WHERE p.deleted_at IS NULL AND p.is_active = 1
         AND (p.name LIKE ? OR p.short_desc LIKE ? OR p.type LIKE ? OR p.brand LIKE ? OR p.model LIKE ?)
       ORDER BY p.name ASC LIMIT 20`,
      [searchPattern, searchPattern, searchPattern, searchPattern, searchPattern]
    )

    const [digiServices] = await db.execute(
      `SELECT id, name, slug, description, 'digital-services' AS page_type FROM digi_services WHERE deleted_at IS NULL AND status = 'active' AND (name LIKE ? OR description LIKE ?) LIMIT 5`,
      [searchPattern, searchPattern]
    )
    const [bizServices] = await db.execute(
      `SELECT id, name, slug, description, 'enterprise-solutions' AS page_type FROM bus_corp_sol WHERE deleted_at IS NULL AND status = 'active' AND (name LIKE ? OR description LIKE ?) LIMIT 5`,
      [searchPattern, searchPattern]
    )
    const [maintServices] = await db.execute(
      `SELECT id, name, slug, description, 'maintenance-support' AS page_type FROM service_maintenance WHERE deleted_at IS NULL AND status = 'active' AND (name LIKE ? OR description LIKE ?) LIMIT 5`,
      [searchPattern, searchPattern]
    )

    return {
      props: {
        query: q,
        products: JSON.parse(JSON.stringify(products)),
        services: JSON.parse(JSON.stringify([...digiServices, ...bizServices, ...maintServices])),
      },
    }
  } catch (e) {
    return { props: { query: q, products: [], services: [] } }
  }
}

export default SearchPage
