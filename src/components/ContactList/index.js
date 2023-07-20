import React from "react";
import PropTypes from "prop-types";

const ContactList = ({ data }) => {
  if (!data) return null;
  const { name, tel, email, website } = data;

  return (
    <div className="tour-details-two__overview">
      <h3 className="tour-details-two__title">Informacion de contacto</h3>
      <ul className="destinations-details__overview-list">
        {name && (
          <li>
            <div className="destinations-details__overview-left">
              <h6 className="destinations-details__overview-title">Nombre</h6>
            </div>
            <div className="destinations-details__overview-right">
              <p className="destinations-details__overview-text">{name}</p>
            </div>
          </li>
        )}
        {tel && (
          <li>
            <div className="destinations-details__overview-left">
              <h6 className="destinations-details__overview-title">Telefono</h6>
            </div>
            <div className="destinations-details__overview-right">
              <p className="destinations-details__overview-text">{tel}</p>
            </div>
          </li>
        )}
        {email && (
          <li>
            <div className="destinations-details__overview-left">
              <h6 className="destinations-details__overview-title">
                Correo electronico
              </h6>
            </div>
            <div className="destinations-details__overview-right">
              <p className="destinations-details__overview-text">{email}</p>
            </div>
          </li>
        )}
        {website && (
          <li>
            <div className="destinations-details__overview-left">
              <h6 className="destinations-details__overview-title">Sitio web</h6>
            </div>
            <div className="destinations-details__overview-right">
              <p className="destinations-details__overview-text">{website}</p>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  data: PropTypes.object,
};

export default ContactList;
