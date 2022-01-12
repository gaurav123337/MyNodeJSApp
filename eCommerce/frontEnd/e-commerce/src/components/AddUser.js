import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const baseURI = "http://localhost:5000/user/add";

const AddUser = () => {
  let userDetail = {
    username: "",
    email: "",
    password: ""
  };
  const [user, setUser] = useState(userDetail);

  const getName = (e) => {
    setUser((prevState) => ({
      ...prevState,
      username: e.target.value
    }));
  }

  const getEmail = (e) => {
    setUser((prevState) => ({
      ...prevState,
      email: e.target.value
    }));
  }

  const getPassword = (e) => {
    setUser((prevState) => ({
      ...prevState,
      password: e.target.value
    }));
  }

  const addUser = async (e) => {
    e.preventDefault();
    await axios.post(
      baseURI, user, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },

    }).then((response) => {
      console.log(response, "response")
    });
  }

  return (
    <div className="bd-example">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">User Name</label>
          <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" name="name" onChange={(e) => getName(e)} />
          <div id="nameHelp" className="form-text">Name can't have special characters</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={(e) => getEmail(e)} />
          <div id="emailHelp" className="htmlForm-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="htmlForm-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={(e) => getPassword(e)} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={(e) => addUser(e)}>SignUp</button>
        <button type="reset" className="btn btn-secondary">Reset</button>
      </form>
    </div>
  );
};

AddUser.propTypes = {};

export default AddUser;
