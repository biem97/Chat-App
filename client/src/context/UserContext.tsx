import React, { createContext, useState } from "react";

import { IUser } from "../types";

// UUID
import { v4 as uuidv4 } from "uuid";
const uuid = uuidv4();

// interface IUserContext {
//   user: IUser;
//   updateUser: any;
// }

const UserContext = createContext<any>(null);

const UserProvider = (props: any) => {
  const initialUserContext: IUser = {
    id: uuid,
    name: "",
    initialized: false,
  };

  const [user, setUser] = useState<IUser>(initialUserContext);

  const updateUser = (user: IUser) => setUser({ ...user, id: uuid });

  return <UserContext.Provider value={[user, updateUser]} {...props} />;
};

export { UserContext, UserProvider, uuid };
