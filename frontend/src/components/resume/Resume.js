import React from "react";
import { Grid, Typography, Hidden, Divider, Link } from "@material-ui/core";

import Sidebar from "../sidebar/Sidebar";
import Footer from "../Footer";
import Education from "./Education";
import Experience from "./Experience";
import SkillsAndHonors from "./SkillsAndHonors";
import Ryan_Schuerkamp_Resume from "./Ryan_Schuerkamp_Resume.pdf";

const Resume = () => {
  return (
    <Grid container>
      <Hidden mdDown={true}>
        <Grid item xs={false} sm={4}>
          <Sidebar resumePage={true} />
        </Grid>
      </Hidden>
      <Grid item container xs={12} lg={7} xl={6} direction="column">
        <Grid item container>
          <Grid item xs={1} lg={false} />
          <Grid item xs={10} lg={12}>
            <Typography variant="h1">Resume</Typography>
            <Typography variant="subtitle1">
              <Link href={Ryan_Schuerkamp_Resume} target="_blank">
                PDF Version Here
              </Link>
            </Typography>
            <Divider />
            <Education />
            <Divider />
            <Experience />
            <Divider />
            <SkillsAndHonors />
          </Grid>
        </Grid>
        <Hidden lgUp={true}>
          <Footer resumePage={true} />
        </Hidden>
      </Grid>
      <Grid item xs={1} lg={1} xl={2} />
    </Grid>
  );
};

export default Resume;
