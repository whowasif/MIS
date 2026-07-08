import './style.css'
import 'react-quill/dist/quill.snow.css'

import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'
import { GlobalProvider } from '../global-context'
import { NextIntlProvider } from 'next-intl'

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
            <Component {...pageProps} />
          </GlobalProvider>
        </NextIntlProvider>
      </SessionProvider>
    </>
  )
}
