import React, { useState } from "react"
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.component"
import { ProductForm } from "../../components/forms/product-form/product-form.component"

export function CrearProductoView() {
  const pages = [{ url: '/home', name: 'Home' }]


  const [loader, setLoader] = useState(0)

  const onSubmit = () => {
    console.log('Se ha guardado')
  }

  return (
    <div>
      <Breadcrumbs pages={pages} />
      <h1>Crear Producto</h1>
      <ProductForm onSubmit={onSubmit} />
    </div>
  )
}