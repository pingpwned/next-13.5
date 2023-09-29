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
    test: Test
    common: Common
  }

  type Test {
    title: String
  }

  type Common {
    language_changed_success: String
  }
`;

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
