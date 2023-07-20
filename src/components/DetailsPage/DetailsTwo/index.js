import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DetailsLeft from "../DetailsLeft";

const DetailsTwo = ({ data }) => {
  const { detailsLeft } = data;
  return (
    <section className="tour-details-two">
      <Container>
        <Row>
          <Col xl={8} lg={7}>
            <DetailsLeft data={detailsLeft} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DetailsTwo;
