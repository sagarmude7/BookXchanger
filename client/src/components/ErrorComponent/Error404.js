import React from "react";
import { Typography, Button, Box } from "@material-ui/core";
import image2 from "./image2.png";
import useStyles from "./styles.js";

import { useHistory } from "react-router-dom";

const Error404 = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <div className={classes.root}>
        <div className={classes.Part1}>
          <Typography align="center">
            <img className={classes.image1} src={image2} alt="Logo" />
          </Typography>
        </div>
        <div className={classes.Part2}>
          <Typography
            variant="h4"
            align="center"
            color="textSecondary"
            className={classes.heading}
          >
            Oh no, you've found our junior developers's homepage!
          </Typography>
          <Typography
            variant="h6"
            align="center"
            className={classes.subheading}
            color="textSecondary"
          >
            Despite sleeping on the couch most of the day, our junior web
            developer still finds time to do coding...
          </Typography>

          <Box alignItems="center">
            <Button
              variant="contained"
              onClick={() => history.go(-2)}
              className={classes.button}
            >
              Go Back
            </Button>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Error404;
