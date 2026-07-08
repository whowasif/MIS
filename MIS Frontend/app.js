// cPanel Phusion Passenger startup file for Next.js
// This file is the entry point that Passenger uses to start the application.
// Do NOT rename this file - Passenger looks for "app.js" by default.

const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = false
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  }).listen(process.env.PORT || 3000, '0.0.0.0', () => {
    console.log('> Next.js server ready')
  })
})
