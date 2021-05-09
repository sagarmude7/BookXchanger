import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar.js";
import Footer from "../Footer/footer.js";
import PulseLoader from "react-spinners/PulseLoader";
import Book from "../WishlistComponent/Book/Book.js";
import { useDispatch, useSelector } from "react-redux";
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
  Box,
  FormControl,
  InputLabel,
  Select,
  Typography,
  MenuItem,
} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import useStyles from "./style.js";
import { getWishList } from "../../actions/user";
import { FETCH_FAV } from "../../constants/actions";
import { getBooks } from "../../actions/books";
import Zoom from "react-reveal/Zoom";
import { css } from "@emotion/react";
import RiseLoader from "react-spinners/RiseLoader";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Wishlist = () => {
  const history = useHistory();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  // const wishList = useSelector((state) => state.wishList);
  const books = useSelector((state) => state.books);
  const [loading, setLoading] = useState(true);
  const [wishListedBooks, setWishListedBooks] = useState(
    books.filter((book) => book.wishListedBy.includes(user.profile.id) === true)
  );
  const [type, settype] = useState("");
  const [sortbool, setSortbool] = useState(false);
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    if (books.length === 0) {
      dispatch(getBooks());
    }
  });

  useEffect(() => {
    if (books.length !== 0) {
      setLoading(false);
      setWishListedBooks(
        books.filter(
          (book) => book.wishListedBy.includes(user.profile.id) === true
        )
      );
    }
  }, [books]);

  const override = css`
    display: block;

    border-color: red;
    background-color: #eae7dc;
  `;

  var images = [
    {
      img:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80",
    },
    {
      img:
        "https://www.teahub.io/photos/full/190-1905414_books-library-wallpaper-hd-wallpapers-for-pc-book.jpg",
    },
    {
      img:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8&w=1000&q=80",
    },
  ];

  const Item = (props) => {
    return (
      <div className={classes.parent}>
      <ArrowBackIcon
            className={classes.back}
            onClick={() => history.goBack()}
            fontSize="large"
          ></ArrowBackIcon>
        <div
          className={classes.main}
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,1,1,0.3),rgba(1,0,0.5)),url(" +
              props.item.img +
              ")",
          }}
        >
          <Typography className={classes.heading} variant="h2">
            Wishlist
          </Typography>
        </div>
      </div>
    );
  };

  return (
    <>
      <Carousel
        indicators={false}
        animation="fade"
        autoPlay={true}
        interval={7000}
        stopAutoPlayOnHover={false}
        navButtonsAlwaysInvisible={true}
      >
        {images.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </Carousel>
      <div className={classes.mainContainer}>
        <br />
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
          <div>
            <div>
              <Container>
                <div
                  style={{
                    background: "#e85a4f",
                    borderRadius: "0.7rem",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h4" style={{ color: "white" }}>
                    Your Favourite Books
                  </Typography>
                </div>
                {wishListedBooks.length === 0 ? (
                  <CircularProgress />
                ) : (
                  <Grid
                    className={classes.container}
                    container
                    alignItems="stretch"
                    spacing={3}
                  >
                    {wishListedBooks.map((book) => (
                      <Grid item xs={12} sm={3}>
                        <Zoom bottom>
                          <Book key={book._id} book={book} />
                        </Zoom>
                      </Grid>
                    ))}
                  </Grid>
                )}
                <br />
                <br />
              </Container>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Wishlist;
