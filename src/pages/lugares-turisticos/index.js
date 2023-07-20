import React from "react";
import Banner from "@/components/Banner";
import Layout from "@/components/Layout";
import { convertNamingConvention } from "@/utils";
import PropTypes from 'prop-types';
import About from "@/components/About";
import List from "@/components/List";
import Testimonial from "@/components/Testimonial";

const LugaresTuristicos = ({ data }) => {
  const {
    meta,
    banner,
    about,
    testimonial,
    list
  } = convertNamingConvention(data.pages.touristic);
  let { header, footer } = data;
  header = convertNamingConvention(header);
  footer = convertNamingConvention(footer);

  return (
    <Layout data={{header, footer}} pageTitle={meta.title} isHome={true}>
      <Banner data={banner} />
      <About data={about} />
      <Testimonial data={testimonial} />
      <List data={list} />
    </Layout>
  );
}

LugaresTuristicos.propTypes = {
  data: PropTypes.object
};

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/data/data.json');
  const data = await res.json();

  return { props: { data } }
}


export default LugaresTuristicos;
