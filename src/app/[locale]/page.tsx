import { LanguageForm } from "@/components/LanguageForm";
import { useTranslations } from "next-intl";
import { cookies } from "next/headers";

export default function Index({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations("homePage");

  async function deleteCookie() {
    "use server";
    cookies().delete("AccessToken");
  }

  const cookieStore = cookies();

  const token = cookieStore.get("AccessToken");

  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {t("title")}
      </h1>

      <LanguageForm locale={locale} />

      <form action={deleteCookie} className="flex items-center gap-5">
        <h2>Cookie Value: {token?.value}</h2>
        <button
          type="submit"
          className="text-white bg-red-400 hover:bg-red-500 font-medium rounded-lg text-sm w-full sm:w-auto p-3 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Delete Cookie
        </button>
      </form>
    </>
  );
}
