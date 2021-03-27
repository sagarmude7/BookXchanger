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
    backgroundImage: "linear-gradient(0deg, #B0DDE4, #E2F0F9)",
    "@media (max-width : 700px)": {
      height: "225px",
      paddingTop: "40px",
    },
  },

  bottomLeft: {
    color: "black",
    fontSize: "50px",
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
    fontSize: "35px",
  },

  edition: {
    fontSize: "30px",
    display: "inline",
    "@media (max-width : 700px)": {
      fontSize: "15px",
    },
  },

  branch: {
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
    fontSize: "15px",
    "@media (max-width : 700px)": {
      fontSize: "9px",
    },
  },
  price: {
    fontSize: "25px",
    fontWeight: "600",
    color: "#df4c73",
  },

  details: {
    fontFamily: "Lucida Console, Courier New,monospace",
    display: "flex",
    flexDirection: "column",
  },

  middleContainer: {
    position: "relative",
    paddingTop: "20px",
    paddingLeft: "8%",
    paddingRight: "8%",
    paddingBottom: "20px",
    position: "relative",
    width: "100%",
    color: "white",
    margin: "auto",
    background: "#d5e7f2",
    "@media (max-width : 700px)": {
      paddingLeft: "4%",
      paddingRight: "4%",
    },
  },

  bookDetails: {
    backgroundColor: "black",
  },

  bookImage: {
    width: "450px",
    height: "500px",
    margin: "10px",
    float: "left",
    "@media (max-width : 700px)": {
      width: "100%",
    },
  },

  bookInfo: {
    margin: "10px",
    display: "inline",
  },

  list: {
    lineHeight: "45px",
    font: "18px Sans-serif ",
    width: "450px",
    "@media (max-width : 700px)": {
      width: "300px",
    },
  },

  socialMediaButton: {
    margin: "4px",
  },

  name: {
    color: "#DF4C73",
    "&:hover": {
      color: "#E2F0F9",
    },
  },

  UserInfo: {
    margin: "10px",
  },
  userProfilePic: {
    height: "70px",
    width: "70px",
    borderRadius: "50%",
    float: "left",
    margin: "0 10px",
  },

  chatBox: {
    marginTop: "40px",
    width: "50%",
  },

  SendButton: {
    margin: "2px",
    width: "50%",
  },
}));

export default styles;
