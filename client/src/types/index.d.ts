export interface IUser {
  id: string;
  name: string;
  initialized: boolean;
}
export interface IMessage {
  id: string;
  sender: IUser;
  message: string;
}

export type IMessages = IMessage[];
