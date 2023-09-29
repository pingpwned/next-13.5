import { getClient } from "@/graphql/getClient";
import gql from "graphql-tag";

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
    });
    date = data.date;
  } catch (err) {
    console.log("err!!! " + err);
  }

  return Response.json({ date });
}
