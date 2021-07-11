import React from "react";
import {
  Avatar,
  Grid,
  Typography,
  Divider,
  Link,
  Box,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import ProfilePicture from "./profile_picture.jpeg";
import { PinDropSharp } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  large: {
    [theme.breakpoints.up("md")]: {
      width: 200,
      height: 200,
    },
    minHeight: 100,
    minWidth: 100,
    marginTop: "25%",
    marginBottom: 10,
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={4}>
      <Grid item xs={3}></Grid>
      <Grid itemRef xs={7} spacing={4}>
        <Avatar
          alt="Picture of Ryan Schuerkamp"
          variant="circle"
          className={classes.large}
          src={ProfilePicture}
        />
        <Typography display="block" variant="h5">
          <Box fontWeight="fontWeightBold">Ryan Schuerkamp</Box>
        </Typography>
        <Typography style={{ marginBottom: 10 }} variant="h6">
          <Link href="mailto:schuerr2@miamioh.edu">schuerr2@miamioh.edu</Link>
        </Typography>
        <Divider />
        <Typography style={{ marginTop: 10, marginBottom: 10 }} variant="h5">
          About
        </Typography>
        <Typography style={{ marginBottom: 20 }} variant="body1">
          Hi, I’m Ryan. I’m a rising Sophomore at Miami University majoring in
          Computer Science, Data Science and Statistics, and Mathematics. I love
          solving difficult problems. Currently, I’m interning at{" "}
          <Link href="https://joot.io/">Joot</Link> and researching applying
          machine learning to cybersecurity.
        </Typography>
        <Button
          style={{ marginBottom: 20 }}
          variant="contained"
          color="secondary"
          href="/resume"
        >
          Learn More
        </Button>
        <Divider />
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
};

export default Sidebar;
