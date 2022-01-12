import React from 'react';
import PropTypes from 'prop-types';
import Header from '../parts/Header';
import Comment from '../parts/Comment';
import PostDesc from '../parts/PostDesc';
import Footer from '../parts/Comment';
const Single = () => {
  return (
    <>
    <Header/>
    <div className="single-post no-sidebar">
          <PostDesc />
          <Comment />
       </div>
       <Footer />
       </>
  );
};

Single.propTypes = {};

export default Single;
