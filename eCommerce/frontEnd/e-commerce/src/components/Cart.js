import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "actions/action";

const products = [{
  id: 1,
  name: "Soap",
  price: "5",
  qty: 0
}, {
  id: 2,
  name: "Perfume",
  price: "50",
  qty: 0
}, {
  id: 3,
  name: "Sandel",
  price: "5",
  qty: 0
}];

const Cart = () => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(0);

  useEffect(() => {
    console.log(count, "caount value");
    dispatch(addToCart(count));
  }, [count]);

  const increaseItem = (item) => {

    // console.log(item);
    setCount(count + 1);
    setPrice(price + +item.price);
    item.qty = item.qty + 1;
  }

  const decreaseItem = (item) => {
    if (item.qty > 0) {
      item.qty = item.qty - 1;
      setCount(count - 1);
      setPrice(price - +item.price);
    }
  }

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item Name</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
            <th scope="col">Qty</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((item, index) => {
              return (
                <tr>
                  <th scope="row" key={item.id}>{index}</th>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td><button onClick={(e) => increaseItem(item)} className="btn btn-primary">+</button>
                    <button onClick={(e) => decreaseItem(item)} className="btn btn-danger">-</button></td>
                  <td>{item.qty}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <p>
        Item count: {count}
        <span>Total : {price}</span>
      </p>
    </div>
  );
};

Cart.propTypes = {};

export default Cart;
