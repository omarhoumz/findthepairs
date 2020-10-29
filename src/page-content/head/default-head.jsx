import Head from 'next/head'
import React, { memo } from 'react'

const DefaultHead = memo(function DefaultHead() {
  return (
    <Head>
      <title>Find the pairs</title>
      <link rel='icon' type='image/png' href='/favicon.png' />
      <link
        href='https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap'
        rel='stylesheet'
      />
    </Head>
  )
})

export default DefaultHead
