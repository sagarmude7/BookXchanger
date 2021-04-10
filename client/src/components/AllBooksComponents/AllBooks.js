import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADDFILTER, UPDATE_BOOKS } from "../../constants/actions";
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
} from "@material-ui/core";
import Book from "./Book/Book";
import useStyles from "./style";
import SearchBox from "./SearchBar/SearchBox.js";
import Zoom from "react-reveal/Zoom";
import BounceLoader from 'react-spinners/BounceLoader'
import { css } from "@emotion/react";
import { getBooks } from "../../actions/books";

const AllBooks = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const allBooks = useSelector((state) => state.books);
  const [books, setBooks] = useState([]);
  const [sortbool, setSortbool] = useState(true);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffff00");
  const [sortType, setSortType] = useState("");
  const [SORTBY, setSORTBY] = useState();
  const filterData = useSelector((state) => state.filterData);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch])

  useEffect(() => {
    dispatch({ type: ADDFILTER, payload: books });
  }, [dispatch, books]);

  useEffect(() => {
    if (books.length !== 0) {
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
      dispatch({ type: ADDFILTER, payload: data });
    }
  }, [dispatch, data]);

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
    sortArray(sortType);
  }, [sortType]);


  const override = css`
    display: block;
    margin-left: 45%;
    border-color: red;
  `;


  const removeSort = () => {
    setSortType("")
    dispatch({ type: ADDFILTER, payload: books });
  }

  // const handleChange = (event) => {
  //   setSortType(event.target.value);
  // };

  return (
    <>
      <div className={classes.maincontainer}>
        <Zoom>
          <SearchBox />
        </Zoom>

        <div className={classes.maincontainer}>
          <div className={classes.sortby}>
            <hr color="red" height="2px" width="100%"></hr>
            <Box textAlign="right">
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

                  <MenuItem value="datenewest">
                    Newest to Oldest
                    </MenuItem>
                  <MenuItem value="dateoldest">
                    Oldest to Newest
                    </MenuItem>
                  <MenuItem value="pricelowest">
                    Price: Low to High
                    </MenuItem>
                  <MenuItem value="pricehighest">
                    Price: High to Low
                    </MenuItem>
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
                {
                  loading ? (
                    <BounceLoader loading={loading} color={color} css={override} size={70} />
                  ) : (
                    filterData.length === 0 ? (
                      <h3>No books found with applied filters</h3>
                    ) : (
                      <Grid
                        className={classes.container}
                        container
                        alignItems="stretch"
                        spacing={3}
                      >
                        {filterData.map((book) => (
                          <Grid item xs={12} sm={3}>
                            <Book key={book._id} book={book} />
                          </Grid>
                        ))}
                      </Grid>
                    )
                  )
                }

              </Container>
            </div>
          </div>
        </div>
    </>
  );
};

export default AllBooks;
