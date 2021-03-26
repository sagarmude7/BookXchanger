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
import { useSelector } from "react-redux";

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

const Dashboard = ({userId}) => {
  const user = useSelector((state) => state.user);
  const books = useSelector((state)=>state.books)
  
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
    <>
      <Container className={classes.body}>
        <ButtonGroup size="large" color="secondary">
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={() => setMyadbool(!Myadbool)}
          >
            My Ads
          </Button>
          <Button>Messages</Button>
        </ButtonGroup>
        {Myadbool === true ? (
          <>
            <Paper className={classes.root}>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab label="Active Ads" {...a11yProps(0)} />
                <Tab label="Sold Ads" {...a11yProps(1)} />
              </Tabs>
            </Paper>

            <TabPanel value={value} index={0}>
                <Grid
                  className={classes.container}
                  container
                  alignItems="stretch"
                  spacing={3}
                >
                {books.filter(book=>(book.owner===userId)&&(book.isSold===false)).length !== 0 ? (
                  <>{books.filter(book=>(book.owner===userId)&&(book.isSold===false))?.map(card)}</>
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
                {books.filter(book=>(book.owner===userId)&&(book.isSold===true)).length !== 0 ? (
                  <>{books.filter(book=>(book.owner===userId)&&(book.isSold===true)).map(card)}</>
                ) : (
                  <>No Sold Ads</>
                )}
                </Grid>
            </TabPanel>
          </>
        ) : (
          <></>
        )}
      </Container>
    </>
  );
};

export default Dashboard;