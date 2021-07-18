import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 200,
    marginTop: 20,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

const renderDescriptionList = (description) => {
  return description.map((item, index) => {
    return <li key={index}>{item}</li>;
  });
};

const ProjectCard = (props) => {
  const classes = useStyles();

  const { title, date, image, description, github, url, noLinkMessage } = props;

  return (
    <Card raised className={classes.root}>
      <CardActionArea>
        <CardHeader title={title} subheader={date} />
        <CardMedia className={classes.media} image={image} />
        <CardContent>
          <Typography variant="body1" component="div">
            <ul>
              {description && renderDescriptionList(description)}
              {github && (
                <Typography variant="body1">
                  <li>
                    <Link href={github} target="_blank" rel="noopener">
                      GitHub
                    </Link>
                  </li>
                </Typography>
              )}
              {url && (
                <Typography variant="body1">
                  <li>
                    URL:{" "}
                    <Link href={url} target="_blank" rel="noopener">
                      {url}
                    </Link>
                  </li>
                </Typography>
              )}
              {noLinkMessage && <li>{noLinkMessage}</li>}
            </ul>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
