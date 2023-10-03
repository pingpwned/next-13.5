"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const DetectLanguageChange = ({ locale }: any) => {
  const [prevLocale, setPrevLocale] = useState<string | null>();
  const t = useTranslations("common");

  useEffect(() => {
    if (!localStorage.getItem("locale")) localStorage.setItem("locale", locale);
    setPrevLocale(window.localStorage.getItem("locale"));
  }, [setPrevLocale, locale]);

  useEffect(() => {
    if (prevLocale && prevLocale !== locale) {
      toast.info(t("language_changed_success"));
      window.localStorage.setItem("locale", locale);
    }
  }, [prevLocale, t, locale]);
  return <></>;
};
