import React, { useCallback, useEffect, useRef, useState } from "react";

// MUI
import { styled, Paper, IconButton, Box, TextField } from "@mui/material";
import {
  ThumbUp as ThumbUpIcon,
  ControlPoint as ControlPointIcon,
  Gif as GifIcon,
  PermMedia as PermMediaIcon,
  Pets as PetsIcon,
  Send as SendIcon,
} from "@mui/icons-material";

// GraphQL
import { useMutation, gql } from "@apollo/client";
import { useUser } from "../../hooks";

const SEND_MESSAGE = gql`
  mutation SEND_MESSAGE($message: String!) {
    sendMessage(message: $message) {
      id
      sender {
        id
        name
      }
      message
    }
  }
`;

const Input = styled("input")({
  display: "none",
});

const TextInputContainer = styled(Paper)(({ theme }) => ({
  flexGrow: 0,
  display: "flex",
}));

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "20px",
  },
});

const TextInput: React.FC = () => {
  const [user] = useUser();
  const [text, setText] = useState("");
  const textRef = useRef<string>("");
  const [sendMessage] = useMutation(SEND_MESSAGE);

  const onChangeHandle = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
      textRef.current = event.target.value;
    },
    [setText]
  );

  const onSubmitHandle = useCallback(() => {
    if (!user.initialized)
      console.error("Something wrong happened. No user context found.");

    if (user.initialized && textRef.current.length > 0) {
      sendMessage({
        variables: {
          message: textRef.current,
        },
      });
      textRef.current = "";
      setText("");
    }
  }, [user, setText, sendMessage]);

  const onKeyDownHandle = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.code === "Enter" && !event.shiftKey) {
        event.preventDefault();
        onSubmitHandle();
      }
    },
    [onSubmitHandle]
  );

  useEffect(() => {
    // TODO: Scroll to the bottom on first load
  }, []);

  return (
    <TextInputContainer>
      <Box sx={{ flexGrow: 0 }}>
        <label htmlFor="icon-button-file">
          <Input accept="image/*" id="icon-button-file" type="file" />
          <IconButton aria-label="upload file" component="span">
            <ControlPointIcon />
          </IconButton>
        </label>
        <label htmlFor="icon-button-image">
          <Input accept="image/*" id="icon-button-image" type="file" />
          <IconButton aria-label="upload image" component="span">
            <PermMediaIcon />
          </IconButton>
        </label>
        <IconButton aria-label="like">
          <PetsIcon />
        </IconButton>
        <IconButton aria-label="like">
          <GifIcon />
        </IconButton>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <CustomTextField
          id="filled-textarea"
          placeholder="Aa"
          multiline
          maxRows={4}
          variant="outlined"
          fullWidth
          size="small"
          onChange={onChangeHandle}
          onKeyDown={onKeyDownHandle}
          value={text}
        />
      </Box>
      <Box sx={{ flexGrow: 0 }}>
        {!!text ? (
          <IconButton aria-label="like" onClick={onSubmitHandle}>
            <SendIcon />
          </IconButton>
        ) : (
          <IconButton aria-label="like">
            <ThumbUpIcon />
          </IconButton>
        )}
      </Box>
    </TextInputContainer>
  );
};

export default TextInput;
