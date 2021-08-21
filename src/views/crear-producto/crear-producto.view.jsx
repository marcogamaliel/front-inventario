import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.component"
import { ProductForm } from "../../components/forms/product-form/product-form.component"
import ProductRepository from "../../repositories/product/product-repository"

export function CrearProductoView() {
  const pages = [{ url: '/home', name: 'Home' }]
  const history = useHistory()

  const [loader, setLoader] = useState(0)

  const onSubmit = (product) => {
    console.log('Se ha guardado', product)
    ProductRepository.save(product)
      .then(() => {
        history.goBack()
      })
  }

  return (
    <div>
      <Breadcrumbs pages={pages} />
      <h1>Crear Producto</h1>
      <ProductForm onSubmit={onSubmit} acceptLabel={'Crear Producto'} />
    </div>
  )
}