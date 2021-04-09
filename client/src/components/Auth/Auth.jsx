import React,{useState} from 'react'
import {Container,Paper,Grid,Typography,Button,TextField,Avatar, Box,Divider,ListItem,ListItemAvatar,ListItemText,List} from '@material-ui/core'
import LabelImportantSharpIcon from '@material-ui/icons/LabelImportantSharp';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar'
import Slide from '@material-ui/core/Slide'
import {LockOutlined} from '@material-ui/icons';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import PhoneCallbackIcon from '@material-ui/icons/PhoneCallback';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input'
import useStyles from './styles'
import GoogleIcon from './GoogleIcon'
import FacebookIcon from './FacebookIcon'
import {useDispatch} from 'react-redux'
import {GoogleLogin} from 'react-google-login'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import {signUp,signIn,googleFacebookSignIn} from '../../actions/auth'
import Navbar from '../Navbar/Navbar'
import {AUTH} from '../../constants/actions'
import Swing from 'react-reveal/Swing';
import Fade from 'react-reveal/Fade';
const initialState = {firstName:'',lastName:'',college:'',location:'',email:'',password:'',confirmPassword:''}
const Auth = () => {
    const classes = useStyles()
    const [isSignup,setIsSignup] = useState(true)
    const [showPassword,setShowPassword] = useState(false)
    const [formData,setFormData] = useState(initialState)
    const [err,setErr] = useState(false) 
    const authData = useSelector(state=>state.authData)
    const history = useHistory()
    const dispatch = useDispatch()

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(isSignup){
            console.log(formData)
            dispatch(signUp(formData,history))
        }else{
            dispatch(signIn(formData,history))
        }
        if(authData?.msg)
            setErr(true)
    }
    
    const handleChange = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const Alert = (props)=>{
        return <MuiAlert elevation={6} variant="filled" {...props}/>
    }



    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setErr(false);
    };

    const switchMode = ()=>{
        setIsSignup(previsSignUp=>!previsSignUp)
        setShowPassword(false)
        setFormData({...formData,email:'',password:''})
    }

    const handleShowPassword = ()=>{
        setShowPassword(prevshowPassword=>!prevshowPassword)
    }

    const googleSuccess = async(res)=>{
        console.log(res)
        try{
            dispatch(googleFacebookSignIn({email:res.profileObj.email,name:res.profileObj.name,profilePic:res.profileObj.imageUrl},history))
        }catch(err){
            console.log(err)
        }
    }

    const googleError=()=>{
        alert('Google Sign In was unsuccessful. Try again later');
    }

    // const componentClicked = ()=>{
    //     console.log("clicked")
    // }

    // const responseFacebook = (res)=>{
    //     console.log(res)
    //     dispatch(googleFacebookSignIn({email:res.email,name:res.name,profilePic:`http://graph.facebook.com/${res.userID}/picture?type=square&access_token=${res.accessToken}`},history))
    // }
    return (
        <div className={classes.mainContainer}>

        <Grid container>
            <Grid xs={12} sm={6} className={classes.grid}>
             <Fade down>
                <Typography component="h1" variant="h4" style={{"textAlign":"center"}}>{ isSignup ? 'Register With Us' : 'Sign In to your Account' }</Typography>
                <hr width='70%' style={{ border: "1px solid white"}}></hr>
                <List>
                    <ListItem className={classes.list}>
                        <ListItemAvatar>
                        <Avatar
                            variant="square"
                            className={classes.avatar}
                            alt="User DashBoard"
                            src="https://media.giphy.com/media/cJAVot5go0jTGlCWfr/giphy.gif"
                        />
                        </ListItemAvatar>

                        <ListItemText
                        primary={
                            <React.Fragment>
                            <Typography
                                component="span"
                                variant="h5"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                User Dashboard
                            </Typography>
                            </React.Fragment>
                        }
                        secondary={
                            <React.Fragment>
                            <Typography
                                component="span"
                                variant="body1"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                Track the status of your ads history with friendly
                                Userboard.
                            </Typography>
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                <hr width='50%'></hr>
                    <ListItem className={classes.list}>
                        <ListItemAvatar>
                        <Avatar
                            variant="square"
                            className={classes.avatar}
                            alt="Chat & Messaging"
                            src="https://media.giphy.com/media/YmnlVEP5ALdUMcTvVv/giphy.gif"
                        />
                        </ListItemAvatar>
                        <ListItemText
                        primary={
                            <React.Fragment>
                            <Typography
                                component="span"
                                variant="h5"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                Chat & Messaging
                            </Typography>
                            </React.Fragment>
                        }
                        secondary={
                            <React.Fragment>
                            <Typography
                                component="span"
                                variant="body1"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                Access your chats and account info from any device.
                            </Typography>
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                <hr width='50%'></hr>
                    <ListItem className={classes.list}>
                        <ListItemAvatar>
                        <Avatar
                            variant="square"
                            className={classes.avatar}
                            alt="Avoid Calls"
                            src="https://media.giphy.com/media/L3u0T2DZ3D55srukju/giphy.gif"
                        />
                        </ListItemAvatar>
                        <ListItemText
                        primary={
                            <React.Fragment>
                            <Typography
                                component="span"
                                variant="h5"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                Avoid Calls
                            </Typography>
                            </React.Fragment>
                        }
                        secondary={
                            <React.Fragment>
                            <Typography
                                component="span"
                                variant="body1"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                No compulsion of providing mobile numbers. Use in-built
                                chat system.
                            </Typography>
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                <hr width='50%'></hr>
                    <ListItem className={classes.list}>
                        <ListItemAvatar>
                        <Avatar
                            variant="square"
                            className={classes.avatar}
                            alt="User DashBoard"
                            src="https://media.giphy.com/media/YSlD6I04v4s9pgwPcT/giphy.gif"
                        />
                        </ListItemAvatar>
                        <ListItemText
                        primary={
                            <React.Fragment>
                            <Typography
                                component="span"
                                variant="h5"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                User Friendly
                            </Typography>
                            </React.Fragment>
                        }
                        secondary={
                            <React.Fragment>
                            <Typography
                                component="span"
                                variant="body1"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                Let's improve BF together. Report us if you stuck
                                anywhere.
                            </Typography>
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                <hr width='50%'></hr>
                </List>
             </Fade>
            </Grid>
            
            <Grid xs={12} sm={6}>
          
                <Paper className={classes.paper}>
                    <Avatar className={classes.avt}>
                    <LockOutlinedIcon fontSize='large'/>
                    </Avatar>
                    <Typography component="h1" variant="h4">{ isSignup ? 'Register' : 'Login' }</Typography>
                    {
                        err?(
                            <Snackbar style={{"top":"10%",'left':"55%"}} anchorOrigin={{'horizontal':'center','vertical':'top'}} open={err} autoHideDuration={5000} onClose={handleClose}>
                                <Alert onClose={handleClose} severity="error">
                                    <strong>{authData?.msg}</strong>
                                </Alert>
                            </Snackbar>
                        
                        ):null
                    }
                    <form className={classes.form} onSubmit={handleSubmit}>
                    <GoogleLogin
                        clientId="716279671550-uhbhnkiocr43jt3don07qtr9inmi4hk7.apps.googleusercontent.com"
                        render={(renderProps) => (
                        <Box align='center'>
                        <Button color="primary" fullWidth className={classes.customLogin} onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<GoogleIcon/>} variant="contained">
                            Sign Up with Google
                        </Button>
                        </Box>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleError}
                        cookiePolicy="single_host_origin"
                    />
                    <Typography component="h1" variant="h5" style={{"textAlign":"center","margin":"10px"}}>OR</Typography>
                    <Grid container spacing={2}>
                        { isSignup && (
                        <>
                        <Input name="firstName" label="First Name" handleChange={handleChange}  autoFocus half />
                        <Input name="lastName" label="Last Name" handleChange={handleChange}   half />
                        <Input name="college" label="College Name" handleChange={handleChange}/>
                        <Input name="location" label="Your current Place" handleChange={handleChange}/>

                        </>
                        )}
                        <Input name="email" label="Email Address" value={formData.email} handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" value={formData.password} type={showPassword ? 'text' : 'password'} handleChange={handleChange}  handleShowPassword={handleShowPassword} />
                        { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
                    </Grid>
                    <Box textAlign='center'>
                    <Button type="submit" variant="contained" color="primary" className={classes.submit}>
                        { isSignup ? 'Sign Up' : 'Sign In' }
                    </Button>
                    </Box>
    
                    {/* <FacebookLogin
                        appId="428527365067089"
                        render={(renderProps)=>(
                            <Button color="info" fullWidth className={classes.customLogin} onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<FacebookIcon />} variant="contained">
                                Continue with Facebook
                            </Button>
                        )}
                        autoLoad={true}
                        fields="name,email,picture"
                        onClick={componentClicked}
                        callback={responseFacebook}
                        icon="fa-facebook" 
                    /> */}

                    <Grid >
                        <Grid item>
                        <Box textAlign='center'>
                        <Button onClick={switchMode}>
                            { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
                        </Button>
                        </Box>
                        </Grid>
                    </Grid>
                    </form>
                </Paper>
             
            </Grid>
        </Grid>
        </div>
    )
}

export default Auth
