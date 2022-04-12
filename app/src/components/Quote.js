import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";

const Jokes = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    callQuoteApi();
  }, []);

  function callQuoteApi() {
    const options = {
      method: "GET",
      url: "https://quotes15.p.rapidapi.com/quotes/random/",
      headers: {
        "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
        "X-RapidAPI-Key": "27988b610emsh4b72adf927112aep1cf1ccjsn83974b76e073",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setQuote(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <>
      <div> A motivational quote for you to keep going in life!!</div>
      <div>{quote.content}</div>
    </>
  );
};

export default Jokes;
