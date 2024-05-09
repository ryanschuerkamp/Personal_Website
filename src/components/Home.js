import React from "react";
import { Grid, Typography, Hidden, Divider, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

import Sidebar from "./sidebar/Sidebar";
import Footer from "./Footer";

// To deploy run the following command: npm run deploy

const Home = () => {
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
            <Typography
              style={{ marginBottom: 10, marginTop: 10 }}
              variant="h2"
            >
              About Me
            </Typography>
            <Divider />
            <Typography
              style={{ marginTop: 10, marginBottom: 20 }}
              variant="h5"
            >
              I am a senior at Miami University pursuing a combined B.S./M.S. in
              Computer Science, a B.S. in Data Science and Statistics, and a
              minor in Mathematics. My research has focused on three main areas:
              <ol>
                <li>
                  Fuzzy Cognitive Maps (an interpretable graph-based simulation
                  model)
                </li>
                <li>
                  Network science and simulation for adolescent suicide
                  prevention in collaboration with the Centers for Disease
                  Control and Prevention (CDC)
                </li>
                <li>Machine learning for health.</li>
              </ol>
              As a result of these three research areas, I am interested in
              machine learning and its health applications. Starting in the fall
              of 2024, I will be a Ph.D. student in the School of Computer
              Science at Carnegie Mellon University.
            </Typography>
            <Typography
              style={{ marginTop: 10, marginBottom: 20 }}
              variant="h5"
            >
              At Miami, I am advised by{" "}
              <Link
                href="https://giabbanelli.com/"
                target="_blank"
                rel="noopener"
              >
                Professor Philippe Giabbanelli
              </Link>
              . Last summer, I interned with{" "}
              <Link
                href="https://www.ri.cmu.edu/ri-faculty/artur-w-dubrawski/"
                target="_blank"
                rel="noopener"
              >
                Professor Artur Dubrawski
              </Link>{" "}
              in the{" "}
              <Link href="https://autonlab.org/" target="_blank" rel="noopener">
                Auton Lab
              </Link>{" "}
              at Carnegie Mellon University and developed a machine
              learning-based approach for resuscitation sufficiency analysis.
            </Typography>

            <Typography style={{ marginBottom: 20 }} variant="h5">
              Previously, I interned as a Quantitative Research Intern at
              Artisan Partners in Boston and as a Software Engineer at Joot, a
              fintech startup. I also worked on machine learning for
              cybersecurity with{" "}
              <Link href="https://sbhunia.me/" target="_blank" rel="noopener">
                Professor Suman Bhunia
              </Link>
              .
            </Typography>

            <Typography style={{ marginBottom: 20 }} variant="h5">
              Outside of work, I enjoy working out, cooking, hiking, and other
              hobbies, which you can read about on my{" "}
              <Link to="/personal" component={RouterLink}>
                Personal page
              </Link>
              .
            </Typography>
            <Typography style={{ marginBottom: 20 }} variant="h5">
              Please feel free to get in touch. My email is schuerr2 at miamioh
              dot edu.
            </Typography>
            <Divider />
            <Typography
              style={{ marginBottom: 10, marginTop: 10 }}
              variant="h2"
            >
              About This Site
            </Typography>
            <Typography
              variant="h5"
              style={{ marginTop: 10, marginBottom: 20 }}
            >
              I built this website using React, React-Router, and Material-UI.
              Source code is available{" "}
              <Link
                href="https://github.com/ryanschuerkamp/Personal_Website"
                target="_blank"
                rel="noopener"
              >
                here.
              </Link>
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

export default Home;
