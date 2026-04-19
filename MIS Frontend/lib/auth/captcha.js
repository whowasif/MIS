import { SignJWT, jwtVerify } from 'jose'

const CAPTCHA_TTL_SECONDS = 5 * 60

const getCaptchaSecret = () => {
  const secret = process.env.ADMIN_CAPTCHA_SECRET || process.env.ADMIN_SESSION_SECRET

  if (!secret || secret.length < 32) {
    throw new Error('ADMIN_CAPTCHA_SECRET (or ADMIN_SESSION_SECRET) must be set and at least 32 characters long.')
  }

  return new TextEncoder().encode(secret)
}

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

export const createCaptchaChallenge = async () => {
  const left = randomInt(2, 20)
  const right = randomInt(2, 20)
  const operators = ['+', '-', '*']
  const operator = operators[randomInt(0, operators.length - 1)]

  let answer = 0
  if (operator === '+') answer = left + right
  if (operator === '-') answer = left - right
  if (operator === '*') answer = left * right

  const prompt = `Solve: ${left} ${operator} ${right}`
  const secret = getCaptchaSecret()

  const token = await new SignJWT({
    type: 'admin-captcha',
    answer: String(answer),
    prompt,
  })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${CAPTCHA_TTL_SECONDS}s`)
    .sign(secret)

  return {
    prompt,
    token,
    expiresIn: CAPTCHA_TTL_SECONDS,
  }
}

export const verifyCaptchaAnswer = async ({ token, answer }) => {
  if (!token || !answer) return false

  try {
    const secret = getCaptchaSecret()
    const { payload } = await jwtVerify(token, secret)

    if (payload?.type !== 'admin-captcha') return false

    return String(payload.answer).trim() === String(answer).trim()
  } catch (error) {
    return false
  }
}
