import { createContext, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
  const initState = {
    token: "",
    isAuth: false
  };
  const [authState, setAuthState] = useState(initState);

  const login = (token) => {
    setAuthState({
      token: token,
      isAuth: true
    });
    console.log(token);
  };
  const logout = () => {
    setAuthState(initState);
  };

const value = {authState,login,logout}

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
