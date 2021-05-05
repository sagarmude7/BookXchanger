import React, { useEffect, useState } from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Container, Button } from "@material-ui/core";
import useStyles from "./styles.js";
import { Grid, CircularProgress } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Book from "./Book/Book";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../../actions/books.js";
import { css } from "@emotion/react";
import RiseLoader from "react-spinners/RiseLoader";
import AppBar from "@material-ui/core/AppBar";

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

const Dashboard = () => {
  const userId = JSON.parse(localStorage.getItem("profile")).profile.id;
  const user = useSelector((state) => state.user);
  const books = useSelector((state) => state.books);

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    if (books.length === 0) {
      dispatch(getBooks());
    }
  });
  useEffect(() => {
    if (books.length !== 0) {
      setLoading(false);
    }
  }, [books]);

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  function card(book) {
    return (
      <Grid item xs={12} sm={3}>
        <Book key={book._id} book={book} />
      </Grid>
    );
  }

  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [Myadbool, setMyadbool] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  //  dispatch(getMyAds())
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
  
      <Container className={classes.body}>
          {loading?(
            <div style={{textAlign:"center"}}>
              <RiseLoader loading={loading} css={override} size="50" color="#ff0"/>
            </div>   
          ):(
            <>
            
            <AppBar className={classes.root} position="static" >
              <Tabs
                value={value}
                onChange={handleChange}
                
                style={{ indicatorColor: "#D8C3A5" }}
                style={{color:"#E8D8A"}}
                style={{textColor:""}}
                
              >
                <Tab label="Active Ads" {...a11yProps(0)} />
                <Tab label="Sold Ads" {...a11yProps(1)} />
              </Tabs>
            </AppBar>
            

          <TabPanel value={value} index={0}>
            <Grid
              className={classes.container}
              container
              alignItems="stretch"
              spacing={3}
            >
              {books.filter(
                (book) => book.owner === userId && book.isSold === false
              ).length !== 0 ? (
                <>
                  {books
                    .filter(
                      (book) => book.owner === userId && book.isSold === false
                    )
                    ?.map(card)}
                </>
              ) : (
                <>No Active Ads</>
              )}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid
              className={classes.container}
              container
              alignItems="stretch"
              spacing={3}
            >
              {books.filter(
                (book) => book.owner === userId && book.isSold === true
              ).length !== 0 ? (
                <>
                  {books
                    .filter(
                      (book) => book.owner === userId && book.isSold === true
                    )
                    .map(card)}
                </>
              ) : (
                <>No Sold Ads</>
              )}
            </Grid>
          </TabPanel>
        </>
      )}
    </Container>
  );
};

export default Dashboard;
