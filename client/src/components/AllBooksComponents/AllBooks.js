import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Button,Grid,CircularProgress,Grow,Container,Paper,RadioGroup,FormControlLabel,Radio} from '@material-ui/core';
import Book from './Book/Book'
import useStyles from './style'
import Navbar from '../Navbar/Navbar'
import Footer from "../Footer/footer.js"
import SearchBox from "../HomePageComponents/SearchBar/SearchBox.js"
import {getBooks} from '../../actions/books'
import FilteredBooks from "./FilteredBooks/filteredBooks.js"

const AllBooks = () => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const books = useSelector(state=>state.books)
    const [sortbool,setSortbool] = useState(false)

    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState();

    useEffect(()=>{
            console.log("Getting Books")
            //accepts an action call as an argument -> goes to actions folder
            dispatch(getBooks())
    },[dispatch])
    
    useEffect(() =>{   
        const sortArray = type => {
        //console.log(type);
        const types = {
            pricehighest: 'price',
            pricelowest: 'price',
            dateoldest: 'createdAt',
            datenewest: 'createdAt'
        };
    
        const sortProperty = types[type];

            if (type==='pricelowest') {
    
                  const sorted = [...books].sort((b, a) => b[sortProperty] - a[sortProperty]);
                  setData(sorted);
            }
            else if(type==='datenewest')
            {
            
                  const sorted = [...books].sort((b, a) => b[sortProperty] - a[sortProperty]);
                  sorted.reverse();
                  setData(sorted);
            }
            else{
                  const sorted = [...books].sort((a, b) => b[sortProperty] - a[sortProperty]);
                  setData(sorted);
            }
        };
        sortArray(sortType)
    }, [sortType])

   


    return (
        <>
        <Navbar/>
        <SearchBox /> 
        <FilteredBooks />
        <br />
        <h1>All Books : </h1>
 
        <div style={{"marginTop":"20px"}}>
        <Button variant="contained" color="primary" size="large" className={classes.sortButton} onClick={()=>setSortbool(!sortbool)}>
            Sort
        </Button>
        {sortbool===true ?(
        <>
            <RadioGroup aria-label="gender" name="gender1">
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <FormControlLabel value="pricehighest" control={<Radio onClick={(e) => setSortType(e.target.value)} />}  label="Price (Highest)" />
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <FormControlLabel value="pricelowest" control={<Radio onClick={(e) => setSortType(e.target.value)} />}   label="Price (Lowest)" />
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <FormControlLabel value="datenewest" control={<Radio onClick={(e) => setSortType(e.target.value)} />}  label="Date Added (Newest)" />
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <FormControlLabel value="dateoldest" control={<Radio onClick={(e) => setSortType(e.target.value)} />}   label="Date Added (Oldest)" />
                    </Paper>
                </Grid>
            </Grid>
            </RadioGroup>
        </>
        ):(<></>)
        }

            <Container>
            {books.length===0?<CircularProgress/>:(
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>

                {sortbool===true ? (
                    data.map((book)=>(
                            <Grid item xs={12} sm={3}>
                                <Book key={book._id} book={book}/>
                            </Grid>
                    ))
                ):(
                    books.map((book)=>(
                            <Grid item xs={12} sm={3}>
                                <Book key={book._id} book={book}/>
                            </Grid>
                    ))
                )}
                </Grid>
                )
            }
            </Container>
        </div>
            
        <Footer/>
        </>
            
    )
}

export default AllBooks
