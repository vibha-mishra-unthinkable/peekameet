import React from "react";

import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useDispatch } from "react-redux";
import { deleteNote, editNote } from "../../redux/actions/index";
import { useNavigate } from "react-router-dom";

const options = ["View All", "Edit", "Delete"];

const MenuItems = (props) => {
  const note = props.note;
  console.log(note);
  console.log("id to be delted ", note.id);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const actionHandler = (option, note) => {
    console.log("actionHandler", option, note.id);
    if (option === "delete") dispatch(deleteNote(note.id));
    // else if (option === "edit") {
    //   navigate("/home/notes/addNotes");
    //   dispatch(editNote(note));
    // }
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
            <p onClick={() => actionHandler(option.toLowerCase(), note)}>
              {option}
            </p>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MenuItems;
