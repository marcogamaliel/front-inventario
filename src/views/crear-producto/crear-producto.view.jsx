import React, { useState } from "react"
import "./crear-producto.view.css"
import { useHistory } from "react-router-dom"
import ProductRepository from "../../repositories/product/product-repository"
import { ProductForm } from "../../components/forms/product-form/product-form.component"
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.component"
import Loader from "../../components/loader/loader.component"

export function CrearProductoView() {
  const pages = [{ url: '/home', name: 'Home' }]
  const history = useHistory()

  const [loader, setLoader] = useState(0)

  const onSubmit = (product) => {
    console.log('Se ha guardado', product)
    setLoader(1)
    ProductRepository.save(product)
      .then(() => {
        setLoader(loader - 1)
        history.goBack()
      })
  }

  return (
    <div className="container crear-producto">
      <Loader isLoading={loader > 0} />
      <Breadcrumbs pages={pages} />
      <h1>Crear Producto</h1>
      <div className="border-wrap">
        <ProductForm onSubmit={onSubmit} acceptLabel={'Crear Producto'} />
      </div>
    </div >
  )
}