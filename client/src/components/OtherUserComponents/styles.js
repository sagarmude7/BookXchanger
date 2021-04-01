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
      backgroundImage: `url(${'https://www.transparenttextures.com/patterns/concrete-wall-2.png'})`,
      border : "1px solid red",
      padding :"0px"
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
        display:'flex',
        background :"white",
        margin : "0px 20px 20px 20px",
        flexDirection:'row',
        borderRadius : "15px",
        [theme.breakpoints.down('xs')]: {
          display : "flex",
          flexDirection : "column",
          width :"450px",
          height : "600px",
        },
      },

      headUser: {
        padding : "10px"
      },
      heading: {
          marginBottom : 50,
          marginLeft:200,
          [theme.breakpoints.down('xs')]: {
           marginBottom : 0,
           marginLeft:2,
          },
      },
      userDetails : {
        marginTop :"50px",
      },
      pic:{
          margin:25,
          borderRadius :"50%",
          color : "pointer",
          [theme.breakpoints.down('xs')]: {
            position : "relative" ,
            left : "20%"
           },
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
        fontSize : "1.2rem !important",
        fontWeight :"400 !important"
      },
      text : {
        padding : "2px",
      },
      button : {
        margin : "20px",
      },
      chatBox  :{
        margin: "20px 10px 10px 50px",
        width: "80%",
        backgroundColor  :"white",
        padding: "0px",
        border: "1px solid blue",
        borderRadius : "15px"
      },
      sendButton : {
        width: "20%",
        marginTop: "10px",
        backgroundColor: "#DF4C73",
        alignItems  : "center"
      } ,
       guidelines: {
        display: "block",
        margin: "20px",
        backgroundColor  :"white"
      },
    
      guidelineList: {
        lineHeight: "30px",
        font: "14px Sans-serif ",
        paddingLeft: "0px",
        "@media (max-width : 700px)": {
          width: "100%",
          paddingRight: "10px",
        },
      },
      listing1 :{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:"#F60A66",
        backgroundColor:"#1DD78A",
        backgroundColor:"#2CBF87",
        backgroundColor:"#F39E0B",
        backgroundColor:"#286FB4",
        width:180,
        height:110,
        marginTop:60,
        margin:40,
        marginLeft:150,
      },

      listing2 :{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:"#1DD78A",
        backgroundColor:"#1abc9c",
        width:180,
        height:110,
        marginTop:60,
        margin:20,
        [theme.breakpoints.down('xs')]: {
          width:180,
          height:110,
          marginTop:60,
          margin:20,
         },
         [theme.breakpoints.down('sm')]: {
          width:180,
          height:110,
          marginTop:60,
          margin:20,
         },
      },
       
      listNumber:{
        color:"white",
        fontSize:50,
        fontWeight:20,
      },
      listLetter:{
        color:"white",
        fontSize:17,
        fontWeight:5,
        
      },
      rightBox :{
        display : "flex",
        flexDirection : "row",
        position : "relative",
        left : "260px",
        [theme.breakpoints.down('xs')]: {
          position: "relative",
          left :"-20px",
          top : "-185px"
         },
      },

}));
    
    
    
