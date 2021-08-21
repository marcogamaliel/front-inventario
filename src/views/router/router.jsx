import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Login from '../login/login.page'
import HomePage from '../home/home.page'
import { CrearProductoView } from '../crear-producto/crear-producto.view'
import { ListarProductosView } from '../listar-productos/listar-productos.view'

export default function AppRouter() {
  return (
    <Router>
      <Switch>

        <Route path="/home">
          <HomePage />
        </Route>

        <Route path="/login" exact>
          <Login />
        </Route>

        <Route path="/lista-productos">
          <ListarProductosView />
        </Route>

        <Route path="/crear-producto" component={CrearProductoView}>
        </Route>

        <Route path="/">
          <HomePage />
        </Route>

      </Switch>
    </Router>
  )
}
