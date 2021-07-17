import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Grid, Typography, Hidden, Divider, Link } from "@material-ui/core";

import Sidebar from "./sidebar/Sidebar";
import Footer from "./Footer";

const AboutSite = () => {
  return (
    <Grid container>
      <Hidden mdDown={true}>
        <Grid item lg={4}>
          <Sidebar />
        </Grid>
      </Hidden>
      <Grid item container xs={12} lg={7} direction="column">
        <Grid item container>
          <Grid item xs={1} lg={false} />
          <Grid item xs={10} lg={11}>
            <Typography variant="h1">About This Site</Typography>
            <Divider />
            <Typography variant="h4" style={{ marginTop: 10 }}>
              A responsive website built using React, React-Router, and Material
              UI
            </Typography>
            <Typography variant="h5" style={{ marginTop: 40 }}>
              Welcome to my website! Please feel free to read more{" "}
              <Link component={RouterLink} to="/about">
                about me,
              </Link>{" "}
              checkout my{" "}
              <Link component={RouterLink} to="/resume">
                resume
              </Link>{" "}
              and{" "}
              <Link component={RouterLink} to="/projects">
                projects,{" "}
              </Link>
              or contact me at{" "}
              <Link href="mailto:schuerr2@miamioh.edu">
                schuerr2@miamioh.edu
              </Link>
              .
            </Typography>
            <Typography variant="h5" style={{ marginTop: 40 }}>
              Source code available{" "}
              <Link
                href="https://github.com/ryanschuerkamp/Personal_Website"
                target="_blank"
                rel="noopener"
              >
                here
              </Link>
              .
            </Typography>
          </Grid>
        </Grid>
        <Hidden lgUp={true}>
          <Footer />
        </Hidden>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};

export default AboutSite;
