import React,{useState} from 'react'
import {Container,Paper,Grid,Typography,Button,TextField,Avatar} from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar'
import Slide from '@material-ui/core/Slide'
import {LockOutlined} from '@material-ui/icons';
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
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
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
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                    { isSignup ? 'Sign Up' : 'Sign In' }
                </Button>
                <GoogleLogin
                    clientId="716279671550-uhbhnkiocr43jt3don07qtr9inmi4hk7.apps.googleusercontent.com"
                    render={(renderProps) => (
                    <Button color="info" fullWidth className={classes.customLogin} onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<GoogleIcon/>} variant="contained">
                        Sign Up with Google
                    </Button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleError}
                    cookiePolicy="single_host_origin"
                />

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

                <Grid container justify="flex-end">
                    <Grid item>
                    <Button onClick={switchMode}>
                        { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
                    </Button>
                    </Grid>
                </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
