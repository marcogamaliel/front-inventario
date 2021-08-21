import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../../application/app-context/app-context'

export default function HomePage() {
  const [context] = useContext(AppContext)

  const { user } = context

  return (
    <div className="container">
      <h1>
        {`Bienvenido ${user?.names}`}
      </h1>
      <h4>Por el momento puedes:</h4>
      <ul className="collection">
        <Link to="/lista-productos" className="collection-item">Lista productos</Link>
        <Link to="/crear-producto" className="collection-item">Crear producto</Link>
        <Link to="/lista-usuarios" className="collection-item">Lista usuarios</Link>
      </ul>
    </div>
  )
}
