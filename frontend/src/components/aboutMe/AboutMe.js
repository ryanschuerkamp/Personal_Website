import React from "react";
import { Grid, Typography, Divider } from "@material-ui/core";

import Sidebar from "../sidebar/Sidebar";
import Hobbies from "./Hobbies";
import Background from "./Background";

const AboutMe = () => {
  return (
    <Grid container>
      <Grid item xs={false} sm={4}>
        <Sidebar />
      </Grid>
      <Grid item container xs={12} sm={8} direction="column">
        <Typography variant="h1">About Me</Typography>
        <Divider />
        <Background />
        <Hobbies />
      </Grid>
    </Grid>
  );
};

export default AboutMe;
