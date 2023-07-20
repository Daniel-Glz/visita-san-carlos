import Layout from "@/components/Layout";
import DetailsPage from "@/components/DetailsPage";
import React from "react";
import client from "@/api/ApolloClient";
import { getStaticData } from "@/utils";
import { GET_BUSINESS, GET_BUSINESSES_SLUG } from "@/graphql.queries";

const EventDetails = ({ data }) => {
  const { business } = data;
  let { header, footer } = data;
  const detailsTitle = "Negocios en San Carlos";

  return (
    <Layout data={{ header, footer }} pageTitle={business.title}>
      <DetailsPage data={business} title={detailsTitle} />
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const { slug } = params;
  let { data } = await client.query({query: GET_BUSINESS(slug)});
  let staticData = await getStaticData();
  data = { ...data, ...staticData };

  return {
    props: {
      data,
      revalidate: 1,
    },
  };
}

export async function getStaticPaths() {
  const { data } = await client.query({query: GET_BUSINESSES_SLUG});

  const paths = data.businesses.nodes.map((business) => ({
    params: { slug: business.slug },
  }));

  return { paths, fallback: false };
}

export default EventDetails;
