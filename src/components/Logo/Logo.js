import React from "react";
import "./Logo.scss";

const Logo = () => {
  return (
    <div className="logoContainer">
      <div className="logoTextContainer">
        <span className="logoText">PEEKaMEET</span>
      </div>
      <div className="signinBtnDiv">
        <button className="signinBtnDiv">Sign In</button>
      </div>
    </div>
  );
};

export default Logo;
