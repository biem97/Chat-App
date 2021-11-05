import { ApolloClient } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";

// Cache
import { cache } from "./cache";

const wsLink = new WebSocketLink({
  uri: "ws://localhost:5000/graphql",
  options: {
    reconnect: true,
  },
});

const client = new ApolloClient({
  link: wsLink,
  cache,
});

export default client;
