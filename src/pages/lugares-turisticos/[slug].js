import Layout from "@/components/Layout";
import DetailsPage from "@/components/DetailsPage";
import React from "react";
import { gql } from "@apollo/client";
import client from "@/api/ApolloClient";
import { getStaticData } from "@/utils";

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
  let { data } = await client.query({
    query: gql`
      query {
        touristicPlace(id: "${slug}", idType: SLUG) {
          title
          content {
            cost
            description
            endDate
            featuredImage {
              altText
              sourceUrl
            }
            freeAttend
            organizationName
            startDate
            type
            location {
              city
              country
              streetName
              streetNumber
              longitude
              latitude
              streetAddress
            }
          }
        }
      }
    `
  });
  let staticData = await getStaticData();
  data = { ...data, ...staticData };

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query {
        touristicPlaces {
          nodes {
            slug
          }
        }
      }
    `
  });

  const paths = data.touristicPlaces.nodes.map((place) => ({
    params: { slug: place.slug },
  }));

  return { paths, fallback: false };
}

export default EventDetails;
