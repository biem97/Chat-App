// GraphQL
import { execute, subscribe } from "graphql";

// Apollo
import { ApolloServer } from "apollo-server-express";

// GraphQL Tool
import { makeExecutableSchema } from "@graphql-tools/schema";

// Subscription
// TODO: Replace by graphql-ws
import { SubscriptionServer } from "subscriptions-transport-ws";

// Type Definition
import typeDefs from "./typeDefs";

// Resolvers
import resolvers from "./resolvers";

// Types
import { Server } from "http";

const apolloServer = (httpServer: Server) => {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const server = new ApolloServer({
    schema,
  });

  SubscriptionServer.create(
    {
      schema,
      execute,
      subscribe,
      onConnect: async (
        connectionParams: any,
        webSocket: any,
        context: any
      ) => {
        if (connectionParams.authToken) {
          console.log("Connected");

          const context = {
            user: { authToken: connectionParams.authToken },
            webSocket,
          };

          return context;
        }

        throw new Error("Missing auth token");
      },
      onDisconnect: async (webSocket: any, context: any) => {
        console.log("Disconnected");
      },
    },
    { server: httpServer, path: server.graphqlPath }
  );

  return server;
};

export default apolloServer;
