import React from "react";
import { Grid, Typography } from "@material-ui/core";
import PictureCard from "./PictureCard";

import weightsPicture from "./images/weights.jpeg";
import cookingPicture from "./images/cooking.jpeg";
import codingPicture from "./images/coding.jpeg";
import readingPicture from "./images/reading.jpeg";
import gamingPicture from "./images/gaming.jpeg";
import walkingPicture from "./images/walking.jpeg";

const Hobbies = () => {
  return (
    <>
      <Typography style={{ marginBottom: 10, marginTop: 10 }} variant="h3">
        Hobbies
      </Typography>
      <Grid container>
        <PictureCard
          title="Working Out"
          picture={weightsPicture}
          description="Almost every day, I eagerly wait for my workout. I love it all, even cardio. Pushing my limits, refining my workouts and diet, and seeing gradual progress over the last few years have been immensely gratifying. Helping my interested friends get started and seeing their progress has been even more rewarding."
        />
        <PictureCard
          title="Cooking"
          picture={cookingPicture}
          description="Initially, I was not the biggest fan of cooking, but now I love it. With practice and help from my family, I can now quickly cook healthy, delicious meals. At the moment, I am pretty good at grilling and cooking proteins. Over break, I want to learn how to cook more vegetables and carbs and make more complete meals."
        />
        <PictureCard
          title="Coding"
          picture={codingPicture}
          description="Seeing what problems I can solve and what I can build through code, the logic and planning that goes into a well-designed solution, and learning technologies to tackle new problems are just a few of the reasons I love coding and computer science. Whether it is working on web applications, writing scripts, or building systems, I enjoy the process of problem-solving."
        />
        <PictureCard
          title="Reading"
          picture={readingPicture}
          description="Stoicism, behavioral economics, and psychology are just a few of the diverse subjects I recently explored. Some of my favorite books are The Black Swan by Nassim Nicholas Taleb, Thinking, Fast and Slow by Daniel Kahneman, and The Power of Habit by Charles Duhigg. Please reach out if you have any recommendations!"
        />

        <PictureCard
          title="Gaming"
          picture={gamingPicture}
          description="I love playing both single and multiplayer games with or without friends. Recently, I loved Assassin’s Creed; Origins, Odyssey, and Valhalla were all great. Cyberpunk 2077 is also good now after all of the patches. I am thrilled for Dying Light 2 and Starfield to come out soon and Elder Scrolls 6 probably after I graduate."
        />
        <PictureCard
          title="Walking"
          picture={walkingPicture}
          description="There is something so peaceful about throwing in earbuds and going for a walk, especially in nature. In Minnesota, I do not get to go for many walks when it is nice out, so I make the most of the opportunities I get. Going on walks is a beautiful thing that helps me disconnect from work and school momentarily and return focused."
        />
      </Grid>
    </>
  );
};

export default Hobbies;
