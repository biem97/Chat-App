import React from "react";
import Message from "../Message";

// Type
import { IMessages } from "../../types";

// MUI
import { styled, Box } from "@mui/material";

const MessagesContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  flexBasis: 0,
  overflowX: "hidden",
  overflowY: "auto",
}));

const Messages: React.FC<IMessages> = ({ messages }) => {
  return (
    <MessagesContainer>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </MessagesContainer>
  );
};

export default Messages;
