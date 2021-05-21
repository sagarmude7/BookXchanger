import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Link,
  Avatar,
} from "@material-ui/core";
import logo from "../../logo/final.png";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./styles.js";
import { useDispatch } from "react-redux";
import { Link as RouterLink, useHistory, useLocation } from "react-router-dom";
import { LOGOUT } from "../../constants/actions";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import decode from "jwt-decode";

const Navbar = () => {
  const {
    mobileloginMenu,
    parentTool,
    midNavbar,
    appBarSpacer,
    menuButton,
    appBar,
    toolbar,
    drawerContainer,
    image1,
    sellButton,
  } = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const history = useHistory();
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const { mobileView, drawerOpen } = state;

  const dispatch = useDispatch();
  const location = useLocation();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (user) {
      const token = user.token;
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
  }, []);

  const logout = () => {
    dispatch({ type: LOGOUT });
    setUser(null);
    history.push("/");
  };

  useEffect(() => {
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
  }, [location, user?.token]);

  const getDrawerChoices = () => {
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
        <Link
          to="/aboutus"
          component={RouterLink}
          color="inherit"
          className={menuButton}
          key="About Us"
        >
          <MenuItem>About Us</MenuItem>
        </Link>
        <Link
          to="/add"
          component={RouterLink}
          className={menuButton}
          key="Sell Books"
        >
          <MenuItem style={{ backgroundColor: "#e98074" }}>Sell Books</MenuItem>
        </Link>
      </>
    );
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
        </div>
        {user ? (
          <>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <Avatar src={user?.profile?.profilePic} alt={user?.profile?.name}>
                {user?.profile?.name?.charAt(0)}
              </Avatar>
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                onClick={handleClose}
                style={{ backgroundColor: "#e85a4f", padding: "0px auto" }}
              >
                <Button
                  component={RouterLink}
                  to="/profile"
                  style={{ backgroundColor: "#e85a4f" }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontWeight: "400",
                      boxShadow: " none",
                      fontSize: "1.1rem",
                      color: "white",
                    }}
                  >
                    My Profile
                  </Typography>
                </Button>
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                style={{ backgroundColor: "#e85a4f" }}
              >
                <Button component={RouterLink} to="/wishlist">
                  <Typography
                    variant="h6"
                    style={{
                      fontWeight: "400",
                      boxShadow: " none",
                      fontSize: "1.1rem",
                      color: "white",
                    }}
                  >
                    Wishlist
                  </Typography>
                </Button>
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                style={{ backgroundColor: "#e85a4f" }}
              >
                <Button component={RouterLink} to="/auth" onClick={logout}>
                  <Typography
                    variant="h6"
                    style={{
                      fontWeight: "400",
                      boxShadow: " none",
                      fontSize: "1.1rem",
                      color: "white",
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
          style={{
            padding: " 10px",
            margin: "5px",
            color: "white",
            backgroundColor: "#e98074",
          }}
          className={sellButton}
        >
          Sell Books
        </Button>
      </>
    );
  };

  const displayDesktop = () => {
    return (
      <>
        <Link component={RouterLink} to="\" color="inherit">
          <img className={image1} src={logo} alt="BookXchanger" />
        </Link>
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

          <Link component={RouterLink} to="\" color="inherit">
            <img className={image1} src={logo} alt="BookXchanger" />
          </Link>
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
              <MenuItem
                onClick={handleClose}
                style={{ backgroundColor: "#e85a4f" }}
              >
                <Button component={RouterLink} to="/profile">
                  <Typography
                    variant="h6"
                    style={{
                      fontWeight: "400",
                      boxShadow: " none",
                      fontSize: "1.2rem",
                      color: "white",
                    }}
                  >
                    My Profile
                  </Typography>
                </Button>
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                style={{ backgroundColor: "#e85a4f" }}
              >
                <Button component={RouterLink} to="/wishlist">
                  <Typography
                    variant="h6"
                    style={{
                      fontWeight: "400",
                      boxShadow: " none",
                      fontSize: "1.2rem",
                      color: "white",
                    }}
                  >
                    Wishlist
                  </Typography>
                </Button>
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                style={{ backgroundColor: "#e85a4f" }}
              >
                <Button component={RouterLink} to="/auth" onClick={logout}>
                  <Typography
                    variant="h6"
                    style={{
                      fontWeight: "400",
                      boxShadow: " none",
                      fontSize: "1.2rem",
                      color: "white",
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
