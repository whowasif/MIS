import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../../components/navigation'
import Footer from '../../components/footer'
import { getDbPool } from '../../lib/server/db'

const ProjectDetailPage = ({ project }) => {
  if (!project) {
    return (
      <>
        <Navigation />
        <main style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <h1>Project Not Found</h1>
            <p>The project you are looking for does not exist.</p>
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
        <title>{project.name} | Client Projects - MIS Solution</title>
        <meta name="description" content={project.description || project.name} />
      </Head>

      <Navigation />

      <main className="project-detail-page">
        <article className="project-shell">
          {project.icon_url ? (
            <div className="project-hero-cover">
              <img src={project.icon_url} alt={project.name} />
              <div className="project-hero-overlay" />
              <div className="project-hero-inner">
                <div className="breadcrumb">
                  <Link href="/"><a>Home</a></Link>
                  <span>/</span>
                  <Link href="/company-information-policies"><a>About Us</a></Link>
                </div>
                <h1>{project.name}</h1>
                {project.client_name && <p className="project-client-tag">Client: {project.client_name}</p>}
                {project.description && <p className="project-hero-subtitle">{project.description}</p>}
              </div>
            </div>
          ) : (
            <header className="project-header-nocover">
              <div className="breadcrumb">
                <Link href="/"><a>Home</a></Link><span>/</span><Link href="/company-information-policies"><a>About Us</a></Link>
              </div>
              <h1>{project.name}</h1>
              {project.client_name && <p className="project-client-tag">Client: {project.client_name}</p>}
              {project.description && <p className="project-summary">{project.description}</p>}
            </header>
          )}

          <div className="project-body-wrap">
            {project.full_description && (
              <div className="project-body" dangerouslySetInnerHTML={{ __html: project.full_description }} />
            )}
            {!project.full_description && project.description && (
              <div className="project-body"><p>{project.description}</p></div>
            )}
            <div className="project-cta-wrap">
              <Link href="/request-custom-quote">
                <a className="btn btn-primary btn-lg project-quote-btn">
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
        .project-detail-page { min-height: 100vh; background: #f8fafe; }
        .project-shell { width: 100%; }
        .project-hero-cover { position: relative; width: 100%; min-height: 380px; max-height: 440px; overflow: hidden; }
        .project-hero-cover img { width: 100%; height: 100%; min-height: 380px; max-height: 440px; object-fit: cover; display: block; }
        .project-hero-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.65) 100%); }
        .project-hero-inner { position: absolute; bottom: 0; left: 0; right: 0; padding: 40px 48px; color: #ffffff; }
        .project-hero-inner h1 { margin: 0; font-size: clamp(28px, 5vw, 42px); font-weight: 800; line-height: 1.2; text-shadow: 0 2px 12px rgba(0,0,0,0.3); }
        .project-hero-subtitle { margin: 10px 0 0; font-size: 16px; color: rgba(255,255,255,0.88); line-height: 1.6; max-width: 700px; }
        .project-client-tag { margin: 6px 0 0; font-size: 14px; color: rgba(255,255,255,0.75); font-weight: 600; }
        .project-hero-inner .breadcrumb { margin-bottom: 12px; }
        .project-hero-inner .breadcrumb span { color: rgba(255,255,255,0.7); }
        .project-hero-inner .breadcrumb :global(a) { color: rgba(255,255,255,0.9); text-decoration: none; font-weight: 600; }
        .project-header-nocover { max-width: 820px; margin: 0 auto; padding: 36px 20px 0; }
        .project-header-nocover h1 { margin: 0; font-size: clamp(24px, 4vw, 36px); color: #111827; font-weight: 800; }
        .project-header-nocover .project-client-tag { color: #6b7280; }
        .project-summary { margin: 12px 0 0; font-size: 17px; color: #4b5563; line-height: 1.7; }
        .breadcrumb { display: flex; align-items: center; gap: 8px; font-size: 13px; color: #6b7280; }
        .breadcrumb :global(a) { color: #4f46e5; text-decoration: none; font-weight: 600; }
        .project-body-wrap { max-width: 820px; margin: 0 auto; padding: 36px 20px 64px; }
        .project-body { padding: 32px; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 16px; box-shadow: 0 2px 12px rgba(0,0,0,0.03); }
        .project-body :global(h1) { font-size: 28px; margin: 0 0 16px; color: #111827; }
        .project-body :global(h2) { font-size: 22px; margin: 24px 0 12px; color: #1f2937; }
        .project-body :global(h3) { font-size: 18px; margin: 20px 0 10px; color: #374151; }
        .project-body :global(p) { margin: 0 0 14px; font-size: 15px; line-height: 1.8; color: #374151; }
        .project-body :global(ul), .project-body :global(ol) { margin: 0 0 14px; padding-left: 24px; }
        .project-body :global(li) { margin-bottom: 6px; font-size: 15px; line-height: 1.7; color: #374151; }
        .project-body :global(img) { max-width: 100%; height: auto; border-radius: 10px; margin: 16px 0; }
        .project-body :global(table) { width: 100%; border-collapse: collapse; margin: 16px 0; }
        .project-body :global(th), .project-body :global(td) { border: 1px solid #e5e7eb; padding: 10px 14px; text-align: left; font-size: 14px; }
        .project-body :global(th) { background: #f9fafb; font-weight: 700; }
        .project-cta-wrap { margin-top: 28px; display: flex; justify-content: center; }
        .project-quote-btn { gap: 10px; font-size: 16px; padding: 14px 32px; border-radius: 10px; font-weight: 700; box-shadow: 0 4px 14px rgba(0,0,0,0.08); transition: transform 0.15s, box-shadow 0.15s; }
        .project-quote-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.12); }
        @media (max-width: 767px) {
          .project-hero-cover { min-height: 280px; max-height: 320px; }
          .project-hero-cover img { min-height: 280px; max-height: 320px; }
          .project-hero-inner { padding: 24px 20px; }
          .project-hero-inner h1 { font-size: 24px; }
          .project-body-wrap { padding: 24px 16px 48px; }
          .project-body { padding: 20px; }
        }
      `}</style>
    </>
  )
}

export const getServerSideProps = async ({ params }) => {
  const slug = String(params?.slug || '').trim().toLowerCase()
  if (!slug) return { notFound: true }

  try {
    const db = getDbPool()
    const [rows] = await db.execute(
      `SELECT * FROM client_projects WHERE LOWER(COALESCE(slug, '')) = ? AND deleted_at IS NULL LIMIT 1`,
      [slug]
    )

    if (rows.length === 0) {
      const [rowsById] = await db.execute(
        `SELECT * FROM client_projects WHERE id = ? AND deleted_at IS NULL LIMIT 1`,
        [slug]
      )
      if (rowsById.length === 0) return { notFound: true }
      return { props: { project: JSON.parse(JSON.stringify(rowsById[0])) } }
    }

    return { props: { project: JSON.parse(JSON.stringify(rows[0])) } }
  } catch (e) {
    console.error('Project detail error:', e)
    return { notFound: true }
  }
}

export default ProjectDetailPage
