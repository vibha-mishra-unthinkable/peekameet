import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../../assets/styles/NotesList.scss";
import MenuItems from "../MenuItems/MenuItems";
export const NotesList = () => {
  const [displayNote, setDisplayNote] = useState(true);
  let notesList = useSelector((state) => {
    console.log(state);
    return state.noteReducer.notes;
  });
  const showNote = (id, noteArrId) => {
    if (id) setDisplayNote(!displayNote);
  };
  const notesTextToShow = (noteText) => {
    if (noteText.length > 300) return noteText.substring(0, 300) + "...";
    return noteText;
  };

  return (
    <div className="notesList">
      {notesList.map((note, noteArrId) => {
        return (
          <div className="note" key={note.id} noteArrId={noteArrId}>
            <div
              className="noteText"
              onClick={() => showNote(note.id, noteArrId)}
            >
              {displayNote
                ? notesTextToShow(note.noteInputs.noteText)
                : note.noteInputs.noteText}
              <div className="dateTime">
                <span>{note.noteInputs.date}</span>
                <span>{note.noteInputs.time}</span>
              </div>
            </div>
            <MenuItems id={note.id} />
          </div>
        );
      })}
    </div>
  );
};
