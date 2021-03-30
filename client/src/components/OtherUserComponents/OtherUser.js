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
  Box
} from "@material-ui/core";
import ChatBox from "./ChatBox/ChatBox"
import Contact from "./ContactForm/Contact"
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
  const books = useSelector(state=>state.books)
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
        <Navbar />
        <Container className={classes.head}>
          <img
            className={classes.pic}
            src={user.profilePic}
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
            {user.name}
          </Typography>
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
          <div className={classes.ads}>
          <div className={classes.adsSold}>
          <h2>
            Ads Sold : {books.filter(book=>(book.owner===userId)&&(book.isSold===true)).length}
          </h2>
          </div>
          <div className={classes.adsSold}>
          <h2>
            Total Listing : {books.filter(book=>(book.owner===userId)).length}
          </h2>
          </div>
          </div>
        </Container>


        <Grid container spacing={4}>
          <Grid item xs={12} sm={9}>
          <Dashboard userId={userId}/>
            {/* <Container className={classes.body}>
              <Typography  className={classes.bodyHead}>
              <h2>{user.name} Profile</h2> 
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
            </Container> */}
          </Grid>
          <Grid item xs={12} sm={3}>
          {/* <Contact /> */}
          <h1 style={{color :"black",textAlign:'center'}}>Contact {user.name}</h1>
          <Container className={classes.contactform}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Name"
              label="Name"
              type="Name"
              id="Name"
              autoComplete="Name"
             className= {classes.text}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              className= {classes.text}
            />
            <TextField
              name="description"
              variant="outlined"
              margin="normal"
              label="Message"
              fullWidth
              multiline
              rows={3}
              className= {classes.text}
            />
            <Box textAlign="center" marginBottom="0px">
            <Button
              type="submit"
              width='20%'
              variant="contained"
              color="primary"
              justifyContent='center'
              className = {classes.button}
            >
              Submit
            </Button>
            </Box> 
          </Container>
          </Grid>
        </Grid>
        <Footer />
      </div>
    );
};

export default OtherUser;
