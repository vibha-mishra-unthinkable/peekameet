import React, { useState } from "react";
import "./ReadMore.scss";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text" onClick={toggleReadMore}>
      {isReadMore ? text.slice(0, 300) : text}
      <span className="read-or-hide">
        {isReadMore ? (text.length > 300 ? "More" : "") : "Less"}
      </span>
    </p>
  );
};

export default ReadMore;
