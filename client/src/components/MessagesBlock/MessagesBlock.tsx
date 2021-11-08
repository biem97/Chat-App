import React from "react";
import MessageBlock from "../MessageBlock";

// Type
import { IMessages, IMessage } from "../../types";

// MUI
import { styled, Box } from "@mui/material";

// Hooks
import { useUser } from "../../hooks";

const MessagesContainer = styled(Box)(() => ({
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

  return (
    <MessagesContainer>
      {messages.map((messageObject: IMessage, index, messages) => {
        const { sender, message, id } = messageObject;

        const isMe = user.id === sender.id;

        let style;
        if (messages[index + 1]?.sender.id === sender.id) {
          if (messages[index - 1]?.sender.id === sender.id) style = "middle";
          else style = "end";
        } else if (messages[index - 1]?.sender.id === sender.id)
          style = "start";
        else style = "";

        return (
          <MessageBlock
            key={id}
            message={message}
            sender={sender}
            style={style}
            isMe={isMe}
          />
        );
      })}
    </MessagesContainer>
  );
};

export default MessagesBlock;
