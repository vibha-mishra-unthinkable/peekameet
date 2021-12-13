import React from "react";
import Layout from "../Layout/Layout";
import NotesComp from "../NotesComp/NotesComp";
import { Profile } from "../Profile/Profile";

const Notes = () => {
  return (
    <>
      <Profile children={<NotesComp />} />
    </>
  );
};

export default Notes;
