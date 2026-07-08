import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../../components/navigation'
import Footer from '../../components/footer'
import { getDbPool } from '../../lib/server/db'

const ContentDetailPage = ({ content, contentType }) => {
  if (!content) {
    return (
      <>
        <Navigation />
        <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <h1>Not Found</h1>
            <p>The content you're looking for doesn't exist.</p>
            <Link href="/"><a style={{ color: '#4f46e5', fontWeight: 700 }}>Go Home</a></Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{content.name} | MIS Solution</title>
        <meta name="description" content={content.description || content.name} />
        <link rel="icon" href="/footer%20logo.png" />
      </Head>

      <Navigation />

      <main className="content-detail-page">
        <article className="content-shell">
          {/* Hero Cover Photo with Title Overlay */}
          {content.icon_url ? (
            <div className="content-hero-cover">
              <img src={content.icon_url} alt={content.name || content.title} />
              <div className="content-hero-overlay" />
              <div className="content-hero-inner">
                <div className="breadcrumb">
                  <Link href="/"><a>Home</a></Link>
                  <span>/</span>
                  {contentType === 'digi_services' && <Link href="/digital-services"><a>Digital Services</a></Link>}
                  {contentType === 'bus_corp_sol' && <Link href="/enterprise-solutions"><a>Enterprise Solutions</a></Link>}
                  {contentType === 'service_maintenance' && <Link href="/maintenance-support"><a>Maintenance & Support</a></Link>}
                  {contentType === 'career_posts' && <Link href="/career"><a>Career</a></Link>}
                  {contentType === 'page_contents' && <Link href="/company-information-policies"><a>About</a></Link>}
                </div>
                <h1>{content.name || content.title}</h1>
                {content.description && (
                  <p className="content-hero-subtitle">{content.description}</p>
                )}
              </div>
            </div>
          ) : (
            <header className="content-header-nocover">
              <div className="breadcrumb">
                <Link href="/"><a>Home</a></Link>
                <span>/</span>
                {contentType === 'digi_services' && <Link href="/digital-services"><a>Digital Services</a></Link>}
                {contentType === 'bus_corp_sol' && <Link href="/enterprise-solutions"><a>Enterprise Solutions</a></Link>}
                {contentType === 'service_maintenance' && <Link href="/maintenance-support"><a>Maintenance & Support</a></Link>}
                {contentType === 'career_posts' && <Link href="/career"><a>Career</a></Link>}
                {contentType === 'page_contents' && <Link href="/company-information-policies"><a>About</a></Link>}
              </div>
              <h1>{content.name || content.title}</h1>
              {content.description && (
                <p className="content-summary">{content.description}</p>
              )}
            </header>
          )}

          <div className="content-body-wrap">
            {content.full_description && (
              <div
                className="content-body"
                dangerouslySetInnerHTML={{ __html: content.full_description }}
              />
            )}

            {!content.full_description && content.description && (
              <div className="content-body">
                <p>{content.description}</p>
              </div>
            )}

            <div className="content-cta-wrap">
              <Link href="/request-custom-quote">
                <a className="btn btn-primary btn-lg content-quote-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  <span>Request a Quote</span>
                </a>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />

      <style jsx>{`
        .content-detail-page { min-height: 100vh; background: #f8fafe; }
        .content-shell { width: 100%; }

        /* Full-width hero cover with title overlay */
        .content-hero-cover {
          position: relative;
          width: 100%;
          min-height: 380px;
          max-height: 440px;
          overflow: hidden;
        }

        .content-hero-cover img {
          width: 100%;
          height: 100%;
          min-height: 380px;
          max-height: 440px;
          object-fit: cover;
          display: block;
        }

        .content-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.65) 100%);
        }

        .content-hero-inner {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 40px 48px;
          color: #ffffff;
        }

        .content-hero-inner h1 {
          margin: 0;
          font-size: clamp(28px, 5vw, 42px);
          font-weight: 800;
          line-height: 1.2;
          text-shadow: 0 2px 12px rgba(0,0,0,0.3);
        }

        .content-hero-subtitle {
          margin: 10px 0 0;
          font-size: 16px;
          color: rgba(255,255,255,0.88);
          line-height: 1.6;
          max-width: 700px;
        }

        .content-hero-inner .breadcrumb { margin-bottom: 12px; }
        .content-hero-inner .breadcrumb span { color: rgba(255,255,255,0.7); }
        .content-hero-inner .breadcrumb :global(a) { color: rgba(255,255,255,0.9); text-decoration: none; font-weight: 600; }
        .content-hero-inner .breadcrumb :global(a:hover) { text-decoration: underline; }

        /* Fallback header when no cover photo */
        .content-header-nocover {
          max-width: 820px;
          margin: 0 auto;
          padding: 36px 20px 0;
        }

        .content-header-nocover h1 { margin: 0; font-size: clamp(24px, 4vw, 36px); color: #111827; font-weight: 800; line-height: 1.2; }
        .content-summary { margin: 12px 0 0; font-size: 17px; color: #4b5563; line-height: 1.7; }

        .breadcrumb { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #6b7280; }
        .breadcrumb :global(a) { color: #4f46e5; text-decoration: none; font-weight: 600; }
        .breadcrumb :global(a:hover) { text-decoration: underline; }

        .content-body-wrap {
          max-width: 820px;
          margin: 0 auto;
          padding: 36px 20px 64px;
        }

        .content-body {
          padding: 32px;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.03);
        }

        .content-body :global(h1) { font-size: 28px; margin: 0 0 16px; color: #111827; }
        .content-body :global(h2) { font-size: 22px; margin: 24px 0 12px; color: #1f2937; }
        .content-body :global(h3) { font-size: 18px; margin: 20px 0 10px; color: #374151; }
        .content-body :global(p) { margin: 0 0 14px; font-size: 15px; line-height: 1.8; color: #374151; }
        .content-body :global(ul), .content-body :global(ol) { margin: 0 0 14px; padding-left: 24px; }
        .content-body :global(li) { margin-bottom: 6px; font-size: 15px; line-height: 1.7; color: #374151; }
        .content-body :global(img) { max-width: 100%; height: auto; border-radius: 10px; margin: 16px 0; }
        .content-body :global(blockquote) { border-left: 4px solid #4f46e5; padding: 12px 20px; margin: 16px 0; background: #f5f3ff; border-radius: 0 8px 8px 0; color: #4338ca; font-style: italic; }
        .content-body :global(a) { color: #4f46e5; text-decoration: underline; }
        .content-body :global(strong) { font-weight: 700; }
        .content-body :global(table) { width: 100%; border-collapse: collapse; margin: 16px 0; }
        .content-body :global(th), .content-body :global(td) { border: 1px solid #e5e7eb; padding: 10px 14px; text-align: left; font-size: 14px; }
        .content-body :global(th) { background: #f9fafb; font-weight: 700; }

        .content-cta-wrap {
          margin-top: 28px;
          display: flex;
          justify-content: center;
        }

        .content-quote-btn {
          gap: 10px;
          font-size: 16px;
          padding: 14px 32px;
          border-radius: 10px;
          font-weight: 700;
          box-shadow: 0 4px 14px rgba(0,0,0,0.08);
          transition: transform 0.15s, box-shadow 0.15s;
        }

        .content-quote-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
        }

        @media (max-width: 767px) {
          .content-hero-cover { min-height: 280px; max-height: 320px; }
          .content-hero-cover img { min-height: 280px; max-height: 320px; }
          .content-hero-inner { padding: 24px 20px; }
          .content-hero-inner h1 { font-size: 24px; }
          .content-body-wrap { padding: 24px 16px 48px; }
          .content-body { padding: 20px; }
        }
      `}</style>
    </>
  )
}

export const getServerSideProps = async ({ params, query }) => {
  const slug = String(params?.slug || '').trim().toLowerCase()
  if (!slug) return { notFound: true }

  // Determine which table to search based on query param or try all
  const contentType = query.type || null
  const tables = contentType
    ? [contentType]
    : ['digi_services', 'bus_corp_sol', 'service_maintenance', 'page_contents', 'career_posts']

  try {
    const db = getDbPool()

    for (const table of tables) {
      const safeTable = ['digi_services', 'bus_corp_sol', 'service_maintenance', 'page_contents', 'career_posts'].includes(table) ? table : null
      if (!safeTable) continue

      // career_posts uses 'title' instead of 'name'
      const nameCol = safeTable === 'career_posts' ? 'title' : 'name'
      const slugCol = safeTable === 'career_posts' ? 'id' : 'slug'

      let rows
      if (safeTable === 'career_posts') {
        [rows] = await db.execute(
          `SELECT * FROM ${safeTable} WHERE id = ? LIMIT 1`,
          [slug]
        )
      } else {
        [rows] = await db.execute(
          `SELECT * FROM ${safeTable} WHERE LOWER(COALESCE(slug, '')) = ? AND deleted_at IS NULL LIMIT 1`,
          [slug]
        )
      }

      if (rows.length > 0) {
        return {
          props: {
            content: JSON.parse(JSON.stringify(rows[0])),
            contentType: safeTable,
          },
        }
      }
    }

    return { notFound: true }
  } catch (e) {
    console.error('Content detail error:', e)
    return { notFound: true }
  }
}

export default ContentDetailPage
