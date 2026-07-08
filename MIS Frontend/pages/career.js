import React, { useState } from 'react'
import Head from 'next/head'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import { getDbPool } from '../lib/server/db'

const formatDate = (d) => d ? new Date(d).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : '—'

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
      else { const data = await res.json(); setError(data.error || 'Failed.') }
    } catch (err) { setError('Network error.') }
    finally { setSubmitting(false) }
  }

  const closeApply = () => {
    setApplyJob(null); setSubmitted(false)
    setForm({ name: '', email: '', phone: '', coverLetter: '' })
    setFile(null); setError('')
  }

  const openApplyFromDetail = () => {
    const job = viewJob
    setViewJob(null)
    setApplyJob(job)
  }

  return (
    <>
      <Head>
        <title>Careers | MIS Solution</title>
        <link rel="icon" href="/footer%20logo.png" />
      </Head>

      <Navigation />

      <main className="career-page">
        <section className="career-hero">
          <div className="hero-image-wrap"><img src="/career.jpg" alt="Join MIS Solution" className="hero-bg" /><div className="hero-overlay" /></div>
          <div className="hero-content">
            <h1>Join Our Team</h1>
            <p>Build your career with Bangladesh's growing IT solutions company. Explore open positions below.</p>
          </div>
        </section>

        {/* Job Listings */}
        <section className="jobs-section">
          <div className="jobs-container">
            <h2 className="section-heading">Open Positions <span>({jobs.length})</span></h2>

            {jobs.length === 0 ? (
              <div className="empty-state"><p>No active openings right now. Check back soon!</p></div>
            ) : (
              <div className="jobs-list">
                {jobs.map((job) => (
                  <div key={job.id} className="job-card">
                    <div className="job-card-left">
                      <h3>{job.title}</h3>
                      <div className="job-tags">
                        <span className="tag type-tag">{job.job_type}</span>
                        {job.department && <span className="tag">{job.department}</span>}
                        <span className="tag">{job.location || 'Dhaka'}</span>
                      </div>
                      {job.description && <p className="job-summary">{job.description.substring(0, 150)}{job.description.length > 150 ? '...' : ''}</p>}
                      <div className="job-bottom-meta">
                        {job.experience && <span>Experience: {job.experience}</span>}
                        {job.salary_range && <span>Salary: {job.salary_range}</span>}
                        {job.deadline && <span>Deadline: {formatDate(job.deadline)}</span>}
                      </div>
                    </div>
                    <div className="job-card-right">
                      <button className="btn-outline-sm" onClick={() => setViewJob(job)}>View Details</button>
                      <button className="btn-primary-sm" onClick={() => setApplyJob(job)}>Apply Now</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* View Detail Modal */}
        {viewJob && (
          <div className="modal-backdrop" onClick={() => setViewJob(null)}>
            <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setViewJob(null)}>✕</button>
              <div className="modal-scroll">
                <div className="detail-top">
                  <h2>{viewJob.title}</h2>
                  <span className="tag type-tag">{viewJob.job_type}</span>
                </div>

                <div className="detail-grid">
                  {viewJob.department && <div><span>Department</span><strong>{viewJob.department}</strong></div>}
                  <div><span>Location</span><strong>{viewJob.location || 'Dhaka, Bangladesh'}</strong></div>
                  {viewJob.experience && <div><span>Experience</span><strong>{viewJob.experience}</strong></div>}
                  {viewJob.salary_range && <div><span>Salary</span><strong>{viewJob.salary_range}</strong></div>}
                  {viewJob.deadline && <div><span>Deadline</span><strong>{formatDate(viewJob.deadline)}</strong></div>}
                </div>

                {viewJob.description && <div className="detail-section"><h4>About this Role</h4><p>{viewJob.description}</p></div>}
                {viewJob.requirements && <div className="detail-section"><h4>Requirements</h4><p>{viewJob.requirements}</p></div>}
                {viewJob.responsibilities && <div className="detail-section"><h4>Responsibilities</h4><p>{viewJob.responsibilities}</p></div>}
                {viewJob.benefits && <div className="detail-section"><h4>Benefits</h4><p>{viewJob.benefits}</p></div>}
                {viewJob.full_description && <div className="detail-section"><h4>Full Details</h4><div dangerouslySetInnerHTML={{ __html: viewJob.full_description }} /></div>}

                <button className="btn-primary-full" onClick={openApplyFromDetail}>Apply for this Position</button>
              </div>
            </div>
          </div>
        )}

        {/* Apply Modal */}
        {applyJob && (
          <div className="modal-backdrop" onClick={() => !submitting && closeApply()}>
            <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeApply}>✕</button>
              <div className="modal-scroll">
                {submitted ? (
                  <div className="success-msg">
                    <h2>Application Submitted!</h2>
                    <p>Thank you for applying to <strong>{applyJob.title}</strong>. We'll be in touch.</p>
                    <button className="btn-primary-full" onClick={closeApply}>Close</button>
                  </div>
                ) : (
                  <>
                    <h2 className="apply-title">Apply: {applyJob.title}</h2>
                    <form onSubmit={handleApply} className="apply-form">
                      <div className="form-field"><label>Full Name *</label><input type="text" value={form.name} onChange={(e) => setForm(p => ({ ...p, name: e.target.value }))} required /></div>
                      <div className="form-row">
                        <div className="form-field"><label>Email *</label><input type="email" value={form.email} onChange={(e) => setForm(p => ({ ...p, email: e.target.value }))} required /></div>
                        <div className="form-field"><label>Phone</label><input type="tel" value={form.phone} onChange={(e) => setForm(p => ({ ...p, phone: e.target.value }))} /></div>
                      </div>
                      <div className="form-field"><label>Cover Letter</label><textarea rows="4" value={form.coverLetter} onChange={(e) => setForm(p => ({ ...p, coverLetter: e.target.value }))} placeholder="Why are you a good fit?" /></div>
                      <div className="form-field"><label>Resume / CV * (PDF or DOCX, max 5MB)</label><input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setFile(e.target.files[0] || null)} required /></div>
                      {error && <p className="form-error">{error}</p>}
                      <button type="submit" className="btn-primary-full" disabled={submitting}>{submitting ? 'Submitting...' : 'Submit Application'}</button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />

      <style jsx>{`
        .career-page { min-height: 100vh; background: #f8fafe; }

        /* Hero */
        .career-hero { position: relative; min-height: 300px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .hero-image-wrap { position: absolute; inset: 0; }
        .hero-bg { width: 100%; height: 100%; object-fit: cover; }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 100%); }
        .hero-content { position: relative; z-index: 1; text-align: center; padding: 48px 20px; }
        .career-hero h1 { margin: 0; font-size: clamp(28px, 5vw, 44px); color: #fff; font-weight: 800; }
        .career-hero p { margin: 12px auto 0; max-width: 540px; color: rgba(255,255,255,0.9); font-size: 16px; line-height: 1.7; }

        /* Jobs Section */
        .jobs-section { padding: 40px 20px 64px; }
        .jobs-container { max-width: 860px; margin: 0 auto; }
        .section-heading { margin: 0 0 24px; font-size: 22px; color: #111827; }
        .section-heading span { font-weight: 400; color: #6b7280; font-size: 16px; }

        .empty-state { text-align: center; padding: 48px; border: 1px dashed #d1d5db; border-radius: 14px; color: #6b7280; }

        .jobs-list { display: grid; gap: 14px; }

        .job-card { display: flex; justify-content: space-between; align-items: flex-start; gap: 20px; border: 1px solid #e5e7eb; border-radius: 14px; background: #fff; padding: 22px 24px; transition: border-color 0.15s, box-shadow 0.15s; }
        .job-card:hover { border-color: #c7d2fe; box-shadow: 0 4px 16px rgba(0,0,0,0.04); }

        .job-card-left { flex: 1; min-width: 0; }
        .job-card-left h3 { margin: 0 0 10px; font-size: 18px; color: #111827; font-weight: 700; }

        .job-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 10px; }
        .tag { padding: 3px 10px; border-radius: 6px; font-size: 12px; font-weight: 600; background: #f3f4f6; color: #4b5563; }
        .type-tag { background: #eff6ff; color: #1d4ed8; }

        .job-summary { margin: 0 0 10px; font-size: 14px; color: #4b5563; line-height: 1.6; }
        .job-bottom-meta { display: flex; flex-wrap: wrap; gap: 14px; font-size: 12px; color: #9ca3af; }

        .job-card-right { display: flex; flex-direction: column; gap: 8px; flex-shrink: 0; }
        .btn-outline-sm { border: 1px solid #d1d5db; border-radius: 8px; padding: 8px 16px; background: #fff; color: #374151; font-size: 13px; font-weight: 600; cursor: pointer; white-space: nowrap; }
        .btn-outline-sm:hover { background: #f9fafb; border-color: #9ca3af; }
        .btn-primary-sm { border: none; border-radius: 8px; padding: 8px 16px; background: #4f46e5; color: #fff; font-size: 13px; font-weight: 700; cursor: pointer; white-space: nowrap; }
        .btn-primary-sm:hover { background: #4338ca; }

        /* Modal */
        .modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 1200; display: flex; align-items: center; justify-content: center; padding: 20px; }
        .modal-panel { position: relative; width: 100%; max-width: 620px; max-height: 90vh; background: #fff; border-radius: 16px; overflow: hidden; }
        .modal-close { position: absolute; top: 16px; right: 16px; border: none; background: transparent; font-size: 22px; cursor: pointer; color: #6b7280; z-index: 2; }
        .modal-scroll { padding: 32px; overflow-y: auto; max-height: 90vh; }

        /* Detail Modal */
        .detail-top { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; flex-wrap: wrap; }
        .detail-top h2 { margin: 0; font-size: 22px; color: #111827; }

        .detail-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; margin-bottom: 24px; padding: 16px; background: #f9fafb; border-radius: 12px; border: 1px solid #f3f4f6; }
        .detail-grid div { display: flex; flex-direction: column; gap: 2px; }
        .detail-grid span { font-size: 11px; text-transform: uppercase; letter-spacing: 0.04em; color: #6b7280; font-weight: 600; }
        .detail-grid strong { font-size: 14px; color: #111827; }

        .detail-section { margin-bottom: 20px; }
        .detail-section h4 { margin: 0 0 8px; font-size: 14px; color: #111827; font-weight: 700; text-transform: uppercase; letter-spacing: 0.03em; }
        .detail-section p { margin: 0; font-size: 14px; color: #374151; line-height: 1.7; white-space: pre-wrap; }

        .btn-primary-full { width: 100%; height: 46px; border: none; border-radius: 10px; background: #4f46e5; color: #fff; font-size: 15px; font-weight: 700; cursor: pointer; margin-top: 16px; }
        .btn-primary-full:hover:not(:disabled) { background: #4338ca; }
        .btn-primary-full:disabled { opacity: 0.6; cursor: wait; }

        /* Apply Modal */
        .apply-title { margin: 0 0 20px; font-size: 20px; color: #111827; }
        .apply-form { display: grid; gap: 14px; }
        .form-field { display: grid; gap: 5px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .form-field label { font-size: 13px; font-weight: 600; color: #374151; }
        .form-field input, .form-field textarea { width: 100%; border: 1px solid #d1d5db; border-radius: 8px; padding: 10px 12px; font: inherit; font-size: 14px; }
        .form-field input:focus, .form-field textarea:focus { outline: none; border-color: #4f46e5; box-shadow: 0 0 0 3px rgba(79,70,229,0.1); }
        .form-field input[type="file"] { padding: 8px; }
        .form-error { margin: 0; color: #dc2626; font-size: 13px; font-weight: 600; }

        .success-msg { text-align: center; padding: 20px 0; }
        .success-msg h2 { margin: 0 0 10px; color: #059669; font-size: 20px; }
        .success-msg p { margin: 0 0 20px; color: #4b5563; }

        @media (max-width: 640px) {
          .job-card { flex-direction: column; }
          .job-card-right { flex-direction: row; width: 100%; }
          .form-row { grid-template-columns: 1fr; }
          .detail-grid { grid-template-columns: 1fr 1fr; }
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
      WHERE is_active = 1 AND (deadline IS NULL OR deadline >= CURDATE())
      ORDER BY created_at DESC
    `)
    return { props: { jobs: JSON.parse(JSON.stringify(rows)) } }
  } catch (e) {
    return { props: { jobs: [] } }
  }
}

export default CareerPage
