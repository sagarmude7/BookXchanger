import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Carousel from "react-material-ui-carousel";
import useStyles from "./styles.js";
import "react-multi-carousel/lib/styles.css";
import descFeedback from "./descFeedback.js";
import {
  Button,
  CardContent,
  Typography,
  CardActions,
  Card,
} from "@material-ui/core";

const Feedback = () => {
  const classes = useStyles();
  const Item = (props) => {
    return (
      <div className={classes.parent}>
        <div className={classes.content}>
          <Typography variant="h6" align="center">
            {props.item.name}
          </Typography>
          <Typography variant="body1" align="center" component="p">
            {props.item.feedback}
            <br />
          </Typography>
        </div>
      </div>
    );
  };

  return (
    <>
      <hr style={{ borderWidth: "0px" }} />
      <hr style={{ borderWidth: "0px" }} />

      <Typography variant="h6" style={{ textAlign: "center", color: "black" }}>
        Testimonials
      </Typography>
      <hr style={{ border: "1px solid black", width: "300px" }} />
      <hr style={{ borderWidth: "0px" }} />

      <Carousel
        indicators={false}
        animation="slide"
        autoPlay={true}
        interval={5000}
        stopAutoPlayOnHover={false}
        navButtonsAlwaysInvisible={true}
      >
        {descFeedback.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </Carousel>
    </>
  );
};

export default Feedback;
