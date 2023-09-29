export const getDate = async () => {
  return await fetch(
    `${
      process.env.VERCEL_URL
        ? "https://" + process.env.VERCEL_URL
        : "http://localhost:3000"
    }/api/getAppDate`
  )
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => console.log("err!!! " + err));
};
