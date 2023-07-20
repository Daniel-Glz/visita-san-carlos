import Layout from "@/components/Layout";
import Slider from "@/components/Slider";
import DetailsPage from "@/components/DetailsPage";
import React from "react";

const EventDetails = ({data}) => {
  const {
    slider,
    detailsPage
  } = data.example;

  let { header, footer } = data;

  return (
    <Layout data={{header, footer}} pageTitle="Eventos en San Carlos">
      <Slider data={slider} />
      <DetailsPage data={detailsPage} />
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/data/data.json');
  const data = await res.json();

  return { props: { data } }
}

export async function getStaticPaths() {
  const paths = [
    { params: { slug: 'asd' } },
  ]

  return { paths, fallback: false }
}

export default EventDetails;
