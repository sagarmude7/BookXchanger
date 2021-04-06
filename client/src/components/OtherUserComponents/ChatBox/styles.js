
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
      textAlign: "center"
    },
    msgBox : {
      height:"300px",
      border:"2px solid red",
      backgroundColor : "#f2c94c",

      borderRadius : "20px",
      padding : "10px",
      overflowY :  "scroll"
    },
    msg1  :{
      marginTop:"2px",
      padding:"5px",
      border:"1px solid purple",

     background: "#c6426e",
      color : "white",
      maxWidth:"200px",
      textAlign:"center",
      marginLeft :"200px",
      borderRadius :  "10px",
      wordWrap:" break-word",
      overflowX : "auto",
      padding : "6px"
    },
    msg2  :{
      marginTop:"2px",
      padding:"5px",
      border:"1px solid blue",
      background: "#2948ff",
      color : "white",
      maxWidth:"200px",
      textAlign:"center",
      borderRadius :  "10px",
      overflowX : "auto",
      wordWrap:" break-word",
      padding : "14px"
      
    }
    

    }));