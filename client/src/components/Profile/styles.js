import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import { green, pink } from '@material-ui/core/colors';
import { CenterFocusStrong } from '@material-ui/icons';


<style>
  @import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
</style>;

export default makeStyles((theme) => ({
   
    Container:{
        
        
    },
      
      pink: {
        color: theme.palette.getContrastText(pink[500]),
        backgroundColor: pink[500],
      },

      green: {
        color: '#fff',
        backgroundColor: green[500],
      },

      large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
      },


      head: {
        backgroundColor:'#F0F8FF',
          display:'flex',
          flexDirection:'row',
          
      },

      headRight:{
        display:'flex',
        flexDirection:'column',
        width:400,
      },

      headUser: {
          marginTop:60,
          marginLeft:90,
          fontWeight:300,
          fontSize:30,
      },
      heading: {
          
          marginBottom : 50,
          marginLeft:200,
          
      },

      pic:{
          margin:35,
      },

      body:{
        backgroundColor:'#F0F8FF',
        display:'flex',
        flexDirection:'column',
        marginTop:20,
      },
      bodyFields:{
        display:'flex',
        flexDirection:'row',
      },

      bodyText:{
        
        margin:16,
        fontSize:15,
        fontweight:200,
      },


      bodyTextValue:{
        position:'absolute',
        left:500,
        margin:15,
        fontSize:15,
        fontWeight:50,
      },

      bodyHead:{

        marginTop:30,
        marginBottom:18,
        fontSize:20,
        fontWeight:50,
      },

      Edit:{
        position:'fixed',
        bottom:50,
        right:60,
      },

      Chat:{
        position:'fixed',
        bottom:120,
        right:60,
      },

      button: {
        marginLeft:300,
        marginTop:40,
        margin: theme.spacing(1),
        width:150,
      },

      editBody:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
      },

      textBox:{
        margin:20,
        width:1000
      },

      changePassword :{
        width:180,
        marginLeft:1000,
        
      },

      textField: {
        width: '45ch',
      },

      margin: {
        margin: theme.spacing(2),
      },
      
      saveChanges:{
        width:150,
        marginBottom:30,
        marginTop:30,
        marginLeft:850,
      },

    }));
    
    
    
