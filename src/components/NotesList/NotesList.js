import React, { useState } from "react";
import { useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import "../../assets/styles/NotesList.scss";
import MenuItems from "../MenuItems/MenuItems";
import ReadMore from "../ReadMore/ReadMore";
export const NotesList = () => {
  let notesList = useSelector((state) => {
    return state.noteReducer.notes;
  });
  let length = notesList.length;
  console.log(length);
  const initial = {
    items: notesList.slice(0, 2),
    hasMore: true,
    pageCount: 1,
  };
  const [state, setState] = useState(initial);

  const fetchData = () => {
    console.log("loading list: ", initial.items.length);
    console.log("note length: ", notesList.length);
    if (initial.items.length * state.pageCount === notesList.length) {
      setState((prevState) => ({
        ...prevState,
        hasMore: false,
      }));
      console.log(state.hasMore);
      return;
    }
    setTimeout(() => {
      setState((prevState) => ({
        ...prevState,
        items: state.items.concat(
          notesList.slice(state.pageCount * 2, state.pageCount * 2 + 2)
        ),
        pageCount: state.pageCount + 1,
      }));
    }, 500);
  };

  return (
    <div className="notesList">
      <InfiniteScroll
        dataLength={state.items.length}
        next={fetchData}
        hasMore={state.hasMore}
        loader={<h3>Loading...</h3>}
        endMessage={<h3>You have seen it all</h3>}
      >
        {state.items.map((note, noteArrId) => {
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
      </InfiniteScroll>
    </div>
  );
};
