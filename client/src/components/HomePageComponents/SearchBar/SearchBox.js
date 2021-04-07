import React,{useState,useEffect} from 'react'
// import bookData from "./bookData.js"
import {ADDFILTER, UPDATE_BOOKS} from '../../../constants/actions'
import "./styles.css"
import SearchIcon from "@material-ui/icons/Search"
import {useSelector,useDispatch} from 'react-redux';
import {getBooks} from '../../../actions/books'
import { makeStyles } from '@material-ui/core/styles';
import {Container,Grow,Grid,Paper,Typography,TextField,Button,Select,MenuItem,FormControl,InputLabel, Box} from '@material-ui/core';
import { Link,useHistory } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FilteredBooks from '../../AllBooksComponents/FilteredBooks/filteredBooks';
import { blue, lightBlue, lightGreen } from '@material-ui/core/colors';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow :"1",
    display : "flex",
    alignItems : "center",
    justifyContent : "center",
    width : "100%"
  },
  input : {
    padding: theme.spacing(2), 
    textAlign: 'center',
    border  :"1px solid red"
  },
  button:{
    // position :"relative",
    // top : "0px",
    // left : "45%",
    justifyContent:'center',
    backgroundColor:"#DF4C73"
  },
  advance:{
    backgroundColor:"#DF4C73",
    float:'right',
    marginBottom:'10px',
    marginRight: '60px'
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
//  gridContainer: {
//   display:"flex",
//   alignItems:"center",
//   justifyContent:"center",
//  },
 gridItem :{
  border:"1px solid blue",
  borderRadius:"10px"
 },
 formControl :{
   backgroundColor : "white",
   border :"1 px solid grey",
   borderRadius  :"8px"
 },
//  adv : {
//    cursor : "pointer",
//    textAlign :"center",
//    width :"200px",
//    height :"40px",
//    position :"relative",
//    left :"800px",
//    fontSize : "20px"
//  },
 paper:{
   textAlign:'center',
 },
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

    const removeFilters = () => {
      dispatch({type:ADDFILTER,payload:books});
      setInputName('')
      setInputBranch('')
      setInputSubject('')
    }

    const updateBooks = () => {
      if((inputName === "")&&(inputSubject === "")&&(inputBranch === "")&&(inputPrice === "")&&(inputCondition === "")&&(inputTags === "")){
        dispatch({type:ADDFILTER,payload:books})
        console.log("filtered books are",books)
      }else{
        var filteredBookArr = []
        for(const book of books){
          if(inputName!==""){
            if(book.bookName.toLowerCase().includes(inputName.toLowerCase())){
              filteredBookArr.push(book)
            }
          }
          if(inputSubject!==""){
            if(book.subject.toLowerCase().includes(inputSubject.toLowerCase())){
              if(filteredBookArr.length!==0){
                if(filteredBookArr[filteredBookArr.length-1]._id!==book._id)
                  filteredBookArr.push(book)
              }else{
                filteredBookArr.push(book)
              }
              
            }
          }
          if(inputTags!==""){
            if(book.tags[0].toLowerCase().includes(inputTags.toLowerCase())){
              if(filteredBookArr.length!==0){
                if(filteredBookArr[filteredBookArr.length-1]._id!==book._id)
                  filteredBookArr.push(book)
              }else{
                  filteredBookArr.push(book)
              }
            }
          }
          if((book.branch===inputBranch)||(book.condition===inputCondition.toLowerCase())||(book.priceType===inputPrice)){
            if(filteredBookArr.length!==0){
              if(filteredBookArr[filteredBookArr.length-1]._id!==book._id)
                filteredBookArr.push(book)
            }else{
              filteredBookArr.push(book)
            }
          }
        }
        console.log("filtered books are",filteredBookArr)
        dispatch({type:ADDFILTER,payload:filteredBookArr})
      }
    }
    // const updateBooks =  ()=>{
    //     if(inputName!==""){
    //       setFilteredbooksByName(books.filter((book) => book.bookName.toLowerCase().includes(inputName.toLowerCase())));
    //       console.log("Filtered By Name",filteredbooksByName);
    //     }
    //     else{
    //       setFilteredbooksByName([]);
    //     }
    //     if(inputSubject!==""){
    //       setFilteredbooksBySubject(books.filter((book) => book.subject.toLowerCase().includes(inputSubject.toLowerCase())));
    //       console.log("Filtered By Subject",filteredbooksBySubject);
    //     }
    //     else{
    //       setFilteredbooksBySubject([]);
    //     }
    //     if(inputBranch!==""){
    //       setFilteredbooksByBranch(books.filter((book) => book.branch.toLowerCase().includes(inputBranch.toLowerCase())));
    //       console.log("Filtered By Branch",filteredbooksByBranch);
    //     }
    //     else{
    //       setFilteredbooksByBranch([]);
    //     }
    //     if(inputPrice!==""){
    //       setFilteredbooksByPrice(books.filter((book) => book.priceType.toLowerCase().includes(inputPrice.toLowerCase())));
    //       console.log("Filtered By Price",filteredbooksByPrice);
    //     }
    //     else{
    //       setFilteredbooksByPrice([]);
    //     }
     
    //     if(inputCondition!==""){
    //      setFilteredbooksByCondition(books.filter((book) => book.condition.toLowerCase().includes(inputCondition.toLowerCase())));
    //       console.log("Filtered By Condition",filteredbooksByCondition);
    //     }
    //     else{
    //       setFilteredbooksByCondition([]);
    //     }
    //     if(inputTags!==""){
    //       setFilteredbooksByTags(books.filter((book) => book.tags[0].toLowerCase().includes(inputTags.toLowerCase())));
    //        console.log("Filtered By Tags",filteredbooksByTags);
    //      }
    //      else{
    //        setFilteredbooksByTags([]);
    //      }
    //     const filteredbooks = [...filteredbooksByName,...filteredbooksByBranch,...filteredbooksBySubject,...filteredbooksByPrice,...filteredbooksByCondition,...filteredbooksByTags]
    //     var uniqueFilteredArray = filteredbooks.filter(function(item, pos) {
    //         return filteredbooks.indexOf(item) === pos;
    //     })
    //     console.log(uniqueFilteredArray);
    //     dispatch({type:ADDFILTER,payload:uniqueFilteredArray})      
    //    }
        const [expanded, setExpanded] = React.useState(false);     
        const handleChange = (panel) => (event, isExpanded) => {
          setExpanded(isExpanded ? panel : false);
        };
    return ( 
        <>
        <Typography variant="h5"  className="heading"> Search a Book </Typography>
        <div noValidate autoComplete="off" >
        <div>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}  className={classes.paper}>
          <input 
            id="standard-basic" 
            label="Name" 
            className={classes.input} 
            key="random1"
            value= {inputName}
            placeholder={"Search Name"}
            onChange = {(e) => {setName(e.target.value)}}
            />
          </Grid>
          <Grid item xs={12} sm={4}  className={classes.paper} >
          <FormControl variant="outlined" className={classes.formControl} fullWidth>
                <InputLabel id="branchTypeLabel">Branch</InputLabel>
                    <Select
                    labelId="branchLabel"
                    id="branch"
                    label="branch Of Book"
                    onChange={(e) => setBranch(e.target.value)}
                    value={inputBranch}
                    name="branch"
                    >
                        <MenuItem value="Computer Engineering">
                           <em>Computer Engineering</em>
                        </MenuItem>
                        <MenuItem value="Information Technology">Information Technology</MenuItem>
                        <MenuItem value="Electronics Engineering">Electronics Engineering</MenuItem>
                        <MenuItem value="Electronics and Telecommunication Engineering">Electronics and Telecommunication Engineering</MenuItem>
                        <MenuItem value="Mechanical Engineering">Mechanical Engineering</MenuItem>
                        <MenuItem value="Civil Engineering">Civil Engineering</MenuItem>
                        <MenuItem value="Production Engineering">Production Engineering</MenuItem>
                        <MenuItem value="Textile Engineering">Textile Engineering</MenuItem>
                    </Select>
                </FormControl>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.paper}>
          <input 
            id="standard-basic" 
            label="Subject" 
            className={classes.input} 
            key="random3"
            value= {inputSubject}
            placeholder={"Search Subject"}
            onChange = {(e) => {setSubject(e.target.value)}}
            />
          </Grid>
        </Grid>
          </div>
          <hr style={{borderWidth : "0px"}}/>
          <hr style={{borderWidth : "0px"}}/>
          {
            isadv ? 
        <Grid container spacing={4} className={classes.gridContainer} > 
            <Grid item xs={12} sm={4} className={classes.paper}>
                <FormControl variant="outlined" border="blue" className={classes.formControl} style={{width: "200px"}}>
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
                        <MenuItem value="">None</MenuItem>
                    </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4} className={classes.paper} >
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
                          <MenuItem value="">None</MenuItem>
                      </Select>
                  </FormControl>
              </Grid>
              <Grid item xs={12} sm={4} className={classes.paper} >
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
          <Box textAlign='center'>
              <button className={classes.button} type="button" onClick={updateBooks}><span style={{fontSize:"1.3rem"}}>Search</span></button>
              <span className="hide">Double Click to search</span>
          </Box>
          <p className={classes.adv} onClick={showAdv}>
          {isadv ? 
          <button className={classes.advance} type="button"><span style={{fontSize:"0.8rem"}}>Hide Advanced</span></button>
           : 
           <button className={classes.advance} type="button"><span style={{fontSize:"0.8rem"}}>Advanced Search</span></button>
           }</p>
           <button className={classes.advance} onClick={removeFilters}><span style={{fontSize:"0.8rem"}}>Remove Filters</span></button>
        </div> 
    </>
    )
}

export default SearchBox;


  /* <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={classes.accordian}>
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
      </Accordion> */
    //   <Typography variant="h5"  className="heading"> Search a Book </Typography>
    //     <div noValidate autoComplete="off" >
    //       <div  className={classes.root} >
    //         <input 
    //         id="standard-basic" 
    //         label="Name" 
    //         className={classes.input} 
    //         key="random1"
    //         value= {inputName}
    //         placeholder={"Search Name"}
    //         onChange = {(e) => {setName(e.target.value)}}
    //         />
    //         <FormControl variant="outlined" border="blue" style={{width:"420px"}} fullWidth>
    //             <InputLabel id="branchTypeLabel">Branch</InputLabel>
    //                 <Select
    //                 labelId="branchLabel"
    //                 id="branch"
    //                 label="branch Of Book"
    //                 onChange={(e) => setBranch(e.target.value)}
    //                 value={inputBranch}
    //                 name="branch"
    //                 >
    //                     <MenuItem value="Computer Engineering">
    //                                         <em>Computer Engineering</em>
    //                                     </MenuItem>
    //                     <MenuItem value="Information Technology">Information Technology</MenuItem>
    //                     <MenuItem value="Electronics Engineering">Electronics Engineering</MenuItem>
    //                     <MenuItem value="Electronics and Telecommunication Engineering">Electronics and Telecommunication Engineering</MenuItem>
    //                     <MenuItem value="Mechanical Engineering">Mechanical Engineering</MenuItem>
    //                     <MenuItem value="Civil Engineering">Civil Engineering</MenuItem>
    //                     <MenuItem value="Production Engineering">Production Engineering</MenuItem>
    //                     <MenuItem value="Textile Engineering">Textile Engineering</MenuItem>
    //                 </Select>
    //             </FormControl>
    //         <input 
    //         id="standard-basic" 
    //         label="Subject" 
    //         className={classes.input} 
    //         key="random3"
    //         value= {inputSubject}
    //         placeholder={"Search Subject"}
    //         onChange = {(e) => {setSubject(e.target.value)}}
    //         />
    //       </div>
    //       <hr style={{borderWidth : "0px"}}/>
    //       <hr style={{borderWidth : "0px"}}/>
    //       {
    //         isadv ? 
    //     <Grid container spacing={4} className={classes.gridContainer} > 
    //         <Grid item xs={4} sm={2}>
    //             <FormControl variant="outlined" border="blue" className={classes.formControl} fullWidth>
    //             <InputLabel id="conditionTypeLabel">Condition Of Book</InputLabel>
    //                 <Select
    //                 labelId="conditionLabel"
    //                 id="condition"
    //                 label="Condition Of Book"
    //                 onChange={(e) => setCondition(e.target.value)}
    //                 value={inputCondition}
    //                 name="condition"
    //                 >
    //                     <MenuItem value="Used">Used</MenuItem>
    //                     <MenuItem value="New">New</MenuItem>
    //                     <MenuItem value="">None</MenuItem>
    //                 </Select>
    //             </FormControl>
    //           </Grid>
    //           <Grid item xs={4} sm={2} >
    //               <FormControl variant="outlined" className={classes.formControl} fullWidth>
    //                   <InputLabel id="type-label">Price Type</InputLabel>
    //                   <Select
    //                   labelId="type-label"
    //                   id="priceType"
    //                   label="Price Type"
    //                   name="priceType"
    //                   value={inputPrice}
    //                   onChange={(e) => setPrice(e.target.value)}
    //                   placeholder="Select Price Type"
    //                   >
    //                       <MenuItem value="Fixed">
    //                           <em>Fixed</em>
    //                       </MenuItem>
    //                       <MenuItem value="Negotiable">Negotiable</MenuItem>
    //                       <MenuItem value="Price on Call">Price on Call</MenuItem>
    //                       <MenuItem value="">None</MenuItem>
    //                   </Select>
    //               </FormControl>
    //           </Grid>
    //           <Grid item xs={4} sm={2} >
    //             <input 
    //             id="standard-basic" 
    //             label="Tags" 
    //             className={classes.input} 
    //             key="random3"
    //             value= {inputTags}
    //             placeholder={"Type Tags"}
    //             onChange = {(e) => {setTags(e.target.value)}}
    //             />
    //           </Grid>
              
    //         </Grid>
    //         :
    //        <></>
    //       }
    //       <button className={classes.button} type="button" onClick={updateBooks}><span style={{fontSize:"1.4rem"}}>Search</span></button>
    //       <p className={classes.adv} onClick={showAdv}>{isadv ? <p>Hide Advanced</p>  : <p>Advanced Search</p>}</p>
    //       <span className="hide">Double Click to search</span>
    //     </div> 
    // </>

    