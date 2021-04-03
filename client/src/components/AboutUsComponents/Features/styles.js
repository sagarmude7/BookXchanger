import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  Main: {},

  name: {
    marginTop: "10px",
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
    "@media (max-width : 700px)": {
      paddingLeft: "0px",
    },
  },

  //Images

  image: {
    width: "100%",
    height: "300px",
  },
  //Images
}));

export default styles;
