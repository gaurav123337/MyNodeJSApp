import React from 'react';
import PropTypes from 'prop-types';

const Footer = () => {
  return (
    <footer>
			<div className="container">

				<h1>Mitte</h1>
				<p className="copyright-line">© Copyright 2019 - All rights reserved.</p>
				<ul className="social-list">
					<li><a href="#"><i className="fa fa-twitter"></i></a></li>
					<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
					<li><a href="#"><i className="fa fa-facebook"></i></a></li>
					<li><a href="#"><i className="fa fa-instagram"></i></a></li>
				</ul>

			</div>

		</footer>
  );
};

Footer.propTypes = {};

export default Footer;
