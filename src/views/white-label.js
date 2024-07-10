import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import FooterBebit from '../components/footer-bebit'
import './white-label.css'

const WhiteLabel = (props) => {
  return (
    <div className="white-label-container">
      <Helmet>
        <title>WhiteLabel - Bebit - Hidratacion</title>
        <meta property="og:title" content="WhiteLabel - Bebit - Hidratacion " />
      </Helmet>
      <div className="white-label-white-label">
        <Navbar rootClassName="navbar-root-class-name3"></Navbar>
        <div className="white-label-header5">
          <div className="white-label-column">
            <img
              alt="IMG112222016"
              src="/LogosBebit/img_1122%202-300h.webp"
              className="white-label-img11222"
            />
            <div className="white-label-content">
              <span className="white-label-text HeadingDesktopH1">
                Hidratación Comercial
              </span>
              <span className="white-label-text01 TextMediumNormal">
                Te ayudamos a reconocer tu marca, producirla y llevarla al
                marketing. 
              </span>
            </div>
            <div className="white-label-actions">
              <div className="white-label-style-primary-small-false-darkmode-false-iconposition-noi">
                <span className="white-label-text02">
                  <span>Conoce</span>
                </span>
              </div>
              <div className="white-label-style-secondary-small-false-darkmode-true-iconposition-no">
                <span className="white-label-text04">
                  <span>Compra</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="white-label-header44">
          <div className="white-label-container1">
            <div className="white-label-section-title">
              <span className="white-label-text06 TextRegularSemiBold">
                <span>Descubre</span>
              </span>
              <div className="white-label-content01">
                <span className="white-label-text08 HeadingDesktopH1">
                  <span>
                    Desarrolla la imagen de marca que deseas proyectar.
                  </span>
                </span>
                <span className="white-label-text10 TextMediumNormal">
                  <span>
                    Potencia tu negocio con nuestra solución de White Label
                  </span>
                </span>
              </div>
            </div>
            <div className="white-label-actions1">
              <div className="white-label-style-primary-small-false-darkmode-false-iconposition-noi1">
                <span className="white-label-text12">
                  <span>Explorar</span>
                </span>
              </div>
              <div className="white-label-style-secondary-small-false-darkmode-false-iconposition-n">
                <span className="white-label-text14">
                  <span>Más información</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="white-label-layout249">
          <div className="white-label-section-title1">
            <span className="white-label-text16 TextRegularSemiBold">
              <span>Solución</span>
            </span>
            <div className="white-label-content02">
              <span className="white-label-text18 HeadingDesktopH2">
                <span>Cómo Funciona Nuestro Proceso</span>
              </span>
              <span className="white-label-text20 TextMediumNormal">
                <span>
                  En Bebit, entendemos tus necesidades y desarrollamos una
                  fórmula personalizada. Realizamos pruebas y optimizamos la
                  fórmula para asegurar calidad. Producimos en nuestra planta
                  con controles de calidad y opciones personalizadas de
                  envasado. Gestionamos la distribución y ofrecemos soporte
                  continuo post-venta. Trabajamos contigo para asegurar el éxito
                  de tu marca.
                </span>
              </span>
            </div>
          </div>
          <div className="white-label-content03">
            <div className="white-label-container2">
              <div className="white-label-container3">
                <div className="white-label-column1">
                  <img
                    alt="PlaceholderImageI2016"
                    src="/Laboratorio/captura%20de%20pantalla%202024-06-29%20a%20la(s)%2012.50.31-300h.webp"
                    className="white-label-placeholder-image"
                  />
                  <div className="white-label-content04">
                    <span className="white-label-text22 HeadingDesktopH4">
                      <span>Consulta y Conceptualización</span>
                    </span>
                    <span className="white-label-text24 TextRegularNormal">
                      <span>
                        Entendemos tus necesidades y desarrollamos una fórmula
                        personalizada.
                      </span>
                    </span>
                  </div>
                </div>
                <div className="white-label-row">
                  <div className="white-label-column2">
                    <img
                      alt="PlaceholderImageI2016"
                      src="/RH/captura%20de%20pantalla%202024-06-24%20a%20la(s)%2022.46.26-300h.webp"
                      className="white-label-placeholder-image1"
                    />
                    <div className="white-label-content05">
                      <span className="white-label-text26 HeadingDesktopH4">
                        <span>Investigación y Desarrollo</span>
                      </span>
                      <span className="white-label-text28 TextRegularNormal">
                        <span>
                          Realizamos pruebas y optimizamos la fórmula para
                          asegurar calidad.
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="white-label-column3">
                  <video
                    src="/Videos/gen-3%20alpha%203496021352%2C%20sistema%20de%20transpor1.mp4"
                    loop="true"
                    muted="true"
                    poster="https://play.teleporthq.io/static/svg/videoposter.svg"
                    autoPlay="true"
                    className="white-label-video"
                  ></video>
                  <div className="white-label-content06">
                    <span className="white-label-text30 HeadingDesktopH4">
                      <span>Producción y Envasado</span>
                    </span>
                    <span className="white-label-text32 TextRegularNormal">
                      <span>
                        Producimos en nuestra planta con controles de calidad y
                        opciones personalizadas de envasado.
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="white-label-actions2">
              <div className="white-label-style-secondary-small-false-darkmode-false-iconposition-n1">
                <span className="white-label-text34">
                  <span>Más</span>
                </span>
              </div>
              <div className="white-label-style-link-small-false-darkmode-false-iconposition-traili">
                <span className="white-label-text36">
                  <span>Contacto</span>
                </span>
                <img
                  alt="IconchevronrightI2016"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="white-label-iconchevronright"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="white-label-header111">
          <div className="white-label-content07">
            <div className="white-label-columntwo">
              <span className="white-label-text38 HeadingDesktopH1">
                <span>&quot;Control de Calidad&quot;</span>
              </span>
              <img
                alt="IMG112242016"
                src="/LogosBebit/img_1122%202-300h.webp"
                className="white-label-img11224"
              />
              <div className="white-label-content08">
                <span className="white-label-text40 TextMediumNormal">
                  <span>
                    Ayudamos a nuestros clientes a maximizar el valor de sus
                    productos a través de procesos eficientes y soluciones
                    innovadoras.
                  </span>
                </span>
                <div className="white-label-actions3">
                  <Link to="/contacto" className="white-label-navlink">
                    <div className="white-label-style-primary-small-false-darkmode-false-iconposition-noi2">
                      <span className="white-label-text42">
                        <span>Llamanos</span>
                      </span>
                    </div>
                  </Link>
                  <div className="white-label-style-secondary-small-false-darkmode-true-iconposition-no1">
                    <span className="white-label-text44">
                      <span>Mensaje</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="white-label-testimonial5">
          <div className="white-label-section-title2">
            <span className="white-label-text46 HeadingDesktopH2">
              <span>Testimonios de clientes</span>
            </span>
            <span className="white-label-text48 TextMediumNormal">
              <span>
                Nuestros clientes están encantados con nuestros productos
              </span>
            </span>
          </div>
          <div className="white-label-content09">
            <div className="white-label-column4">
              <div className="white-label-container4">
                <img
                  alt="VectorI2016"
                  src="/external/VectorI2016-1g091.svg"
                  className="white-label-vector"
                />
                <img
                  alt="VectorI2016"
                  src="/external/VectorI2016-buia1.svg"
                  className="white-label-vector01"
                />
                <img
                  alt="VectorI2016"
                  src="/external/VectorI2016-kjp91.svg"
                  className="white-label-vector02"
                />
                <img
                  alt="VectorI2016"
                  src="/external/vectori2016-cymr.svg"
                  className="white-label-vector03"
                />
                <img
                  alt="VectorI2016"
                  src="/external/VectorI2016-c30f1.svg"
                  className="white-label-vector04"
                />
              </div>
              <span className="white-label-text50 HeadingDesktopH6">
                <span>
                  “Los productos de Bebit han mejorado nuestra eficiencia y
                  calidad de producción. Estamos muy agradecidos por su
                  excelente manufactura.”
                </span>
              </span>
              <div className="white-label-avatar">
                <img
                  alt="AvatarImageI2016"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="white-label-avatar-image"
                />
                <div className="white-label-avatar-content">
                  <span className="white-label-text52 TextRegularSemiBold">
                    <span>Juan Pérez</span>
                  </span>
                  <span className="white-label-text54 TextRegularNormal">
                    <span>Gerente de Producción, Empresa XYZ</span>
                  </span>
                </div>
                <img
                  alt="DividerI2016"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="white-label-divider"
                />
                <img
                  alt="Logo2ColorDarkI2016"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="white-label-logo2-color-dark"
                />
              </div>
            </div>
            <div className="white-label-column5">
              <div className="white-label-container5">
                <img
                  alt="VectorI2016"
                  src="/external/vectori2016-1g09.svg"
                  className="white-label-vector05"
                />
                <img
                  alt="VectorI2016"
                  src="/external/vectori2016-buia.svg"
                  className="white-label-vector06"
                />
                <img
                  alt="VectorI2016"
                  src="/external/vectori2016-kjp9.svg"
                  className="white-label-vector07"
                />
                <img
                  alt="VectorI2016"
                  src="/external/vectori2016-cymr1.svg"
                  className="white-label-vector08"
                />
                <img
                  alt="VectorI2016"
                  src="/external/vectori2016-c30f.svg"
                  className="white-label-vector09"
                />
              </div>
              <span className="white-label-text56 HeadingDesktopH6">
                <span>
                  “Bebit ha sido un socio confiable en nuestra cadena de
                  suministro. Sus productos son de alta calidad y nos han
                  ayudado a mejorar nuestra eficiencia operativa.”
                </span>
              </span>
              <div className="white-label-avatar1">
                <img
                  alt="AvatarImageI2016"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="white-label-avatar-image1"
                />
                <div className="white-label-avatar-content1">
                  <span className="white-label-text58 TextRegularSemiBold">
                    <span>María López</span>
                  </span>
                  <span className="white-label-text60 TextRegularNormal">
                    <span>Directora de Operaciones, Empresa ABC</span>
                  </span>
                </div>
                <img
                  alt="DividerI2016"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="white-label-divider1"
                />
                <img
                  alt="Logo2ColorDarkI2016"
                  src="/external/logo2colordarki2016-r1da.svg"
                  className="white-label-logo2-color-dark1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterBebit rootClassName="footer-bebit-root-class-name3"></FooterBebit>
    </div>
  )
}

export default WhiteLabel
