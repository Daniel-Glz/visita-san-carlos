import React from "react";
import PropTypes from "prop-types";
import Layout from "@/components/Layout";
import { getStaticData } from "@/utils";
import PageHeader from "@/components/PageHeader";
import FormSection from "@/components/FormSection";

const Registrar = ({ data }) => {
  let { header, footer } = data;
  let { form } = data.pages.events;

  return (
    <Layout data={{ header, footer }} pageTitle="Registrar evento" isHome={true}>
      <PageHeader title="Registrar nuevo evento" />
      <FormSection fields={form.fields} />
    </Layout>
  );
};

Registrar.propTypes = {
  data: PropTypes.object,
};

export default Registrar;

export async function getStaticProps() {
  let data = await getStaticData();

  return { props: { data } };
}
