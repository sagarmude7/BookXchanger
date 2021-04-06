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
  Grid,
  TextareaAutosize,
  Box,
} from "@material-ui/core";
import ChatBox from "./ChatBox/ChatBox";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import Contact from "./ContactForm/Contact";
import useStyles from "./styles.js";
import { editProfile, getProfile } from "../../actions/user";
import { useDispatch, useSelector } from "react-redux";
import { React, useEffect, useState } from "react";
import Dashboard from "./Dashboard components/Dashboard";
import { useHistory } from "react-router-dom";
import Bounce from "react-reveal/Bounce";
import Roll from "react-reveal/Roll";
import Rotate from "react-reveal/Rotate";
const OtherUser = ({ match }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user1 = JSON.parse(localStorage.getItem("profile"));
  const user = useSelector((state) => state.user);
  const [err, setErr] = useState(false);
  const books = useSelector((state) => state.books);
  const sender = JSON.parse(localStorage.getItem('profile')).profile
  const userId = match.params.userId;
  const history = useHistory();
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

  useEffect(() => {
    if (user.msg) {
      setErr(true);
      setUserData(userData);
      //console.log(user,"in 33333333333333")
    } else {
      //console.log(user,"in 44444444444444444444444")
      setErr(false);
      setKey(true);
    }
  }, [user]);

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

  return (
    <div className={classes.container}>
      {/* <Navbar /> */}
      <Bounce left>
        <div className={classes.topBox}>
          <Container className={classes.head}>
            <ArrowBackIcon
              className={classes.topLeft}
              onClick={() => history.goBack()}
              fontSize="large"
            ></ArrowBackIcon>
            <img
              className={classes.pic}
              src={user?.profilePic}
              alt="M"
              width="175"
              height="190"
            />
            <div className={classes.userDetails}>
              <Typography
                variant="h5"
                color="textPrimary"
                className={classes.headUser}
              >
                {user.college}
              </Typography>
              <Typography
                variant="h5"
                color="textPrimary"
                className={classes.headUser}
              >
                {user.location}
              </Typography>
            </div>

            <div className={classes.listing1}>
              <Typography className={classes.listNumber}>
                {books.filter((book) => book.owner === userId).length}
              </Typography>
              <Typography className={classes.listLetter}>
                {" "}
                Total Listing{" "}
              </Typography>
            </div>

            <div className={classes.listing2}>
              <Typography className={classes.listNumber}>
                {
                  books.filter(
                    (book) => book.owner === userId && book.isSold === true
                  ).length
                }
              </Typography>
              <Typography className={classes.listLetter}> Ads Sold </Typography>
            </div>
          </Container>
        </div>
      </Bounce>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <Roll left>
            <Dashboard userId={userId} />
          </Roll>
        </Grid>
        <Grid item xs={12} sm={4}>
          {
            user?(
              <ChatBox sender={sender}/>
            ):(<h2>ChatBox ...Loading</h2>)
          }
          
          {/* <Contact /> */}
          
        </Grid>
      </Grid>
    </div>
  );
};

export default OtherUser;
