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
import SendIcon from "@material-ui/icons/Send";
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
  Icon,
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
  TextField,
  Link,
  Divider,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useParams } from "react-router";
import { GET_BOOK } from "../../../constants/actions";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Book from "../../AllBooksComponents/Book/Book";
import useStyle from "./style";
import { getBooks } from "../../../actions/books";

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

  //Similar books

  const classe = useStyle();
  const allBooks = useSelector((state) => state.books);
  const filterbooks = allBooks.filter(
    (books) => books.isSold === false && books.branch === book.branch
  );
  const [sortbool, setSortbool] = useState(false);

  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState();
  useEffect(() => {
    console.log("Getting Books");
    //accepts an action call as an argument -> goes to actions folder
    dispatch(getBooks());
  }, [dispatch]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 264, min: 0 },
      items: 1,
    },
  };
  //Similar books

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
            <div>
              <Typography>Send Message</Typography>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={5}
                variant="outlined"
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.SendButton}
                endIcon={<SendIcon />}
              >
                Send
              </Button>
            </div>
          </div>
          <div className={classes.similarBooks}>
            <hr style={{ borderWidth: "0px" }} />

            <Typography
              variant="h6"
              style={{ textAlign: "center", color: "black" }}
            >
              Similar Books
            </Typography>
            <hr style={{ border: "1px solid black", width: "150px" }} />
            <hr style={{ borderWidth: "0px" }} />
            <Carousel responsive={responsive}>
              <Container>
                <Book key={1} book={filterbooks[0]} />
              </Container>
              <Container>
                <Book key={2} book={filterbooks[1]} />
              </Container>
              <Container>
                <Book key={3} book={filterbooks[3]} />
              </Container>
            </Carousel>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BookInfo;