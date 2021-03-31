import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Book from "../../AllBooksComponents/Book/Book";
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
  Typography,
} from "@material-ui/core";
import useStyles from "./style";
import { getBooks } from "../../../actions/books";

const BookSlider = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const allBooks = useSelector((state) => state.books);
  const books = allBooks.filter((book) => book.isSold === false);
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
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 460 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 460, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <hr style={{ borderWidth: "0px" }} />
      <hr style={{ borderWidth: "0px" }} />

      <Typography variant="h6" style={{ textAlign: "center", color: "black" }}>
        Most Trending Books
      </Typography>
      <hr style={{ border: "1px solid black", width: "300px" }} />
      <hr style={{ borderWidth: "0px" }} />
      <Carousel
        responsive={responsive}
        arrows={false}
        infinite={true}
        autoPlay={true}
      >
        {books.map((book) => (
          <Grid>
            <Container>
              <Book key={book._id} book={book} />
            </Container>
          </Grid>
        ))}
      </Carousel>
      <hr style={{ borderWidth: "0px" }} />
      <hr style={{ borderWidth: "0px" }} />
      <Typography
        variant="h6"
        style={{ textAlign: "center", marginTop: "25px" }}
      >
        Most View Books
      </Typography>
      <hr style={{ border: "1px solid black", width: "300px" }} />
      <hr style={{ borderWidth: "0px" }} />

      <Carousel
        responsive={responsive}
        arrows={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={6000}
      >
        {books.map((book) => (
          <Grid>
            <Container>
              <Book key={book._id} book={book} />
            </Container>
          </Grid>
        ))}
      </Carousel>
    </>
  );
};

export default BookSlider;
