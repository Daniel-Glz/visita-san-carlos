import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ListItem from "./ListItem";

const List = ({ data, toursPage = false }) => {
  const { tagline, title, popularTours } = data;

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
          {popularTours.map((tour, index) => (
            <Col
              key={index}
              xl={4}
              lg={6}
              md={6}
              className="animated fadeInUp"
            >
              <ListItem tour={tour} userSelect />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default List;
