import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import useStyles from "./styles.js";
import { Grid } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Book from "./Book/Book";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../../actions/books.js";
import { css } from "@emotion/react";
import PulseLoader from "react-spinners/PulseLoader";
import AppBar from "@material-ui/core/AppBar";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});

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
    border-color: red;
    background-color: #eae7dc;
  `;

  function card(book) {
    return (
      <Grid className={classes.grid}>
        <Book key={book._id} book={book} />
      </Grid>
    );
  }

  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [, setAnchorEl] = React.useState(null);

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

  return (
    <Container className={classes.body}>
      {loading ? (
        <div style={{ textAlign: "center" }}>
          <PulseLoader
            loading={loading}
            color="#e98074"
            css={override}
            size={30}
            style={{ background: "rgb(234,231,220)" }}
          />
        </div>
      ) : (
        <>
          <ThemeProvider theme={outerTheme}>
            <AppBar className={classes.root} position="static" color="default">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab label="Active Ads" {...a11yProps(0)} />
                <Tab label="Sold Ads" {...a11yProps(1)} />
              </Tabs>
            </AppBar>
          </ThemeProvider>
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
                <>
                  <div>
                    <Typography align="center" variant="h5">
                      No Active Ads
                    </Typography>
                  </div>
                </>
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
                <>
                  <div>
                    <Typography align="center" variant="h5">
                      No Sold Ads
                    </Typography>
                  </div>
                </>
              )}
            </Grid>
          </TabPanel>
        </>
      )}
    </Container>
  );
};

export default Dashboard;
