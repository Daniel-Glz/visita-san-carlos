import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

const Banner = ({ data }) => {
  const { subtitle, title, bottomText, slides } = data;

  return (
    <section className="banner">
      <div className="banner-bg-slide">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="banner-bg-slide-item"
            style={{ backgroundImage: `url(${slide})` }}
          ></div>
        ))}
      </div>
      <div className="banner-bg-slide-overly"></div>
      <Container>
        <Row>
          <Col xl={12}>
            <div className="banner__content">
              <p className="banner__sub-title">{subtitle}</p>
              <h1 className="banner__title">{title}</h1>
              <div className="tour-search-box">
                <p className="banner__bottom-text">{bottomText}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

Banner.propTypes = {
  data: PropTypes.object,
};

export default Banner;
