import React, { useState } from "react"
import "./crear-usuario.view.css"
import { useHistory } from "react-router-dom"
import userRepository from "../../repositories/user/user.repository"
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.component"
import { UserForm } from "../../components/forms/user-form/user-form.component"
import Loader from "../../components/loader/loader.component"

export function CrearUsuarioView() {
  const pages = [{ url: '/home', name: 'Home' }]
  const history = useHistory()

  const [loader, setLoader] = useState(0)

  const onSubmit = (user) => {
    console.log('Se ha guardado', user)
    setLoader(1)
    userRepository.save(user)
      .then(() => {
        setLoader(loader - 1)
        history.goBack()
      })
  }

  return (
    <div className="container crear-usuario">
      <Loader isLoading={loader > 0} />
      <Breadcrumbs pages={pages} />
      <h1>Crear Usuario</h1>
      <div className="border-wrap">
        <UserForm onSubmit={onSubmit} acceptLabel={'Crear Usuario'} />
      </div>
    </div>
  )
}