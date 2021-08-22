import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductRepository from '../../repositories/product/product-repository'
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs.component'
import Loader from '../../components/loader/loader.component'
import Table from '../../components/table/table.component'

export function ListaProductosView() {
  const pages = [{ url: '/home', name: 'Home' }]
  const [data, setData] = useState([])
  const [loader, setLoader] = useState(0)
  const headers = ['Id', 'Nombre', 'Tag', 'Número de serie', 'Fecha de adquisicón', 'Proveedor', 'Factura', 'Fecha expiración garantía', 'Costo', 'Usuario', 'Fecha de asignación', 'Condición', 'Estado']

  useEffect(() => {
    setLoader(1)
    ProductRepository.getAll()
      .then((products) => {
        const data = products.map(product => {
          const { id, name, tag, serialNumber, acquisitionDate, supplier, invoice, warrantyExpirationDate, value, user, assignmentDate, condition, state } = product
          return [<Link to={`/ver-producto/${id}`}>{id}</Link>, <Link to={`/editar-producto/${id}`}>{name}</Link>, tag, serialNumber, acquisitionDate, supplier, invoice, warrantyExpirationDate, value?.amount, `${user?.firstName ?? ''}${user?.lastName ? ` ${user.lastName}` : ''}`, assignmentDate, condition, state]
        })
        setData(data)
        setLoader(loader - 1)
      })
  }, [])

  return (
    <div>
      <Breadcrumbs pages={pages} />
      <Loader isLoading={loader > 0} />
      <div className="container">
        <h1>Lista de productos</h1>
        <Table headers={headers} data={data}></Table>
      </div>
    </div>
  )
}
