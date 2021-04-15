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
import Book from "../../AllBooksComponents/Book/Book";
import { useSelector } from "react-redux";
import { css } from "@emotion/react";
import PulseLoader from "react-spinners/PulseLoader";

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

const Dashboard = ({ userId }) => {
  const user = useSelector((state) => state.user);
  const books = useSelector((state) => state.books);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (books.length !== 0) {
      setLoading(false);
    }
  }, [books]);

  const override = css`
    display: block;
    padding-left: 40%;
    border-color: red;
    background-color: #eae7dc;
  `;

  function card(book) {
    return (
      <Grid item xs={12} sm={4}>
        <Book key={book._id} book={book} style={{ width: "auto" }} />
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
        <Typography
          variant="h5"
          style={{ textAlign: "center", paddingTop: "10px" }}
        >
          Ads Posted By {user.name}
        </Typography>
        <hr
          style={{
            border: "1.5px solid #8e8d8a",
            width: "50%",
            background: "rgb(234,231,220)",
            margin: "0px auto",
          }}
        />
        {loading ? (
          <div style={{ textAlign: "center", height: "40%" }}>
            <PulseLoader
              loading={loading}
              color="#e98074"
              css={override}
              size={30}
            />
          </div>
        ) : (
          <Grid
            className={classes.container}
            container
            alignItems="stretch"
            spacing={2}
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
                <Typography align="center" variant="h3">
                  {" "}
                  No Active Ads{" "}
                </Typography>{" "}
              </>
            )}
          </Grid>
        )}
      </Container>
    </>
  );
};

export default Dashboard;
