import React from "react";
import { Link } from "react-router-dom";
import "./Logo.scss";
import { FaHome } from "react-icons/fa";
import {
  MdPeopleAlt,
  MdOutlineMessage,
  MdOutlineQrCodeScanner,
  MdOutlineSettingsSuggest,
  MdNotifications,
} from "react-icons/md";

const Header = () => {
  return (
    <div className="logoContainer">
      <div className="logoTextContainer">
        <span className="logoText">PEEKaMEET</span>
      </div>
      <div className="logoContainerMenu">
        <ul className="logoContainerLists">
          <li className="logoContainerList">
            <FaHome />
            Home
          </li>
          <li className="logoContainerList">
            <MdPeopleAlt />
            Contact
          </li>
          <li className="logoContainerList">
            <MdOutlineMessage />
            Messages
          </li>
          <li className="logoContainerList">
            <MdOutlineQrCodeScanner />
            Scan
          </li>
          <li className="logoContainerList">
            <MdOutlineSettingsSuggest />
            The Movement
          </li>
          <li className="logoContainerList">
            <MdNotifications />
            Notifications
          </li>
        </ul>
      </div>
      <div className="signinBtnDiv">
        <Link to="/">
          <button className="signinBtnDiv">Logout</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
