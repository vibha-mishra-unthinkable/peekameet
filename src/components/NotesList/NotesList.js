import React, { useState } from "react";
import { useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import "./NotesList.scss";
import MenuItems from "../MenuItems/MenuItems";
import ReadMore from "../ReadMore/ReadMore";
export const NotesList = () => {
  let notesList = useSelector((state) => {
    return state.noteReducer.notes;
  });

  const initial = {
    items: notesList.slice(0, 2),
    hasMore: true,
    pageCount: 1,
  };
  const [state, setState] = useState(initial);

  const fetchData = () => {
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
              {/* <div className="noteText"> */}
              {/* <div className="threedots"> */}

              {/* </div> */}
              <ReadMore>{note.noteInputs.noteTextInput}</ReadMore>
              <MenuItems note={note} noteArrId={noteArrId} />
              <div className="text-muted dateTime">
                <span>{note.noteInputs.date}</span>
                <span>{note.noteInputs.time}</span>
              </div>

              {/* </div> */}
            </div>
          );
        })}
      </InfiniteScroll>
    </div>
  );
};
