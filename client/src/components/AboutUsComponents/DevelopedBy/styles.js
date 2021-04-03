import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textDecoration: "none",
    height: "27rem",
    width: "20rem",
    cursor: "pointer",
  },
  frontCard: {
    backgroundColor: theme.palette.background.paper,
    padding: "1rem 0rem 1rem 0rem",
  },
  backCard: {
    padding: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  backCardContent: {
    backgroundColor: "rgba(81, 176, 7, 0.75)",
    height: "100%",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  img: {
    width: "100%",
    height: "80%",
    objectFit: "cover",
    margin: "0 1rem 1rem 1rem",
    alignSelf: "center",
    textAlign: "center",
    lineHeight: "25rem",
  },
}));
