import React from "react";
import { Grid, Typography, Divider } from "@material-ui/core";

import PictureCard from "./PictureCard";

import minnesotaPicture from "./images/minnesota.jpeg";
import miamiUniversityPicture from "./images/miamiUniversity.jpeg";
import carnegieMellonUniversityPicture from "./images/carnegieMellonUniversity.jpeg";
import iceCreamPicture from "./images/iceCreamCake.jpeg";

const Background = () => {
  return (
    <>
      <Typography style={{ marginBottom: 10, marginTop: 10 }} variant="h2">
        Background
      </Typography>
      <Divider style={{ marginBottom: 10 }} />
      <Grid container>
        <PictureCard
          title="From Minnesota"
          picture={minnesotaPicture}
          description="I am from a midsize suburb about 30 minutes south of Minneapolis. I loved building castle-like snow forts, climbing trees, and gaming with my best friend in elementary school. I became great friends with my soccer teammates in middle and high school and loved spending time with my family at our cabin. I love going home to visit my friends and family!"
        />
        <PictureCard
          title="Graduated from Miami University"
          picture={miamiUniversityPicture}
          description="I finished my undergraduate and combined master's at Miami University. My sophomore year was my first time on campus; I spent my freshman year back home in Minnesota. It was great to get to campus and meet more people in person, including people I met over Zoom. I valued my time in Ohio because of the great friendships and relationships I have made."
        />
        <PictureCard
          title="Going to Carnegie Mellon University"
          picture={carnegieMellonUniversityPicture}
          description="I am a Ph.D. student in the Robotics Institute at Carnegie Mellon University. I am excited to pursue my research interests in machine learning, reasoning, and optimization, meet new people, and explore Pittsburgh!"
        />
        <PictureCard
          title="Fun Fact"
          picture={iceCreamPicture}
          description="The last time I had ice cream or sweets was my 16th birthday. After that, I got into working out and eating healthy. Sweets every once in a while would make no impact on my health, but it has already been over five years, so I forget what I am missing and want to keep the streak alive."
        />
      </Grid>
    </>
  );
};

export default Background;
