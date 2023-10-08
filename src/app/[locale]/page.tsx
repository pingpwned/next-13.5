import deleteCookie from "@/actions/deleteCookie";
import { LanguageForm } from "@/components/LanguageForm";
import { useTranslations } from "next-intl";
import { cookies } from "next/headers";

export default function Index({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations("homePage");

  const cookieStore = cookies();
  const token = cookieStore.get("AccessToken");

  return (
    <>
      <h1
        data-testid="homepage-title"
        className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
      >
        {t("title")}
      </h1>

      <LanguageForm />

      <form
        action={deleteCookie}
        className="max-w-sm w-3/4 bg-white rounded-lg shadow dark:bg-gray-800 p-4 m-6 flex flex-col gap-5"
      >
        <h2 className="max-w w-full flex justify-between">
          Cookie Value: <strong>{token?.value}</strong>
        </h2>
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
