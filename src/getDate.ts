export const getDate = async () => {
  const res = await fetch(
    `${
      process.env.VERCEL_URL
        ? "https://" + process.env.VERCEL_URL
        : "http://localhost:3000"
    }/api/getAppDate`,
    { next: { revalidate: 0 } }
  );

  return await res.json();
};
