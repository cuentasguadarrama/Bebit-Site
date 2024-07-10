import React from 'react'

import PropTypes from 'prop-types'

import './button-conoce.css'

const ButtonConoce = (props) => {
  return (
    <div className="button-conoce-container">
      <button type="button" className="button-conoce-button button">
        {props.conoce}
      </button>
    </div>
  )
}

ButtonConoce.defaultProps = {
  conoce: 'Conoce',
}

ButtonConoce.propTypes = {
  conoce: PropTypes.string,
}

export default ButtonConoce
