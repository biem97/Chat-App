import React from "react";
import Message from "../Message";

// Type
import { IMessage, IMessagesBlock } from "../../types";

// MUI
import { styled, Box } from "@mui/material";

const MessagesContainer = styled(Box)(({ theme }) => ({}));

const Messages: React.FC<{ messagesBlock: IMessagesBlock }> = ({
  messagesBlock,
}) => {
  const messages = messagesBlock.messages;
  const messagesLength = messages.length;
  const isMe = messagesBlock.user.id === "son-1";

  return (
    <MessagesContainer>
      {messages.map((message: IMessage, index) => {
        const style =
          messagesLength === 1
            ? ""
            : index === 0
            ? "start"
            : index === messagesLength - 1
            ? "end"
            : "middle";
        return (
          <Message
            key={message.id}
            message={message}
            style={style}
            isMe={isMe}
          />
        );
      })}
    </MessagesContainer>
  );
};

export default Messages;
