import React from "react";

// MUI
import { styled, Box, Paper } from "@mui/material";
import clsx from "clsx";

// Component
import Avatar from "../Avatar";
import Message from "../Message";

const MessageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "50px",
  justifyContent: "space",
  alignItems: "center",
  gap: "10px",
  padding: "0 5px",
}));

const AvatarContainer = styled(Box)(({ theme }) => ({
  flexGrow: 0,
}));

const MessengerDeliveryStatusContainer = styled(Box)(({ theme }) => ({
  alignSelf: "stretch",
  display: "flex",
  alignItems: "flex-end",
  flexGrow: 0,
  visibility: "hidden",
  "&.isRead": {
    visibility: "visible",
  },
}));

const Messages = ({
  message,
  isMe = false,
  isRead = false,
}: {
  message: string;
  isMe?: boolean;
  isRead?: boolean;
}) => {
  console.log("re-render");
  return (
    <MessageContainer>
      {!isMe && (
        <AvatarContainer>
          <Avatar sx={{ width: 24, height: 24 }} />
        </AvatarContainer>
      )}
      <Message message={message} position={isMe ? "right" : "left"} />
      {isMe && (
        <MessengerDeliveryStatusContainer className={clsx(isRead && "isRead")}>
          <Avatar sx={{ width: 18, height: 18 }} />
        </MessengerDeliveryStatusContainer>
      )}
    </MessageContainer>
  );
};

export default Messages;
