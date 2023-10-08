import { Counter } from "@/components/Counter";
import { getDate } from "@/getDate";
import { useTranslations } from "next-intl";

export default async function Test() {
  const { date } = await getDate();

  return <CachePage date={date} />;
}

function CachePage({ date }: any) {
  const t = useTranslations("cachePage");
  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {t("title")}
      </h1>
      <p className="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400 text-center">
        {t("description")}
      </p>

      <div className="flex flex-col items-center p-4 border border-2 border-gray-900 rounded dark:border-gray-200 gap-3">
        <p className="text-lg md:text-xl font-bold text-center text-gray-900 dark:text-white">
          {date?.split("2023")[1]}
        </p>

        <p className=" font-bold text-center text-gray-900 dark:text-white">
          {date?.split("2023")[0]} 2023
        </p>
      </div>

      <Counter />
    </>
  );
}
