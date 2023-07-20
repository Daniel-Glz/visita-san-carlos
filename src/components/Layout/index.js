import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useRootContext } from "@/context/context";
import Footer from "@/components/Footer";
import Head from "next/head";
import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";
import Preloader from "@/components/Preloader";
import Favicon from "../Favicon";

const Layout = ({ children, pageTitle, data, alternativeVersion }) => {
  const [loading, setLoading] = useState(true);
  const { menuStatus } = useRootContext();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{pageTitle} - Visita San Carlos, Mexico</title>
        <Favicon />
      </Head>
      <Preloader loading={loading} />
      <main style={{ opacity: loading ? 0 : 1 }} className="page-wrapper">
        <Header data={data.header} alternativeVersion={!alternativeVersion} />
        {children}
        <Footer data={data.footer} />
      </main>
      {menuStatus && <MobileMenu data={data.header} />}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  alternativeVersion: PropTypes.bool,
  pageTitle: PropTypes.string,
  data: PropTypes.object,
};

export default Layout;
