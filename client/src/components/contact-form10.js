import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./contact-form10.css";

const ContactForm10 = (props) => {
  // Contact Form setup
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "compras",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/send-email", formData)
      .then((response) => {
        console.log("Response:", response);
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.error("There was an error sending the email!", error);
        alert("Failed to send email.");
      });
  };

  return (
    <div
      className={`contact-form10-contact11 thq-section-padding ${props.rootClassName} `}
    >
      <h2 className="thq-heading-2">{props.contactTitle}</h2>
      <div className="contact-form10-max-width thq-section-max-width">
        <div className="contact-form10-section-title thq-card">
          <span className="thq-body-small">{props.content2}</span>
          <div className="contact-form10-content">
            <p className="thq-body-large">{props.content1}</p>
          </div>
        </div>
        <div className="contact-form10-content1">
          {/* Contact form */}
          <form
            className="contact-form10-form thq-card"
            onSubmit={handleSubmit}
          >
            <div id="Nombre" className="contact-form10-input">
              <label htmlFor="contact-form-10-name" className="thq-body-small">
                <span className="">Nombre</span>
                <br className=""></br>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Nombre completo"
                value={formData.name}
                onChange={handleChange}
                id="contact-form-10-name"
                className="thq-input"
                required
              />
            </div>
            <div className="contact-form10-input1">
              <label htmlFor="contact-form-10-email" className="thq-body-small">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleChange}
                id="contact-form-10-email"
                className="contact-form10-text-input1 thq-input"
                required
              />
            </div>
            <div className="contact-form10-container">
              <div className="contact-form10-input2">
                <label
                  htmlFor="contact-form-10-options"
                  className="thq-body-small"
                >
                  Escoge una opción:
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  id="contact-form-10-options"
                  placeholder="Select one"
                  className="thq-select"
                >
                  <option value="purchases" className="">
                    Compras
                  </option>
                  <option value="customer support" className="">
                    Servicio al cliente
                  </option>
                  <option value="sales" className="">
                    Ventas
                  </option>
                </select>
              </div>
            </div>
            <div className="contact-form10-input3">
              <label
                htmlFor="contact-form-10-message"
                className="thq-body-small"
              >
                <span className="">Mensaje</span>
                <br className=""></br>
              </label>
              <textarea
                name="message"
                placeholder="Escribe tu mensaje aquí"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                id="contact-form-10-message"
                className="thq-input"
              ></textarea>
            </div>
            <div className="contact-form10-checkbox">
              <input
                type="checkbox"
                id="contact-form-10-check"
                checked="true"
                required="true"
                className="thq-checkbox"
              />
              <label htmlFor="contact-form-10-check" className="thq-body-small">
                Acepto los Términos
              </label>
            </div>
            <button type="submit" className="thq-button-filled">
              <span className="thq-body-small">{props.submitAction}</span>
            </button>
          </form>
          <div className="contact-form10-content2 thq-card">
            <div className="contact-form10-row thq-flex-row">
              <div className="contact-form10-content3">
                <svg
                  viewBox="0 0 1024 1024"
                  className="contact-form10-icon thq-icon-small"
                >
                  <path
                    d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"
                    className=""
                  ></path>
                </svg>
              </div>
              <div className="contact-form10-content4">
                <svg
                  viewBox="0 0 1024 1024"
                  className="contact-form10-icon2 thq-icon-small"
                >
                  <path
                    d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"
                    className=""
                  ></path>
                </svg>
                <div className="contact-form10-contact-info"></div>
              </div>
              <div className="">
                <div className="contact-form10-contact-info1"></div>
              </div>
            </div>
            <div className="thq-flex-row contact-form10-row1">
              <iframe
                src={props.location1GoogleMap}
                title="Map"
                className="contact-form10-iframe thq-img-ratio-16-9"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ContactForm10.defaultProps = {
  content2: "",
  phone: "+123-456-7890",
  email: "info@bebit.com.mx",
  location1GoogleMap:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91160.77077631063!2d26.012237766112886!3d44.43779612993267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3cad4f%3A0xac0632e37c9ca628!2sBucharest!5e0!3m2!1sen!2sro!4v1713441854828!5m2!1sen!2sro",
  submitAction: "Enviar",
  rootClassName: "",
  content1:
    "Tienes alguna duda de nuestros servicios? Escríbenos y con gusto te ayudaremos.",
  contactTitle: "Contacto",
  address: "Cipreses 77",
  text: "I accept the Terms",
};

ContactForm10.propTypes = {
  content2: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  location1GoogleMap: PropTypes.string,
  submitAction: PropTypes.string,
  rootClassName: PropTypes.string,
  content1: PropTypes.string,
  contactTitle: PropTypes.string,
  address: PropTypes.string,
  text: PropTypes.string,
};

export default ContactForm10;
