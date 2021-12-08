import React from "react";
import Logo from "../Logo/Logo";
import SignInForm from "../SignInForm/SignInForm";
import Footer from "../Footer/Footer";

const SignIn = () => {
  return (
    <>
      <div className="signinContainer">
        <Logo />
        <SignInForm />
      </div>
    </>
  );
};

export default SignIn;
