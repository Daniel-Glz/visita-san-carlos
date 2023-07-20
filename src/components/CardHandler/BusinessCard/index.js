import React from "react";
import { Image } from "react-bootstrap";
import Link from "next/link";

const BusinessCard = ({ image, name, category, facebook, instagram, website }) => {
  return (
    <div>
      <div
        className="popular-tours__single"
      >
        <div className="popular-tours__img">
          <Image
            src={image}
            alt=""
          />
          <div className="popular-tours__icon">
            <Link href="/tour-details">
              <i className="fa fa-heart"></i>
            </Link>
          </div>
        </div>
        <div className="popular-tours__content">
          <h3 className="popular-tours__title">
            <Link href="/tour-details">{name}</Link>
          </h3>
          <p className="popular-tours__rate touristic-place-card__rate">
          <span>{category}</span>
          </p>
          <div className="popular-tours__icon-list">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-instagram"></i>
            <i className="fas fa-globe"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;

