import React from "react";
import userImg from "../../assets/images/userImg.jpg";
import "./UserInfo.scss";

import { BsShareFill, BsFillPencilFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const UserInfo = () => {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <div className="userInfoContainer">
        <div className="userInfoImages">
          <div className="userInfoBg"></div>
          <div className="userInfoImgContainer">
            <img src={userImg} alt="" className="userInfoImg" />
          </div>
        </div>
        <div className="userInfoDetails">
          <div className="userInfoName">Bhagya Shree</div>
          <div className="userInfoName">{currentUser.jobTitle}</div>
          <div className="userInfoName">{currentUser.company}</div>
        </div>
        <div className="shareEditContainer">
          <button className="shareEditBtn">
            <BsShareFill />
            Share
          </button>
          <button className="shareEditBtn">
            <BsFillPencilFill />
            Edit Profile
          </button>
        </div>
        <div className="detailsNotesContainer">
          <ul className="detailsNotesLists">
            <NavLink
              to="/home"
              className="detailsNotesList"
              activeclassname="active"
            >
              <li>Details</li>
            </NavLink>
            <NavLink
              to="/home/notes"
              className="detailsNotesList"
              activeclassname="active"
            >
              <li>Notes</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
