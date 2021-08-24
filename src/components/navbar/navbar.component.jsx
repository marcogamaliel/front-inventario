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
          src="/logo.png"
          alt="Inventario"
          style={{ height: '40px', margin: '11px 0 0 11px' }}
          className="brand-logo"
        />
        <a href="#top" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      </div>
    </nav>
  )
}
