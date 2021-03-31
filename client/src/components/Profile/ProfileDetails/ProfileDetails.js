import {
  TextField,
  Divider,
  Container,
  Button,
  Typography,
} from "@material-ui/core";
import Snackbar from '@material-ui/core/Snackbar'
import useStyles from "../styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import clsx from "clsx";
import { Alert, AlertTitle } from '@material-ui/lab';
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { editProfile, getProfile, changePassword } from "./../../../actions/user";
import { useDispatch, useSelector } from "react-redux";
import { React, useEffect, useState } from "react";
import { ERROR, VALID } from "../../../constants/actions";
import { keys } from "@material-ui/core/styles/createBreakpoints";

const Profile = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user1 = JSON.parse(localStorage.getItem('profile'));
  const user = useSelector((state) => state.user);
  const error = useSelector(state=>state.book)
  const [err,setErr] = useState(false) 
  const [passErr,setPassErr] = useState(false)
  const [key, setKey] = useState(true);
  const [open, setOpen] = useState(false);
  const [severity,setSeverity] = useState("error")


  useEffect(() => {
    dispatch(getProfile(user1.profile.id));
  }, [dispatch]);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    college: "",
    location: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleSubmitPassword = (e) => {
    e.preventDefault();
    console.log("in submit", values1.password ,values2.password ,values3.password);

    const passData={
      currentPassword : values1.password,
      newPassword : values2.password,
      confirmPassword : values3.password
    }
    
    dispatch(changePassword(passData));
  };

  useEffect(()=>{
    setUserData(userData);
    if(user.message){
      setKey(false);
    }
    else{
      handleClose();
    }
  },[user])

  useEffect(() => {
    if (user)
      setUserData({
        ...userData,
        name: user.name,
        email: user.email,
        college: user.college,
        location: user.location,
      });
  }, [user, setUserData]);


  const handleSubmitUserInfo = (e) => {
    e.preventDefault();

    dispatch(editProfile(userData));
      
  };

  
  useEffect(()=>{
    if(!user.message){
      if(!key){
        setUserData(userData);
      }
      if(error.msg==="Profile Updated Successfully"){
        setKey(true)
        setSeverity("success")
        setErr(true)
      }
    }else{
      if(error.msg==="Password Updated Successfully"){
        handleClose()
        setSeverity("success")
      }
    }
  },[user,error])

  useEffect(()=>{
    if(error.msg || error.message){
      setErr(true)
    }
  },[error])
    


  const handleChangeUserInfo = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const [values1, setValues1] = useState({
    password: "",
    showPassword: false,
  });

  const handleChange1 = (prop) => (event) => {
    setValues1({ ...values1, [prop]: event.target.value });
  };

  const handleClickShowPassword1 = () => {
    setValues1({ ...values1, showPassword: !values1.showPassword });
  };

  const handleMouseDownPassword1 = (event) => {
    event.preventDefault();
  };

  const [values2, setValues2] = useState({
    password: "",
    showPassword: false,
  });

  const handleChange2 = (prop) => (event) => {
    setValues2({ ...values2, [prop]: event.target.value });
  };

  const handleClickShowPassword2 = () => {
    setValues2({ ...values2, showPassword: !values2.showPassword });
  };

  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };

  const [values3, setValues3] = useState({
    password: "",
    showPassword: false,
  });

  const handleChange3 = (prop) => (event) => {
    setValues3({ ...values3, [prop]: event.target.value });
  };

  const handleClickShowPassword3 = () => {
    setValues3({ ...values3, showPassword: !values3.showPassword });
  };

  const handleMouseDownPassword3 = (event) => {
    event.preventDefault();
  };

  const handleCloseAlert1 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setErr(false);
    dispatch({type:VALID,payload:{}})
    setSeverity("error")
  };

// const handleCloseAlert2 = (event, reason) => {
//   if (reason === 'clickaway') {
//     return;
//   }

//   setPassErr(false);
//   dispatch({type:VALID,payload:{}})
// };

//console.log("1111111111111",user,user.editMessage)
  if (key) {
    return (
      <div className={classes.container}>
        {
            err?(
                <Snackbar style={{"top":"10%",'left':"50%"}} anchorOrigin={{'horizontal':'center','vertical':'top'}} open={err} autoHideDuration={5000} onClose={handleCloseAlert1}>
                    <Alert onClose={handleCloseAlert1} severity={severity}>
                        <strong>{error?.msg}</strong>
                    </Alert>
                </Snackbar>     
            ):null
        }
        <Container className={classes.body}>
          <Typography className={classes.bodyHead}>
            Manage Your Profile
          </Typography>

          <Button
              className={classes.Edit}
              variant="outlined"
              color="primary"
              onClick={() => setKey(false)}

            >Edit Profile</Button>

          <Container className={classes.bodyFields}>
            <Typography className={classes.bodyText} variant="h6">
              Your Name :
            </Typography>
            <Typography className={classes.bodyTextValue} variant="h6">
              {user.name}
            </Typography>
          </Container>
          <Divider></Divider>

          <Container className={classes.bodyFields}>
            <Typography className={classes.bodyText} variant="h6">
              Email Address :
            </Typography>
            <Typography className={classes.bodyTextValue} variant="h6">
              {user.email}
            </Typography>
          </Container>
          <Divider></Divider>

          <Container className={classes.bodyFields}>
            <Typography className={classes.bodyText} variant="h6">
              College Name :
            </Typography>
            <Typography className={classes.bodyTextValue} variant="h6">
              {user.college}
            </Typography>
          </Container>
          <Divider></Divider>

          <Container className={classes.bodyFields}>
            <Typography className={classes.bodyText} variant="h6">
              Location :
            </Typography>
            <Typography className={classes.bodyTextValue} variant="h6">
              {user.location}
            </Typography>
          </Container>
          <Divider></Divider>

          <Typography className={classes.bodyText}></Typography>
        </Container>


      </div>
    );
  } else {
    return (
      <div className={classes.container}>
          {/* {
            err?(
                <Snackbar style={{"top":"10%",'left':"50%"}} anchorOrigin={{'horizontal':'center','vertical':'top'}} open={passErr} autoHideDuration={5000} onClose={handleCloseAlert2}>
                    <Alert onClose={handleCloseAlert2} severity="error">
                        <strong>{error?.message}</strong>
                    </Alert>
                </Snackbar>
                
            ):null
        } */}

        {
            err?(
                <Snackbar style={{"top":"10%",'left':"50%"}} anchorOrigin={{'horizontal':'center','vertical':'top'}} open={err} autoHideDuration={5000} onClose={handleCloseAlert1}>
                    <Alert onClose={handleCloseAlert1} severity={severity}>
                        <strong>{error?.msg}</strong>
                    </Alert>
                </Snackbar>     
            ):null
        }
       
        <Container className={classes.body}>
          <Typography className={classes.bodyHead}>
            Edit Your Profile
          </Typography>

          <div>
            <Button
              className={classes.changePassword}
              variant="outlined"
              color="primary"
              onClick={handleClickOpen}

            >
              Change Password
            </Button>
            <Dialog
              open={open}
              
              aria-labelledby="form-dialog-title"
            >
            <form noValidate autoComplete="off" onSubmit={handleSubmitPassword}>
              <DialogTitle id="form-dialog-title">
                Change Account Password
              </DialogTitle>
              {/*
                user.message?(
                    <Alert severity="error" className={classes.passAlert}>
                        <strong>{user?.message}</strong>
                    </Alert>
                ):null
                */}
              <DialogContent>
              
                <FormControl
                  className={clsx(classes.margin, classes.textField)}
                  variant="outlined"
                >
                  <InputLabel htmlFor="current-password">
                    Current Password
                  </InputLabel>
                  <OutlinedInput
                    id="current-password"
                    type={values1.showPassword ? "text" : "password"}
                    value={values1.password}
                    onChange={handleChange1("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword1}
                          onMouseDown={handleMouseDownPassword1}
                          edge="end"
                        >
                          {values1.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={140}
                  />
                </FormControl>

                <FormControl
                  className={clsx(classes.margin, classes.textField)}
                  variant="outlined"
                >
                  <InputLabel htmlFor="new-password">New Password</InputLabel>
                  <OutlinedInput
                    id="new-password"
                    type={values2.showPassword ? "text" : "password"}
                    value={values2.password}
                    onChange={handleChange2("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword2}
                          onMouseDown={handleMouseDownPassword2}
                          edge="end"
                        >
                          {values2.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={120}
                  />
                </FormControl>

                <FormControl
                  className={clsx(classes.margin, classes.textField)}
                  variant="outlined"
                >
                  <InputLabel htmlFor="confirm-new-password">
                    Confirm New Password
                  </InputLabel>
                  <OutlinedInput
                    id="confirm-new-password"
                    type={values3.showPassword ? "text" : "password"}
                    value={values3.password}
                    onChange={handleChange3("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword3}
                          onMouseDown={handleMouseDownPassword3}
                          edge="end"
                        >
                          {values3.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={180}
                  />
                </FormControl>
                
              </DialogContent>

              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button color="primary" type="submit">
                  Reset Password
                </Button>
              </DialogActions>
              </form>
            </Dialog>
            
          </div>
          
          {/*
            user.msg?(
                <Alert severity="error" className={classes.editAlert}>
                    <strong>{user?.msg}</strong>
                </Alert>
            ):null
          */}

          <form
            className={classes.editBody}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmitUserInfo}
          >
            <TextField
              required
              className={classes.textBox}
              id="outlined-basic"
              label="Your Name"
              defaultValue={userData.name}
              name="name"
              variant="outlined"
              onChange={handleChangeUserInfo}
            />
            <TextField
              required
              className={classes.textBox}
              id="outlined-basic"
              label="Email Address"
              defaultValue={userData.email}
              name="email"
              variant="outlined"
              onChange={handleChangeUserInfo}
            />
            <TextField
              required
              className={classes.textBox}
              id="outlined-basic"
              label="College Name"
              defaultValue={userData.college}
              name="college"
              variant="outlined"
              onChange={handleChangeUserInfo}
            />
            <TextField
              required
              className={classes.textBox}
              id="outlined-basic"
              label="Location"
              defaultValue={userData.location}
              name="location"
              variant="outlined"
              size="nornal"
              onChange={handleChangeUserInfo}
            />
            <Button
              className={classes.saveChanges}
              variant="contained"
              color="secondary"
              type="submit"
            >
              Save Changes
            </Button>
          </form>
        </Container>
      </div>
    );
  }
};

export default Profile;
