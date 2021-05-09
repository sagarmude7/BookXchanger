import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  parent: {
    width: "100%",
    paddingTop: "20px",
    height: "auto",
    paddingBottom: "20px",
    background:
      "linear-gradient(180deg, rgba(234,231,220,1) 48%, rgba(216,199,165,1) 96%)",
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

  name: {},

  description: {},
}));

export default styles;
