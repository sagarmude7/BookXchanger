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

const AllBooks = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const allBooks = useSelector((state) => state.books);
  const [books, setBooks] = useState([]);
  const [sortbool, setSortbool] = useState(true);
  const [type, settype] = useState("");
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState();
  const filterData = useSelector((state) => state.filterData);

  useEffect(() => {
    dispatch({ type: ADDFILTER, payload: books });
  }, [dispatch, books]);

  useEffect(() => {
    if (allBooks.length !== 0)
      setBooks(allBooks.filter((book) => book.isSold === false));
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

  const [SORTBY, setSORTBY] = useState();

  const handleChange = (event) => {
    setSORTBY(event.target.value);
  };

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
              <TextField
                className={classes.box}
                id="outlined-select-currency"
                select
                label="Sort By"
                value={SORTBY}
                onChange={handleChange}
                variant="outlined"
              >
                <MenuItem value="Date Newest" className={classes.formControl}>
                  <FormControlLabel
                    value="datenewest"
                    control={
                      <Button
                        className={classes.buttonS}
                        onClick={(e) => setSortType(e.target.value)}
                      />
                    }
                    label="Newest to Oldest"
                  />
                </MenuItem>
                <MenuItem value="Date Oldest" className={classes.formControl}>
                  <FormControlLabel
                    value="dateoldest"
                    control={
                      <Button
                        className={classes.buttonS}
                        onClick={(e) => setSortType(e.target.value)}
                      />
                    }
                    label="Oldest to Newest"
                  />
                </MenuItem>
                <MenuItem value="Price Lowest" className={classes.formControl}>
                  <FormControlLabel
                    value="pricelowest"
                    control={
                      <Button
                        className={classes.buttonS}
                        onClick={(e) => setSortType(e.target.value)}
                      />
                    }
                    label="Price: Low to High"
                  />
                </MenuItem>
                <MenuItem value="Price Highest" className={classes.formControl}>
                  <FormControlLabel
                    value="pricehighest"
                    control={
                      <Button
                        className={classes.buttonS}
                        onClick={(e) => setSortType(e.target.value)}
                      />
                    }
                    label="Price: High to Low"
                  />
                </MenuItem>
              </TextField>
              {/* <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="Sort ByTypeLabel" value={type} label="Sort By">
                  Sort By
                </InputLabel>
              </FormControl> */}
            </Box>
          </div>
          <div style={{ marginTop: "2px" }}>
            <Container>
              {filterData.length === 0 ? (
                <CircularProgress />
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
              )}
            </Container>
          </div>

          {/* <h1>All Books : </h1> */}

          {/* <span style={{margin : "0px",padding:"5px",}}><h2>Books</h2></span>
        <div style={{"marginTop":"2px"}}>
                <Container>
                  {filterData.length===0?<CircularProgress/>:(
                      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                      {filterData.map((book)=>(
                              <Grid item xs={12} sm={3}>
                                  <Book key={book._id} book={book}/>
                              </Grid>
                      ))}
                      </Grid>
                      )
                  }
                </Container>
        </div> */}

          {/* 
        <Container>
          {books.length === 0 ? (
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
                : books.map((book) => (
                    <Grid item xs={12} sm={3}>
                      <Book key={book._id} book={book} />
                    </Grid>
                  ))}
            </Grid>
          )}
        </Container> */}
        </div>
      </div>
    </>
  );
};

export default AllBooks;
