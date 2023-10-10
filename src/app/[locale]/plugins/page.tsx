import { SelectPlugins } from "@/components/SelectPlugins";
import { Plugin } from "@/graphql/types";

async function getPlugins(): Promise<Plugin[]> {
  const { plugins } = await fetch(
    `${
      process.env.VERCEL_URL
        ? "https://" + process.env.VERCEL_URL
        : "http://localhost:3000"
    }/api/getPlugins`
  )
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => console.log("err!!! " + err));

  return plugins;
}

export default async function Plugins(): Promise<JSX.Element> {
  const plugins = await getPlugins();

  return (
    <div>
      <h1 className="mb-4 text-4xl text-center font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Plugins page
      </h1>
      <SelectPlugins plugins={plugins} />
    </div>
  );
}
