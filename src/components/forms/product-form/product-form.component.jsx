import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'
import M from 'materialize-css'

export function ProductForm(props) {
  const {
    register, errors, handleSubmit, setValue,
  } = useForm()

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

  const { onSubmit, product, cancelUrl, acceptLabel } = props

  const onSubmitWrapper = (productUploaded) => {
    const fixProduct = {
      ...(product?.id && { id: product.id }),
      ...productUploaded,
      value: productUploaded.value ? { amount: productUploaded.value, currency: 'CLP' } : product?.value,
    }
    onSubmit(fixProduct)
  }

  return (
    <form onSubmit={handleSubmit(onSubmitWrapper)}>
      <div className="row">
        <div className="input-field col m4 s12">
          <label htmlFor="name" className={product?.name && 'active'}>Nombre Producto</label>
          <input
            id="name"
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