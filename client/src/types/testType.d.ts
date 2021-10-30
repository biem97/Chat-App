export interface IUser {
  id: string;
  name: string;
  //   profilePictureURL: string;
}

export interface IMessage {
  id: string;
  content: string;
}

export interface IMessages {
  messages: IMessage[];
}

export interface IMessagesBlock {
  id: string; // Messages block id
  user: IUser;
  messages: IMessage[];
  isRead: boolean;
}
