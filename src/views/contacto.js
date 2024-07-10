import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import ContactForm10 from '../components/contact-form10'
import FooterBebit from '../components/footer-bebit'
import './contacto.css'

const Contacto = (props) => {
  return (
    <div className="contacto-container">
      <Helmet>
        <title>Contacto - Bebit - Hidratacion</title>
        <meta property="og:title" content="Contacto - Bebit - Hidratacion " />
      </Helmet>
      <div className="contacto-contacto">
        <Navbar rootClassName="navbar-root-class-name4"></Navbar>
        <div className="contacto-header5">
          <div className="contacto-column">
            <div className="contacto-content">
              <img
                alt="IMG112222016"
                src="/LogosBebit/img_1122%202-300h.webp"
                className="contacto-img11222"
              />
              <span className="contacto-text HeadingDesktopH1">
                Queremos saber de ti. 
              </span>
              <span className="contacto-text01">
                Con gusto te atenderemos en cualquiera de nuestros contactos.
                Estamos para ayudarte y orientarte en todas tus necesidades. 
              </span>
            </div>
            <div className="contacto-actions">
              <div className="contacto-style-primary-small-false-darkmode-false-iconposition-noi">
                <span className="contacto-text02">QR Contacto</span>
              </div>
              <div className="contacto-style-secondary-small-false-darkmode-true-iconposition-no">
                <span className="contacto-text03">
                  Responder encuesta de calidad
                </span>
              </div>
            </div>
          </div>
        </div>
        <ContactForm10
          email="info@bebit.com.mx"
          phone="+525553707433"
          address="Cipreses No 77, Col. Lazaro Cardenas"
          content1="Tiene alguna consulta o duda sobre nuestros servicios o productos?"
          content2="No dude en contactarnos y con gusto le  atenderemos"
          contactTitle="Contacto"
          rootClassName="contact-form10-root-class-name"
          location1GoogleMap="https://www.google.com.mx/maps/place/Cipreses+77,+L%C3%A1zaro+C%C3%A1rdenas,+54916+Tultitl%C3%A1n+de+Mariano+Escobedo,+M%C3%A9x./@19.6329225,-99.1613578,17z/data=!3m1!4b1!4m6!3m5!1s0x85d1f5c52e05ca45:0xca61398020fb6b5d!8m2!3d19.6329175!4d-99.1587829!16s%2Fg%2F11c4gmh3xd?entry=ttu"
        ></ContactForm10>
        <div className="contacto-testimonial5">
          <div className="contacto-section-title">
            <span className="contacto-text04 HeadingDesktopH2">
              <span>Testimonios de clientes</span>
            </span>
            <span className="contacto-text06 TextMediumNormal">
              <span>¡Gracias por su atención y respuesta rápida!</span>
            </span>
          </div>
          <div className="contacto-content1">
            <div className="contacto-column1">
              <img
                alt="Stars2131"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="contacto-stars"
              />
              <span className="contacto-text08 HeadingDesktopH6">
                <span>
                  “El servicio al cliente de Bebit es excepcional. Siempre están
                  dispuestos a ayudar y resolver cualquier problema de manera
                  rápida y eficiente.”
                </span>
              </span>
              <div className="contacto-avatar">
                <img
                  alt="AvatarImage2131"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="contacto-avatar-image"
                />
                <div className="contacto-avatar-content">
                  <span className="contacto-text10 TextRegularSemiBold">
                    <span>Juan Pérez</span>
                  </span>
                  <span className="contacto-text12 TextRegularNormal">
                    <span>Gerente, Empresa XYZ</span>
                  </span>
                </div>
                <div className="contacto-logo2-color-dark"></div>
              </div>
            </div>
            <div className="contacto-column2">
              <img
                alt="Stars2131"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="contacto-stars1"
              />
              <span className="contacto-text14 HeadingDesktopH6">
                <span>
                  “Bebit ha superado mis expectativas en términos de calidad y
                  servicio. Estoy muy satisfecho con su trabajo y los
                  recomendaría a otros sin dudarlo.”
                </span>
              </span>
              <div className="contacto-avatar1">
                <img
                  alt="AvatarImage2131"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="contacto-avatar-image1"
                />
                <div className="contacto-avatar-content1">
                  <span className="contacto-text16 TextRegularSemiBold">
                    <span>María López</span>
                  </span>
                  <span className="contacto-text18 TextRegularNormal">
                    <span>Directora, Empresa ABC</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterBebit rootClassName="footer-bebit-root-class-name6"></FooterBebit>
      </div>
    </div>
  )
}

export default Contacto
