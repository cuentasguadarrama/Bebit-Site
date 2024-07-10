import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './nuestra-diferencia-y-valor-agregado.css'

const NuestraDiferenciaYValorAgregado = (props) => {
  return (
    <div
      className={`nuestra-diferencia-y-valor-agregado-header44 ${props.rootClassName} `}
    >
      <div className="nuestra-diferencia-y-valor-agregado-container">
        <div className="nuestra-diferencia-y-valor-agregado-section-title">
          <span className="nuestra-diferencia-y-valor-agregado-text TextRegularSemiBold">
            <span className="">Innovación</span>
          </span>
          <div className="nuestra-diferencia-y-valor-agregado-content">
            <span className="nuestra-diferencia-y-valor-agregado-text02 HeadingDesktopH1">
              <span className="">Nuestra Diferencia y Valor Agregado</span>
            </span>
            <span className="nuestra-diferencia-y-valor-agregado-text04 TextMediumNormal">
              <span className="">
                En Bebit, nos enorgullecemos de ofrecer servicios de maquila de
                bebidas que van más allá de la producción estándar, con
                características clave y valores agregados para nuestros
                clientes.
              </span>
            </span>
          </div>
        </div>
        <div className="nuestra-diferencia-y-valor-agregado-actions">
          <a
            href="#newsletter"
            className="nuestra-diferencia-y-valor-agregado-link"
          >
            <div className="nuestra-diferencia-y-valor-agregado-style-primary-small-false-darkmode-false-iconposition-noi">
              <span className="nuestra-diferencia-y-valor-agregado-text06">
                <span className="">Descubrir</span>
              </span>
            </div>
          </a>
          <Link
            to="/white-label"
            className="nuestra-diferencia-y-valor-agregado-navlink"
          >
            <div className="nuestra-diferencia-y-valor-agregado-style-secondary-small-false-darkmode-false-iconposition-n">
              <span className="nuestra-diferencia-y-valor-agregado-text08">
                <span className="">Más</span>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

NuestraDiferenciaYValorAgregado.defaultProps = {
  rootClassName: '',
}

NuestraDiferenciaYValorAgregado.propTypes = {
  rootClassName: PropTypes.string,
}

export default NuestraDiferenciaYValorAgregado
