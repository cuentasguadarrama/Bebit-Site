import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <div className={`navbar-navbar2 ${props.rootClassName} `}>
      <div className="navbar-navbar">
        <div className="navbar-container">
          <div className="navbar-content">
            <img
              alt={props.iMG11222Alt}
              src={props.iMG11222Src}
              loading="eager"
              className="navbar-img11222"
            />
          </div>
          <div className="navbar-container1">
            <div className="navbar-column">
              <Link to="/" className="navbar-text TextRegularNormal button">
                <span className="">Inicio</span>
              </Link>
              <Link
                to="/nosotros"
                className="navbar-text02 TextRegularNormal button"
              >
                <span className="">Nosotros</span>
              </Link>
              <div
                data-thq="thq-dropdown"
                className="navbar-thq-dropdown list-item"
              >
                <Link to="/productos" className="">
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="navbar-dropdown-toggle"
                  >
                    <span className="navbar-text04">
                      <span className="">Productos</span>
                      <br className=""></br>
                    </span>
                    <div
                      data-thq="thq-dropdown-arrow"
                      className="navbar-dropdown-arrow"
                    >
                      <svg viewBox="0 0 1024 1024" className="navbar-icon">
                        <path d="M426 726v-428l214 214z" className=""></path>
                      </svg>
                    </div>
                  </div>
                </Link>
                <ul
                  data-thq="thq-dropdown-list"
                  className="navbar-dropdown-list"
                >
                  <Link to="/elite" className="">
                    <li
                      data-thq="thq-dropdown"
                      className="navbar-dropdown list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="navbar-dropdown-toggle1"
                      >
                        <span className="navbar-text07">Elite</span>
                      </div>
                    </li>
                  </Link>
                  <li
                    data-thq="thq-dropdown"
                    className="navbar-dropdown1 list-item"
                  >
                    <Link to="/onix" className="">
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="navbar-dropdown-toggle2"
                      >
                        <span className="navbar-text08">
                          <span className="">Onix</span>
                          <br className=""></br>
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="navbar-dropdown2 list-item"
                  >
                    <Link to="/hidroactive" className="">
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="navbar-dropdown-toggle3"
                      >
                        <span className="navbar-text11">
                          <span className="">Hidroactive</span>
                          <br className=""></br>
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="navbar-dropdown3 list-item"
                  >
                    <Link to="/wion" className="">
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="navbar-dropdown-toggle4"
                      >
                        <span className="navbar-text14">Wion</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <Link
                to="/white-label"
                className="navbar-text15 TextRegularNormal button"
              >
                <span className="">White Label</span>
              </Link>
              <Link
                to="/blog"
                className="navbar-text17 TextRegularNormal button"
              >
                <span className="">Blog</span>
              </Link>
              <Link
                to="/contacto"
                className="navbar-text19 TextRegularNormal button"
              >
                <span className="">Contacto</span>
              </Link>
            </div>
          </div>
          <div className="navbar-actions">
            <Link to="/store" className="navbar-navlink5">
              <header className="navbar-style-primary-small-true-darkmode-false-iconposition-noic button">
                <span className="navbar-text21">
                  <span className="">Comprar</span>
                </span>
              </header>
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar-container2"></div>
      <div className="navbar-productos-sub-menu">
        <span className="navbar-text23 TextRegularNormal">
          <span className="">Elite</span>
        </span>
        <span className="navbar-text25 TextRegularNormal">
          <span className="">Onix</span>
        </span>
        <span className="navbar-text27 TextRegularNormal">
          <span className="">Hidroactive</span>
        </span>
        <span className="navbar-text29 TextRegularNormal">
          <span className="">Wion</span>
        </span>
        <img
          alt={props.line1Alt}
          src={props.line1Src}
          className="navbar-line1"
        />
        <img
          alt={props.line2Alt}
          src={props.line2Src}
          className="navbar-line2"
        />
        <img
          alt={props.line3Alt}
          src={props.line3Src}
          className="navbar-line3"
        />
        <img
          alt={props.line4Alt}
          src={props.line4Src}
          className="navbar-line4"
        />
      </div>
    </div>
  )
}

Navbar.defaultProps = {
  line2Src: '/external/line22055-1fa.svg',
  line2Alt: 'Line22055',
  iMG11222Src: '/external/img112222016-13aw-200h.webp',
  iMG11222Alt: 'IMG112222016',
  line4Src: '/external/line42055-swbx.svg',
  line3Alt: 'Line32055',
  line1Alt: 'Line12055',
  rootClassName: '',
  line1Src: '/external/line12055-mmy.svg',
  line3Src: '/external/line32055-0v89.svg',
  line4Alt: 'Line42055',
}

Navbar.propTypes = {
  line2Src: PropTypes.string,
  line2Alt: PropTypes.string,
  iMG11222Src: PropTypes.string,
  iMG11222Alt: PropTypes.string,
  line4Src: PropTypes.string,
  line3Alt: PropTypes.string,
  line1Alt: PropTypes.string,
  rootClassName: PropTypes.string,
  line1Src: PropTypes.string,
  line3Src: PropTypes.string,
  line4Alt: PropTypes.string,
}

export default Navbar
