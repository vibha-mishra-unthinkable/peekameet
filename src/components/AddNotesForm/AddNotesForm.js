import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../../assets/styles/AddNotesForm.scss";
import { saveNote } from "../../redux/actions";
import { Link } from "react-router-dom";
const AddNotesForm = () => {
  // const [noteInputs, setNoteInputs] = useState({
  //   date: null,
  //   time: null,
  //   note: "",
  // });
  const [dateInput, setDateInput] = useState(null);
  const [timeInput, setTimeInput] = useState(null);
  const [noteTextInput, setNoteTextInput] = useState("");
  const dispatch = useDispatch();
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setNoteInputs((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };
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
            onChange={(e) => setDateInput(e.target.value)}
          />
        </div>
        <div className="addNotesInputs">
          <label className="addNotesLabel">Time</label>
          <input
            type="time"
            className="inputTime"
            required
            onChange={(e) => setTimeInput(e.target.value)}
          />
        </div>
        <div className="addNotesInputTextarea">
          <label className="addNotesLabel">Notes</label>
          <input
            type="textarea"
            className="inputTextarea"
            required
            onChange={(e) => setNoteTextInput(e.target.value)}
          />
        </div>
        <div className="addNotesButtons">
          <button type="reset" className="cancelBtn">
            Cancel
          </button>
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
