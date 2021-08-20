import React, { useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min'
import './nav.css'

export default function Navbar() {
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', () => {
      const elems = document.querySelectorAll('#nav-mobile')
      M.Sidenav.init(elems)
    })
  }, [])

  return (
    <nav className="blue">
      <div className="nav-wrapper">
        <img
          src="/logo-morapavic-blanco.png"
          alt="Morapavic"
          style={{ height: '45px', margin: '11px 0 0 11px' }}
          className="brand-logo"
        />
        <a href="#top" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="/login" className="blue btn waves-effect waves-light">
              <i className="material-icons right">logout</i>
              Cerrar Sesión
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
