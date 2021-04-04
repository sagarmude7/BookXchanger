import React, { useState, useEffect } from "react";
import {
  TextField,
  Container,
  Paper,
  Button,
  Typography,
  Grid,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import useStyles from "./style";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postFeedBackForm } from "../../../actions/user";
import { FEEDBACK } from "../../../constants/actions";

const Contact = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [feedData, setFeedData] = useState({
    name: "",
    message: "",
  });
  const history = useHistory();
  const [err, setErr] = useState(false);
  const [loader, setLoader] = useState(false);
  const user = JSON.parse(localStorage.getItem("profile"));
  const feedback = useSelector((state) => state.user);

  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };
  const handleChange = (e) => {
    setFeedData({ ...feedData, [e.target.name]: e.target.value });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setErr(false);

    dispatch({ type: FEEDBACK, payload: {} });
  };

  useEffect(() => {
    if (feedback.msg) setErr(true);
    if (feedback.severity === "success") {
      setFeedData({ ...feedData, name: "", message: "" });
      console.log("Done");
    }
  }, [feedback]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    if (!user) {
      history.push("/auth");
    }
    setLoader(true);
    dispatch(postFeedBackForm({ ...feedData, email: user.profile.email }));
  };

  return (
    <>
      <div className={classes.main}>
        <div className={classes.top}>
          <hr style={{ borderWidth: "0px" }} />
          <hr style={{ borderWidth: "0px" }} />
          <Typography variant="h5" align="center">
            Get in touch with Us
          </Typography>
          <hr style={{ border: "1px solid black", width: "300px" }} />
          <hr style={{ borderWidth: "0px" }} />
        </div>
        <div className={classes.bottom}>
          <div className={classes.left}>
            <Container style={{ borderRadius: "5px", border: "red" }}>
              <form
                autoComplete="off"
                noValidate
                className={`${classes.root} ${classes.form}`}
                onSubmit={handleSubmit}
              >
                <Typography variant="h6" align="center">
                  Send us a Message
                </Typography>
                {err ? (
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
                ) : null}
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
                  label="Message"
                  fullWidth
                  multiline
                  rows={6}
                  value={feedData.message}
                  onChange={handleChange}
                />
                <Button
                  variant="contained"
                  type="submit"
                  className={classes.button}
                  endIcon={<SendIcon />}
                >
                  <Typography>Send</Typography>
                </Button>
              </form>
            </Container>
          </div>
          <div className={classes.right}>
            <Typography variant="h4" align="center">
              How can we Help ?
            </Typography>
            <Typography variant="body1" align="center">
              Feel free to get in touch with us. We are always open to discuss
              new ideas and and suggestions.
            </Typography>
            <List className={classes.root}>
              <ListItem alignItems="center" className={classes.listItem}>
                <ListItemText
                  alignItems="center"
                  primary={
                    <React.Fragment>
                      <Typography
                        align="center"
                        component="span"
                        variant="h6"
                        color="textPrimary"
                      >
                        Suggestion
                      </Typography>
                    </React.Fragment>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        align="center"
                        component="span"
                        variant="body1"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        You can give us suggestion to improve user experience or
                        any service which we can improve. We are always open to
                        discuss new ideas.
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="center" className={classes.listItem}>
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography
                        variant="h6"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        Facing any Issue
                      </Typography>
                    </React.Fragment>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        variant="body1"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        If you are facing any issue during posting book or
                        buying a book. Feel free to reach out to us.
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="center" className={classes.listItem}>
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="h6"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        Report an Ad
                      </Typography>
                    </React.Fragment>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body1"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        If you find any Ad with Hate speech, Violence, Nudity or
                        any banned content. Report us immediately.
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
            {/* <Typography variant="h6" align="center" color="textPrimary">
              Report an Ad
            </Typography>
            <Typography variant="body1" align="center" color="textPrimary">
              If you find any Ad with Hate speech, Violence, Nudity or any
              banned content. Report us immediately.
            </Typography> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

/*
MONGO_URI=mongodb+srv://Bookxchanger:Book@12341234@bookxchanger.hvboa.mongodb.net/Booxchanger?retryWrites=true&w=majority
TOKEN_SECRET=3nklbfpavxzqqu37474
*/
