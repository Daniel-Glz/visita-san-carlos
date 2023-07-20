import Link from "next/link";
import Image from "next/image";
import React from "react";
import PropTypes from "prop-types";

const SingleTour = ({ tour = {}, userSelect = false }) => {
  const { image, title, meta, rate, superb } = tour;

  return (
    <div>
      <div
        style={{ userSelect: userSelect ? "unset" : "none" }}
        className="popular-tours__single"
      >
        <div className="popular-tours__img">
          <Image
            src={image}
            alt=""
            width={370}
            height={260}
          />
          <div className="popular-tours__icon">
            <Link href="/tour-details">
              <i className="fa fa-heart"></i>
            </Link>
          </div>
        </div>
        <div className="popular-tours__content">
          <div className="popular-tours__stars">
            <i className="fa fa-star"></i> {superb} Superb
          </div>
          <h3 className="popular-tours__title">
            <Link href="/tour-details">{title}</Link>
          </h3>
          <p className="popular-tours__rate">
            <span>${rate}</span> / Per Person
          </p>
          <ul className="popular-tours__meta list-unstyled">
            {meta.map((item, index) => (
              <li key={index}>
                <Link href="/tour-details">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

SingleTour.propTypes = {
  tour: PropTypes.object,
  userSelect: PropTypes.bool,
};

export default SingleTour;
