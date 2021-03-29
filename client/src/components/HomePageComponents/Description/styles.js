import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  carousel: {},

  paper: {
    border: "5px solid #000WWW",
    backgroundSize: "cover",
    height: "620px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    marginLeft: "0px",
    marginRight: "0px",

    overflow: "none",
    width: "100%",
    zIndex: "-1",
    transform: "translateY(10%,0%)",
  },
  content: {
    textAlign: "center",
    zIndex: "10",
    fontSize: "20px",
    fontWeight: "400",
    fontFamily: "'Source Code Pro', monospace",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    color: "white",
  },
  parent: {
    width: "100%",
    marginTop: "20px",
  },
}));

export default styles;
