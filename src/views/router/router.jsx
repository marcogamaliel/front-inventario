import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Login from '../login/login.page'
import HomePage from '../home/home.page'
import { ListaProductosView } from '../lista-productos/lista-productos.view'
import { CrearProductoView } from '../crear-producto/crear-producto.view'
import { EditarProductoView } from '../editar-producto/editar-producto.view'
import { VerProductoView } from '../ver-producto/ver-producto.view'
import { ListaUsuariosView } from '../lista-usuarios/lista-usuarios.view'
import { VerUsuarioView } from '../ver-usuario/ver-usuario.view'

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={HomePage} />

        <Route path="/login" component={Login} />

        <Route path="/lista-productos" component={ListaProductosView} />

        <Route path="/crear-producto" component={CrearProductoView} />

        <Route path="/editar-producto/:id" component={EditarProductoView} />

        <Route path="/ver-producto/:id" component={VerProductoView} />

        <Route path="/lista-usuarios" component={ListaUsuariosView} />

        <Route path="/crear-usuario" component={CrearProductoView} />

        <Route path="/editar-usuario/:id" component={EditarProductoView} />

        <Route path="/ver-usuario/:id" component={VerUsuarioView} />

        <Route path="/" component={HomePage} />
      </Switch>
    </Router >
  )
}
