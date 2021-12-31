import React from "react";
import { Grid, Typography } from "@material-ui/core";

import PictureCard from "./PictureCard";

import minnesotaPicture from "./images/minnesota.jpeg";
import miamiUniversityPicture from "./images/miamiUniversity.jpeg";
import iceCreamPicture from "./images/iceCreamCake.jpeg";

const Background = () => {
  return (
    <>
      <Typography style={{ marginBottom: 10, marginTop: 10 }} variant="h3">
        Background
      </Typography>
      <Grid container>
        <PictureCard
          title="From Minnesota"
          picture={minnesotaPicture}
          description="I am from a midsize suburb about 30 minutes south of Minneapolis. I loved building castle-like snow forts, climbing trees, and occasionally taking apart computers with my best friend in elementary school. I became great friends with my soccer teammates in middle and high school and learned Java my senior year."
        />
        <PictureCard
          title="Going to Miami University"
          picture={miamiUniversityPicture}
          description="Last semester was my first time on campus. I spent my freshmen year back home in Minnesota. It was great to get to campus and meet more people in person, including the people I met over zoom. I am excited to continue my education and meet more people in person."
        />
        <PictureCard
          title="Fun Fact"
          picture={iceCreamPicture}
          description="The last time I had ice cream or sweets was my 16th birthday. After that, I got into working out and eating healthy. Sweets every once in a while would make absolutely no impact on my health, but it has already been over 4 years, so I forget what I am missing and want to keep the streak alive."
        />
      </Grid>
    </>
  );
};

export default Background;
