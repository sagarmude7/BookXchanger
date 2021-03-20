import React,{useState,useEffect} from 'react'
// import bookData from "./bookData.js"
import {ADDFILTER, UPDATE_BOOKS} from '../../../constants/actions'
import "./styles.css"
import SearchIcon from "@material-ui/icons/Search"
import {useSelector,useDispatch} from 'react-redux';
import {getBooks} from '../../../actions/books'
import { makeStyles } from '@material-ui/core/styles';
import {Container,Grow,Grid,Paper,Typography,TextField,Button,Select,MenuItem,FormControl,InputLabel} from '@material-ui/core';
import { Link,useHistory } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FilteredBooks from '../../AllBooksComponents/FilteredBooks/filteredBooks';
import { blue } from '@material-ui/core/colors';
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
    border  :"1px solid grey"
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
 accordian :{
   width:"400px",
  position : "relative",
  display:"flex",
  AlignItems:"center",
  justifyContent : "center"
 },
 gridContainer: {
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
 },
 gridItem :{
  border:"1px solid blue",
  borderRadius:"10px"
 },
 formControl :{
   backgroundColor : "white",
   border :"1 px solid grey",
   borderRadius  :"8px"
 },
 adv : {
   cursor : "pointer",
   textAlign :"center",
   width :"200px",
   height :"40px",
   position :"relative",
   left :"800px",
   fontSize : "20px"
 }
}));


const SearchBox = () => {

    const classes = useStyles();
    const [inputName,setInputName] = useState("");
    const [inputSubject,setInputSubject] = useState("");
    const [inputBranch,setInputBranch] = useState("");
    const [inputPrice,setInputPrice] = useState("");
    const [inputCondition,setInputCondition] = useState("");
    const [inputTags,setInputTags] = useState("");
    const [isadv,setIsadv] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();
    const books = useSelector(state=>state.books);
    const [filteredbooksByName,setFilteredbooksByName] = useState([]);
    const [filteredbooksByBranch,setFilteredbooksByBranch] = useState([]);
    const [filteredbooksBySubject,setFilteredbooksBySubject] = useState([]);
    const [filteredbooksByPrice,setFilteredbooksByPrice] = useState([]);
    const [filteredbooksByCondition,setFilteredbooksByCondition] = useState([]);
    const [filteredbooksByTags,setFilteredbooksByTags] = useState([]);
    useEffect(()=>{
      console.log("Getting Books")
      //accepts an action call as an argument -> goes to actions folder
      dispatch(getBooks())
    },[dispatch])
  
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
    function setTags(value) {
      setInputTags(value);
    }

    function showAdv(){
      isadv ? setIsadv(false) : setIsadv(true);
      
    }
    const updateBooks =  ()=>{
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
          setFilteredbooksByPrice(books.filter((book) => book.priceType.toLowerCase().includes(inputPrice.toLowerCase())));
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
        if(inputTags!==""){
          setFilteredbooksByTags(books.filter((book) => book.tags[0].toLowerCase().includes(inputTags.toLowerCase())));
           console.log("Filtered By Tags",filteredbooksByTags);
         }
         else{
           setFilteredbooksByTags([]);
         }
        const filteredbooks = [...filteredbooksByName,...filteredbooksByBranch,...filteredbooksBySubject,...filteredbooksByPrice,...filteredbooksByCondition,...filteredbooksByTags]
        var uniqueFilteredArray = filteredbooks.filter(function(item, pos) {
            return filteredbooks.indexOf(item) == pos;
        })
        console.log(uniqueFilteredArray);
        dispatch({type:ADDFILTER,payload:uniqueFilteredArray})      
       }
        const [expanded, setExpanded] = React.useState(false);     
        const handleChange = (panel) => (event, isExpanded) => {
          setExpanded(isExpanded ? panel : false);
        };
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
          <hr style={{borderWidth : "0px"}}/>
          {
            isadv ? 
        <Grid container spacing={4} className={classes.gridContainer} > 
            <Grid item xs={4} sm={2}>
                <FormControl variant="outlined" border="blue" className={classes.formControl} fullWidth>
                <InputLabel id="conditionTypeLabel">Condition Of Book</InputLabel>
                    <Select
                    labelId="conditionLabel"
                    id="condition"
                    label="Condition Of Book"
                    onChange={(e) => setCondition(e.target.value)}
                    value={inputCondition}
                    name="condition"
                    >
                        <MenuItem value="Used">Used</MenuItem>
                        <MenuItem value="New">New</MenuItem>
                        <MenuItem value="Null"></MenuItem>
                    </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4} sm={2} >
                  <FormControl variant="outlined" className={classes.formControl} fullWidth>
                      <InputLabel id="type-label">Price Type</InputLabel>
                      <Select
                      labelId="type-label"
                      id="priceType"
                      label="Price Type"
                      name="priceType"
                      value={inputPrice}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="Select Price Type"
                      >
                          <MenuItem value="Fixed">
                              <em>Fixed</em>
                          </MenuItem>
                          <MenuItem value="Negotiable">Negotiable</MenuItem>
                          <MenuItem value="Price on Call">Price on Call</MenuItem>
                          <MenuItem value="Price on Call"></MenuItem>
                      </Select>
                  </FormControl>
              </Grid>
              <Grid item xs={4} sm={2} >
                <input 
                id="standard-basic" 
                label="Tags" 
                className={classes.input} 
                key="random3"
                value= {inputTags}
                placeholder={"Type Tags"}
                onChange = {(e) => {setTags(e.target.value)}}
                />
              </Grid>
              
            </Grid>
            :
           <></>
          }
          <button className={classes.button} onClick={updateBooks}><span style={{fontSize:"1.4rem"}}>Search</span></button>
          <p className={classes.adv} onClick={showAdv}>{isadv ? <p>Hide Advanced</p>  : <p>Advanced Search</p>}</p>
          <span className="hide">Double Click to search</span>
        </div> 
    </>
    )
}

export default SearchBox;


  {/* <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={classes.accordian}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Advanced Search</Typography>
        </AccordionSummary>
        <AccordionDetails>
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
        </AccordionDetails>
      </Accordion> */}

    