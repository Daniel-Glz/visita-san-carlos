import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import CategoryListItem from "./CategoryListItem";
import PropTypes from "prop-types";

const CategoryList = ({ data }) => {
  const { image, title, tagline, categories, off } = data;

  return (
    <section className="destinations-two">
      <div className="destinations-two-shape animated slideInLeft">
        <Image src={image.src} alt="" />
      </div>
      <Container>
        <div className="destinations-two__top">
          <Row>
            <Col xl={6} lg={6}>
              <div className="destinations-two__top-left">
                <div className="section-title text-left">
                  <span className="section-title__tagline">{tagline}</span>
                  <h2 className="section-title__title">{title}</h2>
                </div>
              </div>
            </Col>
            <Col xl={6} lg={6}>
              <Row>
                {categories.slice(0, 2).map((destination) => (
                  <CategoryListItem
                    key={destination.id}
                    destination={destination}
                    col={6}
                  />
                ))}
              </Row>
            </Col>
          </Row>
        </div>
        <div className="destinations-two__bottom">
          <Row>
            {categories.slice(2).map((destination) => (
              <CategoryListItem
                key={destination.id}
                destination={destination}
                col={3}
              />
            ))}
            <Col xl={3} lg={3}>
              <div className="destinations-two__top-single animated fadeInUp">
                <div className="destinations-two__top-banner">
                  <p>Up to {off} off</p>
                  <h2>
                    Summer <span>hot deals</span>
                  </h2>
                  <a href="#" className="thm-btn destinations-two__btn">
                    View Deals
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

CategoryList.propTypes = {
  data: PropTypes.object
};

export default CategoryList;
