const intitialState = {
  notes: [],
  editNoteText: {
    date: "",
    time: "",
    noteText: "",
  },
};
const noteReducer = (state = intitialState, action) => {
  switch (action.type) {
    case "SAVE_NOTE":
      const { id, noteInputs } = action.payload;

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
      const newNotes = state.notes.filter((elem) => elem.id !== action.payload);

      return {
        ...state,
        notes: newNotes,
      };
    case "EDIT_NOTE":
      const { note, noteArrId } = action.payload;

      const newEditNotes = state.notes;

      newEditNotes[noteArrId] = note;

      return { notes: newEditNotes };
    case "EDIT_NOTE_TEXT":
      return {
        ...state,
        editNoteText: action.payload,
      };
    default:
      return state;
  }
};
export default noteReducer;
