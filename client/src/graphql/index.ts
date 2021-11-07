import { ApolloClient } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";

// Cache
import { cache } from "./cache";

// UUID
import { uuid } from "../context/UserContext";

const wsLink = new WebSocketLink({
  uri: "ws://localhost:5000/graphql",
  options: {
    reconnect: true,
    lazy: true,
    inactivityTimeout: 0,
    connectionParams: () => ({
      authToken: uuid,
    }),
  },
});

const client = new ApolloClient({
  link: wsLink,
  cache,
});

export default client;
