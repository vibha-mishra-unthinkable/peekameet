import React from "react";
import { BsFillPencilFill } from "react-icons/bs";
import "../../assets/styles/NotesComp.scss";
import { Link } from "react-router-dom";
import { NotesList } from "../NotesList/NotesList";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
const NotesComp = () => {
  return (
    <div className="notesComp">
      <Link to="/home/notes/addnotes" className="addNotesLink">
        <div className="addNotes">
          <BsFillPencilFill />
          Add Notes
        </div>
      </Link>
      <NotesList />
    </div>
  );
};

export default NotesComp;
