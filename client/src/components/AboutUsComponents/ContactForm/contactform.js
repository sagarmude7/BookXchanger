import React, { useState, useEffect } from "react";
import { TextField, Container, Paper, Button } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar'
import useStyles from "./style";
import {useHistory } from 'react-router-dom'
import { useDispatch,useSelector } from "react-redux";
import { postFeedBackForm } from "../../../actions/user";
import { FEEDBACK } from "../../../constants/actions";
import Jello from 'react-reveal/Jello';
const Contact = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [feedData, setFeedData] = useState({
    name: "",
    message: "",
  });
  const history = useHistory()
  const [err,setErr] = useState(false)
  const [loader, setLoader] = useState(false);
  const user = JSON.parse(localStorage.getItem("profile"));
  const feedback = useSelector(state => state.user)

  const Alert = (props)=>{
    return <MuiAlert elevation={6} variant="filled" {...props}/>
  }
  const handleChange = (e) => {
    setFeedData({ ...feedData, [e.target.name]: e.target.value });
  };
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setErr(false);
    
    dispatch({type:FEEDBACK,payload:{}})
  };

  useEffect(()=>{
    if(feedback.msg)
      setErr(true)
    if(feedback.severity==="success"){
      setFeedData({...feedData,name:'',message:''})
      console.log("Done")
    }
  },[feedback])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    if(!user){
      history.push('/auth')
    }
    setLoader(true);
    dispatch(postFeedBackForm({ ...feedData, email: user.profile.email }));
    
    
  };

  return (
    <Jello right>
    <Container>
      <Paper className={classes.paper}>
        
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >

          <h1>Contact Us 🤳</h1>
          {
                err ? (
                  <Snackbar
                    style={{ top: "10%", left: "50%" }}
                    anchorOrigin={{ horizontal: "center", vertical: "top" }}
                    open={err}
                    autoHideDuration={5000}
                    onClose={handleClose}
                  >
                    <Alert onClose={handleClose} severity={feedback.severity}>
                      <strong>{feedback?.msg}</strong>
                    </Alert>
                  </Snackbar>
                ) : null
              }
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
    </Jello>
  );
};

export default Contact;

/*
MONGO_URI=mongodb+srv://Bookxchanger:Book@12341234@bookxchanger.hvboa.mongodb.net/Booxchanger?retryWrites=true&w=majority
TOKEN_SECRET=3nklbfpavxzqqu37474
*/
