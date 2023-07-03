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
      title:
        "Robotics Institute Summer Scholar (RISS REU) Advised by Professor Artur Dubrawski",
      company: "Carnegie Mellon University",
      dates: "June 2023 - Present",
      accomplishments: [
        "Developing a machine learning approach for fluid resuscitation sufficiency analysis leveraging human and pig data",
      ],
    },

    {
      title: "Research Assistant Advised by Professor Philippe Giabbanelli",
      company: "Miami University",
      dates: "October 2021 - Present",
      accomplishments: [
        "Built simulation model for the Centers for Disease Control and Prevention (CDC) to assess adolescent suicide prevention interventions and inform future intervention deployment utilizing Python, NumPy, and Pandas",
        "Applied transfer learning and deep learning-based object detection model to detect gender in over 700 GB of historical postcards with a precision of 93% leveraging Python, Pandas, and OpenCV",
        "Created and implemented 26 algorithms to enable interoperability of simulation models using Python and NetworkX",
        "Performed and submitted a systematic review of 22 extensions of Fuzzy Cognitive Maps, their features, operationalization, strengths and weaknesses, potential use cases, and maturity",
        "Discovered factors driving adolescent suicide as part of CDC-funded research by analyzing the largest suicide causal map with over 360 nodes and 940 edges employing Python and NetworkX",
      ],
    },
    {
      title: "Research Assistant Advised by Professor Suman Bhunia",
      company: "Miami University",
      dates: "October 2020 - May 2021",
      accomplishments: [
        "Performed feature extraction on over 100 GB of network traffic utilizing Python, Pandas, Scapy, and Miami University’s high-performance computing cluster",
        "Distinguished botnet from non-botnet traffic with high sensitivity (0.93 on a quality scale of 1.0) on a subset of network traffic employing Scikit-learn, Python, and Pandas",
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
        "Enabled analysis of terabytes of foreign-exchange trading data by reducing memory usage by 93.4% and runtime by 97.3% by optimizing SQL query and rewriting AWS connection code in Python",
        "Transformed foreign-exchange trading strategy by analyzing terabytes of data, approximately 25 GB/day, to compute historical spreads and identify arbitrage opportunities leveraging Python, Pandas, AWS, and Snowflake",
        "Saved portfolio managers and research associates several hours each day by creating an application to scrape and recommend 1000+ news stories from 100s of sources utilizing Python, React, and Material-UI",
        "Modeled an energy company's revenue pre-earnings announcement with 97% accuracy with Python and Pandas",
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
