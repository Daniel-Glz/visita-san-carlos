import React from "react";
import { Image } from "react-bootstrap";
import Link from "next/link";

const ArticleCard = ({ title, postDate, category, extract, image }) => {
  return (
    <div className="popular-tours__single">
      <div className="popular-tours__img">
        <Image src={image} alt="" />
      </div>
      <div className="popular-tours__content">
        <h3 className="popular-tours__title">{title}</h3>
        <p className="popular-tours__date">{postDate}</p>
        <p className="popular-tours__rate">{category}</p>
        <p className="popular-tours__desc">{extract}</p>
        <Link href="/">
          <a className="popular-tours__btn btn btn__white">Read More</a>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
