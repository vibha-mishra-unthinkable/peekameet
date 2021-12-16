import React from "react";
import Logo from "../Logo/Logo";
import UserProfile from "../UserProfile/UserProfile";

const Layout = (props) => {
  let { children } = props;
  //here children is details or notes component
  return (
    <div>
      <Logo />
      <UserProfile />
      {children}
    </div>
  );
};

export default Layout;
