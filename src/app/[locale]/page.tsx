import { LanguageForm } from "@/components/LanguageForm";
import { useTranslations } from "next-intl";

export default function Index({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations("test");

  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {t("title")}
      </h1>

      <LanguageForm locale={locale} />
    </>
  );
}
