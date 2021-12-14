import ActionEject from "material-ui/svg-icons/action/eject";

const intitialState = {
  notes: [
    // {
    //   id: 1,
    //   noteInputs: {
    //     date: "2020-03-03",
    //     time: "6:30",
    //     noteText:
    //       "Lorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet, consectetur adipiscingLorem ipsum dolor sit amet",
    //   },
    // },
    // {
    //   id: 2,
    //   noteInputs: {
    //     date: "2020-04-04",
    //     time: "7:30",
    //     noteText: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    //   },
    // },
  ],
  editNoteText: {
    date: "",
    time: "",
    noteText: "",
  },
};
// const initialState = { notes: JSON.parse(localStorage.getItem("redux") || []) };
const noteReducer = (state = intitialState, action) => {
  switch (action.type) {
    case "SAVE_NOTE":
      const { id, noteInputs } = action.payload;
      // const { editNoteId, editNoteInputs } = action.payload.editText;
      // console.log(action.payload);
      // if (noteId === editNoteId) {
      //   state.notes.map((note) => {
      //     if (note.id === editNoteId)
      //       return (note.noteInputs.noteText = editNoteInputs);
      //   });
      // }
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            id: id,
            noteInputs: noteInputs,
          },
        ],
      };
    case "DELETE_NOTE":
      console.log("state.notes  ", state.notes);
      console.log("action.payload  ", action.payload);
      // console.log(
      //   "after fiter:  ",
      //   state.notes.filter((elem) => {
      //     console.log(
      //       elem.id.toString() !== action.payload.id.toString() && elem
      //     );
      //     return elem.id !== action.payload.id;
      //   })
      // );
      const newNotes = state.notes.filter((elem) => elem.id !== action.payload);
      console.log(newNotes);
      return {
        ...state,
        notes: newNotes,
      };
    case "EDIT_NOTE":
      const { note, noteArrId } = action.payload;
      console.log("note", note);
      console.log("noteArrId", noteArrId);
      console.log(state.notes);
      const newEditNotes = state.notes;

      newEditNotes[noteArrId] = note;
      console.log(newEditNotes);
      return { notes: newEditNotes };
    case "EDIT_NOTE_TEXT":
      console.log(action.payload);
      return {
        ...state,
        editNoteText: action.payload,
      };
    default:
      return state;
  }
};
export default noteReducer;
