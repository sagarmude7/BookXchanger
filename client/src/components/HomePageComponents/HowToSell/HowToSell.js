import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import useStyles from "./styles.js";

import {
  Button,
  CardContent,
  Typography,
  CardActions,
  Card,
} from "@material-ui/core";

const HowToSell = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h6" style={{ textAlign: "center", color: "black" }}>
        How to sell used books on BookXchanger ?
      </Typography>
    </>
  );
};

export default HowToSell;
