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
        {course[0].length > 0 && (
          <Link href={course[0]} target="_blank" rel="noopener">
            {course[1]}
          </Link>
        )}
        {course[0].length === 0 && course[1]}
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
  const [phdExpanded, setPHDExpanded] = React.useState(false);

  const handleExpandClick = (type) => {
    if (type === "CSE") {
      setCSEExpanded(!cseExpanded);
    } else if (type === "STA") {
      setSTAExpanded(!staExpanded);
    } else if (type === "MTH") {
      setMTHExpanded(!mthExpanded);
    } else if (type === "PHD") {
      setPHDExpanded(!phdExpanded);
    }
  };

  const cseList = generateCourseList([
    [
      "https://miamioh.edu/cec/academics/departments/cse/academics/course-descriptions/cse-700/index.html",
      "700 Research for Master's Thesis",
    ],
    [
      "https://miamioh.edu/cec/departments/computer-science-software-engineering/academics/course-descriptions/cse-courses/cse-690.html",
      "690 Graduate Research",
    ],
    [
      "https://miamioh.edu/cec/academics/departments/cse/academics/course-descriptions/cse-627/index.html",
      "627 Machine Learning",
    ],
    [
      "https://www.miamioh.edu/cec/academics/departments/cse/academics/course-descriptions/cse-620/index.html",
      "620E Predictive Models for Health",
    ],
    [
      "https://www.miamioh.edu/cec/academics/departments/cse/academics/course-descriptions/cse-620/index.html",
      "620C Network Analysis and Modeling",
    ],
    [
      "https://miamioh.edu/cec/academics/departments/cse/academics/course-descriptions/cse-488-588/index.html",
      "588 Image Processing and Computer Vision",
    ],
    [
      "https://miamioh.edu/cec/academics/departments/cse/academics/course-descriptions/cse-432-532/index.html",
      "532 Machine Learning",
    ],
    [
      "https://www.miamioh.edu/cec/academics/departments/cse/academics/course-descriptions/cse-491/index.html",
      "491 Undergraduate Research",
    ],
    [
      "https://www.miamioh.edu/cec/academics/departments/cse/academics/course-descriptions/cse-467-567/index.html",
      "467 Computer and Network Security",
    ],
    [
      "https://www.miamioh.edu/cec/academics/departments/cse/academics/course-descriptions/cse-465-565/index.html",
      "465 Comparative Programming Languages",
    ],
    [
      "https://miamioh.edu/cec/academics/departments/cse/academics/course-descriptions/cse-449/index.html",
      "449 Senior Design Project II",
    ],
    [
      "https://miamioh.edu/cec/academics/departments/cse/academics/course-descriptions/cse-448/index.html",
      "448 Senior Design Project I",
    ],
    [
      "https://miamioh.edu/cec/departments/computer-science-software-engineering/academics/course-descriptions/cse-courses/cse-443.html",
      "443 High Performance Computing",
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
      "https://bulletin.miamioh.edu/search/?P=STA%20467",
      "567 Statistical Learning",
    ],
    [
      "https://bulletin.miamioh.edu/search/?P=STA%20483",
      "483 Analysis of Forecasting Systems",
    ],
    [
      "https://bulletin.miamioh.edu/search/?P=STA%20466",
      "466 Experimental Design Methods",
    ],
    [
      "https://bulletin.miamioh.edu/search/?search=STA+463",
      "463 Regression Analysis",
    ],
    [
      "https://bulletin.miamioh.edu/search/?P=STA%20462",
      "462 Inferential Statistics",
    ],
    [
      "https://bulletin.miamioh.edu/search/?P=STA%20427",
      "427 Bayesian Statistics",
    ],
    [
      "https://bulletin.miamioh.edu/search/?P=STA%20404",
      "404 Advanced Data Visualization",
    ],
    ["https://bulletin.miamioh.edu/search/?P=STA%20401", "401 Probability"],
    [
      "https://bulletin.miamioh.edu/search/?P=STA%20363",
      "363 Introduction to Statistical Modeling",
    ],
  ]);

  const mthList = generateCourseList([
    ["", "433 Applied Linear Algebra"],
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

  const phdList = generateCourseList([
    [
      "https://www.cs.cmu.edu/~nihars/teaching/10715-Fa23/index.html",
      "10-715 Advanced Introduction to Machine Learning",
    ],
    [
      "https://www.stat.cmu.edu/~larry/=stat705/",
      "36-705 Intermediate Statistics",
    ],
    [
      "https://www.cs.cmu.edu/~pradeepr/716/", 
      "10-716: Advanced Machine Learning: Theory and Methods",
    ],
    [
      "https://www.cmu.edu/tepper/programs/courses/47830.html",
      "47-830/47-831 Integer Programming/Advanced Integer Programming"
    ],
    [
      "https://interactive-learning-algos.github.io/",
      "17-740 Algorithmic Foundations of Interactive Learning"
    ]
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

  const phdButton = generateExpandButton(
    classes,
    handleExpandClick,
    "PHD",
    phdExpanded,
    phdList
  );

  return (
    <>
      <Typography style={{ marginTop: 10 }} variant="h4">
        Education
      </Typography>
      <Grid item container justifyContent="space-between">
        <Typography variant="h5">Carnegie Mellon University</Typography>
        <Typography variant="body1">
          <i>August 2024 - May 2028</i>
        </Typography>
      </Grid>
      <Grid item container justifyContent="space-between">
        <Typography variant="body1">
          <b>Ph.D. in Robotics, School of Computer Science</b>
        </Typography>
      </Grid>
      <Typography component="div" variant="body1">
        <ul>
          <li>Advised by Geoff Gordon</li>
          <li>Courses {phdButton}</li>
        </ul>
      </Typography>
      <Grid item container justifyContent="space-between">
        <Typography variant="h5">Miami University</Typography>
        <Typography variant="body1">
          <i>August 2020 - May 2024</i>
        </Typography>
      </Grid>
      <Grid item container justifyContent="space-between">
        <Typography variant="body1">
          <b>
            Combined B.S./M.S. in Computer Science, <i>summa cum laude</i><br />
            B.S. in Data Science and Statistics, <i>summa cum laude</i>
          </b>
        </Typography>
      </Grid>
      <Typography component="div" variant="body1">
        <ul>
          <li>
            Completed five-year combined B.S./M.S. and an additional B.S. in
            four years
          </li>
          <li>
            Thesis: Applications Of Large Language Models, Aggregation
            Algorithms, And Extensions For Fuzzy Cognitive Maps
          </li>
          <li>
            Relevant Graduate Courses: Machine Learning, Statistical Learning,
            Predictive Models for Health, Network Science
          </li>
          <li>
            Relevant Undergraduate Courses: Linear Algebra, Proofs, Calculus 3,
            Probability, Bayesian Statistics, Algorithms
          </li>
          <li>All Computer Science, Mathematics, and Statistics Courses:</li>
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
