import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const EventCard = (event) => {
  return (
    <Link href={`/eventos/${event.slug}`}>
      <div
        className="popular-tours__single"
      >
        <div className="popular-tours__img">
          <Image
            src={event.content.featuredImage.sourceUrl}
            alt=""
          />
        </div>
        <div className="popular-tours__content">
          <h3 className="popular-tours__title">
            <span>{event.title}</span>
          </h3>
          <div className="popular-tours__date">
            <i className="tevily-icon-clock"></i>
            {event.content.startDate}
          </div>
          <p className="popular-tours__text">
            {event.content.organizationName}
          </p>
          <button className="thm-btn popular-tours__btn">
            <span>Ver más</span>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
