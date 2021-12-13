import React from "react";
import "../../assets/styles/Profile.scss";
import UserInfo from "../UserInfo/UserInfo";
import DetailsNotes from "../DetailsNotes/DetailsNotes";
import Logo from "../Logo/Logo";

export const Profile = (props) => {
  let { children } = props;
  return (
    <>
      <Logo />
      <div className="profileContainer">
        {/* <Logo /> */}
        <UserInfo />
        {children}
        {/* <DetailsNotes /> */}
      </div>
    </>
  );
};
