import React from "react";
import {
  Avatar,
  Grid,
  Typography,
  CardHeader,
  CardMedia,
  Card,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import ProfilePicture from "./profile_picture.jpeg";

const useStyles = makeStyles((theme) => ({
  large: {
    [theme.breakpoints.up("md")]: {
      width: 200,
      height: 200,
    },
    minHeight: 100,
    minWidth: 100,
    marginTop: "25%",
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={4}>
      <Grid item xs={2}></Grid>
      <Grid
        item
        container
        direction="column"
        xs={10}
        spacing={4}
        alignItems="center"
        justify="center"
      >
        <Grid item xs={6}>
          <Avatar
            alt="Picture of Ryan Schuerkamp"
            variant="circle"
            className={classes.large}
            src={ProfilePicture}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography display="block" variant="h5">
            Ryan Schuerkamp
          </Typography>
          <Divider></Divider>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Sidebar;
