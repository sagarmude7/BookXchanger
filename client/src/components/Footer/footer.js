import React from "react";
import useStyles from "./style.js";
import logo from "../../logo/final.png";
import { Typography, CssBaseline, Link } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <div className={classes.footer}>
        <div className={classes.flexContainer} style={{ flexWrap: "wrap" }}>
          <div
            className={classes.flexbox}
            style={{ flexGrow: "1", flex: "auto", flexDirection: "row" }}
          >
            <Typography align="center">
              <Link href="#" color="inherit">
                <img className={classes.image1} src={logo} alt="BookXchanger" />
              </Link>
              <br />
              <Typography
                style={{ fontSize: "20px", fontWeight: "bold" }}
                align="center"
              >
                Best Recycle is Book Recycle.
              </Typography>
            </Typography>
          </div>

          <div className={classes.flexbox} style={{ flexGrow: "1" }}>
            <Typography className={classes.touch} align="center">
              Get in Touch
              <br />
            </Typography>
            <Typography align="center">
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                color="inherit"
              >
                <FacebookIcon className={classes.Icon} />
              </Link>
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                color="inherit"
              >
                <InstagramIcon className={classes.Icon} />
              </Link>
              <Link
                href="https://github.com/sagarmude7/Bookxchanger"
                target="_blank"
                color="inherit"
              >
                <GitHubIcon className={classes.Icon} />
              </Link>
              <Link href="http://linkedin.com/" target="_blank" color="inherit">
                <LinkedInIcon className={classes.Icon} />
              </Link>
              <Link
                href="mailto:bookxchanger@gmail.com"
                target="_blank"
                color="inherit"
              >
                <EmailIcon className={classes.Icon} />
              </Link>
            </Typography>
          </div>

          <div className={classes.flexbox} style={{ flexGrow: "1" }}>
            <Typography
              style={{ fontSize: "20px", fontWeight: "bold" }}
              align="center"
            >
              Quick Links
            </Typography>
            <Typography align="center">
              <li style={{ listStyleType: "none", textAlign: "center" }}>
                <ul className={classes.link}>
                  <Link
                    to="/"
                    component={RouterLink}
                    key="Home"
                    color="inherit"
                    className={classes.linkName}
                  >
                    Home
                  </Link>
                </ul>
                <ul className={classes.link}>
                  <Link
                    to="/all"
                    component={RouterLink}
                    key="Books"
                    color="inherit"
                    className={classes.linkName}
                  >
                    Books
                  </Link>
                </ul>
                <ul className={classes.link}>
                  <Link
                    to="/aboutus"
                    component={RouterLink}
                    key="About Us"
                    color="inherit"
                    className={classes.linkName}
                  >
                    About Us
                  </Link>
                </ul>
                <ul className={classes.link}>
                  <Link
                    to="/add"
                    component={RouterLink}
                    key="Sell Books"
                    color="inherit"
                    className={classes.linkName}
                  >
                    Sell Books
                  </Link>
                </ul>
              </li>
            </Typography>
          </div>
        </div>

        <div>
          <Typography
            align="center"
            style={{
              fontSize: "13px",
              position: "Centre",
              padding: "5px 0 5px 0",
              background: "black",
              color: "white",
            }}
          >
            {"Copyright © "}
            <Link
              color="inherit"
              to="/"
              component={RouterLink}
              key="Home"
              className={classes.name}
            >
              Bookxchanger
            </Link>{" "}
            {new Date().getFullYear()}
            {". "}
            {"All Rights Reserved"}
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Footer;
