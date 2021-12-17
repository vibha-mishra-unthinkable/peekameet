import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useDispatch } from "react-redux";
import { deleteNote, editNoteText } from "../../redux/actions/index";
import { useNavigate } from "react-router-dom";
import "./MenuItems.scss";

const options = ["View All", "Edit", "Delete"];

const MenuItems = (props) => {
  const note = props.note;
  const noteArrId = props.noteArrId;
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  //action to be performed on clicking in menu-  edit or delete
  const actionHandler = (option, note, noteArrId) => {
    if (option === "delete") dispatch(deleteNote(note.id));
    else if (option === "edit") {
      navigate(`/home/notes/editnotes/${noteArrId}`);
      dispatch(editNoteText(note, noteArrId));
    }
    setAnchorEl(null);
  };
  //for closing open menu component
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="menuItems">
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
