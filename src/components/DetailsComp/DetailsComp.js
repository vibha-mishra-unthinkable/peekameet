import React, { useEffect, useContext } from "react";
import openQuote from "../../assets/images/copy.png";
import closeQuote from "../../assets/images/invalid-name.png";
import "../../assets/styles/DetailsComp.scss";
import axios from "axios";
import { getSuggestedQuery } from "@testing-library/dom";
import AuthContext from "../../context/AuthContext";
import ReadMore from "../ReadMore/ReadMore";
import ButtonGrp from "../ButtonGrp/ButtonGrp";
const DetailsComp = () => {
  // const getUser = async () => {
  //   const res = await axios
  //     .get("http://localhost:3000/api/mocks/userLogin.json")
  //     .then((resp) => resp.data)
  //     .catch((err) => console.log(err));
  //   console.log(res.data[0].customer);
  // };
  // useEffect(() => {
  //   getUser();
  //   //
  // }, []);
  // const {firstname,lastname}
  const authCtx = useContext(AuthContext);
  console.log(authCtx.userData);
  const userData = authCtx.userData;
  console.log(userData.tagline);
  return (
    <div className="detailsComp">
      <div className="detailsQuote">
        <img src={openQuote} alt="" className="quoteImg" />
        <span className="quoteText">{userData.tagline}</span>
        <img src={closeQuote} alt="" className="quoteImg" />
      </div>
      <ReadMore>
        {/* <div className="detailsInto"> */}
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
        mi dolor bibendum mi, non auctor nisi est nec nunc. More v{/* </div> */}
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
    </div>
  );
};

export default DetailsComp;
