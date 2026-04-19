import React, { useMemo, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

const accessMessageByReason = {
  session: 'Your secure session is missing or expired. Re-authentication is required.',
  role: 'Your current role does not have permission for this route.',
}

const AccessPortal = () => {
  const router = useRouter()
  const [form, setForm] = useState({ identifier: '', password: '', captchaAnswer: '' })
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [captcha, setCaptcha] = useState({ prompt: '', token: '' })

  const reason = typeof router.query.reason === 'string' ? router.query.reason : ''
  const nextRoute =
    typeof router.query.next === 'string' && router.query.next.startsWith('/portal-secure-99x')
      ? router.query.next
      : '/portal-secure-99x'

  const statusMessage = useMemo(() => {
    if (!reason) return 'Enter internal credentials to continue.'
    return accessMessageByReason[reason] || 'Access verification required.'
  }, [reason])

  const loadCaptcha = async () => {
    try {
      const response = await fetch('/api/admin/captcha')
      const payload = await response.json()

      if (!response.ok || !payload?.success || !payload?.captcha) {
        throw new Error('Failed to load captcha')
      }

      setCaptcha({
        prompt: payload.captcha.prompt,
        token: payload.captcha.token,
      })
    } catch (captchaError) {
      setCaptcha({ prompt: '', token: '' })
      setError('Unable to load captcha challenge. Refresh and try again.')
    }
  }

  React.useEffect(() => {
    loadCaptcha()
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          identifier: form.identifier,
          password: form.password,
          captchaAnswer: form.captchaAnswer,
          captchaToken: captcha.token,
        }),
      })

      const payload = await response.json()

      if (!response.ok || !payload?.success) {
        setError(payload?.error || 'Unable to authenticate. Please verify your credentials.')
        setForm((current) => ({ ...current, captchaAnswer: '' }))
        await loadCaptcha()
        return
      }

      window.location.assign(nextRoute)
    } catch (requestError) {
      setError('Unable to reach the authentication service. Try again.')
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
          <p className="kicker">Portal Secure 99x</p>
          <h1>Internal Access Gateway</h1>
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
              <input
                name="password"
                value={form.password}
                onChange={handleChange}
                type="password"
                placeholder="Enter password"
                autoComplete="current-password"
                required
              />
            </label>

            <label>
              <span>Captcha</span>
              <div className="captcha-box">{captcha.prompt || 'Loading captcha...'}</div>
              <input
                name="captchaAnswer"
                value={form.captchaAnswer}
                onChange={handleChange}
                type="text"
                placeholder="Enter captcha result"
                autoComplete="off"
                required
              />
            </label>

            <button
              type="button"
              className="captcha-refresh"
              onClick={loadCaptcha}
              disabled={isSubmitting}
            >
              Refresh Captcha
            </button>

            {error && <p className="error">{error}</p>}

            <button type="submit" disabled={isSubmitting}>
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
          padding: 1.2rem;
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

        .captcha-box {
          border: 1px dashed #4a596b;
          border-radius: 10px;
          padding: 0.7rem 0.85rem;
          background: #111821;
          color: #ffdf84;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        .captcha-refresh {
          border: 1px solid #435363;
          border-radius: 10px;
          cursor: pointer;
          padding: 0.58rem 0.85rem;
          font-weight: 700;
          color: #d9e4f2;
          background: #27323f;
        }

        .captcha-refresh:disabled {
          opacity: 0.7;
          cursor: wait;
        }

        .error {
          margin: 0;
          color: #ff9aa0;
          font-size: 0.85rem;
          font-weight: 700;
        }

        button {
          border: 1px solid #4b5663;
          border-radius: 10px;
          cursor: pointer;
          padding: 0.72rem 1rem;
          font-weight: 700;
          color: #101318;
          background: linear-gradient(180deg, #e2bb21 0%, #c5a21a 100%);
        }

        button:disabled {
          opacity: 0.7;
          cursor: wait;
        }
      `}</style>
    </>
  )
}

export default AccessPortal
