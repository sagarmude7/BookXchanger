import React from "react";
import useStyles from "./style.js";
import { Typography, CssBaseline, Container, Link } from "@material-ui/core"
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import {Link as RouterLink,useHistory} from "react-router-dom";

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <div className={classes.mainfooter}>
        <div className={classes.flexContainer} style={{flexWrap:"wrap",}}>
          <div style={{flexGrow:"1" , flex:"auto", flexDirection:"row"}}>
            <Typography align="center">
              <Link href="#" color="inherit" >
                <img className={classes.image1} src="https://picsum.photos/80/80" alt="123" />
              </Link>
              <br />
              <Typography style={{ fontSize: "20px", fontWeight: "bold" }}align="center"  >
                Best Recycle is Book Recycle.
              </Typography>
            </Typography>
          </div>

          <div style={{flexGrow:"1" }}>
            
              <Typography style={{ fontSize: "25px", fontWeight: "bold", padding: "0 0 30px 0" }} align="center"  >
                Get in Touch
              <br />
              </Typography>
              <Typography align="center">
              <Link href="https://www.facebook.com/" target="_blank" color="inherit" >
              <FacebookIcon className={classes.Icon} />
              </Link>
              <Link href="https://www.instagram.com/" target="_blank" color="inherit">
              <InstagramIcon className={classes.Icon} />
              </Link>
              <Link href="https://github.com/sagarmude7/Bookxchanger" target="_blank" color="inherit">
              <GitHubIcon className={classes.Icon} />
              </Link>
              <Link href="http://linkedin.com/" target="_blank" color="inherit">
              <LinkedInIcon className={classes.Icon} />
              </Link>
              <Link href="mailto:bookxchanger@gmail.com" target="_blank" color="inherit">
              <EmailIcon className={classes.Icon} />
              </Link>
              </Typography>
           
          </div>

          <div style={{flexGrow:"1" }}>
           
              <Typography style={{ fontSize: "20px", fontWeight: "bold" }} align="center" >
                Quick Links
                </Typography>
              <Typography align="center"  >
                <li style={{ listStyleType: "none", textAlign: 'center' }} >
                  <ul style={{ listStyleType: "none", textAlign: 'center', paddingInlineStart: "0px" }}>
                    <Link to="/" component = {RouterLink} key="Home" color="inherit">
                      Home
                      </Link>
                  </ul>
                  <ul style={{ listStyleType: "none", textAlign: 'center', paddingInlineStart: "0px" }}>
                    <Link  to="/all" component = {RouterLink} key="Books"  color="inherit">
                      Books
                      </Link>
                  </ul>
                  <ul style={{ listStyleType: "none", textAlign: 'center', paddingInlineStart: "0px" }}>
                    <Link  to="/about" component = {RouterLink}   key="About Us"  color="inherit">
                      About Us
                      </Link>
                  </ul>
                  <ul style={{ listStyleType: "none", textAlign: 'center', paddingInlineStart: "0px" }}>
                    <Link to="/contact" component = {RouterLink} key="Contact Us" color="inherit">
                      Contact Us
                      </Link>
                  </ul>
                </li>
              </Typography>
          </div>
        </div>

        <div>
          <Typography align="center" style={{ fontSize: "13px", position: "Centre", padding: "5px 0 5px 0", background: "black" }} >
            {'Copyright © '}
            <Link color="inherit" href="#">
              Bookxchanger
            </Link>
            {' '}{new Date().getFullYear()}{'. '}
            
            {'All Rights Reserved'}
          </Typography>
        </div>
      </div>

    </>
  )
};

export default Footer;