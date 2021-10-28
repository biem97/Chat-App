import React from "react";
import { TextField } from "@mui/material";

// MUI
import { styled, Paper, IconButton } from "@mui/material";
import { IMessages } from "../../types";
import {
  ThumbUp as ThumbUpIcon,
  ControlPoint as ControlPointIcon,
  Gif as GifIcon,
  PermMedia as PermMediaIcon,
  Pets as PetsIcon,
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
  return (
    <TextInputContainer>
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
      <CustomTextField
        id="filled-textarea"
        placeholder="Aa"
        multiline
        maxRows={4}
        variant="outlined"
        fullWidth
        size="small"
      />
      <IconButton aria-label="like">
        <ThumbUpIcon />
      </IconButton>
    </TextInputContainer>
  );
};

export default TextInput;
