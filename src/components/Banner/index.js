import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

const Banner = ({ data }) => {
  const { sub_title, title, bottomText, slides } = data;
  const subTitle = sub_title;

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
              <p className="banner__sub-title">{subTitle}</p>
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
