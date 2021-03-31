import React, { useEffect, useState } from "react";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import Description from "./Description/Description.js";
import Chatbot from "./Chatbot/chatbot.js";
import HowToSell from "./HowToSell/HowToSell.js";
import Footer from "../Footer/footer.js";
import BookSlider from "./BookSlider/BookSlider.js";

import Feedback from "./Feedback/Feedback.js";
import { useSelector, useDispatch } from "react-redux";
import { AUTH } from "../../constants/actions.js";
const Home = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const authData = useSelector((state) => state.authData);
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    console.log(authData);
    if (authData) setOpen(true);
  }, []);

  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    dispatch({ type: AUTH, payload: user });
  };

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
      <Description />
      <BookSlider />
      {/* <HowToSell /> */}
      <Feedback />
      <Chatbot />
      <Footer />
    </>
  );
};

export default Home;
