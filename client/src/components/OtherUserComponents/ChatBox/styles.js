
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import { green, pink } from '@material-ui/core/colors';
import { CenterFocusStrong } from '@material-ui/icons';
import { createMuiTheme } from '@material-ui/core/styles';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
</style>;



export default makeStyles((theme) => ({
    title :{
      color: "black", 
      textAlign: "center"
    },
    msgBox : {
      height:"300px",
      border:"2px solid red",
      backgroundColor : "cyan",
      borderRadius : "20px",
      padding : "10px",
      overflowY :  "scroll"
    },
    msg  :{
      marginTop:"2px",
      padding:"5px",
      border:"1px solid purple",
      background:"black",
      color : "white",
      maxWidth:"200px",
      textAlign:"center"
    }
    

    }));