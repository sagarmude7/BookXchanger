import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  root: {
    background: "rgb(234,231,220)",
    padding: "30px",
    display: "flex",
    "@media (max-width : 700px)": {
      display: "inline",
      margin: "10px",
    },
  },

  Part1: {
    alignItems: "center",
    width: "50%",
    padding: "10px",
    "@media (max-width : 700px)": {
      width: "100%",
    },
  },

  image1: {
    height: "70%",
    width: "70%",
    "@media (max-width : 700px)": {
      paddingTop: "60px",
    },
  },

  Part2: {
    textAlign: "center",

    width: "50%",
    paddingTop: "100px",
    "@media (max-width : 700px)": {
      width: "100%",
    },
  },

  heading: {
    textAlign: "center",
  },

  subheading: {
    paddingTop: "20px",
  },

  button: {
    marginTop: "40px",
    backgroundColor: "#e85a4f",
    "&:hover": {
      backgroundColor: "#e98074",
    },
  },
}));

export default styles;
