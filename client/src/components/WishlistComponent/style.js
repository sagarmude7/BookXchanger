import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    backgroundColor: "#eae7dc",
    backgroundImage: `url(${"https://www.transparenttextures.com/patterns/concrete-wall-2.png"})`,
  },
  back:{
    position:'absolute',
    margin:20,
    marginTop:40,
    color:'white',
    zIndex:10,
    [theme.breakpoints.down(900)]:{
      marginTop:60,
    },
  },
  
  container: {
    paddingTop: "20px",
    display : "flex",
    flexWrap : "wrap",
    justifyContent:'center',

  },
  paper: {
    padding: theme.spacing(0.5),
    textAlign: "center",
    color: "#df4c73",
  },
  sortButton: {
    marginRight: "50px",
    marginTop: "10px",
    backgroundColor: "#DF4C73",
    float: "right",
  },
  formControl: {
    backgroundColor: "white",
    border: "1 px solid grey",
    borderRadius: "8px",
    width: "300px",
  },
  parent: {
    width: "100%",
  },
  main: {
    border: "5px solid #000WWW",
    backgroundSize: "cover",
    height: "400px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    marginLeft: "0px",
    marginRight: "0px",
    overflow: "none",
    width: "100%",
    zIndex: "-1",
    transform: "translateY(10%,0%)",
  },
  heading: {
    textAlign: "center",
    zIndex: "10",
    fontWeight: "900",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    background: "-webkit-linear-gradient(#e73426, #e85a4f)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
  grid:{
    padding:'10px'
  }
}));
