import { gql } from "apollo-server-express";

const typeDefs = gql`
  ### Special type
  type Query {
    messages: [Message]!
  }
  type Mutation {
    sendMessage(message: String!): Message
  }

  type Subscription {
    onPublishMessage: Message
  }

  ### Type
  type User {
    id: ID!
    name: String!
  }

  type Message {
    id: ID!
    receiver: User!
    sender: User!
    message: String!
    seen: Boolean!
  }
`;

export default typeDefs;
