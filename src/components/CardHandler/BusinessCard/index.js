import React from "react";
import { Image } from "react-bootstrap";
import Link from "next/link";

const BusinessCard = ({ title, slug, content, contact}) => {
  const { featuredImage } = content;
  const { facebook, instagram, website } = contact;
  const pathToBusiness = `/negocios/${slug}`;
  return (
    <div>
      <div className="popular-tours__single">
        <Link href={pathToBusiness} className="popular-tours__img">
          <Image
            src={featuredImage.sourceUrl}
            alt={featuredImage.altText}
          />
        </Link>
        <div className="popular-tours__content">
          <h3 className="popular-tours__title">
            <Link href={pathToBusiness}>{title}</Link>
          </h3>
          <div className="popular-tours__icon-list">
            <Link href={facebook} target="__blank" follow="no-follow"><i className="fab fa-facebook-square"></i></Link>
            <Link href={instagram} target="__blank" follow="no-follow"><i className="fab fa-instagram"></i></Link>
            <Link href={website} target="__blank" follow="no-follow"><i className="fas fa-globe"></i></Link>
          </div>
          <Link href={pathToBusiness} className="thm-btn popular-tours__btn">
            <span>Ver más</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;

