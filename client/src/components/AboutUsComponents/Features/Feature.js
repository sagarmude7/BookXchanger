import React from "react";
import useStyles from "./styles.js";
import Carousel from "react-material-ui-carousel";

import {
  Grid,
  Paper,
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
  // const Item = (props) => {
  //   return (
  //     <div
  //       className={classes.image}
  //       style={{
  //         backgroundImage:
  //           "linear-gradient(rgba(0,1,1,0.3),rgba(1,0,0.5)),url(" +
  //           props.item.img +
  //           ")",
  //       }}
  //     ></div>
  //   );
  // };

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

        <div>
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
                        Let's improve BF together. Report us if you stuck
                        anywhere.
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </div>
          <div className={classes.Images}>
            <img
              src="https://png.pngtree.com/png-clipart/20190515/original/pngtree-beautiful-hologram-water-color-frame-png-image_3643167.jpg"
              alt="Logo"
              style={{ height: "300px", width: "100%" }}
            />
            {/* <Carousel
              indicators={false}
              animation="fade"
              autoPlay={true}
              interval={10000}
              stopAutoPlayOnHover={false}
              navButtonsAlwaysInvisible={true}
            >
              {descImages.map((item, index) => (
                <Item key={index} item={item} />
              ))}
            </Carousel> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
