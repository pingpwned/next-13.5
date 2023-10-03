import { Dashboard } from "@/components/Dashboard";
import { getPlugins } from "../plugins/page";

export default async function Applications() {
  const plugins = await getPlugins();
  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Dashboard page
      </h1>

      <Dashboard plugins={plugins} />
    </>
  );
}
