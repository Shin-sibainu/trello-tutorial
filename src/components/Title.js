import { InputBase, Typography } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import storeApi from "./Utils/storeApi";

const useStyle = makeStyles((theme) => ({
  editableTitleContainer: {
    margin: theme.spacing(1),
    display: "flex",
  },
  editableTitle: {
    flexGrow: 1,
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  input: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: theme.spacing(1),
    "&:focus": {
      background: "#ddd",
    },
  },
}));

export default function Title({ title, listId }) {
  const classes = useStyle();
  const [newTitle, setNewTitle] = useState(title);
  const [open, setOpen] = useState(false);
  const { updataListTitle } = useContext(storeApi);

  const handleOnChange = (event) => {
    setNewTitle(event.target.value);
  };

  const handleOnBulr = () => {
    updataListTitle(newTitle, listId);
    setOpen(false);
  };

  return (
    <div>
      {open ? (
        <div>
          <InputBase
            onChange={handleOnChange}
            autoFocus
            value={newTitle}
            inputProps={{
              className: classes.input,
            }}
            fullWidth
            onBlur={handleOnBulr}
          />
        </div>
      ) : (
        <div className={classes.editableTitleContainer}>
          <Typography
            onClick={() => {
              setOpen(!open);
            }}
            className={classes.editableTitle}
          >
            {title}
          </Typography>
          <FormatListBulletedIcon />
        </div>
      )}
    </div>
  );
}
