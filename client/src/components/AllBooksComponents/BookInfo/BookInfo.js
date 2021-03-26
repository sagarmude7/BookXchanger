import React, { useEffect, useState } from "react";
import useStyles from "./styles.js";
import { useTheme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../Footer/footer";
import moment from "moment";
import {
  Button,
  Grid,
  CircularProgress,
  Grow,
  Container,
  Paper,
  RadioGroup,
  FormControlLabel,
  Radio,
  Card,
  CardContent,
  CardMedia,
  Typography,
  List,
  ListItemText,
  ListItem,
  IconButton,
  Toolbar,
  AppBar,
  Divider,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useParams } from "react-router";
import { GET_BOOK } from "../../../constants/actions";

const BookInfo = ({ match }) => {
  /***************************
  REDUX  GLOBAL STATE PROPERTIES
 **************************/
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const book = useSelector((state) => state.book);

  const bookId = match.params.bookId;

  useEffect(() => {
    dispatch({
      type: GET_BOOK,
      payload:
        books.find((bk) => bk._id === bookId) === undefined
          ? {}
          : books.find((bk) => bk._id === bookId),
    });
  }, [dispatch]);

  return (
    <>
      <div className={classes.root}>
        <div className={classes.topContainer}>
          <ArrowBackIcon
            className={classes.topLeft}
            onClick={() => history.goBack()}
          ></ArrowBackIcon>
          <Typography className={classes.bottomLeft}>
            {book.bookName}
            <div className={classes.edition}>
              {" ("}
              {book.edition}
              {"th edition)"}
            </div>
            <div className={classes.date}>
              {moment(book?.createdAt).format("DD MMM, YYYY")}
            </div>
          </Typography>
        </div>

        {/* <Grid container xs={12} className={classes.grid}>
          <Grid item xs={6}>
            <List>
              <ListItem button>
                <ListItemText
                  primary="Branch"
                  secondary={book.branch}
                  color="white"
                />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Subject" secondary={book.subject} />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Price" secondary={book.price} />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Condition" secondary={book.condition} />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Date" secondary={book.createdAt} />
              </ListItem>
              <ListItem button>
                <ListItemText
                  primary="Last Updated"
                  secondary={book.updatedAt}
                />
              </ListItem>
              <Divider />
            </List>
          </Grid>
          <Grid item xs={6}>
            <img
              src={book.selectedFile}
              alt="book pic"
              width="30"
              className={classes.Image}
            />
          </Grid>
        </Grid> */}
      </div>
      <Footer />
    </>
  );
};

export default BookInfo;
