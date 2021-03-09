import React,{useState,useEffect} from 'react'
// import bookData from "./bookData.js"
import {ADDFILTER, UPDATE_BOOKS} from '../../../constants/actions'
import "./styles.css"
import SearchIcon from "@material-ui/icons/Search"
import {useSelector,useDispatch} from 'react-redux';
import {getBooks} from '../../../actions/books'
import { makeStyles } from '@material-ui/core/styles';
import {TextField,Typography} from '@material-ui/core';
import { Link,useHistory } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import FilteredBooks from '../../AllBooksComponents/FilteredBooks/filteredBooks';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(5),
      width: '25ch',
      marginTop : "10px !impotant",
      display : "flex",
      alignItems : "center",
      justifyContent : "center",
    },
  },


}));


const SearchBox = () => {

    const classes = useStyles();
    const [inputName,setInputName] = useState("");
    const [inputSubject,setInputSubject] = useState("");
    const [inputBranch,setInputBranch] = useState("");
    const history = useHistory();
    const dispatch = useDispatch()
    const books = useSelector(state=>state.books);
    const [filteredbooksByName,setFilteredbooksByName] = useState([]);
    const [filteredbooksByBranch,setFilteredbooksByBranch] = useState([]);
    const [filteredbooksBySubject,setFilteredbooksBySubject] = useState([]);
    useEffect(()=>{
      console.log("Getting Books")
      //accepts an action call as an argument -> goes to actions folder
      dispatch(getBooks())
    },[dispatch])
    console.log(books)
    var updateBooks = (e)=>{
        e.preventDefault()
        console.log(inputSubject,inputName,inputBranch);
        console.log(e.target)
        if(inputName!==""){
          setFilteredbooksByName(books.filter(book => book.bookName.toLowerCase().includes(inputName.toLowerCase())));
          console.log("Filtered By Name",filteredbooksByName);
        }
        if(inputSubject!==""){
          setFilteredbooksBySubject(books.filter((book) => book.subject.toLowerCase().includes(inputSubject.toLowerCase())));
          console.log("Filtered By Subject",filteredbooksBySubject);
        }
        if(inputBranch!==""){
          setFilteredbooksByBranch(books.filter((book) => book.branch.toLowerCase().includes(inputBranch.toLowerCase())));
          console.log("Filtered By Branch",filteredbooksByBranch);
        }
          
        console.log(filteredbooksByName)
        const filteredbooks = [...filteredbooksByName,...filteredbooksByBranch,...filteredbooksBySubject]
        console.log(filteredbooks);
        const uniqueFilteredArray = filteredbooks.filter(function(item, pos) {
            return filteredbooks.indexOf(item) == pos;
        })
        console.log(uniqueFilteredArray);
        dispatch({type:ADDFILTER,payload:uniqueFilteredArray})
        // history.push('/all');
    }
    // const [filterData,setFilterData] = useState({
    //   filter:'',type:''
    // })

    // const handleSubmit = (e)=>{
    //   e.preventDefault()
    //   setFilterData({...filterData,filter:})
    //   dispatch(filterBooks(filterData));
    // }

    return ( 
        <>
      <Typography variant="h4" component="h2" style ={{textAlign:"center"}}> Search a Book </Typography>
          <form className={classes.root} noValidate autoComplete="off" >
            <input 
            id="standard-basic" 
            label="Name" 
            className="searchInput" 
            key="random1"
            value= {inputName}
            placeholder={"Search Name"}
            onChange = {(e) => {setInputName(e.target.value)}}
            />
          <input 
            id="standard-basic" 
            label="Branch" 
            className="searchInput" 
            key="random2"
            value= {inputBranch}
            placeholder={"Search Branch"}
            onChange = {(e) => {setInputBranch(e.target.value)}}
            />
            <input 
            id="standard-basic" 
            label="Subject" 
            className="searchInput" 
            key="random3"
            value= {inputSubject}
            placeholder={"Search Subject"}
            onChange = {(e) => {setInputSubject(e.target.value)}}
            />
                  <button className="searchButton" type="submit" onClick={updateBooks}><span style={{fontSize:"1.4rem"}}>Search</span></button>

          </form>
        <br />
        <FilteredBooks/>
       </>
      
    )
}

export default SearchBox;


