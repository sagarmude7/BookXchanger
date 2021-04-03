import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  Main: {},

  name: {
    alignContent: "center",
  },

  content: {
    textAlign: "center",
    color: "black",
    "@media (max-width : 700px)": {
      textAlign: "center",
      fontSize: "35px",
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
      fontSize: "35px",
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

  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default styles;
