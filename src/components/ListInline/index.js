import dynamic from "next/dynamic";
import React from "react";
import { Col, Row } from "react-bootstrap";
import CardHandler from "../CardHandler";
import PropTypes from "prop-types";
import 'tiny-slider/dist/tiny-slider.css';

const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });

const settings = {
  lazyload: true,
  nav: true,
  navPosition: "bottom",
  mouseDrag: true,
  items: 1,
  autoplay: true,
  autoHeight: true,
  controls: false,
  gutter: 0,
  autoplayButton: false,
  autoplayButtonOutput: false,
  responsive: {
    300: {
      items: 1
    },
    800: {
      items: 2,
      gutter: 30,
    },
    1200: {
      items: 4,
      gutter: 30,
    },
  },
};

const ListInline = ({ staticData, data }) => {
  const { title, subtitle } = staticData;

  return (
    <section className="popular-tours">
      <div className="popular-tours__container">
        <div className="section-title text-center">
          <span className="section-title__tagline">{subtitle}</span>
          <h2 className="section-title__title">{title}</h2>
        </div>
        <Row>
          <Col xl={12}>
            <div className="popular-tours__carousel">
              <TinySlider settings={settings}>
                {data.map((item, index) => (
                  <CardHandler card={item} key={index} />
                ))}
              </TinySlider>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

ListInline.propTypes = {
  data: PropTypes.object,
};

export default ListInline;
