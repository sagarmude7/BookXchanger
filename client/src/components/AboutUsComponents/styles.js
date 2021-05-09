import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  top: {},
  back: {
    position: "absolute",
    margin: 20,
    marginTop: 40,
    color: "white",
    zIndex: 10,
    [theme.breakpoints.down(900)]: {
      marginTop: 60,
    },
  },

  root: {
    maxWidth: 360,
    alignItems: "right",
    background: "linear-gradient(45deg,#e1bee7 30%, #c786d3 90%)",
    borderRadius: "200",
  },
  media: {
    height: 150,
  },
}));
