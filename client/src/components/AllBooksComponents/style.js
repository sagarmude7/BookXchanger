import { makeStyles } from "@material-ui/core/styles";

<style>
  @import url('https://fonts.googleapis.com/css2?family=Mukta&display=swap');
</style>;

export default makeStyles((theme) => ({
  smMargin: {
    margin: theme.spacing(1),
  },
  container: {
    paddingTop: "20px",
  },
  actionDiv: {
    textAlign: "center",
  },
  paper: {
    padding: theme.spacing(0.5),
    textAlign: "center",
    color: "#df4c73",
  },

  sortby: {
    padding: "0px 24px",
    margin: "0px 51px",
    "@media (max-width : 700px)": {
      padding: "0px 10px",
      margin: "0px 10px",
    },
  },

  box: {
    width: "250px",
    "@media (max-width : 700px)": {
      width: "200px",
    },
  },

  formControl: {
    marginTop: "10px",
    border: "1 px solid #df4c73",
    borderRadius: "8px",
    width: "250px",
    padding: "0px 0px",
    "@media (max-width : 700px)": {
      width: "100%",
    },
  },

  buttonS: {
    padding: "0px 0px",
  },
}));
