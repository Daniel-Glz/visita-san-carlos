import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardHandler from "../CardHandler";
import PropTypes from "prop-types";

const List = ({ data, toursPage = false }) => {
  const { tagline, title, cards } = data;

  return (
    <section className="popular-tours-two">
      <Container>
        {!toursPage && (
          <div className="section-title text-center">
            <span className="section-title__tagline">{tagline}</span>
            <h2 className="section-title__title">{title}</h2>
          </div>
        )}
        <Row>
          {cards.map((card, index) => (
            <Col
              key={index}
              xl={4}
              lg={6}
              md={6}
              className="animated fadeInUp"
            >
              <CardHandler card={card} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

List.propTypes = {
  data: PropTypes.object,
  toursPage: PropTypes.bool
};

export default List;
