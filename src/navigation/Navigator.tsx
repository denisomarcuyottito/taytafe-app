import React, { useContext } from "react";

import { AuthContext } from "../context/AuthContext";
import { Login } from "../screens/Login";
import { StackNavigator } from "./StackNavigator";

const Navigator = () => {
  const {
    authState: { isLoggedIn },
  } = useContext(AuthContext);

  return <>{isLoggedIn ? <StackNavigator /> : <Login />}</>;
};

export { Navigator };
