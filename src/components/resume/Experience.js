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
      title: "Software Engineer Intern",
      company: "Joot",
      dates: "May 2021 – Present",
      accomplishments: [
        "Expanded marketing efforts by web scraping SEC website and Form ADVs using Python and Pandas to produce a list of important officials for all 14,000+ Registered Investment Advisers with over 99% accuracy",
        "Demonstrated Joot’s capabilities to potential clients by building and deploying an API with Node.js and Google Cloud to generate a list of recommended policies based on firm's CRD number",
        "Completed data migration from version 1 to version 2 of application by creating a script to transfer 70 signed documents leveraging Node.js, MongoDB driver, Google Cloud, and HelloSign API",
      ],
    },
    {
      title: "Machine Learning Researcher",
      company: "Malware Research Group",
      dates: "October 2020 – Present",
      accomplishments: [
        "Performed feature extraction on over 100 GB of network traffic utilizing Python, Pandas, Scapy, and Miami University’s high-performance computing cluster",
        "Distinguished botnet from non-botnet traffic with over 99% accuracy on a subset of network traffic employing Scikit-learn, Python, and Pandas",
        "Presented current research findings to an audience of over 50 student researchers and professors at Miami University’s Undergraduate Research Forum",
      ],
    },
    {
      title: "Vice President of Projects",
      company: "MU Blockchain Club",
      dates: "October 2020 – Present",
      accomplishments: [
        "Developed new MU Blockchain Club website collaborating with 2 designers and using React and Material-UI",
        "Created course content for 3 classes on blockchain security, tokens and NFTs, and blockchain use cases",
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
