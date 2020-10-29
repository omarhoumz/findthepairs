import React, { memo } from 'react'

const DefaultHead = memo(function DefaultHead() {
  return (
    <>
      <title>Find the pairs</title>
      <link rel='icon' type='image/png' href='/favicon.png' />
      <link
        href='https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap'
        rel='stylesheet'
      />
    </>
  )
})

export default DefaultHead
