import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {Container} from '@material-ui/core'
import PostAdForm from './components/PostAdComponents/PostAdForm.js'
import AllBooks from './components/AllBooksComponents/AllBooks.js'
import Home from  "./components/HomePageComponents/Home.js"
const App = ()=>{
    return (
        <Router>
            <Container maxWidth="lg">
                <Switch>
                    {/* <Route exact path="/" component={PostAdForm}/> */}
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/all" component={AllBooks}/>
                </Switch>
            </Container>
            
        </Router>
    )
        
}

export default App;