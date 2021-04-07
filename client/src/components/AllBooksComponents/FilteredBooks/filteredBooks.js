import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, CircularProgress, Grow, Container } from "@material-ui/core";
import Book from "../Book/Book";
import AllBooks from "../AllBooks";
import useStyles from "../style";
import { set } from "mongoose";
import SearchBox from "../../HomePageComponents/SearchBar/SearchBox.js";
const FilteredBooks = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const filterData = useSelector((state) => state.filterData);

  useEffect(() => {
    console.log("Getting Filtered Books");
  }, [dispatch]);

  // console.log(filterData);

  if (filterData.length === 0) {
    return <AllBooks />;
  } else {
    return (
      <>
        <div>
          <Container>
            {filterData.length === 0 ? (
              "No Books Found"
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
      </>
    );
  }
};

export default FilteredBooks;
