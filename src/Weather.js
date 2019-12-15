import React, { Component } from "react";
import { Paper, Typography, Card } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = {};
class Weather extends Component {
  render() {
    return (
      <Paper
        style={{
          margin: "1rem 0",
          padding: "0 1rem",
          height: "75vh",
          marginRight: "2rem"
        }}
      >
        <Typography variant="h4" margin="normal" style={{ padding: "5px" }}>
          Today
        </Typography>
      </Paper>
    );
  }
}

export default withStyles(styles)(Weather);
