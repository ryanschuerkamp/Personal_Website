import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import Sidebar from "./sidebar/Sidebar";

const AboutSite = () => {
  return (
    <Grid container xs={12}>
      <Grid item xs={false} sm={4}>
        <Sidebar />
      </Grid>
      <Grid item xs={12} sm={8}>
        <Typography variant="h1">About This Site</Typography>
      </Grid>
    </Grid>
  );
};

export default AboutSite;
