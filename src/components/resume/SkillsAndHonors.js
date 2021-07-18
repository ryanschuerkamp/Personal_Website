import React from "react";
import { Typography, Divider } from "@material-ui/core";

const SkillsAndHonors = () => {
  return (
    <>
      <Typography style={{ marginTop: 10 }} variant="h4">
        Skills
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">
            Proficient Programming Languages: Python, Java, C++, R, SQL,
            JavaScript
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Web Development: Node.js, MongoDB, React, Redux, Express.js,
            Material-UI, HTML, CSS
          </Typography>
        </li>
      </ul>
      <Divider />
      <Typography style={{ marginTop: 10 }} variant="h4">
        Honors and Awards
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">
            Scholarships: Redhawk Excellence Scholarship (2020-2024), University
            Academic Scholars Scholarship (2020-2024), Bridges Program for
            Excellence Scholarship (2020-2024)
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Academic Awards: President’s List (2021, 2020), National AP Scholar
            (2020), ACT Score: 35 (2018)
          </Typography>
        </li>
      </ul>
    </>
  );
};

export default SkillsAndHonors;
