import React from "react";
import {
  Grid,
  Typography,
  Hidden,
  Divider,
  Link,
  Box,
} from "@material-ui/core";

import Sidebar from "../sidebar/Sidebar";
import Footer from "../Footer";
import Education from "./Education";
import Experience from "./Experience";
import SkillsAndHonors from "./SkillsAndHonors";

const Resume = () => {
  return (
    <Grid container>
      <Hidden mdDown={true}>
        <Grid item lg={4}>
          <Sidebar resumePage={true} />
        </Grid>
      </Hidden>
      <Grid item container xs={12} lg={7} xl={6} direction="column">
        <Grid item container>
          <Grid item xs={1} lg={false} />
          <Grid item xs={10} lg={12}>
            <Typography variant="h1">Resume</Typography>
            <Typography variant="subtitle1">
              <Link href="mailto:schuerr2@miamioh.edu">
                Email me for current PDF version
              </Link>
            </Typography>
            <Divider />
            <Education />
            <Divider />
            <Experience />
            <Divider />
            <Typography style={{ marginTop: 10 }} variant="h4">
              Publications
            </Typography>
            <ul>
              <li>
                <Typography variant="body1">
                  In Preparation:{" "}
                  <Box sx={{ fontWeight: "bold", display: "inline" }}>
                    Ryan Schuerkamp
                  </Box>
                  , Jared Barrett, Amber Bales, Alia Wegner, Philippe J.
                  Giabbanelli. Object Detection for Gender Recognition in
                  Historical Postcards.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Submitted November 2022 and under review: Benjamin D.
                  Maldonado,{" "}
                  <Box sx={{ fontWeight: "bold", display: "inline" }}>
                    Ryan Schuerkamp
                  </Box>
                  , Cassidy M. Martin, Ketra L. Rice, Nisha Nataraj, Margaret M.
                  Brown, Christopher R. Harper, Curtis Florence, and Philippe J.
                  Giabbanelli. Guiding Prevention Initiatives by Applying
                  Network Analysis to Causal Maps of Adverse Childhood
                  Experiences and Adolescent Suicide.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Submitted November 2022 and under review:{" "}
                  <Box sx={{ fontWeight: "bold", display: "inline" }}>
                    Ryan Schuerkamp
                  </Box>
                  , Nicolas Daclin, Philippe J. Giabbanelli. Facilitating the
                  Interoperability and Reuse of Extensions of Fuzzy Cognitive
                  Maps.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Submitted May 2022 and under review:{" "}
                  <Box sx={{ fontWeight: "bold", display: "inline" }}>
                    Ryan Schuerkamp
                  </Box>{" "}
                  and Phillipe J. Giabbanelli. Extensions of Fuzzy Cognitive
                  Maps: A Systematic Review.
                </Typography>
              </li>
            </ul>
            <Divider />
            <Typography style={{ marginTop: 10 }} variant="h4">
              References
            </Typography>
            <ul>
              <li>
                <Typography variant="body1">
                  Dr. Philippe J. Giabbanelli, Associate Professor at Miami
                  University. Email:{" "}
                  <Link
                    href="mailto:giabbapj@miamioh.edu"
                    target="_blank"
                    rel="noopener"
                  >
                    giabbapj@miamioh.edu
                  </Link>
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Dr. John Femiani, Professor at Miami University. Email:{" "}
                  <Link
                    href="mailto:femianjc@miamioh.edu"
                    target="_blank"
                    rel="noopener"
                  >
                    femianjc@miamioh.edu
                  </Link>
                </Typography>
              </li>
            </ul>
            <Divider />
            <SkillsAndHonors />
          </Grid>
        </Grid>
        <Hidden lgUp={true}>
          <Footer resumePage={true} />
        </Hidden>
      </Grid>
      <Grid item xs={1} xl={2} />
    </Grid>
  );
};

export default Resume;
