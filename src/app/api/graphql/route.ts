import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { gql } from "graphql-tag";

const resolvers = {
  Query: {
    date: async () => {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      return new Date().toUTCString();
    },
    getMessages: async (_: any, { locale }: { locale: string }) => {
      return (await import(`../../../graphql/messages/${locale}.json`)).default;
    },
  },
};

const typeDefs = gql`
  type Query {
    date: String
    getMessages(locale: String!): Messages
  }

  type Messages {
    homePage: HomePage
    cachePage: CachePage
    common: Common
  }

  type HomePage {
    title: String
  }

  type CachePage {
    title: String
    description: String
    time_left: String
    seconds: String
    refresh_message: String
    refresh_button: String
  }

  type Common {
    language_changed_success: String
    select_language: String
    submit: String
  }
`;

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
