import React from "react";
import Banner from "@/components/Banner";
import Layout from "@/components/Layout";
import PropTypes from 'prop-types';
import About from "@/components/About";
import List from "@/components/List";
import Testimonial from "@/components/Testimonial";
import { getStaticData } from "@/utils";
import { GET_TOURISTIC_PLACES_TEASER } from "@/graphql.queries";

const LugaresTuristicos = ({ data }) => {
  const {
    meta,
    banner,
    about,
    testimonial,
    list
  } = data.pages.touristic;
  let { header, footer } = data;

  return (
    <Layout data={{header, footer}} pageTitle={meta.title} isHome={true}>
      <Banner data={banner} />
      <About data={about} />
      <Testimonial data={testimonial} />
      <List staticData={list} type="touristicPlaces" query={GET_TOURISTIC_PLACES_TEASER}/>
    </Layout>
  );
}

LugaresTuristicos.propTypes = {
  data: PropTypes.object
};

export async function getStaticProps() {
  let data = await getStaticData();

  return { props: { data } }
}


export default LugaresTuristicos;
