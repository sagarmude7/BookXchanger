import React,{useEffect} from "react";

import {useDispatch,useSelector} from 'react-redux'
import { Button,Grid,CircularProgress,Grow,Container,Paper,RadioGroup,FormControlLabel,Radio} from '@material-ui/core';
import {showBookInfo} from '../../../actions/books'

const BookInfo = () => {

  
  const book = useSelector(state=>state.book)
  console.log(book);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(showBookInfo(book.id))
  },[dispatch])
  return (
    <>
     <h1>This is Book Info</h1>
     <h1>{book.bookName}</h1>

    </>
  );
};

export default BookInfo;
