import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

const ThreeIconSection = ({ data }) => {
  const { items } = data;

  return (
    <section className="three-icon-box">
      <Container>
        <Row>
          {items.map(({ id, icon, title, text }) => (
            <Col key={id} xl={4} lg={4} className="animated fadeInUp">
              <div className="three-icon-box__single">
                <div className="three-icon-box__icon">
                  <i className={icon}></i>
                </div>
                <div className="three-icon-box__content">
                  <h4 className="three-icon-box__title">{title}</h4>
                  <p className="three-icon-box__text">{text}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

ThreeIconSection.propTypes = {
  data: PropTypes.object,
};

export default ThreeIconSection;
