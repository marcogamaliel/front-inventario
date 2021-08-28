import React, { useEffect, useState } from 'react'
import "./lista-productos.view.css"
import { Link } from 'react-router-dom'
import ProductRepository from '../../repositories/product/product-repository'
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs.component'
import Loader from '../../components/loader/loader.component'
import Table from '../../components/table/table.component'
import ProductFilterForm from '../../components/forms/product-filter-form/product-filter-form.component'

export function ListaProductosView() {
  const pages = [{ url: '/home', name: 'Inicio' }]
  const [data, setData] = useState([])
  const [loader, setLoader] = useState(0)
  const headers = ['Id', 'Nombre', 'Tag', 'Número de serie', 'Fecha de adquisicón', 'Proveedor', 'Factura', 'Fecha expiración garantía', 'Costo', 'Usuario', 'Fecha de asignación', 'Condición', 'Estado']

  useEffect(() => {
    setLoader(1)
    ProductRepository.getAll()
      .then((products) => {
        const data = products.map(product => {
          const { id, name, tag, serialNumber, acquisitionDate, supplier, invoice, warrantyExpirationDate, value, user, assignmentDate, condition, state } = product
          const userName = user ? <Link to={`/ver-usuario/${id}`}>{`${user?.firstName ?? ''}${user?.lastName ? ` ${user.lastName}` : ''}`}</Link> : ''
          return [<Link to={`/ver-producto/${id}`}>{id}</Link>, name, tag, serialNumber, acquisitionDate, supplier, invoice, warrantyExpirationDate, value?.amount, userName, assignmentDate, condition, state]
        })
        setData(data)
        setLoader(loader - 1)
      })
  }, [])

  return (
    <div>
      <Loader isLoading={loader > 0} />
      <Breadcrumbs pages={pages} />
      <div className="container">
        <div className="title-wrapper">
          <h1>Lista de productos</h1>
          <div className="tools">
            <Link to="/crear-producto" className="btn waves-effect waves-light peanut">
              <i className="material-icons right">add</i>
              Crear nuevo
            </Link>
          </div>
        </div>
        <ProductFilterForm />
        <Table headers={headers} data={data}></Table>
      </div>
    </div>
  )
}
