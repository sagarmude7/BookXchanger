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
  Stepper,
  Step,
  StepLabel,
  Box,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import StepConnector from "@material-ui/core/StepConnector";
import clsx from "clsx";
import LibraryBooksOutlinedIcon from "@material-ui/icons/LibraryBooksOutlined";
import AddToPhotosOutlinedIcon from "@material-ui/icons/AddToPhotosOutlined";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import { useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Compress from "compress.js";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./style";
import { createBookAd } from "../../actions/books";
import { VALID } from "../../constants/actions";
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

const PostAdForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [bookData, setBookData] = useState(initialState);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [err, setErr] = useState(false);
  const book = useSelector((state) => state.book);
  const compress = new Compress();
  const addImage = async (e) => {
    const files = [...e.target.files];
    const imageData = await compress.compress(files, {
      size: 0.2,
      quality: 0.5,
    });
    const imageFile = imageData[0].prefix + imageData[0].data;
    setBookData({ ...bookData, selectedFile: imageFile });
  };

  const handleChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
    const token = user?.token;
    if (!token) history.push("/auth");
  }, [user?.token, history]);

  useEffect(() => {
    if (book.msg) setErr(true);
  }, [book]);

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setErr(false);
    dispatch({ type: VALID, payload: {} });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      createBookAd(
        {
          ...bookData,
          ownerName: user.profile.name,
        },
        history
      )
    );
  };

  function getSteps() {
    return ["Book Info", "Additional Book Info", "Extra Info"];
  }

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <Grow in>
            <Container>
              <Paper className={classes.paper}>
                <TextField
                  name="bookName"
                  variant="outlined"
                  label="Name of Book"
                  fullWidth
                  value={bookData.bookName}
                  onChange={handleChange}
                  className={classes.textfield}
                />
                <TextField
                  name="subject"
                  variant="outlined"
                  label="Subject of Book"
                  fullWidth
                  value={bookData.subject}
                  onChange={handleChange}
                  className={classes.textfield}
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
              </Paper>
            </Container>
          </Grow>
        );

      case 1:
        return (
          <Grow in>
            <Container>
              <Paper className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="author"
                      variant="outlined"
                      label="Name of the Author/Publication"
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
                        <MenuItem value="Fixed">Fixed</MenuItem>
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

                      <label htmlFor="icon-button-file">
                        <Button
                          variant="contained"
                          component="span"
                          className={classes.nextbutton}
                        >
                          Upload Photos Of Book
                        </Button>
                      </label>
                      <input
                        accept="image/*"
                        className={classes.input}
                        id="icon-button-file"
                        type="file"
                        onChange={addImage}
                        multiple
                      />
                      <label htmlFor="icon-button-file">
                        <IconButton
                          style={{ backgroundColor: "#E85A4F" }}
                          aria-label="upload picture"
                          component="span"
                        >
                          <PhotoCamera />
                        </IconButton>
                      </label>
                    </div>
                  </Grid>
                </Grid>
              </Paper>
            </Container>
          </Grow>
        );
      case 2:
        return (
          <Grow in>
            <Container>
              <Paper className={classes.paper}>
                <Grid container spacing={2}>
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
                </Grid>
                <Box align="center">
                  <Button
                    className={classes.buttonSubmit}
                    size="large"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Box>
              </Paper>
            </Container>
          </Grow>
        );
      default:
        return "Unknown stepIndex";
    }
  }

  const ColorlibConnector = withStyles({
    alternativeLabel: {
      top: 22,
    },
    active: {
      "& $line": {
        backgroundImage:
          "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
      },
    },
    completed: {
      "& $line": {
        backgroundImage:
          "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
      },
    },
    line: {
      height: 3,
      border: 0,
      backgroundColor: "#eaeaf0",
      borderRadius: 1,
    },
  })(StepConnector);

  const useColorlibStepIconStyles = makeStyles({
    root: {
      backgroundColor: "#ccc",
      zIndex: 1,
      color: "#fff",
      width: 50,
      height: 50,
      display: "flex",
      borderRadius: "50%",
      justifyContent: "center",
      alignItems: "center",
    },
    active: {
      backgroundImage:
        "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
      boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    },
    completed: {
      backgroundImage:
        "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    },
  });

  function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
      1: <LibraryBooksOutlinedIcon />,
      2: <AddToPhotosOutlinedIcon />,
      3: <AssignmentOutlinedIcon />,
    };
    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
          [classes.completed]: completed,
        })}
      >
        {icons[String(props.icon)]}
      </div>
    );
  }

  ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
  };

  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.mainContainer}>
      <ArrowBackIcon
        className={classes.back}
        onClick={() => history.goBack()}
        fontSize="large"
      ></ArrowBackIcon>
      {err ? (
        <Snackbar
          style={{ top: "10%", left: "50%", align: "center" }}
          anchorOrigin={{ horizontal: "center", vertical: "top" }}
          open={err}
          autoHideDuration={5000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="error">
            <strong>{book.msg}</strong>
          </Alert>
        </Snackbar>
      ) : null}
      <br />
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grow in>
          <Box align="center" className={classes.box}>
            <Stepper
              activeStep={activeStep}
              alternativeLabel
              connector={<ColorlibConnector />}
              style={{ background: "#eae7dc" }}
            >
              {steps.map((label) => {
                return (
                  <Step key={label}>
                    <StepLabel StepIconComponent={ColorlibStepIcon}>
                      {label}
                    </StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </Box>
        </Grow>

        <div>
          <Typography>{getStepContent(activeStep)}</Typography>
          <Box align="center">
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              className={classes.backbutton}
            >
              Back
            </Button>
            {activeStep === steps.length - 1 ? (
              <Button
                variant="contained"
                color="primary"
                disabled
                className={classes.nextbutton}
              >
                Next
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.nextbutton}
              >
                Next
              </Button>
            )}
          </Box>
        </div>
      </form>
    </div>
  );
};

export default PostAdForm;
