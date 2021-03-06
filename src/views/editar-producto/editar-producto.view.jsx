import React, { useEffect, useState } from "react"
import "./editar-producto.view.css"
import { useHistory, useParams } from 'react-router-dom'
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.component"
import { ProductForm } from "../../components/forms/product-form/product-form.component"
import ProductRepository from "../../repositories/product/product-repository"
import Loader from "../../components/loader/loader.component"

export function EditarProductoView() {
  const { id } = useParams()
  const history = useHistory()
  const pages = [{ url: '/home', name: 'Home' }]

  const [loader, setLoader] = useState(0)
  const [product, setProduct] = useState(null)

  const onSubmit = (product) => {
    console.log('Se ha guardado', product)
    setLoader(1)
    ProductRepository.save(product).then(() => {
      setLoader(loader - 1)
      history.push('/lista-productos')
    })
  }

  useEffect(() => {
    setLoader(1)
    ProductRepository.getById(id).then((product) => {
      setProduct(product)
      setLoader(loader - 1)
    })
  }, [])

  return (
    <div className="container editar-producto">
      <Loader isLoading={loader > 0} />
      <Breadcrumbs pages={pages} />
      <h1>Editar Producto</h1>
      <div className="border-wrap">
        <ProductForm onSubmit={onSubmit} acceptLabel={'Editar Producto'} product={product} cancelUrl="/lista-productos" />
      </div>
    </div>
  )
}