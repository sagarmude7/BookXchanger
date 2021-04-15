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
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Avatar from "@material-ui/core/Avatar";
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
import Error404 from "../../ErrorComponent/Error404";
import { useParams } from "react-router";
import { GET_BOOK } from "../../../constants/actions";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Book from "../../AllBooksComponents/Book/Book";
import Flip from "react-reveal/Flip";
import Roll from "react-reveal/Roll";
import HeadShake from "react-reveal/HeadShake";
const BookInfo = ({ match }) => {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const book = useSelector((state) => state.book);
  const user = JSON.parse(localStorage.getItem("profile"));
  const bookId = match.params.bookId;
  const [found, setFound] = useState(
    books.find((bk) => bk._id === bookId) !== undefined
  );

  useEffect(() => {
    if (books.find((bk) => bk._id === bookId) !== undefined) {
      dispatch({
        type: GET_BOOK,
        payload: books.find((bk) => bk._id === bookId),
      });
    }
  }, [dispatch]);

  //Similar books

  const allBooks = useSelector((state) => state.books);
  const filterbooks = allBooks.filter(
    (books) =>
      books.isSold === false &&
      books.branch === book.branch &&
      books.owner !== book.owner
  );
  const [sortbool, setSortbool] = useState(false);

  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState();

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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

  return found ? (
    <>
      <div className={classes.root}>
        <div className={classes.topContainer}>
          <ArrowBackIcon
            style={{ cursor: "pointer" }}
            className={classes.topLeft}
            onClick={() => history.goBack()}
          ></ArrowBackIcon>

          <Typography className={classes.bottomLeft}>
            <div className={classes.bookMain}>
              <Typography className={classes.branch}>{book.branch}</Typography>{" "}
              {book.bookName}
              <div className={classes.edition}>
                {" ("}
                {book.edition}
                {" edition)"}
              </div>
              <div className={classes.date}>
                {"Posted on: "}
                {moment(book?.createdAt).format("DD MMM, YYYY")}
              </div>
            </div>
            <div className={classes.price}>
              {book.price}
              {"₹ ("}
              {book.priceType}

              {")"}
            </div>
          </Typography>
        </div>

        <div className={classes.middleContainer}>
          <div className={classes.bookDetails}>
            <div className={classes.imgAndInfo}>
              <div>
                <img
                  className={classes.bookImage}
                  src={book.selectedFile}
                  alt="Book"
                />
              </div>
              <div>
                <ul style={{ listStyleType: "none" }} className={classes.list}>
                  <li>
                    Name: <span className={classes.name}>{book.bookName}</span>
                  </li>

                  <li>
                    Subject:{" "}
                    <span className={classes.name}>{book.subject}</span>
                  </li>

                  <li>
                    Branch: <span className={classes.name}>{book.branch}</span>
                  </li>
                  <li>
                    Edition:{" "}
                    <span className={classes.name}>
                      {book.edition}
                      {"th"}
                    </span>
                  </li>
                  <li>
                    Price{"(₹)"}:{" "}
                    <span className={classes.name}>
                      {book.price}
                      {" ("}
                      {book.priceType}
                      {")"}
                    </span>
                  </li>
                  <li>
                    Condition:{" "}
                    <span className={classes.name}>{book.condition}</span>
                  </li>
                  <li>
                    MRP{"(₹)"}: <span className={classes.name}>{book.mrp}</span>
                  </li>
                  <li>
                    Author/Publication:{" "}
                    <span className={classes.name}>{book.author}</span>
                  </li>
                  <li>
                    Number of pages:{" "}
                    <span className={classes.name}>
                      {book.noOfPages}
                      {"+"}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className={classes.bookDescription}>
              <Typography variant="h5">Description</Typography>
              <Typography variant="body1">{book.description}</Typography>
              <div>
                <FacebookShareButton
                  url={window.location.href}
                  quote={
                    "Buy second-hand books by directly contacting the seller on BookFlow. Sell used books and old books at your price."
                  }
                  hashtag="#bookxchanger"
                >
                  <FacebookIcon
                    size={36}
                    className={classes.socialMediaButton}
                  />
                </FacebookShareButton>
                <TwitterShareButton
                  title={
                    "Buy second-hand books by directly contacting the seller on BookFlow. Sell used books and old books at your price."
                  }
                  via={window.location.href}
                  hashtags="#bookxchanger"
                >
                  <TwitterIcon
                    size={36}
                    className={classes.socialMediaButton}
                  />
                </TwitterShareButton>
                <WhatsappShareButton
                  title={
                    "Buy second-hand books by directly contacting the seller on BookFlow. Sell used books and old books at your price."
                  }
                  seperator={window.location.href}
                >
                  <WhatsappIcon
                    size={36}
                    className={classes.socialMediaButton}
                  />
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
              <div style={{ padding: "10px 5px" }}>
                <LocalOfferIcon
                  style={{
                    display: "inline",
                    color: "#e85a4f",
                    padding: "1px",
                    margin: "0 10px 0 0",
                  }}
                />
                {book?.tags?.map((tags) => (
                  <Typography variant="body2" style={{ display: "inline" }}>
                    {" | "}
                    {tags}
                    {"  "}
                  </Typography>
                ))}
              </div>
            </div>
          </div>
          <div className={classes.sideContainer}>
            <div
              className={classes.contactUser}
              style={{ border: "2px solid black" }}
            >
              <div className={classes.UserInfo}>
                <img
                  className={classes.userProfilePic}
                  src="http://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG-Free-Download.png"
                  alt="User Profile"
                />
                {/* <Avatar>{book.ownerName[0]}</Avatar> */}
                <Typography variant="h6">{book.ownerName}</Typography>
                <Link
                  color="inherit"
                  to={`/user/${book.owner}`}
                  component={RouterLink}
                  key="Home"
                  className={classes.name}
                >
                  <Typography variant="body2">View Profile</Typography>
                </Link>
                <br />
                <Link
                  to={`/user/${book.owner}`}
                  component={RouterLink}
                  key="Home"
                  className={classes.name}
                >
                  <Typography
                    variant="body2"
                    style={{
                      color: "white",
                      fontSize: "22px",
                      textAlign: "center",
                      padding: "5px",
                      backgroundColor: "#e98074",
                      borderRadius: "30px",
                      border: "2px solid black",
                    }}
                  >
                    Contact Seller
                  </Typography>
                </Link>
              </div>
            </div>
            <div className={classes.guidelines}>
              <Typography variant="h6">Read before you deal</Typography>
              <div>
                <ul
                  style={{ listStyleType: "none" }}
                  className={classes.guidelineList}
                >
                  <li>1. Please follow Government guidelines for COVID19.</li>
                  <li>2. Use a safe location to meet seller</li>
                  <li>3. Never provide your personal or banking information</li>
                  <li>4. Beware of unrealistic offers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: "rgb(234,231,220)" }}>
        <Typography
          align="center"
          style={{
            fontSize: "20px",
            position: "Centre",
            padding: "5px 0 5px 0",

            color: "black",
          }}
        >
          {"Mention "}
          <Link
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

      <div style={{ background: "rgb(234,231,220)", padding: "20px" }}>
        <Typography
          variant="h6"
          style={{
            textAlign: "center",
            background: "rgb(234,231,220)",
            paddingTop: "10px",
          }}
        >
          Similar Books
        </Typography>
        <hr
          style={{
            border: "1.5px solid #8e8d8a",
            width: "300px",
            background: "rgb(234,231,220)",
            margin: "0px auto",
          }}
        />
        {filterbooks.length === 0 ? (
          <Typography align="center" variant="h5" style={{ padding: "50px " }}>
            No similar book found
          </Typography>
        ) : (
          <div
            style={{
              padding: "20px 10px",
              background: "rgb(234,231,220)",
              marginTop: "0px",
              marginBottom: "0px",
            }}
          >
            <Carousel
              responsive={responsive}
              arrows={false}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={6000}
            >
              {filterbooks.map((book) => (
                <Grid>
                  <Container>
                    <Book key={book._id} book={book} />
                  </Container>
                </Grid>
              ))}
            </Carousel>
          </div>
        )}
      </div>
    </>
  ) : (
    <Error404 />
  );
};

export default BookInfo;
