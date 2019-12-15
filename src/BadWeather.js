import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { AppBar, Toolbar, Typography, Paper, Grid } from "@material-ui/core";
import Current from "./Current";

const styles = {
  root: {
    padding: 0,
    margin: 0,
    height: "100vh",
    backgroundColor: "#fafafa"
  },
  nav: { height: "64px" },
  container: {
    marginTop: "1rem"
  },
  form: {
    width: "100%"
  }
};

class BadWeather extends Component {
  constructor(props) {
    super(props);
    this.state = { location: 49441 };
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root} elevation={0}>
        <AppBar color="primary" position="static" className={classes.nav}>
          <Toolbar>
            <Typography color="inherit">BadWeather</Typography>
          </Toolbar>
        </AppBar>
        <Grid
          container
          justify="center"
          margin="normal"
          className={classes.container}
        >
          <Grid item xs={12} md={8} lg={4} className={classes.form}>
            <Current />
          </Grid>
          <Grid item xs={12} md={8} lg={8} margin>
            <h1>Hello</h1>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(BadWeather);
