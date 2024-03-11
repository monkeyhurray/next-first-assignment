import React from "react";
import axios from "axios";

const ISR = async () => {
  const response = await fetch(`${process.env.NEXT_APP_SERVER_URL}`, {
    next: {
      revalidate: 5,
    },
  });
  const results = await response.json();
  return (
    <>
      <div>{results.fact}</div>
      <div>{results.length}</div>
    </>
  );
};

export default ISR;
