import React, { useEffect, useState } from "react";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import Description from "./Description/Description.js";
import Chatbot from "./Chatbot/chatbot.js";
import HowToUse from "./HowToUse/HowToUse.js";
import Footer from "../Footer/footer.js";
import BookSlider from "./BookSlider/BookSlider.js";

import Feedback from "./Feedback/Feedback.js";
import { useSelector, useDispatch } from "react-redux";
import { AUTH, CLEAR_NOTIFICATION, VALID } from "../../constants/actions.js";
import Roll from 'react-reveal/Roll';
import LightSpeed from 'react-reveal/LightSpeed';
import Flip from 'react-reveal/Flip';
import {socket} from '../../service/socket'
const Home = () => {
  const [open, setOpen] = useState(false);
  const [bookPost, setBookPost] = useState(false);
  const dispatch = useDispatch();
  const authData = useSelector((state) => state.authData);
  const user = JSON.parse(localStorage.getItem("profile"));
  const book = useSelector((state) => state.book);
  const notification = useSelector((state)=>state.notification)
  const [shownoti,setShowNoti] = useState(false)

  // useEffect(()=>{
  //   if(localStorage.getItem('profile')){
  //     const id = JSON.parse(localStorage.getItem('profile')).profile.id
  //     socket.emit('login',{id:id})
  //   }
  // },[])
  useEffect(()=>{
    if(notification.content)
      setShowNoti(true)
  },[notification])
  useEffect(() => {
    console.log(authData);
    if (authData) setOpen(true);
    if (book.msg) setBookPost(true);
  }, []);

  
  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setBookPost(false);
    dispatch({ type: AUTH, payload: user });
    dispatch({ type: VALID, payload: {} });
  };

  const handleCloseNoti = (event,reason)=>{
    if(reason==='clickaway'){
      return;
    }
    setShowNoti(false)
    dispatch({type:CLEAR_NOTIFICATION})
  }

  return (
    <>
      {open ? (
        <Snackbar
          style={{ top: "10%", left: "55%" }}
          anchorOrigin={{ horizontal: "center", vertical: "top" }}
          open={open}
          autoHideDuration={5000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="success">
            <strong>Logged In Sucessfully</strong>
          </Alert>
        </Snackbar>
      ) : null}
      {
        shownoti?(
          <Snackbar
            style={{ top: "10%", left: "55%" }}
            anchorOrigin={{ horizontal: "center", vertical: "top" }}
            open={shownoti}
            autoHideDuration={5000}
            onClose={handleCloseNoti}
          >
            <Alert onClose={handleCloseNoti} severity="success">
              <strong>{notification.content}</strong>
            </Alert>
          </Snackbar>
        ):null
      }
      {bookPost ? (
        <Snackbar
          style={{ top: "10%", left: "55%" }}
          anchorOrigin={{ horizontal: "center", vertical: "top" }}
          open={bookPost}
          autoHideDuration={5000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="success">
            <strong>{book.msg}</strong>
          </Alert>
        </Snackbar>
      ) : null}
      <Roll left>
        <Description />
      </Roll>
      <LightSpeed left>
        <BookSlider />
      </LightSpeed>
      <Flip left>
        <HowToUse />
      </Flip>
      <Feedback />
      <Chatbot />
    </>
  );
};

export default Home;
