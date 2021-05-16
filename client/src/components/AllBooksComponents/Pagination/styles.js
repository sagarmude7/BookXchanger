import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  button: {
    margin: "2px",
    backgroundColor: "#e85a4f",
    "&:hover": {
      backgroundColor: "#e98074",
    },
    width: theme.spacing(3),
    height: theme.spacing(4),
  },
}));
