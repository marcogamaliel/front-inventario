import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'
import M from 'materialize-css'
import { useEffect, useState } from "react"
import ClientRepository from "../../../repositories/client/client.repository"
import RoleRepository from "../../../repositories/role/role.repository"

export function UserForm(props) {
  const {
    register, errors, handleSubmit, setValue,
  } = useForm()

  const [clients, setClients] = useState([])
  const [roles, setRoles] = useState([])

  if (props.user) {
    setValue('firstName', props.user.firstName)
    setValue('lastName', props.user.serialNumber)
    setValue('dni', props.user.dni)
    setValue('nickName', props.user.nickName)
  }

  useEffect(() => {
    ClientRepository.getAll().then((clients) => {
      setClients(clients)
      M.FormSelect.init(document.querySelectorAll('#user-form-clients'))
      if (props.user?.client) {
        const selectedTag = clients.find(c => c.name === props.user.client)?.id ?? 'no'
        setValue('clients', selectedTag)
      }
    })
    RoleRepository.getAll().then((roles) => {
      setRoles(roles)
      M.FormSelect.init(document.querySelectorAll('#user-form-roles'))
      if (props.user?.roles?.key) {
        const selectedUsers = clients.find(u => u.key === props.user.roles?.[0])?.key ?? 'no'
        setValue('roles', selectedUsers)
      }
    })
  })

  const { onSubmit, user, cancelUrl, acceptLabel } = props

  const onSubmitWrapper = (userUploaded) => {
    console.log(userUploaded)
    const fixUser = {
      ...(user?.id && { id: user.id }),
      ...userUploaded,
      client: clients.find(c => c.id === userUploaded.clients),
      roles: [roles.find(r => r.key === userUploaded.roles)],
    }
    onSubmit(fixUser)
  }

  return (
    <form onSubmit={handleSubmit(onSubmitWrapper)}>

      <div className="row">
        <div className="input-field col m4 s12">
          <label htmlFor="firstName" className={user?.firstName && 'active'}>Nombres</label>
          <input
            id="user-form-firstName"
            name="firstName"
            type="text"
            className={errors?.firstName ? 'invalid' : 'valid'}
            {...register('firstName', {
              required: { value: true, message: 'es obligatorio' },
            })}
          />
          <span className="brown-text">
            {errors?.firstName?.message}
          </span>
        </div>
      </div>

      <div className="row">
        <div className="input-field col m4 s12">
          <label htmlFor="lastName" className={user?.lastName && 'active'}>Apellidos</label>
          <input
            id="user-form-lastName"
            name="lastName"
            type="text"
            className={errors?.lastName ? 'invalid' : 'valid'}
            {...register('lastName', {
              required: { value: true, message: 'es obligatorio' },
            })}
          />
          <span className="brown-text">
            {errors?.lastName?.message}
          </span>
        </div>
      </div>

      <div className="row">
        <div className="input-field col m4 s12">
          <label htmlFor="dni" className={user?.dni && 'active'}>Rut</label>
          <input
            id="user-form-dni"
            name="dni"
            type="text"
            className={errors?.dni ? 'invalid' : 'valid'}
            {...register('dni', {
              required: { value: true, message: 'es obligatorio' },
            })}
          />
          <span className="brown-text">
            {errors?.dni?.message}
          </span>
        </div>
      </div>

      <div className="row">
        <div className="input-field col m4 s12">
          <label htmlFor="nickName" className={user?.nickName && 'active'}>Alias</label>
          <input
            id="user-form-nickName"
            name="nickName"
            type="text"
            className={errors?.nickName ? 'invalid' : 'valid'}
            {...register('nickName')}
          />
          <span className="brown-text">
            {errors?.nickName?.message}
          </span>
        </div>
      </div>

      <div className="row">
        <div className="input-field col m6 s12">
          <label className="active">Cliente</label>
          <select
            name="clients"
            id="user-form-clients"
            className={errors?.clients ? 'invalid' : 'valid'}
            {...register("clients", {
              required: { value: true, message: 'Se debe seleccionar la categoría' },
              validate: (value) => value !== 'no' || 'Se debe seleccionar una categoría',
            })}
          >
            <option value="no">Selecciona el cliente</option>
            {clients.map((client) => (
              <option value={client.id} key={`client-${client.id}`}>{client.name}</option>
            ))}
          </select>
          <span className="brown-text">
            {errors?.clients?.message}
          </span>
        </div>
      </div>

      <div className="row">
        <div className="input-field col m6 s12">
          <label className="active">Roles</label>
          <select
            name="roles"
            id="user-form-roles"
            className={errors?.roles ? 'invalid' : 'valid'}
            {...register("roles", {
              required: { value: true, message: 'Se debe seleccionar la categoría' },
              validate: (value) => value !== 'no' || 'Se debe seleccionar una categoría',
            })}
          >
            <option value="no">Selecciona el rol</option>
            {roles.map((role) => (
              <option value={role.key} key={`role-${role.key}`}>{role.name}</option>
            ))}
          </select>
          <span className="brown-text">
            {errors?.roles?.message}
          </span>
        </div>
      </div>

      <div className="right">
        {cancelUrl && <Link to={cancelUrl} className="btn waves-effect waves-light amber">Cancelar</Link>}
        <button className="btn waves-effect waves-light green" type="submit">
          {acceptLabel || "Aceptar"}
          <i className="material-icons right">send</i>
        </button>
      </div>
    </form>
  )
}