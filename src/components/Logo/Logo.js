import React, { useContext } from "react";
import "../../assets/styles/Logo.scss";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Logo = () => {
  const authCtx = useContext(AuthContext);

  return (
    <div className="logoContainer">
      <div className="logoTextContainer">
        <span className="logoText">PEEKaMEET</span>
      </div>
      <div className="signinBtnDiv">
        <Link to="/">
          <button className="signinBtnDiv">
            {authCtx.token ? "Logout" : "Sign In"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Logo;
