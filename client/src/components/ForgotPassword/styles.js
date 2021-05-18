import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  bg: {
    width: "100%",
    height: "100%",
    padding: "0.1px",
    background:
      "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,224,187,1) 51%)",
  },

  name: {
    fontSize: "20px",
    padding: "10px ",
    fontWeight: "100px",
  },

  container: {
    margin: "150px 500px",
    padding: "20px 0",
    border: "3px solid #D8C3A5",
    textAlign: "center",
    background:
      "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(234,231,220,1) 51%)",
    "@media (max-width : 700px)": {
      margin: "150px 10px",
      padding: "20px 0",
    },
  },

  icon: {
    width: 60,
    height: 60,
    "@media (max-width : 700px)": {
      width: 40,
      height: 40,
    },
  },

  formfield: {
    margin: "20px 0px",
  },

  button: {
    textTransform: "uppercase",
    transition: "0.5s",
    backgroundSize: "200% auto",
    backgroundImage:
      "linear-gradient(to right, #E85A4F 0%, #FFEDBC  51%, #E85A4F  100%)",
    "&:hover": {
      backgroundPosition: "right center",
      color: "#fffff",
      textDecoration: "None",
    },
  },
}));

export default styles;
