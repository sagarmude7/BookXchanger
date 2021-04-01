import React from "react";
import useStyles from "./styles.js";
import { Grid, Paper, Typography, Box } from "@material-ui/core";

const Feature = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.Main}>
        <div>
          <Typography variant="h4" className={classes.content}>
            Why
            <Box fontWeight="fontWeightBold" className={classes.contentBold}>
              BookXchanger
            </Box>
          </Typography>
        </div>
        <div className={classes.Feature}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </div>
        <div className={classes.Images}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </div>
      </div>
    </>
  );
};

export default Feature;
