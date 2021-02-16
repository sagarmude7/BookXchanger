import React,{useEffect} from 'react'
import Navbar from "../Navbar/Navbar.js"
import Description from "./Description/Description.js"
import SearchBox from "./SearchBar/SearchBox.js"
import Chatbot from "./Chatbot/chatbot.js"
import DisplayBooks from '../AllBooksComponents/AllBooks'
import {getBooks} from '../../actions/books'

import {useDispatch} from 'react-redux'
const Home = () => {
    const dispatch = useDispatch()
    
    useEffect(()=>{
        //accepts an action call as an argument -> goes to actions folder
        dispatch(getBooks())
    },[dispatch])
    
    return (
        <>
            <Navbar />
            <SearchBox/>
            <Description />
            <DisplayBooks/>
            <Chatbot />
        </>
    )
}

export default Home;
