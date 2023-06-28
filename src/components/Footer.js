import React from "react";
import { Link as RouterLink } from "react-router-dom";
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
import { GitHub, LinkedIn, MailOutline } from "@material-ui/icons";

import profilePicture from "./sidebar/profilePicture.jpeg";

const useStyles = makeStyles((theme) => ({
  profilePicture: {
    [theme.breakpoints.up("md")]: {
      width: 200,
      height: 200,
    },
    minHeight: 150,
    minWidth: 150,
    marginTop: 20,
    marginBottom: 20,
  },
  icons: {
    marginTop: 20,
    marginRight: 20,
    fontSize: 30,
  },
}));

const Footer = (props) => {
  const { resumePage } = props;
  const classes = useStyles();
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Divider />
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Avatar
            alt="Picture of Ryan Schuerkamp"
            variant="circular"
            className={classes.profilePicture}
            src={profilePicture}
          />
          <Typography display="block" variant="h4" style={{ marginBottom: 10 }}>
            <Box fontWeight="fontWeightBold">Ryan Schuerkamp</Box>
          </Typography>
        </Grid>
        <Divider />
        <Grid container alignItems="center" justifyContent="center">
          <Typography
            style={{ marginBottom: 20, marginTop: 20 }}
            variant="body1"
          >
            Undergraduate student interested in trustworthy machine learning and
            its healthcare applications
          </Typography>
        </Grid>
        <Divider />
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid container item justifyContent="center">
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
            <Link href="mailto:schuerr2@miamioh.edu">
              <MailOutline fontSize="inherit" className={classes.icons} />
            </Link>
          </Grid>
          <Typography
            style={{ marginTop: 10, marginBottom: 10 }}
            variant="body2"
          >
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
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
};

Footer.defaultProps = {
  resumePage: false,
};

export default Footer;
