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

// Types
import { IUser } from "../types";

const ChatBoxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
}));

const App: React.FC = () => {
  const [user, setUser] = React.useState<IUser>({
    id: "",
    name: "",
    initialized: false,
  });

  return (
    <Layout>
      {!user.initialized && <UserInputForm setUser={setUser} />}
      <Navbar user={user} />
      <ChatBoxContainer>
        <MessagesContainer />
        <TextInput />
      </ChatBoxContainer>
    </Layout>
  );
};

export default App;
