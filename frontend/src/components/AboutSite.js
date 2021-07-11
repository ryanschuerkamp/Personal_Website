import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Sidebar from "./Sidebar";

const AboutSite = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={false} sm={5}>
        <Sidebar />
      </Grid>
      <Grid item xs={12} sm={7}>
        <Typography variant="h1">About This Site</Typography>
      </Grid>
    </Grid>
  );
};

export default AboutSite;
