import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  //
  card: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgb(216,199,165)",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
    width:'280px',
    
    
  },

  top: {
    position: "relative",
    height: "180px",
    
  },

  media: {
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    backgroundBlendMode: "darken",
    
  },

  overlay2: {
    position: "absolute",
    top: "20px",
    right: "0px",
    color: "white",
  },

  favourite: {
    position: "relative",
    top: "-90px",
    left: "240px",
    transform: "scale(1.3)",
    transition: ".5s",

    "&:hover": {
      color: "#ffffff",
      //transform: "scale(1.31)",
      textShadow: "0 0 5px #ffffff",
    },
    
  },

  price: {
    color: "white",
    position: "relative",
    top: "-50px",
    left: "15px",
    fontSize: "20px",
    fontWeight: "1000",
    
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
    textOverflow: "ellipsis",
    overflow: "hidden",
    
  },

  BookName: {
    margin: "5px 15px 7px 15px",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
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
      color: "#e98074",
      //textShadow: "0 0 5px #e98074",
    },
  },
  button: {
    backgroundColor: "#e98074",
    "&:hover": {
      backgroundColor: "#e85A4f",
    },
  },
});
