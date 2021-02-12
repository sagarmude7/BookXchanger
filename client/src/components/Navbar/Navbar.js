//Navbar
//Importing Required Hooks
import React,{useEffect,useState} from 'react'
//UseState  : For initializing and seting the state as per requirement.
//UseEffect : For : When window is loaded depending upon the size it displays corresponding view.
import {AppBar,Toolbar,Typography,Button,IconButton,MenuItem,Drawer,Link} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./styles.js";
import navData from "./navData.js";
import {Link as RouterLink} from "react-router-dom";

const Navbar = () => {
    const {navBar,logo,menuButton ,toolbar,drawerContainer} = useStyles();
    const bookLogo = (
        <Typography varient="h6" component="h1" className={logo}>
            Logo
        </Typography>
    )
    const [state,setState] = useState({
        mobileView :false,
        drawerOpen : false
    });
      //Setting state fro mobileview
    const {mobileView,drawerOpen}  = state;

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
const getMenuButtons = () => {
    return navData.map(({label,href}) => {
        return (
            <Button 
                {...{
                    component :RouterLink,
                    to : href,
                    key : label,
                    className : menuButton,
                }}
            >
            {label}
            </Button>
        );
    })
}

///DisplayDesktop() Functionality

//Writing displayMobile() functionality
    const displayDesktop = () =>{
        return(
            <Toolbar className={toolbar}>
                {bookLogo}
            <div>{getMenuButtons()}</div>
            </Toolbar>
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
        <header>
           <AppBar className={navBar}>
              {mobileView ? displayMobile() : displayDesktop()}
           </AppBar> 
        </header>
    )
};

export default Navbar
