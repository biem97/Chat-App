// MUI
import { styled, Box } from "@mui/material";
// import clsx from "clsx";
import { IMessage } from "../../types";

// Component
import Avatar from "../Avatar";
import MessageContent from "../MessageContent";

const MessageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "3px 0",
  justifyContent: "center",
  gap: "10px",
  padding: "0 5px 0 10px",
}));

const AvatarContainer = styled(Box)(({ theme }) => ({
  flexGrow: 0,
  display: "flex",
  justifyContent: "flex-end",
  flexDirection: "column",
  marginBottom: "10px",
  visibility: "hidden",
  "&.end": {
    visibility: "visible",
  },
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

const Message: React.FC<{ message: IMessage; style: string; isMe: boolean }> =
  ({ message, style, isMe }) => {
    const position = isMe ? "right" : "left";

    return (
      <MessageContainer>
        <AvatarContainer className={style}>
          {!isMe && <Avatar sx={{ width: 24, height: 24 }} />}
        </AvatarContainer>
        <MessageContent
          style={style}
          message={message.content}
          position={position}
        />
        <MessengerDeliveryStatusContainer
        // className={clsx(isRead && "isRead")}
        >
          {isMe && <Avatar sx={{ width: 18, height: 18 }} />}
        </MessengerDeliveryStatusContainer>
      </MessageContainer>
    );
  };

export default Message;
