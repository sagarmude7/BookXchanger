import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles({
  root: {
    margin: "auto",
  },

  topContainer: {
    position: "relative",
    width: "100%",
    color: "white",
    height: "350px",
    paddingTop: "20px",
    backgroundImage: "linear-gradient(0deg, #B0DDE4, #E2F0F9)",
    "@media (max-width : 700px)": {
      height: "175px",
    },
  },

  bottomLeft: {
    color: "black",
    fontSize: "4vw",
    paddingLeft: "50px",
    position: "absolute",
    bottom: "8px",
    left: "16px",
  },

  topLeft: {
    color: "black",
    top: "5px",
    left: "35px",
    fontSize: "35px",
  },

  edition: {
    fontSize: "2vw",
    display: "inline",
  },

  date: {
    fontSize: "1vw",
  },
  details: {
    fontFamily: "Lucida Console, Courier New,monospace",
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    zIndex: "10",
  },
  cover: {
    width: "191",
  },
  grid: {
    background: "grey",
    color: "white",
  },
});

export default styles;
