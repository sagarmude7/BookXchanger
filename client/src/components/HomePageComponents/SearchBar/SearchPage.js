import React,{useState,useEffect} from 'react'
import SearchBar from "./SearchBar.js"
import BookList from "./BookList.js"
const SearchPage = ({keyword,setKeyword}) => {
    const [input,setInput] = useState('');
    const [BookListDefault,setBookListDefault] = useState();
    const [bookList,setBookList] = useState();

    const fetchData = async () => {

        return await fetch("https://restcuntries.eu/rest/v2/all")
            .then(response =>response.json())
            .then(data => {
                setBookList(data);
                setBookListDefault(data);
            })

    }
    
    useEffect(()=>{
        fetchData();
    },[])

    const updateInput = async (input) => {
        const filtered = BookListDefault.filter(Book => {
            return Book.name.toLowerCase().includes(input.toLowerCase());
        })
        setInput(input);
        setBookList(filtered);
    }

    return (
        <>
            <h1>Book List</h1>
            <SearchBar 
              input={input}
              onChange={updateInput}
            />
            <BookList bookList={bookList} />
        </>
    )
}

export default SearchPage;
