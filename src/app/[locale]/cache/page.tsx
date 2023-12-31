import { Counter } from "@/components/Counter";
import { getDate } from "@/getDate";

export default async function CachePage() {
  const { date, counter } = await getDate();

  return (
    <>
      <div className="flex flex-col items-center p-4 border border-2 border-gray-900 rounded dark:border-gray-200 gap-3">
        <p className="text-lg md:text-xl font-bold text-center text-gray-900 dark:text-white">
          {date?.split("2023")[1]}
        </p>

        <p className=" font-bold text-center text-gray-900 dark:text-white">
          {date?.split("2023")[0]} 2023
        </p>
      </div>

      <Counter counter={counter} />
    </>
  );
}
