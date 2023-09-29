import { getDate } from "@/getDate";

export const revalidate = 30;

export default async function TestLayout({ children }: any) {
  const { date } = await getDate();

  return (
    <>
      {children}

      <div className="flex flex-col items-center p-4 border border-gray-200 rounded dark:border-gray-700 gap-3">
        <p className="text-lg text-white dark:text-white md:text-xl font-bold text-center">
          {date?.split("2023")[1]}
        </p>

        <p className="text-white dark:text-white font-bold text-center">
          {date?.split("2023")[0]} 2023
        </p>
      </div>
    </>
  );
}
