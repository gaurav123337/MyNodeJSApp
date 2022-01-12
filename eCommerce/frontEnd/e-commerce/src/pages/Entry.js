import React from "react";
import PropTypes from "prop-types";

import SignIn from "components/SignIn";
import AddItemHOC from "HOC/AddItemHOC";
import Cart from "components/Cart";
import { Link } from "react-router-dom";

const SignInHOC = AddItemHOC(SignIn);

const Entry = () => {
  return (
    <div className="container">
      <SignInHOC />
      <Cart />
      <Link to="/signIn">SignUp</Link>
    </div>
  );
};

Entry.propTypes = {};

export default Entry;
