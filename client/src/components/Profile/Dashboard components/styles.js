import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  body: {
    padding: 0,
    width: "88%",
    background: "#EAE7DC",

    [theme.breakpoints.down(1000)]: {
      width: "89%",
    },
    [theme.breakpoints.down(700)]: {
      width: "91%",
    },
    [theme.breakpoints.down(500)]: {
      width: "93%",
    },
    [theme.breakpoints.down(400)]: {
      width: "95%",
    },
  },

  container: {
    padding: "0px",
  },

  root: {
    backgroundColor: "#E98074",
  },
}));
