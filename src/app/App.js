import React, { Component, lazy } from 'react'
import  {BrowserRouter as Router,Redirect, Switch, Route } from 'react-router-dom'
import {routes} from '../routes/routes';
import Dashboard from "../containers/DashBoard/Dashboard";
export default class App extends Component {
  render() {
    const component = (component) => {
      return lazy(() => import(`../components/${component}/${component}`))
    }
    return (
      
      <Router>
        <Switch> 
        {routes.map((route, index) => {
              if (route.path !== '*') {
                if (route.path === '/') {
                  return (
                    <Route key={index} exact path={route.path} >
                      <Redirect to="/dashboard/12" />
                    </Route>
                  )
                } else {
                  return (
                    <Route key={index} exact path={route.path} render= {({ match }) => (
                      ( 
                        <Dashboard id={match.params.id}/> 
                      )
                    )}/>
                  )
                }
              } else {
                return <Route key={index} path={route.path} component={component(route.component)} />
              }
            })}
        </Switch>
      </Router>
    )
  }
}

