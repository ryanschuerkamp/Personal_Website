import React from "react";
import clsx from "clsx";
import {
  Grid,
  Typography,
  IconButton,
  Collapse,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ExpandMore } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const generateCourseList = (courses) => {
  return courses.map((course) => {
    return (
      <li key={course[1]}>
        <Link href={course[0]} target="_blank" rel="noopener">
          {course[1]}
        </Link>
      </li>
    );
  });
};

const generateExpandButton = (
  classes,
  handleExpandClick,
  type,
  expanded,
  list
) => {
  return (
    <>
      <IconButton
        onClick={() => handleExpandClick(type)}
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
      >
        <ExpandMore />
      </IconButton>
      <Collapse in={expanded} timeout="auto">
        <ul>{list}</ul>
      </Collapse>
    </>
  );
};

const Education = () => {
  const classes = useStyles();
  const [cseExpanded, setCSEExpanded] = React.useState(false);
  const [staExpanded, setSTAExpanded] = React.useState(false);
  const [mthExpanded, setMTHExpanded] = React.useState(false);

  const handleExpandClick = (type) => {
    if (type === "CSE") {
      setCSEExpanded(!cseExpanded);
    } else if (type === "STA") {
      setSTAExpanded(!staExpanded);
    } else if (type === "MTH") {
      setMTHExpanded(!mthExpanded);
    }
  };

  const cseList = generateCourseList([
    [
      "https://www.miamioh.edu/cec/academics/departments/cse/academics/course-descriptions/cse-620/index.html",
      "620C Network Analysis and Modeling",
    ],
    [
      "https://www.miamioh.edu/cec/academics/departments/cse/academics/course-descriptions/cse-491/index.html",
      "491 Undergraduate Research: Modeling Complex Social Systems",
    ],
    [
      "https://www.miamioh.edu/cec/academics/departments/cse/academics/course-descriptions/cse-467-567/index.html",
      "467 Computer and Network Security",
    ],
    [
      "https://www.miamioh.edu/cec/academics/departments/cse/academics/course-descriptions/cse-385/index.html",
      "385 Database Systems",
    ],
    [
      "https://www.miamioh.edu/cec/academics/departments/cse/academics/course-descriptions/cse-383/index.html",
      "383 Web Application Programming",
    ],
    [
      "https://www.miamioh.edu/cec/academics/departments/cse/academics/course-descriptions/cse-381/index.html",
      "381 Systems 2",
    ],
    [
      "https://www.miamioh.edu/cec/academics/departments/cse/academics/course-descriptions/cse-374/index.html",
      "374 Algorithms",
    ],
    [
      "https://www.miamioh.edu/cec/academics/departments/cse/academics/course-descriptions/cse-278/index.html",
      "278 Systems 1",
    ],
    [
      "https://www.miamioh.edu/cec/academics/departments/cse/academics/course-descriptions/cse-274/index.html",
      "274 Data Abstractions & Structures",
    ],
    [
      "https://www.miamioh.edu/cec/academics/departments/cse/academics/course-descriptions/cse-271/index.html",
      "271 Object-Oriented Programming",
    ],
    [
      "https://www.miamioh.edu/cec/academics/departments/cse/academics/course-descriptions/cse-201/index.html",
      "201 Intro to Software Engineering",
    ],
  ]);

  const staList = generateCourseList([
    [
      "https://bulletin.miamioh.edu/search/?search=STA+463",
      "463 Regression Analysis",
    ],
    [
      "https://bulletin.miamioh.edu/search/?P=STA%20462",
      "462 Inferential Statistics",
    ],
    ["https://bulletin.miamioh.edu/search/?P=STA%20401", "401 Probability"],
    [
      "https://bulletin.miamioh.edu/search/?P=STA%20363",
      "363 Introduction to Statistical Modeling",
    ],
  ]);

  const mthList = generateCourseList([
    [
      "https://bulletin.miamioh.edu/search/?search=MTH+447",
      "447 Topics in Mathematical Finance",
    ],
    [
      "https://bulletin.miamioh.edu/search/?P=MTH%20331",
      "331 Proof: Introduction to Higher Mathematics",
    ],
    ["https://bulletin.miamioh.edu/search/?P=MTH%20252", "252 Calculus III"],
    [
      "https://bulletin.miamioh.edu/search/?P=MTH%20231",
      "231 Elements of Discrete Mathematics",
    ],
    [
      "https://bulletin.miamioh.edu/search/?P=MTH%20222",
      "222 Introduction to Linear Algebra",
    ],
  ]);

  const cseButton = generateExpandButton(
    classes,
    handleExpandClick,
    "CSE",
    cseExpanded,
    cseList
  );

  const staButton = generateExpandButton(
    classes,
    handleExpandClick,
    "STA",
    staExpanded,
    staList
  );

  const mthButton = generateExpandButton(
    classes,
    handleExpandClick,
    "MTH",
    mthExpanded,
    mthList
  );

  return (
    <>
      <Typography style={{ marginTop: 10 }} variant="h4">
        Education
      </Typography>
      <Grid item container justifyContent="space-between">
        <Typography variant="h6">Miami University</Typography>
        <Typography variant="h6">August 2020 - May 2024</Typography>
      </Grid>
      <Typography component="div" variant="body1">
        <ul>
          <li>
            B.S. and M.S. in Computer Science, B.S. in Data Science and
            Statistics, Minor in Mathematics
          </li>
          <li>GPA: 4.00</li>
          <li>
            University Honors Program and Computing and Engineering Scholar
          </li>
          <li>Relevant Courses:</li>
          <ul>
            <li>Computer Science (CSE) {cseButton}</li>
          </ul>
          <ul>
            <li>Data Science and Statistics (STA) {staButton}</li>
          </ul>
          <ul>
            <li>Mathematics (MTH) {mthButton}</li>
          </ul>
        </ul>
      </Typography>
    </>
  );
};

export default Education;
