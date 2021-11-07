import React, { useRef } from "react";
import MessageBlock from "../MessageBlock";

// Type
import { IMessages, IMessage } from "../../types";

// MUI
import { styled, Box } from "@mui/material";

// Hooks
import { useUser } from "../../hooks";

const MessagesContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  flexBasis: 0,
  overflowX: "hidden",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column-reverse",
}));

interface MessageProps {
  messages: IMessages;
}

const MessagesBlock: React.FC<MessageProps> = ({ messages }) => {
  const [user] = useUser();
  const messagesLength = messages.length;
  const currentSender = useRef<any>();

  return (
    <MessagesContainer>
      {messages.map((messageObject: IMessage, index, messages) => {
        const { sender, message, id } = messageObject;
        // if () {
        // currentSender.current = sender;
        // }

        const isMe = sender.id === user.id;
        const style = messageObject.id
          ? ""
          : index === 0
          ? "end"
          : index === messagesLength - 1
          ? "start"
          : "middle";

        return (
          <MessageBlock key={id} message={message} style={style} isMe={isMe} />
        );
      })}
    </MessagesContainer>
  );
};

export default MessagesBlock;
