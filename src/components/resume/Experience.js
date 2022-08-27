import React from "react";
import { Typography, Grid } from "@material-ui/core";

const renderExperiences = (experiences) => {
  return experiences.map((experience, index) => {
    return (
      <div key={index}>
        <Grid item container justifyContent="space-between">
          <Typography style={{ marginRight: 10 }} variant="h6">
            {experience.title}
          </Typography>
          <Typography variant="h6">{experience.company}</Typography>
          <Typography variant="h6">{experience.dates}</Typography>
        </Grid>
        <Typography component="div" variant="body1">
          <ul>
            {experience.accomplishments.map((accomplishment, index) => {
              return <li key={index}>{accomplishment}</li>;
            })}
          </ul>
        </Typography>
      </div>
    );
  });
};

const Experience = () => {
  const experiences = renderExperiences([
    {
      title: "Quantitative Research Intern",
      company: "Artisan Partners",
      dates: "May 2022 – August 2022",
      accomplishments: [
        "Enabled analysis of terabytes of foreign-exchange trading data by reducing memory usage by 93.4% and runtime by 97.3% by optimizing SQL query and rewriting AWS connection code in Python",
        "Transformed foreign-exchange trading strategy by analyzing terabytes of data, approximately 25 GB/day, to compute historical spreads and identify arbitrage opportunities leveraging Python, Pandas, AWS, and Snowflake",
        "Saved portfolio managers and research associates several hours each day by creating an application to scrape and recommend 1000+ news stories from 100s of sources utilizing Python, React, and Material-UI",
        "Modeled an energy company’s revenue pre-earnings announcement with 97% accuracy with Python and Pandas",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Joot",
      dates: "May 2021 – December 2021",
      accomplishments: [
        "Expanded marketing efforts by web scraping SEC website and Form ADVs using Python and Pandas to produce a list of important officials for all 14,000+ Registered Investment Advisers with over 99% accuracy",
        "Demonstrated Joot’s capabilities to potential clients by building and deploying an API with Node.js and Google Cloud to generate a list of recommended policies based on firm's CRD number",
        "Completed data migration from version 1 to version 2 of application by creating a script to transfer 70 signed documents leveraging Node.js, MongoDB driver, Google Cloud, and HelloSign API",
      ],
    },
  ]);

  return (
    <>
      <Typography style={{ marginTop: 10 }} variant="h4">
        Experience
      </Typography>
      {experiences}
    </>
  );
};

export default Experience;
