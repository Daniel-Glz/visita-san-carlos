import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Col, Container, Row } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import CardHandler from "../CardHandler";
import PropTypes from "prop-types";

const List = ({ type, query, staticData }) => {
  const { title, tagline } = staticData;
  const [cursor, setCursor] = useState('');
  const { data, refetch } = useQuery(query, {
    variables: {
      first: 3,
      after: cursor,
    },
    notifyOnNetworkStatusChange: true,
  });
  const [cards, setCards] = useState([]);
  const hasMore = data && data[type].pageInfo.hasNextPage;

  const getMoreCards = () => {
    setCursor(data[type].pageInfo.endCursor);
    refetch();
  };

  useEffect(() => {
    if (data) {
      setCards([...cards, ...data[type].nodes]);
    }
  }, [data]);

  return (
    <section className="popular-tours-two">
      <InfiniteScroll
        dataLength={cards.length}
        next={getMoreCards}
        hasMore={hasMore}
        scrollThreshold={0.1}
      >
        <Container>
          <div className="section-title text-center">
            <span className="section-title__tagline">{tagline}</span>
            <h2 className="section-title__title">{title}</h2>
          </div>
          <Row>
            {cards.map((card, index) => (
              <Col
                key={index}
                xl={4}
                lg={6}
                md={6}
                className="animated fadeInUp"
              >
                <CardHandler card={card} />
              </Col>
            ))}
          </Row>
        </Container>
      </InfiniteScroll>
    </section>
  );
};

List.propTypes = {
  type: PropTypes.string,
  query: PropTypes.object,
  staticData: PropTypes.object,
};

export default List;
