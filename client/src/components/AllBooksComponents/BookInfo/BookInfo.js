import React,{useEffect} from "react";

import {useDispatch,useSelector} from 'react-redux'
import { Button,Grid,CircularProgress,Grow,Container,Paper,RadioGroup,FormControlLabel,Radio} from '@material-ui/core';
import {showBookInfo} from '../../../actions/books'
import { useParams } from "react-router";



const BookInfo = ({match}) => {  
/***************************
  REDUX  GLOBAL STATE PROPERTIES
 **************************/

 const dispatch = useDispatch();

/***************************
        Params
 **************************/
  const bookId = match.params.bookId;


/***************************
     LIFECYCLE Method
 **************************/
  useEffect(()=>{
    dispatch(showBookInfo(bookId));
  },[dispatch])
  return (
    <>
     <h1>This is Book Info</h1>
     {/* <h1>{book.bookName}</h1> */}
    </>
  );
};

export default BookInfo;
