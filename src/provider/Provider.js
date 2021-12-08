import { useState } from "react";
import MyContext from "../redux/store/ContextStore";

const { Provider } = MyContext;

export const AppProvider = (props) => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [error, setError] = useState({ emailErr: "", passwordErr: "" });
  //   const state = { email: "", password: "" };
  return (
    <Provider value={{ userData, setUserData, error, setError }}>
      {props.children}
    </Provider>
  );
};
