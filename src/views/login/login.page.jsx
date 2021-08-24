import React, { useState, useContext } from 'react'
import "./login.page.css"
import { useHistory } from 'react-router-dom'
import { login } from '../../services/authentication/authentication.service'
import Loader from '../../components/loader/loader.component'
import AppContext from '../../application/app-context/app-context'

export default function Login() {
  const [context, setContext] = useContext(AppContext)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory()

  const saveToken = (user, token) => {
    setContext({ ...context, user, token })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsLoading(true)
    login(username, password, saveToken).then((isValid) => {
      setIsLoading(false)
      if (isValid) {
        history.push('/home')
      }
    })
  }

  return (
    <div className="loginPage">
      <div className="container-login">
        <img src="/logo.png" alt="PeanutHub" width="40%" />
        <h1>Bienvenido al Inventario Peanut</h1>
        <Loader isLoading={isLoading} />
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <label htmlFor="username">
                Nombre de usuario
                <input id="username" type="text" onChange={(event) => setUsername(event.target.value)} />
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <label htmlFor="password">
                Contraseña
                <input id="password" type="text" onChange={(event) => setPassword(event.target.value)} />
              </label>
            </div>
          </div>

          <div className="row">
            <button className="peanut btn waves-effect waves-light" type="submit">
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
