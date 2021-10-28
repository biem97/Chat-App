import React, { useEffect, useRef } from "react";

// MUI
import { styled, Box, Paper } from "@mui/material";

const MessageContentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexGrow: 1,
  "&.right": {
    flexDirection: "row-reverse",
    margin: "10px 0",
  },
}));

const MessageContentPaper = styled(Paper)(({ theme }) => ({
  flexGrow: 0,
  padding: "7px 12px",
  backgroundColor: `${theme.palette.mode === "dark" ? "#3e4042" : "#e4e6eb"}`,
  "&.right": {
    backgroundColor: "#0084ff",
    color: "white",
  },
}));

const MessageActionContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
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

type Visibility = "visible" | "hidden";

interface IMessage {
  message: string;
  position?: Position;
}

const MessageContent: React.FC<IMessage> = ({ message, position = "left" }) => {
  const containerRef = useRef<any>();
  const iconRef = useRef<any>();

  // useEffect(() => {
  //   const setActionIconsVisibility = (state: Visibility) => {
  //     iconRef.current.style.setProperty("visibility", state);
  //   };
  //   if (containerRef.current) {
  //     containerRef.current.addEventListener("mouseover", () => {
  //       setActionIconsVisibility("visible");
  //     });
  //     containerRef.current.addEventListener("mouseout", () => {
  //       setActionIconsVisibility("hidden");
  //     });
  //   }

  //   return () => {
  //     containerRef.current.removeEventListener(
  //       "mouseover",
  //       setActionIconsVisibility
  //     );
  //     containerRef.current.removeEventListener(
  //       "mouseout",
  //       setActionIconsVisibility
  //     );
  //   };
  // });
  return (
    <MessageContentContainer className={position === "right" ? "right" : ""}>
      <MessageContentPaper className={position === "right" ? "right" : ""}>
        {message}
      </MessageContentPaper>
      <MessageActionContainer
        ref={containerRef}
        className={position === "right" ? "right" : ""}
      >
        <MessageActions ref={iconRef} id="action-icons">
          Icons
        </MessageActions>
      </MessageActionContainer>
    </MessageContentContainer>
  );
};

export default MessageContent;
