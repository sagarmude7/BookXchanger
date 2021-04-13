import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADDFILTER, UPDATE_BOOKS } from "../../constants/actions";
import { css } from "@emotion/react";
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
  Select,
  MenuItem,
  InputLabel,
  TextField,
  FormControl,
  Typography,
} from "@material-ui/core";
import Book from "./Book/Book";
import useStyles from "./style";
import SearchBox from "./SearchBar/SearchBox.js";
import Zoom from "react-reveal/Zoom";
import PulseLoader from "react-spinners/PulseLoader";

import { getBooks } from "../../actions/books";
import { Pagination } from "./Pagination/Pagination";

const AllBooks = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const allBooks = useSelector((state) => state.books);
  const [books, setBooks] = useState([]);
  const [sortbool, setSortbool] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffff00");
  const [sortType, setSortType] = useState("");
  const [SORTBY, setSORTBY] = useState();
  const filterData = useSelector((state) => state.filterData);
  const [currentPage, setcurrentPage] = useState(1);
  const [booksPerpage, setbooksPerpage] = useState(12);

  useEffect(() => {
    if (allBooks.length === 0) {
      dispatch(getBooks());
      console.log("Books length 0");
    }
  });

  useEffect(() => {
    dispatch({ type: ADDFILTER, payload: books });
  }, [dispatch, books]);

  useEffect(() => {
    if (allBooks.length !== 0) {
      setLoading(false);
    }
  }, [allBooks]);

  useEffect(() => {
    if (allBooks.length !== 0) {
      setBooks(allBooks.filter((book) => book.isSold === false));
    }
  }, [dispatch, allBooks]);

  useEffect(() => {
    if (sortbool === true) {
      console.log("I am running")
      dispatch({ type: ADDFILTER, payload: data });
    }
    
  }, [dispatch, data]);

  useEffect(() => {
    
    const sortArray = (type) => {
      setSortbool(true)
      //console.log(type);
      const types = {
        pricehighest: "price",
        pricelowest: "price",
        dateoldest: "createdAt",
        datenewest: "createdAt",
      };

      const sortProperty = types[type];

      if (type === "pricelowest") {
        const sorted = [...books].sort(
          (b, a) => b[sortProperty] - a[sortProperty]
        );
        setData(sorted);
      } else if (type === "datenewest") {
        const sorted = [...books].sort(
          (b, a) => b[sortProperty] - a[sortProperty]
        );
        sorted.reverse();
        setData(sorted);
      } else {
        const sorted = [...books].sort(
          (a, b) => b[sortProperty] - a[sortProperty]
        );
        setData(sorted);
      }
    };
    if(sortType!==""){
      sortArray(sortType);
    }
  }, [sortType]);

  const override = css`
    display: block;
    padding-left: 45%;
    border-color: red;
    background-color: #eae7dc;
  `;

  const removeSort = () => {
    setSortbool(false)
    setSortType("");
    dispatch({ type: ADDFILTER, payload: books });
  };

  // const handleChange = (event) => {
  //   setSortType(event.target.value);
  // };

  const indexLast = currentPage * booksPerpage;
  const indexFirst = indexLast - booksPerpage;
  const currentBooks = filterData.slice(indexFirst, indexLast);
  //console.log(currentBooks);

  const paginate = (pageNumber) => setcurrentPage(pageNumber);

  return (
    <>
      <div className={classes.maincontainer}>
        <Zoom>
          <SearchBox />
        </Zoom>

        <div
          className={classes.maincontainer}
          style={{ backgroundColor: "#eae7dc" }}
        >
          <div className={classes.sortby}>
            <hr
              style={{
                border: "1.5px solid #e85a4f",
                width: "100%",
                background: "rgb(234,231,220)",
                margin: "0px auto",
              }}
            />
            <Box textAlign="right" style={{ paddingTop: "15px" }}>
              <FormControl variant="outlined">
                <InputLabel id="type-label">SORT BY</InputLabel>
                <Select
                  labelId="type-label"
                  id="sortType"
                  label="SORT BY"
                  name="sortType"
                  className={classes.box}
                  value={sortType}
                  onChange={(e) => setSortType(e.target.value)}
                  placeholder="Select Price Type"
                >
                  <MenuItem value="datenewest">Newest to Oldest</MenuItem>
                  <MenuItem value="dateoldest">Oldest to Newest</MenuItem>
                  <MenuItem value="pricelowest">Price: Low to High</MenuItem>
                  <MenuItem value="pricehighest">Price: High to Low</MenuItem>
                </Select>
              </FormControl>
              <Button
                variant="text"
                color="secondary"
                onClick={removeSort}
                className={classes.button}
              >
                Reset Sort
              </Button>
            </Box>
          </div>
          <div style={{ marginTop: "2px" }}>
            <Container>
              {loading ? (
                <PulseLoader
                  loading={loading}
                  color="#e98074"
                  css={override}
                  size={30}
                  style={{ background: "rgb(234,231,220)" }}
                />
              ) : filterData.length === 0 ? (
                <Typography align="center" variant="h5">
                  No books found
                </Typography>
              ) : (
                <Grid
                  className={classes.container}
                  container
                  alignItems="stretch"
                  spacing={3}
                >
                  {currentBooks.map((book) => (
                    <Grid item xs={12} sm={3}>
                      <Book key={book._id} book={book} />
                    </Grid>
                  ))}
                </Grid>
              )}
              <br />
              <Pagination
                booksPerpage={booksPerpage}
                totalBooks={filterData.length}
                paginate={paginate}
              />
              <br />
              <br />
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBooks;