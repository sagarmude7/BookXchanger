import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {Container} from '@material-ui/core'
import PostAdForm from './components/PostAdComponents/PostAdForm'
const App = ()=>{
    return (
        <Router>
            <Container maxWidth="lg">
                <Switch>
                    <Route exact path="/" component={PostAdForm}/>
                </Switch>
            </Container>
            
        </Router>
    )
        
}

export default App;