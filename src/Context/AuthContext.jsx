import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
  const initState = {
    token: "",
    isAuth: false
  };
  const [authState, setAuthState] = useState(initState);

  const [course, setCourse] = useState([]);

  useEffect(() => {
    setCourse(JSON.parse(localStorage.getItem("courses")));
  }, []);

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

const value = {authState,login,logout,course,setCourse}

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
