export const saveNote = (noteInputs) => {
  return {
    type: "SAVE_NOTE",
    payload: {
      id: new Date().getTime().toString(),
      noteInputs: noteInputs,
    },
  };
};
export const cancelNote = () => {
  return {
    type: "CANCEL_NOTE",
  };
};
export const viewAllNote = () => {
  return {
    type: "VIEWALL_NOTE",
  };
};
export const editNote = (note) => {
  return {
    type: "EDIT_NOTE",
    payload: note,
  };
};
export const deleteNote = (id) => {
  return {
    type: "DELETE_NOTE",
    payload: id,
  };
};
// export const editNoteText = () => {
//   return {
//     type: "EDIT_NOTE_TEXT",
//   };
// };
