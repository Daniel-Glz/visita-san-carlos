import React from "react";
import Banner from "@/components/Banner";
import Layout from "@/components/Layout";
import PropTypes from 'prop-types';
import About from "@/components/About";
import List from "@/components/List";
import { getStaticData } from "@/utils";
import { GET_BUSINESSES_TEASER } from "@/graphql.queries";

const Negocios = ({ data }) => {
  const {
    meta,
    banner,
    about,
    list
  } = data.pages.business
  let { header, footer } = data;

  return (
    <Layout data={{header, footer}} pageTitle={meta.title} isHome={true}>
      <Banner data={banner} />
      <About data={about} />
      <List staticData={list} query={GET_BUSINESSES_TEASER} type={'businesses'} />
    </Layout>
  );
}

Negocios.propTypes = {
  data: PropTypes.object
};

export async function getStaticProps() {
  let data = await getStaticData();

  return { props: { data } }
}


export default Negocios;
