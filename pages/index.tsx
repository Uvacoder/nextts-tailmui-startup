import Home from '@pages/home/Home'
import type { NextPage } from 'next'
import Head from 'next/head'

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>App</title>
        <meta name="description" content="app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
    </div>
  )
}

export default Index
