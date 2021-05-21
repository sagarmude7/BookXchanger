import React from "react";
import Carousel from "react-material-ui-carousel";
import useStyles from "./styles.js";
import "react-multi-carousel/lib/styles.css";
import descFeedback from "./descFeedback.js";
import { Typography } from "@material-ui/core";

const Feedback = () => {
  const classes = useStyles();
  const Item = (props) => {
    return (
      <div className={classes.parent}>
        <div className={classes.content}>
          <Typography variant="h6" align="center" className={classes.name}>
            {props.item.name}
          </Typography>
          <Typography
            variant="body1"
            align="center"
            component="p"
            className={classes.description}
          >
            {props.item.feedback}
            <br />
          </Typography>
        </div>
      </div>
    );
  };

  return (
    <>
      <div style={{ background: "rgb(234,231,220)", paddingTop: "20px" }}>
        <Typography
          variant="h6"
          style={{
            textAlign: "center",
            background: "rgb(234,231,220)",
            paddingTop: "10px",
          }}
        >
          Testimonals
        </Typography>
        <hr
          style={{
            border: "1.5px solid #8e8d8a",
            width: "300px",
            background: "rgb(234,231,220)",
            margin: "0px auto",
          }}
        />

        <Carousel
          indicators={false}
          animation="slide"
          autoPlay={true}
          interval={10000}
          stopAutoPlayOnHover={true}
          navButtonsAlwaysInvisible={false}
        >
          {descFeedback.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Feedback;
