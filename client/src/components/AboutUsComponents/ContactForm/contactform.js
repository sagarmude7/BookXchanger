import React, { useState, useEffect } from "react";
import { TextField, Container, Paper, Button } from "@material-ui/core";
import { Alert } from '@material-ui/lab';
import { Input } from "@material-ui/core";
import useStyles from "./style";
import { useDispatch,useSelector } from "react-redux";
import { postFeedBackForm } from "../../../actions/user";

const Contact = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const nameError = "";
  const emailError = "";
  const messageError = "";
  const [feedData, setFeedData] = useState({
    name: "",
    message: "",
  });
  const [loader, setLoader] = useState(false);
  const user = JSON.parse(localStorage.getItem("profile"));
  const feedback = useSelector(state => state.user)
  const validate = () => {
    let nameError = "";
    let emailError = "";
    // let passwordError = "";

    if (!this.state.name) {
      nameError = "name cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (emailError || nameError) {
      this.setState({ emailError, nameError });
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    setFeedData({ ...feedData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    dispatch(postFeedBackForm({ ...feedData, email: user.profile.email }));
    setFeedData({...feedData,name:'',message:''})
  };

  return (
    <Container>
      <Paper className={classes.paper}>
        {
          feedback?(
            <Alert severity="success">
                  <strong>{feedback?.msg}</strong>
            </Alert>
          ):null
        }
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <h1>Contact Us 🤳</h1>

          <TextField
            name="name"
            variant="outlined"
            label="Enter your name"
            fullWidth
            value={feedData.name}
            onChange={handleChange}
          />
          <TextField
            name="message"
            variant="outlined"
            label="Give Your Feedback Here"
            fullWidth
            multiline
            rows={4}
            value={feedData.message}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Contact;
