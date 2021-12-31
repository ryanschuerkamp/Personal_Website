import React from "react";
import { Grid, Typography, Hidden, Divider } from "@material-ui/core";

import Sidebar from "../sidebar/Sidebar";
import Footer from "../Footer";
import ProjectCard from "./ProjectCard";
import causalLoopDiagram from "./images/causalLoopDiagram.jpeg";
import songPopularityImage from "./images/songPopularity.jpeg";
import projectAssignment from "./images/project_assignment.png";

const Projects = (props) => {
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
            <Typography variant="h1">Projects</Typography>
            <Divider />
            <ProjectCard
              title="CDC Suicide Causal Map"
              date="October 2021 - December 2021"
              image={causalLoopDiagram}
              description={[
                "Analyzed largest suicide causal map with over 360 nodes and 940 edges to understand interrelated factors contributing to suicide as part of CDC funded research using Python and NetworkX",
                "Presented differences between and analysis of 4 different suicide causal maps to panel of 5 CDC experts",
              ]}
            />
            <ProjectCard
              title="Stable Group Project Assignment Algorithm"
              date="September 2021 - November 2021"
              image={projectAssignment}
              description={[
                "Designed, implemented, and evaluated algorithm to assign students to projects based on students' preferences",
                "Created a script to generate datasets containing students and their preferences using Python",
                "Implemented a script to run the algorithm and a random algorithm to evaluate performance and run time of the algorithm leveraging Python and Matplotlib",
              ]}
              github="https://github.com/ryanschuerkamp/Stable-Group-Project-Assignment-Algorithm"
            />
            <ProjectCard
              title="Modeling Song Popularity"
              date="April 2021 - May 2021"
              image={songPopularityImage}
              description={[
                "Completed data processing and exploratory data analysis on 5 datasets from Spotify utilizing R",
                "Identified significant predictor variables for song popularity by fitting 4 regression models employing R",
                "Selected an optimal model for predicting song popularity after implementing repeated cross-validation with R",
              ]}
            />
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

export default Projects;
