import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Sidebar from "./sidebar/Sidebar";

const Projects = () => {
  return (
    <Grid container>
      <Grid item xs={false} sm={4}>
        <Sidebar />
      </Grid>
      <Grid item xs={12} sm={8}>
        <Typography variant="h1">Projects</Typography>
      </Grid>
    </Grid>
  );
};

export default Projects;
