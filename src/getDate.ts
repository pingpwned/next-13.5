export const getDate = async () => {
  const res = await fetch(
    `${
      process.env.VERCEL_URL
        ? "https://" + process.env.VERCEL_URL
        : "http://localhost:3000"
    }/api/getAppDate`,
    { next: { revalidate: 30 } }
  );

  const { date } = await res.json();
  const counter = parseInt(res.headers.get("set-cookie")?.split("=")[1] || "");
  return { date, counter };
};
