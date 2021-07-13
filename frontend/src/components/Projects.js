import React from "react";
import { Grid, Typography, Hidden } from "@material-ui/core";

import Sidebar from "./sidebar/Sidebar";
import Footer from "./Footer";

const Projects = () => {
  return (
    <Grid container>
      <Hidden mdDown={true}>
        <Grid item xs={false} sm={4}>
          <Sidebar />
        </Grid>
      </Hidden>
      <Grid item container xs={12} lg={8} direction="column">
        <Grid item container>
          <Grid item xs={2} sm={3} md={1} lg={false} />
          <Grid item xs={10} sm={9} md={11} lg={12}>
            <Typography variant="h1">Projects</Typography>
          </Grid>
        </Grid>
        <Hidden lgUp={true}>
          <Footer />
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default Projects;
