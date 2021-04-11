import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  paper: {
    border: "5px solid #000WWW",
    backgroundSize: "cover",
    height: "655px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    marginLeft: "0px",
    marginRight: "0px",
    overflow: "none",
    width: "100%",
    zIndex: "-1",
    transform: "translateY(10%,0%)",
    "@media (max-width : 700px)": {
      height: "600px",
    },
  },
  content: {
    top: "50%",
    left: "30%",
    zIndex: "10",
    position: "absolute",
    transform: "translate(-50%,-50%)",
    color: "#eae7dc",
    "@media (max-width : 700px)": {
      textAlign: "center",
      top: "50%",
      left: "50%",
      fontSize: "50px",
    },
  },

  contentBold: {
    background: "-webkit-linear-gradient(#e73426, #e85a4f)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    "@media (max-width : 700px)": {
      textAlign: "center",
      top: "30%",
      left: "50%",
      fontSize: "50px",
    },
  },
  parent: {
    width: "100%",
  },
}));

export default styles;
