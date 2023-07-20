import React from "react";
import { Image } from "react-bootstrap";

const TouristicPlaceCard = ({ image, name, category, score }) => {
  return (
    <div className="popular-tours__single">
      <div className="popular-tours__img touristic-place-card__img">
        <Image src={image} alt="" />
      </div>
      <div className="popular-tours__content touristic-place-card__content">
        <h3 className="popular-tours__title touristic-place-card__title">
          {name}
        </h3>
        <p className="popular-tours__rate touristic-place-card__rate">
          <span>{category}</span>
        </p>
        <div className="popular-tours__stars touristic-place-card__stars">
          <i className="fa fa-star"></i> {score}
        </div>
      </div>
    </div>
  );
};

export default TouristicPlaceCard;
