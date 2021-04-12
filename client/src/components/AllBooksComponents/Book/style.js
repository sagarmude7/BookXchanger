import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgb(216,199,165)",

    borderRadius: "15px",
    height: "100%",
    position: "relative",
    "@media (max-width : 900px)": {
      width: "100% !important",
      margin: "auto",
    },
    // "@media (max-width : 900px)": {
    //     height : "400px"
    // },
  },

  top: {
    position: "relative",
    height: "180px",
    "@media (max-width : 900px)": {
      height: "350px",
    },
    "@media (max-width : 400px)": {
      height: "220px",
    },
  },

  media: {
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    backgroundBlendMode: "darken",
    "@media (max-width : 900px)": {
      height: "200px",
    },
    "@media (max-width : 400px)": {
      height: "160px",
    },
  },

  favourite: {
    position: "relative",
    top: "-28px",
    left: "250px",
    transform: "scale(1.3)",
    transition: ".5s",

    "&:hover": {
      color: "#e85a4f",
      transform: "scale(1.31)",
      textShadow: "0 0 5px #e85a4f",
    },
    "@media (max-width : 900px)": {
      top: "2.5px",
      left: "293px",
      paddingBottom: "1px",
      transform: "scale(1.3)",
    },
    "@media (max-width : 720px)": {
      bottom: "2.5px",
      left: "180px",
      paddingBottom: "10px",
      transform: "scale(1.3)",
    },
    "@media (max-width : 428px)": {
      top : "-29px",
      left: "265px",
      paddingBottom: "1px",
      transform: "scale(1.3)",
    },
    
  },

  price: {
    color: "#eae7dc",
    position: "relative",
    top: "-50px",
    left: "15px",
    fontSize: "20px",
    fontWeight: "1000",
    "@media (max-width : 900px)": {
      top: "15px",
      fontSize: "12px",
      left: "10px",
    },
    "@media (max-width : 900px)": {
      width: "100% !important",
      margin: "auto",
    },
  },

  Branch: {
    backgroundColor: "#e98074",
    width: "140px",
    marginLeft: "15px",
    fontSize: "11px",
    fontWeight: "500",
    padding: "1px auto",
    color: "black",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    "@media (max-width : 900px)": {
      fontSize: "12px",
      marginTop :"0px",
      padding : "1px",
      position : "absolute",
      top : "250px"
    },
    "@media (max-width : 700px)": {
      fontSize: "12px",
      marginTop :"0px"
    },
    "@media (max-width : 428px)": {
      fontSize: "12px",
      marginTop :"0px",
      width: "180px",
      padding :"1px",
      position : "absolute",
      top : "190px"

    },
  },

  BookName: {
    margin: "5px 15px 7px 15px",
    "@media (max-width : 900px)": {
      margin: "-40px 15px 7px 15px",
    },
    "@media (max-width : 428px)": {
      margin: "15px 15px 7px 15px",
    },
  },

  Description: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    marginLeft: "15px",
    marginRight: "15px",
    marginBottom: "10px",
  },

  owner: {
    color: "black",
    transition: "0.5s",
    "&:hover": {
      color: "#e85a4f",
      textShadow: "0 0 5px ##e98074",
    },
  },
  button: {
    backgroundColor: "#e98074",
    "&:hover": {
      backgroundColor: "#e85a4f",
    },
  },
});
