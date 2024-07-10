import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import FooterBebit from '../components/footer-bebit'
import './elite.css'

const Elite = (props) => {
  return (
    <div className="elite-container">
      <Helmet>
        <title>Elite - Bebit - Hidratacion</title>
        <meta property="og:title" content="Elite - Bebit - Hidratacion " />
      </Helmet>
      <div className="elite-elite">
        <Navbar rootClassName="navbar-root-class-name7"></Navbar>
        <div className="elite-header5">
          <div className="elite-column">
            <div className="elite-content">
              <span className="elite-text HeadingDesktopH1">
                Avanzada tecnología de hidratación
              </span>
              <span className="elite-text01 TextMediumNormal">
                <span>
                  Ideal para mantener la energía y organización en el hogar.
                </span>
              </span>
            </div>
            <div className="elite-actions">
              <div className="elite-style-primary-small-false-darkmode-false-iconposition-noi">
                <span className="elite-text03">
                  <span>Conoce más</span>
                </span>
              </div>
              <Link to="/store" className="elite-navlink">
                <div className="elite-style-secondary-small-false-darkmode-true-iconposition-no">
                  <span className="elite-text05">
                    <span>Compra</span>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="elite-product-header7">
          <div className="elite-content1">
            <div className="elite-product">
              <img
                alt="PlaceholderImageI2016"
                sizes="(min-width: 768px) 800px, 480px"
                src="/external/placeholderimagei2016-eu2-700w.webp"
                srcSet="external//placeholderimagei2016-eu2-700w.webp 800w, external/placeholderimagei2016-eu2-mobile.webp 480w"
                className="elite-placeholder-image"
              />
              <button className="elite-slider-buttons">
                <button className="elite-button">
                  <img
                    alt="IconI2016"
                    src="/external/iconi2016-9h9i.svg"
                    className="elite-icon"
                  />
                </button>
              </button>
              <button className="elite-button1">
                <img
                  alt="IconI2016"
                  src="/external/iconi2016-1s52a.svg"
                  className="elite-icon1"
                />
              </button>
              <div className="elite-slider-dots">
                <img
                  alt="DotI2016"
                  src="/external/doti2016-8lr9-200h.webp"
                  className="elite-dot"
                />
                <img
                  alt="DotI2016"
                  src="/external/doti2016-g2n9-200h.webp"
                  className="elite-dot1"
                />
                <img
                  alt="DotI2016"
                  src="/external/doti2016-n19u-200h.webp"
                  className="elite-dot2"
                />
                <img
                  alt="DotI2016"
                  src="/external/doti2016-qev-200h.webp"
                  className="elite-dot3"
                />
              </div>
            </div>
            <div className="elite-column1">
              <div className="elite-product-description">
                <div className="elite-breadcrumbs">
                  <span className="elite-text07 TextSmallNormal">
                    <span>Comprar todo</span>
                  </span>
                  <img
                    alt="IconchevronrightI2016"
                    src="/external/iconchevronrighti2016-31zj.svg"
                    className="elite-iconchevronright"
                  />
                  <span className="elite-text09 TextSmallNormal">
                    <span>Categoría</span>
                  </span>
                  <img
                    alt="IconchevronrightI2016"
                    src="/external/iconchevronrighti2016-i7km.svg"
                    className="elite-iconchevronright1"
                  />
                  <span className="elite-text11 TextSmallSemiBold">
                    <span>Elite</span>
                  </span>
                </div>
                <span className="elite-text13 HeadingDesktopH3">
                  <span>Elite</span>
                </span>
                <div className="elite-price">
                  <span className="elite-text15 HeadingDesktopH5">
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
                    alt="DividerI2016"
                    src="/external/divideri2016-b9uw.svg"
                    className="elite-divider"
                  />
                  <div className="elite-product-review">
                    <img
                      alt="StarsI2016"
                      src="/external/starsi2016-k3tb.svg"
                      className="elite-stars"
                    />
                    <span className="elite-text17 TextSmallNormal">
                      (4.5 estrellas) • 10 reseñas
                    </span>
                  </div>
                </div>
                <div className="elite-description">
                  <span className="elite-text18 TextRegularNormal">
                    <span>
                      Descubre los increíbles beneficios de Elite, un producto
                      de primera calidad que te ayudará a mejorar tu bienestar y
                      vitalidad.
                    </span>
                  </span>
                  <div className="elite-list">
                    <div className="elite-list-item">
                      <span className="elite-text20 TextRegularNormal">
                        <span>
                          Reposición rápida de minerales perdidos durante la
                          actividad física.
                        </span>
                      </span>
                    </div>
                    <div className="elite-list-item1">
                      <span className="elite-text22 TextRegularNormal">
                        <span>
                          Ingredientes de alta calidad para una frescura
                          duradera.
                        </span>
                      </span>
                    </div>
                    <div className="elite-list-item2">
                      <span className="elite-text24 TextRegularNormal">
                        <span>
                          Perfecta para atletas y personas activas que necesitan
                          recuperación rápida.
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="elite-form">
                  <div className="elite-input">
                    <span className="elite-text26 TextRegularNormal">
                      <span>Variante</span>
                    </span>
                    <div className="elite-icon-false">
                      <span className="elite-text28">
                        <span>Seleccionar</span>
                      </span>
                      <img
                        alt="IconchevrondownI2016"
                        src="/external/iconchevrondowni2016-essg.svg"
                        className="elite-iconchevrondown"
                      />
                    </div>
                  </div>
                  <div className="elite-input1">
                    <span className="elite-text30 TextRegularNormal">
                      <span>Variante</span>
                    </span>
                    <div className="elite-variants">
                      <div className="elite-row">
                        <div className="elite-selected-true">
                          <span className="elite-text32">
                            <span>12 Pack</span>
                          </span>
                        </div>
                        <div className="elite-selected-false">
                          <span className="elite-text34">
                            <span>24 Pack</span>
                          </span>
                        </div>
                      </div>
                      <div className="elite-selected-false1">
                        <span className="elite-text36">
                          <span>Opción tres</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="elite-input2">
                    <span className="elite-text38 TextRegularNormal">
                      <span>Cantidad</span>
                    </span>
                    <div className="elite-type-default">
                      <span className="elite-text40">1</span>
                    </div>
                  </div>
                  <div className="elite-frame1">
                    <div className="elite-form-submit">
                      <div className="elite-style-primary-small-false-darkmode-false-iconposition-noi1">
                        <span className="elite-text41">
                          <span>Agregar al carrito</span>
                        </span>
                      </div>
                      <Link to="/store" className="elite-navlink1">
                        <div className="elite-style-secondary-small-false-darkmode-false-iconposition-n">
                          <span className="elite-text43">
                            <span className="elite-text44">Comprar</span>
                            <span className="elite-text45">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <span>ahora</span>
                          </span>
                        </div>
                      </Link>
                    </div>
                    <span className="elite-text47 TextTinyNormal">
                      <span>Envío gratuito en compras superiores a $50</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="elite-accordion">
                <div className="elite-accordion-item">
                  <span className="elite-text49 TextMediumSemiBold">
                    <span>Detalles</span>
                  </span>
                  <span className="elite-text51 TextRegularNormal">
                    <span>
                      Ideal para después de entrenamientos intensos o
                      actividades físicas prolongadas.
                    </span>
                  </span>
                </div>
                <img
                  alt="DividerI2016"
                  src="/external/divideri2016-15g-200h.webp"
                  className="elite-divider1"
                />
                <div className="elite-accordion-item1">
                  <span className="elite-text53 TextMediumSemiBold">
                    <span>Envío</span>
                  </span>
                  <span className="elite-text55 TextRegularNormal">
                    <span>
                      Envío gratis en pedidos superiores a $500 MXN. Disfruta de
                      Elite en casa.
                    </span>
                  </span>
                </div>
                <img
                  alt="DividerI2016"
                  src="/external/divideri2016-f7jn-200h.webp"
                  className="elite-divider2"
                />
                <div className="elite-accordion-item2">
                  <span className="elite-text57 TextMediumSemiBold">
                    <span>Devoluciones</span>
                  </span>
                  <span className="elite-text59 TextRegularNormal">
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
        <div className="elite-stats15">
          <div className="elite-content2">
            <div className="elite-content3">
              <div className="elite-section-title">
                <span className="elite-text61 TextRegularSemiBold">
                  <span>Equilibrio</span>
                </span>
                <div className="elite-content4">
                  <span className="elite-text63 HeadingDesktopH2">
                    <span>Beneficios de Elite para tu salud</span>
                  </span>
                  <span className="elite-text65 TextMediumNormal">
                    <span>
                      Elite es una bebida premium con electrolitos esenciales
                      para una hidratación superior y bienestar diario. Ideal
                      para una hidratación óptima.
                    </span>
                  </span>
                </div>
              </div>
              <div className="elite-actions1">
                <div className="elite-style-secondary-small-false-darkmode-true-iconposition-no1">
                  <span className="elite-text67">
                    <span>Descubre</span>
                  </span>
                </div>
                <Link to="/store" className="elite-navlink2">
                  <div className="elite-style-link-small-false-darkmode-true-iconposition-trailin">
                    <span className="elite-text69">
                      <span>Comprar</span>
                    </span>
                    <img
                      alt="IconchevronrightI2016"
                      src="/external/iconchevronrighti2016-k5l.svg"
                      className="elite-iconchevronright2"
                    />
                  </div>
                </Link>
              </div>
            </div>
            <div className="elite-stats">
              <div className="elite-row1">
                <div className="elite-stat">
                  <span className="elite-text71">
                    <span>30%</span>
                  </span>
                  <span className="elite-text73 HeadingDesktopH6">
                    <span>mejorar los tiempos de recuperación en un 30%</span>
                  </span>
                </div>
                <div className="elite-stat1">
                  <span className="elite-text75">
                    <span>15%</span>
                  </span>
                  <span className="elite-text77 HeadingDesktopH6">
                    <span>Mejora celular y previene calambres en un 15%</span>
                  </span>
                </div>
              </div>
              <div className="elite-row2">
                <div className="elite-stat2">
                  <span className="elite-text79">
                    <span>25%</span>
                  </span>
                  <span className="elite-text81 HeadingDesktopH6">
                    <span>Reduce la fatiga muscular en un 25%</span>
                  </span>
                </div>
                <div className="elite-stat3">
                  <span className="elite-text83">
                    <span>50%</span>
                  </span>
                  <span className="elite-text85 HeadingDesktopH6">
                    <span>Mejora del rendimiento físico</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elite-header111">
          <div className="elite-content5">
            <img
              alt="Elitewhite22016"
              src="/external/elitewhite22016-cj84-200w.webp"
              className="elite-elitewhite2"
            />
            <div className="elite-columnone">
              <span className="elite-text87 HeadingDesktopH1">
                <span>&quot;Energía y Enfoque en Cada Viaje&quot;</span>
              </span>
            </div>
            <div className="elite-columntwo">
              <div className="elite-content6">
                <span className="elite-text89 TextMediumNormal">
                  <span>
                    Mantén tu rendimiento y concentración en cada viaje.
                  </span>
                </span>
                <div className="elite-actions2">
                  <div className="elite-style-primary-small-false-darkmode-false-iconposition-noi2">
                    <span className="elite-text91">
                      <span>Conoce más</span>
                    </span>
                  </div>
                  <Link to="/store" className="elite-navlink3">
                    <div className="elite-style-secondary-small-false-darkmode-true-iconposition-no2">
                      <span className="elite-text93">
                        <span>Compra</span>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterBebit rootClassName="footer-bebit-root-class-name4"></FooterBebit>
      </div>
    </div>
  )
}

export default Elite
