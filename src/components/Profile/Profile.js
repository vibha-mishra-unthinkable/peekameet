import React from "react";
import "../../assets/styles/Profile.scss";
import UserInfo from "../UserInfo/UserInfo";
import Header from "../Header/Header";

export const Profile = (props) => {
  let { children } = props;

  return (
    <>
      <Header />
      <div className="profileContainer">
        <UserInfo />
        {children}
      </div>
    </>
  );
};
