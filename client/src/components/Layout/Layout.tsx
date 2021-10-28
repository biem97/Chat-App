import React from "react";

import { styled } from "@mui/material";

const MainLayoutRoot = styled("main")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  height: "100vh",
  width: "100vw",
  flexDirection: "column",
}));

const Layout: React.FC = ({ children }) => {
  return <MainLayoutRoot>{children}</MainLayoutRoot>;
};

export default Layout;
