import { colors, makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  footer: {
    position: "center",
    margin: "10px 0 0 0",
    padding : "20px",
    background: "#286FB4",
  },

  flexContainer: {
    display: "flex",
    flexFlow: "row nowrap",
    background: "#286FB4",
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
    transition: "1s",
    "&:hover": {
      color: "#ffffff",

      textShadow: "0 0 5px #ffffff",
    },
  },

  name: {
    color: "#DF4C73",
    "&:hover": {
      color: "#E2F0F9",
    },
  },

  touch: {
    fontSize: "25px",
    fontWeight: "bold",
    padding: "0 0 30px 0",
    "@media (max-width : 700px)": {
      padding: "10px 0 5px 0",
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
      color: "#ffffff",
      transform: "scale(1.3)",
      textShadow: "0 0 5px #ffffff",
    },
    "@media (max-width : 700px)": {
      margin: "0px 10px 10px 10px",
    },
  },
}));
export default styles;
