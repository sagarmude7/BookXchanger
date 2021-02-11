import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {Container} from '@material-ui/core'
import PostAdForm from './components/PostAdComponents/PostAdForm'
import AllBooks from './components/AllBooksComponents/AllBooks'
const App = ()=>{
    return (
        <Router>
            <Container maxWidth="lg">
                <Switch>
                    <Route exact path="/" component={PostAdForm}/>
                    <Route exact path="/all" component={AllBooks}/>
                </Switch>
            </Container>
            
        </Router>
    )
        
}

export default App;