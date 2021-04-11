import React from "react";
import {Container,Paper,Card, CardMedia,CardHeader, Grid,CardContent,Typography, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import errorImage from './Error404.png'
import { red } from '@material-ui/core/colors';
import {Link} from 'react-router-dom'
// import "./styles.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Error404 = () => {
  const classes = useStyles()
  

  
  return (
    <>
      <Container>
        <Paper>
          <Grid>
            <Card variant="outlined" style={{textAlign:"center"}}>
              <CardMedia className={classes.media} style={{backgroundSize:"cover"}} image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/Mirror.png" title="error 404"/>
              <CardContent>
                <Typography variant="h2" style={{textAlign:"center"}} color="textSecondary" component="h1">
                  Sorry!
                </Typography>
                <Typography variant="h3" color="textSecondary" component="h3">
                  Either you aren't cool enough to visit this page or it doesn't exist{" "}
                  <em>. . . like your social life.</em>
                </Typography>
              </CardContent>
              <Link to="/">
                <Button color="primary" variant="contained">
                  Back To Home
                </Button>
              </Link>
            </Card>
            
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default Error404;
