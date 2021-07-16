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
    maxWidth: 1300,
    marginTop: 20,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

const renderDescriptionList = (description) => {
  return description.map((item) => {
    return <li>{item}</li>;
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
          <Typography variant="body1" component="p">
            <ul>
              {description && renderDescriptionList(description)}
              {github && (
                <Typography variant="body1" component="p">
                  <li>
                    Github:{" "}
                    <Link href={github} target="_blank">
                      {github}
                    </Link>
                  </li>
                </Typography>
              )}
              {url && (
                <Typography variant="body1" component="p">
                  <li>
                    URL:{" "}
                    <Link href={url} target="_blank">
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
