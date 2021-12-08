import React from "react";
import "../../assets/styles/ButtonGrp.scss";

const ButtonGrp = (props) => {
  const { title, bgColor, color } = props.btn;
  return (
    <>
      <button
        style={{ backgroundColor: bgColor, color: color }}
        className="buttonGrp"
      >
        {title}
      </button>
    </>
  );
};

export default ButtonGrp;
