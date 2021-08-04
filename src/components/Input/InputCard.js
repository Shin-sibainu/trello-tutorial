import { Button, IconButton, InputBase, Paper } from "@material-ui/core";
import React from "react";
import ClearIcon from "@material-ui/icons/Clear";

export default function InputCard() {
  return (
    <div>
      <div>
        <Paper>
          <InputBase multiline fullWidth />
        </Paper>
      </div>
      <div>
        <Button>Add Card</Button>
        <IconButton>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  );
}
