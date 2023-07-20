import React, { Fragment, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Counter from "@/components/Counter";
import PropTypes from "prop-types";

const Statistics = ({ data }) => {
  const { bg, tagline, title, counter } = data;
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="video-two">
        <div className="video-two-bg">
          <div className="video-two-bg__image">
            <img src={bg.src} alt="" />
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
