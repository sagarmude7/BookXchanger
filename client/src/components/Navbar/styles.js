import { makeStyles } from "@material-ui/core";
const styles = makeStyles((theme) => ({
  appBar: {
    background: "#DF4C73",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    "@media (max-width : 900px)": {
      paddingLeft: 0,
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  menuButton: {
    fontWeight: 700,
    marginLeft: "30px",
    color: "white !important",
    "&:hover": {
      borderBottom: "2px solid white",
      borderRadius: "0px !important",
      transform: "translateY(4px)",
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
    background: "#000",

    borderRadius: "20px",
    margin: "10px",
    fontWeigth: "500",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  image: {
    marginLeft: "15px",
  },
  midNavbar: {
    width: "650px",
    alignItems :"center"
  },
  mobileloginMenu: {
    float: "right",
    margin: "20px",
  },

  // dropbtn :  {
  //   backgroundColor: "#4CAF50",
  //   color: "white",
  //   padding: "16px",
  //   fontSize: "16px",
  //   border: "none",
  //   cursor: "pointer",
  // },

  // dropdown :  {
  //           position: "relative",
  //           display: "inline-block",
  //           "& : hover" :
  //             {
  //                 "& dropdownContent" :
  //                 {
  //                 display: "block",
  //                 },
  //                  "& dropbtn" :
  //                 {
  //               backgroundColor: "#3e8e41",
  //                 },
  //            },

  // },

  //  dropdownContent : {
  //       display:" none",
  //       position: "absolute",
  //       backgroundColor: "#f9f9f9",
  //       minWidth: "160px",
  //       boxShadow:" 0px 8px 16px 0px rgba(0,0,0,0.2)",
  //       zIndex: "1"
  // },

  // dropdownContent :{
  //     "& a" : {
  //       color: "black",
  //       padding: "12px 16px",
  //       textDecoration: "none",
  //       display: "block",
  //           "& : hover" : {
  //             backgroundColor:" #f1f1f1"
  //           },
  //     },
  // },
}));
export default styles;
