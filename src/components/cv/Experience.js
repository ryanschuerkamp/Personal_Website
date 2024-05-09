import React from "react";
import { Typography, Grid, Divider } from "@material-ui/core";

const renderExperiences = (experiences) => {
  return experiences.map((experience, index) => {
    return (
      <div key={index}>
        <Grid item container justifyContent="space-between">
          <Typography variant="h5">{experience.company}</Typography>
          <Typography variant="body1">
            <i>{experience.dates}</i>
          </Typography>
        </Grid>
        <Typography variant="body1">
          <b>{experience.title}</b>
        </Typography>
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
  const research_experiences = renderExperiences([
    {
      title: "Research Assistant Advised by Professor Philippe Giabbanelli",
      company: "Miami University",
      dates: "October 2021 - Present",
      accomplishments: [
        "Built simulation model for the Centers for Disease Control and Prevention (CDC) to assess adolescent suicide prevention interventions and inform future intervention deployment utilizing Python, NumPy, and Pandas",
        "Discovered factors driving adolescent suicide as part of CDC-funded research by analyzing largest suicide causal map with over 360 nodes and 940 edges employing Python and NetworkX",
        "Performed a systematic review of 22 extensions of Fuzzy Cognitive Maps (FCMs), their operationalization, and use cases",
        "Created and implemented algorithms to enable interoperability of 10 extensions of FCMs using Python and NetworkX",
        "Proposed nine novel properties and evaluated three methods from social choice theory for FCM aggregation",
        "Wrote a textbook chapter on extensions of FCMs and another on analyzing FCMs with network science and graph theory",
        "Applied transfer learning and deep learning-based object detection model to detect gender in over 700 GB of historical postcards with a precision of 0.93 leveraging Python, Pandas, and OpenCV",
      ],
    },
    {
      title:
        "Research Assistant (RISS REU) Advised by Professor Artur Dubrawski and the Auton Lab",
      company: "Carnegie Mellon University",
      dates: "June 2023 - February 2024",
      accomplishments: [
        "Created a model to accurately conduct fluid resuscitation in pigs with high precision (0.8) using Python and Scikit-learn",
        "Collaborated with clinicians to create novel methods for humans and apply pigs models on two real-world human datasets of patients airlifted to the hospital employing transfer learning approaches, Python, Pandas, and Scikit-learn",
      ],
    },
    {
      title: "Research Assistant Advised by Professor Suman Bhunia",
      company: "Miami University",
      dates: "October 2020 - May 2021",
      accomplishments: [
        "Extracted features from over 100 GB of network traffic with Python, Pandas, and a high-performance computing cluster",
        "Identified botnet traffic with high sensitivity (0.93) on a subset of network traffic using Scikit-learn, Python, and Pandas",
      ],
    },
  ]);

  const industry_experiences = renderExperiences([
    {
      title: "Quantitative Research Intern",
      company: "Artisan Partners",
      dates: "December 2022 - January 2023",
      accomplishments: [
        "Applied natural language processing (sentiment analysis and tagging) algorithms to extract features from 1,000s of news articles daily employing Python, AWS SageMaker, Hugging Face, and Snowflake",
        "Constructed machine learning pipeline to predict relevance for 1,000s of articles a day utilizing Python, Pandas, Scikit-learn, Snowflake, and AWS SageMaker, saving analysts and portfolio managers hours a day",
      ],
    },
    {
      title: "Quantitative Research Intern",
      company: "Artisan Partners",
      dates: "May 2022 - August 2022",
      accomplishments: [
        "Enabled analysis of terabytes of foreign-exchange trading data through optimizing SQL query and rewriting AWS connection code in Python, reducing runtime by 97.3% and memory usage by 93.4%",
        "Transformed foreign-exchange trading strategy by analyzing terabytes of data, approximately 25 GB/day, to compute historical spreads and identify arbitrage opportunities leveraging Python, Pandas, AWS, and Snowflake",
        "Saved portfolio managers and research associates several hours each day by creating an application to scrape and recommend 1000+ news stories from 100s of sources utilizing Python, React, and Material-UI",
        "Modeled an energy company's revenue pre-earnings announcement with an adjusted R-squared of 0.94 with Python",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Joot",
      dates: "May 2021 - December 2021",
      accomplishments: [
        "Expanded marketing efforts by web scraping SEC website and Form ADVs using Python and Pandas to produce a list of important officials for all 14,000+ Registered Investment Advisers with over 99% accuracy",
        "Demonstrated Joot's capabilities to potential clients by building and deploying an API with Node.js and Google Cloud to generate a list of recommended policies based on firm's CRD number",
        "Completed data migration from version 1 to version 2 of application by creating a script to transfer 70 signed documents leveraging Node.js, MongoDB driver, Google Cloud, and HelloSign API",
      ],
    },
  ]);

  return (
    <>
      <Typography style={{ marginTop: 10 }} variant="h4">
        Research Experience
      </Typography>
      {research_experiences}
      <Divider />
      <Typography style={{ marginTop: 10 }} variant="h4">
        Industry Experience
      </Typography>
      {industry_experiences}
    </>
  );
};

export default Experience;
