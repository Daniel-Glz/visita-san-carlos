import PropTypes from 'prop-types';
import Layout from '@/components/Layout';
import Banner from '@/components/Banner';

export default function Home({ data }) {
  const { pages } = data;
  const { home } = pages;

  return (
    <Layout isHome={true} pageTitle="Inicio" data={data}>
      <Banner data={home.banner} />
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/data/data.json');
  const data = await res.json();

  return { props: { data } }
}

Home.propTypes = {
  data: PropTypes.object
}
