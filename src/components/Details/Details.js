import React from "react";
import Layout from "../Layout/Layout";
import DetailsComp from "../DetailsComp/DetailsComp";
import { Profile } from "../Profile/Profile";

const Details = () => {
  return (
    <>
      <Profile children={<DetailsComp />} />
    </>
  );
};

export default Details;
