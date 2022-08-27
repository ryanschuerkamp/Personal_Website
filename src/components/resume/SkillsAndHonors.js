import React from "react";
import { Typography, Divider } from "@material-ui/core";

const renderSkillsOrHonors = (items) => {
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <li key={index}>
            <Typography variant="body1">{item}</Typography>
          </li>
        );
      })}
    </ul>
  );
};

const SkillsAndHonors = () => {
  const skills = renderSkillsOrHonors([
    "Proficient Programming Languages: Python, R, C++, SQL, JavaScript",
    "Other Technologies: Pandas, React, Node.js, MongoDB, Material-UI, Linux, Google Cloud, AWS, Git",
  ]);

  const honorsAndAwards = renderSkillsOrHonors([
    "President’s List (all semesters), Redhawk Excellence Scholarship (2020-2024), University Academic Scholars Scholarship (2020-2024), Bridges Program for Excellence Scholarship (2020-2024)",
    "Reviewer for BMC Medical Informatics and Decision Making, a Q1 Journal",
  ]);

  return (
    <>
      <Typography style={{ marginTop: 10 }} variant="h4">
        Skills
      </Typography>
      {skills}
      <Divider />
      <Typography style={{ marginTop: 10 }} variant="h4">
        Honors and Awards
      </Typography>
      {honorsAndAwards}
    </>
  );
};

export default SkillsAndHonors;
