import React from "react";
import { BsFillPencilFill } from "react-icons/bs";
import "./NotesComp.scss";
import { Link } from "react-router-dom";
import { NotesList } from "../NotesList/NotesList";
import { useSelector } from "react-redux";
const NotesComp = () => {
  let notesList = useSelector((state) => {
    return state.noteReducer.notes;
  });
  return (
    <div className="notesComp">
      <Link to="/home/notes/addnotes" className="addNotesLink">
        <div className="addNotes">
          <BsFillPencilFill />
          Add Notes
        </div>
      </Link>
      {notesList.length > 0 ? <NotesList /> : <h1>No Notes Available</h1>}
    </div>
  );
};

export default NotesComp;
