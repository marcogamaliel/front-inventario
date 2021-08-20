import React from 'react'
import { Link } from 'react-router-dom'

export default function Breadcrumbs({ pages }) {
  return (
    <nav className="blue lighten-2 row" style={{ marginBottom: 0 }}>
      <div className="nav-wrapper">
        <div className="col s12">
          {pages.map((page) => (
            <Link to={page.url} key={page.name} className="breadcrumb">{page.name}</Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
