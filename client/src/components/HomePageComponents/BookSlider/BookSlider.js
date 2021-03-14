import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Book from '../../AllBooksComponents/Book/Book'
import { Button,Grid,CircularProgress,Grow,Container,Paper,RadioGroup,FormControlLabel,Radio, Typography} from '@material-ui/core';
import useStyles from './style'
import {getBooks} from '../../../actions/books'

const BookSlider = () => {
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
        
        <Typography variant="h6" style={{textAlign:"center",color:"black"}} >Most Featured Books</Typography>
        <hr style={{border : "1px solid black",width:"300px"}}/>
        <hr style={{borderWidth : "0px"}}/>
    <Carousel responsive={responsive}>
            <Container >
                  <Book key={1} book={books[1]} />   
            </Container>
            <Container >
                  <Book key={2} book={books[2]}/>   
            </Container>
            <Container >
                  <Book key={3} book={books[3]}/>   
            </Container>
            <Container >
                  <Book key={4} book={books[4]}/>   
            </Container>
            <Container >
                  <Book key={5} book={books[2]}/>   
            </Container>
            <Container >
                  <Book key={6} book={books[2]}/>   
            </Container>

      </Carousel>
      <hr style={{borderWidth : "0px"}}/>
      <hr style={{borderWidth : "0px"}}/>
        <Typography variant="h6" style={{textAlign:"center"}} >Most Trending  Books</Typography>
        <hr style={{border : "1px solid black",width:"300px"}}/>
        <hr style={{borderWidth : "0px"}}/>

    <Carousel responsive={responsive}>
            <Container >
                  <Book key={1} book={books[1]} />   
            </Container>
            <Container >
                  <Book key={2} book={books[2]}/>   
            </Container>
            <Container >
                  <Book key={3} book={books[3]}/>   
            </Container>
            <Container >
                  <Book key={4} book={books[4]}/>   
            </Container>
            <Container >
                  <Book key={5} book={books[2]}/>   
            </Container>
            <Container >
                  <Book key={6} book={books[2]}/>   
            </Container>

      </Carousel>
      </>
      )
      
}



export default BookSlider;







