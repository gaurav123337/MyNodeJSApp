import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUserURI } from "appInfo";

const List = () => {
  const [list, setList] = useState({});

  useEffect(() => {
    async function getData() {
      await axios.get(baseUserURI + "/list-user", {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      })
        .then((resp) => {
          console.log(resp, "list resp");
          setList(resp.data.records);
        })
    }
    getData();
  }, []);


  console.log(list, "list data");

  return (
    <ul className="list-group">

      {list.length > 0 ? (list.map((item, index) => {
        return (<li className="list-group-item">{item.username}</li>)
      })) : null}
    </ul >
  )
}

export default List;
