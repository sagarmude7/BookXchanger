import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  back: {
    position: "absolute",
    margin: 20,
    marginTop: 40,
    zIndex: 10,
    [theme.breakpoints.down(900)]: {
      marginTop: 60,
    },
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "#e7dbc9",
    borderRadius: "0.7rem",
    border: "3px solid #E98074",
    textShadow: "0 0 1px #e98074",
    boxShadow: "8px 8px 8px grey",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    backgroundColor: "#e85a4f",
    "&:hover": {
      backgroundColor: "#e98074",
    },
    margin: theme.spacing(1),
    color: "white",
  },
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root1: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
  mainContainer: {
    backgroundColor: "#e5e1d4",
  },
  textfield: {
    marginBottom: "20px",
    //border: "1px solid black",
  },
  backbutton: {
    backgroundColor: "#e85a4f",
    "&:hover": {
      backgroundColor: "#e98074",
    },
    color: "white",
    margin: theme.spacing(1),
  },
  nextbutton: {
    backgroundColor: "#e85a4f",
    "&:hover": {
      backgroundColor: "#e98074",
    },
    color: "white",
    margin: theme.spacing(1),
  },
  box: {
    margin: theme.spacing(2),
  },
  stepper: {
    background: "#E98074",
    borderRadius: "0.7rem",
    width: "80%",
  },
  step: {
    margin: theme.spacing(1),
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  stepname: {
    color: "white",
  },
  stepcolor: {
    backgroundColor: "#8E8D8A",
    width: "35px",
    padding: "5px",
    textAlign: "center",
    height: "35px",
    fontSize: "17px",
    borderRadius: "50%",
    marginBottom: "20px",
  },

  [theme.breakpoints.down(700)]: {
    stepper: {
      background: "#E98074",
      borderRadius: "0.7rem",
      width: "100%",
      marginTop: "40px",
    },
    stepname: {
      color: "white",
      fontSize: 16,
    },
    stepcolor: {
      backgroundColor: "#8E8D8A",
      width: "30px",
      color: "white",
      padding: "5px",
      textAlign: "center",
      height: "30px",
      fontSize: "17px",
      borderRadius: "50%",
      marginBottom: "20px",
    },
  },

  [theme.breakpoints.between(700, 1200)]: {
    stepper: {
      background: "#E98074",
      borderRadius: "0.7rem",
      width: "80%",
      marginTop: "40px",
    },
    stepname: {
      fontSize: 19,
      color: "white",
    },
  },
}));
