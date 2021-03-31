import Navbar from "../Navbar/Navbar";
import {
  Container,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles.js";
import img from "./profilepic.png";
import { useDispatch, useSelector } from "react-redux";
import { React, useEffect, useState } from "react";
import Dashboard from "./Dashboard components/Dashboard";
import Footer from "../Footer/footer.js";
import ProfileDetails from "./ProfileDetails/ProfileDetails";
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import numberSoldBooks from './Dashboard components/Dashboard';



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
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const Profile = () => {

  const classes = useStyles();
  const theme = useTheme();
  //const dispatch = useDispatch();
  //const user1 = JSON.parse(localStorage.getItem('profile'));
  const user = useSelector((state) => state.user);
  //const [err,setErr] = useState(false) 
  //const [passErr,setPassErr] = useState(false)
  //const [key, setKey] = useState(true);
  //const [open, setOpen] = useState(false);

  /*const [sold,setSold] = useState(0);
  console.log("99999999999999",user.postedBooks)

  console.log(Dashboard.numberSoldBooks);

  user.postedBooks.forEach(countSoldBooks(bookId));

  const countSoldBooks = ()=>{
    const book = Book.findById(bookId);
    if(book.isSold){
      setSold(sold+1);
    }
  }*/
  const userId = JSON.parse(localStorage.getItem("profile")).profile.id;
  const books = useSelector((state)=>state.books)
  var numberSoldBooks = 0;
  const soldBooks = books.filter(book=>(book.owner===userId)&&(book.isSold===true));
  
  if(soldBooks){
    numberSoldBooks = soldBooks?.length;
  }
  

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };


  
    return (
      <div className={classes.container}>
        <Navbar />

        <div className={classes.topBox}>
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

            <div className={classes.listing1}>
              <Typography className={classes.listNumber}>{user.postedBooks?.length}</Typography>
              <Typography className={classes.listLetter}>Total Listings</Typography>
            </div>

            <div className={classes.listing2}>
              <Typography className={classes.listNumber}>{numberSoldBooks}</Typography>
              <Typography className={classes.listLetter}>Ads Sold</Typography>
            </div>

          </Container>

          <AppBar className={classes.rootTab} position="static" color="default">
            <Tabs
              
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Profile" {...a11yProps(0)} />
              <Tab label="My Ads" {...a11yProps(1)} />
              <Tab label="Messages" {...a11yProps(2)} />
            </Tabs>
          </AppBar>

        </div>
       

            <TabPanel value={value} index={0} dir={theme.direction}>
              <ProfileDetails/>
            </TabPanel>

            <TabPanel value={value} index={1} dir={theme.direction}>
              <Dashboard/>
            </TabPanel>

            <TabPanel value={value} index={2} dir={theme.direction}>
              Messages not available
            </TabPanel>

        
        
        <Footer/>
       
      </div>
    );
  
  

};

export default Profile;

/*
 <Dashboard />

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


        <Footer />*/













        /*



        */