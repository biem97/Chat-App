// MUI
import { styled, Box } from "@mui/material";
// import clsx from "clsx";

// Component
import Avatar from "../Avatar";
import Message from "../Message";

const MessageContainer = styled(Box)(() => ({
  display: "flex",
  margin: "3px 0",
  justifyContent: "center",
  gap: "10px",
  padding: "0 5px 0 10px",
}));

const AvatarContainer = styled(Box)(() => ({
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

const MessengerDeliveryStatusContainer = styled(Box)(() => ({
  alignSelf: "stretch",
  display: "flex",
  alignItems: "flex-end",
  flexGrow: 0,
  visibility: "hidden",
  "&.isRead": {
    visibility: "visible",
  },
}));

type MessageProps = {
  message: string;
  style: string;
  isMe: boolean;
};

const MessageBlock: React.FC<MessageProps> = ({ message, style, isMe }) => {
  const position = isMe ? "right" : "left";

  return (
    <MessageContainer>
      <AvatarContainer className={style}>
        {!isMe && <Avatar sx={{ width: 24, height: 24 }} />}
      </AvatarContainer>
      <Message style={style} message={message} position={position} />
      <MessengerDeliveryStatusContainer
      // className={clsx(isRead && "isRead")}
      >
        {isMe && <Avatar sx={{ width: 18, height: 18 }} />}
      </MessengerDeliveryStatusContainer>
    </MessageContainer>
  );
};

export default MessageBlock;
