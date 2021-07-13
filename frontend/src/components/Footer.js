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

import profilePicture from "./sidebar/profile_picture.jpeg";

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
          <Typography display="block" variant="h3">
            <Box fontWeight="fontWeightBold">Ryan Schuerkamp</Box>
          </Typography>
          <Typography style={{ marginBottom: 10 }} variant="h6">
            <Link href="mailto:schuerr2@miamioh.edu">schuerr2@miamioh.edu</Link>
          </Typography>
        </Grid>
        <Divider />
        <Grid container alignItems="center" justifyContent="center">
          <Typography style={{ marginTop: 10, marginBottom: 10 }} variant="h6">
            <Box fontWeight="fontWeightBold">About</Box>
          </Typography>
          <Typography
            align="center"
            style={{ marginBottom: 20 }}
            variant="body1"
          >
            Hi, I’m Ryan. I love solving challenging problems. I am a rising
            Sophomore at Miami University majoring in Computer Science, Data
            Science and Statistics, and Mathematics. Currently, I am interning
            at <Link href="https://joot.io/">Joot</Link> as a Software Engineer
            and researching applying machine learning to cybersecurity.
          </Typography>
          <Button
            style={{ marginBottom: 35 }}
            variant="contained"
            color="secondary"
            component={RouterLink}
            to={resumePage ? "/about" : "/resume"}
          >
            Learn More
          </Button>
        </Grid>
        <Divider />
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid container item justifyContent="center">
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
          <Typography
            style={{ marginTop: 10, marginBottom: 10 }}
            variant="body2"
          >
            © Ryan Schuerkamp{" "}
            <Link href="https://ryanschuerkamp.com">ryanschuerkamp.com</Link>
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
