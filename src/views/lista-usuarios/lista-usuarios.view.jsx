import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs.component'
import { Link } from 'react-router-dom'
import Loader from '../../components/loader/loader.component'
import UserRepository from '../../repositories/user/user.repository'
import Table from '../../components/table/table.component';

export function ListaUsuariosView() {
  const pages = [{ url: '/home', name: 'Home' }]
  const [data, setData] = useState([])
  const [loader, setLoader] = useState(0)
  const headers = ['Id', 'Nombre', 'Rut', 'Alias', 'Cliente', 'Roles']

  useEffect(() => {
    setLoader(1)
    UserRepository.getAll()
      .then((products) => {
        const data = products.map(user => {
          const { id, firstName, lastName, dni, nickName, client, roles } = user
          const name = `${firstName ?? ''}${lastName ? ` ${lastName}` : ''}`
          const rolesNames = roles?.map(r => r.name).join(', ')
          return [<Link to={`/ver-usuario/${id}`}>{id}</Link>, <Link to={`/editar-usuario/${id}`}>{name}</Link>, dni, nickName, client?.name, rolesNames]
        })
        setData(data)
        setLoader(loader - 1)
      })
  }, [])
  return (
    <div>
      <Loader isLoading={loader > 0} />
      <Breadcrumbs pages={pages} />
      <div className="container">
        <div className="title-wrapper">
          <h1>Lista de usuarios</h1>
          <div className="tools">
            <Link to="/crear-usuario" className="btn waves-effect waves-light peanut">
              <i className="material-icons right">add</i>
              Crear nuevo
            </Link>
          </div>
        </div>
        <Table headers={headers} data={data}></Table>
      </div>
    </div>
  )
}
