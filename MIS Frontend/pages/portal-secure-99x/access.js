import React, { useMemo, useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

const accessMessageByReason = {
  session: 'Your secure session is missing or expired. Re-authentication is required.',
  role: 'Your current role does not have permission for this route.',
}

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ''

const AccessPortal = () => {
  const router = useRouter()
  const [form, setForm] = useState({ identifier: '', password: '' })
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [turnstileToken, setTurnstileToken] = useState('')
  const turnstileRef = useRef(null)
  const widgetIdRef = useRef(null)

  const reason = typeof router.query.reason === 'string' ? router.query.reason : ''
  const nextRoute =
    typeof router.query.next === 'string' && router.query.next.startsWith('/portal-secure-99x')
      ? router.query.next
      : '/portal-secure-99x'

  const statusMessage = useMemo(() => {
    if (!reason) return 'Enter internal credentials to continue.'
    return accessMessageByReason[reason] || 'Access verification required.'
  }, [reason])

  // Load Turnstile script
  useEffect(() => {
    if (document.getElementById('cf-turnstile-script')) return

    const script = document.createElement('script')
    script.id = 'cf-turnstile-script'
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad&render=explicit'
    script.async = true
    script.defer = true
    document.head.appendChild(script)

    window.onTurnstileLoad = () => {
      if (turnstileRef.current && window.turnstile && TURNSTILE_SITE_KEY) {
        widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          theme: 'dark',
          callback: (token) => setTurnstileToken(token),
          'expired-callback': () => setTurnstileToken(''),
          'error-callback': () => setTurnstileToken(''),
        })
      }
    }

    return () => {
      delete window.onTurnstileLoad
    }
  }, [])

  // Render widget if script already loaded
  useEffect(() => {
    if (window.turnstile && turnstileRef.current && !widgetIdRef.current && TURNSTILE_SITE_KEY) {
      widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        theme: 'dark',
        callback: (token) => setTurnstileToken(token),
        'expired-callback': () => setTurnstileToken(''),
        'error-callback': () => setTurnstileToken(''),
      })
    }
  }, [])

  const resetTurnstile = () => {
    setTurnstileToken('')
    if (window.turnstile && widgetIdRef.current !== null) {
      window.turnstile.reset(widgetIdRef.current)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    if (!turnstileToken) {
      setError('Please complete the human verification.')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          identifier: form.identifier,
          password: form.password,
          turnstileToken,
        }),
      })

      const payload = await response.json()

      if (!response.ok || !payload?.success) {
        setError(payload?.error || 'Unable to authenticate. Please verify your credentials.')
        resetTurnstile()
        return
      }

      window.location.assign(nextRoute)
    } catch (requestError) {
      setError('Unable to reach the authentication service. Try again.')
      resetTurnstile()
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Head>
        <title>Secure Access | MIS Internal Portal</title>
        <meta name="description" content="Secure admin access for MIS internal operations." />
      </Head>

      <main className="access-page">
        <section className="access-card">
          <div className="access-logo-wrap">
            <img src="/footer logo.png" alt="MIS Solution" className="access-logo" />
          </div>
          <p className="kicker">Portal Secure 99x</p>
          <h1>Internal Access Gateway</h1>
          <h3>Admin Panel</h3>
          <p className="status">{statusMessage}</p>

          <form className="access-form" onSubmit={handleSubmit} noValidate>
            <label>
              <span>Email or Username</span>
              <input
                name="identifier"
                value={form.identifier}
                onChange={handleChange}
                type="text"
                placeholder="admin@missolution.net or username"
                autoComplete="off"
                required
              />
            </label>

            <label>
              <span>Password</span>
              <div className="password-wrap">
                <input
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter password"
                  autoComplete="current-password"
                  required
                />
                <button type="button" className="eye-btn" onClick={() => setShowPassword(!showPassword)} tabIndex={-1}>
                  {showPassword ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  )}
                </button>
              </div>
            </label>

            <div className="turnstile-wrap">
              <div ref={turnstileRef}></div>
            </div>

            {error && <p className="error">{error}</p>}

            <button type="submit" className="submit-btn" disabled={isSubmitting || !turnstileToken}>
              {isSubmitting ? 'Authorizing...' : 'Sign In'}
            </button>
          </form>
        </section>
      </main>

      <style jsx>{`
        .access-page {
          min-height: 100vh;
          display: grid;
          place-items: center;
          padding: 1.2rem;
          background: #0f141a;
          color: #f2f6fb;
          font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
        }

        .access-card {
          width: min(460px, 100%);
          display: grid;
          gap: 1rem;
          border-radius: 14px;
          border: 1px solid #28313b;
          background: #171d24;
          padding: 2rem 1.5rem;
        }

        .access-logo-wrap {
          margin-bottom: 4px;
        }

        .access-logo {
          width: 64px;
          height: 64px;
          object-fit: contain;
          border-radius: 12px;
        }

        .kicker {
          margin: 0;
          color: #8fa0b4;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        h1 {
          margin: 0;
          font-size: 1.35rem;
          color: #ffffff;
        }

        .status {
          margin: 0;
          color: #d8e2f0;
          font-size: 0.92rem;
        }

        .access-form {
          display: grid;
          gap: 0.85rem;
          margin-top: 0.5rem;
        }

        label {
          display: grid;
          gap: 0.35rem;
        }

        label span {
          color: #dbe4ef;
          font-size: 0.84rem;
          font-weight: 700;
        }

        input {
          width: 100%;
          border: 1px solid #394351;
          border-radius: 10px;
          padding: 0.75rem 0.85rem;
          color: #ffffff;
          background: #0f141a;
          font: inherit;
        }

        input::placeholder {
          color: #6e7e90;
        }

        input:focus {
          outline: none;
          border-color: #ffcf6a;
          box-shadow: 0 0 0 3px rgba(255, 207, 106, 0.16);
        }

        .password-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }

        .password-wrap input {
          padding-right: 44px;
        }

        .eye-btn {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          border: none;
          background: none;
          padding: 4px;
          cursor: pointer;
          color: #8fa0b4;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
        }

        .eye-btn:hover {
          color: #ffcf6a;
          background: rgba(255, 207, 106, 0.1);
        }

        .turnstile-wrap {
          display: flex;
          justify-content: center;
          padding: 8px 0;
        }

        .error {
          margin: 0;
          color: #ff9aa0;
          font-size: 0.85rem;
          font-weight: 700;
        }

        .submit-btn {
          width: 100%;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          padding: 0.75rem 1rem;
          font-weight: 700;
          font-size: 0.95rem;
          color: #101318;
          background: linear-gradient(180deg, #e2bb21 0%, #c5a21a 100%);
          transition: opacity 0.15s;
        }

        .submit-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .submit-btn:not(:disabled):hover {
          opacity: 0.9;
        }
      `}</style>
    </>
  )
}

export default AccessPortal
