import React from "react";
import {
  Grid,
  Typography,
  Hidden,
  Divider,
  Link,
  Button,
} from "@material-ui/core";

import Sidebar from "./sidebar/Sidebar";
import Footer from "./Footer";

const generatePaperList = (papers) => {
  return papers.map((paper) => {
    return (
      <Typography style={{ marginTop: 10, marginBottom: 20 }} variant="body1">
        <i>{paper.title}</i>
        <br />
        {paper.authors.map((author) => {
          return (
            <>
              {author === "R. Schuerkamp, " || author === "R. Schuerkamp" ? (
                <b>{author}</b>
              ) : (
                author
              )}
            </>
          );
        })}
        <br />
        {paper.venueYear}
        {(paper.paperLink && paper.codeLink && (
          <>
            <br />
            <Button
              variant="outlined"
              style={{ marginRight: 10, marginTop: 5 }}
            >
              <Link href={paper.paperLink} target="_blank" rel="noopener">
                Paper
              </Link>
            </Button>
            <Button variant="outlined" style={{ marginTop: 5 }}>
              <Link href={paper.codeLink} target="_blank" rel="noopener">
                Code
              </Link>
            </Button>
          </>
        )) ||
          (paper.paperLink && (
            <>
              <br />
              <Button
                variant="outlined"
                style={{ marginRight: 10, marginTop: 5 }}
              >
                <Link href={paper.paperLink} target="_blank" rel="noopener">
                  Paper
                </Link>
              </Button>
            </>
          )) ||
          (paper.codeLink && (
            <>
              <br />
              <Button variant="outlined" style={{ marginTop: 5 }}>
                <Link href={paper.codeLink} target="_blank" rel="noopener">
                  Code
                </Link>
              </Button>
            </>
          ))}
      </Typography>
    );
  });
};

const journalArticles = generatePaperList([
  {
    title: "Extensions of Fuzzy Cognitive Maps: A Systematic Review",
    authors: ["R. Schuerkamp, ", "P. J. Giabbanelli"],
    venueYear: "ACM Computing Surveys (CSUR), 2023",
    paperLink: "https://dl.acm.org/doi/10.1145/3610771",
  },
  {
    title:
      "Simulation Models for Suicide Prevention: A Survey of the State-of-the-Art",
    authors: [
      "R. Schuerkamp, ",
      "L. Liang, ",
      "K. L. Rice, ",
      "P. J. Giabbanelli",
    ],
    venueYear:
      "Computational Modeling of Social Processes and Social Networks, special issue of Computers, 2023",
    paperLink: "https://www.mdpi.com/2073-431X/12/7/132",
  },
  {
    title:
      "Enabling New Interactions With Library Digital Collections: Automatic Gender Recognition In Historical Postcards Via Deep Learning",
    authors: [
      "R. Schuerkamp, ",
      "J. Barrett, ",
      "A. Bales, ",
      "A. Wegner, ",
      "P. J. Giabbanelli",
    ],
    venueYear: "The Journal of Academic Librarianship, 2023",
    paperLink:
      "https://www.sciencedirect.com/science/article/pii/S0099133323000757",
    codeLink: "https://zenodo.org/record/7689513",
  },
]);

const conferencePapers = generatePaperList([
  {
    title:
      "How to Combine Models? Principles and Mechanisms to Aggregate Fuzzy Cognitive Maps",
    authors: [
      "R. Schuerkamp, ",
      "P. J. Giabbanelli, ",
      "U. Grandi, ",
      "S. Doutre.",
    ],
    venueYear: "Winter Simulation Conference (WSC), 2023",
  },
  {
    title:
      "Facilitating the Interoperability and Reuse of Extensions of Fuzzy Cognitive Maps",
    authors: ["R. Schuerkamp, ", "P. J. Giabbanelli, ", "N. Daclin"],
    venueYear: "Annual Modeling And Simulation Conference (ANNSIM), 2023",
    paperLink: "https://ieeexplore.ieee.org/abstract/document/10155381",
    codeLink: "https://osf.io/n4cvg/",
  },
]);

const abstracts = generatePaperList([
  {
    title:
      "Adapting Animal Models to Assess Sufficiency of Fluid Resuscitation in Humans",
    authors: [
      "R. Schuerkamp, ",
      "X. Li, ",
      "B. Kunzer, ",
      "L. S. Weiss, ",
      "H. Gómez, ",
      "F. X. Guyette, ",
      "M. R. Pinsky, ",
      "A. Dubrawski",
    ],
    venueYear: "AAAI Conference on Artificial Intelligence (AAAI), 2024",
  },
]);

const textbookChapters = generatePaperList([
  {
    title: "Analysis of Fuzzy Cognitive Maps",
    authors: ["R. Schuerkamp, ", "P. J. Giabbanelli"],
    venueYear: "Fuzzy Cognitive Maps: Best Practices and Modern Methods, 2023",
  },
  {
    title: "Extensions of Fuzzy Cognitive Maps",
    authors: ["R. Schuerkamp, ", "P. J. Giabbanelli"],
    venueYear: "Fuzzy Cognitive Maps: Best Practices and Modern Methods, 2023",
  },
]);

const underReviewPapers = generatePaperList([
  {
    title:
      "Guiding Prevention Initiatives by Applying Network Analysis to Causal Maps of Adverse Childhood Experiences and Adolescent Suicide",
    authors: [
      "B. D. Maldonado, ",
      "R. Schuerkamp, ",
      "C. M. Martin, ",
      "K. L. Rice, ",
      "Nisha Nataraj, ",
      "M. M. Brown, ",
      "C. R. Harper, ",
      "C. Florence, ",
      "P. J. Giabbanelli",
    ],
  },
]);

const inPrepPapers = generatePaperList([
  {
    title:
      "Leveraging Large Language Models to Resolve Agents' Cognitive Dissonance",
    authors: ["R. Schuerkamp, ", "H. Ahlstrom, ", "P. J. Giabbanelli"],
  },
  {
    title:
      "An Artificial Intelligence Approach to Support Youth Suicide Prevention Initiatives in the U.S.A",
    authors: [
      "L. Liang, ",
      "R. Schuerkamp, ",
      "K. L. Rice, ",
      "M. M. Brown, ",
      "N. Nataraj, ",
      "J. Mendoza-Alonzo, ",
      "C. R. Harper, ",
      "C. Florence, ",
      "B. D. Maldonado, ",
      "B. Moran, ",
      "P. J. Giabbanelli",
    ],
  },
  {
    title:
      "Impact of Policies, Practices, and Programs on Preventing Adolescent Suicide: An Agent-Based Modeling Approach",
    authors: [
      "K. L. Rice, ",
      "P. J. Giabbanelli, ",
      "M. M. Brown, ",
      "N. Nataraj, ",
      "C. R. Harper, ",
      "L. Liang, ",
      "R. Schuerkamp, ",
      "C. Florence",
    ],
  },
]);

const Papers = () => {
  return (
    <Grid container>
      <Hidden mdDown={true}>
        <Grid item lg={4}>
          <Sidebar />
        </Grid>
      </Hidden>
      <Grid item container xs={12} lg={7} direction="column">
        <Grid item container>
          <Grid item xs={1} lg={false} />
          <Grid item xs={10} lg={11}>
            <Typography
              style={{ marginBottom: 10, marginTop: 10 }}
              variant="h2"
            >
              Papers
            </Typography>
            <Divider />
            <Typography
              style={{ marginTop: 10, marginBottom: 10 }}
              variant="body1"
            >
              I am interested in trustworthy{"\u2013"}interpretable, robust, and
              fair{"\u2013"}machine learning and its health applications. I plan
              on joining a Ph.D. program starting in the fall of 2024 to pursue
              these interests. If you are interested in discussing research,
              please feel free to email me at schuerr2 at miamioh dot edu.
            </Typography>
            <Typography
              style={{ marginTop: 10, marginBottom: 10 }}
              variant="body1"
            >
              See{" "}
              <Link
                href="https://scholar.google.com/citations?user=rXTEtMEAAAAJ&hl=en&oi=ao"
                target="_blank"
                rel="noopener"
              >
                my google scholar profile
              </Link>{" "}
              for updated links to papers.
            </Typography>

            <Typography
              style={{ marginBottom: 10, marginTop: 10 }}
              variant="h4"
            >
              Journal Articles
            </Typography>
            <Divider />
            {journalArticles}

            <Typography
              style={{ marginBottom: 10, marginTop: 10 }}
              variant="h4"
            >
              Peer-reviewed Conference Articles
            </Typography>
            <Divider />
            {conferencePapers}

            <Typography
              style={{ marginBottom: 10, marginTop: 10 }}
              variant="h4"
            >
              Peer-reviewed Abstracts
            </Typography>
            <Divider />
            {abstracts}

            <Typography
              style={{ marginBottom: 10, marginTop: 10 }}
              variant="h4"
            >
              Textbook Chapters
            </Typography>
            <Divider />
            {textbookChapters}

            <Typography
              style={{ marginBottom: 10, marginTop: 10 }}
              variant="h4"
            >
              Under Review
            </Typography>
            <Divider />
            {underReviewPapers}
            <Typography
              style={{ marginBottom: 10, marginTop: 10 }}
              variant="h4"
            >
              In Preparation
            </Typography>
            <Divider />
            {inPrepPapers}
          </Grid>
        </Grid>
        <Hidden lgUp={true}>
          <Footer />
        </Hidden>
      </Grid>
      <Grid item xs={1} />
    </Grid>
  );
};

export default Papers;
