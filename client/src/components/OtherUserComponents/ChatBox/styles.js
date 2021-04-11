
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import { green, pink } from '@material-ui/core/colors';
import { CenterFocusStrong } from '@material-ui/icons';
import { createMuiTheme } from '@material-ui/core/styles';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
</style>;



export default makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'black',
      outline: '1px solid slategrey'
    },
  },
    title :{
      color: "black", 
      textAlign: "center",
      textShadow : "1px 1px 2px 10px white"
    },
    chatHead : {
      color :"black",
      backgroundColor: "#e98074",
      zIndex:  "-1",
      borderRadius : "10px 10px 10px 10px",
      boxShadow:  "2px 1px 10px 5px grey",
      marginTop : "20px",
      
    },
    msgBox : {
      height:"300px",
      backgroundColor: "rgb(216,199,165)",
      color :"white",
      borderRadius : "20px",
      padding : "10px",
      overflowY :  "scroll",
      borderRadius : "10px 10px 10px 10px",
      boxShadow:  "4px 1px 10px 5px grey",
    },
    msg1  :{
      marginTop:"2px",
      padding:"5px",
      border:"1px solid purple",

     background: "#c6426e",
      color : "white",
      maxWidth:"250px",
      textAlign:"left",
      marginLeft :"200px",
      borderRadius :  "30px 1px 30px 30px ",
      wordWrap:" break-word",
      overflowX : "auto",
      padding : "12px 10px 4px 12px "
    },
    msg2  :{
      marginTop:"2px",
      border:"1px solid blue",
      background: "#2948ff",
      color : "white",
      maxWidth:"250px",
      textAlign:"left",
      borderRadius :  "10px",
      overflowX : "auto",
      wordWrap:" break-word",
      borderRadius :  "1px 30px 30px 30px ",

      padding : "12px 10px 4px 12px"
      
    }
    , time : {
      float :"right",
      color : "lightgreen"
    },
    SendButton : {
      marginTop : "19px"
    },
    send : {
      display :"flex",
      flexDirection : "row"
    },
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },

    }));