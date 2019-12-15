import React from "react";
import { withStyles } from "@material-ui/styles";
import { Paper, TextField, Typography } from "@material-ui/core";
import useInputState from "./useInputState";

const styles = {};

function Current({ location, update }) {
  const [zip, zipChange, resetZip] = useInputState(location);
  const [country, countryChange, resetCountry] = useInputState("US");

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
      <form onSubmit={() => update(zip, country)}>
        <TextField
          label="Zip Code"
          fullWidth
          margin="normal"
          required
          placeholder={location}
          value={zip}
        />
        <TextField
          label="Country"
          fullWidth
          margin="normal"
          required
          placeholder={country}
          value={country}
        />
      </form>
      <Typography variant="h6">{location}</Typography>
    </Paper>
  );
}

export default withStyles(styles)(Current);
