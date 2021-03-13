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
    const [inputPrice,setInputPrice] = useState("");
    const [inputCondition,setInputCondition] = useState("");
    const history = useHistory();
    const dispatch = useDispatch()
    const books = useSelector(state=>state.books);
    const [filteredbooksByName,setFilteredbooksByName] = useState([]);
    const [filteredbooksByBranch,setFilteredbooksByBranch] = useState([]);
    const [filteredbooksBySubject,setFilteredbooksBySubject] = useState([]);
    const [filteredbooksByPrice,setFilteredbooksByPrice] = useState([]);
    const [filteredbooksByCondition,setFilteredbooksByCondition] = useState([]);
    useEffect(()=>{
      console.log("Getting Books")
      //accepts an action call as an argument -> goes to actions folder
      dispatch(getBooks())
    },[dispatch])
    console.log(books)



    function setName(value) {
      setInputName(value);
    }
    
    function setSubject(value) {
      setInputSubject(value);
    }
    
    function setBranch(value) {
      setInputBranch(value);
    }
    
    function setPrice(value) {
      setInputPrice(value);
      console.log(value);
    }
    
    function setCondition(value) {
      setInputCondition(value);
    }
 
    const updateBooks =  ()=>{
        
        console.log("Clickedd Once")
        console.log(inputSubject,inputName,inputBranch);
        if(inputName!==""){
          setFilteredbooksByName(books.filter((book) => book.bookName.toLowerCase().includes(inputName.toLowerCase())));
          console.log("Filtered By Name",filteredbooksByName);
        }
        else{
          setFilteredbooksByName([]);
        }
        if(inputSubject!==""){
          setFilteredbooksBySubject(books.filter((book) => book.subject.toLowerCase().includes(inputSubject.toLowerCase())));
          console.log("Filtered By Subject",filteredbooksBySubject);
        }
        else{
          setFilteredbooksBySubject([]);
        }
        if(inputBranch!==""){
          setFilteredbooksByBranch(books.filter((book) => book.branch.toLowerCase().includes(inputBranch.toLowerCase())));
          console.log("Filtered By Branch",filteredbooksByBranch);
        }
        else{
          setFilteredbooksByBranch([]);
        }
        if(inputPrice!==""){
          setFilteredbooksByPrice(books.filter(book => book.price == inputPrice));
          console.log("Filtered By Price",filteredbooksByPrice);
        }
        else{
          setFilteredbooksByPrice([]);
        }
     
        if(inputCondition!==""){
         setFilteredbooksByCondition(books.filter((book) => book.condition.toLowerCase().includes(inputCondition.toLowerCase())));
          console.log("Filtered By Condition",filteredbooksByCondition);
        }
        else{
          setFilteredbooksByCondition([]);
        }
        console.log(filteredbooksByName)
        const filteredbooks = [...filteredbooksByName,...filteredbooksByBranch,...filteredbooksBySubject,...filteredbooksByPrice,...filteredbooksByCondition]
        console.log(filteredbooks);
        var uniqueFilteredArray = filteredbooks.filter(function(item, pos) {
            return filteredbooks.indexOf(item) == pos;
        })
        console.log(uniqueFilteredArray);

        dispatch({type:ADDFILTER,payload:uniqueFilteredArray})
      
       }
        
      

    return ( 
        <>
      <Typography variant="h5"  className="heading"> Search a Book </Typography>
          <div noValidate autoComplete="off" >
          <div  className={classes.root} >
            <input 
            id="standard-basic" 
            label="Name" 
            className={classes.input} 
            key="random1"
            value= {inputName}
            placeholder={"Search Name"}
            onChange = {(e) => {setName(e.target.value)}}
            />
          <input 
            id="standard-basic" 
            label="Branch" 
            className={classes.input} 
            key="random2"
            value= {inputBranch}
            placeholder={"Search Branch"}
            onChange = {(e) => {setBranch(e.target.value)}}
            />
            <input 
            id="standard-basic" 
            label="Subject" 
            className={classes.input} 
            key="random3"
            value= {inputSubject}
            placeholder={"Search Subject"}
            onChange = {(e) => {setSubject(e.target.value)}}
            />
          </div>
          <hr style={{borderWidth : "0px"}}/>
          <div  className={classes.root} >
            <input 
            id="standard-basic" 
            label="Price" 
            className={classes.input} 
            key="random4"
            value= {inputPrice}
            onChange={(e) => setPrice(e.target.value)}
            placeholder={"Type Price"}
            
            />
          
            <input 
            id="standard-basic" 
            label="Condition" 
            className={classes.input} 
            key="random5"
            value= {inputCondition}
            onChange={(e) => setCondition(e.target.value)}
            placeholder={"Search Condition"}
            
            />
          </div>
          <button className={classes.button} onClick={updateBooks}><span style={{fontSize:"1.4rem"}}>Search</span></button>
          <span className="hide">Double Click to search</span>
          </div>


    
      
    </>
      
    )
}

export default SearchBox;


