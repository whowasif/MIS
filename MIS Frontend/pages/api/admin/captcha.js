import { createCaptchaChallenge } from '../../../lib/auth/captcha'

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  try {
    const challenge = await createCaptchaChallenge()

    return res.status(200).json({
      success: true,
      captcha: {
        prompt: challenge.prompt,
        token: challenge.token,
        expiresIn: challenge.expiresIn,
      },
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Unable to generate captcha challenge.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    })
  }
}
