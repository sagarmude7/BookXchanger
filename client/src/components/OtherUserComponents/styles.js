// import { makeStyles } from '@material-ui/core/styles';
// import React from 'react'
// import { green, pink } from '@material-ui/core/colors';
// import { CenterFocusStrong } from '@material-ui/icons';


// <style>
//   @import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
// </style>;

// export default makeStyles((theme) => ({
   
//     container:{
//       backgroundColor: "#286FB4",
//       border : "1px solid red",
//       padding :"0px",
//       marginBottom : "0px !important",
//       borderBottom :"1px solid black",
//     },
      
//       pink: {
//         color: theme.palette.getContrastText(pink[500]),
//         backgroundColor: pink[500],
//       },

//       green: {
//         color: '#fff',
//         backgroundColor: green[500],
//       },

//       large: {
//         width: theme.spacing(7),
//         height: theme.spacing(7),
//       },


//       head: {
//         display:'flex',
//         background :"white",
//         margin : "0px 20px 20px 20px",
//         flexDirection:'row',
//         borderRadius : "15px",
//         [theme.breakpoints.down('xs')]: {
//           display : "flex",
//           flexDirection : "column",
//           width :"100%",
//           height : "600px",
//           margin : "20px 20px 10px 20px",
//         },

//       },

//       headUser: {
//         padding : "10px"
//       },
//       heading: {
//           marginBottom : 50,
//           marginLeft:200,
//           [theme.breakpoints.down('xs')]: {
//            marginBottom : 0,
//            marginLeft:2,
//           },
//       },
//       userDetails : {
//         marginTop :"50px",
//       },
//       pic:{
//           margin:25,
//           borderRadius :"50%",
//           color : "pointer",
//           [theme.breakpoints.down('xs')]: {
//             position : "relative" ,
//             left : "20%"
//            },
//       },

//       body:{
//         display:'flex',
//         flexDirection:'column',
//         marginTop:20,
//         marginLeft :37 ,
//         transition: "all 0.1s ease-in",
//         "&:hover" : {
//           boxShadow : "1px 2px 10px 1px grey",
//         },
//         backgroundColor: "#FFFFFF",
//         backgroundImage: `url(${'https://www.transparenttextures.com/patterns/asfalt-light.png'})`,
//       },
//       bodyFields:{
//         display:'flex',
//         flexDirection:'row',
//         flex :"wrap"
//       },

//       bodyText:{
//         margin:10,
//         fontSize:15,
//         fontweight:200,
//       },


//       bodyTextValue:{
//         position:'absolute',
//         left:300,
//         margin:15,
//         fontSize:15,
//         fontWeight:50,
//       },

//       bodyHead:{

//         marginTop:30,
//         marginBottom:18,
//         fontSize:20,
//         fontWeight:50,
//       },

//       Edit:{
//         position:'fixed',
//         bottom:50,
//         right:60,
//       },

//       Chat:{
//         position:'fixed',
//         bottom:120,
//         right:60,
//       },

//       button: {
//         marginLeft:300,
//         marginTop:40,
//         margin: theme.spacing(1),
//         width:150,
//       },

//       editBody:{
//         display:'flex',
//         flexDirection:'column',
//         alignItems:'center',
//       },

//       textBox:{
//         margin:20,
//         width:1000
//       },

//       changePassword :{
//         width:180,
//         marginLeft:1000,
        
//       },

//       textField: {
//         width: '45ch',
//       },

//       margin: {
//         margin: theme.spacing(2),
//       },
      
//       saveChanges:{
//         width:150,
//         marginBottom:30,
//         marginTop:30,
//         marginLeft:850,
//       },
//       contactform:{
//         backgroundColor:'white',
//         width:'80%',
//         borderRadius:'15px',
//         fontSize : "1.2rem !important",
//         fontWeight :"400 !important"
//       },
//       text : {
//         padding : "2px",
//       },
//       button : {
//         margin : "20px",
//       },
//       chatBox  :{
//         margin: "20px 10px 10px 50px",
//         width: "80%",
//         backgroundColor  :"white",
//         padding: "0px",
//         border: "1px solid blue",
//         borderRadius : "15px"
//       },
//       sendButton : {
//         width: "20%",
//         marginTop: "10px",
//         backgroundColor: "#DF4C73",
//         alignItems  : "center"
//       } ,
//        guidelines: {
//         display: "block",
//         margin: "20px",
//         backgroundColor  :"white"
//       },
    
//       guidelineList: {
//         lineHeight: "30px",
//         font: "14px Sans-serif ",
//         paddingLeft: "0px",
//         "@media (max-width : 700px)": {
//           width: "100%",
//           paddingRight: "10px",
//         },
//       },
//       listing1 :{
//         display:'flex',
//         flexDirection:'column',
//         alignItems:'center',
//         backgroundColor:"#F60A66",
//         backgroundColor:"#1DD78A",
//         backgroundColor:"#2CBF87",
//         backgroundColor:"#F39E0B",
//         backgroundColor:"#286FB4",
//         width:180,
//         height:110,
//         marginTop:60,
//         margin:40,
//         marginLeft:150,
//          [theme.breakpoints.down('xs')]: {
//           width:180,
//           height:110,
//           marginTop:40,
//           padding :"5px"
//          },
//       },

//       listing2 :{
//         display:'flex',
//         flexDirection:'column',
//         alignItems:'center',
//         backgroundColor:"#1DD78A",
//         backgroundColor:"#1abc9c",
//         width:180,
//         height:110,
//         marginTop:60,
//         margin:20,
//          [theme.breakpoints.down('xs')]: {
//           width:180,
//           height:110,
//           marginTop:40,
//           padding :"5px"
//          },
//       },
       
//       listNumber:{
//         color:"white",
//         fontSize:50,
//         fontWeight:20,
//       },
//       listLetter:{
//         color:"white",
//         fontSize:17,
//         fontWeight:5,
//         textAlign : "center",
        
//       },
//       rightBox :{
//         display : "flex",
//         flexDirection : "row",
//         position : "relative",
//         left : "260px",
//         [theme.breakpoints.down('xs')]: {
//           position: "relative",
//           left :"-20px",
//           top : "-185px"
//          },
//       },
//       topLeft :{
//         cursor :"pointer"
//       },
//       root: {
//         height: 180,
//       },
//       wrapper: {
//         width: 100 + theme.spacing(2),
//       },
//       paper: {
//         zIndex: 1,
//         position: 'relative',
//         margin: theme.spacing(1),
//       },
//       svg: {
//         width: 100,
//         height: 100,
//       },
//       polygon: {
//         fill: theme.palette.common.white,
//         stroke: theme.palette.divider,
//         strokeWidth: 1,
//       },

// }));
    
    
    

import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import { green, pink } from '@material-ui/core/colors';
import { CenterFocusStrong } from '@material-ui/icons';
import { createMuiTheme } from '@material-ui/core/styles';

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
        backgroundColor:'#E2F0F9',
        display:'flex',
        flexDirection:'row',
          
      },

      

      headUser: {
        marginTop:60,
        marginLeft:"8%",
        fontWeight:300,
        fontSize:30,
        //border:"2px solid red"
    },

     

      pic:{
        width:"175px",
        height:"190px",
        margin:"3%"
      },

      body:{
        backgroundColor:'#E2F0F9',
        display:'flex',
        flexDirection:'column',
        width:"88%",
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
        left:"38%",
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
        width:"18%",
        marginLeft:"80%",
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
        //margin:'2%',
        width:'80%'
      },

      changePassword :{
        width:180,
        marginLeft:"77%",
        
      },

      textField: {
        width: '50ch',
      },

      margin: {
        margin: theme.spacing(2),
      },
      
      saveChanges:{
        width:150,
        marginBottom:30,
        marginTop:30,
        marginLeft:"72%",
      },

      rootTab: {
        backgroundColor:'#F0F8FF' ,
        
        
      },

      topBox:{
        
        width:"84%",
        marginLeft:"8%"

      },


      listing1 :{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:"#286FB4",
        width:"14%",
        height:120,
        marginTop:60,
        margin:"2%",
        marginLeft:"11%",
      },

      listing2 :{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:"#1abc9c",
        width:"14%",
        height:120,
        marginTop:60,
        marginLeft:"2%",
        
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

      [theme.breakpoints.between(1000,1200)]:{
        headUser:{

          fontSize:25,
          fontWeight:300,
        },

        pic:{
          width:"140px",
          height:"160px",
        },

        listing1:{
            height:90,
        },

        listing2:{
          height:90,
        },

        listNumber:{
        
          fontSize:40,
          fontWeight:20,
        },

        listLetter:{
          fontSize:14,
          fontWeight:5,
        },
      
      },
     
      [theme.breakpoints.down(1000)]:{

        pic:{
          marginTop:40,
        },

        head: {
          flexDirection:'column',
          alignItems:"center",
            
        },

        listing1:{
          //display:'flex',
        //flexDirection:'column',
        alignItems:'center',
        //backgroundColor:"#286FB4",
        
        height:120,
        marginTop:20,
        margin:"0",
        //marginLeft:"0",
        width:"100%"
        

      },

      listing2:{
          //display:'flex',
        //flexDirection:'column',
        alignItems:'center',
        //backgroundColor:"#286FB4",
        
        height:120,
        marginTop:20,
        marginBottom:20,
        margin:"0",
        //marginLeft:"0",
        width:"100%"
      },

      headUser: {
        marginTop:20,
        margin:0,
        marginBottom:20,
        fontWeight:350,
        fontSize:40,
        
    },

    Edit:{
      width:"25%",
      marginLeft:"70%",
      
    },

    changePassword :{
      width:170,
      marginLeft:"65%",
      fontSize:13,
      
    },

  },

    [theme.breakpoints.down(700)]:{
      Edit:{
        width:"30%",
        marginLeft:"70%",
        fontSize:10,

    },

    bodyFields:{
      display:'flex',
      flexDirection:'column',
    },

    bodyText:{
      margin:10,
      marginBottom:0,
      marginLeft:16,
      fontSize:15,
      fontweight:200,
    },


    bodyTextValue:{
      position:'relative',
      left:"0%",
      margin:10,
      marginLeft:16,
      fontSize:15,
      fontWeight:50,
    },

    changePassword :{
      width:153,
      marginLeft:"60%",
      fontSize:12,
      
    },

    saveChanges:{
      width:130,
      marginLeft:"65%",
      fontSize:12,
    },

    textField: {
      width: '45ch',
      fontSize:12,
    },

    

    },

    [theme.breakpoints.down(500)]:{
      Edit:{
        width:"36%",
        marginLeft:"65%",
        fontSize:10,

    },

    
    changePassword :{
      width:137,
      marginLeft:"47%",
      fontSize:10.5,
      
    },

    saveChanges:{
      width:120,
      marginLeft:"50%",
      fontSize:10.5,
    },

    textField: {
      fontSize:11,
    },

    passTitle:{
      fontSize:12,
    }

  },

  [theme.breakpoints.down(400)]:{
    Edit:{
      width:"40%",
      marginLeft:"60%",
      fontSize:9,

  },

      
  changePassword :{
    width:100,
    marginLeft:"45%",
    fontSize:10,
    
  },

  textField: {
    fontSize:7,
  },

  passTitle:{
    fontSize:10,
  }


},


    }));
    
    
    

    
    
    
