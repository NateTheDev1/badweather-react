import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";
import { Paper, TextField } from "@material-ui/core";

const styles = {};

function Current() {
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <TextField label="Zip Code" fullWidth margin="normal" />
    </Paper>
  );
}

export default withStyles(styles)(Current);
