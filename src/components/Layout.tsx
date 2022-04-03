import React from 'react'
import Bubble from './Bubble'
import Navbar from './Navbar'

const Layout = ({children}:any) => {
  return (
      <>
        <Navbar />
        {children}
      </>
  )
}

export default Layout