import React from "react";
import { useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import "../../assets/styles/NotesList.scss";
import MenuItems from "../MenuItems/MenuItems";
import ReadMore from "../ReadMore/ReadMore";
export const NotesList = () => {
  let [pageCount, setCount] = React.useState(1);
  let notesList = useSelector((state) => {
    console.log(state);
    return state.noteReducer.notes;
  });
  const fetchData = () => {
    const newNotesList = notesList.slice(0, pageCount * 10);
    setCount(pageCount + 1);
    return newNotesList;
  };

  return (
    <InfiniteScroll
      dataLength="10"
      next={fetchData}
      hasMore={notesList.length !== 10}
      loader={<h1>Loading...</h1>}
    >
      <div className="notesList">
        {notesList.map((note, noteArrId) => {
          return (
            <div className="note" key={note.id}>
              <div className="noteText">
                <ReadMore>{note.noteInputs.noteText}</ReadMore>
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
