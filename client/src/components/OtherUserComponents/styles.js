import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { green, pink } from "@material-ui/core/colors";
import { CenterFocusStrong } from "@material-ui/icons";
import { createMuiTheme } from "@material-ui/core/styles";

<style>
  @import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
</style>;

export default makeStyles((theme) => ({
  container: {
    paddingTop: "20px",
  },

  topBox: {
    width: "100%",
  },

  userDetails: {
    width: "auto",
  },

  name: {
    width: "300px",
    marginTop: 50,
  },

  head: {
    backgroundColor: "#E2F0F9",
    display: "flex",
    flexDirection: "row",
    transform: "translateY(10%,0%)",
  },

  headUser: {
    fontSize: "15px",
  },

  pic: {
    width: "175px",
    height: "190px",
    margin: "3%",
    borderRadius: "200px",
  },

  body: {
    backgroundColor: "#E2F0F9",
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },

  bodyFields: {
    display: "flex",
    flexDirection: "row",
  },

  bodyText: {
    margin: 16,
    fontSize: 15,
    fontweight: 200,
  },

  bodyTextValue: {
    position: "absolute",
    left: "38%",
    margin: 15,
    fontSize: 15,
    fontWeight: 50,
  },

  bodyHead: {
    marginTop: 30,
    marginBottom: 18,
    fontSize: 20,
    fontWeight: 50,
  },

  Edit: {
    width: "18%",
    marginLeft: "80%",
  },

  button: {
    marginLeft: 300,
    marginTop: 40,
    margin: theme.spacing(1),
    width: 150,
  },

  editBody: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  textBox: {
    margin: 20,
    //margin:'2%',
    width: "80%",
  },

  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },

  green: {
    color: "#fff",
    backgroundColor: green[500],
  },

  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  changePassword: {
    width: 180,
    marginLeft: "77%",
  },

  textField: {
    width: "50ch",
  },

  margin: {
    margin: theme.spacing(2),
  },

  saveChanges: {
    width: 150,
    marginBottom: 30,
    marginTop: 30,
    marginLeft: "72%",
  },

  rootTab: {
    backgroundColor: "#F0F8FF",
  },

  listing1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#286FB4",
    width: "14%",
    height: 120,
    marginTop: 60,
    margin: "2%",
    marginLeft: "11%",
  },

  listing2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#1abc9c",
    width: "14%",
    height: 120,
    marginTop: 60,
    marginLeft: "2%",
  },

  listNumber: {
    color: "white",
    fontSize: 50,
    fontWeight: 20,
  },
  listLetter: {
    color: "white",
    fontSize: 17,
    fontWeight: 5,
  },

  [theme.breakpoints.between(1000, 1200)]: {
    headUser: {
      fontSize: "15px",
      fontWeight: 300,
    },

    pic: {
      width: "140px",
      height: "160px",
    },

    listing1: {
      height: 90,
    },

    listing2: {
      height: 90,
    },

    listNumber: {
      fontSize: 40,
      fontWeight: 20,
    },

    listLetter: {
      fontSize: 14,
      fontWeight: 5,
    },
  },

  [theme.breakpoints.down(1000)]: {
    pic: {
      marginTop: 40,
    },

    head: {
      flexDirection: "column",
      alignItems: "center",
    },

    listing1: {
      //display:'flex',
      //flexDirection:'column',
      alignItems: "center",
      //backgroundColor:"#286FB4",

      height: 120,
      marginTop: 20,
      margin: "0",
      //marginLeft:"0",
      width: "100%",
    },

    listing2: {
      //display:'flex',
      //flexDirection:'column',
      alignItems: "center",
      //backgroundColor:"#286FB4",

      height: 120,
      marginTop: 20,
      marginBottom: 20,
      margin: "0",
      //marginLeft:"0",
      width: "100%",
    },

    headUser: {
      fontWeight: "500px",
      fontSize: "25px",
    },

    Edit: {
      width: "25%",
      marginLeft: "70%",
    },

    changePassword: {
      width: 170,
      marginLeft: "65%",
      fontSize: 13,
    },
  },

  [theme.breakpoints.down(700)]: {
    Edit: {
      width: "30%",
      marginLeft: "70%",
      fontSize: 10,
    },

    bodyFields: {
      display: "flex",
      flexDirection: "column",
    },

    bodyText: {
      margin: 10,
      marginBottom: 0,
      marginLeft: 16,
      fontSize: 15,
      fontweight: 200,
    },

    bodyTextValue: {
      position: "relative",
      left: "0%",
      margin: 10,
      marginLeft: 16,
      fontSize: 15,
      fontWeight: 50,
    },

    changePassword: {
      width: 153,
      marginLeft: "60%",
      fontSize: 12,
    },

    saveChanges: {
      width: 130,
      marginLeft: "65%",
      fontSize: 12,
    },

    textField: {
      width: "45ch",
      fontSize: 12,
    },
  },

  [theme.breakpoints.down(500)]: {
    Edit: {
      width: "36%",
      marginLeft: "65%",
      fontSize: 10,
    },

    changePassword: {
      width: 137,
      marginLeft: "47%",
      fontSize: 10.5,
    },

    saveChanges: {
      width: 120,
      marginLeft: "50%",
      fontSize: 10.5,
    },

    textField: {
      fontSize: 11,
    },

    passTitle: {
      fontSize: 12,
    },
  },

  [theme.breakpoints.down(400)]: {
    Edit: {
      width: "40%",
      marginLeft: "60%",
      fontSize: 9,
    },

    changePassword: {
      width: 100,
      marginLeft: "45%",
      fontSize: 10,
    },

    textField: {
      fontSize: 7,
    },

    passTitle: {
      fontSize: 10,
    },
  },
}));
