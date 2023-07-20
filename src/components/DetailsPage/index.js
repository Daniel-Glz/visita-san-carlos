import React from "react";
import DetailsTwo from "./DetailsTwo";
import PageHeader from "../PageHeader";

const DetailsPage = ({ data }) => {
  return (
    <>
      <PageHeader title="Eventos en San Carlos" />
      <DetailsTwo data={data} />
    </>
  );
};

export default DetailsPage;
