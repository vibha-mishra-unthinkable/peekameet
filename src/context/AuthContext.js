import React, { useState } from "react";

import { createContext } from "react";

const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  userData: {},
  login: (token) => {},
  logout: () => {},
  getData: (userData) => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState({});

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token", null);
  };
  const setDataHandler = (userInfo) => {
    setUserData(userInfo);
    console.log(userInfo);
    localStorage.setItem("user", JSON.stringify(userInfo));
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    userData: userData,
    login: loginHandler,
    logout: logoutHandler,
    getData: setDataHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
