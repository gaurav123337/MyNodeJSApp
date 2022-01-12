import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import AddUser from "../components/AddUser";
import List from "components/List";
import HigherOrderComponent from "HOC/ListHoc";
import Product from "components/Product";
import AddAllProducts from "pages/AddAllProducts";

const ListWithUpdate = HigherOrderComponent(List);

const SignUp = () => {
  return (
    <div className="container">
      <AddUser />
      <ListWithUpdate />
      {/* <Product />
      <AllProducts /> */}
      <Link to="/">Sign In</Link>
    </div>
  );
};

SignUp.propTypes = {};

export default SignUp;
