import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Counter from "@/components/Counter";
import PropTypes from "prop-types";
import Image from "next/image";
import bg from "@/assets/images/resources/statistics-bg.png";

const Statistics = ({ data }) => {
  const { tagline, title, counter } = data;

  return (
    <>
      <div className="video-two">
        <div className="video-two-bg">
          <div className="video-two-bg__image">
            <Image src={bg.src} alt="" width={1600} height={900} />
          </div>
        </div>
        <Container>
          <Row>
            <Col xl={12}>
              <div className="video-two__inner">
                <p className="video-one__tagline">{tagline}</p>
                <h2 className="video-one__title">
                  {title.split("\n").map((t, i) => (
                    <Fragment key={i}>
                      <span>{t}</span>
                      <br />
                    </Fragment>
                  ))}
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Counter data={counter} />
    </>
  );
};

Statistics.propTypes = {
  data: PropTypes.object
};

export default Statistics;
