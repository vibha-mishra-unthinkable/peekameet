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
export const editNote = () => {
  return {
    type: "EDIT_NOTE",
  };
};
export const deleteNote = (id) => {
  return {
    type: "DELETE_NOTE",
    payload: id,
  };
};
