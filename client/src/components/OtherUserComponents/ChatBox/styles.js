import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { green, pink } from "@material-ui/core/colors";
import { CenterFocusStrong } from "@material-ui/icons";
import { createMuiTheme } from "@material-ui/core/styles";

<style>
  @import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
</style>;

export default makeStyles((theme) => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "black",
      outline: "1px solid slategrey",
    },
  },
  title: {
    color: "black",
    textAlign: "center",
  },
  chatHead: {
    color: "black",
    backgroundColor: "#e98074",
    zIndex: "-1",
    borderRadius: "5px",
    marginTop: "20px",
  },
  msgBox: {
    height: "300px",
    background: "rgb(234,231,220)",
    background:
      "linear-gradient(319deg, rgba(234,231,220,1) 17%, rgba(232,90,79,1) 100%)",

    color: "white",
    borderRadius: "20px",
    padding: "10px",
    overflowY: "scroll",
    borderRadius: "5px",
  },
  msg1: {
    marginTop: "2px",
    padding: "5px",
    border: "1px solid purple",

    background: "#c6426e",
    color: "white",
    maxWidth: "250px",
    textAlign: "left",
    marginLeft: "200px",
    borderRadius: "30px 1px 30px 30px ",
    wordWrap: " break-word",
    overflowX: "auto",
    padding: "12px 10px 4px 12px ",
  },
  msg2: {
    marginTop: "2px",
    border: "1px solid blue",
    background: "#2948ff",
    color: "white",
    maxWidth: "250px",
    textAlign: "left",
    borderRadius: "10px",
    overflowX: "auto",
    wordWrap: " break-word",
    borderRadius: "1px 30px 30px 30px ",

    padding: "12px 10px 4px 12px",
  },
  time: {
    float: "right",
    color: "lightgreen",
  },
  SendButton: {
    marginTop: "0px",
  },
  send: {
    display: "flex",
    flexDirection: "row",
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },

  root1: {
    padding: "2px 2px",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));
