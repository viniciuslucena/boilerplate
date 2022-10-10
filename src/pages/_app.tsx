import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Vinícius Lucena - Boilerplate</title>
        <link rel="shortcut icon" href="/img/favicon.ico" />
        <link rel="apple-touch-icon" href="/img/favicon.ico" />

        <meta
          name="description"
          content="A simple project starter to work with Typescript, React, NextJS and styled-components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
