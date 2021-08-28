import React from 'react'
import "./breadcrumbs.component.css"
import { Link } from 'react-router-dom'

export default function Breadcrumbs({ pages }) {
  return (
    <div className="row breadcrumb-wrapper">
      <div className="nav-wrapper">
        <div className="col s12">
          {pages.map((page, i) => (
            pages.length - 1 === i ?
              <b><Link to={page.url} key={page.name} className="breadcrumb  grey-text text-darken-3 bold">{page.name}</Link></b>
              :
              page.name
          ))}
        </div>
      </div>
    </div>
  )
}
