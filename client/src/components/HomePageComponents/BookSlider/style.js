import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    alignItems: "center",
    background: "rgb(234,231,220)",
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  container: {
    paddingTop: "20px",
  },
  actionDiv: {
    textAlign: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  sortButton: {
    margin: "20px",
  },

  grid:{
    padding:'15px',
  }
  
}));
