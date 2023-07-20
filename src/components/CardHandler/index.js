import React from "react";
import ArticleCard from "./ArticleCard";
import TouristicPlaceCard from "./TouristicPlaceCard";
import BusinessCard from "./BusinessCard";
import EventCard from "./EventCard";
import PropTypes from "prop-types";

const CardHandler = ({ card = {} }) => {
  const { type = "" } = card;

  switch (type) {
    case "article":
      return (
        <ArticleCard {...card} />
      );
    case "touristic":
      return (
        <TouristicPlaceCard {...card} />
      );
    case "business":
      return (
        <BusinessCard {...card} />
      );
    case "event":
      return (
        <EventCard {...card} />
      );
    default:
      return <div>Invalid card type</div>;
  }
};

CardHandler.propTypes = {
  card: PropTypes.object
};

export default CardHandler;
