import React from "react";
import { Image } from "react-bootstrap";
import Link from "next/link";

const BusinessCard = (business) => {
  const { featuredImage } = business.content;
  const { facebook, instagram, website } = business.contact;

  return (
    <div>
      <div
        className="popular-tours__single"
      >
        <Link href={`/negocios/${business.slug}`} className="popular-tours__img">
          <Image
            src={featuredImage.sourceUrl}
            alt={featuredImage.altText}
          />
        </Link>
        <div className="popular-tours__content">
          <h3 className="popular-tours__title">
            <Link href={`/negocios/${business.slug}`}>{business.title}</Link>
          </h3>
          <p className="popular-tours__rate touristic-place-card__rate">
          <span>{}</span>
          </p>
          <div className="popular-tours__icon-list">
            <Link href={facebook} target="__blank" follow="no-follow"><i className="fab fa-facebook-square"></i></Link>
            <Link href={instagram} target="__blank" follow="no-follow"><i className="fab fa-instagram"></i></Link>
            <Link href={website} target="__blank" follow="no-follow"><i className="fas fa-globe"></i></Link>
          </div>
          <Link href={`/negocios/${business.slug}`} className="thm-btn popular-tours__btn">
            <span>Ver más</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;

