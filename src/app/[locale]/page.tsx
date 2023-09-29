import { useTranslations } from "next-intl";

const getDate = async () => {
  return await fetch("http://localhost:3000/api/getDate")
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => console.log("err!!! " + err));
};

const Date = async () => {
  const { date } = await getDate();

  return <h2>{date}</h2>;
};

export default function Index() {
  const t = useTranslations("test");

  return (
    <>
      <h1>{t("title")}</h1>

      <Date />
    </>
  );
}
