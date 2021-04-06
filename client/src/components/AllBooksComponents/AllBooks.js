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
  FormControl,
} from "@material-ui/core";
import Book from "./Book/Book";
import useStyles from "./style";
import SearchBox from "../HomePageComponents/SearchBar/SearchBox.js";
import Zoom from 'react-reveal/Zoom';
const AllBooks = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const allBooks = useSelector((state) => state.books);
  const [books,setBooks] = useState([]);
  const [sortbool, setSortbool] = useState(false);
  const [type, settype] = useState("");

  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState();
  const filterData = useSelector((state) => state.filterData);

  useEffect(() => {
    dispatch({ type: ADDFILTER, payload: books });
  }, [dispatch,books]);

  useEffect(()=>{
    if(allBooks.length!==0)
      setBooks(allBooks.filter((book) => book.isSold === false)) 
  },[dispatch,allBooks])

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

  return (
    <>
      <div className={classes.maincontainer}>
        <br/>
      <Zoom>
        <SearchBox />
      </Zoom>
        <br />
        <br />
        <br />
       
        <span style={{ margin: "0px", padding: "5px"}}></span>
        <div style={{ marginTop: "20px" }}>
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
