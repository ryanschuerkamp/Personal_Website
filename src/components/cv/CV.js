import React from "react";
import { Grid, Typography, Hidden, Divider, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

import Sidebar from "../sidebar/Sidebar";
import Footer from "../Footer";
import Education from "./Education";
import Experience from "./Experience";

const CV = () => {
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
            <Typography
              style={{ marginBottom: 10, marginTop: 10 }}
              variant="h2"
            >
              CV
            </Typography>
            <Typography variant="subtitle1">
              <Link href="mailto:schuerr2@miamioh.edu">
                Email me for current PDF version
              </Link>
            </Typography>
            <Divider />
            <Education />
            <Divider />
            <Typography style={{ marginTop: 10 }} variant="h4">
              Publications
            </Typography>
            <Typography style={{ marginBottom: 20 }} variant="body1">
              See the{" "}
              <Link to="/papers" component={RouterLink}>
                Papers page
              </Link>
              .
            </Typography>
            <Divider />
            <Typography style={{ marginTop: 10 }} variant="h4">
              Presentations
            </Typography>
            <ul>
              <li>
                <Typography variant="body1">
                  Accepted: <b>R. Schuerkamp</b>.{" "}
                  <i>
                    How to Combine Models? Principles and Mechanisms to
                    Aggregate Fuzzy Cognitive Maps
                  </i>
                  . Oral Presentation at Winter Simulation Conference (WSC);
                  December 2023; San Antonio TX
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  <b>R. Schuerkamp</b>.{" "}
                  <i>
                    Facilitating the Interoperability and Reuse of Extensions of
                    Fuzzy Cognitive Maps
                  </i>
                  . Oral Presentation at Annual Modeling and Simulation
                  Conference (ANNSIM); May 2023; Hamilton ON, Canada
                </Typography>
              </li>
              <li>
                {" "}
                <Typography variant="body1">
                  <b>R. Schuerkamp</b>.{" "}
                  <i>
                    Which Aspects of Complexity Matter? Navigating the Many
                    Options to Model Socio-environmental Systems
                  </i>
                  . Oral Presentation at Miami University Graduate Research
                  Forum; November 2022; Oxford, OH{" "}
                </Typography>
              </li>
              <li>
                {" "}
                <Typography variant="body1">
                  <b>R. Schuerkamp</b>, T. Deep, N. Hoang.{" "}
                  <i>
                    Internet of Things Botnet Detection Using Network Flow
                    Analysis
                  </i>
                  . Poster Presentation at Miami University Undergraduate
                  Research Forum; April 2021; Oxford, OH{" "}
                </Typography>
              </li>
            </ul>
            <Divider />
            <Experience />
            <Divider />
            <Typography style={{ marginTop: 10 }} variant="h4">
              Honors and Awards
            </Typography>
            <ul>
              <li>
                <Grid item container justifyContent="space-between">
                  <Typography variant="body1">President's List</Typography>
                  <Typography variant="body1">
                    <i>2020 - Present</i>
                  </Typography>
                </Grid>
              </li>
              <li>
                <Grid item container justifyContent="space-between">
                  <Typography variant="body1">
                    Library Award for Undergraduate Research Excellence
                  </Typography>
                  <Typography variant="body1">
                    <i>2023</i>
                  </Typography>
                </Grid>
              </li>
              <li>
                <Grid item container justifyContent="space-between">
                  <Typography variant="body1">
                    Redhawk Excellence Scholarship
                  </Typography>
                  <Typography variant="body1">
                    <i>2020 - 2024</i>
                  </Typography>
                </Grid>
              </li>
              <li>
                <Grid item container justifyContent="space-between">
                  <Typography variant="body1">
                    University Academic Scholars Scholarship
                  </Typography>
                  <Typography variant="body1">
                    <i>2020 - 2024</i>
                  </Typography>
                </Grid>
              </li>
              <li>
                <Grid item container justifyContent="space-between">
                  <Typography variant="body1">
                    Bridges Program for Excellence Scholarship
                  </Typography>
                  <Typography variant="body1">
                    <i>2020 - 2024</i>
                  </Typography>
                </Grid>
              </li>
              <li>
                <Grid item container justifyContent="space-between">
                  <Typography variant="body1">Honors College</Typography>
                  <Typography variant="body1">
                    <i>2020 - 2024</i>
                  </Typography>
                </Grid>
              </li>
              <li>
                <Grid item container justifyContent="space-between">
                  <Typography variant="body1">
                    Computing and Engineering Scholar
                  </Typography>
                  <Typography variant="body1">
                    <i>2020 - 2024</i>
                  </Typography>
                </Grid>
              </li>
            </ul>
            <Divider />
            <Typography style={{ marginTop: 10 }} variant="h4">
              Peer Review
            </Typography>
            <ul>
              <li>
                <Typography variant="body1">
                  Conference on Neural Information Processing Systems (NeurIPS)
                  2023
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Machine Learning for Health symposium (ML4H) 2023
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  European Conference on Artificial Intelligence (ECAI) 2023
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  BMC Medical Informatics and Decision Making
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Journal of Cleaner Production
                </Typography>
              </li>
            </ul>
            <Divider />
            <Typography style={{ marginTop: 10 }} variant="h4">
              Professional Memberships
            </Typography>
            <ul>
              <li>
                <Typography variant="body1">
                  Association for Computing Machinery (ACM)
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Society for Industrial and Applied Mathematics (SIAM)
                </Typography>
              </li>
            </ul>
            <Divider />
            <Typography style={{ marginTop: 10 }} variant="h4">
              Skills
            </Typography>
            <ul>
              <li>
                <Typography variant="body1">
                  Proficient Programming Languages: Python, R, MATLAB, C++, SQL,
                  JavaScript
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Other Technologies: Pandas, Scikit-learn, NumPy, PyTorch,
                  Linux, Git, LaTeX
                </Typography>
              </li>
            </ul>
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

export default CV;
