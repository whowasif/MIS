import './style.css'
import 'react-quill/dist/quill.snow.css'

import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { SessionProvider } from 'next-auth/react'
import { GlobalProvider } from '../global-context'
import { NextIntlProvider } from 'next-intl'

function PageViewTracker() {
  const router = useRouter()

  useEffect(() => {
    const trackPageView = (url) => {
      // Don't track admin/api pages
      if (url.startsWith('/portal-secure') || url.startsWith('/api/')) return
      fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ eventType: 'page_view', page: url }),
      }).catch(() => {})
    }

    // Track initial page load
    trackPageView(router.asPath)

    // Track subsequent navigations
    const handleRouteChange = (url) => trackPageView(url)
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router])

  return null
}

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/footer%20logo.png" />
      </Head>
      <SessionProvider session={session}>
        <NextIntlProvider
          messages={pageProps?.messages}
          locale={pageProps?.locale}
        >
          <GlobalProvider>
            <PageViewTracker />
            <Component {...pageProps} />
          </GlobalProvider>
        </NextIntlProvider>
      </SessionProvider>
    </>
  )
}
