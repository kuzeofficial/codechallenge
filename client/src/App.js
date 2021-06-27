import React from 'react';
import Index from './Pages/Index'
import AddStudent from "./Components/AddStudent"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

export default  function App() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Index />
                </Route>
                <Route path="/add">
                    <AddStudent />
                </Route>
            </Switch>
        </Router>
    )
}


