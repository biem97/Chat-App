import React from "react";
import Messages from "../components/Messages";
import { IMessagesBlocks } from "../types";

// MUI
import { styled, Box } from "@mui/material";

const MessagesBlocksContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  flexBasis: 0,
  overflowX: "hidden",
  overflowY: "auto",
}));

const MessagesContainer: React.FC = () => {
  const messagesBlocks: IMessagesBlocks = [
    {
      id: "msg-1",
      user: {
        id: "son-1",
        name: "Son Nguyen",
      },
      messages: [
        {
          id: "msg-1-1",
          content: "Hello John",
        },
      ],
      isRead: true,
    },
    {
      id: "msg-2",
      user: {
        id: "john-2",
        name: "John Doe",
      },
      messages: [
        {
          id: "msg-2-1",
          content: "Hi Son",
        },
        {
          id: "msg-2-2",
          content: "How are you?",
        },
      ],
      isRead: true,
    },
    {
      id: "msg-3",
      user: {
        id: "son-1",
        name: "Son Nguyen",
      },
      messages: [
        {
          id: "msg-3-1",
          content: "I'm good. Thank you",
        },
        {
          id: "msg-3-2",
          content: "How about you?",
        },
        {
          id: "msg-3-3",
          content: "It's been awhile",
        },
        {
          id: "msg-3-4",
          content: "Are you still in school?",
        },
      ],
      isRead: true,
    },
    {
      id: "msg-4",
      user: {
        id: "john-2",
        name: "John Doe",
      },
      messages: [
        {
          id: "msg-4-1",
          content: "Haha yeah",
        },
        {
          id: "msg-4-2",
          content: "I still have one more year",
        },
      ],
      isRead: true,
    },
    {
      id: "msg-5",
      user: {
        id: "son-1",
        name: "Son Nguyen",
      },
      messages: [
        {
          id: "msg-5-1",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          id: "msg-5-2",
          content:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        },
      ],
      isRead: true,
    },
    {
      id: "msg-6",
      user: {
        id: "john-2",
        name: "John Doe",
      },
      messages: [
        {
          id: "msg-6-1",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          id: "msg-6-2",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elementum orci nec fermentum dictum. Pellentesque rutrum at sapien vitae accumsan. Duis odio libero, facilisis vel placerat vitae, molestie sed nisl. Phasellus elementum ligula a eros maximus, sed cursus orci pretium. Nullam eget nibh facilisis, vulputate mauris id, feugiat sapien. Integer pharetra malesuada magna, in auctor elit tincidunt in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce a fringilla odio. Aenean elit libero, cursus ut posuere et, pretium ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elementum orci nec fermentum dictum. Pellentesque rutrum at sapien vitae accumsan. Duis odio libero, facilisis vel placerat vitae, molestie sed nisl. Phasellus elementum ligula a eros maximus, sed cursus orci pretium. Nullam eget nibh facilisis, vulputate mauris id, feugiat sapien. Integer pharetra malesuada magna, in auctor elit tincidunt in. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce a fringilla odio. Aenean elit libero, cursus ut posuere et, pretium ac lectus.",
        },
        {
          id: "msg-6-3",
          content: "Hello.",
        },
        {
          id: "msg-6-4",
          content:
            "Suspendisse potenti. Sed varius laoreet nisi, vitae dictum arcu vehicula quis. Aliquam ornare congue metus, id tincidunt diam pharetra nec. Nunc eros nunc, faucibus a congue ullamcorper, ornare in justo. Donec consectetur libero nec imperdiet dictum. Maecenas ut porttitor libero. Donec vel congue mauris. Donec tellus orci, tincidunt id ex et, tempor tempor ex. Aliquam dignissim, dolor vitae posuere condimentum, elit velit mattis sem, a convallis dui lacus eget quam. Sed eu eros mollis, consequat leo quis, gravida turpis. Cras a malesuada lectus. Mauris vel leo vitae enim tincidunt imperdiet. Donec quis tellus arcu.. Suspendisse potenti. Sed varius laoreet nisi, vitae dictum arcu vehicula quis. Aliquam ornare congue metus, id tincidunt diam pharetra nec. Nunc eros nunc, faucibus a congue ullamcorper, ornare in justo. Donec consectetur libero nec imperdiet dictum. Maecenas ut porttitor libero. Donec vel congue mauris. Donec tellus orci, tincidunt id ex et, tempor tempor ex. Aliquam dignissim, dolor vitae posuere condimentum, elit velit mattis sem, a convallis dui lacus eget quam. Sed eu eros mollis, consequat leo quis, gravida turpis. Cras a malesuada lectus. Mauris vel leo vitae enim tincidunt imperdiet. Donec quis tellus arcu. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        },
      ],
      isRead: true,
    },
  ];

  return (
    <MessagesBlocksContainer>
      {messagesBlocks.map((messagesBlock) => (
        <Messages messagesBlock={messagesBlock} key={messagesBlock.id} />
      ))}
    </MessagesBlocksContainer>
  );
};

export default MessagesContainer;
