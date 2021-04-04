import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  main: {
    display: "flex",
    "@media (max-width : 700px)": {
      display: "inline",
    },
  },
  sell: {
    width: "50%",
    "@media (max-width : 700px)": {
      width: "100%",
    },
  },
  buy: {
    width: "50%",
    borderRight: "groove",
    "@media (max-width : 700px)": {
      width: "100%",
      borderRight: "none",
    },
  },

  heading: {
    marginTop: "10px",
    color: "#df4c73",
    transition: ".5s",
    "&:hover::before": {
      transform: "scale(1.1)",
    },

    "&:hover": {
      color: "#black",
      transform: "scale(1.3)",
      textShadow: "0 0 5px #ffffff",
    },
  },

  image: {
    height: "400px",
    width: "400px",

    "@media (max-width : 700px)": {
      height: "250px",
      width: "250px",
    },
  },

  paper: {
    border: "5px solid #000WWW",
    backgroundSize: "cover",
    height: "400px",
    backgroundPosition: "center",
    width: "400px",
  },

  parent: {
    width: "80%",
    margin: "20px auto",
  },
}));
export default styles;
