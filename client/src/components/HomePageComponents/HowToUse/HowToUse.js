import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import useStyles from "./styles.js";

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

  return (
    <>
      <Typography
        variant="h6"
        style={{ textAlign: "center", color: "black", marginTop: "25px" }}
      >
        How to use BookXchanger
      </Typography>
      <hr style={{ border: "1px solid black", width: "300px" }} />
      <hr style={{ borderWidth: "0px" }} />

      <Grid></Grid>
      <Grid></Grid>
    </>
  );
};

export default HowToSell;
