import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Carousel from "react-multi-carousel";
import { makeStyles } from '@material-ui/core/styles';
import "react-multi-carousel/lib/styles.css";
import Book from '../../AllBooksComponents/Book/Book'
import { Button,CardContent, Typography,CardActions,Card} from '@material-ui/core';
import {getBooks} from '../../../actions/books'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin:"20px",
    width:"400px"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Feedback = () => {

  const classes = useStyles()
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 264, min: 0 },
          items: 1
        }
      };

      return(

        <>
        <hr style={{borderWidth : "0px"}}/>
        <hr style={{borderWidth : "0px"}}/>

        <Typography variant="h6" style={{textAlign:"center",color:"black"}} >What Customers Say...</Typography>
        <hr style={{border : "1px solid black",width:"300px"}}/>
        <hr style={{borderWidth : "0px"}}/>

        <Carousel responsive={responsive}>
          <Card className={classes.root} spacing={2} >
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Feedback 1
              </Typography>
              <Typography variant="body2" component="p">
                BookxChanger is very nice App I have ever Seen , I have sold my books easily with this app, Thanks  BookxChanger
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More...</Button>
            </CardActions>
          </Card>
          <Card className={classes.root} spacing={4}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Feedback 2
              </Typography>
              <Typography variant="body2" component="p">
                BookxChanger is very nice App I have ever Seen , I have sold my books easily with this app, Thanks  BookxChanger
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More...</Button>
            </CardActions>
          </Card>
          <Card className={classes.root} spacing={4} >
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Feedback 3
              </Typography>
              <Typography variant="body2" component="p">
                BookxChanger is very nice App I have ever Seen , I have sold my books easily with this app, Thanks  BookxChanger
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More...</Button>
            </CardActions>
          </Card>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Feedback 3
              </Typography>
              <Typography variant="body2" component="p">
                BookxChanger is very nice App I have ever Seen , I have sold my books easily with this app, Thanks  BookxChanger
                <br />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More...</Button>
            </CardActions>
          </Card>
        </Carousel>
      </>
      )
      
}



export default Feedback;







