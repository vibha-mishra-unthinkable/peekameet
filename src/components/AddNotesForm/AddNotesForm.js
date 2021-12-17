import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./AddNotesForm.scss";
import { saveNote, editNote } from "../../redux/actions";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

const AddNotesForm = () => {
  const params = useParams();
  //taking noteslist from redux store
  let notesList = useSelector((state) => {
    return state.noteReducer.notes;
  });

  let initialNote = params.id
    ? notesList.find((note, id) => id === parseInt(params.id))
    : {
        id: "",
        noteInputs: { date: "", time: "", noteTextInput: "" },
      };

  //states for input fields of date,time,text
  const [dateInput, setDateInput] = useState(initialNote.noteInputs.date);
  const [timeInput, setTimeInput] = useState(initialNote.noteInputs.time);
  const [noteTextInput, setNoteTextInput] = useState(
    initialNote.noteInputs.noteTextInput
  );

  const dispatch = useDispatch();
  //action to be performed on saving note for the first time
  const submitHandler = () => {
    if (dateInput && timeInput && noteTextInput)
      dispatch(
        saveNote({
          date: dateInput,
          time: timeInput,
          noteTextInput: noteTextInput,
        })
      );
    else alert("Please fill all the fields");
  };
  //action to be performed on edit of a note.
  const editHandler = () => {
    dispatch(
      editNote(
        {
          id: initialNote.id,
          noteInputs: {
            date: dateInput,
            time: timeInput,
            noteTextInput: noteTextInput,
          },
        },
        params.id
      )
    );
  };
  return (
    <div className="addingNotes">
      <h1>Add Notes</h1>
      <form className="addNotesForm">
        <div className="addNotesInputs">
          <label className="addNotesLabel">Follow Up Date</label>
          <input
            name="dateInput"
            type="date"
            className="inputDate"
            required
            value={dateInput}
            onChange={(e) => setDateInput(e.target.value)}
          />
        </div>
        <div className="addNotesInputs">
          <label className="addNotesLabel">Time</label>
          <input
            type="time"
            name="timeInput"
            className="inputTime"
            required
            value={timeInput}
            onChange={(e) => setTimeInput(e.target.value)}
          />
        </div>
        <div className="addNotesInputTextarea">
          <label className="addNotesLabel">Notes</label>
          <input
            type="textarea"
            className="inputTextarea"
            required
            name="noteTextInput"
            value={noteTextInput}
            onChange={(e) => setNoteTextInput(e.target.value)}
          />
        </div>
        <div className="addNotesButtons">
          <Link to="/home/notes">
            <button type="reset" className="cancelBtn">
              Cancel
            </button>
          </Link>
          <Link to="/home/notes">
            <button
              type="submit"
              className="saveBtn"
              onClick={params.id ? editHandler : submitHandler}
            >
              {params.id ? "Update" : "Save"}
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddNotesForm;
