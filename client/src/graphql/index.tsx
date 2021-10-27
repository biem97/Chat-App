import { ApolloClient } from "@apollo/client";
import { cache } from "./cache";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache,
});

export default client;
