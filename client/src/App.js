import React from 'react';
import Index from './Pages/Index'
import EditStudent from "./Components/EditStudent"

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

export default  function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/edit/:id" component={EditStudent} />
            </Switch>
        </Router>
    )
}


