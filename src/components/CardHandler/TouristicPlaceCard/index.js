import React from "react";
import { Image } from "react-bootstrap";
import Link from "next/link";

const TouristicPlaceCard = (item) => {
  const { featuredImage, location } = item.content;
  const { title } = item;

  return (
    <Link href={`lugares-turisticos/${item.slug}`} className="popular-tours__single">
      <div className="popular-tours__img touristic-place-card__img">
        <Image src={featuredImage.sourceUrl} alt={featuredImage.altText} />
      </div>
      <div className="popular-tours__content touristic-place-card__content">
        <h3 className="popular-tours__title touristic-place-card__title">
          {title}
        </h3>
        <p className="popular-tours__ubication touristic-place-card__ubication">
          <i className="fas fa-map-marker-alt"></i>
          <span className="popular-tours__address">{location.streetAddress}</span>
        </p>
        <div className="thm-btn popular-tours__btn">
            <span>Ver más</span>
        </div>
      </div>
    </Link>
  );
};

export default TouristicPlaceCard;
