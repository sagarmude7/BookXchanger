import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Grid,CircularProgress,Grow,Container} from '@material-ui/core';
import Book from './Book/Book'
import useStyles from './style'
import {getBooks} from '../../actions/books'
const AllBooks = () => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const books = useSelector(state=>state.books)

   

    return (
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
        
            
    )
}

export default AllBooks
