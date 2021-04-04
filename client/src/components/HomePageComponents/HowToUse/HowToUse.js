import React, { useEffect, useState } from "react";
import descBuyer from "./descBuyer.js";
import descSeller from "./descSeller.js";
import useStyles from "./styles.js";
import Carousel from "react-material-ui-carousel";
import {
  Button,
  CardContent,
  Typography,
  CardActions,
  Card,
  Grid,
} from "@material-ui/core";

const HowToSell = () => {
  const classes = useStyles();

  const Buyer = (props) => {
    return (
      <div className={classes.parent}>
        <div
          className={classes.paper}
          // style={{
          //  backgroundImage: "url(" + props.buyer.img + ")",
          //  }}
        >
          <img
            src={props.buyer.img}
            style={{ height: "300px", width: "300px", color: "#df4c73" }}
          />

          {/* <div className={classes.content}>
            <Typography variant="h3">{props.buyer.heading}</Typography>
            <Typography variant="h5">{props.buyer.subHeading}</Typography>
          </div> */}
        </div>
      </div>
    );
  };

  const Seller = (props) => {
    return (
      <div className={classes.parent}>
        <div
          className={classes.paper}
          style={{
            backgroundImage: "url(" + props.seller.img + ")",
          }}
        >
          {/* <div>
            <Typography variant="h3">{props.seller.heading}</Typography>
            <Typography variant="h5">{props.seller.subHeading}</Typography>
          </div> */}
        </div>
      </div>
    );
  };

  return (
    <>
      <Typography
        variant="h6"
        style={{ textAlign: "center", color: "black", marginTop: "25px" }}
      >
        How to use BookXchanger ?
      </Typography>
      <hr style={{ border: "1px solid black", width: "300px" }} />
      <hr style={{ borderWidth: "0px" }} />

      <div className={classes.main}>
        <div className={classes.buy}>
          <div>
            <Typography variant="h6" align="center">
              For Buyers
            </Typography>
          </div>
          <div>
            <Carousel
              indicators={false}
              animation="fade"
              autoPlay={true}
              interval={5000}
              stopAutoPlayOnHover={false}
              navButtonsAlwaysInvisible={true}
            >
              {descBuyer.map((buyer, index) => (
                <Buyer key={index} buyer={buyer} />
              ))}
            </Carousel>
          </div>
        </div>
        <div className={classes.sell}>
          <div>
            <Typography variant="h6" align="center">
              For Sellers
            </Typography>
          </div>
          <div>
            <Carousel
              indicators={false}
              animation="fade"
              autoPlay={true}
              interval={5000}
              stopAutoPlayOnHover={false}
              navButtonsAlwaysInvisible={true}
            >
              {descSeller.map((seller, index) => (
                <Seller key={index} seller={seller} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToSell;
