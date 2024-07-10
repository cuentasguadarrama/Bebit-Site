import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import FooterBebit from '../components/footer-bebit'
import './store.css'

const Store = (props) => {
  return (
    <div className="store-container">
      <Helmet>
        <title>Store - Bebit - Hidratacion</title>
        <meta property="og:title" content="Store - Bebit - Hidratacion " />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name12"></Navbar>
      <FooterBebit rootClassName="footer-bebit-root-class-name11"></FooterBebit>
    </div>
  )
}

export default Store
