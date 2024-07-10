import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import FooterBebit from '../components/footer-bebit'
import './productos.css'

const Productos = (props) => {
  return (
    <div className="productos-container">
      <Helmet>
        <title>Productos - Bebit - Hidratacion</title>
        <meta property="og:title" content="Productos - Bebit - Hidratacion " />
      </Helmet>
      <div className="productos-productos">
        <Navbar rootClassName="navbar-root-class-name9"></Navbar>
        <div className="productos-header5">
          <div className="productos-column">
            <div className="productos-content">
              <span className="productos-text HeadingDesktopH1">
                Nuestro Portafolio de Bebidas
              </span>
              <span className="productos-text01 TextMediumNormal">
                <span>
                  Desde agua alcalina hasta bebidas deportivas y energizantes,
                  encuentra la solución perfecta para ti.
                </span>
              </span>
            </div>
            <div className="productos-actions">
              <div className="productos-style-primary-small-false-darkmode-false-iconposition-noi">
                <span className="productos-text03">
                  <span>Conoce más</span>
                </span>
              </div>
              <Link to="/store" className="productos-navlink">
                <div className="productos-style-secondary-small-false-darkmode-true-iconposition-no">
                  <span className="productos-text05">
                    <span>Compra</span>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="productos-header44">
          <div className="productos-container1">
            <div className="productos-section-title">
              <span className="productos-text07 TextRegularSemiBold">
                <span>Innovación</span>
              </span>
              <div className="productos-content01">
                <span className="productos-text09 HeadingDesktopH1">
                  <span>Conoce nuestros productos</span>
                </span>
                <span className="productos-text11 TextMediumNormal">
                  <span>
                    Explora nuestras características específicas y encuentra el
                    producto perfecto para ti
                  </span>
                </span>
              </div>
            </div>
            <div className="productos-actions1">
              <div className="productos-style-primary-small-false-darkmode-false-iconposition-noi1">
                <span className="productos-text13">
                  <span>Ver más</span>
                </span>
              </div>
              <Link to="/store" className="productos-navlink1">
                <div className="productos-style-secondary-small-false-darkmode-false-iconposition-n">
                  <span className="productos-text15">
                    <span>Comprar</span>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="productos-layout306">
          <div className="productos-section-title1">
            <span className="productos-text17 TextRegularSemiBold">
              <span>Hidrátate</span>
            </span>
            <div className="productos-content02">
              <span className="productos-text19 HeadingDesktopH2">
                <span>
                  Descubre nuestras bebidas para una mejor calidad de vida
                </span>
              </span>
              <span className="productos-text21 TextMediumNormal">
                <span>
                  En Bebit, ofrecemos una variedad de bebidas diseñadas para
                  mejorar tu hidratación y rendimiento deportivo. Nuestros
                  productos están formulados con ingredientes de alta calidad y
                  respaldados por estudios científicos.
                </span>
              </span>
            </div>
          </div>
          <div className="productos-content03">
            <div className="productos-row">
              <div className="productos-column1">
                <Link to="/wion" className="productos-navlink2">
                  <img
                    alt="PlaceholderImageI2016"
                    src="/external/placeholderimagei2016-ygvc-200h.webp"
                    className="productos-placeholder-image"
                  />
                </Link>
                <div className="productos-content04">
                  <span className="productos-text23 HeadingDesktopH5">
                    <span>
                      Wion: Agua alcalina ionizada para una hidratación superior
                    </span>
                  </span>
                  <span className="productos-text25 TextRegularNormal">
                    <span>
                      Descubre los beneficios de Wion para potenciar tu
                      rendimiento y bienestar.
                    </span>
                  </span>
                </div>
              </div>
              <div className="productos-column2">
                <Link to="/hidroactive" className="productos-navlink3">
                  <img
                    alt="PlaceholderImageI2016"
                    src="/external/placeholderimagei2016-gesy-200h.webp"
                    className="productos-placeholder-image1"
                  />
                </Link>
                <div className="productos-content05">
                  <span className="productos-text27 HeadingDesktopH5">
                    <span>
                      Hydroactive: Bebida deportiva para una recuperación rápida
                    </span>
                  </span>
                  <span className="productos-text29 TextRegularNormal">
                    <span>
                      El agua alcalina ionizada de Wion te proporciona una
                      hidratación superior.
                    </span>
                  </span>
                </div>
              </div>
              <div className="productos-column3">
                <Link to="/elite" className="productos-navlink4">
                  <img
                    alt="PlaceholderImageI2016"
                    src="/external/placeholderimagei2016-g0ie-200h.webp"
                    className="productos-placeholder-image2"
                  />
                </Link>
                <div className="productos-content06">
                  <span className="productos-text31 HeadingDesktopH5">
                    <span>
                      Elite: Bebida rehidratante para combatir la deshidratación
                    </span>
                  </span>
                  <span className="productos-text33 TextRegularNormal">
                    <span>
                      Bebida premium para una hidratación superior en la vida
                      diaria.
                    </span>
                  </span>
                </div>
              </div>
              <div className="productos-column4">
                <Link to="/onix" className="productos-navlink5">
                  <img
                    alt="PlaceholderImageI2016"
                    src="/external/placeholderimagei2016-oe3t-200h.webp"
                    className="productos-placeholder-image3"
                  />
                </Link>
                <div className="productos-content07">
                  <span className="productos-text35 HeadingDesktopH5">
                    <span>
                      Onix - Obtén energía natural sin Taurina y sin
                      experimentar bajones.
                    </span>
                  </span>
                  <span className="productos-text37 TextRegularNormal">
                    <span>
                      Onix, bebida energizante para alcanzar tus metas con
                      energía sin taurina
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="productos-actions2">
              <div className="productos-style-secondary-small-false-darkmode-false-iconposition-n1">
                <span className="productos-text39">
                  <span>Ver productos</span>
                </span>
              </div>
              <div className="productos-style-link-small-false-darkmode-false-iconposition-traili">
                <span className="productos-text41">
                  <span>Más información</span>
                </span>
                <img
                  alt="IconchevronrightI2016"
                  src="/external/iconchevronrighti2016-67q.svg"
                  className="productos-iconchevronright"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="productos-header111">
          <div className="productos-content08">
            <div className="productos-columnone">
              <span className="productos-text43 HeadingDesktopH1">
                Tecnología de Punta y Procesos Innovadores
              </span>
            </div>
            <div className="productos-columntwo">
              <div className="productos-content09">
                <span className="productos-text44">
                  Utilizamos la última tecnología en nuestras líneas de
                  producción para garantizar la máxima eficiencia y calidad en
                  cada lote de bebidas
                </span>
                <div className="productos-actions3">
                  <div className="productos-style-primary-small-false-darkmode-false-iconposition-noi2">
                    <span className="productos-text45">
                      <span>Portafolio</span>
                    </span>
                  </div>
                  <Link to="/store" className="productos-navlink6">
                    <div className="productos-style-secondary-small-false-darkmode-true-iconposition-no1">
                      <span className="productos-text47">
                        <span>Comopra</span>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="productos-testimonial5">
          <div className="productos-section-title2">
            <span className="productos-text49 HeadingDesktopH2">
              <span>Testimonios de clientes</span>
            </span>
            <span className="productos-text51 TextMediumNormal">
              <span>
                Descubre cómo Bebit ha cambiado la vida de nuestros clientes.
              </span>
            </span>
          </div>
          <div className="productos-content10">
            <div className="productos-column5">
              <img
                alt="StarsI2016"
                src="/external/starsi2016-sb99.svg"
                className="productos-stars"
              />
              <span className="productos-text53 HeadingDesktopH6">
                <span>
                  El agua alcalina de Wion ha mejorado mi salud en general. ¡No
                  puedo vivir sin ella!
                </span>
              </span>
              <div className="productos-avatar">
                <img
                  alt="AvatarImageI2016"
                  src="/external/avatarimagei2016-1p8-200h.webp"
                  className="productos-avatar-image"
                />
                <div className="productos-avatar-content">
                  <span className="productos-text55 TextRegularSemiBold">
                    <span>María López</span>
                  </span>
                  <span className="productos-text57 TextRegularNormal">
                    <span>Directora de Marketing</span>
                  </span>
                </div>
                <div className="productos-logo2-color-dark"></div>
              </div>
            </div>
            <div className="productos-column6">
              <img
                alt="StarsI2016"
                src="/external/starsi2016-pe6a.svg"
                className="productos-stars1"
              />
              <span className="productos-text59 HeadingDesktopH6">
                <span>
                  Onix es el mejor producto que he probado. ¡Lo recomiendo a
                  todos!
                </span>
              </span>
              <div className="productos-avatar1">
                <img
                  alt="AvatarImageI2016"
                  src="/external/avatarimagei2016-uz1o-200h.webp"
                  className="productos-avatar-image1"
                />
                <div className="productos-avatar-content1">
                  <span className="productos-text61 TextRegularSemiBold">
                    <span>Juan Pérez</span>
                  </span>
                  <span className="productos-text63 TextRegularNormal">
                    <span>Gerente de Ventas</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterBebit rootClassName="footer-bebit-root-class-name9"></FooterBebit>
      </div>
      <img
        alt="IMG112222016"
        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a35d4cd9-c10c-4120-a5aa-cbba21802082/bb5734d9-3f68-4202-9e82-668950699a50?org_if_sml=125537&amp;force_format=original"
        className="productos-img11222"
      />
      <img
        alt="IMG112282016"
        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a35d4cd9-c10c-4120-a5aa-cbba21802082/ffae3e7e-41bf-474e-81e4-1170517eba3a?org_if_sml=11679&amp;force_format=original"
        className="productos-img11228"
      />
      <img
        alt="IMG112242016"
        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a35d4cd9-c10c-4120-a5aa-cbba21802082/78643511-c519-4a13-9076-dabf14c85159?org_if_sml=16737&amp;force_format=original"
        className="productos-img11224"
      />
    </div>
  )
}

export default Productos
