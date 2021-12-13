import React, { useState } from "react";
import "../../assets/styles/ReadMore.scss";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 300) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "More" : " Less"}
      </span>
    </p>
  );
};

export default ReadMore;
