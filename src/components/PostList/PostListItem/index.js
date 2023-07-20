import Link from "next/link";
import Image from "next/image";
import React, { Fragment } from "react";
import PropTypes from "prop-types";

const PostListItem = ({ news = {}, newsTwo = false }) => {
  const { image, title, author, comments, date } = news;

  return (
    <div
      className={
        newsTwo ? "news-one__single animated fadeInUp" : "news-one__single"
      }
      style={{ userSelect: newsTwo ? "none" : "unset" }}
    >
      <div className="news-one__img">
        <Image src={image} alt="" width={370} height={487} />
        <Link href="/news-details">
            <span className="news-one__plus"></span>
        </Link>
        <div className="news-one__date">
          <p>
            {date.split(" ").map((t, i) => (
              <Fragment key={i}>
                <span>{t}</span>
                <br />
              </Fragment>
            ))}
          </p>
        </div>
      </div>
      <div className="news-one__content">
        <ul className="list-unstyled news-one__meta">
          <li>
            <Link href="/news-details">
                <i className="far fa-user-circle"></i>
                {author}
            </Link>
          </li>
          <li>
            <Link href="/news-details">
                <i className="far fa-comments"></i>
                {comments} Comments
            </Link>
          </li>
        </ul>
        <h3 className="news-one__title">
          <Link href="/news-details">{title}</Link>
        </h3>
      </div>
    </div>
  );
};

PostListItem.propTypes = {
  news: PropTypes.object,
  newsTwo: PropTypes.bool,
};

export default PostListItem;
