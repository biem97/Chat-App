import * as React from "react";

// Layout
import Layout from "./Layout";

// Components
import MessagesContainer from "../containers/MessagesContainer";
import Navbar from "./Navbar";
import TextInput from "./TextInput";

// MUI
import { styled, Box } from "@mui/material";

// UUID
import UserInputForm from "./UserInputForm";

// Providers
import { UserProvider } from "../context";

const ChatBoxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
}));

const App: React.FC = () => {
  return (
    <Layout>
      <UserProvider>
        <UserInputForm />
        <Navbar />
        <ChatBoxContainer>
          <MessagesContainer />
          <TextInput />
        </ChatBoxContainer>
      </UserProvider>
    </Layout>
  );
};

export default App;
