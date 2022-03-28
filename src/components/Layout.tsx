import React from 'react'
import Navbar from './Navbar'

const Layout = ({children}:any) => {
  return (
      <>
        <Navbar />
        {children}
        //test commit
      </>
  )
}

export default Layout