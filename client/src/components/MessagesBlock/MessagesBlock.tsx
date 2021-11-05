import React from "react";
import MessageBlock from "../MessageBlock";

// Type
import { IMessages, IMessage } from "../../types";

// MUI
import { styled, Box } from "@mui/material";

const MessagesContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  flexBasis: 0,
  overflowX: "hidden",
  overflowY: "auto",
}));

interface MessageProps {
  messages: IMessages;
}

const meId = "son-1";

const MessagesBlock: React.FC<MessageProps> = ({ messages }) => {
  const messagesLength = messages.length;

  return (
    <MessagesContainer>
      {messages.map((messageObject: IMessage, index) => {
        const { sender, message, id } = messageObject;
        const isMe = sender.id === meId;
        const style =
          messagesLength === 1
            ? ""
            : index === 0
            ? "start"
            : index === messagesLength - 1
            ? "end"
            : "middle";
        return (
          <MessageBlock key={id} message={message} style={style} isMe={isMe} />
        );
      })}
    </MessagesContainer>
  );
};

export default MessagesBlock;
