import React, { useEffect } from "react";
import Messages from "../components/MessagesBlock";
import { IMessages } from "../types";

// MUI
import { styled, Box } from "@mui/material";
import { gql, useQuery } from "@apollo/client";

const NUMBER = gql`
  query NUMBER {
    currentNumber
  }
`;
const NUMBER_INCREMENTED = gql`
  subscription NUMBER_INCREMENTED {
    numberIncremented
  }
`;

const MessagesContainer: React.FC = () => {
  const messages: IMessages = [
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
  ];

  const { data, loading, error, subscribeToMore } = useQuery(NUMBER);
  useEffect(() => {
    const unsub = subscribeToMore({
      document: NUMBER_INCREMENTED,
      updateQuery: (data) => {
        console.log(data);
      },
    });

    return unsub;
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  console.log("data: ", data);
  return <Messages messages={messages} />;
};

export default MessagesContainer;
