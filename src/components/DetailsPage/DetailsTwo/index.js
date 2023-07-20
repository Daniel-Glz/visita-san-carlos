import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DetailsLeft from "../DetailsLeft";
import DetailsRight from "../DetailsRight";

const DetailsTwo = ({ data }) => {
  return (
    <section className="tour-details-two">
      <Container>
        <Row>
          <Col xl={8} lg={7}>
            <DetailsLeft data={data} />
          </Col>
          <Col xl={4} lg={5}>
            <DetailsRight />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DetailsTwo;
