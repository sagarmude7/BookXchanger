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
 const book = useSelector(state => state.book);
/***************************
        Params
 **************************/
  const bookId = match.params.bookId;
  console.log(bookId);

/***************************
     LIFECYCLE Method
 **************************/
  useEffect(()=>{
    dispatch(showBookInfo(bookId));
  },[dispatch,bookId])
  return (
    <>
     <h1>This is Book Info</h1>
     <h1>{book?.bookName}</h1>
     <h1>{book?.price}</h1>
     <h1>{book?.author}</h1>
     <h1>{book?.subject}</h1>
    </>
  );
};

export default BookInfo;
