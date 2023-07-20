import Layout from "@/components/Layout";
import DetailsPage from "@/components/DetailsPage";
import React from "react";
import { gql } from "@apollo/client";
import client from "@/api/ApolloClient";

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
  let { data } = await client.query({
    query: gql`
      query
        {
          business(id: "${slug}", idType: SLUG) {
            contact {
              email
              facebook
              instagram
              name
              tel
              website
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
              organizationName
              startDate
              type
            }
            title
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
        businesses {
          nodes {
            slug
          }
        }
      }
    `
  });

  const paths = data.businesses.nodes.map((business) => ({
    params: { slug: business.slug },
  }));

  return { paths, fallback: false };
}

export default EventDetails;
