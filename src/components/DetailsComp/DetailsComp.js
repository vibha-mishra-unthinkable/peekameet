import React from "react";
import openQuote from "../../assets/images/copy.png";
import closeQuote from "../../assets/images/invalid-name.png";
import "./DetailsComp.scss";
import ReadMore from "../ReadMore/ReadMore";
import ButtonGrp from "../ButtonGrp/ButtonGrp";
import { MdEmail, MdCall } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
const DetailsComp = () => {
  //data from localstorage
  const currentUser = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="detailsComp">
      <div className="detailsQuote">
        <img src={openQuote} alt="" className="quoteImg" />
        <span className="quoteText">{currentUser.tagline}</span>
        <img src={closeQuote} alt="" className="quoteImg" />
      </div>
      <ReadMore>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et eros
        sit amet sem viverra porttitor vel quis justo. Sed tempus, lorem
        suscipit vulputate mollis, mi dolor bibendum mi, non auctor nisi est nec
        nunc. More Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Fusce et eros sit amet sem viverra porttitor vel quis justo. Sed tempus,
        lorem suscipit vulputate mollis, mi dolor bibendum mi, non auctor nisi
        est nec nunc. More Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fusce et eros sit amet sem viverra porttitor vel quis justo. Sed
        tempus, lorem suscipit vulputate mollis, mi dolor bibendum mi, non
        auctor nisi est nec nunc. More Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Fusce et eros sit amet sem viverra porttitor vel quis
        justo. Sed tempus, lorem suscipit vulputate mollis, mi dolor bibendum
        mi, non auctor nisi est nec nunc. More Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Fusce et eros sit amet sem viverra
        porttitor vel quis justo. Sed tempus, lorem suscipit vulputate mollis,
        mi dolor bibendum mi, non auctor nisi est nec nunc.{/* </div> */}
      </ReadMore>
      <div className="userDetailsListDiv">
        <div className="userDetailsLists">
          Industry(s)
          <ul className="userDetailsListsUl">
            <li className="userDetailsList">
              <ButtonGrp
                btn={{
                  title: "Web Development",
                  bgColor: "rgba(241, 124, 43, 0.18)",
                  color: "#f17c2b",
                }}
              />
            </li>
            <li className="userDetailsList">
              <ButtonGrp
                btn={{
                  title: "Fine Arts",
                  bgColor: "rgba(241, 124, 43, 0.18)",
                  color: "#f17c2b",
                }}
              />
            </li>
          </ul>
        </div>
        <div className="userDetailsLists">
          Oragnization and groups
          <ul className="userDetailsListsUl">
            <li className="userDetailsList">
              <ButtonGrp
                btn={{
                  title: "IAW",
                  bgColor: "rgba(150, 54, 143, 0.18)",
                  color: "#96368f",
                }}
              />
            </li>
            <li className="userDetailsList">
              <ButtonGrp
                btn={{
                  title: "Denver Rugby",
                  bgColor: "rgba(150, 54, 143, 0.18)",
                  color: "#96368f",
                }}
              />
            </li>
          </ul>
        </div>
        <div className="userDetailsLists">
          Interets and Activities
          <ul className="userDetailsListsUl">
            <li className="userDetailsList">
              <ButtonGrp
                btn={{
                  title: "Hiking",
                  bgColor: "rgba(26, 150, 145, 0.18)",
                  color: "#1a9691",
                }}
              />
            </li>
            <li className="userDetailsList">
              <ButtonGrp
                btn={{
                  title: "Professional Speaking",
                  bgColor: "rgba(26, 150, 145, 0.18)",
                  color: "#1a9691",
                }}
              />
            </li>
            <li className="userDetailsList">
              <ButtonGrp
                btn={{
                  title: "Guitar",
                  bgColor: "rgba(26, 150, 145, 0.18)",
                  color: "#1a9691",
                }}
              />
            </li>
          </ul>
        </div>
        <div className="userDetailsLists">
          Alumini
          <ul className="userDetailsListsUl">
            <li className="userDetailsList">
              <ButtonGrp
                btn={{
                  title: "Spark Colorado",
                  bgColor: "rgba(230, 49, 131, 0.18)",
                  color: "#e63183",
                }}
              />
            </li>
            <li className="userDetailsList">
              <ButtonGrp
                btn={{
                  title: "UC Technology",
                  bgColor: "rgba(230, 49, 131, 0.18)",
                  color: "#e63183",
                }}
              />
            </li>
          </ul>
        </div>
        <div className="userDetailsLists">
          Languages
          <ul className="userDetailsListsUl">
            <li className="userDetailsList">
              <ButtonGrp
                btn={{
                  title: "English",
                  bgColor: "rgba(0, 128, 175, 0.17)",
                  color: "#0080af",
                }}
              />
            </li>
            <li className="userDetailsList">
              <ButtonGrp
                btn={{
                  title: "Spanish",
                  bgColor: "rgba(0, 128, 175, 0.17)",
                  color: "#0080af",
                }}
              />
            </li>
            <li className="userDetailsList">
              <ButtonGrp
                btn={{
                  title: "Hebrew",
                  bgColor: "rgba(0, 128, 175, 0.17)",
                  color: "#0080af",
                }}
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="userContactDetails">
        <span className="userContacts">
          <span className="userContactLogo">
            <MdEmail />
          </span>
          <span className="userContactText">
            bhagyashree.srivastava@daffodilsw.com
          </span>
        </span>
        <span className="userContacts">
          <span className="userContactLogo">
            <BsGlobe />
          </span>
          <span className="userContactText">www.google.com</span>
        </span>
        <span className="userContacts">
          <span className="userContactLogo">
            <MdCall />
          </span>
          <span className="userContactText">555 444 1234</span>
        </span>
        <span className="userContacts">
          <span className="userContactLogo">Business Address</span>
          <div>
            A Digital Agency
            <br />
            123 Sycamore Dr
            <br />
            Torrington CT, 06790
            <br />
          </div>
        </span>
      </div>
    </div>
  );
};

export default DetailsComp;
