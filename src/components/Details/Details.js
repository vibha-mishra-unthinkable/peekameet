import React from "react";
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
