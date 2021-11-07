// Pubsub
import pubsub, { TRIGGERS } from "./pubsub";

const messagesInMemory = {
  messages: [
    {
      id: "msg-1",
      sender: {
        id: "son-1",
        name: "Son Nguyen",
      },
      receiver: {
        id: "john-2",
        name: "John Doe",
      },
      message: "Hello John",
      seen: true,
    },
    {
      id: "msg-2",
      sender: {
        id: "john-2",
        name: "John Doe",
      },
      receiver: {
        id: "son-1",
        name: "Son Nguyen",
      },
      message: "Message 2",
      seen: true,
    },
    {
      id: "msg-3",
      sender: {
        id: "john-2",
        name: "John Doe",
      },
      receiver: {
        id: "son-1",
        name: "Son Nguyen",
      },
      message: "ipsumajwoidjaiowdjioajwiodjiaowd",
      seen: true,
    },
  ],
};

const resolvers = {
  Query: {
    messages: () => {
      return messagesInMemory.messages;
    },
  },
  Mutation: {
    sendMessage: (parents: any, args: any, context: any, info: any) => {
      console.log("args: ", args.message);
      const newMessage = {
        id: `msg-1-${Date.now()}`,
        sender: {
          id: "son-1",
          name: "Son Nguyen",
        },
        receiver: {
          id: "john-2",
          name: "John Doe",
        },
        message: args.message,
        seen: true,
      };
      messagesInMemory.messages.push(newMessage);

      pubsub.publish(TRIGGERS.ON_PUBLISH_MESSAGES, {
        onPublishMessage: newMessage,
      });
      pubsub.publish(TRIGGERS.ON_PUBLISH_MESSAGES, {
        onPublishMessage: {
          id: `msg-1-${Date.now() + 1}`,
          receiver: {
            id: "son-1",
            name: "Son Nguyen",
          },
          sender: {
            id: "john-2",
            name: "John Doe",
          },
          message: `Date: ${Date.now()}`,
          seen: true,
        },
      });
    },
  },
  Subscription: {
    onPublishMessage: {
      subscribe: () => pubsub.asyncIterator([TRIGGERS.ON_PUBLISH_MESSAGES]),
    },
  },
};

export default resolvers;
