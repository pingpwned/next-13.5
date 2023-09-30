"use client";

import { useRouter } from "@/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface FormData {
  locale: string;
}

export const LanguageForm = ({ locale }: { locale: string }) => {
  const { handleSubmit, control } = useForm<FormData>();
  const router = useRouter();
  const t = useTranslations("common");
  const [prevLocale, setPrevLocale] = useState<string | null>();

  useEffect(() => {
    setPrevLocale(window.localStorage.getItem("locale"));
  }, [setPrevLocale]);

  const onSubmit = (data: FormData) => {
    const { locale } = data;

    router.replace("/", { locale });
  };
  useEffect(() => {
    if (prevLocale && prevLocale !== locale) {
      toast.info(t("language_changed_success"));
      window.localStorage.setItem("locale", locale);
    }
  }, [prevLocale, t, locale]);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-sm w-3/4 bg-white rounded-lg shadow dark:bg-gray-800 p-4 m-6 flex flex-col gap-5"
      >
        <label htmlFor="locale">Select Language:</label>
        <Controller
          name="locale"
          control={control}
          // defaultValue={locale === "en" ? "de" : "en"}
          defaultValue=""
          render={({ field }) => (
            <select
              {...field}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="" disabled hidden>
                Language
              </option>
              <option value="en">EN</option>
              <option value="de">DE</option>
            </select>
          )}
        />

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
};
