import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Paper,
  Grid,
  CssBaseline
} from "@material-ui/core";
import Current from "./Current";
import Weather from "./Weather";
import axios from "axios";

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
    this.state = { zip: "49441", country: "", loaded: false };
  }

  updateWeather = (zip, country) => {
    this.setState({ zip: zip, country: country, loaded: true });
    async function fetchData() {
      const response = await axios.get(``);
    }
    fetchData();
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root} elevation={0}>
        <CssBaseline />
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
            <Current location={this.state.zip} update={this.updateWeather} />
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
            {this.state.loaded ? (
              <Weather />
            ) : (
              <div className={classes.loader} />
            )}
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(BadWeather);
