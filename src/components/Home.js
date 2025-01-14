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
              I am a Ph.D. student in the{" "}
              <Link
                href="https://www.ri.cmu.edu/"
                target="_blank"
                rel="noopener"
              >
                Robotics Institute
              </Link>{" "}
              in the{" "}
              <Link
                href="https://www.cs.cmu.edu/"
                target="_blank"
                rel="noopener"
              >
                School of Computer Science{" "}
              </Link>
              at{" "}
              <Link href="https://www.cmu.edu/" target="_blank" rel="noopener">
                Carnegie Mellon University
              </Link>
              , advised by{" "}
              <Link
                href="https://www.cs.cmu.edu/~ggordon/"
                target="_blank"
                rel="noopener"
              >
                Professor Geoff Gordon
              </Link>
              . My research focuses on the intersection of machine learning,
              reasoning, and optimization and currently explores using
              semidefinite program relaxations to efficiently solve deep
              reinforcement learning problems.
            </Typography>

            <Typography
              style={{ marginTop: 10, marginBottom: 20 }}
              variant="h5"
            >
              In the spring of 2024, I graduated Summa Cum Laude with University
              Honors with Distinction from{" "}
              <Link href="https://miamioh.edu/" target="_blank" rel="noopener">
                Miami University
              </Link>
              , earning a combined B.S./M.S. in Computer Science and a B.S. in
              Data Science and Statistics. I worked with{" "}
              <Link
                href="https://giabbanelli.com/"
                target="_blank"
                rel="noopener"
              >
                Professor Philippe Giabbanelli
              </Link>{" "}
              on Fuzzy Cognitive Maps (an interpretable graph-based simulation
              model) and simulation for adolescent suicide prevention with the
              Centers for Disease Control and Prevention (CDC).{" "}
            </Typography>

            <Typography
              style={{ marginTop: 10, marginBottom: 20 }}
              variant="h5"
            >
              Previously, I worked on machine learning for healthcare with{" "}
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
              at CMU and cybersecurity with{" "}
              <Link href="https://sbhunia.me/" target="_blank" rel="noopener">
                Professor Suman Bhunia
              </Link>{" "}
              at Miami University. Also, I have interned as a Data Scientist at
              the{" "}
              <Link href="https://www.usa.gov/" target="_blank" rel="noopener">
                United States Federal Government
              </Link>
              , a Quantitative Researcher at{" "}
              <Link
                href="https://www.artisanpartners.com/"
                target="_blank"
                rel="noopener"
              >
                Artisan Partners
              </Link>
              , and a Software Engineer at{" "}
              <Link href="https://joot.io/" target="_blank" rel="noopener">
                Joot
              </Link>
              , a fintech startup.
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
              Please feel free to get in touch. My email is ryanschuerkamp at
              cmu dot edu.
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
