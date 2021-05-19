import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import PostAdForm from "./components/PostAdComponents/PostAdForm.js";
import Home from "./components/HomePageComponents/Home.js";
import Loading from "./components/Loading/Loading.js";
import Auth from "./components/Auth/Auth";
import DisplayBooks from "./components/AllBooksComponents/AllBooks";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Wishlist from "./components/WishlistComponent/Wishlist.js";
import Footer from "./components/Footer/footer";
import BookInfo from "./components/AllBooksComponents/BookInfo/BookInfo";
import EditBook from "./components/EditBookComponents/Form";
import About from "./components/AboutUsComponents/About.js";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import { AlertTitle } from "@material-ui/lab";
import { green } from "@material-ui/core/colors";
import history from "./history/history.js";
import { useDispatch, useSelector } from "react-redux";
import OtherUser from "./components/OtherUserComponents/OtherUser";
import ForgotPassword from './components/ForgotPassword/ForgotPassword'
import VerifyEmail from './components/VerifyEmail/VerifyEmail'
import { socket } from "./service/socket";
import { GET_NOTIFICATION, CLEAR_NOTIFICATION } from "./constants/actions.js";

const App = () => {
  const dispatch = useDispatch();

  const notification = useSelector((state) => state.notification);
  const [shownoti, setShowNoti] = useState(false);
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (notification.content) {
      if (notification.from !== user.profile.id) setShowNoti(true);
    }
  }, [notification]);

  useEffect(() => {
    if (localStorage.getItem("profile")) {
      socket.connect();

      const id = JSON.parse(localStorage.getItem("profile")).profile.id;
      socket.on("connect", () => {
        socket.emit("login", { id: id });
      });
    }
  }, []);

  useEffect(() => {
    socket.on("send_msg", (msg) => {
      dispatch({ type: GET_NOTIFICATION, payload: msg });
    });
  }, []);

  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  const handleCloseNoti = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowNoti(false);
    dispatch({ type: CLEAR_NOTIFICATION });
  };

  const handleClickNoti = () => {
    history.push(`/user/${notification.from}`);
  };
  function displayLoading() {
    return <Loading />;
  }
  useEffect(() => {
    displayLoading();
  }, []);
  return (
    <Router>
      <Container maxWidth="lg">
        <Navbar />
        {shownoti ? (
          <Snackbar
            style={{ top: "10%", left: "55%", cursor: "pointer" }}
            anchorOrigin={{ horizontal: "right", vertical: "top" }}
            open={shownoti}
            autoHideDuration={5000}
            onClose={handleCloseNoti}
            onClick={handleClickNoti}
          >
            <Alert onClose={handleCloseNoti} icon={false} severity="info">
              <AlertTitle>
                New Message &nbsp; &nbsp;
                <NotificationsActiveIcon
                  style={{
                    color: green[500],
                    float: "right",
                    marginTop: "0.1rem",
                  }}
                />
              </AlertTitle>

              <div style={{ width: "300px" }}>
                <p>{notification.content}</p>
                <div style={{ float: "right" }}>
                  from <strong>{notification.fromName}</strong>
                </div>
              </div>
            </Alert>
          </Snackbar>
        ) : null}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/all" component={DisplayBooks} />
          <Route exact path="/aboutus" component={About} />
          <Route exact path="/add" component={PostAdForm} />
          <Route exact path="/auth" socket={socket} component={Auth} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/wishlist" component={Wishlist} />
          <Route exact path="/all/book/:bookId" component={BookInfo} />
          <Route exact path="/editBook/:bookId" component={EditBook} />
          <Route exact path="/user/:userId" component={OtherUser} />
          <Route exact path="/password-reset/:token" component={ForgotPassword}/>
          <Route exact path="/verify-email/:token" component={VerifyEmail}/>
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
};

export default App;
