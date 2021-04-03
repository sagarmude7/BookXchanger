import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar.js";
import Footer from "../Footer/footer.js";
import Book from "../AllBooksComponents/Book/Book";
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

const Wishlist = () => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  const wishList = useSelector((state) => state.wishList);
  const books = useSelector((state) => state.books);

  const [type, settype] = useState("");
  const [sortbool, setSortbool] = useState(false);
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: FETCH_FAV,
      payload: books.filter(
        (book) => book.wishListedBy.includes(user.profile.id) === true
      ),
    });
  }, [dispatch, books]);

  useEffect(() => {
    const sortArray = (type) => {
      //console.log(type);
      const types = {
        pricehighest: "price",
        pricelowest: "price",
        dateoldest: "createdAt",
        datenewest: "createdAt",
      };

      const sortProperty = types[type];

      if (type === "pricelowest") {
        const sorted = [...wishList].sort(
          (b, a) => b[sortProperty] - a[sortProperty]
        );
        setData(sorted);
      } else if (type === "datenewest") {
        const sorted = [...wishList].sort(
          (b, a) => b[sortProperty] - a[sortProperty]
        );
        sorted.reverse();
        setData(sorted);
      } else {
        const sorted = [...wishList].sort(
          (a, b) => b[sortProperty] - a[sortProperty]
        );
        setData(sorted);
      }
    };
    sortArray(sortType);
  }, [sortType]);

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
        interval={5000}
        stopAutoPlayOnHover={false}
        navButtonsAlwaysInvisible={true}
      >
        {images.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </Carousel>
      <div className={classes.mainContainer}>
        <br />
        <div>
          <button
            className={classes.sortButton}
            onClick={() => setSortbool(!sortbool)}
          >
            <span style={{ fontSize: "1.1rem" }}>Sort</span>
          </button>

          {sortbool === true ? (
            <>
              <Box textAlign="center">
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="Sort ByTypeLabel">Sort By</InputLabel>
                  <Select
                    labelId="SortByLabel"
                    id="SortBy"
                    label="SortBy"
                    value={type}
                  >
                    <MenuItem value="Price Lowest">
                      <Paper className={classes.paper}>
                        <FormControlLabel
                          value="pricelowest"
                          control={
                            <Radio
                              onClick={(e) => setSortType(e.target.value)}
                            />
                          }
                          label="Price (Lowest)"
                        />
                      </Paper>
                    </MenuItem>
                    <MenuItem value="Price Highest">
                      <Paper className={classes.paper}>
                        <FormControlLabel
                          value="pricehighest"
                          control={
                            <Radio
                              onClick={(e) => setSortType(e.target.value)}
                            />
                          }
                          label="Price (Highest)"
                        />
                      </Paper>
                    </MenuItem>
                    <MenuItem value="Date Newest">
                      <Paper className={classes.paper}>
                        <FormControlLabel
                          value="datenewest"
                          control={
                            <Radio
                              onClick={(e) => setSortType(e.target.value)}
                            />
                          }
                          label="Date Added (Newest)"
                        />
                      </Paper>
                    </MenuItem>
                    <MenuItem value="Date Oldest">
                      <Paper className={classes.paper}>
                        <FormControlLabel
                          value="dateoldest"
                          control={
                            <Radio
                              onClick={(e) => setSortType(e.target.value)}
                            />
                          }
                          label="Date Added (Oldest)"
                        />
                      </Paper>
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </>
          ) : (
            <></>
          )}
          <div>
            <Container>
              {wishList.length === 0 ? (
                <CircularProgress />
              ) : (
                <Grid
                  className={classes.container}
                  container
                  alignItems="stretch"
                  spacing={3}
                >
                  {sortbool === true
                    ? data.map((book) => (
                        <Grid item xs={12} sm={3}>
                          <Book key={book._id} book={book} />
                        </Grid>
                      ))
                    : wishList.map((book) => (
                        <Grid item xs={12} sm={3}>
                          <Book key={book._id} book={book} />
                        </Grid>
                      ))}
                </Grid>
              )}
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};
export default Wishlist;
