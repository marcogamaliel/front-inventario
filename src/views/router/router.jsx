import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Login from '../login/login.page'
import HomePage from '../home/home.page'

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>

        <Route path="/">
          <Login />
        </Route>

      </Switch>
    </Router>
  )
}
