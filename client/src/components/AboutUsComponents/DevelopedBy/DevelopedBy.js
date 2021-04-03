import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, Typography } from "@material-ui/core";
import ReactCardFlip from "react-card-flip";

import useStyles from "./styles.js";
import descProfile from "./descProfile.js";

const BookSlider = () => {
  const classes = useStyles();
  const Profile = (props) => {};

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
        {descProfile.map((profile, index) => (
          <Profile key={index} profile={profile} />
        ))}
      </Carousel>
    </>
  );
};

export default BookSlider;
