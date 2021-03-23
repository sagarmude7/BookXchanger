import React,{useEffect} from "react";
import Navbar from "../Navbar/Navbar.js";
import Footer from "../Footer/footer.js";
import Book from '../AllBooksComponents/Book/Book'
import {useDispatch,useSelector} from 'react-redux'
import { Button,Grid,CircularProgress,Grow,Container,Paper,RadioGroup,FormControlLabel,Radio} from '@material-ui/core';
import useStyles from "./style.js";
import {getWishList} from '../../actions/user'
import {FETCH_FAV} from '../../constants/actions'

const Wishlist = () => {
  const classes = useStyles()
  const user = JSON.parse(localStorage.getItem("profile"));
  const wishList = useSelector(state=>state.wishList)
  const books = useSelector(state=>state.books)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch({type:FETCH_FAV,payload:books.filter(book=>book.wishListedBy.includes(user.profile.id)===true)})
  },[dispatch,books])

  return (
    <>
      <Navbar />
      <Container>
        {wishList.length === 0 ? (
          <CircularProgress />
        ) : (
          <Grid
            className={classes.container}
            container
            alignItems="stretch"
            spacing={3}
          >
             { wishList.map((book) => (
                  <Grid item xs={12} sm={3}>
                    <Book key={book._id} book={book} />
                  </Grid>
                ))}
          </Grid>
        )}
      </Container>

      <Footer />
    </>
  );
};

export default Wishlist;
