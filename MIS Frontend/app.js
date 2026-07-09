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
  createServer((req, res) => {
    // Ensure host header is set for Next.js middleware
    if (!req.headers.host) {
      req.headers.host = process.env.NEXTAUTH_URL
        ? process.env.NEXTAUTH_URL.replace(/^https?:\/\//, '')
        : `${hostname}:${port}`
    }
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  }).listen(port, '0.0.0.0', () => {
    console.log('> Next.js server ready on port', port)
  })
})
