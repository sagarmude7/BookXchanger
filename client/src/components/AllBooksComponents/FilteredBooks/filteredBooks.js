
import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Grid,CircularProgress,Grow,Container} from '@material-ui/core';
import Book from '../Book/Book'
import useStyles from '../style' 
const FilteredBooks = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const filterData = useSelector(state=>state.filterData)
    useEffect(()=>{
        console.log("Getting Filtered Books")
    },[dispatch])

    
    console.log(filterData);
    if(filterData.length === 0 ) {
            return(<h1>No Books Found..</h1>);
    }
    else {

        return (
            <>
            <h1>Filtered Books</h1>
            <div style={{"marginTop":"200px"}}>
                <Container>
                {filterData.length===0?<CircularProgress/>:(
                    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {filterData.map((book)=>(
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

export default FilteredBooks

