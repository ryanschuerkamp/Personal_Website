import React from "react";
import { Grid, Divider, Hidden } from "@material-ui/core";

import Sidebar from "../sidebar/Sidebar";
import Footer from "../Footer";
import Hobbies from "./Hobbies";
import Background from "./Background";

const Personal = () => {
  return (
    <Grid container>
      <Hidden mdDown={true}>
        <Grid item lg={4}>
          <Sidebar />
        </Grid>
      </Hidden>
      <Grid item container xs={12} lg={8} direction="column">
        <Grid item container>
          <Grid item xs={2} sm={3} md={1} lg={false} />
          <Grid item xs={9} sm={7} md={10} lg={11}>
            <Background />
            <Divider />
            <Hobbies />
          </Grid>
        </Grid>
        <Hidden lgUp={true}>
          <Footer />
        </Hidden>
      </Grid>
      <Grid item xs={1} sm={2} md={1} lg={false} />
    </Grid>
  );
};

export default Personal;
