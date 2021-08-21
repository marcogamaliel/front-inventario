import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.component"
import Loader from "../../components/loader/loader.component"
import UserRepository from "../../repositories/user/user.repository"

export function VerUsuarioView() {
  const { id } = useParams()
  const pages = [{ url: '/home', name: 'Home' }]

  const [loader, setLoader] = useState(0)
  const [user, setUser] = useState({})

  useEffect(() => {
    setLoader(1)
    UserRepository.getById(id).then((user) => {
      setUser(user)
      setLoader(loader - 1)
    })
  }, [])

  const name = `${user?.firstName ?? ''}${user?.lastName ? ` ${user.lastName}` : ''}`

  return (
    <div>
      <Breadcrumbs pages={pages} />
      <Loader isLoading={loader > 0} />
      <h1>Perfil {name}</h1>
      <ul>
        <li><b>Id: </b>{user.id}</li>
        <li><b>Nombre: </b>{name}</li>
        <li><b>Rut: </b>{user.dni}</li>
        <li><b>Alias: </b>{user.nickName}</li>
        <li><b>Cliente: </b>{user.client?.name}</li>
        <li><b>Roles: </b>{user.roles?.map(r => r.name)?.join(', ')}</li>
      </ul>
    </div>
  )
}