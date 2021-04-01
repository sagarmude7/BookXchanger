import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  Main: {},

  content: {
    display: "inline-block",
    textAlign: "center",
    color: "white",
    "@media (max-width : 700px)": {
      textAlign: "center",

      fontSize: "50px",
    },
  },
  contentBold: {
    display: "inline-block",
    color: "#df4c73",
    textAlign: "center",
    "@media (max-width : 700px)": {
      textAlign: "center",
      top: "30%",
      left: "50%",
      fontSize: "50px",
    },
  },

  Feature: {
    display: "inline-block",
    width: "50%",
    padding: "10px",
    "@media (max-width : 700px)": {
      width: "100%",
    },
  },

  Images: {
    display: "inline-block",
    width: "50%",
    padding: "10px",
    "@media (max-width : 700px)": {
      width: "100%",
    },
  },
}));

export default styles;
