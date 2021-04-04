import React, {useState} from "react";
import "react-multi-carousel/lib/styles.css";
import { Card, Typography} from "@material-ui/core";
import ReactCardFlip from "react-card-flip";

import useStyles from "./styles.js";


const Profile = ({name,subHeading,img,github,linkedin}) => {
   const classes = useStyles();
  const [isFlipped, setIsFlipped] = useState(false);

  const ProfileCardFront = ()=> {
    return (
      <Card raised className={`${classes.card} ${classes.frontCard}`}>
        <img
          // style={{
          //   clipPath: mask || "circle(50% at 50% 50%)",
          // }}
          src={img}
          alt="Profile"
          className={classes.img}
        />
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
  }

  const ProfileCardBack = ()=> {
    return (
      <Card
        raised
        className={`${classes.card} ${classes.backCard}`}
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className={classes.backCardContent}>
          <Typography component="span" align="center" variant="h4">
            {name}
          </Typography>
          <Typography component="span" align="center" variant="h5">
            {subHeading}
          </Typography>
        </div>
      </Card>
    );
  }

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
