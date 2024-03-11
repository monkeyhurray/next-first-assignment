"use client";
import React, { useEffect, useState } from "react";

type User = {
  fact: string;
  length: number;
};

const CSRPage = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}`);
      const results = await response.json();
      setUser(results);
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div>로딩중...</div>;
  }
  return (
    <>
      <div>{user.fact}</div>
      <div>{user.length}</div>
    </>
  );
};

export default CSRPage;
