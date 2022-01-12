import React, { useState } from "react";
// import useAPICall from "customHooks/useAPICall";
import PropTypes from "prop-types";

// import { postAPI } from "customHooks/useAPICall";

// import * as apiCalls from "customHooks/useAPICall";
var apiCalls = require("../customHooks/useAPICall");

const AddProduct = (props) => {
  const { getFieldVal, formVal, resetInputs } = props;
  // const [fetchAPI] = useAPICall({});

  // const fetchData = (e) => {
  //   const myToken = localStorage.getItem("token");
  //   console.log(myToken, "myToken");
  //   e.preventDefault();
  //   fetchAPI(formVal, "/product/addProduct", myToken);
  //   resetInputs();
  // }

  // const fetchData = async (e) => {
  //   const myToken = localStorage.getItem("token");
  //   console.log(myToken, "myToken");
  //   let apiData1 = "";
  //   e.preventDefault();
  //   console.log(formVal);
  //   apiData1 = await fetchAPI(formVal, "/product/addProduct");
  //   console.log(apiData1, "after API call");

  //   resetInputs();
  // }

  const fetchData = async (e) => {
    const myToken = localStorage.getItem("token");
    console.log(myToken, "myToken");
    let apiData1 = "";
    e.preventDefault();
    console.log(formVal);
    apiData1 = await apiCalls.postAPI(formVal, "/product/addProduct");
    console.log(apiData1, "after API call");

    resetInputs();
  }

  return (
    <div className="bd-example">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">Product Name</label>
          <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" name="productName" value={formVal.productName} onChange={(e) => getFieldVal(e)} />
          <div id="nameHelp" className="form-text">Name can't have special characters</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Offer </label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="offerHelp" name="offer" value={formVal.offer} onChange={(e) => getFieldVal(e)} />
          <div id="offerHelp" className="htmlForm-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputDiscount1" className="htmlForm-label">Discount</label>
          <input type="text" className="form-control" id="exampleInputDiscount1" name="discount" value={formVal.discount} onChange={(e) => getFieldVal(e)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputImagePath1" className="htmlForm-label">Image path</label>
          <input type="text" className="form-control" id="exampleInputImagePath1" name="imageSrc" value={formVal.imageSrc} onChange={(e) => getFieldVal(e)} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={(e) => fetchData(e)}>Add Product</button>
        <button type="reset" className="btn btn-secondary">Reset</button>
      </form>
    </div>
  );
};

AddProduct.propTypes = {};

export default AddProduct;
