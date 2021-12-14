import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../../assets/styles/NotesList.scss";
import MenuItems from "../MenuItems/MenuItems";
import ReadMore from "../ReadMore/ReadMore";
export const NotesList = () => {
  const [displayNote, setDisplayNote] = useState(true);
  let notesList = useSelector((state) => {
    console.log(state);
    return state.noteReducer.notes;
  });
  console.log(notesList);

  return (
    <div className="notesList">
      {notesList.map((note, noteArrId) => {
        return (
          <div className="note" key={note.id}>
            <div className="noteText">
              <ReadMore>{note.noteInputs.noteText}</ReadMore>
              <div className="dateTime">
                <span>{note.noteInputs.date}</span>
                <span>{note.noteInputs.time}</span>
              </div>
            </div>
            <MenuItems note={note} noteArrId={noteArrId} />
          </div>
        );
      })}
    </div>
  );
};
