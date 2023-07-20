import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";
import PropTypes from "prop-types";

const CategoryListItem = ({ destination = {}, col }) => {
  const { image, title, subtitle } = destination;

  return (
    <Col xl={col} lg={col}>
      <div className="destinations-two__top-single animated fadeInUp">
        <div className="destinations-two__top-img">
          <Image
            src={image}
            alt=""
          />
          <div className="destinations-two__top-content">
            {subtitle && (
              <p className="destinations-two__top-sub-title">{subtitle}</p>
            )}
            <h2 className="destinations-two__top-title">
              <Link href="/destinations-details">{title}</Link>
            </h2>
          </div>
        </div>
      </div>
    </Col>
  );
};

CategoryListItem.propTypes = {
  destination: PropTypes.object,
  col: PropTypes.number
};

export default CategoryListItem;
