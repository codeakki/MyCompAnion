import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Navbar from "./Navbar";
import "./AboutUs.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <div className="heading">
        <h1>We provide services for the following categories</h1>
      </div>

      <div className="main">
        <Grid container spacing={7}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>Categories</Paper>
          </Grid>
          <Grid item xs={7}>
            <Paper className={classes.paper}>School</Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper className={classes.paper}>College</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Class 1st to 5th</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Class 5th-10th</Paper>
          </Grid>
          <Grid item xs={2}>
            <Paper className={classes.paper}>Class 11th to 12th</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Graduation</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Post Graduation</Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
