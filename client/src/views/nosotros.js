import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Column from '../components/column'
import NuestraDiferenciaYValorAgregado from '../components/nuestra-diferencia-y-valor-agregado'
import HitosImportantes from '../components/hitos-importantes'
import LogisticaYSporte from '../components/logistica-y-sporte'
import FooterBebit from '../components/footer-bebit'
import './nosotros.css'

const Nosotros = (props) => {
  return (
    <div className="nosotros-container">
      <Helmet>
        <title>Nosotros - Bebit - Hidratacion</title>
        <meta property="og:title" content="Nosotros - Bebit - Hidratacion " />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <div className="nosotros-container1">
        <div className="nosotros-container2">
          <div className="nosotros-container3">
            <img
              alt="image"
              src="/LogosBebit/img_1122%202-200h.webp"
              className="nosotros-image"
            />
            <Column rootClassName="column-root-class-name"></Column>
          </div>
        </div>
      </div>
      <NuestraDiferenciaYValorAgregado rootClassName="nuestra-diferencia-y-valor-agregado-root-class-name"></NuestraDiferenciaYValorAgregado>
      <div className="nosotros-header111">
        <div className="nosotros-content">
          <div className="nosotros-columntwo">
            <div className="nosotros-content1">
              <span className="nosotros-text HeadingDesktopH1">
                <span>Nuestro equipo altamente calificado</span>
              </span>
              <span className="nosotros-text02 TextMediumNormal">
                <span>
                  Desde nuestra fundación en 1990, hemos crecido y diversificado
                  nuestras operaciones, convirtiéndonos en líderes en la
                  industria.
                </span>
              </span>
              <div className="nosotros-actions">
                <a
                  href="https://grupoacf.com.mx/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="nosotros-link"
                >
                  <div className="nosotros-style-primary-small-false-darkmode-false-iconposition-noi">
                    <span className="nosotros-text04">
                      <span>Grupo ACF</span>
                    </span>
                  </div>
                </a>
                <div className="nosotros-style-secondary-small-false-darkmode-true-iconposition-no">
                  <span className="nosotros-text06">
                    <span>Conoce más</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HitosImportantes rootClassName="hitos-importantes-root-class-name"></HitosImportantes>
      <LogisticaYSporte rootClassName="logistica-y-sporte-root-class-name"></LogisticaYSporte>
      <div className="nosotros-testimonial5">
        <div className="nosotros-section-title">
          <span className="nosotros-text08 HeadingDesktopH2">
            <span>Testimonios de clientes</span>
          </span>
          <span className="nosotros-text10 TextMediumNormal">
            <span>
              Descubre cómo Bebit ha cambiado la vida de nuestros clientes.
            </span>
          </span>
        </div>
        <div className="nosotros-content2">
          <div className="nosotros-column">
            <img
              alt="StarsI2016"
              src="/external/starsi2016-e1zw.svg"
              className="nosotros-stars"
            />
            <span className="nosotros-text12 HeadingDesktopH6">
              <span>
                El agua alcalina de Bebit ha mejorado mi salud en general. ¡No
                puedo vivir sin ella!
              </span>
            </span>
            <div className="nosotros-avatar">
              <img
                alt="AvatarImageI2016"
                src="/external/avatarimagei2016-9v1a-200h.webp"
                className="nosotros-avatar-image"
              />
              <div className="nosotros-avatar-content">
                <span className="nosotros-text14 TextRegularSemiBold">
                  <span>María López</span>
                </span>
                <span className="nosotros-text16 TextRegularNormal">
                  <span>Directora de Marketing</span>
                </span>
              </div>
            </div>
          </div>
          <div className="nosotros-column1">
            <img
              alt="StarsI2016"
              src="/external/starsi2016-ukin.svg"
              className="nosotros-stars1"
            />
            <span className="nosotros-text18 HeadingDesktopH6">
              Bebit es el mejor producto que he probado. ¡Lo recomiendo a todos!
            </span>
            <div className="nosotros-avatar1">
              <img
                alt="AvatarImageI2016"
                src="/external/avatarimagei2016-bt9d-200h.webp"
                className="nosotros-avatar-image1"
              />
              <div className="nosotros-avatar-content1">
                <span className="nosotros-text19 TextRegularSemiBold">
                  <span>Juan Pérez</span>
                </span>
                <span className="nosotros-text21 TextRegularNormal">
                  <span>Gerente de Ventas</span>
                </span>
              </div>
              <div className="nosotros-logo2-color-dark"></div>
            </div>
          </div>
        </div>
      </div>
      <FooterBebit rootClassName="footer-bebit-root-class-name"></FooterBebit>
    </div>
  )
}

export default Nosotros
