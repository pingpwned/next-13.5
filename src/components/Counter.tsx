"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export const Counter = () => {
  const t = useTranslations("cachePage");
  const [count, setCount] = useState(30);
  const [href, setHref] = useState<string>();

  useEffect(() => {
    setCount(parseInt(window.localStorage.getItem("count") || "30"));
    setHref(window.location.href);
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      if (count >= 1) {
        setCount(count - 1);
        window.localStorage.setItem("count", count.toString());
      } else {
        window.localStorage.setItem("count", "30");
      }
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  }, [count]);

  return (
    <>
      {count <= 30 && count >= 1 && (
        <h2 className="mt-8 text-center">
          <>
            {t("time_left")}{" "}
            <span
              className={` text-4xl font-extrabold ${
                count <= 5
                  ? "text-green-500 dark:text-green-500"
                  : "text-gray-900 dark:text-gray-100 "
              }`}
            >
              {count}
            </span>{" "}
            {t("seconds")}
          </>
        </h2>
      )}

      <p className=" mt-8 text-lg md:text-xl font-bold text-center text-gray-900 dark:text-gray-200">
        {t("refresh_message")}
      </p>
      <a
        className="mt-8 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        href={href}
      >
        {t("refresh_button")}
      </a>
    </>
  );
};
