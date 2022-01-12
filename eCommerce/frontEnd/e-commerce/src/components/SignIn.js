import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import ShowProducts from "pages/ShowProducts";

// import useAPICall from "customHooks/useAPICall";
// import axios from "axios";
// const baseURI = "http://localhost:5000";

// import { postAPI } from "customHooks/useAPICall";
var apiCalls = require("customHooks/useAPICall");

console.log(apiCalls)
const SignIn = (props) => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const { formVal, getFieldVal, resetInputs } = props;


  const fetchData = async (e) => {
    let apiData1 = "";
    e.preventDefault();
    console.log(formVal);
    apiData1 = await apiCalls.postAPI(formVal, "/user/signIn");
    console.log(apiData1, "after API call");
    localStorage.setItem("token", apiData1.data.token);
    //resetInputs();
    if (apiData1.status === 200) {
      navigate("/allProducts");
    }
  }

  return (
    <div className="bd-example">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={(e) => getFieldVal(e)} />
          <div id="emailHelp" className="htmlForm-text">Please enter your email</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="htmlForm-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={(e) => getFieldVal(e)} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={(e) => fetchData(e)}>SignIn</button>
        <button type="reset" className="btn btn-secondary">Reset</button>
      </form>
    </div>
  );
};

SignIn.propTypes = {};

export default SignIn;
