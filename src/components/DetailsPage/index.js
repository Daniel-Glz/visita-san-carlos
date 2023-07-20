import React from "react";
import DetailsOne from "./DetailsOne";
import DetailsTwo from "./DetailsTwo";

const DetailsPage = ({ data }) => {
  const { detailsOne, detailsTwo } = data;
  return (
    <>
      <DetailsOne data={detailsOne} />
      <DetailsTwo data={detailsTwo} />
    </>
  );
};

export default DetailsPage;
