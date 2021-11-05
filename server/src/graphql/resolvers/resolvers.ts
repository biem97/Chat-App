// Pubsub
import pubsub, { currentNumber, TRIGGERS } from "./pubsub";

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const resolvers = {
  Query: {
    books: () => {
      return books;
    },
    currentNumber() {
      return currentNumber;
    },
  },
  Subscription: {
    numberIncremented: {
      subscribe: () => pubsub.asyncIterator([TRIGGERS.NUMBER_INCREMENTED]),
    },
  },
};

export default resolvers;
