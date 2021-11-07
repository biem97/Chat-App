import { useContext } from "react";

// Context
import { UserContext } from "../context/UserContext";

const useUser = () => {
  const context = useContext(UserContext);

  if (!context) throw new Error("Can't use user context outside the Provider");

  return context; // [user, updateUser]
};

export default useUser;
