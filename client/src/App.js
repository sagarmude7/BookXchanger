import React,{useEffect} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {Container} from '@material-ui/core'
import PostAdForm from './components/PostAdComponents/PostAdForm.js'
import Home from  "./components/HomePageComponents/Home.js"
import Loading from "./components/Loading/Loading.js"
const App = ()=>{

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
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/add" component={PostAdForm}/>                
                </Switch>
            </Container>
            
        </Router>
    )
        
}

export default App;