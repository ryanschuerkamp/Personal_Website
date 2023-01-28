import React from "react";
import { Grid, Typography, Hidden, Divider } from "@material-ui/core";

import Sidebar from "../sidebar/Sidebar";
import Footer from "../Footer";
import ProjectCard from "./ProjectCard";
import fcmFigure from "./images/fcmFigure.png";
import causalLoopDiagram from "./images/causalLoopDiagram.jpeg";
import projectAssignmentFigure from "./images/projectAssignment.png";

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
              title="FCM Simulation Review"
              date="January 2022 - May 2022"
              image={fcmFigure}
              description={[
                "Performed and submitted (currently under review) a systematic review of 22 extensions of Fuzzy Cognitive Maps, their features, operationalization, strengths and weaknesses, potential use cases, and maturity",
                "Submitted May 2022 and under review: Ryan Schuerkamp and Phillipe J. Giabbanelli. Extensions of Fuzzy Cognitive Maps: A Systematic Review.",
              ]}
            />
            <ProjectCard
              title="CDC Suicide Causal Map"
              date="October 2021 - December 2021"
              image={causalLoopDiagram}
              description={[
                "Discovered factors driving adolescent suicide as part of CDC-funded research by analyzing the largest suicide causal map with over 360 nodes and 940 edges using Python and NetworkX",
                "Presented differences between and analysis of 4 different suicide causal maps to panel of 5 CDC experts",
                "Submitted November 2022 and under review: Benjamin D. Maldonado, Ryan Schuerkamp, Cassidy M. Martin, Ketra L. Rice, Nisha Nataraj, Margaret M. Brown, Christopher R. Harper, Curtis Florence, and Philippe J. Giabbanelli. Guiding Prevention Initiatives by Applying Network  Analysis to Causal Maps of Adverse Childhood Experiences and Adolescent Suicide.",
              ]}
            />
            <ProjectCard
              title="Stable Group Project Assignment Algorithm"
              date="September 2021 - November 2021"
              image={projectAssignmentFigure}
              description={[
                "Designed, implemented, and evaluated algorithm to assign students to projects based on students' preferences",
                "Created a script to generate datasets containing students and their preferences using Python",
                "Implemented a script to run the algorithm and a random algorithm to evaluate performance and run time of the algorithm leveraging Python and Matplotlib",
              ]}
              github="https://github.com/ryanschuerkamp/Stable-Group-Project-Assignment-Algorithm"
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
