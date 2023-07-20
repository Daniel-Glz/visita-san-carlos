import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import PropTypes from "prop-types";

const EventCard = ({ slug, content, title }) => {
  const { featuredImage, startDate, organizationName } = content;
  return (
    <Link href={`/eventos/${slug}`}>
      <div
        className="popular-tours__single"
      >
        <div className="popular-tours__img">
          <Image
            src={featuredImage.sourceUrl}
            alt={featuredImage.altText}
          />
        </div>
        <div className="popular-tours__content">
          <h3 className="popular-tours__title">
            <span>{title}</span>
          </h3>
          <div className="popular-tours__date">
            <i className="tevily-icon-clock"></i>
            {startDate}
          </div>
          <p className="popular-tours__text">
            {organizationName}
          </p>
          <button className="thm-btn popular-tours__btn">
            <span>Ver más</span>
          </button>
        </div>
      </div>
    </Link>
  );
};

EventCard.propTypes = {
  item: PropTypes.object
}

export default EventCard;
