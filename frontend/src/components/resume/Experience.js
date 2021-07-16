import React from "react";
import { Typography, Grid, Divider } from "@material-ui/core";

const Experience = () => {
  return (
    <>
      <Typography style={{ marginTop: 10 }} variant="h4">
        Experience
      </Typography>
      <Grid item container justifyContent="space-between">
        <Typography variant="h6">Software Engineer Intern</Typography>
        <Typography variant="h6">Joot</Typography>
        <Typography variant="h6">May 2021 – Present</Typography>
      </Grid>
      <Typography component="div" variant="body1">
        <ul>
          <li>
            Web scraped SEC website and Form ADVs using Python and Pandas to
            produce a list of important officials for all 14,000+ Registered
            Investment Advisers with over 99\% accuracy
          </li>
          <li>
            Built and deployed an API with Node.js and Google Cloud to take a
            firm’s CRD number and generate and send a list of recommended
            policies based on firms most recent Form ADV to email provided
          </li>
          <li>
            Created and executed a script to transfer 70 signed documents from
            version 1 to version 2 of application leveraging Node.js, MongoDB
            driver, Google Cloud, and HelloSign API
          </li>
        </ul>
      </Typography>
      <Grid item container justifyContent="space-between">
        <Typography variant="h6">Machine Learning Researcher</Typography>
        <Typography style={{ marginRight: 10 }} variant="h6">
          Malware Research Group
        </Typography>
        <Typography variant="h6">October 2020 – Present</Typography>
      </Grid>
      <Typography component="div" variant="body1">
        <ul>
          <li>
            Performed feature extraction on over 100 GB of network traffic
            utilizing Python, Pandas, Scapy, and Miami University’s
            high-performance computing cluster
          </li>
          <li>
            Fit a Kernel SVM algorithm employing Scikit-learn, Python, and
            Pandas on a subset of network traffic, distinguishing between botnet
            and non-botnet traffic with over 99\% accuracy
          </li>
          <li>
            Presented current research findings to an audience of over 50
            student researchers and professors at Miami University’s
            Undergraduate Research Forum
          </li>
        </ul>
      </Typography>
      <Grid item container justifyContent="space-between">
        <Typography variant="h6">Vice President of Projects</Typography>
        <Typography variant="h6">MU Blockchain Club</Typography>
        <Typography variant="h6">October 2020 – Present</Typography>
      </Grid>
      <Typography component="div" variant="body1">
        <ul>
          <li>
            Lead team of 3 developers in development of new MU Blockchain Club
            website using React and Material UI
          </li>
          <li>
            Direct vision of 5 person development team and represent developer
            interests on Executive Board
          </li>
        </ul>
      </Typography>
    </>
  );
};

export default Experience;
