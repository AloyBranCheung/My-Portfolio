import React, { useState } from "react";
const defaultContext = {
  isLoggedIn: false,
  setLoginStatus: (arg: boolean) => {},
};

export const AuthContext = React.createContext(defaultContext);

type Props = {
  children: JSX.Element;
};

export default function AuthContextProvider({ children }: Props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const contextValue = {
    isLoggedIn: isLoggedIn,
    setLoginStatus: setIsLoggedIn,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
