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
      <Breadcrumbs pages={pages} />
      <Loader isLoading={loader > 0} />
      <div className="container">
        <h1>Lista de usuarios</h1>
        <Table headers={headers} data={data}></Table>
      </div>
    </div>
  )
}
