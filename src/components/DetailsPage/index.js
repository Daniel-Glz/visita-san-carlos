import React from "react";
import DetailsTwo from "./DetailsTwo";
import PageHeader from "../PageHeader";

const DetailsPage = ({ data, title }) => {
  return (
    <>
      <PageHeader title={title} />
      <DetailsTwo data={data} />
    </>
  );
};

export default DetailsPage;
