import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PostListItem from "./PostListItem";
import PropTypes from "prop-types";

const PostList = ({ data }) => {
  const { tagline, title, newsData } = data;

  return (
    <section className="news-one">
      <Container>
        <div className="news-one__top">
          <Row>
            <Col xl={9} lg={9}>
              <div className="news-one__top-left">
                <div className="section-title text-left">
                  <span className="section-title__tagline">{tagline}</span>
                  <h2 className="section-title__title">{title}</h2>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={3}>
              <div className="news-one__top-right">
                <Link className="news-one__btn thm-btn" href="/news-details">
                  View All posts
                </Link>
              </div>
            </Col>
          </Row>
        </div>
        <div className="news-one__bottom">
          <Row>
            {newsData.map((news, index) => (
              <Col xl={4} lg={4} key={index} className="animated fadeInUp">
                <PostListItem news={news} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

PostList.propTypes = {
  data: PropTypes.object,
};

export default PostList;
