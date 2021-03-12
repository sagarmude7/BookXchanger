import React,{useState,useEffect} from 'react'
// import bookData from "./bookData.js"
import {ADDFILTER, UPDATE_BOOKS} from '../../../constants/actions'
import "./styles.css"
import SearchIcon from "@material-ui/icons/Search"
import {useSelector,useDispatch} from 'react-redux';
import {getBooks} from '../../../actions/books'
import { makeStyles } from '@material-ui/core/styles';
import {TextField,Typography,Grid} from '@material-ui/core';
import { Link,useHistory } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FilteredBooks from '../../AllBooksComponents/FilteredBooks/filteredBooks';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow :"1",
    display : "flex",
    alignItems : "center",
    justifyContent : "center",
    width : "100%"
  },
  input : {
    padding: theme.spacing(6),
    marginLeft :"10px",
    marginRight : "10px", 
    textAlign: 'center',
  },
  button:{
    position :"relative",
    top : "0px",
    left : "45%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    justifyContent :"center",
    textAlign :"center"
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
        e.preventDefault();
        console.log("Clickedd Once")
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
      <Typography variant="h5"  className="heading"> Search a Book </Typography>
          <form noValidate autoComplete="off" >
          <div  className={classes.root} >
            <input 
            id="standard-basic" 
            label="Name" 
            className={classes.input} 
            key="random1"
            value= {inputName}
            placeholder={"Search Name"}
            onChange = {(e) => {setInputName(e.target.value)}}
            />
          <input 
            id="standard-basic" 
            label="Branch" 
            className={classes.input} 
            key="random2"
            value= {inputBranch}
            placeholder={"Search Branch"}
            onChange = {(e) => {setInputBranch(e.target.value)}}
            />
            <input 
            id="standard-basic" 
            label="Subject" 
            className={classes.input} 
            key="random3"
            value= {inputSubject}
            placeholder={"Search Subject"}
            onChange = {(e) => {setInputSubject(e.target.value)}}
            />
          </div>
          <button className={classes.button}  type="submit" onClick={updateBooks}><span style={{fontSize:"1.4rem"}}>Search</span></button>
          </form>


    
      
    </>
      
    )
}

export default SearchBox;


