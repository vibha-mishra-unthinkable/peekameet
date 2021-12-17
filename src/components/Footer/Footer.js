import React from "react";
import "./Footer.scss";
import instagram from "../../assets/images/instagram-fill.jpg";
import youtube from "../../assets/images/youtube-fill.png";
import facebook from "../../assets/images/facebook-box-fill.png";
import twitter from "../../assets/images/twitter-fill.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="peekameetFooter">PEEKaMEET©2020</div>
      <div className="followUs">
        <ul className="followUsList" type="none">
          Follow Us:
          <li>
            <img src={instagram} alt="" className="logoImg" />
          </li>
          <li>
            <img src={youtube} alt="" className="logoImg" />
          </li>
          <li>
            <img src={facebook} alt="" className="logoImg" />
          </li>
          <li>
            <img src={twitter} alt="" className="logoImg" />
          </li>
        </ul>
      </div>
      <div className="terms">
        <ul className="termsList" type="none">
          <li>FAQs</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>About Us</li>
          <li>Press</li>
          <li>Contact us</li>
          <li>Perks</li>
          <li>Blog</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
