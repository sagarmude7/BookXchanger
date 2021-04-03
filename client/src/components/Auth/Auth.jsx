import React,{useState} from 'react'
import {Container,Paper,Grid,Typography,Button,TextField,Avatar, Box,Divider} from '@material-ui/core'
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

    const componentClicked = ()=>{
        console.log("clicked")
    }

    const responseFacebook = (res)=>{
        console.log(res)
        dispatch(googleFacebookSignIn({email:res.email,name:res.name,profilePic:`http://graph.facebook.com/${res.userID}/picture?type=square&access_token=${res.accessToken}`},history))
    }
    return (
        <div className={classes.mainContainer}>
        <Grid container>
            <Grid xs={12} sm={6} className={classes.grid}>
                <Typography component="h1" variant="h4" style={{"textAlign":"center"}}>{ isSignup ? 'Register With Us' : 'Sign In to your Account' }</Typography>
                    <hr width='70%' style={{ border: "1px solid white"}}></hr>
                    <Typography>
                    <Avatar className={classes.avt}><ChatOutlinedIcon fontSize='medium'/></Avatar>
                        <Typography component="h1" variant="h5" className={classes.list}>
                            Chats and Messaging
                        </Typography>
                        <p className={classes.list}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis tincidunt consequat. Curabitur a interdum augue.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                     </Typography>
                     <hr width='40%'></hr>
                     <Typography>
                        <Avatar className={classes.avt}><PhoneCallbackIcon fontSize='medium'/></Avatar>
                        <Typography component="h1" variant="h5" className={classes.list}>
                            Avoid Calls
                        </Typography>
                        <p className={classes.list}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis tincidunt consequat. Curabitur a interdum augue.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        </p>
                    </Typography>
                    <hr width='40%'></hr>
                    <Typography>
                        <Avatar className={classes.avt}><DashboardIcon fontSize='medium'/></Avatar>
                        <Typography component="h1" variant="h5" className={classes.list}>
                            User Dashboard
                        </Typography>
                        <p className={classes.list}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis tincidunt consequat. Curabitur a interdum augue.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        </p>
                    </Typography>
                    <hr width='40%'></hr>
                    <Typography>
                        <Avatar className={classes.avt}><PersonIcon fontSize='medium'/></Avatar>
                        <Typography component="h1" variant="h5" className={classes.list}>
                            User Friendly Support
                        </Typography>
                        <p className={classes.list}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis tincidunt consequat. Curabitur a interdum augue.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        </p>
                    </Typography>
                <Divider orientation="vertical" flexItem />
            </Grid>
            
            <Grid xs={12} sm={6}>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
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
