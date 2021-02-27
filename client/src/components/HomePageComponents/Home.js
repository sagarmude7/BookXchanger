import React from 'react'
import Navbar from "../Navbar/Navbar.js"
import Description from "./Description/Description.js"
import SearchBox from "./SearchBar/SearchBox.js"
import Chatbot from "./Chatbot/chatbot.js"
import AllBooks from "../AllBooksComponents/AllBooks.js"
const Home = () => {
    return (
        <div>
            <Navbar />
            <SearchBox/>
            <Description />
            <AllBooks /> 
            <Chatbot />
        </div>
    )
}

export default Home;
