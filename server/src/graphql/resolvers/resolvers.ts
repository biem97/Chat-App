// Pubsub
import pubsub, { TRIGGERS } from "./pubsub";

// UUID
import { v4 as uuidv4 } from "uuid";

interface IUser {
  id: string;
  name: string;
}
interface MessageInMemory {
  id: string;
  sender: IUser;
  message: string;
}
interface MessagesInMemory {
  messages: MessageInMemory[];
}

const messagesInMemory: MessagesInMemory = {
  messages: [],
};

const resolvers = {
  Query: {
    messages: () => {
      return messagesInMemory.messages;
    },
  },
  Mutation: {
    sendMessage: (parents: any, args: any, context: any, info: any) => {
      console.log("context: ", context.user.authToken);
      const newMessage = {
        id: uuidv4(),
        sender: {
          id: context.user.authToken,
          name: "Son Nguyen",
        },
        message: args.message,
      };
      messagesInMemory.messages.unshift(newMessage);
      console.log("newMessage:", newMessage.sender.id);
      pubsub.publish(TRIGGERS.ON_PUBLISH_MESSAGES, {
        onPublishMessage: newMessage,
      });
    },
  },
  Subscription: {
    onPublishMessage: {
      subscribe: async (parent: any, args: any, context: any, info: any) => {
        console.log("Context: ", context.user);
        return pubsub.asyncIterator([TRIGGERS.ON_PUBLISH_MESSAGES]);
      },
    },
  },
};

export default resolvers;
