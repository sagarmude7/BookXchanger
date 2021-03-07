import React,{useState} from 'react'
import {UPDATE_BOOKS} from '../../../constants/actions'
import "./styles.css"
import SearchIcon from "@material-ui/icons/Search"
import {TextField} from  "@material-ui/core"
import {useSelector,useDispatch} from 'react-redux';
import {getBooks} from '../../../actions/books'
import {filterBooks} from '../../../actions/books'
import {Link} from "react-router-dom"

const SearchBox = () => {
    const [input,setInput] = useState("");

    const dispatch = useDispatch()
    const books = useSelector(state=>state.books);
    const [data,setData] = useState(books);

    const filteredbooks = [];

    

    // const bookFilterOnChange =(e)=> {  
      
    // }
      
    const searchFilter = (e) =>{
        e.preventDefault();
         filterData(input);
        dispatch(filterBooks());
       
       
    }
   

      const filterData = value => {
          const lowercaseValue = value.toLowerCase().trim();
          if(!lowercaseValue){
            setData(books);   
          } 
          else{
              const filteredbooks = books.filter(book => {
              return Object.keys(book).some(key => {
                  return book[key].toString().toLowerCase().includes(lowercaseValue);
              })           
          });
              setData(filteredbooks);
              console.log(filteredbooks);
              dispatch({type:UPDATE_BOOKS,payload:filteredbooks})
          }
         
      } 

    
    return (
        <div className="SearchBox">
        <form>
        
        <TextField  key="random2"
                className="SearchBox-input"
                id="search"
                value= {input}
                onChange=  {(e) => setInput(e.target.value)}
                placeholder={"Search a Book"}
                autofocus
                required
                type="search"/>
      <button onClick={searchFilter} type="submit" > <Link to="/">Go</Link></button>
        </form>
       </div>
            
    )
}
export default SearchBox;















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


 // const updateBooksByName = ()=>{ 
 //       filteredbooksByName = books.filter((book) => 
 //           {book.bookName.toLowerCase().includes(inputName.toLowerCase())});
 //           console.log("filteredbooksByName are : " + filteredbooksByName)
     
 //    }
 //      const updateBooksBySubject = ()=>{  
 //        filteredbooksBySubject = books.filter(book=>book.subject.toLowerCase().includes(inputSubject.toLowerCase()))
 //        console.log("filteredbooksBySubject are : " + filteredbooksBySubject)
 //    }
    
 //      const updateBooksByBranch = ()=>{
 //      filteredbooksByBranch = books.filter(book=>book.branch.toLowerCase().includes(inputBranch.toLowerCase()))
 //         console.log("filteredbooksByBranch are : " + filteredbooksByBranch)
 //    }