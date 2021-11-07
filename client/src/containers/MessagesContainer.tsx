import React, { useEffect, useState } from "react";
import Messages from "../components/MessagesBlock";
import { IMessages } from "../types";

// MUI
import { gql, useQuery } from "@apollo/client";

const MessagesContainer: React.FC = () => {
  const [messages, setMessage] = useState<IMessages>([]);
  const { subscribeToMore, loading } = useQuery(MESSAGES, {
    onCompleted: ({ messages }) => setMessage(messages),
    onError: (err) => {
      console.error("Error: ", err);
    },
  });

  useEffect(() => {
    const unsub = subscribeToMore({
      document: ON_PUBLISH_MESSAGE,
      updateQuery: (
        prevData,
        {
          subscriptionData: {
            data: { onPublishMessage },
          },
        }
      ) => {
        setMessage((prev) => [onPublishMessage, ...prev]);
      },
    });

    return unsub;
  }, [subscribeToMore]);

  if (loading) return <div>Loading</div>;

  return <Messages messages={messages} />;
};

export default MessagesContainer;

const MESSAGES = gql`
  query MESSAGES {
    messages {
      id
      sender {
        id
        name
      }
      message
    }
  }
`;

const ON_PUBLISH_MESSAGE = gql`
  subscription ON_PUBLISH_MESSAGE {
    onPublishMessage {
      id
      sender {
        id
        name
      }
      message
    }
  }
`;
