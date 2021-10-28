// MUI
import { styled, Box } from "@mui/material";
// import clsx from "clsx";
import { IMessage, IUser } from "../../types";

// Component
import Avatar from "../Avatar";
import MessageContent from "../MessageContent";

const MessageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  minHeight: "50px",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "10px",
  padding: "0 5px 0 10px",
}));

const AvatarContainer = styled(Box)(({ theme }) => ({
  flexGrow: 0,
  alignSelf: "flex-end",
  marginBottom: "10px",
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

// TODO REMOVE
const me: IUser = {
  id: "son-1",
  name: "Son Nguyen",
};

const Message: React.FC<{ message: IMessage }> = ({ message }) => {
  const isMe = message.user.id === me.id;
  return (
    <MessageContainer>
      {!isMe && (
        <AvatarContainer>
          <Avatar sx={{ width: 24, height: 24 }} />
        </AvatarContainer>
      )}
      <MessageContent
        message={message.content}
        position={isMe ? "right" : "left"}
      />
      {isMe && (
        <MessengerDeliveryStatusContainer
        // className={clsx(isRead && "isRead")}
        >
          <Avatar sx={{ width: 18, height: 18 }} />
        </MessengerDeliveryStatusContainer>
      )}
    </MessageContainer>
  );
};

export default Message;
