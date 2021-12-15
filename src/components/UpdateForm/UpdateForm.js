import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../assets/styles/AddNotesForm.scss";
import { editNote } from "../../redux/actions";
import { Link } from "react-router-dom";
const UpdateForm = () => {
  const editNoteText = useSelector((state) => state.noteReducer.editNoteText);
  console.log(editNoteText);
  const { note, noteArrId } = editNoteText;
  const [dateInput, setDateInput] = useState(note.noteInputs.date);
  const [timeInput, setTimeInput] = useState(note.noteInputs.time);
  const [noteTextInput, setNoteTextInput] = useState(note.noteInputs.noteText);
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
                  editNote(
                    {
                      id: note.id,
                      noteInputs: {
                        date: dateInput,
                        time: timeInput,
                        noteText: noteTextInput,
                      },
                    },
                    noteArrId
                  )
                )
              }
            >
              Update
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
