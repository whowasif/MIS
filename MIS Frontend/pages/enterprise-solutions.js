import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const fallbackItems = [
  { id: 'b2b-1', name: 'Data Center Solution', description: 'End-to-end enterprise data center design and deployment.' },
  { id: 'b2b-2', name: 'Structured Cabling', description: 'Reliable structured cabling for modern enterprise infrastructure.' },
  { id: 'b2b-3', name: 'CCTV Camera / IP Camera', description: 'Scalable surveillance architecture for corporate security.' },
  { id: 'b2b-4', name: 'Corporate ID Card Printing', description: 'Bulk professional printing support for enterprise operations.' },
]

const EnterpriseSolutions = ({ services = [] }) => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState(router.query.search || '')
  const [viewMode, setViewMode] = useState('list')
  const sourceItems = Array.isArray(services) && services.length > 0 ? services : fallbackItems
  const filteredItems = searchTerm.trim()
    ? sourceItems.filter((s) => s.name.toLowerCase().includes(searchTerm.toLowerCase()) || (s.description || '').toLowerCase().includes(searchTerm.toLowerCase()))
    : sourceItems

  return (
    <>
      <div className="enterprise-solutions-page">
        <Head>
          <title>Business & Corporate Solutions - MIS Solution</title>
          <meta property="og:title" content="Business & Corporate Solutions - MIS Solution" />
        </Head>

        <Navigation />

        <section className="enterprise-hero">
          <div className="enterprise-hero-overlay"></div>
          <div className="enterprise-hero-inner">
            <h1 className="hero-title">Business & Corporate Solutions</h1>
            <p className="hero-subtitle">Project-based B2B solutions designed for infrastructure, networking, security, and enterprise delivery.</p>
            <a href="#b2b-catalog" className="btn btn-primary btn-lg"><span>Explore B2B Solutions</span></a>
          </div>
        </section>

        <section id="b2b-catalog" className="services-listing">
          <div className="services-container">
            <div className="toolbar">
              <input type="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search enterprise solutions..." className="page-search-input" />
              <div className="view-toggle">
                <button className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`} onClick={() => setViewMode('list')} aria-label="List view">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>
                </button>
                <button className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`} onClick={() => setViewMode('grid')} aria-label="Grid view">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                </button>
              </div>
            </div>

            {viewMode === 'list' ? (
              <div className="list-view">
                {filteredItems.map((item, idx) => (
                  <Link key={item.id} href={`/services/${encodeURIComponent(item.slug || item.id)}?type=bus_corp_sol`}>
                    <a className={`list-card ${idx % 2 === 0 ? 'text-first' : 'img-first'}`}>
                      <div className="list-card-text">
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <span className="card-link">View Details →</span>
                      </div>
                      <div className="list-card-img">
                        {item.iconUrl ? <img src={item.iconUrl} alt={item.name} /> : <div className="card-placeholder">{item.name.charAt(0)}</div>}
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="grid-view">
                {filteredItems.map((item) => (
                  <Link key={item.id} href={`/services/${encodeURIComponent(item.slug || item.id)}?type=bus_corp_sol`}>
                    <a className="grid-card">
                      <div className="grid-card-img">
                        {item.iconUrl ? <img src={item.iconUrl} alt={item.name} /> : <div className="card-placeholder">{item.name.charAt(0)}</div>}
                      </div>
                      <div className="grid-card-text">
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <span className="card-link">View Details →</span>
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>

      <style jsx>{`
        .enterprise-solutions-page { width: 100%; min-height: 100vh; background: #ffffff; }
        .enterprise-hero { width: 100%; min-height: 430px; position: relative; display: flex; align-items: center; justify-content: center; background-image: url('https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1500'); background-size: cover; background-position: center; }
        .enterprise-hero-overlay { position: absolute; inset: 0; background: rgba(15, 23, 42, 0.66); }
        .enterprise-hero-inner { position: relative; z-index: 1; max-width: 980px; width: 100%; text-align: center; color: #ffffff; padding: 110px 20px 70px; }

        .services-listing { padding: 48px 20px 72px; background: #f8fafc; }
        .services-container { width: 100%; max-width: 1180px; margin: 0 auto; }

        .toolbar { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; flex-wrap: wrap; }
        .toolbar .page-search-input { flex: 1; min-width: 200px; padding: 12px 18px; border: 1px solid #e2e8f0; border-radius: 10px; font-size: 14px; background: #fff; }
        .toolbar .page-search-input:focus { outline: none; border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,0.1); }
        .view-toggle { display: flex; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; }
        .toggle-btn { border: none; background: #fff; padding: 10px 14px; cursor: pointer; display: flex; align-items: center; color: #6b7280; transition: all 0.15s; }
        .toggle-btn.active { background: #4f46e5; color: #fff; }
        .toggle-btn:not(.active):hover { background: #f3f4f6; }

        .list-view { display: flex; flex-direction: column; gap: 16px; }
        .list-card { display: grid; grid-template-columns: 1fr 1fr; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; background: #fff; text-decoration: none; color: inherit; transition: box-shadow 0.2s, transform 0.15s; min-height: 200px; }
        .list-card:hover { box-shadow: 0 12px 32px rgba(0,0,0,0.08); transform: translateY(-2px); }
        .list-card.img-first { direction: rtl; }
        .list-card.img-first > * { direction: ltr; }
        .list-card-text { padding: 28px; display: flex; flex-direction: column; justify-content: center; gap: 8px; }
        .list-card-text h3 { margin: 0; font-size: 18px; color: #111827; font-weight: 700; }
        .list-card-text p { margin: 0; font-size: 14px; color: #4b5563; line-height: 1.7; }
        .card-link { font-size: 13px; font-weight: 700; color: #4f46e5; }
        .list-card-img { background: #f1f5f9; overflow: hidden; }
        .list-card-img img { width: 100%; height: 100%; object-fit: cover; }

        .grid-view { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }
        .grid-card { border-radius: 14px; overflow: hidden; border: 1px solid #e2e8f0; background: #fff; text-decoration: none; color: inherit; transition: box-shadow 0.2s, transform 0.15s; display: flex; flex-direction: column; }
        .grid-card:hover { box-shadow: 0 12px 28px rgba(0,0,0,0.08); transform: translateY(-3px); }
        .grid-card-img { height: 180px; background: #f1f5f9; overflow: hidden; }
        .grid-card-img img { width: 100%; height: 100%; object-fit: cover; }
        .grid-card-text { padding: 18px; display: flex; flex-direction: column; gap: 6px; flex: 1; }
        .grid-card-text h3 { margin: 0; font-size: 16px; color: #111827; font-weight: 700; }
        .grid-card-text p { margin: 0; font-size: 13px; color: #4b5563; line-height: 1.6; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }

        .card-placeholder { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 56px; font-weight: 800; color: #cbd5e1; background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); }

        @media (max-width: 767px) {
          .enterprise-hero-inner { padding-top: 94px; padding-bottom: 56px; }
          .list-card { grid-template-columns: 3fr 2fr; min-height: 160px; }
          .list-card.img-first { direction: rtl; }
          .list-card.img-first > * { direction: ltr; }
          .list-card-img { height: 100%; min-height: 160px; }
          .list-card-text { padding: 16px; }
          .list-card-text h3 { font-size: 15px; }
          .list-card-text p { font-size: 12px; -webkit-line-clamp: 3; display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden; }
          .grid-view { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}

export const getServerSideProps = async () => {
  try {
    const { listBusinessSolutionEntries } = await import('../lib/server/products')
    const services = await listBusinessSolutionEntries(120)
    return { props: { services } }
  } catch (error) {
    return { props: { services: [] } }
  }
}

export default EnterpriseSolutions
