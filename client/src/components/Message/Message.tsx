import React, { useRef } from "react";

// MUI
import { styled, Box, Paper } from "@mui/material";
import clsx from "clsx";

const MessageContentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexGrow: 1,
  "&.right": {
    flexDirection: "row-reverse",
  },
}));

const MessageContentPaper = styled(Paper)(({ theme }) => ({
  flexGrow: 0,
  padding: "7px 12px",
  backgroundColor: `${theme.palette.mode === "dark" ? "#3e4042" : "#e4e6eb"}`,
  maxWidth: "960px",
  [theme.breakpoints.down("lg")]: {
    maxWidth: "calc(100% - 128px)",
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: "calc(100% - 64px)",
  },
  borderRadius: "18px",
  "&.right": {
    backgroundColor: "#0084ff",
    color: "white",
  },
  "&.right-start": {
    marginTop: "10px",
    borderBottomRightRadius: "4px",
  },
  "&.right-middle": {
    borderBottomRightRadius: "4px",
    borderTopRightRadius: "4px",
  },
  "&.right-end": {
    borderTopRightRadius: "4px",
  },
  "&.left-start": {
    borderBottomLeftRadius: "4px",
  },
  "&.left-middle": {
    borderBottomLeftRadius: "4px",
    borderTopLeftRadius: "4px",
  },
  "&.left-end": {
    borderTopLeftRadius: "4px",
  },
}));

const MessageActionContainer = styled(Box)(({ theme }) => ({
  flexGrow: 0,
  maxWidth: "100%",
  display: "flex",
  alignItems: "center",
  "&.right": {
    flexDirection: "row-reverse",
  },
}));

const MessageActions = styled("div")(({ theme }) => ({
  visibility: "hidden",
}));

type Position = "left" | "right";

interface IMessage {
  message: string;
  position?: Position;
  style: string;
}

const Message: React.FC<IMessage> = ({ message, position, style }) => {
  const containerRef = useRef<any>();
  const iconRef = useRef<any>();

  return (
    <MessageContentContainer className={position}>
      {/* <MessageContentPaper className={clsx(position)}> */}
      <MessageContentPaper className={clsx(position, `${position}-${style}`)}>
        {message}
      </MessageContentPaper>
      <MessageActionContainer ref={containerRef} className={position}>
        <MessageActions ref={iconRef} id="action-icons">
          Icons
        </MessageActions>
      </MessageActionContainer>
      <div style={{ flexGrow: 1, maxWidth: "100%" }} />
    </MessageContentContainer>
  );
};

export default Message;
