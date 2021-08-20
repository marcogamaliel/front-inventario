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
        <Link to="/doctors" className="collection-item">Crear o modificar los doctores.</Link>
        <Link to="/doctor-Levels" className="collection-item">Administrar los escalafones.</Link>
      </ul>
    </div>
  )
}
