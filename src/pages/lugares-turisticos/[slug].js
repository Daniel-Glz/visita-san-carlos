import Layout from "@/components/Layout";
import DetailsPage from "@/components/DetailsPage";
import React from "react";
import client from "@/api/ApolloClient";
import { getStaticData } from "@/utils";
import { GET_TOURISTIC_PLACE, GET_TOURISTIC_PLACES_SLUG } from "@/graphql.queries";

const EventDetails = ({ data }) => {
  const { touristicPlace } = data;
  let { header, footer } = data;
  const detailsTitle = 'Lugares turísticos en San Carlos';

  return (
    <Layout data={{ header, footer }} pageTitle={touristicPlace.title}>
      <DetailsPage data={touristicPlace} title={detailsTitle} />
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const { slug } = params;
  let { data } = await client.query({query: GET_TOURISTIC_PLACE(slug)});
  let staticData = await getStaticData();
  data = { ...data, ...staticData };

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const { data } = await client.query({query: GET_TOURISTIC_PLACES_SLUG});

  const paths = data.touristicPlaces.nodes.map((place) => ({
    params: { slug: place.slug },
  }));

  return { paths, fallback: false };
}

export default EventDetails;
