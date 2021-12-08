import React, { useContext, useRef, useState, useEffect } from "react";
import "../../assets/styles/SignInForm.scss";
import group18 from "../../assets/images/group-18.jpg";
import ButtonGrp from "../ButtonGrp/ButtonGrp";
import InputField from "../InputField/InputField";
import MyContext from "../../redux/store/ContextStore";
import { useDispatch } from "react-redux";
import { loginCall } from "../../redux/actions";
const regex = RegExp(/^((?=.*?[0-9])).{8,}$/);
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
  const email = useRef();
  const password = useRef();
  const user = useContext(MyContext);
  // const state = useContext(MyContext);
  const { userData, setUserData, error, setError } = user;

  // const dispatch = useDispatch();
  const validateEmail = (email) => {
    if (
      email &&
      email.includes("@") &&
      email.includes(".") &&
      email.slice(0, email.indexOf("@")).length > 3
    )
      return true;
    else return false;
  };
  const validatePassword = (password) => {
    if (regex.test(password)) return true;
    else return false;
  };
  useEffect(() => {
    setUserData({ email: "", password: "" });
    setError({ emailErr: "", passwordErr: "" });
    localStorage.clear();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    console.log("email", enteredEmail);
    console.log("password", enteredPassword);
    //checking error for email
    if (!validateEmail(enteredEmail)) {
      setError((prevState) => {
        return {
          ...prevState,
          emailErr: "Please enter valid email",
        };
      });
    }
    //checking error for password
    if (!validatePassword(enteredPassword)) {
      setError((prevState) => {
        return {
          ...prevState,
          passwordErr: "Please enter valid password",
        };
      });
    }
    console.log("error", error);
    //if no error exists,then update user data and set data to localstorage
    if (!error.emailErr.length && !error.passwordErr.length) {
      console.log("error email", error.emailErr);
      console.log("hello");
      setUserData((prevState) => {
        return {
          ...prevState,
          email: email.current.value,
          password: password.current.value,
        };
      });
      localStorage.setItem(
        "user",
        JSON.stringify({ email: enteredEmail, password: enteredPassword })
      );
      console.log(userData);
    }

    // const email = email.current.value;
    // const password = password.current.value;

    // dispatch(
    //   loginCall({
    //     email: email.current.value,
    //     password: password.current.value,
    //   })
    // );
    // loginCall({ email: email.current.value, password: password.current.value });
  };
  return (
    <>
      <div className="container signinFormContainer">
        <div className="leftSignInContainer">
          <img src={group18} alt="abc" />
        </div>
        <div className="rightSignInContainer">
          <div className="rightSignInHeading">
            <span>PEEKaMEET</span> lets you network more effectively to achieve
            your business and career goals
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
            <form onSubmit={submitHandler} noValidate>
              <label className="inputLabel">Email</label>
              <input
                type="email"
                className="inputField"
                ref={email}
                noValidate
              />
              {error.emailErr.length > 0 && (
                <span className="error">{error.emailErr}</span>
              )}
              <label className="inputLabel">Password</label>
              <input
                type="password"
                className="inputField"
                ref={password}
                noValidate
              />
              {error.passwordErr.length > 0 && (
                <span className="error">{error.passwordErr}</span>
              )}
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
