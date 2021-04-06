import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, Typography, Grid, Container } from "@material-ui/core";
import ReactCardFlip from "react-card-flip";
import useStyles from "./styles.js";
import descProfile from "./descProfile.js";

const BookSlider = () => {
  const classes = useStyles();
  const Profile = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);

    function ProfileCardFront() {
      return (
        <Card raised className={`${classes.card} ${classes.frontCard}`}>
          <img
            // style={{
            //   clipPath: mask || "circle(50% at 50% 50%)",
            // }}
            src={props.profile.img}
            alt="Profile"
            className={classes.img}
          />
          <Typography component="span" align="center" variant="h5">
            {props.profile.name}
          </Typography>
          <Typography
            component="span"
            align="center"
            variant="subtitle1"
            style={{ padding: "0 0.25rem" }}
          >
            {props.profile.subHeading}
          </Typography>
        </Card>
      );
    }

    function ProfileCardBack() {
      return (
        <Card
          raised
          className={`${classes.card} ${classes.backCard}`}
          style={{
            backgroundImage: `url(${props.profile.img})`,
          }}
        >
          <div className={classes.backCardContent}>
            <Typography component="span" align="center" variant="h4">
              {props.profile.name}
            </Typography>
            <Typography component="span" align="center" variant="h5">
              {props.profile.subHeading}
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

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      profile: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      profile: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 460 },
      profile: 2,
    },
    mobile: {
      breakpoint: { max: 460, min: 0 },
      profile: 1,
    },
  };

  return (
    <>
      <Typography variant="h6" style={{ textAlign: "center", color: "black" }}>
        Developed By-
      </Typography>
      <hr style={{ border: "1px solid black", width: "300px" }} />
      <hr style={{ borderWidth: "0px" }} />

      <Carousel
        responsive={responsive}
        arrows={false}
        infinite={true}
        autoPlay={true}
      >
        <div>Item1</div>
        {descProfile.map((profile, index) => (
          <Grid>
            <Container>
              <Profile key={index} profile={profile} />
            </Container>
          </Grid>
        ))}
      </Carousel>
    </>
  );
};

export default BookSlider;
