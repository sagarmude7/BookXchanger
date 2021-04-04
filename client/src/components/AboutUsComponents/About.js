import React from "react";
import Description from "./Description/Description.js";
import Feature from "./Features/Feature.js";
import DevelopedBy from "./DevelopedBy/DevelopedBy.js";
import useStyles from "./styles.js";
import ContactForm from "./ContactForm/contactform.js";

const About = () => {
  const classes = useStyles();

  return (
    <>
      <Description />
      <Feature />
      <DevelopedBy />
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
