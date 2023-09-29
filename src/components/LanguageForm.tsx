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

  const onSubmit = (data: FormData) => {
    const { locale } = data;

    router.replace("/", { locale });
  };
  const prevLocale =
    typeof window !== "undefined" && window.localStorage.getItem("locale");

  useEffect(() => {
    if (prevLocale !== locale) {
      toast.info(t("language_changed_success"));
      window.localStorage.setItem("locale", locale);
    }
  }, [prevLocale]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="locale">Select an option:</label>
          <Controller
            name="locale"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <select {...field}>
                <option value="">Select an option</option>
                <option value="en">EN</option>
                <option value="de">DE</option>
              </select>
            )}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
