import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles({
  root: {
    display: "flex",
    padding: "150px 20px 5px 40px",
    margin: "20px",
    background: "grey",
    background: " #360033",
    background: "-webkit-linear-gradient(to right, #0b8793, #360033)",
    background: "linear-gradient(to right, #0b8793, #360033)",
    color: "white",
    fontFamily: "Lucida Console, Courier New,monospace",
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
    width: 191,
  },
  grid: {
    background: "grey",
    color: "white",
  },
  Image: {
    paddingTop: "50px",
  },
});

export default styles;
