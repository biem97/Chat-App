import React, { useCallback, useEffect, useRef, useState } from "react";
import { TextField } from "@mui/material";

// MUI
import { styled, Paper, IconButton } from "@mui/material";
import {
  ThumbUp as ThumbUpIcon,
  ControlPoint as ControlPointIcon,
  Gif as GifIcon,
  PermMedia as PermMediaIcon,
  Pets as PetsIcon,
  Send as SendIcon,
} from "@mui/icons-material";

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
  const [text, setText] = useState("");
  const textRef = useRef<HTMLInputElement>();

  const onChangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  const onSubmitHandle = useCallback(() => {
    console.log("Submitted text:", text);
    setText("");
  }, [setText]);

  const onEnterKeySubmitHandle = useCallback(
    (event: any) => {
      // Return if user presses the enter key
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        onSubmitHandle();
      }
    },
    [onSubmitHandle]
  );

  useEffect(() => {
    // TODO: Scroll to the bottom on first load
  }, []);

  useEffect(() => {
    console.log("called here");
    if (textRef.current) {
      textRef.current.addEventListener("keydown", onEnterKeySubmitHandle);
    }
  }, [onEnterKeySubmitHandle]);

  return (
    <TextInputContainer>
      <div style={{ flexGrow: 0 }}>
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
      </div>
      <div style={{ flexGrow: 1 }}>
        <CustomTextField
          inputRef={textRef}
          id="filled-textarea"
          placeholder="Aa"
          multiline
          maxRows={4}
          variant="outlined"
          fullWidth
          size="small"
          onChange={onChangeHandle}
          value={text}
        />
      </div>
      <div style={{ flexGrow: 0 }}>
        {!!text ? (
          <IconButton aria-label="like" onClick={onSubmitHandle}>
            <SendIcon />
          </IconButton>
        ) : (
          <IconButton aria-label="like" onClick={onSubmitHandle}>
            <ThumbUpIcon />
          </IconButton>
        )}
      </div>
    </TextInputContainer>
  );
};

export default TextInput;
