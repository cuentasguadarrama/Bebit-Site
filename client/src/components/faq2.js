import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './faq2.css'

const FAQ2 = (props) => {
  return (
    <div className={`faq2-faq8 thq-section-padding ${props.rootClassName} `}>
      <div className="faq2-max-width thq-section-max-width">
        <div className="thq-flex-row faq2-container">
          <div className="thq-flex-column">
            <div className="faq2-content">
              <h2 className="faq2-text thq-heading-2">{props.heading1}</h2>
              <p className="faq2-text1 thq-body-large">{props.content1}</p>
            </div>
            <Link to="/contacto" className="faq2-button thq-button-outline">
              <span className="thq-body-small">{props.action}</span>
            </Link>
          </div>
          <div className="thq-flex-column faq2-list">
            <div className="faq2-list-item1">
              <p className="faq2-faq1-question thq-body-large">
                {props.faq1Question}
              </p>
              <span className="thq-body-small">{props.faq1Answer}</span>
            </div>
            <div className="faq2-list-item2">
              <p className="faq2-faq2-question thq-body-large">
                {props.faq2Question}
              </p>
              <span className="thq-body-small">{props.faq2Answer}</span>
            </div>
            <div className="faq2-list-item3">
              <p className="faq2-faq3-question thq-body-large">
                {props.faq3Question}
              </p>
              <span className="thq-body-small">{props.faq3Answer}</span>
            </div>
            <div className="faq2-list-item4">
              <p className="faq2-faq4-question thq-body-large">
                {props.faq4Question}
              </p>
              <span className="thq-body-small">{props.faq4Answer}</span>
            </div>
            <div className="faq2-list-item5">
              <p className="faq2-faq5-question thq-body-large">
                {props.faq5Question}
              </p>
              <span className="thq-body-small">{props.faq5Answer}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

FAQ2.defaultProps = {
  faq1Question:
    '¿Cuáles son los estándares de calidad de los procesos de producción?',
  rootClassName: '',
  faq3Answer:
    'Sí, nos especializamos en brindar soluciones personalizadas para satisfacer las necesidades específicas de cada cliente.',
  faq2Question: '¿Qué tecnología de vanguardia utilizan en la producción?',
  faq5Answer:
    'En nuestra página, podrás conocer en detalle nuestras líneas de llenado de alta capacidad, diseñadas para optimizar la producción y mantener la calidad de nuestros productos.',
  faq2Answer:
    'Contamos con tecnología de punta que nos permite mantener la calidad y frescura de nuestras bebidas durante todo el proceso de envasado.',
  faq4Answer:
    'En nuestro sitio web, encontrarás testimonios reales de clientes satisfechos que han experimentado la calidad y el sabor de nuestras bebidas.',
  faq4Question: '¿Qué tipo de testimonios puedo encontrar en su sitio web?',
  faq5Question:
    '¿Qué información puedo obtener sobre sus líneas de llenado de alta capacidad?',
  heading1: 'Preguntas frecuentes',
  faq3Question: '¿Ofrecen soluciones personalizadas para clientes?',
  content1:
    'Aquí encontrarás respuestas a las preguntas más comunes sobre nuestra empresa y nuestros productos.',
  faq1Answer:
    'Nuestros procesos de producción cumplen con los más altos estándares de calidad para garantizar la excelencia en cada producto.',
  action: '¡Si tienes más preguntas, no dudes en contactarnos!',
}

FAQ2.propTypes = {
  faq1Question: PropTypes.string,
  rootClassName: PropTypes.string,
  faq3Answer: PropTypes.string,
  faq2Question: PropTypes.string,
  faq5Answer: PropTypes.string,
  faq2Answer: PropTypes.string,
  faq4Answer: PropTypes.string,
  faq4Question: PropTypes.string,
  faq5Question: PropTypes.string,
  heading1: PropTypes.string,
  faq3Question: PropTypes.string,
  content1: PropTypes.string,
  faq1Answer: PropTypes.string,
  action: PropTypes.string,
}

export default FAQ2
