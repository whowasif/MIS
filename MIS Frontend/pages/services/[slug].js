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
                  <Link href="/core-it-solutions"><a>Core IT Solutions</a></Link>
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
                <Link href="/core-it-solutions"><a>Core IT Solutions</a></Link>
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
              <div className="content-body-modern">
                <div className="content-accent-bar" />
                <div
                  className="content-rich-html"
                  dangerouslySetInnerHTML={{ __html: content.full_description }}
                />
              </div>
            )}

            {!content.full_description && content.description && (
              <div className="content-body-modern">
                <div className="content-accent-bar" />
                <div className="content-rich-html">
                  <p>{content.description}</p>
                </div>
              </div>
            )}

            <div className="content-cta-wrap">
              <Link href="/request-custom-quote">
                <a className="content-cta-btn">
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
          max-width: 900px;
          margin: 0 auto;
          padding: 48px 20px 72px;
        }

        .content-body-modern {
          position: relative;
          padding: 48px 48px 48px 56px;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 20px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.02);
          overflow: hidden;
        }

        .content-accent-bar {
          position: absolute;
          top: 0;
          left: 0;
          width: 5px;
          height: 100%;
          background: linear-gradient(180deg, #f7e500 0%, #eab308 50%, #ca8a04 100%);
          border-radius: 20px 0 0 20px;
        }

        .content-rich-html :global(h1) { font-size: 30px; margin: 0 0 20px; color: #0f172a; font-weight: 800; letter-spacing: -0.02em; line-height: 1.3; }
        .content-rich-html :global(h2) { font-size: 22px; margin: 36px 0 14px; color: #1e293b; font-weight: 700; letter-spacing: -0.01em; padding-bottom: 10px; border-bottom: 2px solid #f1f5f9; }
        .content-rich-html :global(h3) { font-size: 18px; margin: 28px 0 10px; color: #334155; font-weight: 700; }
        .content-rich-html :global(p) { margin: 0 0 16px; font-size: 15.5px; line-height: 1.85; color: #475569; }
        .content-rich-html :global(ul), .content-rich-html :global(ol) { margin: 0 0 20px; padding-left: 0; list-style: none; }
        .content-rich-html :global(li) { position: relative; margin-bottom: 10px; font-size: 15px; line-height: 1.75; color: #475569; padding-left: 28px; }
        .content-rich-html :global(li::before) { content: ''; position: absolute; left: 0; top: 10px; width: 8px; height: 8px; background: linear-gradient(135deg, #f7e500, #eab308); border-radius: 50%; }
        .content-rich-html :global(ol li::before) { content: counter(li-counter); counter-increment: li-counter; background: #1e293b; color: #fff; font-size: 11px; font-weight: 700; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; top: 4px; }
        .content-rich-html :global(ol) { counter-reset: li-counter; }
        .content-rich-html :global(img) { max-width: 100%; height: auto; border-radius: 14px; margin: 24px 0; box-shadow: 0 8px 32px rgba(0,0,0,0.08); }
        .content-rich-html :global(blockquote) { border-left: 4px solid #f7e500; padding: 16px 24px; margin: 24px 0; background: linear-gradient(135deg, #fefce8, #fef9c3); border-radius: 0 12px 12px 0; color: #854d0e; font-style: italic; font-size: 15px; line-height: 1.7; }
        .content-rich-html :global(a) { color: #2563eb; text-decoration: none; font-weight: 600; border-bottom: 1px solid rgba(37, 99, 235, 0.2); transition: border-color 0.15s; }
        .content-rich-html :global(a:hover) { border-bottom-color: #2563eb; }
        .content-rich-html :global(strong) { font-weight: 700; color: #1e293b; }
        .content-rich-html :global(table) { width: 100%; border-collapse: separate; border-spacing: 0; margin: 24px 0; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; }
        .content-rich-html :global(th) { background: #1e293b; color: #fff; padding: 12px 16px; text-align: left; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; }
        .content-rich-html :global(td) { padding: 12px 16px; text-align: left; font-size: 14px; border-bottom: 1px solid #f1f5f9; color: #475569; }
        .content-rich-html :global(tr:last-child td) { border-bottom: none; }
        .content-rich-html :global(tr:hover td) { background: #f8fafc; }
        .content-rich-html :global(code) { background: #f1f5f9; padding: 2px 8px; border-radius: 6px; font-size: 13px; color: #e11d48; font-family: 'JetBrains Mono', monospace; }
        .content-rich-html :global(pre) { background: #1e293b; color: #e2e8f0; padding: 20px 24px; border-radius: 12px; overflow-x: auto; margin: 20px 0; font-size: 13px; line-height: 1.7; }
        .content-rich-html :global(hr) { border: none; height: 2px; background: linear-gradient(90deg, transparent, #e2e8f0, transparent); margin: 32px 0; }

        .content-cta-wrap {
          margin-top: 36px;
          display: flex;
          justify-content: center;
        }

        .content-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 36px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
          background: #0f172a;
          color: #f7e500;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.2);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .content-cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 32px rgba(15, 23, 42, 0.3);
        }

        @media (max-width: 767px) {
          .content-hero-cover { min-height: 280px; max-height: 320px; }
          .content-hero-cover img { min-height: 280px; max-height: 320px; }
          .content-hero-inner { padding: 24px 20px; }
          .content-hero-inner h1 { font-size: 24px; }
          .content-body-wrap { padding: 28px 16px 48px; }
          .content-body-modern { padding: 28px 24px 28px 32px; border-radius: 14px; }
          .content-rich-html :global(h1) { font-size: 24px; }
          .content-rich-html :global(h2) { font-size: 19px; }
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
