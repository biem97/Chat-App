import React from "react";

// Material UI
import { Avatar as MUIAvatar, AvatarProps } from "@mui/material";

const Avatar = ({ ...props }: AvatarProps) => {
  return (
    <MUIAvatar
      alt="Remy Sharp"
      src="https://mui.com/static/images/avatar/1.jpg"
      {...props}
    />
  );
};

export default Avatar;
