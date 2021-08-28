import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../login/login.page'
import HomePage from '../home/home.page'
import { ListaProductosView } from '../lista-productos/lista-productos.view'
import { CrearProductoView } from '../crear-producto/crear-producto.view'
import { EditarProductoView } from '../editar-producto/editar-producto.view'
import { VerProductoView } from '../ver-producto/ver-producto.view'
import { VerProductoDetalleView } from '../ver-detalle-producto/ver-detalle-producto.view'
import { ListaUsuariosView } from '../lista-usuarios/lista-usuarios.view'
import { CrearUsuarioView } from '../crear-usuario/crear-usuario.view'
import { EditarUsuarioView } from '../editar-usuario/editar-usuario.view'
import { VerUsuarioView } from '../ver-usuario/ver-usuario.view'
import { Dashboard } from '../dashboard/dashboard.view'


export default function AppRouter() {
  return (
    <Switch>
      <Route path="/home" component={Dashboard} />

      <Route path="/login" component={Login} />

      <Route path="/lista-productos" component={ListaProductosView} />

      <Route path="/crear-producto" component={CrearProductoView} />

      <Route path="/editar-producto/:id" component={EditarProductoView} />

      <Route path="/ver-producto/:id" component={VerProductoView} />

      <Route path="/ver-detalle-producto/:id" component={VerProductoDetalleView} />

      <Route path="/lista-usuarios" component={ListaUsuariosView} />

      <Route path="/crear-usuario" component={CrearUsuarioView} />

      <Route path="/editar-usuario/:id" component={EditarUsuarioView} />

      <Route path="/ver-usuario/:id" component={VerUsuarioView} />

      <Route path="/" component={Login} />
    </Switch>
  )
}
