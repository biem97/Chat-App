// MUI
import { styled, Box, Typography } from "@mui/material";
// import clsx from "clsx";

// Component
import Avatar from "../Avatar";
import Message from "../Message";

// Hooks
import { IUser } from "../../types";

const MessageCell = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  margin: "2px 0",
}));

const MessageContainer = styled(Box)(() => ({
  display: "flex",
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

interface MessageProps {
  message: string;
  sender: IUser;
  style: string;
  isMe: boolean;
}

const MessageBlock: React.FC<MessageProps> = ({
  message,
  sender,
  style,
  isMe,
}) => {
  const { name } = sender;
  const position = isMe ? "right" : "left";

  return (
    <MessageCell>
      {style === "start" && !isMe && (
        <Typography
          sx={{
            marginLeft: 6,
            marginRight: 6,
            marginTop: "8px",
          }}
          variant="caption"
          className={position}
        >
          {name}
        </Typography>
      )}
      <MessageContainer>
        <AvatarContainer className={style}>
          {!isMe && <Avatar sx={{ width: 24, height: 24 }} />}
        </AvatarContainer>
        <Message style={style} message={message} position={position} />
        <MessengerDeliveryStatusContainer
        // className={clsx(isRead && "isRead")}
        >
          {<Avatar sx={{ width: 18, height: 18 }} />}
        </MessengerDeliveryStatusContainer>
      </MessageContainer>
    </MessageCell>
  );
};

export default MessageBlock;
