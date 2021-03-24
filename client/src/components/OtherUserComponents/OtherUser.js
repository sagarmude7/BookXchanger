import Navbar from "../Navbar/Navbar";
import {
  TextField,
  Divider,
  Fab,
  Card,
  CardMedia,
  Container,
  Avatar,
  Button,
  Typography,
  Paper,
} from "@material-ui/core";
import useStyles from "./styles.js";
import img from "./profilepic.png";
import EditIcon from "@material-ui/icons/Edit";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
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
import ChatIcon from "@material-ui/icons/Chat";
import { editProfile, getProfile } from "../../actions/user";
import { useDispatch, useSelector } from "react-redux";
import { React, useEffect, useState } from "react";
import Footer from "../Footer/footer.js";
import Dashboard from "./Dashboard components/Dashboard";
const OtherUser = ({match}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user1 = JSON.parse(localStorage.getItem('profile'));
  const user = useSelector((state) => state.user);
  const [err,setErr] = useState(false) 

  const userId = match.params.userId;
  useEffect(() => {
    dispatch(getProfile(userId));
  }, [dispatch]);

  //console.log(person);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    college: "",
    location: "",
  });
  //console.log(typeof userData)

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

  const [key, setKey] = useState(true);

  const [open, setOpen] = useState(false);

 

  const handleSubmitUserInfo = (e) => {
    e.preventDefault();

    dispatch(editProfile(userData));
      
  };

  console.log("1212121222222222",user.msg);
    
  console.log("in blank ",user.msg);
  useEffect(()=>{
    if(user.msg){
      setErr(true);
      setUserData(userData);
      //console.log(user,"in 33333333333333")
    }
    else{
      //console.log(user,"in 44444444444444444444444")
      setErr(false);
      setKey(true);
    }
  },[user])
    

  console.log("main page ....*****",user.msg);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeUserInfo = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const [values1, setValues1] = useState({
    currentpassword: "",
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

  if (key) {
    return (
      <div className={classes.container}>
        <Navbar />

        <Container className={classes.head}>
          <img
            className={classes.pic}
            src={img}
            alt="M"
            width="175"
            height="190"
          ></img>
          <Typography
            variant="body1"
            color="textPrimary"
            className={classes.headUser}
          >
            {user.name}
          </Typography>
        </Container>

        <Dashboard userId={userId}/>

        <Container className={classes.body}>
          <Typography className={classes.bodyHead}>
            Manage Your Profile
          </Typography>

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

        <Fab
          aria-label="chat"
          className={`${classes.green} ${classes.Chat} ${classes.large}`}
        >
          <ChatIcon />
        </Fab>

        <Fab
          onClick={() => setKey(false)}
          aria-label="edit"
          className={`${classes.pink} ${classes.Edit} ${classes.large}`}
        >
          <EditIcon />
        </Fab>
        <Footer />
      </div>
    );
  } else {
    return (
      <div className={classes.container}>
        <Navbar />

        <Typography className={classes.heading} variant="h4">
          My Profile
        </Typography>

        <Container className={classes.head}>
          <img
            className={classes.pic}
            src={img}
            alt="M"
            width="175"
            height="190"
          ></img>
          <Typography
            variant="body1"
            color="textPrimary"
            className={classes.headUser}
            variant="h6"
          >
            {user.name}
          </Typography>

          <Container className={classes.headRight}></Container>
        </Container>

        <Dashboard userId={userId} />

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
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">
                Change Account Password
              </DialogTitle>
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
                          {values2.showPassword ? (
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
                <Button onClick={handleClose} color="primary">
                  Reset Password
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          
          {
            user.msg?(
                <Alert severity="error">
                    <strong>{user?.msg}</strong>
                </Alert>
            ):null
          }

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
        <Footer />
      </div>
    );
  }
};

export default OtherUser;
