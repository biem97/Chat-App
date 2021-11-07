import React, { createContext, useState } from "react";

import { IUser } from "../types";

const UserContext = createContext<IUser | null>(null);

const UserProvider = (props: any) => {
  const initialUserContext: IUser = {
    id: "",
    name: "",
    initialized: false,
  };

  const [user, setUser] = useState<IUser>(initialUserContext);

  const updateUser = (user: IUser) => setUser(user);

  return <UserContext.Provider value={[user, updateUser]} {...props} />;
};

export { UserContext, UserProvider };
