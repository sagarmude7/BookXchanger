

import React,{useEffect} from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {useDispatch,useSelector} from 'react-redux'
import
{Button,
 Grid,
 CircularProgress,
 Grow,Container,
 Paper,
 RadioGroup,
 FormControlLabel,
 Radio,
 Card,
 CardContent ,
 CardMedia,
 Typography,
 List,
 ListItemText,
 ListItem,
 IconButton,
 Toolbar,
 AppBar,
 Divider,
} 
from '@material-ui/core';
import { useParams } from "react-router";
import { GET_BOOK } from "../../../constants/actions";

const BookInfo = ({ match }) => {
  /***************************
  REDUX  GLOBAL STATE PROPERTIES
 **************************/

  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const book = useSelector((state) => state.book);
  /***************************
=======


/***************************
  STYLES
 **************************/

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      padding : "150px 20px 5px 40px",
      margin:"20px",
      background : "grey",
      background:" #360033", 
      background: "-webkit-linear-gradient(to right, #0b8793, #360033)",
      background:"linear-gradient(to right, #0b8793, #360033)",
      color : "white",
      fontFamily: "Lucida Console, Courier New,monospace" 
      
    },
    details: {
      fontFamily: "Lucida Console, Courier New,monospace" ,
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
      zIndex :"10"
    },
    cover: {
      width: 191,
    },
    grid :{
      background: "grey",
      color :"white"
    },
    Image : {
      paddingTop : "50px"
    }
  }));


  /***************************
     LIFECYCLE Method
 **************************/
  useEffect(() => {
    dispatch({
      type: GET_BOOK,
      payload: books.find((bk) => bk._id === bookId)===undefined?{}:books.find((bk) => bk._id === bookId),
    });
  }, [dispatch]);
  return (
    <>
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h2" variant="h2">
              Book Name : {book?.bookName}
            </Typography>
            <Typography variant="h5" variant="h6">
              Subject  : {book?.subject}
            </Typography>
            <p>
              Description : {book?.description}
            </p>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image={book?.selectedFile}
          title="book"
        />
        </Card>
          <Grid container xs={12} className ={classes.grid}>
            <Grid item xs={6}>
              <List>
                <ListItem button>
                  <ListItemText primary="Branch" secondary={book?.branch} color="white" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Subject" secondary={book?.subject} />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Price" secondary={book?.price} />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Condition" secondary={book?.condition} />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Date" secondary={book?.createdAt} />
                </ListItem>
                <ListItem button>
                  <ListItemText
                    primary="Last Updated"
                    secondary={book?.updatedAt}
                  />
                </ListItem>
                <Divider />
              </List>
            </Grid>
            <Grid item xs={6} >
                <img src={book?.selectedFile} width="300" className={classes.Image}/> 
            </Grid>
        </Grid>
    
    </>
  );
};

export default BookInfo;
