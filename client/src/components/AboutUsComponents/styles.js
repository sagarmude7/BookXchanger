import React from 'react'
import {makeStyles} from '@material-ui/core'
export const useStyles = makeStyles({
    root: {
      maxWidth: 360,
      alignItems:"right",
      background: 'linear-gradient(45deg,#e1bee7 30%, #c786d3 90%)',
      borderRadius:"200",
    },
    media: {
      height: 150,
    },
  });
  
export const useStyles_2 = makeStyles({
    root:{
      width: '100%',
      maxWidth: 360
    }
  })
console.log("complete")
