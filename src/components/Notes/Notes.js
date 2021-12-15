import React from "react";
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
