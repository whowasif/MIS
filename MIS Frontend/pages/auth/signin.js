import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'

import Navigation from '../../components/navigation'
import Footer from '../../components/footer'

const SignInPage = () => {
  const router = useRouter()
  const callbackUrl = router.query.callbackUrl || '/'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleCredentialsLogin = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const result = await signIn('credentials', {
      redirect: false,
      email: email.trim(),
      password,
    })

    if (result?.error) {
      setError('Invalid email or password.')
    } else {
      router.push(callbackUrl)
    }
    setLoading(false)
  }

  const handleGoogleLogin = () => {
    signIn('google', { callbackUrl })
  }

  return (
    <>
      <Head>
        <title>Sign In | MIS Solution</title>
        <link rel="icon" href="/footer%20logo.png" />
      </Head>

      <Navigation />

      <main className="auth-page">
        <div className="auth-card">
          <div className="auth-header">
            <img src="/footer%20logo.png" alt="MIS Solution" className="auth-logo" />
            <h1>Welcome Back</h1>
            <p>Sign in to your account to manage orders and quotes.</p>
          </div>

          {/* Google Sign In */}
          <button type="button" className="google-btn" onClick={handleGoogleLogin}>
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          <div className="divider"><span>or sign in with email</span></div>

          {/* Email/Password Form */}
          <form onSubmit={handleCredentialsLogin} className="auth-form">
            {error && <p className="auth-error">{error}</p>}

            <div className="field">
              <label>Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
            </div>

            <div className="field">
              <label>Password</label>
              <div className="password-wrap">
                <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
                <button type="button" className="eye-btn" onClick={() => setShowPassword(!showPassword)} tabIndex={-1}>
                  {showPassword ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  )}
                </button>
              </div>
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <p className="auth-forgot-text">
            <Link href="/auth/forgot-password"><a className="auth-link">Forgot Password?</a></Link>
          </p>

          <p className="auth-footer-text">
            Don't have an account? <Link href="/auth/signup"><a className="auth-link">Create one</a></Link>
          </p>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .auth-page { min-height: 60vh; display: flex; align-items: center; justify-content: center; padding: 40px 20px; background: #f8fafe; }
        .auth-card { width: 100%; max-width: 420px; background: #fff; border: 1px solid #e5e7eb; border-radius: 16px; padding: 32px; box-shadow: 0 4px 24px rgba(0,0,0,0.04); }

        .auth-header { text-align: center; margin-bottom: 24px; }
        .auth-logo { width: 48px; height: 48px; border-radius: 50%; margin-bottom: 12px; }
        .auth-header h1 { margin: 0; font-size: 22px; color: #111827; }
        .auth-header p { margin: 6px 0 0; color: #6b7280; font-size: 14px; }

        .google-btn { display: flex; align-items: center; justify-content: center; gap: 10px; width: 100%; height: 46px; border: 1px solid #d1d5db; border-radius: 10px; background: #fff; font: inherit; font-size: 14px; font-weight: 600; color: #374151; cursor: pointer; transition: background 0.15s, border-color 0.15s; }
        .google-btn:hover { background: #f9fafb; border-color: #9ca3af; }

        .divider { display: flex; align-items: center; gap: 12px; margin: 20px 0; }
        .divider::before, .divider::after { content: ''; flex: 1; height: 1px; background: #e5e7eb; }
        .divider span { font-size: 12px; color: #9ca3af; white-space: nowrap; }

        .auth-form { display: grid; gap: 14px; }
        .auth-error { margin: 0; padding: 10px 12px; border-radius: 8px; background: #fef2f2; color: #dc2626; font-size: 13px; font-weight: 600; }

        .field { display: grid; gap: 5px; }
        .field label { font-size: 13px; font-weight: 600; color: #374151; }
        .field input { width: 100%; height: 44px; border: 1px solid #d1d5db; border-radius: 10px; padding: 0 14px; font: inherit; font-size: 14px; color: #111827; }
        .field input:focus { outline: none; border-color: #4f46e5; box-shadow: 0 0 0 3px rgba(79,70,229,0.1); }

        .password-wrap { position: relative; display: flex; align-items: center; }
        .password-wrap input { padding-right: 44px; }
        .eye-btn { position: absolute; right: 10px; top: 50%; transform: translateY(-50%); border: none; background: none; padding: 4px; cursor: pointer; color: #6b7280; display: flex; align-items: center; justify-content: center; border-radius: 6px; }
        .eye-btn:hover { color: #4f46e5; background: rgba(79,70,229,0.08); }

        .submit-btn { height: 46px; border: none; border-radius: 10px; background: #4f46e5; color: #fff; font: inherit; font-size: 15px; font-weight: 700; cursor: pointer; transition: background 0.15s; }
        .submit-btn:hover:not(:disabled) { background: #4338ca; }
        .submit-btn:disabled { opacity: 0.6; cursor: wait; }

        .auth-footer-text { margin: 20px 0 0; text-align: center; font-size: 13px; color: #6b7280; }
        .auth-link { color: #4f46e5; font-weight: 600; text-decoration: none; }
        .auth-link:hover { text-decoration: underline; }
      `}</style>
    </>
  )
}


export default SignInPage
