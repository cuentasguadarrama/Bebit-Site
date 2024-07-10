import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer-bebit.css'

const FooterBebit = (props) => {
  return (
    <div className={`footer-bebit-container ${props.rootClassName} `}>
      <div className="footer-bebit-frame63">
        <div className="footer-bebit-logo2">
          <div className="footer-bebit-container1">
            <span className="footer-bebit-text">
              Nuestras Marcas
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </div>
        </div>
        <div className="footer-bebit-container2">
          <img
            alt={props.wionpngwhite1Alt}
            src={props.wionpngwhite1Src}
            className="footer-bebit-wionpngwhite1"
          />
          <img
            alt={props.hydroactivewhitevertical1Alt}
            src={props.hydroactivewhitevertical1Src}
            className="footer-bebit-hydroactivewhitevertical1"
          />
          <Link to="/elite" className="footer-bebit-navlink">
            <img
              alt={props.elitewhite1Alt}
              src={props.elitewhite1Src}
              className="footer-bebit-elitewhite1"
            />
          </Link>
          <Link to="/onix" className="footer-bebit-navlink01">
            <img
              alt={props.oNIXLOGOWHITEPhotoroom1Alt}
              src={props.oNIXLOGOWHITEPhotoroom1Src}
              className="footer-bebit-onixlogowhite-photoroom1"
            />
          </Link>
        </div>
      </div>
      <div className="footer-bebit-footer1">
        <div className="footer-bebit-content">
          <div className="footer-bebit-newsletter">
            <img
              alt={props.colorDarkAlt}
              src={props.colorDarkSrc}
              className="footer-bebit-color-dark"
            />
            <span className="footer-bebit-text01 TextRegularNormal">
              <span className="">
                Únete a nuestro boletín para estar al día de las características
                y lanzamientos.
              </span>
            </span>
            <div className="footer-bebit-actions">
              <div className="footer-bebit-form">
                <input
                  type="text"
                  id="newsletter"
                  placeholder={props.textinputPlaceholder}
                  className="footer-bebit-textinput input"
                />
                <a
                  href="mailto:correo@bebit.com.mx?subject="
                  className="footer-bebit-link"
                >
                  <div className="footer-bebit-style-secondary-small-false-darkmode-false-iconposition-n">
                    <span className="footer-bebit-text03">
                      <span className="">Suscribirse</span>
                    </span>
                  </div>
                </a>
              </div>
              <span className="footer-bebit-text05 TextTinyNormal">
                <span className="">
                  Al suscribirte, aceptas nuestra Política de Privacidad y das
                  tu consentimiento para recibir actualizaciones de nuestra
                  empresa.
                </span>
              </span>
            </div>
          </div>
          <div className="footer-bebit-links">
            <div className="footer-bebit-column">
              <span className="footer-bebit-text07">Bebit</span>
              <div className="footer-bebit-footer-links">
                <Link to="/nosotros" className="footer-bebit-navlink02">
                  <div className="footer-bebit-link01">
                    <span className="footer-bebit-text08 TextSmallNormal">
                      <span className="">Sobre Nosotros</span>
                    </span>
                  </div>
                </Link>
                <Link to="/white-label" className="footer-bebit-navlink03">
                  <div className="footer-bebit-link02">
                    <span className="footer-bebit-text10 TextSmallNormal">
                      <span className="">Nuestros Servicios</span>
                    </span>
                  </div>
                </Link>
                <Link to="/store" className="footer-bebit-navlink04">
                  <div className="footer-bebit-link03">
                    <span className="footer-bebit-text12 TextSmallNormal">
                      Tienda
                    </span>
                  </div>
                </Link>
                <Link to="/contacto" className="footer-bebit-navlink05">
                  <div className="footer-bebit-link04">
                    <span className="footer-bebit-text13 TextSmallNormal">
                      <span className="">Carreras</span>
                    </span>
                  </div>
                </Link>
                <Link to="/contacto" className="footer-bebit-navlink06">
                  <div className="footer-bebit-link05">
                    <span className="footer-bebit-text15 TextSmallNormal">
                      Contacto
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="footer-bebit-column1">
              <span className="footer-bebit-text16 TextRegularSemiBold">
                Comunicación
              </span>
              <div className="footer-bebit-footer-links1">
                <Link to="/productos" className="footer-bebit-navlink07">
                  <div className="footer-bebit-link06">
                    <span className="footer-bebit-text17 TextSmallNormal">
                      <span className="">Productos Destacados</span>
                    </span>
                  </div>
                </Link>
                <Link to="/blog" className="footer-bebit-navlink08">
                  <div className="footer-bebit-link07">
                    <span className="footer-bebit-text19 TextSmallNormal">
                      <span className="">Blog</span>
                    </span>
                  </div>
                </Link>
                <div className="footer-bebit-link08">
                  <span className="footer-bebit-text21 TextSmallNormal">
                    <span className="">Testimonios</span>
                  </span>
                </div>
                <div className="footer-bebit-link09">
                  <span className="footer-bebit-text23 TextSmallNormal">
                    <span className="">Casos de Éxito</span>
                  </span>
                </div>
                <Link to="/faq" className="footer-bebit-navlink09">
                  <div className="footer-bebit-link10">
                    <span className="footer-bebit-text25 TextSmallNormal">
                      <span className="">FAQ</span>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <div className="footer-bebit-column2">
              <span className="footer-bebit-text27 TextRegularSemiBold">
                <span className="">Síguenos</span>
              </span>
              <div className="footer-bebit-social-links">
                <a
                  href={props.linkLink}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-bebit-link11"
                >
                  <div className="footer-bebit-link12">
                    <img
                      alt={props.iconFacebookAlt}
                      src={props.iconFacebookSrc}
                      className="footer-bebit-icon-facebook"
                    />
                    <span className="footer-bebit-text29 TextSmallNormal">
                      <span className="">Facebook</span>
                    </span>
                  </div>
                </a>
                <a
                  href={props.linkLink1}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-bebit-link13"
                >
                  <div className="footer-bebit-link14">
                    <img
                      alt={props.iconInstagramAlt}
                      src={props.iconInstagramSrc}
                      className="footer-bebit-icon-instagram"
                    />
                    <span className="footer-bebit-text31 TextSmallNormal">
                      <span className="">Instagram</span>
                    </span>
                  </div>
                </a>
                <a
                  href={props.linkLink2}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-bebit-link15"
                >
                  <div className="footer-bebit-link16">
                    <img
                      alt={props.iconXAlt}
                      src={props.iconXSrc}
                      className="footer-bebit-icon-x"
                    />
                    <span className="footer-bebit-text33 TextSmallNormal">
                      {props.text}
                    </span>
                  </div>
                </a>
                <div className="footer-bebit-link17">
                  <img
                    alt={props.iconLinkedInAlt}
                    src={props.iconLinkedInSrc}
                    className="footer-bebit-icon-linked-in"
                  />
                  <span className="footer-bebit-text34 TextSmallNormal">
                    <span className="">LinkedIn</span>
                  </span>
                </div>
                <div className="footer-bebit-link18">
                  <img
                    alt={props.iconYoutubeAlt}
                    src={props.iconYoutubeSrc}
                    className="footer-bebit-icon-youtube"
                  />
                  <span className="footer-bebit-text36 TextSmallNormal">
                    <span className="">Youtube</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bebit-credits">
          <img
            alt={props.dividerAlt}
            src={props.dividerSrc}
            className="footer-bebit-divider"
          />
          <div className="footer-bebit-row">
            <span className="footer-bebit-text38 TextSmallNormal">
              <span className="">
                © 2024 Bebit Todos los derechos reservados.
              </span>
            </span>
            <div className="footer-bebit-footer-links2">
              <span className="footer-bebit-text40 TextSmallLink">
                <span className="">Política de Privacidad</span>
              </span>
              <span className="footer-bebit-text42 TextSmallLink">
                <span className="">Términos de Servicio</span>
              </span>
              <span className="footer-bebit-text44 TextSmallLink">
                <span className="">Configuración de Cookies</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

FooterBebit.defaultProps = {
  iconXAlt: 'IconXI2016',
  linkLink1: 'https://www.instagram.com',
  textinputPlaceholder: 'placeholder',
  oNIXLOGOWHITEPhotoroom1Src:
    '/external/onixlogowhitephotoroom12016-vr5p-200h.webp',
  wionpngwhite1Alt: 'wionpngwhite12016',
  iconInstagramAlt: 'IconInstagramI2016',
  iconYoutubeSrc: '/external/iconyoutubei2016-cggj.svg',
  iconXSrc: '/external/iconxi2016-ulul.svg',
  linkLink: 'https://www.facebook.com/bebit-hidratacion',
  iconYoutubeAlt: 'IconYoutubeI2016',
  elitewhite1Alt: 'Elitewhite12016',
  iconFacebookSrc: '/external/iconfacebooki2016-c72n.svg',
  linkLink2: 'https://www.twitter.com',
  rootClassName: '',
  iconLinkedInAlt: 'IconLinkedInI2016',
  colorDarkSrc: '/LogosBebit/img_1122%202-200h.webp',
  oNIXLOGOWHITEPhotoroom1Alt: 'ONIXLOGOWHITEPhotoroom12016',
  hydroactivewhitevertical1Alt: 'Hydroactivewhitevertical12016',
  hydroactivewhitevertical1Src:
    '/external/hydroactivewhitevertical12016-772k-200w.webp',
  dividerAlt: 'DividerI2016',
  iconFacebookAlt: 'IconFacebookI2016',
  elitewhite1Src: '/external/elitewhite12016-w33x-200w.webp',
  iconInstagramSrc: '/external/iconinstagrami2016-ip98.svg',
  iconLinkedInSrc: '/external/iconlinkedini2016-0n0j.svg',
  dividerSrc: '/external/divideri2016-e5rj-200h.webp',
  colorDarkAlt: 'ColorDarkI2016',
  text: 'X',
  wionpngwhite1Src: '/external/wionpngwhite12016-fxdn-200h.webp',
}

FooterBebit.propTypes = {
  iconXAlt: PropTypes.string,
  linkLink1: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  oNIXLOGOWHITEPhotoroom1Src: PropTypes.string,
  wionpngwhite1Alt: PropTypes.string,
  iconInstagramAlt: PropTypes.string,
  iconYoutubeSrc: PropTypes.string,
  iconXSrc: PropTypes.string,
  linkLink: PropTypes.string,
  iconYoutubeAlt: PropTypes.string,
  elitewhite1Alt: PropTypes.string,
  iconFacebookSrc: PropTypes.string,
  linkLink2: PropTypes.string,
  rootClassName: PropTypes.string,
  iconLinkedInAlt: PropTypes.string,
  colorDarkSrc: PropTypes.string,
  oNIXLOGOWHITEPhotoroom1Alt: PropTypes.string,
  hydroactivewhitevertical1Alt: PropTypes.string,
  hydroactivewhitevertical1Src: PropTypes.string,
  dividerAlt: PropTypes.string,
  iconFacebookAlt: PropTypes.string,
  elitewhite1Src: PropTypes.string,
  iconInstagramSrc: PropTypes.string,
  iconLinkedInSrc: PropTypes.string,
  dividerSrc: PropTypes.string,
  colorDarkAlt: PropTypes.string,
  text: PropTypes.string,
  wionpngwhite1Src: PropTypes.string,
}

export default FooterBebit
