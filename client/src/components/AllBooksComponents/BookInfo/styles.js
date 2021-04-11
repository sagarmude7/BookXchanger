import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
  root: {
    margin: "auto",
  },

  topContainer: {
    position: "relative",
    width: "100%",
    color: "white",
    height: "350px",
    paddingTop: "20px",
    backgroundColor: "rgb(216,199,165)",
    zIndex  : "10",
    backgroundImage : "url('https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1600')",
    "@media (max-width : 700px)": {
      height: "225px",
      paddingTop: "40px",
    },
  },

  bottomLeft: {
    color: "black",
    fontSize: "60px",
    paddingLeft: "8%",
    position: "absolute",
    bottom: "8px",
    left: "16px",
    "@media (max-width : 700px)": {
      fontSize: "30px",
      paddingLeft: "4%",
    },
  },

  topLeft: {
    color: "black",
    margin: "10px",
    fontSize: "55px",
    "@media (max-width : 700px)": {
      margin: "5px",
      fontSize: "25px",
    },
  },

  edition: {
    fontSize: "30px",
    color: "rgb(216,199,165)",
    display: "inline",
    "@media (max-width : 700px)": {
      fontSize: "15px",
    },
  },

  branch: {
    color: "rgb(216,199,165)",
    backgroundColor: "#df4c73",
    width: "200px",
    minWidth: "10px",
    padding: "3px 5px",
    fontSize: "15px",
    fontWeight: "700",
    lineHeight: "1.5",
    color: "#fff",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    "@media (max-width : 700px)": {
      fontSize: "10px",
      width: "125px",
    },
  },

  date: {
    color: "white",
    fontSize: "15px",
    "@media (max-width : 700px)": {
      fontSize: "9px",
    },
    zIndex :"-2"
  },

  bookMain: {
    color: "rgb(216,199,165)",
    display: "inline-block",
    textShadow :"1px 1px 2px black ,0 0 10px blue, 0 0 5px green"
  },
  price: {
    display: "inline-block",
    fontSize: "25px",
    fontWeight: "600",
    color: "#df4c73",
    marginLeft: "100px",
    "@media (max-width : 700px)": {
      fontSize: "15px",
      marginLeft: "0px",
    },
  },

  middleContainer: {

    color: "black",
    position: "relative",
    paddingTop: "20px",
    paddingLeft: "6%",
    paddingRight: "6%",
    paddingBottom: "20px",
    position: "relative",
    width: "100%",
    color: "black",
    margin: "auto",
    height: "auto",
    background: "#e6e6e6",
    "@media (max-width : 700px)": {
      paddingLeft: "2%",
      paddingRight: "2%",
    },
    borderRadius : "10px 20px 10px 30px"
  },

  imgAndInfo: {
    display: "block",
  },

  bookDetails: {
    display: "inline-block",
    width: "800px",
    marginRight: "10px",
    backgroundColor: "rgb(216,199,165)",
    padding :"1px",
    borderRadius : "10px 2px 20px 10px",
    boxShadow:  "4px 1px 20px 10px grey",
    "@media (max-width : 900px)": {
      width: "100%",
      marginRight: "0px",
    },

  },

  bookImage: {
    width: "400px",
    height: "300px",
    // width: "450px",
    // height: "500px",
    margin: "20px",
    float: "left",
    display: "inline-block",
    "@media (max-width : 900px)": {
      width: "100%",
      height: "400px",
      margin: "10px",
      paddingRight: "20px",
    },
  },

  list: {
    lineHeight: "45px",
    font: "18px Sans-serif ",
    width: "350px",
    margin: "0px",
    display: "inline-block",
    paddingLeft: "20px",
    paddingRight: "20px",
    marginTop: "6px",
    "@media (max-width : 700px)": {
      width: "100%",
      paddingLeft: "10px",
      paddingRight: "10px",
    },

  },

  bookDescription: {
    display: "block",
    margin: "20px",
    paddingRight: "",
    "@media (max-width : 700px)": {
      width: "100%",
      margin: "10px",
      paddingRight: "10px",
    },
  },

  socialMediaButton: {
    margin: "4px",
  },

  name: {
    color: "#DF4C73",
    "&:hover": {
      color: "black",
    },
  },

  sideContainer: {
    color: "black",
    display: "inline-block",
    width: "400px",
    backgroundColor: "#f2f2f2",
    height: "auto",
    margin :"40px",
    padding :"20px",
    borderRadius : "10px 2px 20px 10px",
    boxShadow:  "4px 1px 20px 10px grey",
    "@media (max-width : 700px)": {
      width: "100%",
      paddingLeft: "2%",
      paddingRight: "2%",
      margin :"10px",
      padding :"2px",
      width: "350px",
    },

  },

  contactUser: {
    display: "block",
    margin: "20px",
   
  },

  UserInfo: {
    margin: "10px",
    fontSize : "29px"
  },
  userProfilePic: {
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    float: "left",
    marginRight: "10px",
  },

  chatBox: {
    marginTop: "40px",
    width: "100%",
  },

  SendButton: {
    width: "100%",
    marginTop: "10px",
    backgroundColor: "#DF4C73",
  },

  guidelines: {
    display: "block",
    margin: "20px",
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
}));

export default styles;
