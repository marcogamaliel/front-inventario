import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./side-nav.component.css"
import AppContext from "../../application/app-context/app-context";

export default function SideNav() {
  const [context] = useContext(AppContext)
  const { user } = context
  return (
    <ul id="nav-mobile" class="sidenav sidenav-fixed">
      <li>
        <div className="user-data">
          <div className="user-photo-wrapper">
            <div className="user-photo">{user?.firstName?.[0] ?? ''}{user?.lastName?.[0] ?? ''}</div>
          </div>
          <div className="user-data-detail">
            <div className="user-data-name">{user?.firstName} {user?.lastName ?? ''}</div>
            <div className="user-data-roles">{user?.roles?.map(r => r.name).join(', ')}</div>
          </div>
        </div>
      </li>
      <li><div class="divider"></div></li>
      <li><Link to="/lista-productos"><i className="material-icons">home</i>Inventario</Link></li>
      <li><Link to="/lista-usuarios"><i className="material-icons">people_alt</i>Usuarios</Link></li>
      <li><Link to="/crear-producto"><i className="material-icons">add_circle</i>Agregar Producto</Link></li>
      <li><Link to="/crear-usuario"><i className="material-icons">person_add</i>Agregar Usuario</Link></li>
      <li><Link to="/crear-usuario"><i className="material-icons">post_add</i>Mantenedores</Link></li>
      <li><div class="divider"></div></li>
      <li><Link to="/login"><i className="material-icons">logout</i>Cerrar Sesión</Link></li>
    </ul >
  )
}