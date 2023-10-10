import { getClient } from "@/graphql/getClient";
import { Plugin } from "@/graphql/types";
import gql from "graphql-tag";

export const revalidate = 0;

export async function GET() {
  const client = getClient();
  let plugins: Plugin[] = [];

  try {
    const { data } = await client.query({
      query: gql`
        query {
          getPlugins {
            plugins {
              id
              name
              description
              isEnrolled
              roles
            }
          }
        }
      `,
    });
    plugins = data.getPlugins.plugins;
  } catch (err) {
    console.log("err!!! " + err);
  }

  return Response.json({ plugins });
}
