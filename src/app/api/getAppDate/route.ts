import { getClient } from "@/graphql/getClient";
import gql from "graphql-tag";

export const revalidate = 0;

export async function GET(request: Request) {
  const client = getClient();

  let date;

  try {
    const { data } = await client.query({
      query: gql`
        query {
          date
        }
      `,
      fetchPolicy: "no-cache",
    });
    date = data.date;
  } catch (err) {
    console.log("err!!! " + err);
  }
  return Response.json({ date });
}
