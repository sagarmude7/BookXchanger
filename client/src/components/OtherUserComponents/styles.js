import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import { green, pink } from '@material-ui/core/colors';
import { CenterFocusStrong } from '@material-ui/icons';


<style>
  @import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
</style>;

export default makeStyles((theme) => ({
   
    container:{
      backgroundColor: "#286FB4",
      backgroundImage: `url(${'https://www.transparenttextures.com/patterns/concrete-wall-2.png'})`

        
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
        backgroundColor:'#FFFFFF',
        display:'flex',
        flexDirection:'row',
        backgroundImage: `url(${'https://www.transparenttextures.com/patterns/stacked-circles.png'})`,
      },
      headRight:{
        display:'flex',
        flexDirection:'column',
        width:400,
      },

      headUser: {
        padding : "10px"
      },
      heading: {
          
          marginBottom : 50,
          marginLeft:200,
          
      },
      userDetails : {
        marginTop :"50px"
      },
      pic:{
          margin:25,
          borderRadius :"50%",
          color : "pointer",
      },
      ads : {
        display : "flex",
        alignItems :"center",
        justifyContent :"space-between",
        position : "absolute",
        right :"30px",
      },
      adsSold : {
        margin : "50px 20px 50px ",
        padding : "10px",
        borderRadius : "20px",
        fontWeight :"800",
        fontSize :"1.8rem",
        fontFamily : "New Tegomin, serif",
        backgroundColor: "#286FB4",
        backgroundImage: `url(${'https://www.transparenttextures.com/patterns/brushed-alum.png'})`
      },
      body:{
        display:'flex',
        flexDirection:'column',
        marginTop:20,
        marginLeft :37 ,
        transition: "all 0.1s ease-in",
        "&:hover" : {
          boxShadow : "1px 2px 10px 1px grey",
        },
        backgroundColor: "#FFFFFF",
        backgroundImage: `url(${'https://www.transparenttextures.com/patterns/asfalt-light.png'})`,
      },
      bodyFields:{
        display:'flex',
        flexDirection:'row',
        flex :"wrap"
      },

      bodyText:{
        margin:10,
        fontSize:15,
        fontweight:200,
      },


      bodyTextValue:{
        position:'absolute',
        left:300,
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
      contactform:{
        backgroundColor:'white',
        width:'80%',
        borderRadius:'15px',
      },
      text : {
        padding : "2px",
      },
      button : {
        margin : "20px",
      }
    }));
    
    
    
