import Layout from "@/components/Layout";
import DetailsPage from "@/components/DetailsPage";
import React from "react";
import client from "@/api/ApolloClient";
import { getStaticData } from "@/utils";
import { GET_EVENT, GET_EVENTS_SLUG } from "@/graphql.queries";

const EventDetails = ({ data }) => {
  const { event } = data;
  let { header, footer } = data;
  const detailsTitle = 'Eventos en San Carlos';

  return (
    <Layout data={{ header, footer }} pageTitle={event.title}>
      <DetailsPage data={event} title={detailsTitle} />
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const { slug } = params;
  let { data } = await client.query({query: GET_EVENT(slug)});
  let staticData = await getStaticData();
  data = { ...data, ...staticData };

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const { data } = await client.query({query: GET_EVENTS_SLUG});

  const paths = data.events.nodes.map((event) => ({
    params: { slug: event.slug },
  }));

  return { paths, fallback: false };
}

export default EventDetails;
