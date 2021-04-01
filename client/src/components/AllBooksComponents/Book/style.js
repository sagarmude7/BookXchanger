import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
    "@media (max-width : 900px)": {
      width: "100% !important",
      margin: "auto",
    },
  },

  top: {
    position: "relative",
  },

  media: {
    height: 0,

    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    backgroundBlendMode: "darken",
    marginBottom: "20px",
    "@media (max-width : 900px)": {
    paddingTop : "5px"
    },
  },

  favourite: {
    position: "absolute",
    top: "110px",
    right: "2px",
    transform: "scale(1.3)",
    transition: ".5s",
    "&:hover::before": {
      transform: "scale(1.3)",
    },

    "&:hover": {
      color: "#ffffff",
      transform: "scale(1.5)",
      textShadow: "0 0 5px #ffffff",
    },
    "@media (max-width : 700px)": {
      bottom: "2.5px",
      right: "10px",
      paddingBottom: "10px",
      transform: "scale(1.3)",
    },
  },

  price: {
    color: "white",
    position: "relative",
    top: "-60px",
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
    backgroundColor: "#df4c73",
    width: "140px",
    marginLeft: "15px",
    fontSize: "11px",
    fontWeight: "500",
    padding: "1px auto",
    color: "#fff",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    "@media (max-width : 700px)": {
      fontSize: "12px",
    },
  },

  BookName: {
    margin: "5px 15px 7px 15px",
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
      color: "#df4c73",
      textShadow: "0 0 5px #df4c73",
    },
  },
  button: {
    backgroundColor: "#df4c73",
  },
});
