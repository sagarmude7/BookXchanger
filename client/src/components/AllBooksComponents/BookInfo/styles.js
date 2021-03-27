import { makeStyles } from "@material-ui/core/styles";
const styles = makeStyles({
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
  details: {
    fontFamily: "Lucida Console, Courier New,monospace",
    display: "flex",
    flexDirection: "column",
  },

  middleContainer: {
    paddingTop: "20px",
    paddingLeft: "8%",
    paddingRight: "8%",
    paddingBottom: "20px",
    position: "relative",
    width: "100%",
    color: "white",
    background: "#d5e7f2",
  },

  bookImage: {
    width: "500px",
    height: "400px",
    "@media (max-width : 700px)": {
      width: "100%",
    },
  },

  bookInfo: {
    display: "inline",
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
  userProfilePic: {
    height: "70px",
    width: "70px",
    borderRadius: "50%",
  },

  SendButton: {
    margin: "2px",
  },
});

export default styles;
