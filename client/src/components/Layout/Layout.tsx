import React, { FC } from "react";

import { styled } from "@mui/material";

// Components
import Navbar from "../Navbar";

const MainLayoutRoot = styled("main")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  height: "100vh",
  width: "100vw",
  flexDirection: "column",
}));

const Layout: FC = ({ children }) => {
  return (
    <MainLayoutRoot>
      <Navbar />
      {children}
    </MainLayoutRoot>
  );
};

export default Layout;
