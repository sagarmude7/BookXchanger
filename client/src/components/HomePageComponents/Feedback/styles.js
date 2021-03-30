import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  parent: {
    width: "100%",

    marginTop: "20px",
    height: "auto",
    marginBottom: "20px",
  },

  content: {
    width: "500px",
    margin: "auto",
    "@media (max-width : 700px)": {
      width: "100%",
    },
  },

  title: {
    fontSize: 14,
  },
}));

export default styles;
