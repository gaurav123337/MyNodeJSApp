import React, { useState, useEffect } from "react";
// import useAPICall from "customHooks/useAPICall";

//name={name} discount={discount} price={price}

// import { getAPI } from "customHooks/useAPICall";

// import * as apiCalls from "customHooks/useAPICall";
var apiCalls = require("../customHooks/useAPICall");

const Product = () => {
  const [product, setProduct] = useState({});
  // const [fetchAPI] = useAPICall();
  const token = localStorage.getItem("token");
  useEffect(() => {
    const getData = async () => {
      let products = "";
      // e.preventDefault();
      products = await apiCalls.getAPI("/product/listProduct", token);
      console.log(products, "after API call");
      setProduct(products);
      //resetInputs();
    }
    getData();
  }, []);


  console.log(product, "list");
  return (
    <>
      <ul>
        {
          product ? (product && product.records && product.records.length > 0 && product.records.map((product, index) => {
            return (
              <li key={index}>
                <div style={{ width: "200px" }} className="border-around">
                  <label>Product Name: {product.productName}</label>
                  <label htmlFor="offer" className="text-center w-100">
                    <span className="danger fw-bold ">{product.offer}</span></label>
                  <img alt="my product" className="img-thumbnail" src="https://image.shutterstock.com/image-photo/ecommerce-online-shopping-concept-miniature-600w-627490598.jpg" />
                  <p className="text-center w-100">
                    Price : <span>{product.discount}</span>
                  </p>
                </div>
              </li>
            )
          })) : null
        }
      </ul>
    </>
  );
}

export default Product;
