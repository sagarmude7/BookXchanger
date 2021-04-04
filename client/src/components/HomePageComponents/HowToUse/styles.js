import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  main: {
    display: "flex",
  },
  sell: {
    flex: 1,
  },
  buy: {
    flex: 1,
  },

  paper: {
    border: "5px solid #000WWW",
    backgroundSize: "cover",
    height: "400px",
    backgroundPosition: "center",
    width: "100%",
  },

  parent: {
    width: "80%",
    margin: "20px auto",
  },
}));
export default styles;
