import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './logistica-y-sporte.css'

const LogisticaYSporte = (props) => {
  return (
    <div
      className={`logistica-y-sporte-logistica-y-sporte ${props.rootClassName} `}
    >
      <div className="logistica-y-sporte-content">
        <div className="logistica-y-sporte-columntwo">
          <div className="logistica-y-sporte-content1">
            <span className="logistica-y-sporte-text HeadingDesktopH1">
              <span className="">Logística y Soporte</span>
            </span>
            <span className="logistica-y-sporte-text2 TextMediumNormal">
              <span className="">
                Gestionamos la distribución eficiente y brindamos soporte
                continuo post-venta para optimizar tus ingresos.
              </span>
            </span>
            <div className="logistica-y-sporte-actions">
              <Link to="/white-label" className="logistica-y-sporte-navlink">
                <div className="logistica-y-sporte-style-primary-small-false-darkmode-false-iconposition-noi">
                  <span className="logistica-y-sporte-text4">
                    <span className="">White Label</span>
                  </span>
                </div>
              </Link>
              <div className="logistica-y-sporte-style-secondary-small-false-darkmode-true-iconposition-no">
                <span className="logistica-y-sporte-text6">
                  <span className="">Portafolio</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

LogisticaYSporte.defaultProps = {
  rootClassName: '',
}

LogisticaYSporte.propTypes = {
  rootClassName: PropTypes.string,
}

export default LogisticaYSporte
