import React from "react";
import Footer from "../Footer/footer.js";
import Description from "./Description/Description.js";
import Feature from "./Features/Feature.js";
import Navbar from "../Navbar/Navbar.js";
import {
  Container,
  Appbar,
  Typography,
  Grow,
  Grid,
  Paper,
  Avatar,
  Box,
  CardHeader,
  createMuiTheme,
} from "@material-ui/core";
import {
  CardContent,
  CardActions,
  Card,
  makeStyles,
  CardActionArea,
} from "@material-ui/core";
import SmsIcon from "@material-ui/icons/Sms";
import CallEndIcon from "@material-ui/icons/CallEnd";
import DashboardIcon from "@material-ui/icons/Dashboard";
import MobileFriendlyIcon from "@material-ui/icons/MobileFriendly";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import useStyles from "./styles.js";
import ContactForm from "./ContactForm/contactform.js";

const About = () => {
  const classes = useStyles();

  return (
    <>
      <Description />
      <Feature />

      {/*     
      <Container maxWidth="lg" spacing="ms">
        <Typography variant="h3" align="Center" style={{ color: "#ab47bc" }}>
          Why BookXchanger
        </Typography>
        </Container> */}

      {/* <Container maxWidth="246">
        <List className={classes_2} aria-label="mailbox folders">
          <ListItem button>
            <ListItemAvatar>
              <Avatar>
                <SmsIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Chat & Messaging"
              secondary="Easy to chat with the Book seller"
            />
          </ListItem>
          <Divider light />
          <ListItem button>
            <ListItemAvatar>
              <Avatar>
                <CallEndIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Avoid Calls"
              secondary="One to One chat window to connect"
            />
          </ListItem>
          <Divider light />
          <ListItem button>
            <ListItemAvatar>
              <Avatar>
                <DashboardIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="User Dashboard"
              secondary="Track the status of your Ads using our Dashboard"
            />
          </ListItem>
          <Divider light />
          <ListItem button>
            <ListItemAvatar>
              <Avatar>
                <MobileFriendlyIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="User Friendly"
              secondary="Includes Chatbot to solve your queries"
            />
          </ListItem>
        </List>
      </Container>

      <Container align="center" spacing="10" padding="10">
        <Card className={classes.root} align="center">
          <CardActionArea>
            <CardContent style={{ color: "#c2185b" }}>
              <Typography variant="h4">Developed By:</Typography>
              <Typography>Harshil Doshi</Typography>
              <Typography>Sagar Mude</Typography>
              <Typography>Vedant Mondkar</Typography>
              <Typography>Vishal Dange</Typography>
              <Typography>Mohak Chandani</Typography>
              <Typography>Shashank Pagrut</Typography>
              <Typography>Vedant Mankar</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
      <Typography
        variant="h4"
        align="center"
        spacing="10"
        style={{
          color: "#ab47bc",
          fontFamily: "Roboto",
          margin: theme.spacing(4),
        }}
      >
        FEEL FREE TO CONTACT US
      </Typography>
      <Container align="center">
        <Paper align="center">
          <ContactForm />
        </Paper>
      </Container> */}
    </>
  );
};

export default About;
