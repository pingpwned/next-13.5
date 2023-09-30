import { getClient } from "@/graphql/getClient";
import { CacheUtil } from "@/utils/cache";
import gql from "graphql-tag";

export const revalidate = 0;

const cache = new CacheUtil();

export async function GET() {
  const cacheKey = "date";
  if (cache.get(cacheKey)) {
    return Response.json(cache.get(cacheKey));
  }
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
    cache.set(cacheKey, { date });
  } catch (err) {
    console.log("err!!! " + err);
  }
  return Response.json({ date });
}
