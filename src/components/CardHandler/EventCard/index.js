import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const EventCard = ({ image, name, meta, rate, score }) => {

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
          <div className="popular-tours__stars">
            <i className="fa fa-star"></i> {score}
          </div>
          <p className="popular-tours__rate">
            <span>${rate}</span> / Por Persona
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

export default EventCard;
