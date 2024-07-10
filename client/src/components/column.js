import React from 'react'

import PropTypes from 'prop-types'

import './column.css'

const Column = (props) => {
  return (
    <div className={`column-column ${props.rootClassName} `}>
      <div className="column-content">
        <span className="column-text HeadingDesktopH1">
          <span className="">Innovación y Compromiso</span>
        </span>
        <span className="column-text2 TextMediumNormal">
          <span className="">
            Descubre nuestra inspiradora misión y visión, conoce los valores que
            nos distinguen .
          </span>
        </span>
      </div>
      <div className="column-actions">
        <div className="column-style-primary-small-false-darkmode-false-iconposition-noi">
          <span className="column-text4">
            <span className="">Conoce más</span>
          </span>
        </div>
        <div className="column-style-secondary-small-false-darkmode-true-iconposition-no">
          <span className="column-text6">{props.text}</span>
        </div>
      </div>
    </div>
  )
}

Column.defaultProps = {
  rootClassName: '',
  text: 'Compra',
}

Column.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default Column
