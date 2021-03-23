import { colors, makeStyles } from "@material-ui/core";
import { text } from "body-parser";
const styles = makeStyles((theme) => ({
  footer: {
    position: "center",
    margin: "30px 0 0 0",
    background: "#400CCC",
  },

  flexContainer: {
    display: "flex",
    flexFlow: "row nowrap",
    background: "#400CCC",
    padding: "30px 0px 10px 0px",
    justifyContent: "center",
    alignItems: "ceter",
  },

  flexbox: {
    width: "33%",
    "@media (max-width : 700px)": {
      width: "100%",
    },
  },

  image1: {
    width: "70px",
    margin: "5px 0px 30px 0px ",
    position: "centre",
    transition: ".5s",
    "&:hover": {
      transform: "scale(1.3)",
    },
  },

  link: {
    listStyleType: "none",
    textAlign: "center",
    paddingInlineStart: "0px",
    "&:hover": {
      color: "#00ffff",

      textShadow: "0 0 5px #00ffff",
    },
  },

  Icon: {
    margin: "10px 10px 10px 10px",
    fontSize: "40px",
    transform: "scale(.9)",
    zIndex: "-1",

    transition: ".5s",

    "&:hover::before": {
      transform: "scale(1.1)",
    },

    "&:hover": {
      color: "#00ffff",
      transform: "scale(1.3)",
      textShadow: "0 0 5px #00ffff",
    },
  },
}));
export default styles;
