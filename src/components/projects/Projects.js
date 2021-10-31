import React from "react";
import { Grid, Typography, Hidden, Divider } from "@material-ui/core";

import Sidebar from "../sidebar/Sidebar";
import Footer from "../Footer";
import ProjectCard from "./ProjectCard";
import causalLoopDiagram from "./images/causalLoopDiagram.jpeg";
import songPopularityImage from "./images/songPopularity.jpeg";
import twitterMisinformationImage from "./images/tweetAnalysis.jpeg";

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
              date="October 2021 - Present"
              image={causalLoopDiagram}
              description={[
                "Analyzing largest suicide causal map with over 360 nodes and 940 edges to understand interrelated factors contributing to suicide as part of CDC funded research using Python and NetworkX",
                "Presenting differences between and analysis of 4 different suicide causal maps to panel of 5 CDC experts",
              ]}
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
            <ProjectCard
              title="Twitter Misinformation Analysis"
              date="January 2021"
              image={twitterMisinformationImage}
              description={[
                "Scraped 1000 tweets containing coronavirus vaccine misinformation using Python, Snscrape, and Twitter API",
                "Discovered similarities and common themes between tweets leveraging Python and Pandas",
                "Conveyed results using Matplotlib and provided visualizations for application teammates designed in React",
              ]}
              github="https://github.com/ryanschuerkamp/nwHacks2021"
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
