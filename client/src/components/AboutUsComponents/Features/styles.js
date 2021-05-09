import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  Main: {
    background: "rgb(234,231,220)",
  },

  name: {
    paddingTop: "15px",
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
    background: "-webkit-linear-gradient(#e73426, #e85a4f)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    textAlign: "center",
    "@media (max-width : 700px)": {
      textAlign: "center",
      top: "30%",
      left: "50%",
      fontSize: "35px",
    },
  },

  main1: {
    display: "flex",
    "@media (max-width : 700px)": {
      display: "inline",
    },
  },

  Feature: {
    width: "50%",
    padding: "10px",
    "@media (max-width : 700px)": {
      width: "100%",
    },
  },

  Images: {
    width: "50%",
    paddingTop: "80px",
    "@media (max-width : 700px)": {
      width: "100%",
      paddingTop: "20px",
    },
  },

  root: {
    width: "100%",
  },
  inline: {
    display: "inline",
  },

  avatar: {
    margin: "10px",
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  avatarSpecial: {
    margin: "10px",
    width: theme.spacing(8),
    height: theme.spacing(8),
  },

  listItem: {
    paddingTop: "0px",
    paddingBottom: "0px",
    paddingLeft: "0px",
    "@media (max-width : 700px)": {
      paddingLeft: "0px",
    },
  },
}));

export default styles;
