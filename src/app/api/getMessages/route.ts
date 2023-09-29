import { getClient } from "@/graphql/getClient";
import gql from "graphql-tag";

export async function GET(request: Request) {
  const client = getClient();

  const locale = new URL(request.url).searchParams.get("locale");

  let messages;

  try {
    const { data } = await client.query({
      query: gql`
        query {
          getMessages(locale: "${locale}") {
            test {
              title
            }
            common {
              language_changed_success
            }
          }
        }
      `,
    });
    messages = data.getMessages;
  } catch (err) {
    console.log("err!!! " + err);
  }
  return Response.json({ messages });
}