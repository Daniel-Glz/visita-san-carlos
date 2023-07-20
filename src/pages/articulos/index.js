import React from "react";
import Banner from "@/components/Banner";
import Layout from "@/components/Layout";
import PropTypes from 'prop-types';
import About from "@/components/About";
import List from "@/components/List";

const Articulos = ({ data }) => {
  const {
    meta,
    banner,
    about,
    list
  } = data.pages.articles;
  let { header, footer } = data;

  return (
    <Layout data={{header, footer}} pageTitle={meta.title} isHome={true}>
      <Banner data={banner} />
      <About data={about} />
      <List data={list} />
    </Layout>
  );
}

Articulos.propTypes = {
  data: PropTypes.object
};

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/data/data.json');
  const data = await res.json();


  return { props: { data } }
}


export default Articulos;
