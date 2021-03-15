import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/footer.js";
import {
  TextField,
  Divider,
  Card,
  CardMedia,
  Container,
  Avatar,
  Button,
  Typography,
  Paper,
} from "@material-ui/core";
import useStyles from "./styles.js";
import React, { useEffect } from "react";
import img from "./profilepic.png";
import EditIcon from "@material-ui/icons/Edit";
import LockIcon from "@material-ui/icons/Lock";
import Dashboard from "./Dashboard components/Dashboard"
import {useDispatch, useSelector} from 'react-redux'
import { getProfile } from "../../actions/user";

const Profile = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const user = useSelector(state=>state.user)
  useEffect(()=>{
    dispatch(getProfile())
  },[dispatch])

  return (
    <>
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
            {user?.name}
          </Typography>

          
        </Container>

        <Dashboard />

        <Container className={classes.body}>
          <Typography className={classes.bodyHead}>
            Manage Your Profile
          </Typography>

          <Container className={classes.bodyFields}>
            <Typography className={classes.bodyText} variant="h6">
              Your Name :
            </Typography>
            <Typography className={classes.bodyTextValue} variant="h6">
              {user?.name}
            </Typography>
          </Container>
          <Divider></Divider>

          <Container className={classes.bodyFields}>
            <Typography className={classes.bodyText} variant="h6">
              Email Address :
            </Typography>
            <Typography className={classes.bodyTextValue} variant="h6">
              {user?.email}
            </Typography>
          </Container>
          <Divider></Divider>

          <Container className={classes.bodyFields}>
            <Typography className={classes.bodyText} variant="h6">
              College Name :
            </Typography>
            <Typography className={classes.bodyTextValue} variant="h6">
              {user?.college}
            </Typography>
          </Container>
          <Divider></Divider>

          <Container className={classes.bodyFields}>
            <Typography className={classes.bodyText} variant="h6">
              Location :
            </Typography>
            <Typography className={classes.bodyTextValue} variant="h6">
              {user?.location}
            </Typography>
          </Container>
          <Divider></Divider>

          <Container className={classes.bodyFields}>
            <Typography className={classes.bodyText} variant="h6">
              Number of Ads Sold :
            </Typography>
            <Typography className={classes.bodyTextValue} variant="h6">
              {user?.soldAds}
            </Typography>
          </Container>

          <Typography className={classes.bodyText}></Typography>
        </Container>

        <Avatar className={`${classes.pink} ${classes.Edit} ${classes.large}`}>
          <EditIcon />
        </Avatar>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
