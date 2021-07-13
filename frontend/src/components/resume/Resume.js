import React from "react";
import {
  Grid,
  Typography,
  Hidden,
  Divider,
  Tabs,
  Tab,
  Link,
} from "@material-ui/core";

import Sidebar from "../sidebar/Sidebar";
import Footer from "../Footer";
import Education from "./Education";

const Resume = () => {
  return (
    <Grid container>
      <Hidden mdDown={true}>
        <Grid item xs={false} sm={4}>
          <Sidebar resumePage={true} />
        </Grid>
      </Hidden>
      <Grid item container xs={12} lg={6} direction="column">
        <Grid item container>
          <Grid item xs={1} lg={false} />
          <Grid item xs={10} lg={12}>
            <Typography variant="h1">Resume</Typography>
            <Tabs variant="scrollable" scrollButtons="on" value="/">
              <Tab label="Education" value="/" component={Link} to="/" />
              <Tab
                label="Experience"
                value="/about"
                component={Link}
                to="/about"
              />
              <Tab
                label="Leadership"
                value="/resume"
                component={Link}
                to="/resume"
              />
              <Tab
                label="Skills"
                value="/projects"
                component={Link}
                to="/projects"
              />
              <Tab
                label="Honors and Awards"
                value="/projects"
                component={Link}
                to="/projects"
              />
            </Tabs>
            <Divider />
            <Education />
          </Grid>
        </Grid>
        <Hidden lgUp={true}>
          <Footer resumePage={true} />
        </Hidden>
      </Grid>
      <Grid item xs={1} lg={2} />
    </Grid>
  );
};

export default Resume;
