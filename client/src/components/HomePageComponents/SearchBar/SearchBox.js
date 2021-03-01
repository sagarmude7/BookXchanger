import React,{useState} from 'react'
// import bookData from "./bookData.js"
import {UPDATE_BOOKS} from '../../../constants/actions'
import "./styles.css"
import SearchIcon from "@material-ui/icons/Search"
import {useSelector,useDispatch} from 'react-redux';
import {getBooks} from '../../../actions/books'

const SearchBox = () => {
    const [inputValue,setInputValue] = useState("");
    const [isChange,setIsChange]  = useState(false);
    const dispatch = useDispatch()
    const books = useSelector(state=>state.books);
    
    const BarStyling = {width:"20rem",background : "#F2F1F9",border :"none",padding:"0.5rem"};

    // if(inputValue===""){
    //     dispatch(getBooks())
    // }

    const bookFilterOnChange =(e)=> {  
       setIsChange(true);
       setInputValue(e.target.value);
    }
   
    const updateBooks = (e)=>{
        e.preventDefault()
        const filteredbooks = books.filter(book=>book.bookName.toLowerCase().includes(inputValue.toLowerCase()))
        dispatch({type:UPDATE_BOOKS,payload:filteredbooks})
    }
    
    return ( 
        <>
        <div className="searchBox">
            <input
                className="searchInput" 
                key="random1"
                value= {inputValue}
                placeholder={"Search a Book"}
                onChange = {bookFilterOnChange}
            />
            <button className="searchButton" type="submit" onClick={updateBooks}> <SearchIcon /></button>
        </div>
        <br />
       </>
            
    )
}

export default SearchBox;
