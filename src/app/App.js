import Header from "../components/Header/Header";
import React, { Component } from 'react'
import  {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Verticalbar from "../components/VerticalBar/Verticalbar";
import Sharts from "../containers/Charts/Charts"
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch> 
            <Route exact path='/' >
            <Header />
            <Sharts />
            <Verticalbar />
           
            </Route>
        </Switch>
      </Router>
    )
  }
}

