import React,{useEffect} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
// import ScrollUpButton from "react-scroll-up-button";
import {Container} from '@material-ui/core'
import PostAdForm from './components/PostAdComponents/PostAdForm.js'
import Home from  "./components/HomePageComponents/Home.js"
import Loading from "./components/Loading/Loading.js"
import Auth from './components/Auth/Auth'
import DisplayBooks from './components/AllBooksComponents/AllBooks'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Wishlist from './components/WishlistComponent/Wishlist.js'
import Footer from './components/Footer/footer'

import BookInfo from "./components/AllBooksComponents/BookInfo/BookInfo"

import About from './components/AboutUsComponents/About.js'
import { useDispatch } from 'react-redux'
import {getBooks} from './actions/books'

const App = ()=>{
    const dispatch = useDispatch()

    useEffect(()=>{
        console.log("Getting Books")
        //accepts an action call as an argument -> goes to actions folder
        dispatch(getBooks())
    },[dispatch])
    function displayLoading(){
        return(
            <Loading />
        )
    }
    useEffect(() => {
        displayLoading();
    },[]);
    return (
        <Router>
            <Container maxWidth="lg">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/all" component={DisplayBooks}/>
                    <Route exact path="/aboutus" component={About}/>
                    <Route exact path="/add" component={PostAdForm}/>  
                    <Route exact path="/auth" component={Auth}/>
                    <Route exact path="/profile" component={Profile}/>  
                    <Route exact path="/wishlist" component={Wishlist}/>  
                    <Route exact path="/all/book/:bookId" component={BookInfo}/>  
                </Switch>
            </Container>
        </Router>
    )
        
}

export default App;