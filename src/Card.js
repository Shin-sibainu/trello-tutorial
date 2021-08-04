import { Paper } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CallMissedSharp } from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),
  },
}));

export default function Card() {
  const classes = useStyle();
  return (
    <div>
      <Paper className={classes.card}>Making youtube video</Paper>
    </div>
  );
}