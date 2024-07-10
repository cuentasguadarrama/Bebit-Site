import React from 'react'

import PropTypes from 'prop-types'

import './hitos-importantes.css'

const HitosImportantes = (props) => {
  return (
    <div className={`hitos-importantes-layout121 ${props.rootClassName} `}>
      <div className="hitos-importantes-container">
        <div className="hitos-importantes-content">
          <span className="hitos-importantes-text TextRegularSemiBold">
            <span className="">Historia</span>
          </span>
          <span className="hitos-importantes-text02 HeadingDesktopH2">
            <span className="">Nuestros Hitos Importantes de Grupo ACF</span>
          </span>
        </div>
        <div className="hitos-importantes-column">
          <div className="hitos-importantes-actions">
            <div className="hitos-importantes-style-secondary-small-false-darkmode-false-iconposition-n">
              <span className="hitos-importantes-text04">
                <span className="">Conoce más</span>
              </span>
            </div>
            <div className="hitos-importantes-style-link-small-false-darkmode-false-iconposition-traili">
              <span className="hitos-importantes-text06">
                <span className="">Brochure</span>
              </span>
              <img
                alt={props.iconchevronrightAlt}
                src={props.iconchevronrightSrc}
                className="hitos-importantes-iconchevronright"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hitos-importantes-container1">
        <div className="hitos-importantes-content01">
          <div className="hitos-importantes-timeline">
            <div className="hitos-importantes-timeline-item">
              <div className="hitos-importantes-container2">
                <div className="hitos-importantes-content02">
                  <img
                    alt={props.iconRelumeAlt3}
                    src={props.iconRelumeSrc3}
                    className="hitos-importantes-icon-relume"
                  />
                  <img
                    alt={props.dividerAlt3}
                    src={props.dividerSrc3}
                    className="hitos-importantes-divider"
                  />
                </div>
                <img
                  alt={props.dividerAlt}
                  src={props.dividerSrc}
                  className="hitos-importantes-divider1"
                />
              </div>
              <div className="hitos-importantes-content03">
                <span className="hitos-importantes-text08 HeadingDesktopH6">
                  <span className="">Fundación de Grupo ACF</span>
                </span>
                <span className="hitos-importantes-text10 TextRegularNormal">
                  <span className="">
                    {' '}
                    Grupo ACF fue fundado en 1990 con el objetivo de ofrecer
                    soluciones de alta calidad para la producción,
                    almacenamiento y distribución de agua purificada.
                  </span>
                  <br className=""></br>
                  <span className=""></span>
                  <br className=""></br>
                  <span className="">
                    {' '}
                    Ampliación de sus instalaciones para incluir una mayor
                    capacidad de manufactura y la incorporación de nuevas
                    tecnologías de purificación de agua como la ósmosis inversa.
                  </span>
                </span>
              </div>
            </div>
            <div className="hitos-importantes-timeline-item1">
              <div className="hitos-importantes-content04">
                <img
                  alt={props.iconRelumeAlt}
                  src={props.iconRelumeSrc}
                  className="hitos-importantes-icon-relume1"
                />
                <img
                  alt={props.dividerAlt1}
                  src={props.dividerSrc1}
                  className="hitos-importantes-divider2"
                />
              </div>
              <div className="hitos-importantes-content05">
                <span className="hitos-importantes-text16 HeadingDesktopH6">
                  <span className="">Primera Certificación ISO 9001</span>
                </span>
                <span className="hitos-importantes-text18 TextRegularNormal">
                  <span className="hitos-importantes-text19">
                    {' '}
                    Obtención de la certificación ISO 9001, que reafirma el
                    compromiso de la empresa con la calidad y la mejora continua
                    en sus procesos de manufactura.
                  </span>
                  <br className=""></br>
                  <span className="hitos-importantes-text21"></span>
                  <br className=""></br>
                  <span className="hitos-importantes-text23">
                    {' '}
                    En 2005 se desarrollo e implementación de nuevas tecnologías
                    patentadas como Aquaflow, que permiten una purificación más
                    eficiente del agua
                  </span>
                  <br className=""></br>
                  <span className="hitos-importantes-text25"></span>
                  <br className=""></br>
                  <span className="hitos-importantes-text27">
                    La expancion internacional inicia operaciones en varios
                    países de América Latina, consolidando su presencia
                    internacional y ofreciendo sus soluciones integrales a una
                    mayor cantidad de clientes en la región que realizando
                    proyecto significativos para empresas líderes en la
                    industria farmacéutica como
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="hitos-importantes-text28">
                    Pfizer, Sanofi
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="hitos-importantes-text29">y</span>
                  <span className="hitos-importantes-text30"> Merck</span>
                  <span className="">
                    , fortaleciendo su reputación en el sector.
                  </span>
                </span>
              </div>
            </div>
            <div className="hitos-importantes-timeline-item2">
              <div className="hitos-importantes-content06">
                <img
                  alt={props.iconRelumeAlt1}
                  src={props.iconRelumeSrc1}
                  className="hitos-importantes-icon-relume2"
                />
                <img
                  alt={props.dividerAlt2}
                  src={props.dividerSrc2}
                  className="hitos-importantes-divider3"
                />
              </div>
              <div className="hitos-importantes-content07">
                <span className="hitos-importantes-text32 HeadingDesktopH6">
                  <span className="">Reconocimiento y Certificaciones</span>
                </span>
                <span className="hitos-importantes-text34 TextRegularNormal">
                  <span className="">
                    {' '}
                    En 2023 se obtuvo múltiples certificaciones internacionales
                    como ASME, FDA, 3A, GMP&apos;s, USP e ISPE, que destacan su
                    compromiso con los estándares más altos de calidad y
                    seguridad en la industria.
                  </span>
                </span>
              </div>
            </div>
            <div className="hitos-importantes-timeline-item3">
              <div className="hitos-importantes-content08">
                <img
                  alt={props.iconRelumeAlt2}
                  src={props.iconRelumeSrc2}
                  className="hitos-importantes-icon-relume3"
                />
              </div>
              <div className="hitos-importantes-content09">
                <span className="hitos-importantes-text36 HeadingDesktopH6">
                  <span className="">Lanzamiento de Bebit</span>
                </span>
                <span className="hitos-importantes-text38 TextRegularNormal">
                  <span className="hitos-importantes-text39">
                    {' '}
                    Grupo ACF lanza Bebit, una nueva división dedicada a la
                    producción y maquila de bebidas innovadoras y de alta
                    calidad, incluyendo agua alcalina, bebidas deportivas,
                    rehidratantes y energizantes.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br className=""></br>
                  <span className="hitos-importantes-text41"></span>
                  <br className=""></br>
                  <span className="hitos-importantes-text43">
                    {' '}
                    Bebit combina la experiencia en purificación de agua y la
                    tecnología avanzada de Grupo ACF para ofrecer productos
                    superiores en el mercado de bebidas​ (
                  </span>
                  <span className="hitos-importantes-text44">Grupo ACF</span>
                  <span className="hitos-importantes-text45">)​​ (</span>
                  <span className="hitos-importantes-text46">
                    Mexico Business News
                  </span>
                  <span className="hitos-importantes-text47">)​​ (</span>
                  <span className="hitos-importantes-text48">
                    Mexico Business News
                  </span>
                  <span className="">)​.</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

HitosImportantes.defaultProps = {
  dividerAlt: 'DividerI2016',
  dividerAlt3: 'DividerI2016',
  iconRelumeSrc1: '/external/iconrelumei2016-2jko.svg',
  iconRelumeSrc2: '/external/iconrelumei2016-vefq.svg',
  iconRelumeAlt3: 'IconRelumeI2016',
  iconRelumeAlt1: 'IconRelumeI2016',
  dividerAlt2: 'DividerI2016',
  dividerSrc1: '/external/divideri2016-m2b.svg',
  iconRelumeAlt2: 'IconRelumeI2016',
  dividerSrc2: '/external/divideri2016-b3os.svg',
  dividerAlt1: 'DividerI2016',
  iconRelumeAlt: 'IconRelumeI2016',
  iconchevronrightSrc: '/external/iconchevronrighti2016-8h2.svg',
  dividerSrc3: '/external/divideri2016-tutn.svg',
  iconRelumeSrc: '/external/iconrelumei2016-0nqc.svg',
  iconchevronrightAlt: 'IconchevronrightI2016',
  dividerSrc: '/external/divideri2016-m2b.svg',
  iconRelumeSrc3: '/external/iconrelumei2016-k50s.svg',
  rootClassName: '',
}

HitosImportantes.propTypes = {
  dividerAlt: PropTypes.string,
  dividerAlt3: PropTypes.string,
  iconRelumeSrc1: PropTypes.string,
  iconRelumeSrc2: PropTypes.string,
  iconRelumeAlt3: PropTypes.string,
  iconRelumeAlt1: PropTypes.string,
  dividerAlt2: PropTypes.string,
  dividerSrc1: PropTypes.string,
  iconRelumeAlt2: PropTypes.string,
  dividerSrc2: PropTypes.string,
  dividerAlt1: PropTypes.string,
  iconRelumeAlt: PropTypes.string,
  iconchevronrightSrc: PropTypes.string,
  dividerSrc3: PropTypes.string,
  iconRelumeSrc: PropTypes.string,
  iconchevronrightAlt: PropTypes.string,
  dividerSrc: PropTypes.string,
  iconRelumeSrc3: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default HitosImportantes
