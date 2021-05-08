import { makeStyles } from "@material-ui/core/styles";
import React from "react";

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
      backgroundColor: "#8e8d8a",
      outline: "1px solid slategrey",
    },
  },
  title: {
    color: "black",
    textAlign: "center",
  },
  chatHead: {
    color: "black",
    border: "1px solid black",
    backgroundColor: "#e98074",
    zIndex: "-1",
    borderRadius: "10px 10px 0 0",
    marginTop: "20px",
  },
  msgBox: {
    height: "350px",
    border: "1px solid black",
    background:
      "linear-gradient(319deg, rgba(216,195,165,1) 3%, rgba(255,255,255,1) 100%)",
    color: "white",
    padding: "10px",
    overflowY: "scroll",
  },
  msg1: {
    marginTop: "2px",
    border: "1px solid #e85a4f",
    background:
      "linear-gradient(319deg, rgba(142,141,138,1) 3%, rgba(255,255,255,1) 100%)",
    color: "black",
    maxWidth: "250px",
    textAlign: "left",
    marginLeft: "200px",
    borderRadius: "20px 1px 20px 20px ",
    wordWrap: " break-word",
    overflowX: "auto",
    padding: "12px 10px 4px 12px ",
  },
  msg2: {
    marginTop: "2px",
    border: "1px solid #e85a4f",
    background:
      "linear-gradient(319deg, rgba(227,68,68,1) 3%, rgba(255,255,255,1) 100%)",
    color: "black",
    maxWidth: "250px",
    textAlign: "left",
    overflowX: "auto",
    wordWrap: " break-word",
    borderRadius: "1px 20px 20px 20px ",

    padding: "12px 10px 4px 12px",
  },
  time: {
    float: "right",
    color: "black",
  },
  SendButton: {},
  send: {
    borderRadius: "0px 0px 10px 10px ",
    border: "1px solid black",
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
