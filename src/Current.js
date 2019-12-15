import React from "react";
import { withStyles } from "@material-ui/styles";
import { Paper, TextField, Typography } from "@material-ui/core";
import useInputState from "./useInputState";

const styles = {};

function Current({ location, update }) {
  const [zip, zipChange, resetZip] = useInputState(location);
  const [country, countryChange, resetCountry] = useInputState("US");

  const formSubmission = e => {
    e.preventDefault();
    update(zip, country);
    resetCountry();
    resetZip();
  };
  return (
    <Paper
      style={{
        margin: "1rem 0",
        padding: "0 1rem",
        height: "50vh",
        marginRight: "2rem"
      }}
    >
      <Typography variant="h4" margin="normal" style={{ padding: "5px" }}>
        Location
      </Typography>
      <form onSubmit={formSubmission}>
        <TextField
          label="Zip Code"
          fullWidth
          margin="normal"
          required
          placeholder={location}
          value={zip}
          onChange={zipChange}
        />
        <TextField
          label="Country"
          fullWidth
          margin="normal"
          required
          placeholder={country}
          value={country}
          onChange={countryChange}
        />
        <button>Submit</button>
      </form>
      <Typography variant="h6">{location}</Typography>
    </Paper>
  );
}

export default withStyles(styles)(Current);
