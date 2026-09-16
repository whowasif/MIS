// cPanel Phusion Passenger startup file for Next.js
// This file is the entry point that Passenger uses to start the application.
// Do NOT rename this file - Passenger looks for "app.js" by default.

const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = false
const hostname = '127.0.0.1'
const port = parseInt(process.env.PORT, 10) || 3000

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  // Public site host, used so middleware redirects don't leak the internal
  // localhost:3000 origin. Falls back to NEXTAUTH_URL's host.
  const publicHost = process.env.PUBLIC_SITE_URL || process.env.NEXTAUTH_URL || ''
  const publicHostname = publicHost.replace(/^https?:\/\//, '').replace(/\/$/, '')

  createServer((req, res) => {
    // Behind Passenger/cPanel the internal host header is 127.0.0.1:3000.
    // Prefer the real public host from the proxy's forwarded header, then the
    // configured public host, so Next.js middleware builds correct redirects.
    const forwardedHost = req.headers['x-forwarded-host']
    if (forwardedHost) {
      req.headers.host = Array.isArray(forwardedHost) ? forwardedHost[0] : String(forwardedHost).split(',')[0].trim()
    } else if (publicHostname && (!req.headers.host || req.headers.host.includes('127.0.0.1') || req.headers.host.includes('localhost'))) {
      req.headers.host = publicHostname
    } else if (!req.headers.host) {
      req.headers.host = `${hostname}:${port}`
    }
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  }).listen(port, '0.0.0.0', () => {
    console.log('> Next.js server ready on port', port)
  })
})
