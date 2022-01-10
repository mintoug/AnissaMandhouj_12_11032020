import Header from "../components/Header/Header";
import React, { Component } from 'react'
import  {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
 

export default class App extends Component {
  render() {
    return (
      <div>
        
        <Router>
          <Switch>
            <Route exact path='/' >
            <Header />
            </Route>

          
          </Switch>
        </Router>
        
      </div>
    )
  }
}

