import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function AdminForgotPassword() {
  const [identifier, setIdentifier] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setMessage('')

    try {
      const res = await fetch('/api/admin/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier }),
      })
      const data = await res.json()
      if (data.success) { setMessage(data.message) } else { setError(data.error) }
    } catch (err) { setError('Network error.') }
    finally { setLoading(false) }
  }

  return (
    <>
      <Head><title>Forgot Admin Password | MIS Solution</title></Head>
      <div className="fp-page">
        <div className="fp-card">
          <h1>Admin Password Reset</h1>
          <p>Enter your admin email or username. A reset link will be sent to your registered email.</p>

          {message && <div className="fp-success">{message}</div>}
          {error && <div className="fp-error">{error}</div>}

          {!message && (
            <form onSubmit={handleSubmit}>
              <input type="text" value={identifier} onChange={(e) => setIdentifier(e.target.value)} placeholder="Email or username" required className="fp-input" />
              <button type="submit" disabled={loading} className="fp-btn">{loading ? 'Sending...' : 'Send Reset Link'}</button>
            </form>
          )}

          <div className="fp-links">
            <Link href="/portal-secure-99x/access"><a>Back to Admin Login</a></Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .fp-page { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 40px 20px; background: #0f172a; }
        .fp-card { width: 100%; max-width: 420px; background: #1e293b; border-radius: 16px; padding: 40px 32px; border: 1px solid #334155; }
        .fp-card h1 { margin: 0 0 8px; font-size: 22px; color: #f1f5f9; }
        .fp-card p { margin: 0 0 24px; color: #94a3b8; font-size: 13px; line-height: 1.5; }
        .fp-input { width: 100%; padding: 12px 16px; border: 1px solid #475569; border-radius: 8px; font-size: 14px; margin-bottom: 16px; background: #0f172a; color: #f1f5f9; }
        .fp-input:focus { outline: none; border-color: #7c3aed; }
        .fp-btn { width: 100%; padding: 12px; border: none; border-radius: 8px; background: #7c3aed; color: #fff; font-size: 14px; font-weight: 700; cursor: pointer; }
        .fp-btn:hover { background: #6d28d9; }
        .fp-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .fp-success { background: rgba(34,197,94,0.1); border: 1px solid #22c55e; color: #4ade80; padding: 12px; border-radius: 8px; margin-bottom: 16px; font-size: 13px; }
        .fp-error { background: rgba(239,68,68,0.1); border: 1px solid #ef4444; color: #fca5a5; padding: 12px; border-radius: 8px; margin-bottom: 16px; font-size: 13px; }
        .fp-links { margin-top: 20px; text-align: center; }
        .fp-links :global(a) { color: #94a3b8; font-size: 13px; text-decoration: none; }
        .fp-links :global(a:hover) { color: #f7e500; }
      `}</style>
    </>
  )
}
