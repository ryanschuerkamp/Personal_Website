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
    "Proficient Programming Languages: Python, Java, C++, SQL, JavaScript, R",
    "Other Technologies: Node.js, React, MongoDB, Material-UI, Google Cloud, GitHub",
  ]);

  const honorsAndAwards = renderSkillsOrHonors([
    "Scholarships: Redhawk Excellence Scholarship (2020-2024), University Academic Scholars Scholarship (2020-2024), Bridges Program for Excellence Scholarship (2020-2024)",
    "Academic Awards: President’s List (2021, 2020), National AP Scholar (2020), ACT Score: 35 (2018)",
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
