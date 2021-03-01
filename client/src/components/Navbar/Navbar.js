//Navbar
//Importing Required Hooks
import React,{useEffect,useState} from 'react'
//UseState  : For initializing and seting the state as per requirement.
//UseEffect : For : When window is loaded depending upon the size it displays corresponding view.
import {AppBar,Toolbar,Typography,Button,IconButton,MenuItem,Drawer,Link,Avatar} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./styles.js";
import {useDispatch} from 'react-redux'
import {Link as RouterLink,useHistory} from "react-router-dom";

import {LOGOUT} from '../../constants/actions'


const Navbar = () => {
    const {navBar,appBarSpacer,logo,menuButton,appBar,brandContainer ,toolbar,drawerContainer,image,heading} = useStyles();
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const [push,setPush] = useState(false)
    const history = useHistory()
    const [state,setState] = useState({
        mobileView :false,
        drawerOpen : false
    });
      //Setting state fro mobileview
    const {mobileView,drawerOpen}  = state;
    let navData = [];

    const dispatch = useDispatch();

    const bookLogo = (
        <div className={brandContainer}>
                <Typography component={Link} to="/ " className={heading} variant="h4" align="center">Logo</Typography>
                {/* <img className={image} src="src" alt="icon" height="60" /> */}
        </div> 
    )


    //get user data
    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem('profile')))
        const token = user?.token
    },[user?.token])

   useEffect(()=> {
       //Function which returns the current view of the window.
     const setResponsiveness = () =>{
            return window.innerWidth < 900
              ? setState((prevState) => ({...prevState,mobileView : true}))
              : setState((prevState) => ({...prevState,mobileView : false}));
     }
     setResponsiveness();
     window.addEventListener("resize",() => setResponsiveness());
   },[]);


const getDrawerChoices = () => {
        
        return navData.map(({label,href}) => {
            return (
                <Link 
                    {...{
                        to : href,
                        component :RouterLink,
                        color : "inherit",
                        style :{textDecoration : "none"},
                        key : label,
                    }}
                >
                <MenuItem>{label}</MenuItem>
                </Link>
            );
        })
}
const logout = ()=>{
    dispatch({type:LOGOUT})
    setUser(null)
    history.push('/')
}
const getMenuButtons = () => {
    
    return(
            <>
                <div style={{marginRight:"40px"}} >
                    <Button component={RouterLink} to="/"  className={menuButton} color="primary">
                        Home
                    </Button>
                    <Button component={RouterLink} to="/all" className={menuButton} color="secondary">
                        Books
                    </Button>
                    <Button component={RouterLink} to="/add" className={menuButton}>
                        Post Book
                    </Button>
                </div>
                {
                user?(
                    <>
                    <Button>
                        <Avatar src={user?.profile?.imageUrl} alt={user?.profile?.name}>{user?.profile?.name.charAt(0)}</Avatar>
                    </Button>
                    <Button>
                        <Typography variant="h6">{user?.profile?.name}</Typography>
                    </Button>
                    <Button variant="contained" onClick={logout} color="secondary">
                        LogOut
                    </Button>
                    </>
                ):(
                    <>
                    <Button variant="contained" component={RouterLink} to='/auth' color="primary">Sign Up</Button>
                    </>
                )
                }
            </>
    )
    // return navData.map(({label,href}) => {
    //     return (
    //         <Button 
    //             {...{
    //                 component :RouterLink,
    //                 to : href,
    //                 key : label,
    //                 className : menuButton,
    //                 onClick:{logOut}
    //             }}
                
    //         >
    //         {label}
    //         </Button>
    //     );
    // })
}

///DisplayDesktop() Functionality

//Writing displayMobile() functionality
    const displayDesktop = () =>{
        return(
            <>
            {bookLogo}
            <Toolbar className={toolbar}>
                {getMenuButtons()} 
            </Toolbar>
            </>
        );
    }
    const displayMobile = () => {
        const handleDrawerOpen = () => {
                setState((prevState) => ({...prevState,drawerOpen : true}));
        }
        const handleDrawerClose = () => {
            setState((prevState) => ({...prevState,drawerOpen: false}));
        }
        
        return(
            <Toolbar>
                <IconButton
                   {...{
                    edge :"start",        //Allows Button to be Positioned at the start
                    color : "inherit",    //lets the icon the color specified to closest top level component
                    "aria-label" :"menu",  //These two meant for screen readers to notify users ,this element is menu , this element is pop up
                    "aria-haspopup" : "true",
                    onClick : handleDrawerOpen,
                }}
                >
                <MenuIcon />
                </IconButton>
                <Drawer
                {...{
                    anchor : "left",
                    open : drawerOpen,
                    onClose : handleDrawerClose,

                }}
                >
                <div className={drawerContainer}>{getDrawerChoices()}</div>
                </Drawer>

            <div>{bookLogo}</div>
            </Toolbar>
        );
    }



    return (
        <>
           <AppBar className={appBar} position="fixed">            
              {mobileView ? displayMobile() : displayDesktop()}
           </AppBar> 
           <div className={appBarSpacer}></div>
        </>
    )
};

export default Navbar
