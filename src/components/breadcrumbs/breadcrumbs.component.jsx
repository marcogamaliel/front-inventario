import React from 'react'
import { Link } from 'react-router-dom'

export default function Breadcrumbs({ pages }) {
  return (
    <div className="row" style={{ marginBottom: 0 }}>
      <div className="nav-wrapper">
        <div className="col s12">
          {pages.map((page) => (
            <Link to={page.url} key={page.name} className="breadcrumb  grey-text text-darken-3">{page.name}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}
