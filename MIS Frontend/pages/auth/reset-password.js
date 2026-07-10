import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../../components/navigation'

export default function ResetPassword() {
  const router = useRouter()
  const { token } = router.query
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password }),
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
      <Head><title>Reset Password | MIS Solution</title></Head>
      <Navigation />
      <div className="fp-page">
        <div className="fp-card">
          <h1>Set New Password</h1>

          {message && (
            <>
              <div className="fp-success">{message}</div>
              <Link href="/auth/signin"><a className="fp-btn-link">Go to Sign In</a></Link>
            </>
          )}

          {error && <div className="fp-error">{error}</div>}

          {!message && (
            <form onSubmit={handleSubmit}>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="New password" required className="fp-input" minLength="8" />
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm new password" required className="fp-input" />
              <button type="submit" disabled={loading || !token} className="fp-btn">
                {loading ? 'Resetting...' : 'Reset Password'}
              </button>
            </form>
          )}
        </div>
      </div>
      <style jsx>{`
        .fp-page { min-height: 80vh; display: flex; align-items: center; justify-content: center; padding: 40px 20px; background: #f8fafc; }
        .fp-card { width: 100%; max-width: 420px; background: #fff; border-radius: 16px; padding: 40px 32px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
        .fp-card h1 { margin: 0 0 24px; font-size: 24px; color: #1e293b; }
        .fp-input { width: 100%; padding: 12px 16px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 14px; margin-bottom: 16px; }
        .fp-input:focus { outline: none; border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,0.1); }
        .fp-btn { width: 100%; padding: 12px; border: none; border-radius: 8px; background: #1e293b; color: #fff; font-size: 14px; font-weight: 700; cursor: pointer; }
        .fp-btn:hover { background: #334155; }
        .fp-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .fp-success { background: #f0fdf4; border: 1px solid #bbf7d0; color: #166534; padding: 12px 16px; border-radius: 8px; margin-bottom: 16px; font-size: 13px; }
        .fp-error { background: #fef2f2; border: 1px solid #fecaca; color: #991b1b; padding: 12px 16px; border-radius: 8px; margin-bottom: 16px; font-size: 13px; }
        .fp-btn-link { display: block; text-align: center; padding: 12px; background: #1e293b; color: #fff; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px; }
        .fp-btn-link:hover { background: #334155; }
      `}</style>
    </>
  )
}
