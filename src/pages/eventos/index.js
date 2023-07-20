import React from "react";
import Banner from "@/components/Banner";
import Layout from "@/components/Layout";
import PropTypes from 'prop-types';
import About from "@/components/About";
import List from "@/components/List";
import { getStaticData } from "@/utils";
import { GET_EVENTS } from "@/graphql.queries";

const Eventos = ({ data }) => {
  const {
    meta,
    banner,
    about,
    list
  } = data.pages.events;
  let { header, footer } = data;

  return (
    <Layout data={{header, footer}} pageTitle={meta.title} isHome={true}>
      <Banner data={banner} />
      <About data={about} />
      <List staticData={list} type="events" query={GET_EVENTS} />
    </Layout>
  );
}

Eventos.propTypes = {
  data: PropTypes.object
};

export async function getStaticProps() {
  let data = await getStaticData();

  return { props: { data } }
}


export default Eventos;
