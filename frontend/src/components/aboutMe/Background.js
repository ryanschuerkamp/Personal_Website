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
          description="I am from Prior Lake, a midsize suburb about 30 minutes south of Minneapolis. I loved building castle-like snow forts, climbing trees, and occasionally taking apart computers with my best friend in elementary school. I became great friends with my soccer teammates in middle and high school and learned Java my senior year."
        />
        <PictureCard
          title="Going to Miami University"
          picture={miamiUniversityPicture}
          description="I have not gone to Miami yet, but I am excited about going in the fall. I spent my freshmen year back home in Minnesota but still met some great people over zoom. I look forward to meeting and making new friends in the fall, continuing my coursework and research in person, and exploring Ohio."
        />
        <PictureCard
          title="Fun Fact"
          picture={iceCreamPicture}
          description="The last time I had ice cream or any sweets was my 16th birthday. After that, I got into working out and eating healthy. Sweets every once in a while would make absolutely no impact on my health, but it has already been 3.5 years, so I forget what I am missing and want to keep the streak alive."
        />
      </Grid>
    </>
  );
};

export default Background;
