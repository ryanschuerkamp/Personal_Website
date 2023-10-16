import React from "react";
import {
  Avatar,
  Grid,
  Typography,
  Divider,
  Link,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { GitHub, LinkedIn, MailOutline } from "@material-ui/icons";

import profilePicture from "./profilePicture.png";

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

const Sidebar = (props) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={1} lg={3}></Grid>
      <Grid item xs={6}>
        <Avatar
          alt="Picture of Ryan Schuerkamp"
          variant="circular"
          className={classes.profilePicture}
          src={profilePicture}
        />
        <Typography display="block" variant="h4" style={{ marginBottom: 10 }}>
          <Box fontWeight="fontWeightBold">Ryan Schuerkamp</Box>
        </Typography>
        <Divider />
        <Typography style={{ marginBottom: 20, marginTop: 20 }} variant="body1">
          Undergraduate student interested in trustworthy machine learning and
          its health applications
        </Typography>
        <Divider />
        <Link
          href="https://github.com/ryanschuerkamp"
          target="_blank"
          rel="noopener"
        >
          <GitHub className={classes.icons} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ryan-schuerkamp/"
          target="_blank"
          rel="noopener"
        >
          <LinkedIn className={classes.icons} />
        </Link>
        <Link href="mailto:schuerr2@miamioh.edu" rel="noopener">
          <MailOutline fontSize="inherit" className={classes.icons} />
        </Link>
        <Typography style={{ marginTop: 20 }} variant="body2">
          © Ryan Schuerkamp{" "}
          <Link
            href="https://ryanschuerkamp.com"
            target="_blank"
            rel="noopener"
          >
            ryanschuerkamp.com
          </Link>
        </Typography>
      </Grid>
      <Grid item xs={5} lg={3}></Grid>
    </Grid>
  );
};

Sidebar.defaultProps = {
  resumePage: false,
};

export default Sidebar;
