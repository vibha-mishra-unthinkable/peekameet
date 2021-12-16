import React, { useState } from "react";
import { useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import "../../assets/styles/NotesList.scss";
import MenuItems from "../MenuItems/MenuItems";
import ReadMore from "../ReadMore/ReadMore";
export const NotesList = () => {
  let [pageCount, setCount] = useState(1);

  let notesList = useSelector((state) => {
    return state.noteReducer.notes;
  });
  let currentList = notesList.slice(0, 10);
  const [currentNotesList, setCurrentNotesList] = useState(currentList);

  const fetchData = async () => {
    if (notesList.length > pageCount * 10) {
      let start = pageCount * 10;
      let end = start + 10;
      let newNotesList = notesList.slice(start, end);
      newNotesList.map((note) => currentList.push(note));

      const resp = await setCurrentNotesList(currentList);
      console.log(resp);
      return resp;
    } else return false;
  };
  const dataHandler = () => {
    let res = fetchData();
    console.log(currentNotesList);
    if (res && currentNotesList.length > pageCount * 10)
      setCount(pageCount + 1);
  };

  return (
    <InfiniteScroll
      dataLength={currentNotesList.length}
      next={dataHandler}
      hasMore={true}
      loader={<h1>Loading...</h1>}
    >
      <div className="notesList">
        {currentNotesList.map((note, noteArrId) => {
          return (
            <div className="note" key={note.id}>
              <div className="noteText">
                <ReadMore>{note.noteInputs.noteTextInput}</ReadMore>
                <div className="dateTime">
                  <span className="dateTimeText">{note.noteInputs.date}</span>
                  <span className="dateTimeText">{note.noteInputs.time}</span>
                </div>
              </div>
              <MenuItems note={note} noteArrId={noteArrId} />
            </div>
          );
        })}
      </div>
    </InfiniteScroll>
  );
};
