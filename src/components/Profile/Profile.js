import React from "react";
import "../../assets/styles/Profile.scss";
import UserInfo from "../UserInfo/UserInfo";
import Logo from "../Logo/Logo";

export const Profile = (props) => {
  let { children } = props;
  return (
    <>
      <Logo />
      <div className="profileContainer">
        <UserInfo />
        {children}
      </div>
    </>
  );
};
