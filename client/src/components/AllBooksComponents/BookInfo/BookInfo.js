import React, { useEffect, useState } from "react";
import useStyles from "./styles.js";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
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
  Link,
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

  const bookImage = book?.selectedFile;

  return (
    <>
      <div className={classes.root}>
        <div className={classes.topContainer}>
          <ArrowBackIcon
            className={classes.topLeft}
            onClick={() => history.goBack()}
          ></ArrowBackIcon>
          <Typography className={classes.bottomLeft}>
            <Typography className={classes.branch}>{book?.branch}</Typography>
            {book?.bookName}
            <div className={classes.edition}>
              {" ("}
              {book?.edition}
              {"th edition)"}
            </div>
            <div className={classes.date}>
              {"Posted on: "}
              {moment(book?.createdAt).format("DD MMM, YYYY")}
            </div>
          </Typography>
        </div>

        <div className={classes.middleContainer}>
          <div>
            <img className={classes.bookImage} src={book.selectedFile} alt="" />
          </div>
          <div className={classes.bookInfo}>
            <ul style={{ listStyleType: "none" }}>
              <li>
                Name: <span>{book.bookName}</span>
              </li>

              <li>
                Subject: <span>{book.subject}</span>
              </li>

              <li>
                Branch: <span>{book.branch}</span>
              </li>
              <li>
                Edition:{" "}
                <span>
                  {book.edition}
                  {"th"}
                </span>
              </li>
              <li>
                Price:{" "}
                <span>
                  {book.price}
                  {" ("}
                  {book.priceType}
                  {")"}
                </span>
              </li>
              <li>
                Condition: <span>{book.condition}</span>
              </li>
              <li>
                MRP{"(₹)"}: <span>{book.mrp}</span>
              </li>
              <li>
                Author/Publication: <span>{book.author}</span>
              </li>
              <li>
                Number of pages: <span>{book.noOfPages}</span>
              </li>
            </ul>
          </div>
          <div className={classes.bookDescription}>
            <Typography>Description</Typography>
            <Typography>{book.description}</Typography>
          </div>
          <div>
            <FacebookShareButton
              url={window.location.href}
              quote={
                "Buy second-hand books by directly contacting the seller on BookFlow. Sell used books and old books at your price."
              }
              hashtag="#bookxchanger"
            >
              <FacebookIcon size={36} className={classes.socialMediaButton} />
            </FacebookShareButton>
            <TwitterShareButton
              title={
                "Buy second-hand books by directly contacting the seller on BookFlow. Sell used books and old books at your price."
              }
              via={window.location.href}
              hashtags="#bookxchanger"
            >
              <TwitterIcon size={36} className={classes.socialMediaButton} />
            </TwitterShareButton>
            <WhatsappShareButton
              title={
                "Buy second-hand books by directly contacting the seller on BookFlow. Sell used books and old books at your price."
              }
              seperator={window.location.href}
            >
              <WhatsappIcon size={36} className={classes.socialMediaButton} />
            </WhatsappShareButton>
            <EmailShareButton
              subject={"Buy second hand books on Bookxchanger"}
              body={window.location.href}
              seperator={
                "Buy second-hand books by directly contacting the seller on BookFlow. Sell used books and old books at your price."
              }
            >
              <EmailIcon size={36} className={classes.socialMediaButton} />
            </EmailShareButton>
          </div>
          <div>
            <Typography
              align="center"
              style={{
                fontSize: "20px",
                position: "Centre",
                padding: "5px 0 5px 0",

                color: "white",
              }}
            >
              {"Mention "}
              <Link
                color="inherit"
                to="/"
                component={RouterLink}
                key="Home"
                className={classes.name}
              >
                Bookxchanger
              </Link>{" "}
              {" when contacting seller to get a good deal."}
            </Typography>
          </div>
          <div className={classes.contactUser}>
            <div className={classes.UserInfo}>
              <img
                className={classes.userProfilePic}
                src={book.selectedFile}
                alt="User Profile"
              />
              <Typography>User Name</Typography>
              <Typography>View Profile</Typography>
            </div>
          </div>
          <div className={classes.similarBooks}></div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BookInfo;