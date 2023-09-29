import { getClient } from "@/graphql/getClient";
import gql from "graphql-tag";

export async function GET(request: Request) {
  const client = getClient();

  const { data } = await client.query({
    query: gql`
      query {
        date
      }
    `,
  });

  return Response.json({ date: data.date });
}
