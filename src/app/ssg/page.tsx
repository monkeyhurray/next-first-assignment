import React from "react";
import axios from "axios";

const SSGPage = async () => {
  const response = await fetch(`${process.env.NEXT_APP_SERVER_URL}`);
  const results = await response.json();
  console.log(results);

  return (
    <>
      <div>{results.fact}</div>
      <div>{results.length}</div>
    </>
  );
};

export default SSGPage;
