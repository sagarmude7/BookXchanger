import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  body: {
    background: "#eae7dc",
    borderRadius: "5px",
    minHeight: "auto",
    margin: "20px 10px",
    border: "2px solid #8e8d8a",
  },
  container: {
    width: "100%",
    padding: "12px",
    margin: "0px",
    display : "flex",
    flexWrap : "wrap",
    justifyContent:'center',
  },
  grid:{
    padding:'10px'
  }
}));
