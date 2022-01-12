import React from 'react';
import PropTypes from 'prop-types';

import Header from "../parts/Header";
import Slider from "../parts/Slider";
import TrendingPost from "../parts/TrendingPost";
import FreshStories from "../parts/FreshStories";
import Footer from "../parts/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <TrendingPost />
      <FreshStories />
      <Footer />
    </>
  );
};

Home.propTypes = {};

export default Home;
