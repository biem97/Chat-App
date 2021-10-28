// Layout
import Layout from "./Layout";

// Components
import MessagesContainer from "../containers/MessagesContainer";
import Navbar from "./Navbar";
import TextInput from "./TextInput";

// MUI
import { styled, Box } from "@mui/material";

const ChatBoxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
}));

const App: React.FC = () => {
  return (
    <Layout>
      <Navbar />
      <ChatBoxContainer>
        <MessagesContainer />
        <TextInput />
      </ChatBoxContainer>
    </Layout>
  );
};

export default App;
