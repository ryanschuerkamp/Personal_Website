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

import profilePicture from "./profile_picture.jpeg";

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
  const { resumePage } = props;
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
          Hi, I’m Ryan. I love solving challenging problems. I am a sophomore at
          Miami University pursuing a B.S. and M.S. in Computer Science and a
          B.S. in Data Science and Statistics. Last semester, I analyzed a
          causal map of what makes adolescents commit suicide as part of
          CDC-funded research. Last summer, I interned as a Software Engineer at{" "}
          <Link href="https://joot.io/" target="_blank" rel="noopener">
            Joot
          </Link>
          , a fintech startup. This summer, I will be interning at{" "}
          <Link
            href="https://www.artisanpartners.com/"
            target="_blank"
            rel="noopener"
          >
            Artisan Partners
          </Link>{" "}
          as a Trading Intern.
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
        <Typography style={{ marginTop: 50 }} variant="body2">
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
