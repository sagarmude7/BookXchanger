import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles((theme) => ({
  root: {
    margin: "auto",
  },
  back: {
    position: "absolute",
    margin: 20,
    marginTop: 20,
    color: "white",
    zIndex: 10,
    [theme.breakpoints.down(900)]: {
      marginTop: 35,
    },
  },

  topContainer: {
    position: "relative",
    width: "100%",
    height: "350px",
    zIndex: "10",
    paddingTop: "20px",
    backgroundImage:
      "linear-gradient(rgba(0,1,1,0.3),rgba(1,0,0.5)),url('https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
    "@media (max-width : 700px)": {
      height: "275px",
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
    color: "white",
    margin: "10px",
    fontSize: "40px",
    "@media (max-width : 700px)": {
      margin: "10px",
      fontSize: "25px",
    },
  },

  edition: {
    fontSize: "30px",
    color: "rgb(216,199,165)",
    display: "inline",
    textShadow: "1px 1px 2px black ,0 0 10px blue, 0 0 5px green",
    "@media (max-width : 700px)": {
      fontSize: "15px",
    },
  },

  branch: {
    color: "rgb(216,199,165)",
    backgroundColor: "#e98074",
    width: "200px",
    minWidth: "10px",
    padding: "3px 5px",
    fontSize: "15px",
    fontWeight: "700",
    lineHeight: "1.5",

    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    textShadow: "none",
    "@media (max-width : 700px)": {
      fontSize: "10px",
      width: "125px",
    },
  },

  date: {
    color: "white",
    fontSize: "15px",
    textShadow: "1px 1px 2px black ,0 0 10px blue, 0 0 5px green",
    "@media (max-width : 700px)": {
      fontSize: "9px",
    },
    zIndex: "-2",
  },

  bookMain: {
    color: "rgb(216,199,165)",
    display: "inline-block",
    textShadow: "1px 1px 2px black ,0 0 10px blue, 0 0 5px green",
  },
  price: {
    display: "inline-block",
    fontSize: "25px",
    fontWeight: "600",
    color: "#d8c3a5",
    marginLeft: "100px",
    textShadow: "1px 1px 2px black ,0 0 10px blue, 0 0 5px green",
    "@media (max-width : 700px)": {
      fontSize: "15px",
      marginLeft: "0px",
    },
  },

  middleContainer: {
    display: "flex",
    flexDirection: "row",
    color: "black",
    position: "relative",
    paddingTop: "20px",
    paddingLeft: "6%",
    paddingRight: "6%",
    paddingBottom: "20px",
    background: "rgb(234,231,220)",
    width: "100%",
    margin: "auto",
    height: "auto",

    "@media (max-width : 700px)": {
      paddingLeft: "2%",
      paddingRight: "2%",
      display: "inline",
      background: "rgb(234,231,220)",
    },
  },

  imgAndInfo: {
    display: "block",
  },
  container: {
    display: "flex",
    flexDirection: "row",
  },
  bookDetails: {
    display: "inline",
    width: "900px",
    marginRight: "10px",
    backgroundColor: "rgb(216,199,165)",
    padding: "1px",
    borderRadius: "5px",
    boxShadow: "1px 1px 30px 2px grey",
    "@media (max-width : 900px)": {
      width: "100%",
      marginRight: "0px",
    },
  },

  bookImage: {
    width: "400px",
    height: "400px",
    margin: "20px",
    float: "left",
    display: "inline-block",
    "@media (max-width : 900px)": {
      width: "100%",
      height: "400px",
      margin: "0px",
      padding: "20px",
    },
  },

  list: {
    lineHeight: "45px",
    font: "18px Sans-serif ",
    width: "auto",
    display: "inline-block",

    padding: "20px",
    marginTop: "6px",
    "@media (max-width : 700px)": {
      width: "100%",
      margin: "0px",
      padding: "20px",
    },
  },

  bookDescription: {
    display: "block",
    margin: "20px",
    paddingRight: "",
    "@media (max-width : 700px)": {
      width: "100%",
      margin: "0px",
      padding: "20px",
    },
    wordWrap: "break-word",
  },

  socialMediaButton: {
    margin: "4px",
    transition: "0.5s",
    "&:hover": {
      transform: "scale(1.3)",
    },
  },

  name: {
    color: "#E85A4F",
    "&:hover": {
      color: "E98O74",
    },
  },

  sideContainer: {
    color: "black",
    display: "inline",
    width: "350px",
    backgroundColor: "rgb(216,199,165)",
    height: "auto",
    padding: "20px",
    marginLeft: "10px",
    borderRadius: "5px",
    boxShadow: "1px 1px 30px 2px grey",
    "@media (max-width : 700px)": {
      width: "100%",
      padding: "20px",
      marginLeft: "0px",
    },
  },

  contactUser: {
    display: "block",
    margin: "5px",
  },

  UserInfo: {
    margin: "10px",
    fontSize: "29px",
  },
  userProfilePic: {
    height: "80px",
    width: "80px",
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
