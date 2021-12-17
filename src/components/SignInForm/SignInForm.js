import React, { useContext, useState, useEffect } from "react";
import "./SignInForm.scss";
import group18 from "../../assets/images/group-18.jpg";
import ButtonGrp from "../ButtonGrp/ButtonGrp";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import AuthContext from "../../context/AuthContext";

//buttons on signin page
const buttonInfo = [
  {
    title: "Freelancer",
    bgColor: "rgba(241, 124, 43, 0.18)",
    color: "#f17c2b",
  },
  {
    title: "Job Seeker",
    bgColor: "rgba(150, 54, 143, 0.18)",
    color: "#96368f",
  },
  {
    title: "Enterpreneur",
    bgColor: "rgba(26, 150, 145, 0.18)",
    color: "#1a9691",
  },
  {
    title: "Mompreneur",
    bgColor: "rgba(230, 49, 131, 0.18)",
    color: "#e63183",
  },
  {
    title: "Internship Seeker",
    bgColor: "rgba(0, 128, 175, 0.17)",
    color: "#0080af",
  },
  {
    title: "Environmental Change Maker",
    bgColor: "rgba(231, 33, 44, 0.18)",
    color: "#e7212c",
  },
];

const SignInForm = () => {
  const [userEmail, setUserName] = useState("");
  const [userPassword, setPassword] = useState("");
  const [emailerr, setEmailError] = useState({});
  const [pwderr, setPasswordError] = useState({});
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.clear();
  }, []);

  //on submitting signin form
  const loginHandler = async (event) => {
    event.preventDefault();
    //checking if email field is not blank
    if (userEmail.trim().length === 0) {
      setEmailError({
        title: "Invalid Input",
        msg: "Please enter valid email(non-empty value.)",
      });
      return;
    }
    //checking if email includes @ and .
    if (!userEmail.includes("@") && !userEmail.includes(".")) {
      setEmailError({
        title: "Invalid Input",
        msg: "Please enter valid email('@' is missing or '.' is missing)",
      });
    }
    //checking if password input is not blank
    if (userPassword.trim().length === 0) {
      setPasswordError({
        title: "Invalid Input",
        msg: "password (non-empty value.)",
      });
      return;
    }
    //checking if password has minimum length of 8 characters
    if (userPassword.trim().length < 8) {
      setPasswordError({
        title: "Invalid Password",
        msg: "Password must be of 8 charcaters!",
      });
      return;
    }
    //checking if password conatins atleast one number
    const check = userPassword.match(/\d+/g);
    if (check === null) {
      setPasswordError({
        title: "Invalid Password",
        msg: "Password must contain a number!",
      });
      return;
    }

    const res = await checkLogin();
    //if email is valid then set token and login details
    if (res === true) {
      const resData = await axios.get(
        "http://localhost:3000/api/mocks/userLogin.json"
      );
      authCtx.login(resData.data.data[0].token);
      authCtx.getData(resData.data.data[0].customer);
      navigate("/home");
    }
  };
  //checking if email is "bhagyashree.srivastava@daffodilsw.com"
  const checkLogin = async () => {
    const email = "bhagyashree.srivastava@daffodilsw.com";
    try {
      if (email === userEmail) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      alert("Invalid api call");
    }
  };
  return (
    <>
      <div className="container signinFormContainer">
        <div className="leftSignInContainer">
          <img src={group18} alt="abc" className="signinImg" />
        </div>
        <div className="rightSignInContainer">
          <div className="rightSignInHeading">
            <span className="peekameetHead">PEEKaMEET</span> lets you network
            more effectively to achieve your business and career goals
          </div>
          <div className="btnGroup">
            {buttonInfo.map((btn) => (
              <ButtonGrp btn={btn} key={btn.title} />
            ))}
          </div>
          <div className="buildText">
            Build and manage your network with PEEKaMEET
          </div>

          <div className="formDiv">
            <form onSubmit={loginHandler} noValidate>
              <label className="inputLabel">Email</label>
              <input
                type="email"
                className="inputField"
                onChange={(e) => setUserName(e.target.value)}
              />

              <span className="error">{emailerr && emailerr.msg}</span>

              <label className="inputLabel">Password</label>
              <input
                type="password"
                className="inputField"
                onChange={(e) => setPassword(e.target.value)}
              />

              <span className="error">{pwderr && pwderr.msg}</span>

              <button type="submit" className="signinBtn">
                Sign In
              </button>
            </form>
          </div>

          <div className="rememberForgot">
            <div className="remember">
              <input type="checkbox" className="checkboxInput" />
              <label>Remember me</label>
            </div>
            <div className="forgotPassword">Forgot Password?</div>
          </div>
          <div className="dontHaveAccount">
            Don’t have an account?<span className="signUp">Sign up?</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInForm;
