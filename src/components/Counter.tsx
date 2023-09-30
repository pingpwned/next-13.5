"use client";

import { useEffect, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(parseInt(window.localStorage.getItem("count") || "0"));
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      setCount(count + 1);
      if (count < 30) {
        window.localStorage.setItem("count", count.toString());
      } else {
        window.localStorage.setItem("count", "0");
      }
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  }, [count]);
  return (
    <>
      <h2
        className={`mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white ${
          count >= 30 && "text-green-500 dark:text-green-500"
        }`}
      >
        {count}
      </h2>

      {count >= 30 && (
        <p className="text-lg md:text-xl font-bold text-center text-gray-900 dark:text-gray-200">
          You can reload page now to see fresh Timestamp
        </p>
      )}
    </>
  );
};
