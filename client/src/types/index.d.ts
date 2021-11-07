export interface IUser {
  id: string;
  name: string;
  initialized: boolean;
}
export interface IMessage {
  id: string;
  sender: IUser;
  receiver: IUser;
  message: string;
  seen: boolean;
}

export type IMessages = IMessage[];
