import { LoadingSkeleton } from "@/components/LoadingSkeleton";
import { useTranslations } from "next-intl";

export default function CacheLayout({ children }: any) {
  const t = useTranslations("cachePage");

  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {t("title")}
      </h1>
      <p className="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400 text-center">
        {t("description")}
      </p>
      {children}
    </>
  );
}
