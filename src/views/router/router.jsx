import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Login from '../login/login.page'
import HomePage from '../home/home.page'
import { CrearProductoView } from '../crear-producto/crear-producto.view'
import { EditarProductoView } from '../editar-producto/editar-producto.view'
import { ListarProductosView } from '../listar-productos/listar-productos.view'

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={HomePage} />

        <Route path="/login" component={Login} />

        <Route path="/lista-productos" component={ListarProductosView} />

        <Route path="/crear-producto" component={CrearProductoView} />

        <Route path="/editar-producto/:id" component={EditarProductoView} />

        <Route path="/" component={HomePage} />
      </Switch>
    </Router >
  )
}
