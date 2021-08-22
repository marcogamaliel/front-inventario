import React, { useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom'
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.component"
import { UserForm } from "../../components/forms/user-form/user-form.component"
import UserRepository from "../../repositories/user/user.repository"
import Loader from "../../components/loader/loader.component"

export function EditarUsuarioView() {
  const { id } = useParams()
  const history = useHistory()
  const pages = [{ url: '/home', name: 'Home' }]

  const [loader, setLoader] = useState(0)
  const [user, setUser] = useState(null)

  const onSubmit = (user) => {
    console.log('Se ha guardado', user)
    UserRepository.save(user).then(() => {
      history.push('/lista-usuarios')
    })
  }

  useEffect(() => {
    setLoader(1)
    UserRepository.getById(id).then((user) => {
      setUser(user)
      setLoader(loader - 1)
    })
  }, [])

  return (
    <div>
      <Breadcrumbs pages={pages} />
      <Loader isLoading={loader > 0} />
      <h1>Editar Usuario</h1>
      <UserForm onSubmit={onSubmit} acceptLabel={'Editar Usuario'} user={user} cancelUrl="/lista-usuarios" />
    </div>
  )
}