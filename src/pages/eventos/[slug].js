import Layout from "@/components/Layout";
import DetailsPage from "@/components/DetailsPage";
import React from "react";
import { gql } from "@apollo/client";
import client from "@/api/ApolloClient";

const EventDetails = ({ data }) => {
  const { event } = data;
  let { header, footer } = data;

  return (
    <Layout data={{ header, footer }} pageTitle={event.title}>
      <DetailsPage data={event} />
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const { slug } = params;
  let { data } = await client.query({
    query: gql`
      query {
          event(id: "${slug}", idType: SLUG) {
            contact {
              email
              facebook
              instagram
              name
              website
              tel
            }
            content {
              cost
              description
              endDate
              featuredImage {
                altText
                sourceUrl
              }
              freeAttend
              location {
                streetAddress
              }
              organizationName
              startDate
              type
            }
            title
            slug
          }
      }
    `
  });
  let staticData = await fetch('http://localhost:3000/data/data.json');
  staticData = await staticData.json();
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
        events {
          nodes {
            slug
          }
        }
      }
    `
  });

  const paths = data.events.nodes.map((event) => ({
    params: { slug: event.slug },
  }));

  return { paths, fallback: false };
}

export default EventDetails;
