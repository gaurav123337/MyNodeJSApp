import React, { useState, useEffect } from "react";
import AddItemHOC from "HOC/AddItemHOC";
import AddProduct from "components/AddProduct";

const AddProductHOC = AddItemHOC(AddProduct);

const AddAllProducts = () => {
  return (
    <div className="container">
      <AddProductHOC />
    </div>
  );
}

export default AddAllProducts;
