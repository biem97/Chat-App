import React, { useState } from "react";

// MUI
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Menu,
} from "@mui/material";
import {
  Phone as PhoneIcon,
  Videocam as VideocamIcon,
  MoreHoriz as MoreHorizIcon,
} from "@mui/icons-material";

// Components
import AvatarWithBadge from "../Avatar/AvatarWithBadge";
import { ThemeSwitch } from "../Switch";

// Hooks
import { useUser } from "../../hooks";

const Navbar = () => {
  const [user] = useUser();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      sx={{
        display: "flex",
      }}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem>
        <ThemeSwitch />
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <AvatarWithBadge user={user} />
          </IconButton>
          <Box>
            <Typography component="div" variant="h6">
              {user.name || "John Doe"}
            </Typography>
            <Typography variant="subtitle2" component="div">
              {user.name ? "Active now" : "Inactive"}
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex" }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <PhoneIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <VideocamIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <MoreHorizIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
};

export default Navbar;
