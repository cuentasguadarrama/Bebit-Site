import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import FooterBebit from '../components/footer-bebit'
import './inicio.css'

const Inicio = (props) => {
  return (
    <div className="inicio-container">
      <Helmet>
        <title>Bebit - Hidratacion</title>
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name1"></Navbar>
      <div className="inicio-video-header">
        <div className="inicio-column">
          <div className="inicio-content">
            <span className="inicio-text HeadingDesktopH1">
              Innovación y Calidad en Hidratación
            </span>
            <span className="inicio-text01 TextMediumNormal">
              <span>
                Descubre nuestra amplia gama de servicios y productos de
                hidratación de alta calidad
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>que te mantendrán saludable y enérgico.</span>
            </span>
          </div>
          <div className="inicio-actions">
            <Link to="/productos" className="inicio-navlink">
              <div className="inicio-style-primary-small-false-darkmode-false-iconposition-noi">
                <span className="inicio-text05">
                  <span>Descubre</span>
                </span>
              </div>
            </Link>
            <Link to="/store" className="inicio-navlink01">
              <div className="inicio-style-secondary-small-false-darkmode-true-iconposition-no">
                <span className="inicio-text07">
                  <span>Compra</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
        <img
          alt="IMG112222547"
          src="/external/img112222547-jnch-300h.webp"
          className="inicio-img11222"
        />
        <div className="inicio-container1">
          <video
            src="/Videos/New Folder/gen-3%20alpha%20310303576%2C%20captura%20un%20video%20de.mp4"
            loop="true"
            poster="https://play.teleporthq.io/static/svg/videoposter.svg"
            autoPlay="true"
            playsInline="true"
            className="inicio-video"
          ></video>
        </div>
      </div>
      <div className="inicio-header44">
        <div className="inicio-container2">
          <div className="inicio-section-title">
            <span className="inicio-text09 TextRegularSemiBold">
              <span>Tu socio</span>
            </span>
            <div className="inicio-content01">
              <span className="inicio-text11 HeadingDesktopH1">
                <span>Transformamos tus ideas en bebidas excepcionales</span>
              </span>
              <span className="inicio-text13 TextMediumNormal">
                <span>
                  En Bebit, nos dedicamos a ofrecer servicios de maquila y
                  producción de bebidas de la más alta calidad.
                </span>
              </span>
            </div>
          </div>
          <div className="inicio-actions1">
            <Link to="/white-label" className="inicio-navlink02">
              <div className="inicio-style-primary-small-false-darkmode-false-iconposition-noi1">
                <span className="inicio-text15">Conoce +</span>
              </div>
            </Link>
            <Link to="/contacto" className="inicio-navlink03">
              <div className="inicio-style-secondary-small-false-darkmode-false-iconposition-n">
                <span className="inicio-text16">Contacto</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="inicio-container3">
          <img
            alt="image"
            sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
            src="/Latas/an%20alluminum%20soda%20ca-1500w.webp"
            srcSet="Latas//an%20alluminum%20soda%20ca-1500w.webp 1200w, Latas/an%20alluminum%20soda%20ca-tablet.webp 800w, Latas/an%20alluminum%20soda%20ca-mobile.webp 480w"
            className="inicio-image"
          />
        </div>
      </div>
      <div className="inicio-frame63">
        <div className="inicio-logo2">
          <div className="inicio-container4">
            <span className="inicio-text17">
              <span>
                Nuestras Marcas
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
        </div>
        <div className="inicio-container5">
          <div className="inicio-container6">
            <Link to="/wion" className="inicio-navlink04">
              <img
                alt="wionpngwhite12016"
                src="/external/wionpngwhite12016-fxdn-200h.webp"
                className="inicio-wionpngwhite1"
              />
            </Link>
            <Link to="/hidroactive" className="inicio-navlink05">
              <img
                alt="Hydroactivewhitevertical12016"
                src="/external/hydroactivewhitevertical12016-772k-200w.webp"
                className="inicio-hydroactivewhitevertical1"
              />
            </Link>
          </div>
          <div className="inicio-container7">
            <Link to="/elite" className="inicio-navlink06">
              <img
                alt="Elitewhite12016"
                src="/external/elitewhite12016-w33x-200w.webp"
                className="inicio-elitewhite1"
              />
            </Link>
            <Link to="/onix" className="inicio-navlink07">
              <img
                alt="ONIXLOGOWHITEPhotoroom12016"
                src="/external/onixlogowhitephotoroom12016-vr5p-200h.webp"
                className="inicio-onixlogowhite-photoroom1"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="inicio-header111">
        <div className="inicio-content02">
          <div className="inicio-columntwo">
            <img
              alt="IMG112262016"
              src="/external/img112262016-lfg9-300h.webp"
              className="inicio-img11226"
            />
            <span className="inicio-text19 HeadingDesktopH1">
              Tecnología de Punta y Procesos Innovadores
            </span>
            <div className="inicio-content03">
              <span className="inicio-text20 TextMediumNormal">
                <span>
                  Utilizamos la última tecnología en nuestras líneas de
                  producción para garantizar la máxima eficiencia y calidad en
                  cada lote de bebidas
                </span>
              </span>
              <div className="inicio-actions2">
                <Link to="/productos" className="inicio-navlink08">
                  <div className="inicio-style-primary-small-false-darkmode-false-iconposition-noi2">
                    <span className="inicio-text22">
                      <span>Portafolio</span>
                    </span>
                  </div>
                </Link>
                <Link to="/store" className="inicio-navlink09">
                  <div className="inicio-style-secondary-small-false-darkmode-true-iconposition-no1">
                    <span className="inicio-text24">
                      <span>Compra</span>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inicio-layout249">
        <div className="inicio-container8">
          <div className="inicio-section-title1">
            <span className="inicio-text26 TextRegularSemiBold">
              <span>Descubre</span>
            </span>
            <div className="inicio-content04">
              <span className="inicio-text28 HeadingDesktopH2">
                <span>Cómo Funciona Nuestra Línea de Llenado</span>
              </span>
              <span className="inicio-text30 TextMediumNormal">
                <span>
                  Nuestra línea de llenado de alta capacidad llena 5,000
                  botellas por hora, la de capacidad media llena 2500 botellas
                  por hora y la de latas 2,100 latas por hora.
                </span>
              </span>
            </div>
          </div>
          <img
            alt="IMG112232016"
            src="/external/img112232016-qqcj-200h.webp"
            className="inicio-img11223"
          />
        </div>
        <div className="inicio-content05">
          <div className="inicio-row">
            <div className="inicio-column1">
              <img
                alt="PlaceholderImage2055"
                sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                src="/external/placeholderimage2055-vfnh-1200w.webp"
                srcSet="external//placeholderimage2055-vfnh-1200w.webp 1200w, external/placeholderimage2055-vfnh-tablet.webp 800w, external/placeholderimage2055-vfnh-mobile.webp 480w"
                className="inicio-placeholder-image"
              />
              <div className="inicio-content06">
                <span className="inicio-text32 HeadingDesktopH4">
                  <span>Línea de Llenado de Alta Capacidad</span>
                </span>
                <span className="inicio-text34 TextRegularNormal">
                  <span>
                    Línea de llenado de alta capacidad: produce 5,000
                    botellas/hora.
                  </span>
                </span>
              </div>
            </div>
            <div className="inicio-column2">
              <img
                alt="PlaceholderImage2055"
                sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                src="/external/placeholderimage2055-tbpb-1200w.webp"
                srcSet="external//placeholderimage2055-tbpb-1200w.webp 1200w, external/placeholderimage2055-tbpb-tablet.webp 800w, external/placeholderimage2055-tbpb-mobile.webp 480w"
              />
              <div className="inicio-content07">
                <span className="inicio-text36 HeadingDesktopH4">
                  <span>Línea de Llenado de Capacidad Media</span>
                </span>
                <span className="inicio-text38 TextRegularNormal">
                  <span>
                    Llena hasta 2500 botellas por hora, adaptable a distintos
                    volúmenes de producción.
                  </span>
                </span>
              </div>
            </div>
            <div className="inicio-column3">
              <img
                alt="PlaceholderImage2055"
                sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                src="/external/placeholderimage2055-q65p-1200w.webp"
                srcSet="external//placeholderimage2055-q65p-1200w.webp 1200w, external/placeholderimage2055-q65p-tablet.webp 800w, external/placeholderimage2055-q65p-mobile.webp 480w"
              />
              <div className="inicio-content08">
                <span className="inicio-text40 HeadingDesktopH4">
                  <span>Línea de Llenado de Latas Metálicas</span>
                </span>
                <span className="inicio-text42 TextRegularNormal">
                  <span>
                    Si necesitas enlatar productos, nuestra línea de llenado
                    tiene una capacidad de 2,100 latas por hora.
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="inicio-actions3">
            <div className="inicio-style-secondary-small-false-darkmode-false-iconposition-n1">
              <span className="inicio-text44">
                <span>Ver Más</span>
              </span>
            </div>
            <div className="inicio-style-link-small-false-darkmode-false-iconposition-traili">
              <span className="inicio-text46">
                <span>Contacto</span>
              </span>
              <img
                alt="IconchevronrightI2055"
                src="/external/iconchevronrighti2055-htcs.svg"
                className="inicio-iconchevronright"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="inicio-gallery20">
        <div className="inicio-section-title2">
          <span className="inicio-text48 HeadingDesktopH2">
            Conoce Nuestros Procesos.
          </span>
          <span className="inicio-text49 TextMediumNormal">
            <span>
              Descubre nuestra amplia gama de servicios cuidadosamente
              seleccionados para brindarte la máxima ccalidad, hidratación y
              bienestar.
            </span>
          </span>
        </div>
        <div className="inicio-content09">
          <div className="inicio-content10">
            <img
              alt="PlaceholderImage1I149"
              sizes="(min-width: 768px) 800px, 480px"
              src="/external/placeholderimage1i149-n6kd-800h.webp"
              srcSet="external//placeholderimage1i149-n6kd-800h.webp 800w, external/placeholderimage1i149-n6kd-mobile.webp 480w"
              className="inicio-placeholder-image1 inicio-placeholder-image1"
            />
            <img
              alt="PlaceholderImage2I149"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/external/placeholderimage2i149-lf-1300w.webp"
              srcSet="external//placeholderimage2i149-lf-1300w.webp 1200w, external/placeholderimage2i149-lf-tablet.webp 800w, external/placeholderimage2i149-lf-mobile.webp 480w"
              className="inicio-placeholder-image2 inicio-placeholder-image2"
            />
          </div>
          <div className="inicio-content11">
            <div className="inicio-slider-dots">
              <img
                alt="DotI149"
                src="/external/doti149-ems-200h.webp"
                className="inicio-dot"
              />
              <img
                alt="DotI149"
                src="/external/doti149-pyc-200h.webp"
                className="inicio-dot1"
              />
              <img
                alt="DotI149"
                src="/external/doti149-pnfn-200h.webp"
                className="inicio-dot2"
              />
            </div>
            <button className="inicio-slider-buttons">
              <button className="inicio-button">
                <img
                  alt="IconleftarrowaltI149"
                  src="/external/iconleftarrowalti149-z0ir.svg"
                  className="inicio-iconleftarrowalt"
                />
              </button>
              <button className="inicio-button1">
                <img
                  alt="IconrightarrowaltI149"
                  src="/external/iconrightarrowalti149-euie.svg"
                  className="inicio-iconrightarrowalt"
                />
              </button>
            </button>
          </div>
        </div>
      </div>
      <div className="inicio-layout2491">
        <div className="inicio-section-title3">
          <span className="inicio-text51 TextRegularSemiBold">
            <span>Soluciones</span>
          </span>
          <div className="inicio-content12">
            <span className="inicio-text53 HeadingDesktopH2">
              <span>
                Producción Personalizada: Adaptación a tus necesidades
              </span>
            </span>
            <span className="inicio-text55 TextMediumNormal">
              <span>
                En Bebit, nos especializamos en ofrecer soluciones
                personalizadas para satisfacer las necesidades específicas de
                cada cliente. Nuestro equipo tiene la capacidad de producir
                diversas fórmulas, desde aguas alcalinas hasta bebidas
                energéticas y deportivas.
              </span>
            </span>
          </div>
        </div>
        <div className="inicio-content13">
          <div className="inicio-row1">
            <div className="inicio-column4">
              <img
                alt="PlaceholderImageI2016"
                sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                src="/external/placeholderimagei2016-noz-1200w.webp"
                srcSet="external//placeholderimagei2016-noz-1200w.webp 1200w, external/placeholderimagei2016-noz-tablet.webp 800w, external/placeholderimagei2016-noz-mobile.webp 480w"
                className="inicio-placeholder-image3"
              />
              <div className="inicio-content14">
                <span className="inicio-text57 HeadingDesktopH4">
                  <span>Elevado nivel de estándares de calidad.</span>
                </span>
                <span className="inicio-text59 TextRegularNormal">
                  <span>
                    Nos aseguramos de que cada producto cumpla con altos
                    estándares de calidad a través de procesos innovadores y
                    estrictos controles.
                  </span>
                </span>
              </div>
            </div>
            <div className="inicio-column5">
              <img
                alt="PlaceholderImageI2016"
                sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                src="/external/placeholderimagei2016-vx4-1200w.webp"
                srcSet="external//placeholderimagei2016-vx4-1200w.webp 1200w, external/placeholderimagei2016-vx4-tablet.webp 800w, external/placeholderimagei2016-vx4-mobile.webp 480w"
                className="inicio-placeholder-image4"
              />
              <div className="inicio-content15">
                <span className="inicio-text61 HeadingDesktopH4">
                  <span>Soluciones Flexibles a Medida</span>
                </span>
                <span className="inicio-text63 TextRegularNormal">
                  <span>
                    En Bebit, nos adaptamos a los requerimientos de cada marca.
                    Ofrecemos soluciones personalizadas que se ajustan a tus
                    necesidades y objetivos específicos.
                  </span>
                </span>
              </div>
            </div>
            <div className="inicio-column6">
              <img
                alt="PlaceholderImageI2016"
                sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                src="/external/placeholderimagei2016-iztn-1200w.webp"
                srcSet="external//placeholderimagei2016-iztn-1200w.webp 1200w, external/placeholderimagei2016-iztn-tablet.webp 800w, external/placeholderimagei2016-iztn-mobile.webp 480w"
                className="inicio-placeholder-image5"
              />
              <div className="inicio-content16">
                <span className="inicio-text65 HeadingDesktopH4">
                  <span>Descubre cómo podemos ayudarte hoy mismo</span>
                </span>
                <span className="inicio-text67 TextRegularNormal">
                  <span>
                    Contáctanos para obtener más información sobre nuestras
                    soluciones personalizadas y cómo podemos ayudarte a alcanzar
                    tus metas.
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="inicio-actions4">
            <Link to="/white-label" className="inicio-navlink10">
              <div className="inicio-style-secondary-small-false-darkmode-false-iconposition-n2">
                <span className="inicio-text69">
                  <span>Descubrir</span>
                </span>
              </div>
            </Link>
            <Link to="/contacto" className="inicio-navlink11">
              <div className="inicio-style-link-small-false-darkmode-false-iconposition-traili1">
                <span className="inicio-text71">
                  <span>Contactar</span>
                </span>
                <img
                  alt="IconchevronrightI2016"
                  src="/external/iconchevronrighti2016-zxhn.svg"
                  className="inicio-iconchevronright1"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="inicio-header1111">
        <div className="inicio-content17">
          <div className="inicio-columntwo1">
            <div className="inicio-content18">
              <span className="inicio-text73 HeadingDesktopH1">
                <span>Producción y Envasado</span>
              </span>
              <span className="inicio-text75 TextMediumNormal">
                <span>
                  Visita nuestra planta y conoce nuestros avanzadaos controles
                  de calidad rigurosos y opciones personalizadas de envasado.
                </span>
              </span>
              <div className="inicio-actions5">
                <Link to="/nosotros" className="inicio-navlink12">
                  <div className="inicio-style-primary-small-false-darkmode-false-iconposition-noi3">
                    <span className="inicio-text77">
                      <span>Conoce más</span>
                    </span>
                  </div>
                </Link>
                <div className="inicio-style-secondary-small-false-darkmode-true-iconposition-no2">
                  <span className="inicio-text79">
                    <span>Agenda</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inicio-testimonial5">
        <div className="inicio-section-title4">
          <span className="inicio-text81 HeadingDesktopH2">
            <span>Testimonios de clientes</span>
          </span>
          <span className="inicio-text83 TextMediumNormal">
            <span>Descubre lo que nuestros clientes dicen sobre nosotros</span>
          </span>
        </div>
        <div className="inicio-content19">
          <div className="inicio-column7">
            <img
              alt="StarsI167"
              src="/external/starsi167-u5y4.svg"
              className="inicio-stars"
            />
            <span className="inicio-text85 HeadingDesktopH6">
              <span>
                “Bebit ha sido una gran solución para mi empresa. Su servicio al
                cliente es excepcional y su tecnología de vanguardia nos ha
                ayudado a mejorar nuestra productividad.”
              </span>
            </span>
            <div className="inicio-avatar">
              <img
                alt="AvatarImageI167"
                src="/external/avatarimagei167-zrla-200h.webp"
                className="inicio-avatar-image"
              />
              <div className="inicio-avatar-content">
                <span className="inicio-text87 TextRegularSemiBold">
                  <span>Juan Pérez</span>
                </span>
                <span className="inicio-text89 TextRegularNormal">
                  <span>Gerente de Ventas, Empresa XYZ</span>
                </span>
              </div>
            </div>
          </div>
          <div className="inicio-column8">
            <img
              alt="StarsI167"
              src="/external/starsi167-gqey.svg"
              className="inicio-stars1"
            />
            <span className="inicio-text91 HeadingDesktopH6">
              <span>
                Los resultados con Bebit son impresionantes. Sus características
                innovadoras nos han llevado a una mayor productividad y
                eficiencia.
              </span>
            </span>
            <div className="inicio-avatar1">
              <img
                alt="AvatarImageI167"
                src="/external/avatarimagei167-vr4-200h.webp"
                className="inicio-avatar-image1"
              />
              <div className="inicio-avatar-content1">
                <span className="inicio-text93 TextRegularSemiBold">
                  <span>María López</span>
                </span>
                <span className="inicio-text95 TextRegularNormal">
                  <span>Directora de Marketing, Empresa ABC</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterBebit rootClassName="footer-bebit-root-class-name1"></FooterBebit>
    </div>
  )
}

export default Inicio
