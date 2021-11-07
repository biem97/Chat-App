import { PubSub } from "graphql-subscriptions";
const pubsub = new PubSub();

enum TRIGGERS {
  ON_PUBLISH_MESSAGES = "ON_PUBLISH_MESSAGES",
}

export default pubsub;

export { TRIGGERS };
