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
import { GitHub, LinkedIn, MailOutline } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  profilePicture: {
    [theme.breakpoints.up("md")]: {
      width: 200,
      height: 200,
    },
    minHeight: 100,
    minWidth: 100,
    marginTop: 100,
    marginBottom: 35,
  },
  icons: {
    marginTop: 20,
    marginRight: 20,
    fontSize: 30,
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <Avatar
          alt="Picture of Ryan Schuerkamp"
          variant="circle"
          className={classes.profilePicture}
          src={ProfilePicture}
        />
        <Typography display="block" variant="h3">
          <Box fontWeight="fontWeightBold">Ryan Schuerkamp</Box>
        </Typography>
        <Typography style={{ marginBottom: 25 }} variant="h6">
          <Link href="mailto:schuerr2@miamioh.edu">schuerr2@miamioh.edu</Link>
        </Typography>
        <Divider />
        <Typography style={{ marginTop: 25, marginBottom: 10 }} variant="h6">
          <Box fontWeight="fontWeightBold">About</Box>
        </Typography>
        <Typography style={{ marginBottom: 20 }} variant="body1">
          Hi, I’m Ryan. I’m a rising Sophomore at Miami University majoring in
          Computer Science, Data Science and Statistics, and Mathematics. I love
          solving difficult problems. Currently, I’m interning at{" "}
          <Link href="https://joot.io/">Joot</Link> and researching applying
          machine learning to cybersecurity.
        </Typography>
        <Button
          style={{ marginBottom: 35 }}
          variant="contained"
          color="secondary"
          href="/resume"
        >
          Learn More
        </Button>
        <Divider />
        <Link href="https://github.com/ryanschuerkamp">
          <GitHub className={classes.icons} />
        </Link>
        <Link href="https://www.linkedin.com/in/ryan-schuerkamp/">
          <LinkedIn className={classes.icons} />
        </Link>
        <Link href="mailto:schuerr2@miamioh.edu">
          <MailOutline fontSize="inherit" className={classes.icons} />
        </Link>
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  );
};

export default Sidebar;
