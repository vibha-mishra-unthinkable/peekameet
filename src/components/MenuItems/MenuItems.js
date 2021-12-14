import React from "react";

import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useDispatch } from "react-redux";
import { deleteNote, editNote, editNoteText } from "../../redux/actions/index";
import { useNavigate } from "react-router-dom";

const options = ["View All", "Edit", "Delete"];

const MenuItems = (props) => {
  const note = props.note;
  const noteArrId = props.noteArrId;
  console.log(note);
  console.log(noteArrId);
  console.log("id to be delted ", note.id);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const actionHandler = (option, note, noteArrId) => {
    console.log("actionHandler", option, note.id);
    if (option === "delete") dispatch(deleteNote(note.id));
    else if (option === "edit") {
      console.log("edit true");
      navigate("/home/notes/updateNotes");
      // dispatch(editNote(note, noteArrId));
      dispatch(editNoteText(note, noteArrId));
    }
    setAnchorEl(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={handleClose}>
            <p
              onClick={() =>
                actionHandler(option.toLowerCase(), note, noteArrId)
              }
            >
              {option}
            </p>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MenuItems;
