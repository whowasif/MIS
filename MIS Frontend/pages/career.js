import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import { getDbPool } from '../lib/server/db'

const useInView = (threshold = 0.1) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true) }, { threshold })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])
  return [ref, isVisible]
}

const FadeIn = ({ children, delay = 0 }) => {
  const [ref, isVisible] = useInView(0.08)
  return (
    <div ref={ref} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'none' : 'translateY(30px)', transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s` }}>
      {children}
    </div>
  )
}

const CareerPage = ({ jobs = [] }) => {
  const [viewJob, setViewJob] = useState(null)
  const [applyJob, setApplyJob] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '', coverLetter: '' })
  const [file, setFile] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleApply = async (e) => {
    e.preventDefault()
    if (!file) { setError('Please upload your resume.'); return }
    setError('')
    setSubmitting(true)
    const formData = new FormData()
    formData.append('careerPostId', applyJob.id)
    formData.append('name', form.name)
    formData.append('email', form.email)
    formData.append('phone', form.phone)
    formData.append('coverLetter', form.coverLetter)
    formData.append('resume', file)
    try {
      const res = await fetch('/api/career/apply', { method: 'POST', body: formData })
      if (res.ok) { setSubmitted(true) }
      else { const data = await res.json(); setError(data.error || 'Submission failed.') }
    } catch { setError('Network error. Please try again.') }
    finally { setSubmitting(false) }
  }

  const closeApply = () => {
    setApplyJob(null); setSubmitted(false)
    setForm({ name: '', email: '', phone: '', coverLetter: '' })
    setFile(null); setError('')
  }

  const openApplyFromDetail = () => {
    const job = viewJob; setViewJob(null); setApplyJob(job)
  }

  return (
    <>
      <Head>
        <title>Careers | MIS Solution</title>
        <meta name="description" content="Join MIS Solution — explore open positions and build your career with Bangladesh's leading IT company." />
        <link rel="icon" href="/footer%20logo.png" />
      </Head>

      <Navigation />

      <div className="career-page">

        {/* HERO */}
        <section className="career-hero">
          <div className="hero-bg-wrap">
            <img src="/career.jpg" alt="Join MIS Solution" className="hero-bg-img" />
            <div className="hero-overlay" />
          </div>
          <div className="hero-particles">
            {[...Array(5)].map((_, i) => <div key={i} className={`hero-particle hero-particle-${i}`} />)}
          </div>
          <div className="hero-content">
            <FadeIn delay={0.1}>
              <span className="hero-badge">We're Hiring</span>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h1>Build Your Career<br />at MIS Solution</h1>
            </FadeIn>
            <FadeIn delay={0.35}>
              <p className="hero-desc">Join a team that's powering Bangladesh's digital transformation. We build products that matter — and we need great people to do it.</p>
            </FadeIn>
            <FadeIn delay={0.45}>
              <div className="hero-meta">
                <span className="hero-meta-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  Dhaka, Bangladesh
                </span>
                <span className="hero-meta-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>
                  {jobs.length} Open Position{jobs.length !== 1 ? 's' : ''}
                </span>
                <span className="hero-meta-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  hr@missolution.com.bd
                </span>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* WHY JOIN US */}
        <section className="why-section">
          <div className="container">
            <FadeIn><div className="section-head"><h2>Why Join MIS Solution?</h2><p>A workplace where talent thrives and careers grow.</p></div></FadeIn>
            <div className="why-grid">
              {[
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, title: 'Growth Culture', desc: 'Continuous learning, mentorship, and clear paths for career advancement.' },
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>, title: 'Collaborative Team', desc: 'Work with experts across design, engineering, sales, and operations.' },
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, title: 'Real Impact', desc: 'Your work directly contributes to solutions used by 50+ enterprise clients.' },
                { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>, title: 'Competitive Benefits', desc: 'Competitive salary, performance bonuses, and professional development support.' },
              ].map((item, i) => (
                <FadeIn key={item.title} delay={i * 0.1}>
                  <div className="why-card">
                    <div className="why-icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* JOB LISTINGS */}
        <section className="jobs-section">
          <div className="container">
            <FadeIn>
              <div className="section-head">
                <h2>Open Positions <span className="count-badge">{jobs.length}</span></h2>
                <p>Find a role that matches your skills and ambitions.</p>
              </div>
            </FadeIn>

            {jobs.length === 0 ? (
              <FadeIn>
                <div className="empty-jobs">
                  <div className="empty-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>
                  </div>
                  <h3>No Active Openings</h3>
                  <p>We're not hiring right now, but we'd love to hear from talented people. Send your CV to <a href="mailto:hr@missolution.com.bd">hr@missolution.com.bd</a></p>
                </div>
              </FadeIn>
            ) : (
              <div className="jobs-grid">
                {jobs.map((job, i) => (
                  <FadeIn key={job.id} delay={i * 0.08}>
                    <div className="job-card">
                      {job.icon_url && (
                        <div className="job-card-cover">
                          <img src={job.icon_url} alt={job.name} />
                        </div>
                      )}
                      <div className="job-card-body">
                        <div className="job-card-top">
                          <span className="job-status-badge">{job.status || 'Open'}</span>
                        </div>
                        <h3 className="job-title">{job.name}</h3>
                        {job.description && (
                          <p className="job-desc">{job.description.substring(0, 120)}{job.description.length > 120 ? '...' : ''}</p>
                        )}
                        {job.deadline && (
                          <div className="job-deadline">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                            Deadline: {new Date(job.deadline).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                          </div>
                        )}
                        <div className="job-card-actions">
                          <button className="btn-ghost-sm" onClick={() => setViewJob(job)}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                            View Details
                          </button>
                          <button className="btn-primary-sm" onClick={() => setApplyJob(job)}>
                            Apply Now
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA BAND */}
        <section className="cta-band">
          <div className="container">
            <FadeIn>
              <div className="cta-band-inner">
                <div>
                  <h2>Don't see your role?</h2>
                  <p>We're always open to exceptional talent. Send us your CV and we'll reach out when the right opportunity comes up.</p>
                </div>
                <a href="mailto:hr@missolution.com.bd" className="cta-btn">
                  Send Your CV
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* VIEW DETAIL MODAL */}
        {viewJob && (
          <div className="modal-backdrop" onClick={() => setViewJob(null)}>
            <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setViewJob(null)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
              <div className="modal-scroll">
                {viewJob.icon_url && (
                  <div className="modal-cover">
                    <img src={viewJob.icon_url} alt={viewJob.name} />
                  </div>
                )}
                <div className="modal-body">
                  <span className="job-status-badge">{viewJob.status || 'Open'}</span>
                  <h2 className="modal-title">{viewJob.name}</h2>
                  {viewJob.deadline && (
                    <div className="modal-deadline">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      Application Deadline: <strong>{new Date(viewJob.deadline).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</strong>
                    </div>
                  )}
                  {viewJob.description && <div className="modal-section"><h4>About this Role</h4><p>{viewJob.description}</p></div>}
                  {viewJob.full_description && (
                    <div className="modal-section"><h4>Full Details</h4><div className="modal-html" dangerouslySetInnerHTML={{ __html: viewJob.full_description }} /></div>
                  )}
                  <button className="btn-primary-full" onClick={openApplyFromDetail}>
                    Apply for this Position
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* APPLY MODAL */}
        {applyJob && (
          <div className="modal-backdrop" onClick={() => !submitting && closeApply()}>
            <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeApply}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
              <div className="modal-scroll">
                {submitted ? (
                  <div className="success-state">
                    <div className="success-icon">
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h2>Application Submitted!</h2>
                    <p>Thank you for applying to <strong>{applyJob.name}</strong>. Our HR team will review your application and be in touch soon.</p>
                    <button className="btn-primary-full" onClick={closeApply}>Close</button>
                  </div>
                ) : (
                  <div className="modal-body">
                    <h2 className="modal-title">Apply: {applyJob.name}</h2>
                    <p className="modal-subtitle">Fill in the form below and attach your resume.</p>
                    <form onSubmit={handleApply} className="apply-form">
                      <div className="form-field">
                        <label>Full Name *</label>
                        <input type="text" value={form.name} onChange={(e) => setForm(p => ({ ...p, name: e.target.value }))} placeholder="Your full name" required />
                      </div>
                      <div className="form-row">
                        <div className="form-field">
                          <label>Email *</label>
                          <input type="email" value={form.email} onChange={(e) => setForm(p => ({ ...p, email: e.target.value }))} placeholder="your@email.com" required />
                        </div>
                        <div className="form-field">
                          <label>Phone</label>
                          <input type="tel" value={form.phone} onChange={(e) => setForm(p => ({ ...p, phone: e.target.value }))} placeholder="+880..." />
                        </div>
                      </div>
                      <div className="form-field">
                        <label>Cover Letter</label>
                        <textarea rows="4" value={form.coverLetter} onChange={(e) => setForm(p => ({ ...p, coverLetter: e.target.value }))} placeholder="Why are you a great fit for this role?" />
                      </div>
                      <div className="form-field">
                        <label>Resume / CV * <span className="field-hint">(PDF or DOCX, max 5MB)</span></label>
                        <div className="file-upload-wrap">
                          <input type="file" id="resume-file" accept=".pdf,.doc,.docx" onChange={(e) => setFile(e.target.files[0] || null)} required style={{ display: 'none' }} />
                          <label htmlFor="resume-file" className="file-upload-btn">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                            {file ? file.name : 'Choose File'}
                          </label>
                        </div>
                      </div>
                      {error && <p className="form-error">{error}</p>}
                      <button type="submit" className="btn-primary-full" disabled={submitting}>
                        {submitting ? 'Submitting...' : 'Submit Application'}
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

      </div>

      <Footer />

      <style jsx>{`
        .career-page { --accent: #f7e500; --dark: #0a101b; min-height: 100vh; background: #f8fafe; }
        .container { max-width: 1180px; margin: 0 auto; padding: 0 24px; }
        .section-head { text-align: center; margin-bottom: 48px; }
        .section-head h2 { margin: 0; font-size: clamp(26px, 4vw, 38px); font-weight: 800; color: #111827; display: flex; align-items: center; justify-content: center; gap: 12px; }
        .section-head p { margin: 10px auto 0; font-size: 16px; color: #6b7280; max-width: 500px; }
        .count-badge { display: inline-flex; align-items: center; justify-content: center; width: 34px; height: 34px; border-radius: 50%; background: var(--accent); color: #111; font-size: 14px; font-weight: 800; }

        /* HERO */
        .career-hero { position: relative; min-height: 580px; display: flex; align-items: center; overflow: hidden; }
        .hero-bg-wrap { position: absolute; inset: 0; }
        .hero-bg-img { width: 100%; height: 100%; object-fit: cover; }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(160deg, rgba(10,16,27,0.95) 0%, rgba(10,16,27,0.7) 60%, rgba(247,229,0,0.04) 100%); }
        .hero-particles { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
        .hero-particle { position: absolute; border-radius: 50%; background: var(--accent); opacity: 0.1; animation: pFloat 9s ease-in-out infinite; }
        .hero-particle-0 { width: 220px; height: 220px; top: -50px; right: 8%; animation-delay: 0s; }
        .hero-particle-1 { width: 100px; height: 100px; bottom: 25%; right: 22%; animation-delay: 2s; }
        .hero-particle-2 { width: 70px; height: 70px; top: 35%; left: 4%; animation-delay: 4s; }
        .hero-particle-3 { width: 160px; height: 160px; bottom: -30px; left: 18%; animation-delay: 1s; opacity: 0.06; }
        .hero-particle-4 { width: 55px; height: 55px; top: 18%; right: 38%; animation-delay: 3s; }
        @keyframes pFloat { 0%,100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-18px) scale(1.04); } }

        .hero-content { position: relative; z-index: 2; max-width: 680px; padding: 140px 32px 80px; }
        .hero-badge { display: inline-block; padding: 6px 16px; border-radius: 20px; background: rgba(247,229,0,0.12); border: 1px solid rgba(247,229,0,0.35); color: var(--accent); font-size: 12px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 18px; }
        .hero-content h1 { margin: 0; font-size: clamp(34px, 5.5vw, 54px); font-weight: 800; color: #fff; line-height: 1.1; letter-spacing: -0.02em; }
        .hero-desc { margin: 18px 0 0; font-size: 17px; color: rgba(255,255,255,0.65); line-height: 1.7; }
        .hero-meta { display: flex; flex-wrap: wrap; gap: 20px; margin-top: 28px; }
        .hero-meta-item { display: flex; align-items: center; gap: 7px; color: rgba(255,255,255,0.7); font-size: 14px; font-weight: 500; }
        .hero-meta-item svg { flex-shrink: 0; }

        /* WHY JOIN */
        .why-section { padding: 80px 0; background: #fff; }
        .why-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; }
        .why-card { padding: 28px; border: 1px solid #e5e7eb; border-radius: 16px; background: #f9fafb; transition: border-color 0.2s, box-shadow 0.2s; }
        .why-card:hover { border-color: #c7d2fe; box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
        .why-icon { width: 48px; height: 48px; border-radius: 12px; background: #1e293b; display: flex; align-items: center; justify-content: center; color: var(--accent); margin-bottom: 16px; }
        .why-card h3 { margin: 0 0 8px; font-size: 16px; font-weight: 700; color: #111827; }
        .why-card p { margin: 0; font-size: 14px; color: #6b7280; line-height: 1.6; }

        /* JOBS */
        .jobs-section { padding: 80px 0; }
        .jobs-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px; }

        .job-card { border: 1px solid #e5e7eb; border-radius: 16px; background: #fff; overflow: hidden; transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s; }
        .job-card:hover { border-color: #a5b4fc; box-shadow: 0 8px 28px rgba(0,0,0,0.08); transform: translateY(-3px); }
        .job-card-cover { width: 100%; height: 200px; overflow: hidden; }
        .job-card-cover img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .job-card-body { padding: 22px; }
        .job-card-top { margin-bottom: 10px; }
        .job-status-badge { display: inline-block; padding: 4px 12px; border-radius: 20px; background: rgba(247,229,0,0.15); border: 1px solid rgba(180,160,0,0.3); color: #856c00; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; }
        .job-title { margin: 0 0 10px; font-size: 18px; font-weight: 700; color: #111827; line-height: 1.3; }
        .job-desc { margin: 0 0 10px; font-size: 14px; color: #6b7280; line-height: 1.6; }
        .job-deadline { display: flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 600; color: #dc2626; margin: 0 0 14px; }
        .modal-deadline { display: flex; align-items: center; gap: 7px; font-size: 13px; color: #dc2626; margin: 8px 0 16px; padding: 8px 12px; background: #fef2f2; border-radius: 8px; border: 1px solid #fecaca; }
        .modal-deadline strong { font-weight: 700; }
        .job-card-actions { display: flex; gap: 10px; }
        .btn-ghost-sm { display: inline-flex; align-items: center; gap: 6px; padding: 9px 16px; border: 1px solid #d1d5db; border-radius: 8px; background: #fff; color: #374151; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.15s; }
        .btn-ghost-sm:hover { background: #f3f4f6; border-color: #9ca3af; }
        .btn-primary-sm { display: inline-flex; align-items: center; gap: 6px; padding: 9px 18px; border: none; border-radius: 8px; background: #1e293b; color: #f7e500; font-size: 13px; font-weight: 700; cursor: pointer; transition: all 0.15s; margin-left: auto; }
        .btn-primary-sm:hover { background: #0f172a; }

        /* EMPTY STATE */
        .empty-jobs { text-align: center; padding: 64px 24px; border: 2px dashed #e5e7eb; border-radius: 20px; }
        .empty-icon { width: 80px; height: 80px; border-radius: 50%; background: #f3f4f6; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; color: #9ca3af; }
        .empty-jobs h3 { margin: 0 0 10px; font-size: 20px; color: #374151; }
        .empty-jobs p { margin: 0; color: #6b7280; font-size: 15px; }
        .empty-jobs a { color: #4f46e5; font-weight: 600; text-decoration: none; }

        /* CTA BAND */
        .cta-band { padding: 60px 0; background: #1e293b; }
        .cta-band-inner { display: flex; align-items: center; justify-content: space-between; gap: 32px; flex-wrap: wrap; }
        .cta-band-inner h2 { margin: 0 0 8px; font-size: 26px; font-weight: 800; color: #fff; }
        .cta-band-inner p { margin: 0; font-size: 15px; color: rgba(255,255,255,0.65); }
        .cta-btn { display: inline-flex; align-items: center; gap: 10px; padding: 15px 28px; border-radius: 12px; background: var(--accent); color: #0a101b; font-size: 15px; font-weight: 700; text-decoration: none; white-space: nowrap; transition: all 0.2s; flex-shrink: 0; }
        .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 24px rgba(247,229,0,0.3); }

        /* MODAL */
        .modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 1200; display: flex; align-items: center; justify-content: center; padding: 20px; backdrop-filter: blur(4px); }
        .modal-panel { position: relative; width: 100%; max-width: 640px; max-height: 90vh; background: #fff; border-radius: 20px; overflow: hidden; box-shadow: 0 24px 80px rgba(0,0,0,0.2); }
        .modal-close { position: absolute; top: 16px; right: 16px; width: 36px; height: 36px; border: none; background: #f3f4f6; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; color: #6b7280; z-index: 2; }
        .modal-close:hover { background: #e5e7eb; color: #111; }
        .modal-scroll { overflow-y: auto; max-height: 90vh; }
        .modal-cover { width: 100%; height: 220px; overflow: hidden; }
        .modal-cover img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .modal-body { padding: 28px; }
        .modal-title { margin: 12px 0 20px; font-size: 22px; font-weight: 800; color: #111827; line-height: 1.3; }
        .modal-subtitle { margin: -10px 0 20px; font-size: 14px; color: #6b7280; }
        .modal-section { margin-bottom: 20px; }
        .modal-section h4 { margin: 0 0 8px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.06em; color: #6b7280; font-weight: 700; }
        .modal-section p { margin: 0; font-size: 15px; color: #374151; line-height: 1.7; white-space: pre-wrap; }
        .modal-html { font-size: 15px; color: #374151; line-height: 1.7; }
        .modal-html h1,.modal-html h2,.modal-html h3 { color: #111827; margin: 16px 0 8px; }
        .modal-html ul,.modal-html ol { padding-left: 20px; margin: 8px 0; }
        .modal-html li { margin-bottom: 4px; }
        .btn-primary-full { width: 100%; height: 50px; border: none; border-radius: 12px; background: #1e293b; color: var(--accent); font-size: 15px; font-weight: 700; cursor: pointer; margin-top: 20px; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.2s; }
        .btn-primary-full:hover:not(:disabled) { background: #0f172a; }
        .btn-primary-full:disabled { opacity: 0.6; cursor: wait; }

        /* APPLY FORM */
        .apply-form { display: grid; gap: 16px; margin-top: 20px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .form-field { display: grid; gap: 6px; }
        .form-field label { font-size: 13px; font-weight: 600; color: #374151; }
        .field-hint { font-weight: 400; color: #9ca3af; }
        .form-field input, .form-field textarea { width: 100%; border: 1.5px solid #e5e7eb; border-radius: 10px; padding: 11px 14px; font: inherit; font-size: 14px; color: #111; background: #fafafa; box-sizing: border-box; }
        .form-field input:focus, .form-field textarea:focus { outline: none; border-color: #6366f1; background: #fff; box-shadow: 0 0 0 3px rgba(99,102,241,0.1); }
        .file-upload-wrap { display: flex; }
        .file-upload-btn { display: inline-flex; align-items: center; gap: 8px; padding: 11px 18px; border: 1.5px dashed #d1d5db; border-radius: 10px; background: #f9fafb; color: #374151; font-size: 14px; font-weight: 500; cursor: pointer; width: 100%; transition: border-color 0.15s; }
        .file-upload-btn:hover { border-color: #6366f1; color: #4f46e5; }
        .form-error { margin: 0; padding: 10px 14px; border-radius: 8px; background: #fef2f2; border: 1px solid #fecaca; color: #dc2626; font-size: 13px; font-weight: 600; }

        /* SUCCESS STATE */
        .success-state { text-align: center; padding: 48px 28px; }
        .success-icon { width: 72px; height: 72px; border-radius: 50%; background: #d1fae5; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; color: #059669; }
        .success-state h2 { margin: 0 0 10px; font-size: 22px; font-weight: 800; color: #111827; }
        .success-state p { margin: 0 0 24px; color: #6b7280; font-size: 15px; line-height: 1.6; }

        @media (max-width: 640px) {
          .hero-content { padding: 120px 20px 60px; }
          .form-row { grid-template-columns: 1fr; }
          .jobs-grid { grid-template-columns: 1fr; }
          .cta-band-inner { flex-direction: column; text-align: center; }
          .why-grid { grid-template-columns: 1fr 1fr; }
          .job-card-actions { flex-wrap: wrap; }
          .btn-primary-sm { margin-left: 0; }
        }
        @media (max-width: 400px) {
          .why-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}

export const getServerSideProps = async () => {
  try {
    const db = getDbPool()
    const [rows] = await db.query(`
      SELECT * FROM career_posts
      WHERE is_active = 1 AND deleted_at IS NULL
      ORDER BY display_order ASC, created_at DESC
    `)
    return { props: { jobs: JSON.parse(JSON.stringify(rows)) } }
  } catch (e) {
    return { props: { jobs: [] } }
  }
}

export default CareerPage
