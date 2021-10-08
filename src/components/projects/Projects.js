import React from "react";
import { Grid, Typography, Hidden, Divider } from "@material-ui/core";

import Sidebar from "../sidebar/Sidebar";
import Footer from "../Footer";
import ProjectCard from "./ProjectCard";
import mubcImage from "./images/mubc.jpeg";
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
              title="MU Blockchain Club Website"
              date="July 2021"
              image={mubcImage}
              description={[
                "Developed new MU Blockchain Club website collaborating with 2 designers and using React and Material-UI",
                "Deployed using GitHub pages",
              ]}
              github="https://github.com/MUBlockchain/React-Website"
              url="https://mubc.io/"
            />
            <ProjectCard
              title="Modeling Song Popularity"
              date="April 2021"
              image={songPopularityImage}
              description={[
                "Completed data processing and exploratory data analysis on 5 datasets from Spotify utilizing R",
                "Identified significant predictor variables for song popularity by fitting 4 regression models employing R",
                "Selected an optimal model for predicting song popularity after implementing repeated cross-validation with R",
              ]}
              noLinkMessage="Group project for Statistical Modeling, so can not share GitHub link"
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
