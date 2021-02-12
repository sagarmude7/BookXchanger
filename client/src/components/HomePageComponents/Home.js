import React from 'react'
import Navbar from "../Navbar/Navbar.js"
import Description from "./Description/Description.js"
import SearchPage from "./SearchBar/SearchPage.js"
const Home = () => {
    return (
        <div>
            <Navbar />
            {/* <SearchPage /> */}
            <Description />
        </div>
    )
}

export default Home;
