import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

export default function AdminResetPassword() {
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

    if (password !== confirmPassword) { setError('Passwords do not match.'); return }
    if (password.length < 10) { setError('Password must be at least 10 characters.'); return }
    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password) || !/[^A-Za-z0-9]/.test(password)) {
      setError('Password must contain uppercase, lowercase, number, and symbol.'); return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/admin/reset-password', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token, password }) })
      const data = await res.json()
      if (data.success) { setMessage(data.message) } else { setError(data.error) }
    } catch (err) { setError('Network error.') }
    finally { setLoading(false) }
  }

  return (
    <>
      <Head><title>Reset Admin Password | MIS Solution</title></Head>
      <div className="rp-page">
        <div className="rp-card">
          <h1>Reset Admin Password</h1>
          {message && (<><div className="rp-success">{message}</div><Link href="/portal-secure-99x/access"><a className="rp-link">Go to Admin Login</a></Link></>)}
          {error && <div className="rp-error">{error}</div>}
          {!message && (
            <form onSubmit={handleSubmit}>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="New admin password (min 10 chars)" required className="rp-input" />
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm password" required className="rp-input" />
              <p className="rp-hint">Must include: uppercase, lowercase, number, and symbol.</p>
              <button type="submit" disabled={loading || !token} className="rp-btn">{loading ? 'Resetting...' : 'Reset Password'}</button>
            </form>
          )}
        </div>
      </div>
      <style jsx>{`
        .rp-page { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 40px 20px; background: #0f172a; }
        .rp-card { width: 100%; max-width: 420px; background: #1e293b; border-radius: 16px; padding: 40px 32px; border: 1px solid #334155; }
        .rp-card h1 { margin: 0 0 24px; font-size: 22px; color: #f1f5f9; }
        .rp-input { width: 100%; padding: 12px 16px; border: 1px solid #475569; border-radius: 8px; font-size: 14px; margin-bottom: 12px; background: #0f172a; color: #f1f5f9; }
        .rp-input:focus { outline: none; border-color: #7c3aed; }
        .rp-hint { color: #94a3b8; font-size: 12px; margin: 0 0 16px; }
        .rp-btn { width: 100%; padding: 12px; border: none; border-radius: 8px; background: #7c3aed; color: #fff; font-size: 14px; font-weight: 700; cursor: pointer; }
        .rp-btn:hover { background: #6d28d9; }
        .rp-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .rp-success { background: rgba(34,197,94,0.1); border: 1px solid #22c55e; color: #4ade80; padding: 12px; border-radius: 8px; margin-bottom: 16px; font-size: 13px; }
        .rp-error { background: rgba(239,68,68,0.1); border: 1px solid #ef4444; color: #fca5a5; padding: 12px; border-radius: 8px; margin-bottom: 16px; font-size: 13px; }
        .rp-link { display: block; text-align: center; padding: 12px; background: #7c3aed; color: #fff; border-radius: 8px; text-decoration: none; font-weight: 700; }
      `}</style>
    </>
  )
}
