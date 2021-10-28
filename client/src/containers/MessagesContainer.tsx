import React from "react";
import Messages from "../components/Messages";
import { IMessage } from "../types";

const MessagesContainer: React.FC = () => {
  const messages: IMessage[] = [
    {
      id: "1",
      user: {
        id: "son-1",
        name: "Son Nguyen",
      },
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sem lorem, molestie vel lobortis et, mollis ac lacus. Nunc nibh ligula, tincidunt sed egestas ac, pellentesque tincidunt ligula.",
    },
    {
      id: "2",
      user: {
        id: "john-2",
        name: "John Doe",
      },
      content:
        "Pellentesque at eros vel mauris elementum pretium nec sit amet lacus. Donec sem dolor, accumsan vitae fringilla nec, vestibulum luctus risus.",
    },
    {
      id: "3",
      user: {
        id: "john-2",
        name: "John Doe",
      },
      content:
        "Nullam in mauris facilisis mauris ultricies vestibulum. Curabitur vel maximus urna. In placerat arcu eget condimentum egestas. Nunc tristique ex metus, ac dapibus sem egestas nec. Phasellus eleifend vulputate tortor, vitae pulvinar nibh tempus eu. Sed gravida nibh id orci pharetra, quis commodo leo blandit. Cras id sapien tellus. Nunc quis mi vestibulum, eleifend lorem in, vestibulum orci. Sed at erat interdum ante pretium bibendum at ornare nisi. Aenean pharetra lacinia facilisis. Duis congue vel augue non tempor. Nulla accumsan semper tortor, vestibulum efficitur purus sodales nec. Maecenas quis mattis enim. Curabitur porttitor, tortor non luctus porttitor, ex lacus elementum mi, nec malesuada leo lacus vitae est. Quisque efficitur nisi in tellus rutrum dapibus. Duis sed elementum quam. Sed vel dui ac tellus luctus semper. Phasellus id urna ligula. In hac habitasse platea dictumst. Curabitur volutpat elit a quam finibus, ut ullamcorper nibh tristique.",
    },
    {
      id: "4",
      user: {
        id: "son-1",
        name: "Son Nguyen",
      },
      content:
        "Donec tortor nulla, tincidunt non efficitur eu, rhoncus quis diam. Cras viverra vitae dui non egestas. Etiam justo magna, convallis non arcu vel, rhoncus mollis dolor.",
    },
    {
      id: "5",
      user: {
        id: "son-1",
        name: "Son Nguyen",
      },
      content:
        "In vulputate sapien cursus. Praesent dignissim arcu lectus, sit amet elementum ligula ornare sed. Maecenas aliquam risus massa, ac pretium erat lacinia quis.",
    },
    {
      id: "6",
      user: {
        id: "john-2",
        name: "John Doe",
      },
      content:
        "Suspendisse condimentum tincidunt sem, sit amet pulvinar nisi feugiat et. In hac habitasse platea dictumst. Phasellus quis erat scelerisque, molestie tellus ac, porta erat.",
    },
    {
      id: "7",
      user: {
        id: "son-1",
        name: "Son Nguyen",
      },
      content:
        "Quisque ullamcorper est varius ipsum ultricies ornare. Nam ac dui eu libero pharetra posuere sed sed urna.",
    },
    {
      id: "8",
      user: {
        id: "john-2",
        name: "John Doe",
      },
      content: "Quisque eget leo mollis massa eleifend iaculis. ",
    },
    {
      id: "9",
      user: {
        id: "son-1",
        name: "Son Nguyen",
      },
      content:
        "Nam porta, risus eget sagittis varius, lectus urna volutpat mi, id bibendum elit ipsum at ligula. Proin dictum cursus risus, in blandit velit. Integer feugiat bibendum diam eget consectetur. Nunc elit ante, condimentum quis tincidunt hendrerit, semper vel purus.",
    },
    {
      id: "10",
      user: {
        id: "john-2",
        name: "John Doe",
      },
      content:
        "Duis congue vel augue non tempor. Nulla accumsan semper tortor, vestibulum efficitur purus sodales nec.",
    },
    {
      id: "11",
      user: {
        id: "son-1",
        name: "Son Nguyen",
      },
      content:
        "Phasellus eleifend vulputate tortor, vitae pulvinar nibh tempus eu.",
    },
    {
      id: "12",
      user: {
        id: "john-2",
        name: "John Doe",
      },
      content:
        "Maecenas quis mattis enim. Curabitur porttitor, tortor non luctus porttitor, ex lacus elementum mi, nec malesuada leo lacus vitae est. Quisque efficitur nisi in tellus rutrum dapibus.",
    },
    {
      id: "13",
      user: {
        id: "son-1",
        name: "Son Nguyen",
      },
      content:
        "Phasellus eleifend vulputate tortor, vitae pulvinar nibh tempus eu.",
    },
    {
      id: "14",
      user: {
        id: "john-2",
        name: "John Doe",
      },
      content:
        "Maecenas quis mattis enim. Curabitur porttitor, tortor non luctus porttitor, ex lacus elementum mi, nec malesuada leo lacus vitae est. Quisque efficitur nisi in tellus rutrum dapibus.",
    },
    {
      id: "15",
      user: {
        id: "son-1",
        name: "Son Nguyen",
      },
      content:
        "Phasellus eleifend vulputate tortor, vitae pulvinar nibh tempus eu.",
    },
    {
      id: "16",
      user: {
        id: "john-2",
        name: "John Doe",
      },
      content:
        "Maecenas quis mattis enim. Curabitur porttitor, tortor non luctus porttitor, ex lacus elementum mi, nec malesuada leo lacus vitae est. Quisque efficitur nisi in tellus rutrum dapibus.",
    },
    {
      id: "17",
      user: {
        id: "son-1",
        name: "Son Nguyen",
      },
      content:
        "Phasellus eleifend vulputate tortor, vitae pulvinar nibh tempus eu.",
    },
    {
      id: "18",
      user: {
        id: "john-2",
        name: "John Doe",
      },
      content:
        "Maecenas quis mattis enim. Curabitur porttitor, tortor non luctus porttitor, ex lacus elementum mi, nec malesuada leo lacus vitae est. Quisque efficitur nisi in tellus rutrum dapibus.",
    },
    {
      id: "19",
      user: {
        id: "son-1",
        name: "Son Nguyen",
      },
      content:
        "Phasellus eleifend vulputate tortor, vitae pulvinar nibh tempus eu.",
    },
    {
      id: "20",
      user: {
        id: "john-2",
        name: "John Doe",
      },
      content:
        "Maecenas quis mattis enim. Curabitur porttitor, tortor non luctus porttitor, ex lacus elementum mi, nec malesuada leo lacus vitae est. Quisque efficitur nisi in tellus rutrum dapibus.",
    },
  ];

  return <Messages messages={messages} />;
};

export default MessagesContainer;
