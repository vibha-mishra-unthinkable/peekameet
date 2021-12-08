import React, { useRef } from "react";
import "../../assets/styles/InputField.scss";

const InputField = (props) => {
  const { type } = props.type;
  const inputRef = useRef();
  return (
    <>
      <input type={type} className="inputField" ref={inputRef} />
    </>
  );
};

export default InputField;
