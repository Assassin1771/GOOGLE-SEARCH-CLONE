import React from "react";
import axios from "axios";

import Loading from "./Loading";

import { useState, useEffect } from "react";
import { useStateContext } from "../contexts/StateContextProvider";

const Facts = () => {
  const [data, setData] = useState("");
  const { loading } = useStateContext();

  useEffect(() => {
    callApi();
  }, []);

  function callApi() {
    const options = {
      method: "GET",
      url: "https://random-facts2.p.rapidapi.com/getfact",
      headers: {
        "X-RapidAPI-Host": "random-facts2.p.rapidapi.com",
        "X-RapidAPI-Key": "27988b610emsh4b72adf927112aep1cf1ccjsn83974b76e073",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  if (loading) return <Loading />;

  return (
    <>
      <div>Here's a Fact for you...</div>
      <div>{data.Fact}</div>
    </>
  );
};

export default Facts;
