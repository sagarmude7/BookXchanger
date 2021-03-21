//Navbar
//Importing Required Hooks
import React, { useEffect, useState } from "react";
//UseState  : For initializing and seting the state as per requirement.
//UseEffect : For : When window is loaded depending upon the size it displays corresponding view.
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Link,
  Avatar,
  Tooltip,
  Fab,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./styles.js";
import { useDispatch } from "react-redux";
import { Link as RouterLink, useHistory } from "react-router-dom";
import SearchBar from "../HomePageComponents/SearchBar/SearchBox.js";
import { LOGOUT } from "../../constants/actions";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Wishlist from "../WishlistComponent/Wishlist";

const Navbar = () => {
  const {
    mobileloginMenu,
    parentTool,
    midNavbar,
    appBarSpacer,
    logo,
    menuButton,
    appBar,
    brandContainer,
    toolbar,
    drawerContainer,
    image,
    heading,
  } = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  //console.log(user);
  const [push, setPush] = useState(false);
  const history = useHistory();
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  //Setting state fro mobileview
  const { mobileView, drawerOpen } = state;

  const dispatch = useDispatch();

  const bookLogo = (
    <div className={brandContainer}>
      <Typography component={Link} to="/" style={{ color: "white" }}>
        Logo
      </Typography>
      {/* <img className={image} src="src" alt="icon" height="60" /> */}
    </div>
  );

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //get user data

  useEffect(() => {
    //Function which returns the current view of the window.
    const setResponsiveness = () => {
      return window.innerWidth < 900 && window.innerWidth > 100
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
    const token = user?.token;
  }, []);

  const getDrawerChoices = () => {
    // return navData.map(({label,href}) => {
    //     return (
    //         <Link
    //             {...{
    //                 to : href,
    //                 component :RouterLink,
    //                 color : "inherit",
    //                 style :{textDecoration : "none"},
    //                 key : label,
    //             }}
    //         >
    //         <MenuItem>{label}</MenuItem>
    //         </Link>
    //     );
    // })

    return (
      <>
        <Link
          to="/"
          component={RouterLink}
          color="inherit"
          className={menuButton}
          key="Home"
        >
          <MenuItem>Home</MenuItem>
        </Link>
        <Link
          to="/all"
          component={RouterLink}
          color="inherit"
          className={menuButton}
          key="Books"
        >
          <MenuItem>Books</MenuItem>
        </Link>
        {/* <Link
          to="/wishlist"
          component={RouterLink}
          color="inherit"
          className={menuButton}
          key="Wishlist"
        >
          <MenuItem>Wishlist</MenuItem>
        </Link> */}
        <Link
          to="/about"
          component={RouterLink}
          color="inherit"
          className={menuButton}
          key="About Us"
        >
          <MenuItem>About Us</MenuItem>
        </Link>
        {/* <Link
          to="/contact"
          component={RouterLink}
          color="inherit"
          className={menuButton}
          key="Contact Us"
        >
          <MenuItem>Contact Us</MenuItem>
        </Link> */}
        <Link
          to="/add"
          component={RouterLink}
          color="inherit"
          className={menuButton}
          key="Sell Books"
        >
          <MenuItem>Sell Books</MenuItem>
        </Link>
      </>
    );
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
    setUser(null);
    history.push("/");
  };
  const getMenuButtons = () => {
    return (
      <>
        <div className={midNavbar}>
          <Button component={RouterLink} to="/" className={menuButton}>
            Home
          </Button>
          <Button component={RouterLink} to="/all" className={menuButton}>
            Books
          </Button>
          <Button component={RouterLink} to="/aboutus" className={menuButton}>
            About Us
          </Button>
          {/* <Button component={RouterLink} to="/contact" className={menuButton}>
            Contact Us
          </Button> */}
        </div>
        {user ? (
          <>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <Avatar src={user?.profile?.profilePic} alt={user?.profile?.name}>
                {user?.profile?.name.charAt(0)}
              </Avatar>
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              style={{ color: "pink" }}
            >
              <MenuItem onClick={handleClose}>
                <Button component={RouterLink} to="/profile">
                  <Typography
                    variant="h6"
                    style={{
                      fontWeight: "400",
                      boxShadow: " none",
                      fontSize: "1.2rem",
                    }}
                  >
                    My Profile
                  </Typography>
                </Button>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Button component={RouterLink} to="/wishlist">
                  <Typography
                    variant="h6"
                    style={{
                      fontWeight: "400",
                      boxShadow: " none",
                      fontSize: "1.2rem",
                    }}
                  >
                    Wishlist
                  </Typography>
                </Button>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Button component={RouterLink} to="/auth" onClick={logout}>
                  <Typography
                    variant="h6"
                    style={{
                      fontWeight: "400",
                      boxShadow: " none",
                      fontSize: "1.2rem",
                    }}
                  >
                    Logout
                  </Typography>
                </Button>
              </MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Button component={RouterLink} to="/auth" className={menuButton}>
              Sign Up
            </Button>
          </>
        )}

        <Button
          component={RouterLink}
          to="/add"
          style={{ padding: " 0px", margin: "2px" }}
          className={menuButton}
        >
          Sell Books
        </Button>
      </>
    );
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
  };

  ///DisplayDesktop() Functionality

  //Writing displayMobile() functionality
  const displayDesktop = () => {
    return (
      <>
        <MenuBookIcon style={{ margin: "20px" }} />
        <Toolbar className={toolbar}>{getMenuButtons()}</Toolbar>
      </>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () => {
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    };
    const handleDrawerClose = () => {
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    };

    return (
      <>
        <Toolbar className={parentTool}>
          <IconButton
            {...{
              edge: "start", //Allows Button to be Positioned at the start
              color: "inherit", //lets the icon the color specified to closest top level component
              "aria-label": "menu", //These two meant for screen readers to notify users ,this element is menu , this element is pop up
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            {...{
              anchor: "left",
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
            <div className={drawerContainer}>{getDrawerChoices()}</div>
          </Drawer>

          <MenuBookIcon style={{ margin: "20px" }} />
        </Toolbar>

        {user ? (
          <div className={mobileloginMenu}>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <Avatar src={user?.profile?.profilePic} alt={user?.profile?.name}>
                {user?.profile?.name.charAt(0)}
              </Avatar>
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              style={{ color: "pink" }}
            >
              <MenuItem onClick={handleClose}>
                <Button component={RouterLink} to="/profile">
                  <Typography
                    variant="h6"
                    style={{
                      fontWeight: "400",
                      boxShadow: " none",
                      fontSize: "1.2rem",
                    }}
                  >
                    My Profile
                  </Typography>
                </Button>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Button component={RouterLink} to="/wishlist">
                  <Typography
                    variant="h6"
                    style={{
                      fontWeight: "400",
                      boxShadow: " none",
                      fontSize: "1.2rem",
                    }}
                  >
                    Wishlist
                  </Typography>
                </Button>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Button component={RouterLink} to="/auth" onClick={logout}>
                  <Typography
                    variant="h6"
                    style={{
                      fontWeight: "400",
                      boxShadow: " none",
                      fontSize: "1.2rem",
                    }}
                  >
                    Logout
                  </Typography>
                </Button>
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <div className={mobileloginMenu}>
            <Button component={RouterLink} to="/auth" className={menuButton}>
              Sign Up
            </Button>
          </div>
        )}
      </>
    );
  };

  return (
    <>
      <AppBar className={appBar} position="fixed">
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>

      <div className={appBarSpacer}></div>
    </>
  );
};

export default Navbar;
