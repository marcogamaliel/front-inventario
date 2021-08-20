import React, { useState, useContext } from 'react'
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
    <div className="container">
      <div className="divider" style={{ marginTop: '50px' }} />
      <div className="row flex">
        <div className="col m6 s12">
          <h1>Login</h1>
          <Loader isLoading={isLoading} />
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col s12">
                <label htmlFor="username">
                  Nombre de usuario
                  <input id="username" type="text" onChange={(event) => setUsername(event.target.value)} />
                </label>
              </div>
              <div className="col s12">
                <label htmlFor="password">
                  Contraseña
                  <input id="password" type="password" onChange={(event) => setPassword(event.target.value)} />
                </label>
              </div>
            </div>
            <button className="green btn waves-effect waves-light right" type="submit">
              <i className="material-icons right">login</i>
              Entrar
            </button>
          </form>
        </div>
        <div className="col m6 hide-on-small-only valign-wrapper">
          <img
            className="responsive-img"
            src="/login-image.jpg"
            alt=""
            style={{ borderRadius: '10px', marginTop: '15px' }}
          />
        </div>
      </div>
      <div className="divider" />
    </div>
  )
}
