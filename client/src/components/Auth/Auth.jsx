import React, { useState, useEffect } from "react";
import {
  Paper,
  Grid,
  Typography,
  Button,
  Avatar,
  TextField,
  Box,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  List,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from "./Input";
import useStyles from "./styles";
import GoogleIcon from "./GoogleIcon";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "react-google-login";
import { signUp, signIn, googleFacebookSignIn,sendPasswordMail } from "../../actions/auth";
import { VALID } from "../../constants/actions";
import Fade from "react-reveal/Fade";
import VerifyEmail from "../VerifyEmail/VerifyEmail";
import {sendVerifyMail} from "../../actions/auth"

const initialState = {
  firstName: "",
  lastName: "",
  college: "",
  location: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Auth = () => {
  const classes = useStyles();
  const [isSignup, setIsSignup] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const book = useSelector((state) => state.book);
  const [err, setErr] = useState(false);
  const history = useHistory();
  const [open,setOpen] = useState(false);
  const [openNew,setOpenNew] = useState(false);
  const [resetEmail,setResetEmail] = useState('');
  const [verifyEmail,setVerifyEmail] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (book.msg) setErr(true);
  }, [book]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signUp(formData, history));
    } else {
      dispatch(signIn(formData, history));
    }
  };

  

  const handleClickOpen = ()=>{
    setOpen(true);
  }

  const handleDialogueClose = ()=>{
    setOpen(false);
  }
  const handleClickOpenNew = ()=>{
    setOpenNew(true);
  }

  const handleDialogueCloseNew = ()=>{
    setOpenNew(false);
  }

  const handleClickSendMail = ()=>{
    dispatch(sendPasswordMail(resetEmail))
  }
  const handleClickVerifyMail = ()=>{
    dispatch(sendVerifyMail(verifyEmail))
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setErr(false);
    dispatch({ type: VALID, payload: {} });
  };

  const switchMode = () => {
    setIsSignup((previsSignUp) => !previsSignUp);
    setShowPassword(false);
    setFormData({ ...formData, email: "", password: "" });
  };

  const handleShowPassword = () => {
    setShowPassword((prevshowPassword) => !prevshowPassword);
  };

  const googleSuccess = async (res) => {
    try {
      dispatch(
        googleFacebookSignIn(
          {
            email: res.profileObj.email,
            name: res.profileObj.name,
            profilePic: res.profileObj.imageUrl,
          },
          history
        )
      );
    } catch (err) {}
  };

  const googleError = () => {
    alert("Google Sign In was unsuccessful. Try again later");
  };

  return (
    <div className={classes.mainContainer}>
      <Grid container>
        <Grid xs={12} sm={6} className={classes.grid}>
          <Fade down>
            <Box align="center">
              <div className={classes.reg}>
                <Typography
                  component="h2"
                  variant="h4"
                  style={{ textAlign: "center", color: "#000" }}
                >
                  {isSignup ? "Register With Us" : "Sign In to your Account"}
                </Typography>
              </div>
            </Box>
            {/* <hr align="center" style={{ border: "1px solid #19120b"}}></hr> */}
            <List>
              <ListItem className={classes.list}>
                <ListItemAvatar>
                  <Avatar
                    variant="square"
                    className={classes.avatar}
                    alt="User DashBoard"
                    src="https://media.giphy.com/media/cJAVot5go0jTGlCWfr/giphy.gif"
                  />
                </ListItemAvatar>

                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="h6"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        User Dashboard
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
                        Track the status of your ads history with friendly
                        Userboard.
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem className={classes.list}>
                <ListItemAvatar>
                  <Avatar
                    variant="square"
                    className={classes.avatar}
                    alt="Chat & Messaging"
                    src="https://media.giphy.com/media/YmnlVEP5ALdUMcTvVv/giphy.gif"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="h6"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        Chat & Messaging
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
                        Access your chats and account info from any device.
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem className={classes.list}>
                <ListItemAvatar>
                  <Avatar
                    variant="square"
                    className={classes.avatar}
                    alt="Avoid Calls"
                    src="https://media.giphy.com/media/L3u0T2DZ3D55srukju/giphy.gif"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="h6"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        Avoid Calls
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
                        No compulsion of providing mobile numbers. Use in-built
                        chat system.
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem className={classes.list}>
                <ListItemAvatar>
                  <Avatar
                    variant="square"
                    className={classes.avatar}
                    alt="User DashBoard"
                    src="https://media.giphy.com/media/YSlD6I04v4s9pgwPcT/giphy.gif"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="h6"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        User Friendly
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
                        Let's improve together. Report us if you stuck anywhere.
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </List>
          </Fade>
        </Grid>

        <Grid xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avt}>
              <LockOutlinedIcon fontSize="large" />
            </Avatar>
            <Typography
              component="h1"
              variant="h4"
              style={{ color: "#4f4847" }}
            >
              {isSignup ? "Register" : "Login"}
            </Typography>
            {err ? (
              <Snackbar
                style={{ top: "10%", left: "55%" }}
                anchorOrigin={{ horizontal: "center", vertical: "top" }}
                open={err}
                autoHideDuration={5000}
                onClose={handleClose}
              >
                <Alert onClose={handleClose} severity={book.type}>
                  <strong>{book?.msg}</strong>
                </Alert>
              </Snackbar>
            ) : null}
            <form className={classes.form} onSubmit={handleSubmit}>
              <GoogleLogin
                clientId="716279671550-uhbhnkiocr43jt3don07qtr9inmi4hk7.apps.googleusercontent.com"
                render={(renderProps) => (
                  <Box align="center">
                    <Button
                      color="primary"
                      fullWidth
                      className={classes.customLogin}
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      startIcon={<GoogleIcon />}
                      variant="contained"
                    >
                      Sign Up with Google
                    </Button>
                  </Box>
                )}
                onSuccess={googleSuccess}
                onFailure={googleError}
                cookiePolicy="single_host_origin"
              />
              
              <Typography
                component="h1"
                variant="h5"
                style={{ textAlign: "center", margin: "10px" }}
              >
                OR
              </Typography>
              <Grid container spacing={2}>
                {isSignup && (
                  <>
                    <Input
                      name="firstName"
                      label="First Name"
                      handleChange={handleChange}
                      autoFocus
                      half
                    />
                    <Input
                      name="lastName"
                      label="Last Name"
                      handleChange={handleChange}
                      half
                    />
                    <Input
                      name="college"
                      label="College Name"
                      handleChange={handleChange}
                    />
                    <Input
                      name="location"
                      label="Your current Place"
                      handleChange={handleChange}
                    />
                  </>
                )}
                <Input
                  name="email"
                  label="Email Address"
                  value={formData.email}
                  handleChange={handleChange}
                  type="email"
                />
                <Input
                  name="password"
                  label="Password"
                  value={formData.password}
                  type={showPassword ? "text" : "password"}
                  handleChange={handleChange}
                  handleShowPassword={handleShowPassword}
                />
                {isSignup && (
                  <Input
                    name="confirmPassword"
                    label="Repeat Password"
                    handleChange={handleChange}
                    type="password"
                  />
                )}
              </Grid>
              <Box textAlign="center">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  {isSignup ? "Sign Up" : "Sign In"}
                </Button>
              </Box>
                  
              <Dialog open={open} onClose={handleDialogueClose}>
                  <DialogTitle id="reset-password"> Reset Password</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Change your password by clicking on the link sent on this email when you submit
                      <TextField
                        autoFocus
                        margin="dense"
                        variant="outlined"
                        id="email"
                        label="Email Address"
                        value={
                          resetEmail === null ||
                          resetEmail === undefined
                            ? ""
                            : resetEmail
                        }
                        onChange={(e)=>setResetEmail(e.target.value)}
                        fullWidth
                      />
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleDialogueClose} color="primary">Done</Button>
                    <Button onClick={handleClickSendMail} color="primary">Send Mail</Button>
                  </DialogActions>
              </Dialog>
              {isSignup?(
                  <Box textAlign="center">
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      onClick={handleClickOpen} 
                    >
                      Reset Password
                    </Button>
                  </Box>
              ):    
              <Box textAlign="center">
              <Button
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleClickOpen} 
              >
               Login Without Password ?
              </Button>
            </Box>}
              
              <Grid>
                <Grid item>
                  <Box textAlign="center">
                    <Button
                      onClick={switchMode}
                      className={classes.switch}
                      variant="contained"
                      color="primary"
                    >
                      {isSignup
                        ? "Already have an account? Sign in"
                        : "Don't have an account? Sign Up"}
                    </Button>
                <Dialog open={openNew} onClose={handleDialogueCloseNew}>
                  <DialogTitle id="verify-email">Login Without Password</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Verify your Email by clicking on the link sent on this email when you submit
                      <TextField
                        autoFocus
                        margin="dense"
                        variant="outlined"
                        id="email"
                        label="Email Address"
                        value={verifyEmail}
                        onChange={(e)=>setVerifyEmail(e.target.value)}
                        fullWidth
                      />
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleDialogueCloseNew} color="primary">Done</Button>
                    <Button onClick={handleClickVerifyMail} color="primary">Send Mail</Button>
                  </DialogActions>
              </Dialog>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Auth;
