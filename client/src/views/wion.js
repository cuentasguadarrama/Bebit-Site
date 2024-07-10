import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import FooterBebit from '../components/footer-bebit'
import './wion.css'

const Wion = (props) => {
  return (
    <div className="wion-container">
      <Helmet>
        <title>Wion - Bebit - Hidratacion</title>
        <meta property="og:title" content="Wion - Bebit - Hidratacion " />
      </Helmet>
      <div className="wion-wion">
        <Navbar rootClassName="navbar-root-class-name10"></Navbar>
        <div className="wion-header5">
          <div className="wion-column">
            <div className="wion-content">
              <span className="wion-text HeadingDesktopH1">
                <span>&quot;Pureza Alcalina que Marca la Diferencia</span>
              </span>
              <span className="wion-text002 TextMediumNormal">
                <span>Purifica, revitaliza y equilibra tu cuerpo con Wion</span>
              </span>
            </div>
            <div className="wion-actions">
              <div className="wion-style-primary-small-false-darkmode-false-iconposition-noi">
                <span className="wion-text004">
                  <span>Conoce más</span>
                </span>
              </div>
              <Link to="/store" className="wion-navlink">
                <div className="wion-style-secondary-small-false-darkmode-true-iconposition-no">
                  <span className="wion-text006">
                    <span>Compra</span>
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <img
            alt="image"
            sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
            src="/Bebidas/captura%20de%20pantalla%202024-06-20%20a%20la(s)%2022.47.43-1500w.webp"
            srcSet="Bebidas//captura%20de%20pantalla%202024-06-20%20a%20la(s)%2022.47.43-1500w.webp 1200w, Bebidas/captura%20de%20pantalla%202024-06-20%20a%20la(s)%2022.47.43-tablet.webp 800w, Bebidas/captura%20de%20pantalla%202024-06-20%20a%20la(s)%2022.47.43-mobile.webp 480w"
            className="wion-image"
          />
        </div>
        <div className="wion-tienda-wion">
          <div className="wion-content1">
            <div className="wion-product">
              <img
                alt="PlaceholderImage2003"
                sizes="(min-width: 768px) 800px, 480px"
                src="/external/placeholderimage2003-2dp-700w.webp"
                srcSet="external//placeholderimage2003-2dp-700w.webp 800w, external/placeholderimage2003-2dp-mobile.webp 480w"
                className="wion-placeholder-image"
              />
              <button className="wion-slider-buttons">
                <button className="wion-button">
                  <img
                    alt="Icon2003"
                    src="/external/icon2003-8xq.svg"
                    className="wion-icon"
                  />
                </button>
              </button>
              <button className="wion-button1">
                <img
                  alt="Icon2003"
                  src="/external/icon2003-guzn.svg"
                  className="wion-icon1"
                />
              </button>
              <div className="wion-slider-dots">
                <img
                  alt="Dot2003"
                  src="/external/dot2003-784a-200h.webp"
                  className="wion-dot"
                />
                <img
                  alt="Dot2003"
                  src="/external/dot2003-clkp-200h.webp"
                  className="wion-dot1"
                />
                <img
                  alt="Dot2003"
                  src="/external/dot2003-05i9-200h.webp"
                  className="wion-dot2"
                />
                <img
                  alt="Dot2003"
                  src="/external/dot2003-m0ld-200h.webp"
                  className="wion-dot3"
                />
              </div>
            </div>
            <div className="wion-column1">
              <div className="wion-product-description">
                <div className="wion-breadcrumbs">
                  <span className="wion-text008 TextSmallNormal">
                    <span>Comprar todo</span>
                  </span>
                  <img
                    alt="Iconchevronright2003"
                    src="/external/iconchevronright2003-b5z8.svg"
                    className="wion-iconchevronright"
                  />
                  <span className="wion-text010 TextSmallNormal">
                    <span>Categoría</span>
                  </span>
                  <img
                    alt="Iconchevronright2003"
                    src="/external/iconchevronright2003-hue.svg"
                    className="wion-iconchevronright1"
                  />
                  <span className="wion-text012 TextSmallSemiBold">
                    <span>Wion</span>
                  </span>
                </div>
                <span className="wion-text014 HeadingDesktopH3">
                  <span>Wion</span>
                </span>
                <div className="wion-price">
                  <span className="wion-text016 HeadingDesktopH5">
                    <span>
                      $55
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <img
                    alt="Divider2003"
                    src="/external/divider2003-4419.svg"
                    className="wion-divider"
                  />
                  <div className="wion-product-review">
                    <img
                      alt="Stars2003"
                      src="/external/stars2003-g8q.svg"
                      className="wion-stars"
                    />
                    <span className="wion-text018 TextSmallNormal">
                      <span>(3.5 estrellas) • 10 reseñas</span>
                    </span>
                  </div>
                </div>
                <div className="wion-description">
                  <span className="wion-text020 TextRegularNormal">
                    <span>
                      Wion ofrece una hidratación alcalina superior que
                      revitaliza y purifica tu cuerpo. Con un pH equilibrado, es
                      la elección perfecta para mantenerte fresco y saludable
                      durante todo el día.
                    </span>
                  </span>
                  <div className="wion-list">
                    <div className="wion-list-item">
                      <span className="wion-text022 TextRegularNormal">
                        <span>Hidratación alcalina superior</span>
                      </span>
                    </div>
                    <div className="wion-list-item1">
                      <span className="wion-text024 TextRegularNormal">
                        <span>Revitaliza y purifica tu cuerpo</span>
                      </span>
                    </div>
                    <div className="wion-list-item2">
                      <span className="wion-text026 TextRegularNormal">
                        <span>pH equilibrado</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="wion-form">
                  <div className="wion-input">
                    <span className="wion-text028 TextRegularNormal">
                      <span>Variante</span>
                    </span>
                    <div className="wion-icon-false">
                      <span className="wion-text030">
                        <span>Seleccionar</span>
                      </span>
                      <img
                        alt="IconchevrondownI2003"
                        src="/external/iconchevrondowni2003-j4vh.svg"
                        className="wion-iconchevrondown"
                      />
                    </div>
                  </div>
                  <div className="wion-input1">
                    <span className="wion-text032 TextRegularNormal">
                      <span>Variante</span>
                    </span>
                    <div className="wion-variants">
                      <div className="wion-row">
                        <div className="wion-selected-true">
                          <span className="wion-text034">
                            <span>12 Pack</span>
                          </span>
                        </div>
                        <div className="wion-selected-false">
                          <span className="wion-text036">
                            <span>24 Pack</span>
                          </span>
                        </div>
                      </div>
                      <div className="wion-selected-false1">
                        <span className="wion-text038">
                          <span>Opción tres</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="wion-input2">
                    <span className="wion-text040 TextRegularNormal">
                      <span>Cantidad</span>
                    </span>
                    <div className="wion-type-default">
                      <span className="wion-text042">1</span>
                    </div>
                  </div>
                  <div className="wion-frame1">
                    <div className="wion-form-submit">
                      <div className="wion-style-primary-small-false-darkmode-false-iconposition-noi1">
                        <span className="wion-text043">
                          <span>Agregar al carrito</span>
                        </span>
                      </div>
                      <Link to="/store" className="wion-navlink1">
                        <div className="wion-style-secondary-small-false-darkmode-false-iconposition-n">
                          <span className="wion-text045">
                            <span>Comprar ahora</span>
                          </span>
                        </div>
                      </Link>
                    </div>
                    <span className="wion-text047 TextTinyNormal">
                      <span>Envío gratis sobre $50</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="wion-accordion">
                <div className="wion-accordion-item">
                  <span className="wion-text049 TextMediumSemiBold">
                    <span>Detalles</span>
                  </span>
                  <span className="wion-text051 TextRegularNormal">
                    <span>
                      Descubre la pureza en cada sorbo con Wion, la marca que se
                      convierte en tu aliado para el bienestar diario.
                    </span>
                  </span>
                </div>
                <img
                  alt="Divider2003"
                  src="/external/divider2003-8mg-200h.webp"
                  className="wion-divider1"
                />
                <div className="wion-accordion-item1">
                  <span className="wion-text053 TextMediumSemiBold">
                    <span>Envío</span>
                  </span>
                  <span className="wion-text055 TextRegularNormal">
                    <span>
                      Envío gratis en pedidos superiores a $500 MXN. Disfruta de
                      Wion en casa.
                    </span>
                  </span>
                </div>
                <img
                  alt="Divider2003"
                  src="/external/divider2003-cy5l-200h.webp"
                  className="wion-divider2"
                />
                <div className="wion-accordion-item2">
                  <span className="wion-text057 TextMediumSemiBold">
                    <span>Devoluciones</span>
                  </span>
                  <span className="wion-text059 TextRegularNormal">
                    <span>
                      Aceptamos devoluciones dentro de los 30 días posteriores a
                      la compra. Los productos deben estar sin abrir y en su
                      empaque original.
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wion-stats-wion">
          <div className="wion-content2">
            <div className="wion-content3">
              <div className="wion-section-title">
                <span className="wion-text061 TextRegularSemiBold">
                  <span>Equilibrio</span>
                </span>
                <div className="wion-content4">
                  <span className="wion-text063 HeadingDesktopH2">
                    <span>Beneficios de Wion para tu salud</span>
                  </span>
                  <span className="wion-text065 TextMediumNormal">
                    <span>
                      Wion es una bebida que equilibra los niveles de pH, mejora
                      la salud digestiva y facilita la rehidratación, entre
                      otros beneficios para la salud.
                    </span>
                  </span>
                </div>
              </div>
              <div className="wion-actions1">
                <div className="wion-style-secondary-small-false-darkmode-true-iconposition-no1">
                  <span className="wion-text067">
                    <span>Descubre</span>
                  </span>
                </div>
                <div className="wion-style-link-small-false-darkmode-true-iconposition-trailin">
                  <span className="wion-text069">
                    <span>Comprar</span>
                  </span>
                  <img
                    alt="IconchevronrightI2003"
                    src="/external/iconchevronrighti2003-a08.svg"
                    className="wion-iconchevronright2"
                  />
                </div>
              </div>
            </div>
            <div className="wion-stats">
              <div className="wion-row1">
                <div className="wion-stat">
                  <span className="wion-text071">
                    <span>17%</span>
                  </span>
                  <span className="wion-text073 HeadingDesktopH6">
                    <span>Aumenta la hidratación en un 17% más rápido.</span>
                  </span>
                </div>
                <div className="wion-stat1">
                  <span className="wion-text075">
                    <span>30%</span>
                  </span>
                  <span className="wion-text077 HeadingDesktopH6">
                    <span>Mejora del 30% en función renal.</span>
                  </span>
                </div>
              </div>
              <div className="wion-row2">
                <div className="wion-stat2">
                  <span className="wion-text079">
                    <span>22%</span>
                  </span>
                  <span className="wion-text081 HeadingDesktopH6">
                    <span>Reducción de fatiga y mejora en recuperación.</span>
                  </span>
                </div>
                <div className="wion-stat3">
                  <span className="wion-text083">
                    <span>20%</span>
                  </span>
                  <span className="wion-text085 HeadingDesktopH6">
                    <span>Reducción del 20% en estrés oxidativo.</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wion-header111">
          <div className="wion-content5">
            <div className="wion-columnone">
              <span className="wion-text087 HeadingDesktopH1">
                Ideal para Mantener el Equilibrio de pH
              </span>
            </div>
            <div className="wion-columntwo">
              <div className="wion-content6">
                <span className="wion-text088 TextMediumNormal">
                  <span>
                    Ideal para mantener el equilibrio de pH y la hidratación
                  </span>
                </span>
                <div className="wion-actions2">
                  <div className="wion-style-primary-small-false-darkmode-false-iconposition-noi2">
                    <span className="wion-text090">
                      <span>Conoce más</span>
                    </span>
                  </div>
                  <Link to="/store" className="wion-navlink2">
                    <div className="wion-style-secondary-small-false-darkmode-true-iconposition-no2">
                      <span className="wion-text092">
                        <span>Compra</span>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wion-testimonial5">
          <div className="wion-section-title1">
            <span className="wion-text094 HeadingDesktopH2">
              <span>Testimonios de clientes</span>
            </span>
            <span className="wion-text096 TextMediumNormal">
              <span>Descubre cómo Bebit ha ayudado a nuestros clientes</span>
            </span>
          </div>
          <div className="wion-content7">
            <div className="wion-column2">
              <img
                alt="StarsI2003"
                src="/external/starsi2003-welm.svg"
                className="wion-stars1"
              />
              <span className="wion-text098 HeadingDesktopH6">
                <span>
                  &quot;¡El producto Wion ha cambiado mi vida! Ahora me siento
                  más energizado y saludable que nunca. ¡Lo recomiendo a
                  todos!&quot;
                </span>
              </span>
              <div className="wion-avatar">
                <img
                  alt="AvatarImageI2003"
                  src="/external/avatarimagei2003-vl9xy-200h.webp"
                  className="wion-avatar-image"
                />
                <div className="wion-avatar-content">
                  <span className="wion-text100 TextRegularSemiBold">
                    <span>Juan Pérez</span>
                  </span>
                  <span className="wion-text102 TextRegularNormal">
                    <span>CEO, Empresa XYZ</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="wion-column3">
              <img
                alt="StarsI2003"
                src="/external/starsi2003-09nv.svg"
                className="wion-stars2"
              />
              <span className="wion-text104">
                &quot;Es un agua que me ha ayudado mucho a balancear mi cuerpo,
                no es pesada y me ayuda a sentirme bien antes y después de hacer
                ejercicio.
              </span>
              <div className="wion-avatar1">
                <img
                  alt="AvatarImageI2003"
                  src="/external/avatarimagei2003-rew-200h.webp"
                  className="wion-avatar-image1"
                />
                <div className="wion-avatar-content1">
                  <span className="wion-text105 TextRegularSemiBold">
                    Raúl Ledezma
                  </span>
                  <span className="wion-text106">Corredor y Emprendedor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterBebit rootClassName="footer-bebit-root-class-name10"></FooterBebit>
        <img
          alt="IMG112222003"
          src="/external/img112222003-zm3-200h.webp"
          className="wion-img11222"
        />
      </div>
    </div>
  )
}

export default Wion
