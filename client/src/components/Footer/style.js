import { colors, makeStyles } from "@material-ui/core"
import { text } from "body-parser";
const styles = makeStyles((theme) => ({

  mainfooter: {
    background: "#400CCC",
    position: "center",
    margin:"30px 0 0 0"
  },

  flexContainer: {
    display: "flex",
    flexFlow: "row nowrap",
    background: "#400CCC",
    padding: "30px 0px 10px 0px",
    justifyContent: "center",
    alignItems: "ceter"

  },

  image1: {
    width: "70px",
    margin: "5px 0px 30px 0px ",
    position: "Centre"
  },

  Icon: {
    margin: "10px 10px 10px 10px",
    fontSize: "40px"
  }

}));
export default styles;

