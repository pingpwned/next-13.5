import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  const { messages } = await fetch(
    "http://localhost:3000/api/getMessages?" + new URLSearchParams({ locale })
  )
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => console.log("err!!! " + err));

  return {
    messages,
  };
});
