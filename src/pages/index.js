import PropTypes from 'prop-types';
import Layout from '@/components/Layout';

export default function Home({ data }) {
  return (
    <Layout isHome={true} pageTitle="Inicio" data={data}>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/data/data.json');
  const data = await res.json();

  return {
    props: { data }
  }
}

Home.propTypes = {
  data: PropTypes.object
}
