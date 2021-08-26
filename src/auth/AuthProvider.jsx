import { React, createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  const contextValue = {
    setAuthUser,
    authUser,
    login() {
      setAuthUser();
    },
    logout() {
      setAuthUser(null);
    },
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
