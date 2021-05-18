import React, { useState } from "react";
import { ADDFILTER } from "../../../constants/actions";
import "./styles.css";
import useStyles from "./styles.js";
import { useSelector, useDispatch } from "react-redux";
import {
  Grid,
  Typography,
  TextField,
  Button,
  ButtonGroup,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const SearchBox = () => {
  const classes = useStyles();
  const [inputName, setInputName] = useState("");
  const [inputSubject, setInputSubject] = useState("");
  const [inputBranch, setInputBranch] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputCondition, setInputCondition] = useState("");
  const [inputTags, setInputTags] = useState("");
  const [isadv, setIsadv] = useState(false);
  const dispatch = useDispatch();
  const allbooks = useSelector((state) => state.books);
  const books = allbooks.filter((book) => book.isSold === false);

  function setName(value) {
    setInputName(value);
  }

  function setSubject(value) {
    setInputSubject(value);
  }

  function setBranch(value) {
    setInputBranch(value);
  }

  function setPrice(value) {
    setInputPrice(value);
  }

  function setCondition(value) {
    setInputCondition(value);
  }
  function setTags(value) {
    setInputTags(value);
  }

  function showAdv() {
    isadv ? setIsadv(false) : setIsadv(true);
  }

  const removeFilters = () => {
    dispatch({ type: ADDFILTER, payload: books });
    setInputName("");
    setInputBranch("");
    setInputSubject("");
    setInputCondition("");
    setInputTags("");
    setInputPrice("");
  };

  const updateBooks = () => {
    if (
      inputName === "" &&
      inputSubject === "" &&
      inputBranch === "" &&
      inputPrice === "" &&
      inputCondition === "" &&
      inputTags === ""
    ) {
      dispatch({ type: ADDFILTER, payload: books });
    } else {
      var filteredBookArr = [];
      for (const book of books) {
        if (inputName !== "") {
          if (book.bookName.toLowerCase().includes(inputName.toLowerCase())) {
            filteredBookArr.push(book);
          }
        }
        if (inputSubject !== "") {
          if (book.subject.toLowerCase().includes(inputSubject.toLowerCase())) {
            if (filteredBookArr.length !== 0) {
              if (filteredBookArr[filteredBookArr.length - 1]._id !== book._id)
                filteredBookArr.push(book);
            } else {
              filteredBookArr.push(book);
            }
          }
        }
        if (inputTags !== "") {
          if (book.tags[0].toLowerCase().includes(inputTags.toLowerCase())) {
            if (filteredBookArr.length !== 0) {
              if (filteredBookArr[filteredBookArr.length - 1]._id !== book._id)
                filteredBookArr.push(book);
            } else {
              filteredBookArr.push(book);
            }
          }
        }
        if (
          book.branch === inputBranch ||
          book.condition === inputCondition ||
          book.priceType === inputPrice
        ) {
          if (filteredBookArr.length !== 0) {
            if (filteredBookArr[filteredBookArr.length - 1]._id !== book._id)
              filteredBookArr.push(book);
          } else {
            filteredBookArr.push(book);
          }
        }
      }

      dispatch({ type: ADDFILTER, payload: filteredBookArr });
    }
  };

  return (
    <>
      <div
        className={classes.topContainer}
        style={{ backgroundColor: "#eae7dc" }}
      >
        <Typography className={classes.head}>Search a Book </Typography>
      </div>
      <div
        className={classes.middleContainer}
        style={{ backgroundColor: "#eae7dc" }}
      >
        <div className={classes.searchboxes} noValidate autoComplete="off">
          <div>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4} className={classes.paper}>
                <TextField
                  className={classes.text}
                  label="Name of Book"
                  variant="outlined"
                  key="random1"
                  value={inputName}
                  fullWidth
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4} className={classes.paper}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel id="branchTypeLabel">Branch</InputLabel>
                  <Select
                    labelId="branchLabel"
                    id="branch"
                    label="branch Of Book"
                    onChange={(e) => setBranch(e.target.value)}
                    value={inputBranch}
                    name="branch"
                    style={{ paddingTop: "1.5px", paddingBottom: "1.5px" }}
                  >
                    <MenuItem value="First Year">First Year</MenuItem>
                    <MenuItem value="Computer Engineering">
                      Computer Engineering
                    </MenuItem>
                    <MenuItem value="Information Technology">
                      Information Technology
                    </MenuItem>
                    <MenuItem value="Electronics Engineering">
                      Electronics Engineering
                    </MenuItem>
                    <MenuItem value="Electronics and Telecommunication Engineering">
                      Electronics and Telecommunication Engineering
                    </MenuItem>
                    <MenuItem value="Mechanical Engineering">
                      Mechanical Engineering
                    </MenuItem>
                    <MenuItem value="Civil Engineering">
                      Civil Engineering
                    </MenuItem>
                    <MenuItem value="Production Engineering">
                      Production Engineering
                    </MenuItem>
                    <MenuItem value="Textile Engineering">
                      Textile Engineering
                    </MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4} className={classes.paper}>
                <TextField
                  id="outlined-basic"
                  label="Subject"
                  variant="outlined"
                  key="random3"
                  fullWidth
                  value={inputSubject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
          </div>

          {isadv ? (
            <Grid container spacing={4} className={classes.gridContainer}>
              <Grid item xs={12} sm={4} className={classes.paper}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel id="conditionTypeLabel">
                    Condition Of Book
                  </InputLabel>
                  <Select
                    labelId="conditionLabel"
                    id="condition"
                    label="Condition Of Book"
                    onChange={(e) => setCondition(e.target.value)}
                    value={inputCondition}
                    name="condition"
                  >
                    <MenuItem value="Used">Used</MenuItem>
                    <MenuItem value="New">New</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4} className={classes.paper}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel id="type-label">Price Type</InputLabel>
                  <Select
                    labelId="type-label"
                    id="priceType"
                    label="Price Type"
                    name="priceType"
                    value={inputPrice}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Select Price Type"
                  >
                    <MenuItem value="Fixed">Fixed</MenuItem>
                    <MenuItem value="Negotiable">Negotiable</MenuItem>
                    <MenuItem value="Price on Call">Price on Call</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4} className={classes.paper}>
                <TextField
                  id="outlined-basic"
                  label="Related Tags"
                  variant="outlined"
                  key="random3"
                  value={inputTags}
                  fullWidth
                  onChange={(e) => {
                    setTags(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
          ) : (
            <></>
          )}
          <Box textAlign="center">
            <Button
              variant="contained"
              onClick={updateBooks}
              className={classes.button}
              startIcon={<SearchIcon />}
            >
              Search
            </Button>
          </Box>

          <ButtonGroup
            variant="text"
            size="large"
            aria-label="outlined secondary button group"
          >
            <Button style={{ color: "#e85a4f" }} onClick={showAdv}>
              {isadv ? "Hide Advanced Search" : "Advanced Search"}
            </Button>
            <Button style={{ color: "#e85a4f" }} onClick={removeFilters}>
              Reset Search
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
