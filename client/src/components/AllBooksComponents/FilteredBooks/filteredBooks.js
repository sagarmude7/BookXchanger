
import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Grid,CircularProgress,Grow,Container} from '@material-ui/core';
import Book from '../Book/Book'
import useStyles from '../style'
import Navbar from '../../Navbar/Navbar'
import {filterBooks} from '../../../actions/books' 
const FilteredBooks = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

      useEffect(()=>{
        console.log("Getting Filtered Books")
        //accepts an action call as an argument -> goes to actions folder
        dispatch(filterBooks())
    },[dispatch])
       const books = useSelector(state=>state.books)
       console.log(books);
    {      if(books.length == 0 ) {
                return(<h1>No Books Found..</h1>);
            }
            else {

            		return (
                                <>
                                <h1>Filtered Books</h1>
                                <div style={{"marginTop":"200px"}}>
                                    <Container>
                                    {books.length===0?<CircularProgress/>:(
                                        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                                        {books.map((book)=>(
                                                <Grid item xs={12} sm={3}>
                                                    <Book key={book._id} book={book}/>
                                                </Grid>
                                        ))}
                                        </Grid>
                                        )
                                    }
                                    </Container>
                                </div>
                                </>
                            )
    	    }
    }
    
}

export default FilteredBooks

