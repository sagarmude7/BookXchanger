import React,{useState} from 'react'
import bookData from "./bookData.js"
import "./styles.css"
import SearchIcon from "@material-ui/icons/Search"
const SearchBox = () => {
    const [inputValue,setInputValue] = useState("");
    const [isChange,setIsChange]  = useState(false);
    const BarStyling = {width:"20rem",background : "#F2F1F9",border :"none",padding:"0.5rem"};
    function bookFilterOnChange (e) {  
       setIsChange(true);
        setInputValue(e.target.value);
    }
   
    const filteredbooks = 
        bookData.filter(book => {
        return book.name.toLowerCase().includes(inputValue.toLowerCase());
    })
 
            
            
 
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
        <button className="searchButton" href="#"> <SearchIcon /></button>
       
        </div>
        <br />
        <div>
            
            { (isChange && inputValue!= "") ? (
            filteredbooks.map(e => {
                   return(<h1>{e.name}</h1>)
            })) : <h1></h1>

        }
           
        </div>
       </>
            
    )
}

export default SearchBox;
