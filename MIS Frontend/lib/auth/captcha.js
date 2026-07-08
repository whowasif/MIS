/**
 * Cloudflare Turnstile verification
 * 
 * Required env vars:
 *   TURNSTILE_SECRET_KEY - Cloudflare Turnstile secret key (server-side)
 *   NEXT_PUBLIC_TURNSTILE_SITE_KEY - Cloudflare Turnstile site key (client-side)
 */

const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'

export const verifyTurnstileToken = async (token) => {
  if (!token) return false

  const secretKey = process.env.TURNSTILE_SECRET_KEY

  if (!secretKey) {
    console.error('TURNSTILE_SECRET_KEY is not set in environment variables.')
    return false
  }

  try {
    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
    })

    const data = await response.json()
    return data.success === true
  } catch (error) {
    console.error('Turnstile verification failed:', error.message)
    return false
  }
}

// Legacy export for backward compatibility
export const verifyCaptchaAnswer = async ({ token }) => {
  return verifyTurnstileToken(token)
}
