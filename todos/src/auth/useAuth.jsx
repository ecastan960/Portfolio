import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

function useAuth() {
  const contextValue = useContext(AuthContext);
  return contextValue;
}

export default useAuth;
