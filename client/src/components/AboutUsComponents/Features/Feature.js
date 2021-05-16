import React from "react";
import useStyles from "./styles.js";
import "./style.css";
import logo from "../../../logo/final_logo.png";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
} from "@material-ui/core";

const Feature = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.Main}>
        <div className={classes.name}>
          <Typography variant="h4" className={classes.content}>
            Why{" "}
            <Box fontWeight="fontWeightBold" className={classes.contentBold}>
              BookXchanger
            </Box>
            {" ?"}
          </Typography>
        </div>

        <div className={classes.main1}>
          <div className={classes.Feature}>
            <List className={classes.root}>
              <ListItem alignItems="center" className={classes.listItem}>
                <ListItemAvatar>
                  <Avatar
                    variant="square"
                    className={classes.avatar}
                    alt="User DashBoard"
                    src="https://media.giphy.com/media/cJAVot5go0jTGlCWfr/giphy.gif"
                  />
                </ListItemAvatar>

                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="h6"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        User Dashboard
                      </Typography>
                    </React.Fragment>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body1"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        Track the status of your ads history with friendly
                        Userboard.
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="center" className={classes.listItem}>
                <ListItemAvatar>
                  <Avatar
                    variant="square"
                    className={classes.avatar}
                    alt="Chat & Messaging"
                    src="https://media.giphy.com/media/YmnlVEP5ALdUMcTvVv/giphy.gif"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="h6"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        Chat & Messaging
                      </Typography>
                    </React.Fragment>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body1"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        Access your chats and account info from any device.
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="center" className={classes.listItem}>
                <ListItemAvatar>
                  <Avatar
                    variant="square"
                    className={classes.avatar}
                    alt="Avoid Calls"
                    src="https://media.giphy.com/media/L3u0T2DZ3D55srukju/giphy.gif"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="h6"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        Avoid Calls
                      </Typography>
                    </React.Fragment>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body1"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        No compulsion of providing mobile numbers. Use in-built
                        chat system.
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="center" className={classes.listItem}>
                <ListItemAvatar>
                  <Avatar
                    variant="square"
                    className={classes.avatar}
                    alt="User DashBoard"
                    src="https://media.giphy.com/media/YSlD6I04v4s9pgwPcT/giphy.gif"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="h6"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        User Friendly
                      </Typography>
                    </React.Fragment>
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body1"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        Let's improve together. Report us if you stuck anywhere.
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </div>
          <div className={classes.Images}>
            <Typography align="center">
              <img className="image1" src={logo} alt="Logo" loading="lazy" />
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
