import { Collapse, Paper, Typography } from "@material-ui/core";
import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import InputCard from "./InputCard";
import { useState } from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1),
    width: "300px",
  },
  addCard: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(0, 1, 1, 1),
    backgroundColor: "#ebecf0",
    "&:hover": {
      backgroundColor: alpha("#000", 0.25),
    },
  },
}));

export default function InputContainer({ listId, type }) {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <InputCard setOpen={setOpen} listId={listId} type={type} />
      </Collapse>
      <Collapse in={!open}>
        <Paper
          className={classes.addCard}
          elevation={0}
          onClick={() => setOpen(!open)}
        >
          <Typography>
            {type === "card" ? "+ Add a Card" : "+ Add another list"}
          </Typography>
        </Paper>
      </Collapse>
    </div>
  );
}
