// import React,{useState} from 'react'
// import {UPDATE_BOOKS} from '../../../constants/actions'
// import "./styles.css"
// import SearchIcon from "@material-ui/icons/Search"
// import {TextField} from  "@material-ui/core"
// import {useSelector,useDispatch} from 'react-redux';
// import {getBooks} from '../../../actions/books'
// import {filterBooks} from '../../../actions/books'
// import {Link} from "react-router-dom"

// const SearchBox = () => {
//     const [input,setInput] = useState("");

//     const dispatch = useDispatch()
//     const books = useSelector(state=>state.books);
//     const [data,setData] = useState(books);

//     const filteredbooks = [];

    

//     // const bookFilterOnChange =(e)=> {  
      
//     // }
      
//     const searchFilter = (e) =>{
//         e.preventDefault();
//          filterData(input);
//         dispatch(filterBooks());
       
       
//     }
   

//       const filterData = value => {
//           const lowercaseValue = value.toLowerCase().trim();
//           if(!lowercaseValue){
//             setData(books);   
//           } 
//           else{
//               const filteredbooks = books.filter(book => {
//               return Object.keys(book).some(key => {
//                   return book[key].toString().toLowerCase().includes(lowercaseValue);
//               })           
//           });
//               setData(filteredbooks);
//               console.log(filteredbooks);
//               dispatch({type:UPDATE_BOOKS,payload:filteredbooks})
//           }
         
//       } 

    
//     return (
//         <div className="SearchBox">
//         <form>
        
//         <TextField  key="random2"
//                 className="SearchBox-input"
//                 id="search"
//                 value= {input}
//                 onChange=  {(e) => setInput(e.target.value)}
//                 placeholder={"Search a Book"}
//                 autofocus
//                 required
//                 type="search"/>
//       <button onClick={searchFilter} type="submit" > <Link to="/">Go</Link></button>
//         </form>
//        </div>
            
//     )
// }
// export default SearchBox;















// import React,{useState} from 'react'
// // import bookData from "./bookData.js"
// import {UPDATE_BOOKS} from '../../../constants/actions'
// import "./styles.css"
// import SearchIcon from "@material-ui/icons/Search"
// import {useSelector,useDispatch} from 'react-redux';
// import {getBooks} from '../../../actions/books'

// const SearchBox = () => {
//     const [inputValue,setInputValue] = useState("");
//     const [isChange,setIsChange]  = useState(false);
//     const dispatch = useDispatch()
//     const books = useSelector(state=>state.books);


//     // if(inputValue===""){
//     //     dispatch(getBooks())
//     // }

//     const bookFilterOnChange =(e)=> {  
//        setIsChange(true);
//        setInputValue(e.target.value);
//     }

   
//     const updateBooks = (e)=>{
//         e.preventDefault()
//         const filteredbooks = books.filter(book=>book.bookName.toLowerCase().includes(inputValue.toLowerCase()))
//         dispatch({type:UPDATE_BOOKS,payload:filteredbooks})
//     }
    
//     return ( 
//         <>
//         <div className="searchBox">
//             <input
//                 className="searchInput" 
//                 key="random1"
//                 value= {inputValue}
//                 placeholder={"Search a Book"}
//                 onChange = {bookFilterOnChange}
//             />
//             <button className="searchButton" type="submit" onClick={updateBooks}> <SearchIcon /></button>
//         </div>
//         <br />
//        </>
            
//     )
// }

// export default SearchBox;





          //Restore//





import React,{useState} from 'react'
// import bookData from "./bookData.js"
import {UPDATE_BOOKS} from '../../../constants/actions'
import "./styles.css"
import SearchIcon from "@material-ui/icons/Search"
import {useSelector,useDispatch} from 'react-redux';
import {getBooks} from '../../../actions/books'
import { makeStyles } from '@material-ui/core/styles';
import {TextField,Typography} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
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
    const [isChange,setIsChange]  = useState(false);
    const dispatch = useDispatch()
    const books = useSelector(state=>state.books);
    const [filteredbooksByName,setFilteredbooksByName] = useState([]);
    const [filteredbooksByBranch,setFilteredbooksByBranch] = useState([]);
    const [filteredbooksBySubject,setFilteredbooksBySubject] = useState([]);

    // if(inputValue===""){
    //     dispatch(getBooks())
    // }

    // const updateBooksByName = ()=>{ 
    //    return (books.filter((book) => 
    //        {book.bookName.toLowerCase().includes(inputName.toLowerCase())}))
         
    
    //     }
    //   const updateBooksBySubject = ()=>{  
    //     return (books.filter(book=>book.subject.toLowerCase().includes(inputSubject.toLowerCase())))
      
    // }
    
    //   const updateBooksByBranch = ()=>{
    //    return (books.filter(book=>book.branch.toLowerCase().includes(inputBranch.toLowerCase())) )
    // }

    var updateBooks = (e)=>{
        e.preventDefault()
        console.log(inputSubject,inputName,inputBranch);

        setFilteredbooksByName(books.filter((book) => 
        book.bookName.toLowerCase().includes(inputName.toLowerCase())));
        setFilteredbooksByBranch(filteredbooksByName.filter((book) => 
        book.branch.toLowerCase().includes(inputBranch.toLowerCase())));
        setFilteredbooksBySubject(filteredbooksByBranch.filter((book) => 
        book.subject.toLowerCase().includes(inputSubject.toLowerCase())));

        const filteredbooks = [...filteredbooksByName,...filteredbooksByBranch,...filteredbooksBySubject]
        console.log(filteredbooks);
        const  uniqueFilteredArray = filteredbooks.filter(function(item, pos) {
            return filteredbooks.indexOf(item) == pos;
        })
        console.log(uniqueFilteredArray);
        dispatch({type:UPDATE_BOOKS,payload:uniqueFilteredArray})
    }
    
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
        <button className="searchButton" type="submit" onClick={updateBooks}> <Link to="/all" className="Link"><span style={{fontSize:"1.4rem"}}>Search</span>      </Link></button>

</form>
        <br />
       </>
      
    )
}

export default SearchBox;


