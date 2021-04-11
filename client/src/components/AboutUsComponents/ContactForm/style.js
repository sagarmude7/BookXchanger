import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  bottom: {
    display: "flex",
    background: "rgb(234,231,220)",
    paddingBottom: "20px",
    "@media (max-width : 700px)": {
      display: "inline",
    },
  },

  left: {
    width: "50%",
    "@media (max-width : 700px)": {
      width: "100%",
    },
  },

  right: {
    width: "50%",
    margin: "0 10px",
    "@media (max-width : 700px)": {
      width: "100%",
    },
  },

  inline: {
    display: "inline",
  },

  listItem: {
    paddingTop: "0px",
    paddingBottom: "0px",
    "@media (max-width : 700px)": {
      paddingLeft: "0px",
    },
  },

  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "#e98074",
    width: "300px",
    marginBottom: "10px",
    "&:hover": {
      backgroundColor: "#e85a4f",
    },
    "@media (max-width : 700px)": {
      width: "100%",
    },
  },
}));
