import { Button, IconButton, InputBase, Paper } from "@material-ui/core";
import React, { useContext } from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";
import { useState } from "react";
import storeApi from "../Utils/storeApi";
const useStyle = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(0, 1, 1, 1),
    paddingBottom: theme.spacing(4),
  },
  input: {
    margin: theme.spacing(1),
    //margin: theme.spacing(0, 0, 0, 1),
  },
  btnConfirm: {
    background: "#5AAC44",
    color: "#fff",
    "&:hover": {
      background: alpha("#5AAC44", 0.75),
    },
  },
  confirm: {
    margin: theme.spacing(0, 1, 1, 1),
  },
}));

export default function InputCard({ setOpen, listId, type }) {
  const classes = useStyle();
  const [title, setTitle] = useState("");
  const { addMoreCard, addMoreList } = useContext(storeApi);

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBtnConfirm = () => {
    if (type === "card") {
      addMoreCard(title, listId);
      setTitle("");
      setOpen(false);
    } else {
      addMoreList(title);
      setTitle("");
      setOpen(false);
    }
  };

  return (
    <div>
      <div>
        <Paper className={classes.card}>
          <InputBase
            onChange={handleOnChange}
            multiline
            fullWidth
            inputprop={{
              className: classes.input,
            }}
            placeholder={
              type === "card"
                ? "Enter a title of this card..."
                : "Enter list title"
            }
            onBlur={() => {
              setOpen(false);
            }}
            value={title}
          />
        </Paper>
      </div>
      <div className={classes.confirm}>
        <Button className={classes.btnConfirm} onClick={handleBtnConfirm}>
          {type === "card" ? "Add Card" : "Add List"}
        </Button>
        <IconButton onClick={() => setOpen(false)}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  );
}
