import Header from "../components/Header/Header";
import React, { Component } from 'react'
import  {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Api from "../services/api/Api";
import Verticalbar from "../components/VerticalBar/Verticalbar";
import Welcome from "../components/Welcome/Welcome";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch> 
            <Route exact path='/' >
            <Header />
            <Welcome />
            <Verticalbar />
           <Api />
            </Route>
        </Switch>
      </Router>
    )
  }
}

