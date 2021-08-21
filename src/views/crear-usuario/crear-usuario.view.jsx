import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.component"
import { UserForm } from "../../components/forms/user-form/user-form.component"
import userRepository from "../../repositories/user/user.repository"

export function CrearUsuarioView() {
  const pages = [{ url: '/home', name: 'Home' }]
  const history = useHistory()

  const [loader, setLoader] = useState(0)

  const onSubmit = (user) => {
    console.log('Se ha guardado', user)
    userRepository.save(user)
      .then(() => {
        history.goBack()
      })
  }

  return (
    <div>
      <Breadcrumbs pages={pages} />
      <h1>Crear Usuario</h1>
      <UserForm onSubmit={onSubmit} acceptLabel={'Crear Usuario'} />
    </div>
  )
}