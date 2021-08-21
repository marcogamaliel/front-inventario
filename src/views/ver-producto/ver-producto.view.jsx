import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import Breadcrumbs from "../../components/breadcrumbs/breadcrumbs.component"
import ProductRepository from "../../repositories/product/product-repository"
import Loader from "../../components/loader/loader.component"

export function VerProductoView() {
  const { id } = useParams()
  const pages = [{ url: '/home', name: 'Home' }]

  const [loader, setLoader] = useState(0)
  const [product, setProduct] = useState({})

  useEffect(() => {
    setLoader(1)
    ProductRepository.getById(id).then((product) => {
      setProduct(product)
      setLoader(loader - 1)
    })
  }, [])

  const userName = `${product.user?.firstName ?? ''}${product.user?.lastName ? ` ${product.user.lastName}` : ''}`

  return (
    <div>
      <Breadcrumbs pages={pages} />
      <Loader isLoading={loader > 0} />
      <h1>Detalle Producto {product.name}</h1>
      <ul>
        <li><b>Id: </b>{product.id}</li>
        <li><b>Nombre: </b>{product.name}</li>
        <li><b>Tag: </b>{product.tag}</li>
        <li><b>Número de serie: </b>{product.serialNumber}</li>
        <li><b>Fecha de adquisicón: </b>{product.acquisitionDate}</li>
        <li><b>Proveedor: </b>{product.supplier}</li>
        <li><b>Factura: </b>{product.invoice}</li>
        <li><b>Fecha expiración garantía: </b>{product.warrantyExpirationDate}</li>
        <li><b>Costo: </b>{product.value?.amount}</li>
        <li><b>Usuario: </b>{userName}</li>
        <li><b>Fecha de asignación: </b>{product.assignmentDate}</li>
        <li><b>Condición: </b>{product.condition?.name}</li>
        <li><b>Estado: </b>{product.state?.name}</li>
      </ul>
    </div>
  )
}