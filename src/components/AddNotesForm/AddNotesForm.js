import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../assets/styles/AddNotesForm.scss";
import { saveNote } from "../../redux/actions";
import { Link } from "react-router-dom";
const AddNotesForm = () => {
  const editText = useSelector((state) => state.noteReducer.editNoteText);
  console.log(editText);
  const [dateInput, setDateInput] = useState("");
  const [timeInput, setTimeInput] = useState("");
  const [noteTextInput, setNoteTextInput] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="addingNotes">
      <h1>Add Notes</h1>
      <form className="addNotesForm">
        <div className="addNotesInputs">
          <label className="addNotesLabel">Follow Up Date</label>
          <input
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
              onClick={() =>
                dispatch(
                  saveNote({
                    date: dateInput,
                    time: timeInput,
                    noteText: noteTextInput,
                  })
                )
              }
            >
              Save
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddNotesForm;
