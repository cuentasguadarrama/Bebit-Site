import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import FooterBebit from '../components/footer-bebit'
import './hidroactive.css'

const Hidroactive = (props) => {
  return (
    <div className="hidroactive-container">
      <Helmet>
        <title>Hidroactive - Bebit - Hidratación</title>
        <meta
          name="description"
          content="La nueva forma de refrescarte y recuperar energias."
        />
        <meta property="og:title" content="Hidroactive - Bebit - Hidratación" />
        <meta
          property="og:description"
          content="La nueva forma de refrescarte y recuperar energias."
        />
      </Helmet>
      <div className="hidroactive-hidroactive">
        <Navbar rootClassName="navbar-root-class-name8"></Navbar>
        <div className="hidroactive-header5">
          <div className="hidroactive-column">
            <div className="hidroactive-content">
              <span className="hidroactive-text HeadingDesktopH1">
                Pronta Recuperación para Atletas
              </span>
              <span className="hidroactive-text001 TextMediumNormal">
                <span>
                  Formulada para reponer electrolitos y líquidos perdidos
                  durante actividades físicas intensas
                </span>
              </span>
            </div>
            <div className="hidroactive-actions">
              <div className="hidroactive-style-primary-small-false-darkmode-false-iconposition-noi">
                <span className="hidroactive-text003">
                  <span>Conoce más</span>
                </span>
              </div>
              <div className="hidroactive-style-secondary-small-false-darkmode-true-iconposition-no">
                <span className="hidroactive-text005">
                  <span>Compra</span>
                </span>
              </div>
            </div>
          </div>
          <img
            alt="image"
            sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
            src="/Bebidas/a%20vibrant%20product%20sh%20(1)-2000w.webp"
            srcSet="Bebidas//a%20vibrant%20product%20sh%20(1)-2000w.webp 1200w, Bebidas/a%20vibrant%20product%20sh%20(1)-tablet.webp 800w, Bebidas/a%20vibrant%20product%20sh%20(1)-mobile.webp 480w"
            className="hidroactive-image"
          />
        </div>
        <div className="hidroactive-product-header7">
          <div className="hidroactive-content1">
            <div className="hidroactive-product">
              <img
                alt="PlaceholderImage2016"
                sizes="(min-width: 768px) 800px, 480px"
                src="/external/placeholderimage2016-zieh-700w.webp"
                srcSet="external//placeholderimage2016-zieh-700w.webp 800w, external/placeholderimage2016-zieh-mobile.webp 480w"
                className="hidroactive-placeholder-image"
              />
              <button className="hidroactive-slider-buttons">
                <button className="hidroactive-button">
                  <img
                    alt="Icon2016"
                    src="/external/icon2016-31aj.svg"
                    className="hidroactive-icon"
                  />
                </button>
              </button>
              <button className="hidroactive-button1">
                <img
                  alt="Icon2016"
                  src="/external/icon2016-hjk6.svg"
                  className="hidroactive-icon1"
                />
              </button>
              <div className="hidroactive-slider-dots">
                <img
                  alt="Dot2016"
                  src="/external/dot2016-g40i-200h.webp"
                  className="hidroactive-dot"
                />
                <img
                  alt="Dot2016"
                  src="/external/dot2016-zxxi-200h.webp"
                  className="hidroactive-dot1"
                />
                <img
                  alt="Dot2016"
                  src="/external/dot2016-xhj3-200h.webp"
                  className="hidroactive-dot2"
                />
                <img
                  alt="Dot2016"
                  src="/external/dot2016-z9es-200h.webp"
                  className="hidroactive-dot3"
                />
              </div>
            </div>
            <div className="hidroactive-column1">
              <div className="hidroactive-product-description">
                <div className="hidroactive-breadcrumbs">
                  <span className="hidroactive-text007 TextSmallNormal">
                    <span>Comprar todo</span>
                  </span>
                  <img
                    alt="Iconchevronright2016"
                    src="/external/iconchevronright2016-saso.svg"
                    className="hidroactive-iconchevronright"
                  />
                  <span className="hidroactive-text009 TextSmallNormal">
                    <span>Categoría</span>
                  </span>
                  <img
                    alt="Iconchevronright2016"
                    src="/external/iconchevronright2016-y5dp.svg"
                    className="hidroactive-iconchevronright1"
                  />
                  <span className="hidroactive-text011 TextSmallSemiBold">
                    <span>Hidroactive</span>
                  </span>
                </div>
                <span className="hidroactive-text013 HeadingDesktopH3">
                  <span>Hydroactive</span>
                </span>
                <div className="hidroactive-price">
                  <span className="hidroactive-text015 HeadingDesktopH5">
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
                    alt="Divider2016"
                    src="/external/divider2016-mmi.svg"
                    className="hidroactive-divider"
                  />
                  <div className="hidroactive-product-review">
                    <img
                      alt="Stars2016"
                      src="/external/stars2016-4h0q.svg"
                      className="hidroactive-stars"
                    />
                    <span className="hidroactive-text017 TextSmallNormal">
                      <span>(3.5 estrellas) • 10 reseñas</span>
                    </span>
                  </div>
                </div>
                <div className="hidroactive-description">
                  <span className="hidroactive-text019 TextRegularNormal">
                    <span>
                      Hydroactive: la bebida deportiva que contiene electrolitos
                      y carbohidratos, diseñada para mejorar el rendimiento
                      físico durante la actividad deportiva.
                    </span>
                  </span>
                  <div className="hidroactive-list">
                    <div className="hidroactive-list-item">
                      <span className="hidroactive-text021 TextRegularNormal">
                        <span>
                          Electrolitos y carbohidratos de absorción rápida
                        </span>
                      </span>
                    </div>
                    <div className="hidroactive-list-item1">
                      <span className="hidroactive-text023 TextRegularNormal">
                        <span>Mantenimiento de energía y enfoque</span>
                      </span>
                    </div>
                    <div className="hidroactive-list-item2">
                      <span className="hidroactive-text025 TextRegularNormal">
                        <span>Recuperación óptima y sostenida</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="hidroactive-form">
                  <div className="hidroactive-input">
                    <span className="hidroactive-text027 TextRegularNormal">
                      <span>Variante</span>
                    </span>
                    <div className="hidroactive-icon-false">
                      <span className="hidroactive-text029">
                        <span>Seleccionar</span>
                      </span>
                      <img
                        alt="IconchevrondownI2016"
                        src="/external/iconchevrondowni2016-8ood.svg"
                        className="hidroactive-iconchevrondown"
                      />
                    </div>
                  </div>
                  <div className="hidroactive-input1">
                    <span className="hidroactive-text031 TextRegularNormal">
                      <span>Variante</span>
                    </span>
                    <div className="hidroactive-variants">
                      <div className="hidroactive-row">
                        <div className="hidroactive-selected-true">
                          <span className="hidroactive-text033">
                            <span>12 Pack</span>
                          </span>
                        </div>
                        <div className="hidroactive-selected-false">
                          <span className="hidroactive-text035">
                            <span>24 Pack</span>
                          </span>
                        </div>
                      </div>
                      <div className="hidroactive-selected-false1">
                        <span className="hidroactive-text037">
                          <span>Opción tres</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="hidroactive-input2">
                    <span className="hidroactive-text039 TextRegularNormal">
                      <span>Cantidad</span>
                    </span>
                    <div className="hidroactive-type-default">
                      <span className="hidroactive-text041">1</span>
                    </div>
                  </div>
                  <div className="hidroactive-frame1">
                    <div className="hidroactive-form-submit">
                      <div className="hidroactive-style-primary-small-false-darkmode-false-iconposition-noi1">
                        <span className="hidroactive-text042">
                          <span>Agregar al carrito</span>
                        </span>
                      </div>
                      <Link to="/store" className="hidroactive-navlink">
                        <div className="hidroactive-style-secondary-small-false-darkmode-false-iconposition-n">
                          <span className="hidroactive-text044">
                            <span>Comprar ahora</span>
                          </span>
                        </div>
                      </Link>
                    </div>
                    <span className="hidroactive-text046 TextTinyNormal">
                      <span>Envío gratis sobre $500</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="hidroactive-accordion">
                <div className="hidroactive-accordion-item">
                  <span className="hidroactive-text048 TextMediumSemiBold">
                    <span>Uso Recomendado</span>
                  </span>
                  <span className="hidroactive-text050 TextRegularNormal">
                    <span>
                      Ideal para consumir durante y después de entrenamientos
                      intensos o competiciones deportivas.
                    </span>
                  </span>
                </div>
                <img
                  alt="Divider2016"
                  src="/external/divider2016-3rir-200h.webp"
                  className="hidroactive-divider1"
                />
                <div className="hidroactive-accordion-item1">
                  <span className="hidroactive-text052 TextMediumSemiBold">
                    <span>Envío</span>
                  </span>
                  <span className="hidroactive-text054 TextRegularNormal">
                    <span>
                      Envío gratis en pedidos superiores a $500 MXN. Disfruta de
                      Hydroactive en casa.
                    </span>
                  </span>
                </div>
                <img
                  alt="Divider2016"
                  src="/external/divider2016-rb4o-200h.webp"
                  className="hidroactive-divider2"
                />
                <div className="hidroactive-accordion-item2">
                  <span className="hidroactive-text056 TextMediumSemiBold">
                    <span>Devoluciones</span>
                  </span>
                  <span className="hidroactive-text058 TextRegularNormal">
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
        <div className="hidroactive-stats15">
          <div className="hidroactive-content2">
            <div className="hidroactive-content3">
              <div className="hidroactive-section-title">
                <span className="hidroactive-text060 TextRegularSemiBold">
                  <span>Equilibrio</span>
                </span>
                <div className="hidroactive-content4">
                  <span className="hidroactive-text062 HeadingDesktopH2">
                    <span>
                      Beneficios de Hydroactive para tu rutina deportiva
                    </span>
                  </span>
                  <span className="hidroactive-text064 TextMediumNormal">
                    <span>
                      Descubre los beneficios respaldados por evidencia
                      científica de Hydroactive, la bebida deportiva.
                    </span>
                  </span>
                </div>
              </div>
              <div className="hidroactive-actions1">
                <div className="hidroactive-style-secondary-small-false-darkmode-true-iconposition-no1">
                  <span className="hidroactive-text066">
                    <span>Descubre</span>
                  </span>
                </div>
                <Link to="/store" className="hidroactive-navlink1">
                  <div className="hidroactive-style-link-small-false-darkmode-true-iconposition-trailin">
                    <span className="hidroactive-text068">
                      <span>Comprar</span>
                    </span>
                    <img
                      alt="IconchevronrightI2016"
                      src="/external/iconchevronrighti2016-5j.svg"
                      className="hidroactive-iconchevronright2"
                    />
                  </div>
                </Link>
              </div>
            </div>
            <div className="hidroactive-stats">
              <div className="hidroactive-row1">
                <div className="hidroactive-stat">
                  <span className="hidroactive-text070">
                    <span>30%</span>
                  </span>
                  <span className="hidroactive-text072 HeadingDesktopH6">
                    <span>Recuperación mejorada, menos fatiga.</span>
                  </span>
                </div>
                <div className="hidroactive-stat1">
                  <span className="hidroactive-text074">
                    <span>22%</span>
                  </span>
                  <span className="hidroactive-text076 HeadingDesktopH6">
                    <span>
                      Mejora la hidratación y reposición de electrolitos.
                    </span>
                  </span>
                </div>
              </div>
              <div className="hidroactive-row2">
                <div className="hidroactive-stat2">
                  <span className="hidroactive-text078">
                    <span>50%</span>
                  </span>
                  <span className="hidroactive-text080 HeadingDesktopH6">
                    <span>Reducción del daño oxidativo</span>
                  </span>
                </div>
                <div className="hidroactive-stat3">
                  <span className="hidroactive-text082">
                    <span>50%</span>
                  </span>
                  <span className="hidroactive-text084 HeadingDesktopH6">
                    <span>Mejora del rendimiento físico</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidroactive-header111">
          <div className="hidroactive-content5">
            <div className="hidroactive-columnone">
              <span className="hidroactive-text086 HeadingDesktopH1">
                Energía y Recuperación Total para Atletas
              </span>
            </div>
            <div className="hidroactive-columntwo">
              <div className="hidroactive-content6">
                <span className="hidroactive-text087 TextMediumNormal">
                  <span>
                    Asegura recuperación completa después del entrenamiento,
                    manteniendo energía y rendimiento óptimos.
                  </span>
                </span>
                <div className="hidroactive-actions2">
                  <div className="hidroactive-style-primary-small-false-darkmode-false-iconposition-noi2">
                    <span className="hidroactive-text089">
                      <span>Conoce más</span>
                    </span>
                  </div>
                  <Link to="/store" className="hidroactive-navlink2">
                    <div className="hidroactive-style-secondary-small-false-darkmode-true-iconposition-no2">
                      <span className="hidroactive-text091">
                        <span>Compra</span>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidroactive-testimonial5">
          <div className="hidroactive-section-title1">
            <span className="hidroactive-text093 HeadingDesktopH2">
              <span>Testimonios de clientes</span>
            </span>
            <span className="hidroactive-text095 TextMediumNormal">
              <span>
                Descubre cómo Bebit ha cambiado la vida de nuestros clientes.
              </span>
            </span>
          </div>
          <div className="hidroactive-content7">
            <div className="hidroactive-column2">
              <img
                alt="StarsI2016"
                src="/external/starsi2016-dwui.svg"
                className="hidroactive-stars1"
              />
              <span className="hidroactive-text097 HeadingDesktopH6">
                <span>
                  El agua alcalina de Bebit ha mejorado mi salud en general. ¡No
                  puedo vivir sin ella!
                </span>
              </span>
              <div className="hidroactive-avatar">
                <img
                  alt="AvatarImageI2016"
                  src="/external/avatarimagei2016-49zn-200h.webp"
                  className="hidroactive-avatar-image"
                />
                <div className="hidroactive-avatar-content">
                  <span className="hidroactive-text099 TextRegularSemiBold">
                    <span>María López</span>
                  </span>
                  <span className="hidroactive-text101 TextRegularNormal">
                    <span>Directora de Marketing</span>
                  </span>
                </div>
                <div className="hidroactive-logo2-color-dark"></div>
              </div>
            </div>
            <div className="hidroactive-column3">
              <img
                alt="StarsI2016"
                src="/external/starsi2016-ju9.svg"
                className="hidroactive-stars2"
              />
              <span className="hidroactive-text103 HeadingDesktopH6">
                <span>
                  Bebit es el mejor producto que he probado. ¡Lo recomiendo a
                  todos!
                </span>
              </span>
              <div className="hidroactive-avatar1">
                <img
                  alt="AvatarImageI2016"
                  src="/external/avatarimagei2016-21mm-200h.webp"
                  className="hidroactive-avatar-image1"
                />
                <div className="hidroactive-avatar-content1">
                  <span className="hidroactive-text105 TextRegularSemiBold">
                    <span>Juan Pérez</span>
                  </span>
                  <span className="hidroactive-text107 TextRegularNormal">
                    <span>Gerente de Ventas</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterBebit rootClassName="footer-bebit-root-class-name8"></FooterBebit>
      </div>
    </div>
  )
}

export default Hidroactive
