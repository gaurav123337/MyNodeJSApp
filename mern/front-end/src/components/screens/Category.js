import React from 'react';
import PropTypes from 'prop-types';

import Header from '../parts/Header';
import Breadcrumb from '../parts/Breadcrumbs';
import Posts from '../parts/Posts';
import Sidebar from '../parts/Sidebar';
import Footer from '../parts/Footer';

const Category = () => {
  return (
    <>
    <Header />
    <Breadcrumb />
   <section className="blog-section">
			<div className="container">
				<div className="row">
          <Posts />
          <Sidebar />
				</div>
			</div>
		</section>
    <Footer />
    </>
  );
};

Category.propTypes = {};

export default Category;
