import React from "react";

const SSRPage = async () => {
  const response = await fetch(`${process.env.NEXT_APP_SERVER_URL}`, {
    cache: "no-cache",
  });
  const results = await response.json();

  return (
    <>
      <div>{results.fact}</div>
      <div>{results.length}</div>
    </>
  );
};

export default SSRPage;
