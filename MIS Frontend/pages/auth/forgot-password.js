import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../../components/navigation'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setMessage('')

    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()

      if (data.success) {
        setMessage(data.message)
      } else {
        setError(data.error || 'Something went wrong.')
      }
    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Head><title>Forgot Password | MIS Solution</title></Head>
      <Navigation />
      <div className="fp-page">
        <div className="fp-card">
          <h1>Forgot Password</h1>
          <p>Enter your email address and we'll send you a link to reset your password.</p>

          {message && <div className="fp-success">{message}</div>}
          {error && <div className="fp-error">{error}</div>}

          {!message && (
            <form onSubmit={handleSubmit}>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required className="fp-input" />
              <button type="submit" disabled={loading} className="fp-btn">
                {loading ? 'Sending...' : 'Send Reset Link'}
              </button>
            </form>
          )}

          <div className="fp-links">
            <Link href="/auth/signin"><a>Back to Sign In</a></Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .fp-page { min-height: 80vh; display: flex; align-items: center; justify-content: center; padding: 40px 20px; background: #f8fafc; }
        .fp-card { width: 100%; max-width: 420px; background: #fff; border-radius: 16px; padding: 40px 32px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
        .fp-card h1 { margin: 0 0 8px; font-size: 24px; color: #1e293b; }
        .fp-card p { margin: 0 0 24px; color: #64748b; font-size: 14px; line-height: 1.5; }
        .fp-input { width: 100%; padding: 12px 16px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 14px; margin-bottom: 16px; }
        .fp-input:focus { outline: none; border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,0.1); }
        .fp-btn { width: 100%; padding: 12px; border: none; border-radius: 8px; background: #1e293b; color: #fff; font-size: 14px; font-weight: 700; cursor: pointer; }
        .fp-btn:hover { background: #334155; }
        .fp-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .fp-success { background: #f0fdf4; border: 1px solid #bbf7d0; color: #166534; padding: 12px 16px; border-radius: 8px; margin-bottom: 16px; font-size: 13px; }
        .fp-error { background: #fef2f2; border: 1px solid #fecaca; color: #991b1b; padding: 12px 16px; border-radius: 8px; margin-bottom: 16px; font-size: 13px; }
        .fp-links { margin-top: 20px; text-align: center; }
        .fp-links :global(a) { color: #3b82f6; font-size: 13px; text-decoration: none; font-weight: 500; }
      `}</style>
    </>
  )
}
