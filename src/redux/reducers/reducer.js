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
};
// const initialState = { notes: JSON.parse(localStorage.getItem("redux") || []) };
const noteReducer = (state = intitialState, action) => {
  switch (action.type) {
    case "SAVE_NOTE":
      const { id, noteInputs } = action.payload;
      console.log(action.payload);

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
    default:
      return state;
  }
};
export default noteReducer;
