import { React, useState,useEffect } from "react";
import { Typography, Button, Box, Container } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import LockIcon from "@material-ui/icons/Lock";
import useStyles from "./styles.js";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import {checkUserValid,resetPassword} from '../../actions/auth'
import { VALID } from "../../constants/actions";


const ForgotPassword = ({match}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [err, setErr] = useState(false);
  const [open,setOpen] = useState(false);
  const book = useSelector((state) => state.book);

  useEffect(() => {
    if (book.msg) setErr(true);
  }, [book]);

  console.log(match.params.token)
  


  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  const handleClickOpen = ()=>{
    setOpen(true);
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setErr(false);
    dispatch({ type: VALID, payload: {} });
  };

  useEffect(()=>{
    dispatch(checkUserValid(match.params.token,history));
  },[])


  const [values2, setValues2] = useState({
    password: "",
    showPassword: false,
  });

  const handleChange2 = (prop) => (event) => {
    setValues2({ ...values2, [prop]: event.target.value });
  };

  const handleClickShowPassword2 = () => {
    setValues2({ ...values2, showPassword: !values2.showPassword });
  };

  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };

  const [values3, setValues3] = useState({
    password: "",
    showPassword: false,
  });

  const handleChange3 = (prop) => (event) => {
    setValues3({ ...values3, [prop]: event.target.value });
  };

  const handleClickShowPassword3 = () => {
    setValues3({ ...values3, showPassword: !values3.showPassword });
  };

  const handleMouseDownPassword3 = (event) => {
    event.preventDefault();
  };
  const handleSubmitPassword = (e) => {
    e.preventDefault();
    dispatch(resetPassword(values2.password,values3.password,match.params.token))
  };
  return (
    <>
    {err? (
          <Snackbar
                style={{ top: "10%", left: "55%" }}
                anchorOrigin={{ horizontal: "center", vertical: "top" }}
                open={err}
                autoHideDuration={5000}
                onClose={handleClose}
              >
                <Alert onClose={handleClose} severity={book.type}>
                  <strong>{book?.msg}</strong>
                </Alert>
          </Snackbar>
         ) : null}
      <div className={classes.bg}>
        <div className={classes.container}>
          <LockIcon className={classes.icon} />
          <Typography align="center" className={classes.name}>
            <Box fontWeight="fontWeightMedium" m={1}>
              Reset Password
            </Box>
          </Typography>
          <form noValidate autoComplete="off" onSubmit={handleSubmitPassword}>
            <Container>
              <FormControl
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
              >
                <InputLabel
                  id="standard-basic"
                  htmlFor="new-password"
                  className={classes.passTitle}
                >
                  New Password
                </InputLabel>
                <OutlinedInput
                  id="new-password"
                  type={values2.showPassword ? "text" : "password"}
                  value={values2.password}
                  onChange={handleChange2("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword2}
                        onMouseDown={handleMouseDownPassword2}
                        edge="end"
                      >
                        {values2.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={120}
                />
              </FormControl>

              <FormControl className={classes.formfield} variant="outlined">
                <InputLabel
                  htmlFor="confirm-new-password"
                  className={classes.passTitle}
                >
                  Confirm New Password
                </InputLabel>
                <OutlinedInput
                  fullWidth
                  id="confirm-new-password"
                  type={values3.showPassword ? "text" : "password"}
                  value={values3.password}
                  onChange={handleChange3("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword3}
                        onMouseDown={handleMouseDownPassword3}
                        edge="end"
                      >
                        {values3.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={180}
                />
              </FormControl>
            </Container>

            <Button
              variant="contained"
              className={classes.button}
              type="submit"
            >
              Reset Password
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
