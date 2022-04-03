import React from 'react'
import Layout from '../components/Layout'
import "../css/main.sass"
import "normalize.css"
import Hero from '../components/Hero'
import Background from '../components/Background'

const IndexPage = () => {
  return (
    <Layout>
      <Hero/>
      <Background/>
    </Layout>
  )
}

export default IndexPage