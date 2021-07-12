import React from "react";
import { Grid, Typography } from "@material-ui/core";

import PictureCard from "./PictureCard";

import priorLakePicture from "./images/priorLake.jpeg";
import miamiUniversityPicture from "./images/miamiUniversity.jpeg";
import iceCreamPicture from "./images/iceCreamCake.jpeg";

const Background = () => {
  return (
    <>
      <Typography style={{ marginBottom: 10, marginTop: 10 }} variant="h3">
        Background
      </Typography>
      <Grid container xs={12}>
        <PictureCard
          title="From Minnesota"
          picture={priorLakePicture}
        ></PictureCard>
        <PictureCard
          title="Going to Miami University"
          picture={miamiUniversityPicture}
        ></PictureCard>
        <PictureCard title="Fun Fact" picture={iceCreamPicture}></PictureCard>
      </Grid>
    </>
  );
};

export default Background;
