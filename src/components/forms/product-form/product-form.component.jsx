import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'
import M from 'materialize-css'
import { useEffect, useState } from "react"
import TagRepository from "../../../repositories/tag/tag.repository"
import UserRepository from "../../../repositories/user/user.repository"
import ConditionRepository from "../../../repositories/condition/condition.repository"

export function ProductForm(props) {
  const {
    register, errors, handleSubmit, setValue,
  } = useForm()

  const [tags, setTags] = useState([])
  const [users, setUsers] = useState([])
  const [conditions, setConditions] = useState([])

  if (props.product) {
    setValue('name', props.product.name)
    setValue('serialNumber', props.product.serialNumber)
    setValue('acquisitionDate', props.product.acquisitionDate)
    setValue('supplier', props.product.supplier)
    setValue('invoice', props.product.invoice)
    setValue('warrantyExpirationDate', props.product.warrantyExpirationDate)
    setValue('value', props.product.value?.amount)
    setValue('assignmentDate', props.product.assignmentDate)
  }

  useEffect(() => {
    TagRepository.getAll().then((tags) => {
      setTags(tags)
      M.FormSelect.init(document.querySelectorAll('#product-form-tags'))
      if (props.product?.tag) {
        const selectedTag = tags.find(t => t.name === props.product.tag)?.id ?? 'no'
        setValue('tags', selectedTag)
      }
    })
    UserRepository.getAll().then((users) => {
      setUsers(users)
      M.FormSelect.init(document.querySelectorAll('#product-form-users'))
      if (props.product?.user?.id) {
        const selectedUsers = tags.find(u => u.id === props.product.user.id)?.id ?? 'no'
        setValue('users', selectedUsers)
      }
    })
    ConditionRepository.getAll().then((conditions) => {
      setConditions(conditions)
      M.FormSelect.init(document.querySelectorAll('#product-form-conditions'))
      if (props.product?.condition) {
        const selectedCondition = conditions.find(c => c.name === props.product.condition)?.id ?? 'no'
        setValue('conditions', selectedCondition)
      }
    })
  })

  const { onSubmit, product, cancelUrl, acceptLabel } = props

  const onSubmitWrapper = (productUploaded) => {
    console.log(productUploaded)
    const fixProduct = {
      ...(product?.id && { id: product.id }),
      ...productUploaded,
      value: productUploaded.value ? { amount: productUploaded.value, currency: 'CLP' } : product?.value,
      tag: tags.find(t => t.id === productUploaded.tags)?.name,
      user: users.find(u => u.id === productUploaded.users),
      condition: conditions.find(c => c.id === productUploaded.conditions)?.name
    }
    onSubmit(fixProduct)
  }

  return (
    <form onSubmit={handleSubmit(onSubmitWrapper)}>

      <div className="row">
        <div className="input-field col m6 s12">
          <label className="active">Categoría</label>
          <select
            name="tags"
            id="product-form-tags"
            className={errors?.tags ? 'invalid' : 'valid'}
            {...register("tags", {
              required: { value: true, message: 'Se debe seleccionar la categoría' },
              validate: (value) => value !== 'no' || 'Se debe seleccionar una categoría',
            })}
          >
            <option value="no">Selecciona la categoría</option>
            {tags.map((tag) => (
              <option value={tag.id} key={`tag-${tag.id}`}>{tag.name}</option>
            ))}
          </select>
          <span className="brown-text">
            {errors?.tags?.message}
          </span>
        </div>
      </div>

      <div className="row">
        <div className="input-field col m4 s12">
          <label htmlFor="name" className={product?.name && 'active'}>Nombre Producto</label>
          <input
            id="product-form-name"
            name="name"
            type="text"
            className={errors?.name ? 'invalid' : 'valid'}
            {...register('name', {
              required: { value: true, message: 'es obligatorio' },
            })}
          />
          <span className="brown-text">
            {errors?.name?.message}
          </span>
        </div>
      </div>

      <div className="row">
        <div className="input-field col m4 s12">
          <label htmlFor="serialNumber" className={product?.serialNumber && 'active'}>Número de serie</label>
          <input
            id="serialNumber"
            name="serialNumber"
            type="text"
            className={errors?.serialNumber ? 'invalid' : 'valid'}
            {...register('serialNumber', {
              required: { value: true, message: 'es obligatorio' },
            })}
          />
          <span className="brown-text">
            {errors?.serialNumber?.message}
          </span>
        </div>
      </div>

      <div className="row">
        <div className="input-field col m4 s12">
          <label htmlFor="acquisitionDate" className={product?.acquisitionDate && 'active'}>Fecha de Compra</label>
          <input
            id="acquisitionDate"
            name="acquisitionDate"
            type="text"
            className={errors?.acquisitionDate ? 'invalid' : 'valid'}
            {...register('acquisitionDate', {
              required: { value: true, message: 'es obligatorio' },
            })}
          />
          <span className="brown-text">
            {errors?.acquisitionDate?.message}
          </span>
        </div>
      </div>

      <div className="row">
        <div className="input-field col m4 s12">
          <label htmlFor="supplier" className={product?.supplier && 'active'}>Proveedor</label>
          <input
            id="supplier"
            name="supplier"
            type="text"
            className={errors?.supplier ? 'invalid' : 'valid'}
            {...register('supplier', {
              required: { value: true, message: 'es obligatorio' },
            })}
          />
          <span className="brown-text">
            {errors?.supplier?.message}
          </span>
        </div>
      </div>

      <div className="row">
        <div className="input-field col m4 s12">
          <label htmlFor="invoice" className={product?.invoice && 'active'}>Número de Factura</label>
          <input
            id="invoice"
            name="invoice"
            type="text"
            className={errors?.invoice ? 'invalid' : 'valid'}
            {...register('invoice')}
          />
          <span className="brown-text">
            {errors?.invoice?.message}
          </span>
        </div>
      </div>

      <div className="row">
        <div className="input-field col m4 s12">
          <label htmlFor="warrantyExpirationDate" className={product?.warrantyExpirationDate && 'active'}>Fecha expiración Garantía</label>
          <input
            id="warrantyExpirationDate"
            name="warrantyExpirationDate"
            type="text"
            className={errors?.warrantyExpirationDate ? 'invalid' : 'valid'}
            {...register('warrantyExpirationDate')}
          />
          <span className="brown-text">
            {errors?.warrantyExpirationDate?.message}
          </span>
        </div>
      </div>

      <div className="row">
        <div className="input-field col m4 s12">
          <label htmlFor="value" className={product?.value && 'active'}>Costo de compra</label>
          <input
            id="value"
            name="value"
            type="text"
            className={errors?.value ? 'invalid' : 'valid'}
            {...register('value')}
          />
          <span className="brown-text">
            {errors?.value?.message}
          </span>
        </div>
      </div>

      <div className="row">
        <div className="input-field col m6 s12">
          <label className="active">Usuario</label>
          <select
            name="users"
            id="product-form-users"
            className={errors?.users ? 'invalid' : 'valid'}
            {...register("users", {
              required: { value: true, message: 'Se debe seleccionar la categoría' },
              validate: (value) => value !== 'no' || 'Se debe seleccionar una categoría',
            })}
          >
            <option value="no">Selecciona el usuario</option>
            {users.map((user) => (
              <option value={user.id} key={`user-${user.id}`}>
                {`${user.firstName}${user.lastName ? ` ${user.lastName}` : ''}`}
              </option>
            ))}
          </select>
          <span className="brown-text">
            {errors?.users?.message}
          </span>
        </div>
      </div>

      <div className="row">
        <div className="input-field col m6 s12">
          <label className="active">Condición</label>
          <select
            name="conditions"
            id="product-form-conditions"
            className={errors?.conditions ? 'invalid' : 'valid'}
            {...register("conditions", {
              required: { value: true, message: 'Se debe seleccionar la categoría' },
              validate: (value) => value !== 'no' || 'Se debe seleccionar una categoría',
            })}
          >
            <option value="no">Selecciona la condición</option>
            {conditions.map((condition) => (
              <option value={condition.id} key={`condition-${condition.id}`}>
                {condition.name}
              </option>
            ))}
          </select>
          <span className="brown-text">
            {errors?.conditions?.message}
          </span>
        </div>
      </div>

      <div className="row">
        <div className="input-field col m4 s12">
          <label htmlFor="assignmentDate" className={product?.assignmentDate && 'active'}>Fecha de assignación</label>
          <input
            id="assignmentDate"
            name="assignmentDate"
            type="text"
            className={errors?.assignmentDate ? 'invalid' : 'valid'}
            {...register('assignmentDate')}
          />
          <span className="brown-text">
            {errors?.assignmentDate?.message}
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