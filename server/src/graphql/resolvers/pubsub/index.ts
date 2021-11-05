import { PubSub } from "graphql-subscriptions";
const pubsub = new PubSub();

enum TRIGGERS {
  NUMBER_INCREMENTED = "NUMBER_INCREMENTED",
}

let currentNumber: number = 0;
function incrementNumber() {
  currentNumber++;
  pubsub.publish(TRIGGERS.NUMBER_INCREMENTED, {
    numberIncremented: currentNumber,
  });
  setTimeout(incrementNumber, 1000);
}
incrementNumber();

export default pubsub;

export { TRIGGERS, currentNumber };
