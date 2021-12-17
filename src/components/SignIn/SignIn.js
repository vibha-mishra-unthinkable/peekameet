import React from "react";
import Logo from "../Logo/Logo";
import SignInForm from "../SignInForm/SignInForm";

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
