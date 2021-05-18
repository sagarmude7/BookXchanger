import {
  TextField,
  Divider,
  Container,
  Button,
  Typography,
} from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
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
import { Alert } from "@material-ui/lab";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import {
  editProfile,
  getProfile,
  changePassword,
} from "./../../../actions/user";
import { useDispatch, useSelector } from "react-redux";
import { React, useEffect, useState } from "react";
import { VALID } from "../../../constants/actions";
import img from "../profilepic.png";

const Profile = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user1 = JSON.parse(localStorage.getItem("profile"));
  const user = useSelector((state) => state.user);
  const error = useSelector((state) => state.book);
  const [err, setErr] = useState(false);
  const [key, setKey] = useState(true);
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("error");

  useEffect(() => {
    if (user1) dispatch(getProfile(user1.profile.id));
  }, [dispatch]);

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    college: "",
    location: "",
    profilePic: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitPassword = (e) => {
    e.preventDefault();

    const passData = {
      currentPassword: values1.password,
      newPassword: values2.password,
      confirmPassword: values3.password,
    };

    dispatch(changePassword(passData));
  };

  useEffect(() => {
    setUserData(userData);
  }, [user]);

  useEffect(() => {
    if (user)
      setUserData({
        ...userData,
        name: user.name,
        email: user.email,
        college: user.college,
        location: user.location,
        profilePic: user.profilePic,
      });
  }, [user, setUserData]);

  const handleSubmitUserInfo = (e) => {
    e.preventDefault();

    dispatch(editProfile(userData));
  };

  useEffect(() => {
    if (!key) {
      setUserData(userData);
    }
    if (error.msg === "Profile Updated Successfully") {
      setKey(true);
      setSeverity("success");
      setErr(true);
    }
    if (error.msg === "Password Updated Successfully") {
      handleClose();
      setSeverity("success");
    }
  }, [user, error]);

  useEffect(() => {
    if (error.msg || error.message) {
      setErr(true);
    }
  }, [error]);

  const addImage = async (e) => {
    const previewImage = URL.createObjectURL(e.target.files[0]);

    setUserData({ ...userData, profilePic: previewImage });
  };

  const removeImage = async (e) => {
    setUserData({ ...userData, profilePic: img });
  };

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

  const handleCloseAlert1 = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setErr(false);
    dispatch({ type: VALID, payload: {} });
    setSeverity("error");
  };

  if (key) {
    return (
      <div className={classes.container}>
        {err ? (
          <Snackbar
            style={{ top: "10%", left: "50%" }}
            anchorOrigin={{ horizontal: "center", vertical: "top" }}
            open={err}
            autoHideDuration={5000}
            onClose={handleCloseAlert1}
          >
            <Alert onClose={handleCloseAlert1} severity={severity}>
              <strong>{error?.msg}</strong>
            </Alert>
          </Snackbar>
        ) : null}
        <Container className={classes.body}>
          <Typography className={classes.bodyHead}>
            Manage Your Profile
          </Typography>

          <Button
            className={classes.Edit}
            variant="contained"
            onClick={() => setKey(false)}
          >
            Edit Profile
          </Button>

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
        {err ? (
          <Snackbar
            style={{ top: "10%", left: "50%" }}
            anchorOrigin={{ horizontal: "center", vertical: "top" }}
            open={err}
            autoHideDuration={5000}
            onClose={handleCloseAlert1}
          >
            <Alert onClose={handleCloseAlert1} severity={severity}>
              <strong>{error?.msg}</strong>
            </Alert>
          </Snackbar>
        ) : null}

        <Container className={classes.body}>
          <Typography className={classes.bodyHead}>
            Edit Your Profile
          </Typography>

          <div>
            <Button
              className={classes.changePassword}
              variant="contained"
              color="primary"
              onClick={handleClickOpen}
            >
              Change Password
            </Button>
            <Dialog
              open={open}
              className={classes.dialog}
              aria-labelledby="form-dialog-title"
            >
              <form
                noValidate
                autoComplete="off"
                onSubmit={handleSubmitPassword}
              >
                <DialogTitle id="form-dialog-title">
                  Change Account Password
                </DialogTitle>

                <DialogContent>
                  <FormControl
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                  >
                    <InputLabel
                      htmlFor="current-password"
                      className={classes.passTitle}
                    >
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
                    <InputLabel
                      htmlFor="new-password"
                      className={classes.passTitle}
                    >
                      New Password
                    </InputLabel>
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
                    <InputLabel
                      htmlFor="confirm-new-password"
                      className={classes.passTitle}
                    >
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
                  <Button style={{ color: "#E8D8A" }} onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button style={{ color: "#E85A4F" }} type="submit">
                    Reset Password
                  </Button>
                </DialogActions>
              </form>
            </Dialog>
          </div>

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

            <Container className={classes.picture}>
              <div>
                <img
                  className={classes.editProfilePic}
                  src={userData.profilePic}
                  alt="M"
                  loading="lazy"
                ></img>
              </div>

              <div className={classes.innerPic}>
                <div>
                  <label htmlFor="icon-button-file">
                    <Button
                      variant="contained"
                      color="primary"
                      component="span"
                      className={classes.uploadPhoto}
                    >
                      Upload Profile Photo
                    </Button>
                    <input
                      accept="image/*"
                      className={classes.input}
                      id="icon-button-file"
                      type="file"
                      hidden
                      onChange={addImage}
                    />
                  </label>
                </div>
                <div>
                  {userData.profilePic !== img ? (
                    <Button
                      className={classes.removePho}
                      variant="contained"
                      color="primary"
                      component="span"
                      onClick={removeImage}
                    >
                      Remove Photo
                    </Button>
                  ) : null}
                </div>
              </div>
            </Container>

            <Button
              className={classes.saveChanges}
              variant="contained"
              color="primary"
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
