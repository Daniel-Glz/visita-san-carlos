import React from "react";
import ArticleCard from "./ArticleCard";
import TouristicPlaceCard from "./TouristicPlaceCard";
import BusinessCard from "./BusinessCard";
import EventCard from "./EventCard";
import PropTypes from "prop-types";
import PostListItem from "../PostList/PostListItem";

const CardHandler = ({ card = {} }) => {
  const { __typename = "" } = card;

  switch (__typename) {
    case "Article":
      return (
        <ArticleCard {...card} />
      );
    case "TouristicPlace":
      return (
        <TouristicPlaceCard {...card} />
      );
    case "Business":
      return (
        <BusinessCard {...card} />
      );
    case "Event":
      return (
        <EventCard {...card} />
      );
    case "Post":
      return (
        <PostListItem {...card} />
      );
    default:
      return <div>Invalid card type</div>;
  }
};

CardHandler.propTypes = {
  card: PropTypes.object
};

export default CardHandler;
