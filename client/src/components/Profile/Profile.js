import Navbar from "../Navbar/Navbar";
import {
  Container,
  Typography,
  Card,
  CardActions,
  CardContent,
  Button,
} from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert, AlertTitle } from "@material-ui/lab";
import useStyles from "./styles.js";
import img from "./profilepic.png";
import { useDispatch, useSelector } from "react-redux";
import { React, useEffect, useState } from "react";
import Dashboard from "./Dashboard components/Dashboard";
import Footer from "../Footer/footer.js";
import ProfileDetails from "./ProfileDetails/ProfileDetails";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";
import numberSoldBooks from "./Dashboard components/Dashboard";
import { getRecentUsers } from "../../actions/user";
import Message from "./Messages/Message";
import { ThemeProvider } from "@emotion/react";
import { green, pink } from '@material-ui/core/colors';

function TabPanel(props) {


  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const Profile = () => {

  
  
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const localUser = JSON.parse(localStorage.getItem("profile"));
  const recents = useSelector((state) => state.recents);

  const user = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!localUser) {
      history.push("/auth");
    }
  });
  useEffect(() => {
    dispatch(getRecentUsers());
  }, []);
  var userId;
  if (localUser)
    userId = JSON.parse(localStorage.getItem("profile")).profile.id;
  const books = useSelector((state) => state.books);
  var numberSoldBooks = 0;
  var totalListing = 0;
  const soldBooks = books.filter(
    (book) => book.owner === userId && book.isSold === true
  );

  if (soldBooks) {
    numberSoldBooks = soldBooks?.length;
  }

  if (user.postedBooks) {
    totalListing = user.postedBooks.length;
  }

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={classes.container}>
      {user?.editMessage ? (
        <Snackbar
          style={{ top: "10%", left: "50%" }}
          anchorOrigin={{ horizontal: "center", vertical: "top" }}
          open={open}
          autoHideDuration={5000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="success">
            <strong>user?.editMessage</strong>
          </Alert>
        </Snackbar>
      ) : null}
      <div className={classes.topBox}>
        <Container className={classes.head}>
          {user.profilePic ? (
            
            <img className={classes.pic} src={user.profilePic} alt="M" loading="lazy"></img>
          
          ) : (
            <img className={classes.pic} src={img} alt="M" loading="lazy"></img>
          )}
          <Typography
            variant="body1"
            color="textPrimary"
            className={classes.headUser}
          >
            {user.name}
          </Typography>

          <div className={classes.listing1}>
            <Typography className={classes.listNumber}>
              {totalListing}
            </Typography>
            <Typography className={classes.listLetter}>
              Total Listings
            </Typography>
          </div>

          <div className={classes.listing2}>
            <Typography className={classes.listNumber}>
              {numberSoldBooks}
            </Typography>
            <Typography className={classes.listLetter}>Ads Sold</Typography>
          </div>
        </Container>


        <AppBar className={classes.rootTab} position="static" color="default">
      
          <Tabs
          className={classes.rootTab} 
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab className={classes.rootTab} label="Profile" {...a11yProps(0)} />
            <Tab className={classes.rootTab} label="My Ads" {...a11yProps(1)} />
            <Tab className={classes.rootTab} label="Messages" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        
      </div>

      <TabPanel value={value} index={0} dir={theme.direction}>
        <ProfileDetails />
      </TabPanel>

      <TabPanel value={value} index={1} dir={theme.direction}>
        <Dashboard />
      </TabPanel>

      <TabPanel value={value} index={2} dir={theme.direction}>
        <Message />
      </TabPanel>

      {/*<Footer/>*/}
    </div>
  );
};

export default Profile;
