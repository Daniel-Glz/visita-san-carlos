import PropTypes from 'prop-types';
import About from '@/components/About';
import Layout from '@/components/Layout';
import Banner from '@/components/Banner';
import ThreeIconSection from '@/components/ThreeIconSection';
import TouristicPlacesList from '@/components/TouristicPlacesList';
import Statistics from '@/components/Statistics';
import CategoryList from '@/components/CategoryList';
import PostList from '@/components/PostList';
import Testimonial from '@/components/Testimonial';
import ListInline from '@/components/ListInline';
import { GET_TOTALS, GET_TOURISTIC_PLACES_TEASER } from '@/graphql.queries';
import client from '@/api/ApolloClient';
import { getStaticData } from '@/utils';

export default function Home({ data, staticData }) {
  const {
    meta,
    banner,
    threeIconSection,
    about,
    listInline,
    touristicPlacesList,
    statistics,
    categoryList,
    postList,
    testimonial
  } = staticData.pages.home;
  const { header, footer } = staticData;
  const { touristicPlaces, count } = data;
  return (
    <Layout data={{ header, footer }} pageTitle={meta.title} >
      <Banner data={banner} />
      <ThreeIconSection data={threeIconSection} />
      <About data={about} />
      <ListInline  staticData={listInline} data={touristicPlaces.nodes} />
      <TouristicPlacesList data={touristicPlacesList} />
      <Statistics data={{ ...statistics, count }} />
      <CategoryList data={categoryList} />
      <PostList data={postList} />
      <Testimonial data={testimonial} />
    </Layout>
  )
}

Home.propTypes = {
  data: PropTypes.object
}

export async function getStaticProps() {
  let { data } = await client.query({
    query: GET_TOURISTIC_PLACES_TEASER,
    variables: { first: 8 }
  });

  let getAllTotals = await client.query({
    query: GET_TOTALS
  });

  const { events, businesses, touristicPlaces, posts } = getAllTotals.data;

  const count = [
    {
      title: "Eventos",
      count: events.nodes.length,
    },
    {
      title: "Negocios locales",
      count: businesses.nodes.length
    },
    {
      title: "Lugares turisticos",
      count: touristicPlaces.nodes.length
    },
    {
      title: "Articulos",
      count: posts.nodes.length
    }
  ]

  data = {
    ...data,
    count
  }

  const staticData = await getStaticData();

  return {
    props: {
      data,
      staticData
    }
  }
}
