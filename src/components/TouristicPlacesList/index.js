import React from "react";
import { Container } from "react-bootstrap";
import PropTypes from "prop-types";

const TouristicPlacesList = ({ data }) => {
  const { bg, lists, tagline, title } = data;

  return (
    <section className="tour-types">
      <Container>
        <div
          className="tour-types-map"
          style={{ backgroundImage: ` url(${bg.src})` }}
        ></div>
        <div className="section-title text-center">
          <span className="section-title__tagline">{tagline}</span>
          <h2 className="section-title__title">{title}</h2>
        </div>
        <ul className="list-unstyled tour-types_list">
          {lists.map(({ icon, title }, index) => (
            <li key={index} className="tour-types__single animated fadeInUp">
              <div className="tour-types__content">
                <div className="tour-types__icon">
                  <i className={icon}></i>
                </div>
                <h4 className="tour-types__title">{title}</h4>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

TouristicPlacesList.propTypes = {
  data: PropTypes.object,
};

export default TouristicPlacesList;
