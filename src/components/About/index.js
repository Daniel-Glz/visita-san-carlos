import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Link from "next/link";
import PropTypes from "prop-types";
import shape1 from "@/assets/images/shapes/about-one-shape-1.png";
import shape2 from "@/assets/images/shapes/about-one-shape-2.png";

const About = ({ data }) => {
  const {
    about,
    phone,
    tagline,
    title,
    destination,
    points,
    button
  } = data;

  return (
    <section className="about-one">
      <div className="about-one-shape-1 animated slideInLeft">
        <Image src={shape1.src} alt="" />
      </div>
      <div className="about-one-shape-2 float-bob-y">
        <Image src={shape2.src} alt="" />
      </div>
      <Container>
        <Row>
          <Col xl={6} className="animated fadeInLeft">
            <div className="about-one__left">
              <div className="about-one__img-box">
                <div className="about-one__img">
                  <Image src={about.src} alt="" />
                </div>
                <div className="about-one__call">
                  <div className="about-one__call-icon">
                    <span className="icon-phone-call"></span>
                  </div>
                  <div className="about-one__call-number">
                    <p>Book Tour Now</p>
                    <h4>
                      <Link href={`tel:${phone}`}>{phone}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className="about-one__right">
              <div className="section-title text-left">
                <span className="section-title__tagline">{tagline}</span>
                <h2 className="section-title__title">{title}</h2>
              </div>
              <p className="about-one__right-text">{destination}</p>
              <ul className="list-unstyled about-one__points">
                {points.map((point, index) => (
                  <li key={index}>
                    <div className="icon">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="text">
                      <p>{point}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link href={button.link} className="about-one__btn thm-btn">
                {button.text}
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

About.propTypes = {
  data: PropTypes.object,
};

export default About;
