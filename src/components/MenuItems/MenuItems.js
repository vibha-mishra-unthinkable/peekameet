import React from "react";

import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useDispatch } from "react-redux";

const options = [
  { title: "View All", action: "viewAllNote" },
  { title: "Edit", action: "editNote" },
  { title: "Delete", action: "deleteNote" },
];

const MenuItems = (props) => {
  const id = props;
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
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
          <MenuItem key={option.title} onClick={handleClose}>
            {option.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MenuItems;
