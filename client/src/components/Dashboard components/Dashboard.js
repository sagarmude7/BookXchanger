import React, { useEffect, useState } from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Container, Button } from "@material-ui/core";
import useStyles from "./styles.js";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Dashboard = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [Myadbool, setMyadbool] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Container className={classes.body}>
        <ButtonGroup size="large" color="secondary">
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={() => setMyadbool(!Myadbool)}
          >
            My Ads
          </Button>
          <Button>Messages</Button>
        </ButtonGroup>
        {Myadbool === true ? (
          <>
            <Paper className={classes.root}>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab label="Active Ads" {...a11yProps(0)} />
                <Tab label="Pending Ads" />
                <Tab label="Sold Ads" />
              </Tabs>
            </Paper>
            
              <TabPanel value={value} index={0}>
                Item One
              </TabPanel>
           
          </>
        ) : (
          <></>
        )}
      </Container>
    </>
  );
};

export default Dashboard;