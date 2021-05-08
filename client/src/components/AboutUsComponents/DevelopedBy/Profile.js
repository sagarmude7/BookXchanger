import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import { Card, Typography, Link } from "@material-ui/core";
import ReactCardFlip from "react-card-flip";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import useStyles from "./styles.js";

const Profile = ({ name, subHeading, img, github, linkedin }) => {
  const classes = useStyles();
  const [isFlipped, setIsFlipped] = useState(false);

  const ProfileCardFront = () => {
    return (
      <Card raised className={`${classes.card} ${classes.frontCard}`}>
        <img src={img} alt="Profile" className={classes.img} />
        <Typography component="span" align="center" variant="h5">
          {name}
        </Typography>
        <Typography
          component="span"
          align="center"
          variant="subtitle1"
          style={{ padding: "0 0.25rem" }}
        >
          {subHeading}
        </Typography>
      </Card>
    );
  };

  const ProfileCardBack = () => {
    return (
      <Card
        raised
        className={`${classes.card} ${classes.backCard}`}
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className={classes.backCardContent}>
          <Typography component="span" align="center" variant="h5">
            {name}
          </Typography>
          <Typography component="span" align="center" variant="h6">
            {subHeading}
          </Typography>
          <div className={classes.socialLink}>
            <Link href={github} target="_blank" color="inherit">
              <GitHubIcon className={classes.Icon} />
            </Link>
            <Link href={linkedin} target="_blank" color="inherit">
              <LinkedInIcon className={classes.Icon} />
            </Link>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection="horizontal"
      flipSpeedBackToFront="0.2"
      flipSpeedFrontToBack="0.3"
    >
      <div
        className=""
        key="front"
        onClick={() => setIsFlipped((prev) => !prev)}
      >
        <ProfileCardFront />
      </div>
      <div
        className=""
        key="back"
        onClick={() => setIsFlipped((prev) => !prev)}
      >
        <ProfileCardBack />
      </div>
    </ReactCardFlip>
  );
};

export default Profile;
