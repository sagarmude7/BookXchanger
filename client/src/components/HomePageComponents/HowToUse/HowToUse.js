import React, { useEffect, useState } from "react";
import descBuyer from "./descBuyer.js";
import descSeller from "./descSeller.js";
import useStyles from "./styles.js";
import Carousel from "react-material-ui-carousel";
import logo from "./buyerImages/register.svg";
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
        <div>
          <Typography align="center">
            <img src={props.buyer.img} className={classes.image} />
          </Typography>

          <div>
            <Typography variant="h6" align="center">
              {props.buyer.heading}
            </Typography>
            <Typography variant="body1" align="center">
              {props.buyer.subHeading}
            </Typography>
          </div>
        </div>
      </div>
    );
  };

  const Seller = (props) => {
    return (
      <div className={classes.parent}>
        <div>
          <Typography align="center">
            <img src={props.seller.img} className={classes.image} />
          </Typography>

          <div>
            <Typography variant="h6" align="center">
              {props.seller.heading}
            </Typography>
            <Typography variant="body1" align="center">
              {props.seller.subHeading}
            </Typography>
          </div>
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
            <Typography variant="h6" align="center" className={classes.heading}>
              For Buyers
            </Typography>
          </div>
          <div>
            <Carousel
              animation="fade"
              autoPlay={true}
              interval={6000}
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
            <Typography variant="h6" align="center" className={classes.heading}>
              For Sellers
            </Typography>
          </div>
          <div>
            <Carousel
              animation="fade"
              autoPlay={true}
              interval={6000}
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