import React from "react";
import { Grid, Typography } from "@material-ui/core";
import PictureCard from "./PictureCard";

import weightsPicture from "./images/weights.jpeg";
import cookingPicture from "./images/cooking.jpeg";
// import codingPicture from "./images/coding.jpeg";
import runningPicture from "./images/running.jpeg"
import readingPicture from "./images/reading.jpeg";
import gamingPicture from "./images/gaming.jpeg";
import walkingPicture from "./images/walking.jpeg";

const Hobbies = () => {
  return (
    <>
      <Typography style={{ marginBottom: 10, marginTop: 10 }} variant="h2">
        Hobbies
      </Typography>
      <Grid container>
        <PictureCard
          title="Lifting"
          picture={weightsPicture}
          description="Almost every day, I eagerly wait for my workout. I love it all; pushing my limits, refining my workouts and diet, and seeing gradual progress over the last few years have been immensely gratifying! Helping my interested friends get started and seeing their progress has been even more rewarding!"
        />
        <PictureCard
          title="Running"
          picture={runningPicture}
          description="I recently ran the Pittsburgh half marathon and am getting pretty into running. I am training for the Minneapolis Marathon this October with many of my friends. I am excited to continue to build my base, improve my pace, and go for some beautiful runs around Minnesota, Pittsburgh, and Utah while preparing for the marathon!"
        />
        <PictureCard
          title="Cooking"
          picture={cookingPicture}
          description="Initially, I was not the biggest fan of cooking, but now I love it. With practice and help from my family, I can now quickly cook healthy, delicious meals. I love trying new recipes and ingredients and am excited to continue making more elaborate meals! I also love trying new restaurants and cuisines for inspiration; let me know if you want any recommendations for Pittsburgh restaurants!"
        />
        {/* <PictureCard
          title="Coding"
          picture={codingPicture}
          description="Seeing what problems I can solve and what I can build through code, the logic and planning that goes into a well-designed solution, and learning technologies to tackle new problems are just a few of the reasons I love coding and computer science. Whether it is writing scripts, building systems, or analyzing data, I enjoy the process of problem-solving."
        /> */}
        <PictureCard
          title="Reading"
          picture={readingPicture}
          description="Stoicism, behavioral economics, and psychology are a few of my favorite subjects other than my academic and career interests. Some of my favorite books are The Black Swan by Nassim Nicholas Taleb, Thinking, Fast and Slow by Daniel Kahneman, and The Power of Habit by Charles Duhigg. Recently, I enjoyed Goodbye, Things by Fumio Sasaki. Please reach out if you have any recommendations!"
        />
        <PictureCard
          title="Walking and Hiking"
          picture={walkingPicture}
          description="There is something so peaceful about walking or hiking, especially in nature. In Minnesota, I do not get to go for many walks when it is nice out, so I make the most of the opportunities I get. Lately, I've visited my family in Utah and gone on numerous breathtaking hikes. Both walking and hiking help me disconnect from work and school and return focused."
        />
        <PictureCard
          title="Gaming"
          picture={gamingPicture}
          description="I love playing both single and multiplayer games with or without friends. Recently, I have loved Assassin's Creed; Origins, Odyssey, and Valhalla were all great, and I am excited to play Shadows soon. Cyberpunk 2077 is also great now after all of the patches. I am excited for Elder Scrolls 6 to come out after I graduate, but Avowed is a pretty good and reminded me of Skyrim, and the Oblivion remaster looks great."
        />
      </Grid>
    </>
  );
};

export default Hobbies;
