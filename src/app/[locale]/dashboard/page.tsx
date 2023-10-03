import { Dashboard } from "@/components/Dashboard";

async function getPluginSettings() {
  const { plugins } = await fetch(
    `${
      process.env.VERCEL_URL
        ? "https://" + process.env.VERCEL_URL
        : "http://localhost:3000"
    }/api/getPluginSettings`
  )
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => console.log("err!!! " + err));

  return plugins;
}

export default async function Applications() {
  const plugins = await getPluginSettings();
  return (
    <>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Dashboard page
      </h1>

      <Dashboard plugins={plugins} />
    </>
  );
}
