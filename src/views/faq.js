import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import FAQ2 from '../components/faq2'
import FooterBebit from '../components/footer-bebit'
import './faq.css'

const FAQ = (props) => {
  return (
    <div className="faq-container">
      <Helmet>
        <title>FAQ - Bebit - Hidratacion</title>
        <meta property="og:title" content="FAQ - Bebit - Hidratacion " />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name11"></Navbar>
      <FAQ2 rootClassName="faq2-root-class-name"></FAQ2>
      <FooterBebit rootClassName="footer-bebit-root-class-name7"></FooterBebit>
    </div>
  )
}

export default FAQ
