import React, { useState, useEffect } from "react";
import {
  Container,
  Grow,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import { editaBook } from "../../actions/books";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const initialState = {
  bookName: "",
  subject: "",
  price: "",
  condition: "",
  author: "",
  priceType: "",
  mrp: "",
  branch: "",
  tags: [],
  noOfPages: "",
  edition: "",
  description: "",
};
const EditBook = ({ match }) => {
  const classes = useStyles();
  const history = useHistory();
  const [next, setNext] = useState(false);
  const dispatch = useDispatch();
  const [bookData, setBookData] = useState(initialState);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const bookId = match.params.bookId;

  const books = useSelector((state) => state.books);

  const book = books.find((book) => book._id === bookId);

  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
    const token = user?.token;
    if (!token) history.push("/auth");
  }, [user?.token, history]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      editaBook(book._id, {
        ...bookData,
        price: Number(bookData.price),
        mrp: Number(bookData.mrp),
        noOfPages: Number(bookData.noOfPages),
      })
    );
    history.push("/");
  };

  useEffect(() => {
    if (book) setBookData(book);
  }, [book]);

  return (
    <>
      <ArrowBackIcon
        className={classes.back}
        onClick={() => history.goBack()}
        fontSize="large"
      ></ArrowBackIcon>

      <Grow in>
        <Container>
          <Paper className={classes.paper}>
            <form
              autoComplete="off"
              noValidate
              className={`${classes.root} ${classes.form}`}
              onSubmit={handleSubmit}
            >
              <Typography color="secondary" variant="h6">
                Update the Book Information
              </Typography>
              {!next ? (
                <>
                  <TextField
                    name="bookName"
                    variant="outlined"
                    label="Name of Book"
                    fullWidth
                    value={bookData.bookName}
                    onChange={handleChange}
                  />
                  <TextField
                    name="subject"
                    variant="outlined"
                    label="Subject of Book"
                    fullWidth
                    value={bookData.subject}
                    onChange={handleChange}
                  />
                  <Grid item xs={12} sm={12}>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                      fullWidth
                    >
                      <InputLabel id="type-label">
                        Engineering Branch related to Book
                      </InputLabel>
                      <Select
                        labelId="type-label"
                        id="type"
                        label="Engineering Branch related to Book"
                        name="branch"
                        onChange={handleChange}
                        value={bookData.branch}
                      >
                        <MenuItem value="Computer Engineering">
                          <em>Computer Engineering</em>
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
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid container justify="flex-end">
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => setNext(true)}
                      >
                        Next
                      </Button>
                    </Grid>
                  </Grid>
                </>
              ) : (
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="author"
                      variant="outlined"
                      label="Author of Book"
                      fullWidth
                      value={bookData.author}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                      fullWidth
                    >
                      <InputLabel id="conditionTypeLabel">
                        Condition Of Book
                      </InputLabel>
                      <Select
                        labelId="conditionLabel"
                        id="condition"
                        label="Condition Of Book"
                        onChange={handleChange}
                        value={bookData.condition}
                        name="condition"
                      >
                        <MenuItem value="Used">Used</MenuItem>
                        <MenuItem value="New">New</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="price"
                      variant="outlined"
                      label="Selling Price"
                      fullWidth
                      value={bookData.price}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                      fullWidth
                    >
                      <InputLabel id="type-label">Price Type</InputLabel>
                      <Select
                        labelId="type-label"
                        id="priceType"
                        label="Price Type"
                        name="priceType"
                        value={bookData.priceType}
                        onChange={handleChange}
                      >
                        <MenuItem value="Fixed">
                          <em>Fixed</em>
                        </MenuItem>
                        <MenuItem value="Negotiable">Negotiable</MenuItem>
                        <MenuItem value="Price on Call">Price on Call</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="mrp"
                      variant="outlined"
                      label="MRP Of Book"
                      fullWidth
                      value={bookData.mrp}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <div className={classes.root1}>
                      <input
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                      />
                      <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) =>
                          setBookData({ ...bookData, selectedFile: base64 })
                        }
                      />
                      <label htmlFor="contained-button-file">
                        <Button
                          variant="contained"
                          color="primary"
                          component="span"
                        >
                          Upload Photos Of Book
                        </Button>
                      </label>
                      <input
                        accept="image/*"
                        className={classes.input}
                        id="icon-button-file"
                        type="file"
                      />
                      <label htmlFor="icon-button-file">
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          <PhotoCamera />
                        </IconButton>
                      </label>
                    </div>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="tags"
                      variant="outlined"
                      label="Add Tags(seperated by commas)"
                      fullWidth
                      value={bookData.tags}
                      onChange={(e) =>
                        setBookData({
                          ...bookData,
                          tags: e.target.value.split(","),
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="noOfPages"
                      variant="outlined"
                      label="Number Of Pages(Approx)"
                      value={bookData.noOfPages}
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="edition"
                      variant="outlined"
                      label="Edition Of Book"
                      fullWidth
                      value={bookData.edition}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      name="description"
                      variant="outlined"
                      label="Description Of Book"
                      fullWidth
                      multiline
                      rows={4}
                      value={bookData.description}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid container justify="space-between">
                    <Grid item>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => setNext(false)}
                      >
                        Previous
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        className={classes.buttonSubmit}
                        variant="contained"
                        color="primary"
                        size="large"
                        type="submit"
                        fullWidth
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              )}
            </form>
          </Paper>
        </Container>
      </Grow>
    </>
  );
};

export default EditBook;
