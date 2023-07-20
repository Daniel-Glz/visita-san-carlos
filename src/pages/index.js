import PropTypes from 'prop-types';
import About from '@/components/About';
import Layout from '@/components/Layout';
import Banner from '@/components/Banner';
import ThreeIconSection from '@/components/ThreeIconSection';
import TouristicPlacesList from '@/components/TouristicPlacesList';
import Statistics from '@/components/Statistics';
import { convertNamingConvention } from '@/utils';
import CategoryList from '@/components/CategoryList';
import PostList from '@/components/PostList';
import Testimonial from '@/components/Testimonial';
import ListInline from '@/components/ListInline';

export default function Home({ data }) {
  const {
    banner,
    threeIconSection,
    about,
    listInline,
    touristicPlacesList,
    statistics,
    categoryList,
    postList,
    testimonial
  } = convertNamingConvention(data.pages.home);

  return (
    <Layout data={data} isHome={true} pageTitle="Inicio" >
      <Banner data={banner} />
      <ThreeIconSection data={threeIconSection} />
      <About data={about} />
      <ListInline data={listInline} />
      <TouristicPlacesList data={touristicPlacesList} />
      <Statistics data={statistics} />
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
  const res = await fetch('http://localhost:3000/data/data.json');
  const data = await res.json();

  return { props: { data } }
}
