import React from 'react'

import PropTypes from 'prop-types'

import './home-header.css'

const HomeHeader = (props) => {
  return (
    <div className="home-header-logistica-y-sporte">
      <div className="home-header-content">
        <div className="home-header-columnone">
          <span className="home-header-text HeadingDesktopH1">
            <span>Logística y Soporte</span>
          </span>
        </div>
        <div className="home-header-columntwo">
          <div className="home-header-content1">
            <span className="home-header-text2 TextMediumNormal">
              <span>
                Gestionamos la distribución eficiente y brindamos soporte
                continuo post-venta para optimizar tus ingresos.
              </span>
            </span>
            <div className="home-header-actions">
              <div className="home-header-style-primary-small-false-darkmode-false-iconposition-noi">
                <span className="home-header-text4">
                  <span>White Label</span>
                </span>
              </div>
              <div className="home-header-style-secondary-small-false-darkmode-true-iconposition-no">
                <span className="home-header-text6">
                  <span>Portafolio</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

HomeHeader.defaultProps = {
  rootClassName: '',
}

HomeHeader.propTypes = {
  rootClassName: PropTypes.string,
}

export default HomeHeader
