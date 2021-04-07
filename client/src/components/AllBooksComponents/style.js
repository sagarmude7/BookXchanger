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
  sortButton: {
    marginRight: "50px",
    marginTop: "0px",
    backgroundColor: "#DF4C73",
    float: "right",
  },
  formControl: {
    backgroundColor: "white",
    border: "1 px solid grey",
    borderRadius: "8px",
    width: "300px",
  },
}));
