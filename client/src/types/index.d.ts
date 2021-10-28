export interface IUser {
  id: string;
  name: string;
}

export interface IMessage {
  id: string;
  user: IUser;
  content: string;
}

export interface IMessages {
  messages: IMessage[];
}
